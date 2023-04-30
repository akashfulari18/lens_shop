import { Heading, Box, Stack, VStack, HStack, Text } from "@chakra-ui/react";
import PaymentProcess from "../Components/CheckoutComponents/PaymentProcess";
import Bill from "../Components/Bill";
import { useLocation } from "react-router-dom";
import CartProduct from "../Components/CartProduct";
import { useSelector } from "react-redux";
import FAQ from "../Components/CheckoutComponents/FAQ";

function getCartPrice(cart) {
	let total = 0;
	for (let item of cart) {
		total += item.prices[0].price * item.qty;
	}
	return total;
}

export default function Checkout(props) {
	let { state } = useLocation();
	const user = useSelector((state) => state.auth.user);
	const cartProducts = useSelector((state) => state.auth.user.cart);

	state = {
		...state,
		cartPrice: getCartPrice(user.cart),
		cartProducts,
		user,
	};

	return (
		<>
			<Stack
				direction={["column", "column", "column", "row"]}
				justifyContent="space-between"
				padding={["10px 50px", "10px 50px", "10px 50px", "10px 100px"]}
			>
				<VStack width={["100%", "100%", "100%", "59%"]} minHeight="100vh">
					<Heading fontWeight="bold" padding="10px" fontSize="2xl" color="#009999">
						Shipping Address
					</Heading>
					<PaymentProcess />
				</VStack>
				<VStack width={["100%", "100%", "100%", "40%"]} minHeight="100vh">
					<Heading fontWeight="bold" padding="10px" fontSize="2xl" color="#009999">
						Cart Summary
					</Heading>
					{cartProducts.map((product) => (
						<CartProduct
							key={product.id}
							product={product}
							user={state.user}
							flexDirection="column"
						/>
					))}
					<Bill {...state} />
				</VStack>
			</Stack>
			<FAQ />
		</>
	);
}
