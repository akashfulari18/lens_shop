import {
	Heading,
	Box,
	Stack,
	VStack,
	HStack,
	Text,
	Input,
	Button,
	Image,
	Select,
} from "@chakra-ui/react";
import { useState } from "react";
import PlaceOrderButton from "./PlaceOrderButton";
import { useToast } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export default function Paymentgateway({ gateway }) {
	const [isLoggedInToGateway, setIsLoggedInToGateway] = useState(false);
	const [bank, setBank] = useState("");
	const [gatewayID, setGatewayID] = useState("");
	const [gatewayPassword, setGatewayPassword] = useState("");
	const toast = useToast();

	const totalPayable = useSelector((state) => state.auth.totalPayable);

	const [activeQRCode, setActiveQRCode] = useState(0);
	const qrCodes = [
		"/src/assets/qr-code-1.png",
		"/src/assets/qr-code-2.png",
		"/src/assets/qr-code-3.png",
	];
	if (gateway == "UPI QR Code") {
		return (
			<VStack>
				<Text fontSize="xl">Scan below QR Code to pay the amount</Text>
				<Text fontSize="sm" color="grey">
					Phone Pe / Paytm / Google Pay /
				</Text>
				<Image src={qrCodes[activeQRCode]} />
				<Button onClick={() => setActiveQRCode((activeQRCode + 1) % qrCodes.length)}>
					Generate new QR Code
				</Button>
			</VStack>
		);
	}

	return (
		<VStack gap="50px">
			<Heading fontSize="large" textAlign="center">
				You are paying through {gateway}
			</Heading>
			{isLoggedInToGateway ? (
				<>
					<Heading fontSize="xl" color="orange.500" textAlign="center">
						Amount Rs. {totalPayable} will be sent to Lens Shop
					</Heading>
					<PlaceOrderButton isDisabled={false} />
				</>
			) : (
				<VStack
					alignItems="stretch"
					width="50%"
					margin="auto"
					minWidth={["200", "200px", "200px", "300px"]}
				>
					{gateway == "Net Banking" ? (
						<Select
							placeholder="Select your bank"
							onChange={({ target: { value } }) => {
								if (value == "" || value == "Select your bank") {
									setBank("");
								} else {
									setBank(value);
								}
							}}
						>
							<option value="SBI">SBI</option>
							<option value="ICICI">ICICI</option>
							<option value="Axis">Axis</option>
							<option value="BOI">BOI</option>
							<option value="PNB">PNB</option>
						</Select>
					) : null}
					<Input
						type="text"
						value={gatewayID}
						placeholder={`Enter your ${gateway} ID`}
						onChange={({ target: { value } }) => setGatewayID(value)}
					/>
					<Input
						type="text"
						value={gatewayPassword}
						placeholder={`Enter your ${gateway} Password`}
						onChange={({ target: { value } }) => setGatewayPassword(value)}
					/>
					<Button
						backgroundColor="orange.500"
						color="white"
						onClick={() => {
							if (gateway == "Net Banking" && bank == "") {
								toast({
									title: "Please choose valid bank",
									status: "error",
									duration: 3000,
									isClosable: true,
								});
							} else if (gatewayID == "user" && gatewayPassword == "user") {
								setIsLoggedInToGateway(true);
							} else {
								toast({
									title: "Invalid ID or Password",
									status: "error",
									duration: 3000,
									isClosable: true,
								});
							}
						}}
					>
						Login to {gateway}
					</Button>
				</VStack>
			)}
		</VStack>
	);
}
