import { Heading, Box, Stack, VStack, HStack } from "@chakra-ui/react";

export default function Checkout() {
	return (
		<Stack
			onKeyPress={(event) => {
				console.log("key is pressed");
			}}
		>
			<VStack>Accordion</VStack>
			<VStack>Cart Summary</VStack>
		</Stack>
	);
}
