import { VStack, HStack, Input, Image, Checkbox } from "@chakra-ui/react";
import PlaceOrderButton from "./PlaceOrderButton";
import { useState } from "react";

export default function PaymentCard() {
	const [cardNumber, setCardNumber] = useState("");
	const [cardExpiry, setCardExpiry] = useState("");
	const [cardCVV, setCardCVV] = useState("");
	const [cardHolder, setCardHolder] = useState("");

	return (
		<VStack>
			<HStack justifyContent="space-between">
				<span style={{ fontWeight: "bold" }}>100% Secure</span>
				<Image src="/src/assets/CheckoutStrip.png" width="50%" />
			</HStack>
			<Input type="number" placeholder="Enter Card Number" />
			<HStack justifyContent="space-between">
				<Input type="number" placeholder="Enter Card Number" />
				<Input type="number" placeholder="Enter CVV Number" limit="3" />
			</HStack>
			<Input type="text" placeholder="Cardholder Name" />
			<Checkbox defaultChecked>Secure this card as per RBI guidelinesLearn More</Checkbox>
			<br />
			<PlaceOrderButton isDisabled={true} />
		</VStack>
	);
}
