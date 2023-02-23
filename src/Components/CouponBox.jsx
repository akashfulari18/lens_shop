import { Button, VStack, Box, HStack, Text } from "@chakra-ui/react";
import CouponDrawer from "./CouponDrawer";

export default function CouponBox({ isCouponApplied, discountAmount, setIsCouponApplied }) {
	const openModal = (event) => {};

	if (isCouponApplied == false) {
		return (
			<HStack justifyContent="space-between" padding="15px">
				<VStack alignItems="stretch">
					<Text fontWeight="bold" fontSize="lg">
						Apply Coupon
					</Text>
					<Text>Check available offers</Text>
				</VStack>
				<CouponDrawer setIsCouponApplied={setIsCouponApplied}/>
			</HStack>
		);
	}
	if (isCouponApplied == true) {
		return (
			<HStack justifyContent="space-between" padding="15px">
				<VStack alignItems="stretch">
					<Text fontWeight="bold" fontSize="lg">
						Coupon is applied
					</Text>
					<Text>You are saving {discountAmount}</Text>
				</VStack>
				<Button onClick={() => setIsCouponApplied(false)}>Remove</Button>
			</HStack>
		);
	}
}
