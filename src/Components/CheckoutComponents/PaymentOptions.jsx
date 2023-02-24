import { Stack, VStack, HStack } from "@chakra-ui/react";
import {
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	Input,
	Image,
	Checkbox,
	Button,
} from "@chakra-ui/react";
import ValueValidator from "./ValueValidator";
import PaymentCard from "./PaymentCard";
import { useState } from "react";

export default function PaymentOptions() {
	const [canPlaceOrder, setCanPlaceOrder] = useState(false);

	const paymentOptions = [
		"Debit card",
		"Phone Pe",
		"Net Banking",
		"UPI QR Code",
		"Paytm",
		"Google Pay",
	];

	return (
		<Tabs variant="unstyled">
			<HStack alignItems="stretch">
				<TabList>
					<VStack spacing={1} alignItems="stretch" width="150px">
						{paymentOptions.map((paymentOption) => (
							<Tab
								key={paymentOption}
								backgroundColor="grey"
								color="white"
								padding="20px"
								_selected={{
									backgroundColor: "white",
									color: "black",
									border: "1px solid grey",
								}}
							>
								{paymentOption}
							</Tab>
						))}
					</VStack>
				</TabList>

				<TabPanels>
					<TabPanel as={VStack} spacing={5} height="100%" padding="0px">
						<PaymentCard />
					</TabPanel>
					<TabPanel height="100%">
						<p>{paymentOptions[1]}</p>
					</TabPanel>
					<TabPanel height="100%">
						<p>{paymentOptions[2]}</p>
					</TabPanel>
					<TabPanel height="100%">
						<p>{paymentOptions[3]}</p>
					</TabPanel>
					<TabPanel height="100%">
						<p>{paymentOptions[4]}</p>
					</TabPanel>
					<TabPanel height="100%">
						<p>{paymentOptions[5]}</p>
					</TabPanel>
				</TabPanels>
			</HStack>
		</Tabs>
	);
}
