import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
      delete: {
        color: '#fff',
        width: 20,
        height: 20,
        backgroundColor: '#654657',
        textAlign: 'center',
        borderRadius: 100,
        fontWeight: 'bold'
      },
})