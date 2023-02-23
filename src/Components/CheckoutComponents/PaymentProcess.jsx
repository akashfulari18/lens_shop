import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Bullet from "./Bullet";
import ContactForm from "./ContactForm";
import ShippingAddress from "./ShippingAddress";
import FAQ from "./FAQ";
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
		<Tabs variant="unstyled" isFitted width="100%" height="100%" defaultIndex={0}>
			<TabList mb="1em">
				<Tab
					backgroundColor="#ddd"
					borderRadius="0 20px 0 20px"
					margin="0px 10px"
					_selected={{ backgroundColor: "#888" }}
					isDisabled={tabs[0]["isDisabled"]}
				>
					<Bullet text="1" /> {tabs[0]["name"]}
				</Tab>
				<Tab
					backgroundColor="#ddd"
					borderRadius="0 20px 0 20px"
					margin="0px 10px"
					_selected={{ backgroundColor: "#888" }}
					isDisabled={tabs[1]["isDisabled"]}
				>
					<Bullet text="2" /> {tabs[1]["name"]}
				</Tab>
				<Tab
					backgroundColor="#ddd"
					borderRadius="0 20px 0 20px"
					margin="0px 10px"
					_selected={{ backgroundColor: "#888" }}
					isDisabled={tabs[2]["isDisabled"]}
				>
					<Bullet text="3" />
					{tabs[2]["name"]}
				</Tab>
			</TabList>
			<TabPanels>
				<TabPanel>
					<ContactForm setContactInfo={setContactInfo} />
					<FAQ />
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
