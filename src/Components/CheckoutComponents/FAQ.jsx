import { Stack, VStack, HStack, Text, Box } from "@chakra-ui/react";
import { BiGlasses } from "react-icons/bi";
import { BsEmojiSmile } from "react-icons/bs";
import { TbZoomMoney } from "react-icons/tb";
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
} from "@chakra-ui/react";

export default function FAQ() {
	return (
		<VStack marginTop="50px" alignItems="stretch" padding="10px 100px">
			<Stack direction={["column", "column", "column", "row"]}>
				<Box border="1px solid grey" padding="10px" flex="1">
					<Text fontWeight="bold" color="#009999">
						When can I specify my lens power?
					</Text>
					<Text>
						After you complete the checkout process you'll be able to choose your lens
						power online. We don't charge for adding power to lens!
					</Text>
				</Box>
				<Box border="1px solid grey" padding="10px" flex="1">
					<Text fontWeight="bold" color="#009999">
						I have a discount coupon/reward points
					</Text>
					<Text>
						Great! You can apply a discount coupon/reward points during step 3 of the
						checkout process.
					</Text>
				</Box>
			</Stack>

			<Stack direction={["column", "column", "column", "row"]}>
				<Box border="1px solid grey" padding="10px" flex="1">
					<HStack fontWeight="bold" color="#009999" marginBottom="10px">
						<BiGlasses size="30px" />
						<Text>Perfect Fit Promise</Text>
					</HStack>
					<Text>
						We know you want to be sure your new glasses fit perfectly. That's why youll
						have 14 days to trythem, if they aren't right for you simply return them for
						adjustment, replacement, or a complete refund.
					</Text>
				</Box>
				<Box border="1px solid grey" padding="10px" flex="1">
					<HStack fontWeight="bold" color="#009999" marginBottom="10px">
						<BsEmojiSmile size="30px" />
						<Text>Dr. Ujjwal Sonika, / AIIMS</Text>
					</HStack>
					<Text>
						I had seen these stylish products off and on, and finally bought a pair of
						rimless glasses from their store. I love the quality of the frames and the
						precision with which my lenses have been made and fitted. They are very
						professional with what they do. Good work!
					</Text>
				</Box>
				<Box border="1px solid grey" padding="10px" flex="1">
					<HStack fontWeight="bold" color="#009999" marginBottom="10px">
						<TbZoomMoney size="30px" />
						<Text>Best Price Guaranteed</Text>
					</HStack>
					<Text>
						If you find your chosen products cheaper at any other Indian online
						retailer, we'll refund the difference. This is why our customers know they
						always get the best prices in the country.
					</Text>
				</Box>
			</Stack>

			<Box backgroundColor="#333" color="white" textAlign="center" padding="10px">
				ALL YOUR DOUBTS RESOLVED
			</Box>

			<Accordion allowToggle>
				<AccordionItem>
					<h2>
						<AccordionButton backgroundColor="#777" color="white" _hover={{}}>
							<Box as="span" flex="1" textAlign="left">
								Ques 1. What is Gold Membership?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						Ans 1. Gold Membership provides exclusive benefits like Buy One Get One on
						Eyeglasses for 365 days to its members. Offer can be availed Online or at
						400+ Stores across India. You can share membership benefits with your family
						with no upper limit to number of orders placed. Membership is valid on 1000+
						products and it is priced at ₹600 for first 10,000 members.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem>
					<h2>
						<AccordionButton backgroundColor="#777" color="white" _hover={{}}>
							<Box as="span" flex="1" textAlign="left">
								Ques 2. I’m not sure about the size and fit of the frames.
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						Ans 2. We offer glasses in 3 sizes – small, medium, and large. Click the
						‘Frame Size’ link at the bottom of the page to know your size. ~95% of our
						customers find a medium size frame to be the best fit.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem>
					<h2>
						<AccordionButton backgroundColor="#777" color="white" _hover={{}}>
							<Box as="span" flex="1" textAlign="left">
								Ques 3. What if I buy glasses & they don’t fit me? What if the
								lenses aren’t right ?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						Ans 3. You can buy glasses fitted with your prescription or even the frames
						standalone. We custom-make glasses with single vision, bifocal, or
						progressive prescriptions across all powers. Our glasses are ~50% cheaper
						than market average, since we bypass intermediaries – and best of all, we
						charge the same price, regardless of your power!
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</VStack>
	);
}
