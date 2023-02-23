import { Input, HStack, VStack, Stack, Box, InputGroup, InputLeftElement } from "@chakra-ui/react";

export default function ShippingAdress({ phone, email }) {
	return (
		<Box>
			<Stack direction={["column", "column", "row", "row"]}>
				<Input placeholder="First Name*" isRequired={true} />
				<Input placeholder="Last Name*" isRequired={true} />
			</Stack>
			<Stack>
				<InputGroup>
					<InputLeftElement pointerEvents="none" children="+91" />
					<Input type="tel" placeholder="Phone number" />
				</InputGroup>
			</Stack>
		</Box>
	);
}
