import {
	VStack,
	InputGroup,
	InputLeftElement,
	Input,
	Radio,
	RadioGroup,
	Button,
	Text,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function ContactForm({ setContactInfo }) {
	const [isGuest, setIsGuest] = useState("Yes");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		handleContactSubmission();
	}, [phone, email]);

	const handleContactSubmission = (event) => {
		const contactInfo = {
			isGuest,
			phone,
			email,
		};
		if (isGuest == "Yes") {
			if (isValidPhone(phone) == true) {
				console.log("it is valid phone number", Math.random());
				setError(null);
				setContactInfo(contactInfo);
			} else {
				setError("Invalid phone number");
				setContactInfo(null);
			}
		} else if (isGuest == "No") {
			if (isValidPhone(phone) == true || isValidEmail(email) == true) {
				console.log("it is valid phone number", Math.random());
				setError(null);
				setContactInfo(contactInfo);
			} else {
				setError("Invalid phone or email");
				setContactInfo(null);
			}
		}
	};

	return (
		<VStack alignItems="start">
			<Text fontWeight="bold">
				{isGuest == "Yes" ? "Enter Phone Number" : "Enter Phone Number or Email Address"}
			</Text>
			{isGuest == "Yes" ? (
				<InputGroup>
					<InputLeftElement pointerEvents="none" children="+91" />
					<Input
						type="number"
						placeholder="Phone number"
						width="300px"
						value={phone}
						onChange={({ target: { value } }) => {
							if (value.length <= 10) {
								setPhone(value);
							}
						}}
					/>
				</InputGroup>
			) : (
				<Input
					type="text"
					placeholder="Phone / Email"
					width="300px"
					onChange={({ target: { value } }) => {
						if (value.length <= 10) {
							setPhone(value);
						}
						setEmail(value);
					}}
				/>
			)}
			{error !== null ? <Text color="red">{error}</Text> : null}
			<RadioGroup onChange={setIsGuest} value={isGuest}>
				<VStack direction="row" alignItems="start">
					<Radio value={"Yes"}>Checkout as guest</Radio>
					<Radio value={"No"}>Continue with the account</Radio>
				</VStack>
			</RadioGroup>
		</VStack>
	);
}

function isValidPhone(string) {
	return string.length == 10 && Number(string).toString() !== "NaN";
}

function isValidEmail(string) {
	return string.length >= 11 && string.includes("@") && string.includes("mail.com");
}
