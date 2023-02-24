import { Tabs, TabList, TabPanels, Tab, TabPanel, Stack, Text } from "@chakra-ui/react";
import Bullet from "./Bullet";
import ContactForm from "./ContactForm";
import ShippingAddress from "./ShippingAddress";
import PaymentOptions from "./PaymentOptions";
import { useState } from "react";
import {
	Progress,
	Box,
	ButtonGroup,
	Button,
	Heading,
	Flex,
	FormControl,
	GridItem,
	FormLabel,
	Input,
	Select,
	SimpleGrid,
	InputLeftAddon,
	InputGroup,
	Textarea,
	FormHelperText,
	InputRightElement,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

export default function PaymentProcess() {
	const toast = useToast();
	const [step, setStep] = useState(2);
	const [progress, setProgress] = useState(33.33);
	const [contactInfo, setContactInfo] = useState(null);
	const [shippingAddress, setShippingAddress] = useState(null);

	return (
		<Box
			borderWidth="1px"
			rounded="lg"
			maxWidth={800}
			p={6}
			m="10px auto"
			as="form"
			width="100%"
			minHeight="100vh"
			border="1px solid black"
			borderRadius="30px"
		>
			<Progress hasStripe value={progress} mb="5%" mx="5%" isAnimated></Progress>

			{step === 0 ? (
				<>
					<Text
						fontSize="xl"
						marginBottom="10px"
						backgroundColor="teal"
						padding="5px 20px"
						borderRadius="10px"
						color="white"
					>
						Phone & Email
					</Text>
					<ContactForm setContactInfo={setContactInfo} />
				</>
			) : step === 1 ? (
				<>
					<Text
						fontSize="xl"
						marginBottom="10px"
						backgroundColor="teal"
						padding="5px 20px"
						borderRadius="10px"
						color="white"
					>
						Shipping Address
					</Text>
					<ShippingAddress
						contactInfo={contactInfo}
						setShippingAddress={setShippingAddress}
					/>
				</>
			) : (
				<>
					<Text
						fontSize="xl"
						marginBottom="10px"
						backgroundColor="teal"
						padding="5px 20px"
						borderRadius="10px"
						color="white"
					>
						Payment & Discount
					</Text>
					<PaymentOptions />
				</>
			)}

			<ButtonGroup mt="5%" w="100%">
				<Flex w="100%" justifyContent="space-between">
					<Flex>
						<Button
							onClick={() => {
								setStep(step - 1);
								setProgress(progress - 33.33);
							}}
							isDisabled={step === 0}
							colorScheme="teal"
							variant="solid"
							w="7rem"
							mr="5%"
						>
							Back
						</Button>
						<Button
							w="7rem"
							isDisabled={step === 2}
							onClick={() => {
								if (step == 0 && contactInfo === null) {
									return;
								}
								if (
									step == 1 &&
									(contactInfo === null || shippingAddress === null)
								) {
									return;
								}
								setStep(step + 1);
								if (step === 2) {
									setProgress(100);
								} else {
									setProgress(progress + 33.33);
								}
							}}
							colorScheme="teal"
							variant="outline"
						>
							Next
						</Button>
					</Flex>
					{/* {step === 2 ? (
						<Button
							w="7rem"
							colorScheme="orange"
							variant="solid"
							onClick={() => {
								toast({
									title: "Account created.",
									description: "We've created your account for you.",
									status: "success",
									duration: 3000,
									isClosable: true,
								});
							}}
						>
							Submit
						</Button>
					) : null} */}
				</Flex>
			</ButtonGroup>
		</Box>
	);
}
