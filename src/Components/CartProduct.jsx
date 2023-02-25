import { Heading, VStack, HStack, Stack, Text, Image, Button } from "@chakra-ui/react";
import { updateProductQty, deleteProduct } from "../store/Auth/auth.actions";
import { useDispatch } from "react-redux";

export default function CartProduct({ product, user, flexDirection }) {
	const {
		brand_name,
		image_url,
		price,
		qty,
	} = product;
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
			<VStack flex="1" alignItems="strech">
				<HStack justifyContent="space-between" fontSize={["lg", "lg", "lg", "xl"]}>
					<Text>{brand_name}</Text>
					<Text>Rs. {price}</Text>
				</HStack>
				<hr />
				<HStack justifyContent="space-between" fontSize={["md", "md", "md", "lg"]}>
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

var dummyCartProduct = {
	id: "148659",
	qty: 2,
	image_url:
		"https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/blue-block-phone-&-computer-glasses:-blue-black-full-rim-rectangle-lenskart-air-flex-la-e13780-c1_lenskart-air-la-e13780-c1-eyeglasses_g_9954_123_02_2022.jpg",
	image_url_suffix:
		"/l/i/blue-block-phone-&-computer-glasses:-blue-black-full-rim-rectangle-lenskart-air-flex-la-e13780-c1_lenskart-air-la-e13780-c1-eyeglasses_g_9954_123_02_2022.jpg",
	imageUrls: [],
	product_url: "https://www.lenskart.com/lenskar-air-la-e13780-c1-pc-eyeglasses.html",
	color: "#0000ff",
	size: "Medium",
	width: "136 mm",
	brand_name: "Lenskart Air Computer Glasses",
	brand_name_en: "Lenskart Air Computer Glasses",
	brand_logo: "https://static.lenskart.com/media/wysiwyg/blanco/images/air-logo-Hi.jpg",
	model_name: "LA E13780",
	prices: [
		{
			name: "Market Price",
			currency_code: "INR",
			price: 3000,
		},
		{
			name: "Lenskart Price",
			currency_code: "INR",
			price: 1700,
		},
	],
	is_tbyb: false,
	tags: "Zero Power",
	color_options: [],
	totalColorAvailable: 0,
	is_ditto: true,
	sku: "eye:lenskart-air-la-e13780-c1-eye-dup",
	hover_image_url:
		"https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/blue-block-phone-&-computer-glasses:-blue-black-full-rim-rectangle-lenskart-air-flex-la-e13780-c1_lenskart-air-la-e13780-c1-eyeglasses_g_9953_123_02_2022.jpg",
	classification: "eyeframe",
	specifications: [],
	wishlistCount: 5803,
	purchaseCount: 2868,
	avgRating: 4.65,
	totalNoOfRatings: "123",
	hashtagList: [
		{
			name: "Medium",
			id: 11341,
			property: "frame_size_id",
		},
		{
			name: "Rectangle",
			id: 11345,
			property: "frame_shape_id",
		},
		{
			name: "Lenskart Air Computer Glasses",
			id: 22914,
			property: "brandname_id",
		},
		{
			name: "Full Rim",
			id: 11370,
			property: "frametype_id",
		},
	],
	offerName: "FESTIVE70",
	cmsLinkAndroid: "https://www.lenskart.com/cms-frame-size",
	cmsLinkIos: "https://www.lenskart.com/cms-frame-size-ios",
	arModelAndroidUrl:
		"https://3d-asset-lookr.s3-ap-southeast-1.amazonaws.com/frameassets/148659/android/sku_148659.glb",
	arModelIOSUrl:
		"https://3d-asset-lookr.s3-ap-southeast-1.amazonaws.com/frameassets/148659/ios/sku_148659.scn",
	arModelMsiteAndDesktopUrl: "",
	arModelOriginalUrl:
		"https://3d-asset-lookr.s3-ap-southeast-1.amazonaws.com/frameassets/148659/orignal/sku_148659.glb",
	frameColorImage: "https://ds-static.lenskart.com/product_color_bubble_images/148659_bubble.png",
	relatedItems: [],
	isCygnusEnabled: true,
};
