import React from "react";
import { View, Button } from 'react-native'
import { styles } from './styles'

const DeleteListButton = ({ itemList, onPress }) => {
    return (
    <View style={styles.clearButtonContainer}>
        <View>
            {itemList.length > 0 && <Button title='Clear list' color='#EF767A' onPress={onPress} />}
        </View>
    </View>
    )
}

export default DeleteListButton