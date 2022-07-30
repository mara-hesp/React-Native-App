import React from "react";
import { View, TextInput, Button } from "react-native";
import { styles } from "./style";

const CustomInput = ({ item, onChangeText, placeholder, onPressButton, inputValue }) => {
    return (
      <View style={styles.inputContainer}>
        <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor='#cccccc'
        value={item}
        onChangeText={onChangeText}
        />
        <Button title='Add' color='#48284A' onPress={onPressButton} disabled={inputValue === ''} />
      </View>
    )
}

export default CustomInput