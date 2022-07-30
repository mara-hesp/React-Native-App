import React, { useState } from 'react';
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native';
import { CustomModal, CustomInput, AddItem, DeleteListButton, DeleteItem, DeleteList } from './components';

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
      <AddItem
      item={item}
      onHandleModal={onHandleModal}
      />
  )

  return (
    <SafeAreaView style={styles.container}>

      <CustomInput
      item={item}
      onChangeText={onChangeText}
      placeholder='Enter item'
      onPressButton={addItem}
      inputValue={inputValue}
      />

      <View style={styles.itemList}>
        <FlatList 
          data={itemList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style
        />
      </View>

      <DeleteListButton itemList={itemList} onPress={onHandleClear} />

      <CustomModal animationType='slide' modalVisible={modalVisible}>
        <DeleteItem
        itemSelected={itemSelected}
        onDeleteIitems={onDeleteIitems}
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        />
      </CustomModal>

      <CustomModal animationType='slide' modalVisible={clearModal}>
        <DeleteList
        clearList={clearList}
        setClearModal={setClearModal}
        clearModal={clearModal}
        />
      </CustomModal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
