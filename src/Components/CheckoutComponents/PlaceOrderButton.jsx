import { Button, CircularProgress, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteAllProductsInCart } from "/src/store/Auth/auth.actions";

export default function PlaceOrderButton({ isDisabled }) {
	const toast = useToast();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	return (
		<Button
			colorScheme="teal"
			padding="25px 50px"
			isDisabled={isDisabled}
			onClick={() => {
				toast({
					title: "Payment is successful",
					description: "You will receive your products within 24hr",
					status: "success",
					duration: 5000,
					isClosable: true,
				});
				dispatch(deleteAllProductsInCart());
				navigate("/");
			}}
		>
			Place Order
		</Button>
	);
}
