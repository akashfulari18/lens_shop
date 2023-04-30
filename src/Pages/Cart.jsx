import { Heading, Box, Button, Text, Stack, VStack } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import EmptyCartMessage from "../Components/EmptyCartMessage";
import CartProduct from "../Components/CartProduct";
import Bill from "../Components/Bill";
import { useState } from "react";
import CouponBox from "../Components/CouponBox";
import { useToast } from "@chakra-ui/react";

export default function Cart() {
	const isAuth = useSelector((state) => state.auth.isAuth);
	const user = useSelector((state) => state.auth.user);
	const cartProducts = user?.cart;
	const navigate = useNavigate();
	const location = useLocation()
	const [isCouponApplied, setIsCouponApplied] = useState(false);
	const discount = 0.6;
	const toast = useToast();

	if (isAuth == false) {
		toast({
			title: "Please login to see your cart",
			status: "warning",
			duration: 2000,
			isClosable: true,
		});
		return <Navigate to="/" />;
	}

	if (cartProducts.length == 0) {
		return <EmptyCartMessage />;
	}
	console.log(location)
	function goBack() {
		window.history.back();
	  }
	return (
		<>
		<Stack
			paddingLeft={["50px", "50px", "100px", "100px"]}
			paddingRight={["50px", "50px", "100px", "100px"]}
			gap="30px"
			justifyContent="space-between"
			flexDirection={["column", "column", "column", "row"]}
			marginBottom="50px"
			pt={"2rem"}
		> 
		<Button onClick={()=>goBack()} border={"1px solid aqua"} backgroundColor={"cyan.400"} color={"white"} m={"auto"}> {"<"} Go Back</Button>
			<VStack gap="15px" alignItems="stretch" justifyContent="flex-start" flexGrow="1">
				<Text fontSize="3xl">Cart {`(${cartProducts.length} items)`}</Text>
				<VStack gap="15px">
					{cartProducts.map((product) => (
						<CartProduct key={product.id} product={product} user={user} />
					))}
				</VStack>
			</VStack>
			<VStack gap="15px" alignItems="stretch" justifyContent="flex-start" flexGrow="1">
				<Text fontSize="3xl">Bill Details</Text>
				<Bill
					cartPrice={getCartPrice(user.cart)}
					isCouponApplied={isCouponApplied}
					discount={discount}
				/>
				<Box
					bg="orange.300"
					border="1px solid"
					borderColor="orange.700"
					padding="15px"
					borderRadius="20px"
				>
					<Text fontSize={["sm", "lg", "lg"]} fontWeight="bold">
						COOL STYLES
					</Text>
					<Text>Extra 60% OFF on Net Amount!</Text>
				</Box>
				<CouponBox
					isCouponApplied={isCouponApplied}
					discountAmount={getCartPrice(user.cart) * discount}
					setIsCouponApplied={setIsCouponApplied}
				/>
				<Button
					onClick={() =>
						navigate("/checkout", {
							state: {
								cartPrice: getCartPrice(user.cart),
								isCouponApplied,
								discount,
							},
						})
					}
					colorScheme="teal"
				>
					Proceed To Checkout
				</Button>
			</VStack>
		</Stack>
		</>
	);
}

function getCartPrice(cart) {
	let total = 0;
	for (let item of cart) {
		total += item.prices[0].price * item.qty;
	}
	return total;
}
