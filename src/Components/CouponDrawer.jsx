import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Button,
	Input,
	HStack,
	VStack,
	Text,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useRef, useState } from "react";

export default function CouponDrawer({ setIsCouponApplied }) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef();
	const [couponCode, setCouponCode] = useState("");
	const [submittedCouponCode, setSubmittedCouponCode] = useState("");
	const [isCouponCodeCorrect, setIsCouponCodeCorrect] = useState(false);

	const applyCouponCode = (code) => {
		setSubmittedCouponCode(code);
		if (couponCode === "TRYUS") {
			setIsCouponCodeCorrect(true);
			setIsCouponApplied(true);
		} else {
			setIsCouponCodeCorrect(false);
		}
	};

	return (
		<>
			<Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
				<ArrowForwardIcon />
			</Button>
			<Drawer
				isOpen={isOpen}
				placement="right"
				onClose={onClose}
				finalFocusRef={btnRef}
				size="sm"
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Apply Coupon</DrawerHeader>
					<DrawerBody as={VStack} gap="50px" alignItems="stretch">
						<HStack justifyContent="space-between">
							<Input
								placeholder="ENTER COUPON CODE"
								value={couponCode}
								onChange={({ target: { value } }) =>
									setCouponCode(value.toUpperCase())
								}
							/>
							<Button color="cyan.600" onClick={() => applyCouponCode(couponCode)}>
								Apply
							</Button>
						</HStack>
						{isCouponCodeCorrect === false && submittedCouponCode !== "" ? (
							<Text color="red">
								Coupon code "{submittedCouponCode}" does not exist
							</Text>
						) : null}
						<VStack
							alignItems="stretch"
							border="1px solid grey"
							borderRadius="20px"
							padding="15px"
						>
							<HStack justifyContent="space-between" alignItems="center">
								<VStack alignItems="stretch">
									<Text fontSize="md" fontWeight="bold">
										COOL STYLES - EXTRA 60% OFF
									</Text>
									<Text fontSize="sm" fontWeight="bold">
										Use coupon TRYUS & get Extra 60% Off!
									</Text>
								</VStack>
								<Button
									color="cyan.600"
									onClick={() => applyCouponCode(couponCode)}
								>
									Apply
								</Button>
							</HStack>
							<hr />
							<Text color="grey">Voucher wont apply with Buy 1 Get 1 Free</Text>
						</VStack>
					</DrawerBody>
					<DrawerFooter>
						<Button variant="outline" mr={3} onClick={onClose}>
							Cancel
						</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	);
}
