import * as React from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';
import { AppBar, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { logout, getUserInfo } from '../services/localDataManager';
import UserAvatar from '../components/UserAvatar';
import { userInfo } from 'os';

const HeaderBarDisplay = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

const UserDisplay = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export default function LogoArea() {
	const [ anchorEl, setAnchorEl ] = React.useState<null | HTMLElement>(null);
	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const verifyUserName = () => {
		let localUserInfo = getUserInfo();
		if (localUserInfo) {
			console.log('Local user info', localUserInfo.user);
			return localUserInfo.user;
		}
		return false;
	};
	const UserName = verifyUserName();
	const logoutUser = () => {
		console.log('Logout user');
		logout();
		location.assign('http://localhost:3000/login');
	};

	const LoggedArea = () => {
		return (
			<div>
				<IconButton
					size="large"
					aria-label="account of current user"
					aria-controls="menu-appbar"
					aria-haspopup="true"
					onClick={handleMenu}
					color="inherit"
				>
					<UserDisplay>
						<Typography>{UserName} </Typography>
						<UserAvatar userName={UserName} />
					</UserDisplay>
				</IconButton>
				<Menu
					id="menu-appbar"
					anchorEl={anchorEl}
					anchorOrigin={{
						vertical: 'middle',
						horizontal: 'right'
					}}
					keepMounted
					transformOrigin={{
						vertical: 'top',
						horizontal: 'right'
					}}
					open={anchorEl}
					onClose={handleClose}
				>
					<MenuItem
						onClick={() => {
							logoutUser();
						}}
					>
						Logout
					</MenuItem>
					{/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
				</Menu>
			</div>
		);
	};

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<HeaderBarDisplay>
					<Image
						src="/logo_minimal.png"
						width={150}
						height={50}
						alt="Picture of the Coocktail recipes logo"
					/>
          {(UserName) && <>					<Button color="inherit">{LoggedArea()}</Button></>}

				</HeaderBarDisplay>
			</AppBar>
		</Box>
	);
}
