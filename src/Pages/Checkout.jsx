import { Heading, Box, Stack, VStack, HStack, Text } from "@chakra-ui/react";
import PaymentProcess from "../Components/CheckoutComponents/PaymentProcess";

export default function Checkout() {
	return (
		<Stack
			direction={["column", "column", "column", "row"]}
			justifyContent="space-between"
			padding="10px 100px"
		>
			<VStack border="1px solid black" borderRadius="15px" flexGrow="2" minHeight="100vh">
				<PaymentProcess />
			</VStack>
			<VStack border="1px solid black" borderRadius="15px" flexGrow="1" minHeight="100vh">
				<Text>Cart Summary</Text>
			</VStack>
		</Stack>
	);
}
