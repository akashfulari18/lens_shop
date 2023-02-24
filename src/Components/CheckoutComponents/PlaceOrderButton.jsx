import { Button } from "@chakra-ui/react";

export default function PlaceOrderButton({ isDisabled }) {
	return (
		<Button
			colorScheme="teal"
			padding="25px 50px"
			isDisabled={isDisabled}
			onClick={() => {
				console.log("Place Order");
			}}
		>
			Place Order
		</Button>
	);
}
