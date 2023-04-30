import { Heading, VStack, HStack, Stack, Text, Image, Button } from "@chakra-ui/react";
import { updateProductQty, deleteProduct } from "../store/Auth/auth.actions";
import { useDispatch } from "react-redux";

export default function CartProduct({ product, user, flexDirection }) {
	const { product_name, image_url, prices:{0:{price}}, qty } = product;
	console.log("PRODUCT",product)
	const { id: userId } = user;
	const dispatch = useDispatch();

	const handleQtyChange = (change) => {
		if (qty + change < 1) {
			return;
		}
		dispatch(updateProductQty(product, user, qty + change));
	};

	const handleDeleteProduct = () => {
		dispatch(deleteProduct(product, user));
	};

	return (
		<Stack
			direction={
				flexDirection === undefined ? ["column", "column", "column", "row"] : flexDirection
			}
			width="100%"
			border="1px solid black"
			justifyContent="space-between"
			alignItems={["stretch", "stretch", "stretch", "center"]}
			padding="20px"
			margin="auto"
			borderRadius="25px"
		>
			<Image src={image_url} width="200px" margin="auto" />
			<VStack flex="1" alignItems="strech" width="100%">
				<HStack justifyContent="space-between">
					<Text>{product_name}</Text>
					<Text>Rs. {price}</Text>
				</HStack>
				<hr />
				<HStack justifyContent="space-between">
					<Text>Final Price</Text>
					<Text>Rs. {price * qty}</Text>
				</HStack>
				<hr />
				<Stack
					justifyContent="space-between"
					alignItems="center"
					direction={["column", "row", "row", "row"]}
				>
					<Text>Quantity</Text>
					<HStack border="1px solid grey" borderRadius="20px">
						<Button
							backgroundColor="#00000000"
							fontSize="2xl"
							_hover={{}}
							onClick={() => handleQtyChange(-1)}
							borderRadius="100px"
						>
							-
						</Button>
						<Text>{qty}</Text>
						<Button
							backgroundColor="#00000000"
							fontSize="2xl"
							_hover={{}}
							onClick={() => handleQtyChange(1)}
							borderRadius="100px"
						>
							+
						</Button>
					</HStack>
					<Button onClick={handleDeleteProduct}>Delete</Button>
				</Stack>
			</VStack>
		</Stack>
	);
}
