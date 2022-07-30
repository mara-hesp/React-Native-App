import React from 'react'
import { View, Button, Text } from 'react-native'
import { styles } from './styles'

const DeleteItem = ({ itemSelected, onDeleteIitems, setModalVisible, modalVisible }) => {
    return (
        <View>
            <View style={styles.modalContentContainer}>
                <Text style={styles.modalTitle}>Detalle de la Lista</Text>
            </View>
            <View style={styles.modalContentContainer}>
                <Text style={styles.modalMessage}>¿Estás seguro que deseas eliminar el siguiente elemento?</Text>
            </View>
            <View style={styles.modalContentContainer}>
                <Text style={styles.modalItem}>{itemSelected.value}</Text>
            </View>
            <View style={styles.modalButton}>
                <Button title='delete' onPress={() => onDeleteIitems(itemSelected.id)} color='#EF767A' />
                <Button title='cancel' onPress={() => setModalVisible(!modalVisible)} color='#cccccc' />
            </View>
          </View>
    )
}

export default DeleteItem