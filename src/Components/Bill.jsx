import { Heading, VStack, HStack, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateTotalPayable } from "/src/store/Auth/auth.actions";

function getTotals(cartPrice, isCouponApplied, discount) {
	const couponDiscount = cartPrice * (isCouponApplied ? discount : 0);
	const netAmount = cartPrice - couponDiscount;
	const tax = 0.18 * netAmount;
	const totalPayable = netAmount + tax;
	return { couponDiscount, netAmount, tax, totalPayable };
}

export default function Bill({ cartPrice, isCouponApplied, discount }) {
	const { couponDiscount, netAmount, tax, totalPayable } = getTotals(
		cartPrice,
		isCouponApplied,
		discount,
	);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(updateTotalPayable(totalPayable));
	}, [totalPayable]);

	return (
		<VStack
			alignItems="strech"
			border="1px solid black"
			borderRadius="20px"
			padding="15px"
			width="100%"
		>
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
