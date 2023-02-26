import { Input, HStack, VStack, Stack, Box, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Radio, RadioGroup, Text } from "@chakra-ui/react";
import { useReducer, useState, useEffect } from "react";
import { useSelector } from "react-redux";

const initialAddressInfo = {
	firstName: "",
	lastName: "",
	gender: "",
	phone: "",
	email: "",
	addressLine1: "",
	addressLine2: "",
	zip: "",
	city: "",
	country: "",
	state: "",
};

function reducer(state, action) {
	const [key, value] = action;
	return {
		...state,
		[key]: value,
	};
}

function isValidPhone(string) {
	return string.length == 10 && Number(string).toString() !== "NaN";
}

function isValidZip(string) {
	return string.length == 5 && Number(string).toString() !== "NaN";
}

function isValidEmail(string) {
	return string.length >= 11 && string.includes("@") && string.includes("mail.com");
}

export default function ShippingAdress({ contactInfo, setShippingAddress }) {
	const user = useSelector((state) => state.auth.user);
	if (contactInfo.isGuest == "No") {
		initialAddressInfo.firstName = user.firstname;
		initialAddressInfo.lastName = user.lastname;
	}
	if (isValidPhone(contactInfo.phone)) {
		initialAddressInfo.phone = contactInfo.phone;
	} else if (isValidEmail(contactInfo.email)) {
		initialAddressInfo.email = contactInfo.email;
	}

	const [addressInfo, dispatch] = useReducer(reducer, initialAddressInfo);
	const [error, setError] = useState(null);

	function validateAddressInfo() {
		setShippingAddress((state) => null);
		if (addressInfo.firstName.length == 0) {
			setError("First Name is invalid");
		} else if (addressInfo.lastName.length == 0) {
			setError("Last Name is invalid");
		} else if (addressInfo.gender !== "Male" && addressInfo.gender !== "Female") {
			setError("Gender is invalid");
		} else if (isValidPhone(addressInfo.phone) === false) {
			setError("Phone is invalid");
		} else if (isValidEmail(addressInfo.email) === false) {
			setError("Email is invalid");
		} else if (addressInfo.addressLine1.length == 0) {
			setError("Address Line 1 is invalid");
		} else if (addressInfo.addressLine2.length == 0) {
			setError("Address Line 2 is invalid");
		} else if (isValidZip(addressInfo.zip) === false) {
			setError("Zip is invalid");
		} else if (addressInfo.city.length == 0) {
			setError("City is invalid");
		} else if (addressInfo.country.length == 0) {
			setError("Country is invalid");
		} else if (addressInfo.state.length == 0) {
			setError("State is invalid");
		} else {
			setError(null);
			setShippingAddress((state) => addressInfo);
		}
	}

	useEffect(() => {
		validateAddressInfo();
	}, [addressInfo]);

	return (
		<VStack alignItems="stretch" spacing="5">
			<Text color="red" textAlign="center">
				{error === null ? null : error}
			</Text>
			<Stack direction={["column", "column", "row", "row"]}>
				<Input
					type="text"
					placeholder="First Name"
					isRequired={true}
					onChange={({ target: { value } }) => dispatch(["firstName", value])}
					value={addressInfo.firstName}
				/>
				<Input
					type="text"
					placeholder="Last Name"
					isRequired={true}
					onChange={({ target: { value } }) => dispatch(["lastName", value])}
					value={addressInfo.lastName}
				/>
			</Stack>
			<RadioGroup
				onChange={(value) => dispatch(["gender", value])}
				value={addressInfo.gender}
			>
				<Stack direction="row">
					<Text fontSize="lg" color="grey">
						Gender
					</Text>
					<Radio value="Male">Male</Radio>
					<Radio value="Female">Female</Radio>
				</Stack>
			</RadioGroup>
			<Stack direction={["column", "column", "row", "row"]}>
				<InputGroup>
					<InputLeftElement pointerEvents="none" children="+91" />
					<Input
						type="number"
						placeholder="Phone number"
						onChange={({ target: { value } }) => {
							if (value.length > 10) {
								return;
							}
							dispatch(["phone", value]);
						}}
						value={addressInfo.phone}
					/>
				</InputGroup>
				<Input
					type="email"
					placeholder="Email Address"
					isRequired={true}
					width={["100%", "100%", "95%", "95%"]}
					onChange={({ target: { value } }) => dispatch(["email", value])}
					value={addressInfo.email}
				/>
			</Stack>
			<hr />
			<Stack direction={["column", "column", "row", "row"]}>
				<Input
					type="text"
					placeholder="Address Line 1"
					isRequired={true}
					onChange={({ target: { value } }) => dispatch(["addressLine1", value])}
					value={addressInfo.addressLine1}
				/>
				<Input
					type="text"
					placeholder="Address Line 2"
					isRequired={true}
					onChange={({ target: { value } }) => dispatch(["addressLine2", value])}
					value={addressInfo.addressLine2}
				/>
			</Stack>
			<Stack direction={["column", "column", "row", "row"]}>
				<Input
					type="number"
					placeholder="Zip / Postal Code"
					isRequired={true}
					onChange={({ target: { value } }) => {
						if (value.length > 5) {
							return;
						}
						dispatch(["zip", value]);
					}}
					value={addressInfo.zip}
				/>
				<Input
					type="text"
					placeholder="City / District"
					isRequired={true}
					onChange={({ target: { value } }) => dispatch(["city", value])}
					value={addressInfo.city}
				/>
			</Stack>
			<Stack direction={["column", "column", "row", "row"]}>
				<Input
					type="text"
					placeholder="Country"
					isRequired={true}
					onChange={({ target: { value } }) => dispatch(["country", value])}
					value={addressInfo.country}
				/>
				<Input
					type="text"
					placeholder="State"
					isRequired={true}
					onChange={({ target: { value } }) => dispatch(["state", value])}
					value={addressInfo.state}
				/>
			</Stack>
		</VStack>
	);
}
