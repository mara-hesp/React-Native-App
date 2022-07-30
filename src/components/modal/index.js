import React from "react";
import { Modal } from "react-native";

const CustomModal = ({ children, modalVisible, animationType }) => {
    return (
        <Modal
            animationType={animationType}
            visible={modalVisible}>
            {children}
      </Modal>
    )
}

export default CustomModal