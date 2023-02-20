import { View, Text, Modal, Alert, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import ImageViewer from 'react-native-image-zoom-viewer';
const ImageModal = ({ img, showMoadl, closeModal }) => {
  const images = [{
    // Simplest usage.
    url: img,
    width: Dimensions.get('window').width - 50, 
    height: 250
    // width: number
    // height: number

  }]
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showMoadl}
      onRequestClose={() => {

        closeModal()
      }}
    >
      <ImageViewer imageUrls={images} />
    </Modal>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    // marginTop: 22,
    // backgroundColor:"lightgray",

  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 35,
    paddingVertical: 10,
    paddingBottom: 25,
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
  
})
export default ImageModal