import { VStack, HStack, Input, Image, Checkbox, Heading } from "@chakra-ui/react";
import PlaceOrderButton from "./PlaceOrderButton";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function isNumber(string) {
	return Number(string).toString() !== "NaN";
}

function isCardNumberValid(cardNumber) {
	return cardNumber.length == 12 && isNumber(cardNumber);
}

function isCardExpiryValid(cardExpiry) {
	return cardExpiry.length == 7 && cardExpiry.includes("/");
}

function isCardCVVValid(cardCVV) {
	return cardCVV.length == 3 && isNumber(cardCVV);
}

function isCardHolderValid(cardHolder) {
	return cardHolder.length > 0;
}

export default function PaymentCard() {
	const [cardNumber, setCardNumber] = useState("");
	const [cardExpiry, setCardExpiry] = useState("");
	const [cardCVV, setCardCVV] = useState("");
	const [cardHolder, setCardHolder] = useState("");
	const [isCardValid, setIsCardValid] = useState(false);
	const totalPayable = useSelector((state) => state.auth.totalPayable);

	function updateIsCardValid() {
		if (
			isCardNumberValid(cardNumber) &&
			isCardExpiryValid(cardExpiry) &&
			isCardCVVValid(cardCVV) &&
			isCardHolderValid(cardHolder)
		) {
			setIsCardValid(true);
		} else {
			setIsCardValid(false);
		}
	}

	useEffect(() => {
		updateIsCardValid();
	}, [cardNumber, cardExpiry, cardCVV, cardHolder]);

	return (
		<VStack>
			<HStack justifyContent="space-between">
				<span style={{ fontWeight: "bold" }}>100% Secure</span>
				<Image src="/src/assets/CheckoutStrip.png" width="50%" />
			</HStack>
			<Input
				type="number"
				placeholder="Enter Card Number"
				value={cardNumber}
				onChange={({ target: { value } }) => {
					if (value.length > 12) {
						return;
					}
					setCardNumber(value);
				}}
			/>
			<HStack justifyContent="space-between" width="100%">
				<Input
					type="text"
					placeholder="Enter Expiry Date"
					value={cardExpiry}
					onChange={({ target: { value } }) => {
						if (
							value !== "" &&
							(value.length > 7 ||
								(isNumber(value[value.length - 1]) == false &&
									value[value.length - 1] !== "/"))
						) {
							return;
						}
						if (value.length > 2 && value.includes("/") == false) {
							value = value[0] + value[1] + "/" + value.substring(2);
						}
						setCardExpiry(value);
					}}
				/>
				<Input
					type="number"
					placeholder="Enter CVV Number"
					value={cardCVV}
					onChange={({ target: { value } }) => {
						if (value.length > 3) {
							return;
						}
						setCardCVV(value);
					}}
				/>
			</HStack>
			<Input
				type="text"
				placeholder="Cardholder Name"
				value={cardHolder}
				onChange={({ target: { value } }) => setCardHolder(value)}
			/>
			<Checkbox defaultChecked>Secure this card as per RBI guidelinesLearn More</Checkbox>
			<br />
			{isCardValid && (
				<Heading fontSize="xl" color="orange.500" textAlign="center">
					Amount Rs. {totalPayable} will be sent to Lens Shop
				</Heading>
			)}
			<br />
			<PlaceOrderButton isDisabled={isCardValid == false} />
		</VStack>
	);
}
