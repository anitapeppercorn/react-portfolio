import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
	const [formState, setFormState] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [errorMessage, setErrorMessage] = useState('');

	const { name, email, message } = formState;

	function handleChange(e) {
		if (e.target.name === 'email') {
			const isValid = validateEmail(e.target.value);

			if (!isValid) {
				setErrorMessage('Your email is invalid.');
			} else {
				setErrorMessage('');
			}
		} else {
			if (!e.target.value.length) {
				setErrorMessage(`${e.target.name} is required.`);
			} else {
				setErrorMessage('');
			}
		}

		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
	}

	function handleSubmit(e) {
		e.preventDefault();
		console.log(formState);
	}

	return (
		<section className= 'modalContainer'>
			<h1 data-testid='contact-h1'>Contact me</h1>
			<form id='contact-form' onSubmit={handleSubmit}>
				<div>
					<label htmlFor='name'>Name:</label>
					<input
						classname = 'input'
						type='text'
						name='name'
						defaultValue={name}
						onBlur={handleChange}
					/>
				</div>
				<div>
					<label htmlFor='email'>Email:</label>
					<input
						classname = 'input'
						type='email'
						name='email'
						defaultValue={email}
						onBlur={handleChange}
					/>
				</div>
				<div>
					<label htmlFor='message'>Message:</label>
					<input
						classname = 'input'
						type='text'
						rows='5'
						name='message'
						defaultValue={message}
						onBlur={handleChange}
					/>
				</div>
				{errorMessage && (
					<div>
						<p className='error-text'>{errorMessage}</p>
					</div>
				)}
				<button type='submit' data-testid='contact-submit'>
					Submit
				</button>
			</form>
		</section>
	);
}

export default ContactForm;
