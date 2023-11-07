'use client';
import Feedback from '@/components/Feedback';
import Header from '@/components/Header';
import styled from '@emotion/styled';
import { Button, TextField, ThemeProvider } from '@mui/material';
import axios from 'axios';
import { ChangeEvent, useState } from 'react';
import { saveUserInfo } from '@/services/localDataManager';
import { theme } from '@/theme/theme';

interface ValidationErrors {
	isFormValid: boolean;
	errorArray: string[]; // You can use a specific type for error messages, e.g., string
}

const BoardDisplay = styled.div`
	width: 80%;
	margin: auto;
`;
const SearchLogoDisplay = styled.div`
	display: flex;
	justify-content: center;
	img {
		width: 20%;
		height: auto;
		margin: auto;
	}
`;

const CustomButton = styled(Button)`
  background-color: #0f2336;
  color: #f5be62;
  &:hover {
    background-color: #16324d;
  }
`;

const FormDisplay = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 30%;
	margin: auto;
`;

export default function Login() {
	// const router = useRouter()

	const [ formInputs, setFormInputs ] = useState<FormInputs>({});

	const [ requestErrorAwnser, setRequestErrorAwnser ] = useState<string>('');
	const [ requestAwnser, setRequestAwnser ] = useState(false);
	const [ validationErrors, setValidationErrors ] = useState<ValidationErrors>({
		isFormValid: true,
		errorArray: []
	});

	interface FormInputs {
		[key: string]: string;
	}

	const isValidEmail = (email: string) => {
		return /\S+@\S+\.\S+/.test(email);
	};

	const validadeInputs = () => {
		setValidationErrors({ isFormValid: true, errorArray: [] });
		let formErrors = [];
		if (!formInputs.username || formInputs.username == '') {
			formErrors.push('You need to fill the user field ');
		}
		if (!formInputs.password) {
			formErrors.push('You need to fill the password field ');
		}
		if (!formInputs.passwordConfirm) {
			formErrors.push('You need to fill the password confirm field ');
		}
		if (!formInputs.email) {
			formErrors.push('You need to fill the email field ');
		}

		if (!isValidEmail(formInputs.email)) {
			formErrors.push('Invalid email format');
		}

		if (formInputs.password && formInputs.passwordConfirm && formInputs.password !== formInputs.passwordConfirm) {
			formErrors.push('Password check must be equals to Password ');
		}

		if (formErrors.length === 0) {
			setValidationErrors({ isFormValid: true, errorArray: [] });
			return true;
		}
		setValidationErrors({ isFormValid: false, errorArray: formErrors });
		return false;
	};

	const loginUser = async () => {
		await axios
			.post('http://localhost:4000/auth/singin', {
				formInputs
			})
			.then((response) => {
				setRequestAwnser(response.data);
				let { id, name, token } = response.data;
				saveUserInfo(id, token, name);
				location.assign('http://localhost:3000/recipes');
			})
			.catch((error) => {
				setRequestErrorAwnser(error.response.data);
			});
	};

	const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = evt.target;
		setFormInputs({
			...formInputs,
			[name]: value
		});
	};

	

	return (
		<ThemeProvider theme={theme}>
			<main>
			<Header />
			<BoardDisplay>
				<SearchLogoDisplay>
					<img src="/logo.png" alt="Cocktail recipe logo" />
				</SearchLogoDisplay>
				<FormDisplay>
					<TextField
						// id="filled-basic"
						label="email"
						variant="filled"
						name="email"
						value={formInputs['email'] || ''}
						onChange={handleChange}
					/>
					<TextField
						// id="filled-basic"
						type="password"
						label="Password"
						variant="filled"
						name="password"
						value={formInputs['password'] || ''}
						onChange={handleChange}
					/>

					{/* 
					{validationErrors.errorArray.length == 0 &&
					requestErrorAwnser != '' && <Feedback status={requestErrorAwnser} success={false} display={true} />} */}

					<CustomButton
						onClick={() => {
							loginUser();
						}}
					>
						Login
					</CustomButton>
				</FormDisplay>
			</BoardDisplay>
		</main>
	</ThemeProvider>
		

	);
}
