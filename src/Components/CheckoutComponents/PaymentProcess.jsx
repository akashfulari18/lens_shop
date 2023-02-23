import { Tabs, TabList, TabPanels, Tab, TabPanel, Stack } from "@chakra-ui/react";
import Bullet from "./Bullet";
import ContactForm from "./ContactForm";
import ShippingAddress from "./ShippingAddress";
import { useState } from "react";

export default function PaymentProcess() {
	const [contactInfo, setContactInfo] = useState(null);
	const [shippingAddress, setShippingAddress] = useState(null);

	const tabs = [
		{
			name: "Phone & Email",
			isDisabled: false,
		},
		{
			name: "Shipping Address",
			isDisabled: contactInfo === null,
		},
		{
			name: "Payment & Discount",
			isDisabled: contactInfo === null || shippingAddress === null,
		},
	];

	return (
		<Tabs
			variant="unstyled"
			isFitted
			width="100%"
			height="100%"
			defaultIndex={0}
			padding="10px"
		>
			<TabList mb="1em" as={Stack} direction={["column", "column", "row", "row"]}>
				<Tab
					backgroundColor="#ddd"
					borderRadius="30px"
					margin="0px 10px"
					_selected={{ backgroundColor: "#888" }}
					isDisabled={tabs[0]["isDisabled"]}
					margin="0px"
				>
					<Bullet text="1" /> {tabs[0]["name"]}
				</Tab>
				<Tab
					backgroundColor="#ddd"
					borderRadius="30px"
					margin="0px 10px"
					_selected={{ backgroundColor: "#888" }}
					isDisabled={tabs[1]["isDisabled"]}
					margin="0px"
				>
					<Bullet text="2" /> {tabs[1]["name"]}
				</Tab>
				<Tab
					backgroundColor="#ddd"
					borderRadius="30px"
					margin="0px 10px"
					_selected={{ backgroundColor: "#888" }}
					isDisabled={tabs[2]["isDisabled"]}
					margin="0px"
				>
					<Bullet text="3" />
					{tabs[2]["name"]}
				</Tab>
			</TabList>
			<TabPanels>
				<TabPanel>
					<ContactForm setContactInfo={setContactInfo} />
				</TabPanel>
				<TabPanel>
					<ShippingAddress setShippingAddress={setShippingAddress} />
				</TabPanel>
				<TabPanel>
					<p>Three</p>
				</TabPanel>
			</TabPanels>
		</Tabs>
	);
}
