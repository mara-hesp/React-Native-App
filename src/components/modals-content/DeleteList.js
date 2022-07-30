import React from 'react'
import { View, Button, Text } from 'react-native'
import { styles } from './styles'

const DeleteList = ({ clearList, setClearModal, clearModal }) => {
    return (
        <View>
            <View style={styles.modalContentContainer}>
                <Text style={styles.modalTitle}>Lista</Text>
            </View>
            <View style={styles.modalContentContainer}>
                <Text style={styles.modalMessage}>¿Estás seguro que deseas eliminar todos los elementos de la lista?</Text>
            </View>
            <View style={styles.modalButton}>
                <Button title='delete' onPress={clearList} color='#EF767A' />
                <Button title='cancel' onPress={() => setClearModal(!clearModal)} color='#cccccc' />
            </View>
        </View>
    )
}

export default DeleteList