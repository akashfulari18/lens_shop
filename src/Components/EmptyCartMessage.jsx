import { Text, VStack, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function EmptyCartMessage() {
	const navigate = useNavigate("/");

	return (
		<VStack
			width="100vw"
			height="100vh"
			border="1px solid black"
			justifyContent="center"
			alignItems="center"
			gap="30px"
		>
			<Text fontSize="4xl">Your shopping cart is empty!</Text>
			<Button
				colorScheme="cyan"
				width="fit-content"
				fontSize="xl"
				borderRadius="100px"
				padding="25px"
				onClick={() => navigate("/")}
			>
				Continue Shopping
			</Button>
		</VStack>
	);
}
