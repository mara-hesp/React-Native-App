import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
})