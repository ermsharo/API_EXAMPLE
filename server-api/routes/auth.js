const { Op } = require("sequelize");
const express = require("express");
const User = require("../models/User");
const router = express.Router();
const bcrypt = require("bcrypt");
require("dotenv-safe").config();

const jwt = require("jsonwebtoken");

router.post("/auth/singup", async (req, res) => {
  const { username, email, password, passwordConfirm } = req.body.formInputs;
  console.log("Aqui esta ", username, email, password, passwordConfirm);

  if (!(email && password && username && passwordConfirm)) {
    return res.status(400).send("Form data is missing");
  }

  if (password != passwordConfirm)
    return res.status(400).send("Password check is diferent from password");

  const getUserByUsername = await User.findOne({
    where: { userName: username },
  });
  if (getUserByUsername === null) {
    //This username is free for use
    const getEmailByEmailtext = await User.findOne({ where: { email: email } });
    if (getEmailByEmailtext === null) {
      encryptedPassword = await bcrypt.hash(password, 10);
      const userCreated = await User.create({
        userName: username,
        email: email.toLowerCase(),
        password: encryptedPassword,
      });

      if (userCreated) {
        console.log("User created here", userCreated.dataValues);
        const {
          email: CreatedUserEmail,
          userName: CreatedUserName,
          password: CreatedUserPassword,
          id: CreateUserId,
        } = userCreated.dataValues;
        console.log("Create user mail", CreatedUserEmail);
        console.log("Create user name", CreatedUserName);
        console.log("Create user mail", CreatedUserPassword);
        if (bcrypt.compareSync(password, CreatedUserPassword)) {
          console.log("Login operation work");
          const token = jwt.sign({ CreateUserId }, process.env.SECRET, {
            expiresIn: 3600,
          });

          return res.status(200).json({
            id: CreateUserId,
            name: CreatedUserName,
            token: token,
          });
        }
      }

      return res.status(200).send("User susseful created");
    } else {
      return res
        .status(400)
        .send("Alredy exist a acoount with this email adrress");
    }
  } else {
    return res.status(400).send("Alredy exist a account with this username");
  }

  [];
});

router.post("/auth/singin", async (req, res) => {
  const { email, password } = req.body.formInputs;

  const getUserByMail = await User.findOne({ where: { email: email } });
  if (getUserByMail == null) {
    return res.status(400).send("User or password invalid");
  }
  console.log("User by mail", getUserByMail);
  const userByMail = getUserByMail.dataValues;

  if (
    userByMail.email == email &&
    bcrypt.compareSync(password, userByMail.password)
  ) {
    let userId = userByMail.id;
    const token = jwt.sign({ userId }, process.env.SECRET, {
      expiresIn: 3600,
    });

    return res.status(200).json({
      id: userByMail.id,
      name: userByMail.userName,
      token: token,
    });
  }

  return res.status(400).send("User or password invalid");
});

module.exports = router;
