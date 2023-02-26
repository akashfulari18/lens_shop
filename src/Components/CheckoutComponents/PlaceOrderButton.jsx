import { Button, CircularProgress, useDisclosure, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteAllProductsInCart } from "/src/store/Auth/auth.actions";
import { useState, useEffect } from "react";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
} from "@chakra-ui/react";

export default function PlaceOrderButton({ isDisabled }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector((state) => state.auth.user);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [orderStage, setOrderStage] = useState(0);
	const timer = null;

	const orderStages = [
		"Your order is being processed",
		"The products are dispatched from the store",
		"YaY! Open the door to receive the order",
	];

	const startOrderProcessing = () => {
		if (timer === null) {
			let timer = setInterval(() => {
				setOrderStage((orderStage) => {
					if (orderStage == orderStages.length - 1) {
						onClose();
						clearInterval(timer);
						navigate("/");
					} else {
						return orderStage + 1;
					}
				});
			}, 2000);
		}
	};

	return (
		<>
			<Button
				colorScheme="teal"
				padding="25px 50px"
				isDisabled={isDisabled}
				onClick={() => {
					onOpen();
					startOrderProcessing();
					dispatch(deleteAllProductsInCart(user));
				}}
			>
				Place Order
			</Button>
			<Modal
				isCentered
				isOpen={isOpen}
				onClose={onClose}
				motionPreset="slideInBottom"
				closeOnOverlayClick={false}
			>
				<ModalOverlay bg="none" backdropFilter="auto" backdropBlur="10px" />;
				<ModalContent>
					<ModalHeader>
						<Text fontWeight="bold" fontSize="3xl">
							Processing order
						</Text>
					</ModalHeader>
					<ModalBody>
						<Text fontSize="xl" color="green" textAlign="center">
							{orderStages[orderStage]}
						</Text>
					</ModalBody>
					<ModalFooter>
						<Button onClick={onClose} isDisabled={true}>
							Close
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
