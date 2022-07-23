import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, TouchableOpacity, Modal } from 'react-native';

export default function App() {
  const [item, setItem] = useState('');
  const [itemList, setItemList] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [clearModal, setClearModal] = useState(false);


  const inputValue = item.trim();

  const onChangeText = (text) => {
    setItem(text);
  }

  const addItem = () => {
    if(inputValue) {
      setItemList([
        ...itemList, 
      {
        id: itemList.length + 1,
        value: item
      }
    ])
      setItem('');
    }
  }

  const clearList = () => {
    setItemList([]);
    setClearModal(!clearModal)
  }

  const onHandleClear = () => {
    setClearModal(!clearModal)
  }

  const onDeleteIitems = (id) => {
    setItemList(currentItems => currentItems.filter(item => item.id !== id));
    setItemSelected({});
    setModalVisible(!modalVisible);
  }

  const onHandleModal = (id) => {
    setItemSelected(itemList.find(item => item.id === id));
    setModalVisible(!modalVisible);
  }

  const renderItem = ({ item }) => (
      <View style={styles.itemContainer}>
        <Text style={styles.item}>{item.value}</Text>
        <TouchableOpacity onPress={() => onHandleModal(item.id)}>
          <Text style={styles.delete}>X</Text>
        </TouchableOpacity>
      </View>
  )

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
        style={styles.input}
        placeholder='add item'
        placeholderTextColor='#cccccc'
        value={item}
        onChangeText={onChangeText}
        />
        <Button title='Add' color='#48284A' onPress={addItem} disabled={inputValue === ''} />
      </View>
      <View style={styles.itemList}>
        <FlatList 
          data={itemList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style
        />
      </View>
      <View style={styles.clearButtonContainer}>
        <View>
          {itemList.length > 0 && <Button title='Clear list' color='#EF767A' onPress={onHandleClear} />}
        </View>
      </View>
      <Modal animationType='slide' visible={modalVisible}>
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
      </Modal>

      <Modal animationType='slide' visible={clearModal}>
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
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  input: {
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: '#48284A',
  },
  item: {
    color: '#fff',
    fontSize: 16
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginBottom: 15,
    marginHorizontal: 20,
    backgroundColor: '#916C80',
    borderRadius: 5
  },
  clearButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10
  },
  delete: {
    color: '#fff',
    paddingHorizontal: 10
  },
  modalContentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  modalTitle: {
    fontSize: 16,
  },
  modalMessage: {
    fontSize: 14,
    textAlign: 'center'
  },
  modalItem: {
    fontSize: 15,
    color: '#48284A',
    fontWeight: 'bold',
  },
  modalButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
    marginTop: 20,
  }
});
