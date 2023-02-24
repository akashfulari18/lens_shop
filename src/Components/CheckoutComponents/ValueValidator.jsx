import { Text } from "@chakra-ui/react";

export default function ValueValidator({
	value = "",
	validator = () => {},
	validValueMessage = "Valid",
	invalidValueMessage = "Invalid",
}) {
	const isValueValid = validator(value);
	return (
		<Text color={isValueValid ? "green" : "red"}>
			{isValueValid ? validValueMessage : invalidValueMessage}
		</Text>
	);
}
