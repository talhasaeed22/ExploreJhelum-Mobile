import { View, Text, Modal, Alert, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
const ImageModal = ({img, showMoadl, closeModal}) => {
  return (
    <Modal
    animationType="slide"
    transparent={true}
    visible={showMoadl}
    onRequestClose={() => {
      Alert.alert('Modal has been closed.');
      closeModal()
    }}
   >
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
       <TouchableOpacity style={{marginBottom:5}} onPress={()=>{closeModal()}}>
        <Entypo name='cross' color='red' size={27} />
       </TouchableOpacity>
      <Image style={{ width: Dimensions.get('window').width - 50, height: 250, borderRadius: 10 }} source={{ uri: img }} resizeMode='contain' />
      </View>
    </View>
  </Modal>
  )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        // backgroundColor:"lightgray",
    
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingHorizontal: 35,
        paddingVertical:10,
        paddingBottom:25,
        // alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        borderWidth: 1,
        borderColor: '#FFCC00'
      },
      button: {
        borderRadius: 20,
        padding: 10,
        // width: 200,
        elevation: 2,
        display:"flex",
        alignItems:"center"

      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize:17,
        paddingTop:20
      },
      modalText: {
        // marginBottom: 15,
        textAlign: 'center',
        marginBottom: 15,
        fontWeight:"normal",
        fontSize:17
      },
      warningText: {
        
      }
})
export default ImageModal