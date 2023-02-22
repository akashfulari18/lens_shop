import { Heading, VStack, HStack, Text } from "@chakra-ui/react";

export default function Bill({ cartPrice, isCouponApplied, discount }) {
	const couponDiscount = cartPrice * (isCouponApplied ? discount : 0);
	const netAmount = cartPrice - couponDiscount;
	const tax = 0.18 * netAmount;
	const totalPayable = netAmount + tax;

	return (
		<VStack alignItems="strech" border="1px solid black" borderRadius="20px" padding="15px">
			<HStack justifyContent="space-between">
				<Text>Total Price</Text>
				<Text>Rs. {cartPrice}</Text>
			</HStack>
			{isCouponApplied ? (
				<>
					<hr />
					<HStack justifyContent="space-between">
						<Text>Coupon Discount</Text>
						<Text>-Rs. {couponDiscount}</Text>
					</HStack>
					<HStack justifyContent="space-between" fontWeight="bold">
						<Text>Net Amount</Text>
						<Text>Rs. {netAmount}</Text>
					</HStack>
				</>
			) : null}
			<hr />
			<HStack justifyContent="space-between">
				<Text>Tax</Text>
				<Text>Rs. {tax}</Text>
			</HStack>
			<HStack justifyContent="space-between" fontWeight="bold">
				<Text>Total Payable</Text>
				<Text>Rs. {totalPayable}</Text>
			</HStack>
		</VStack>
	);
}


