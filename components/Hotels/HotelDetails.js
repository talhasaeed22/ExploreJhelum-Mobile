import { View, Text, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Navbar from '../Navbar'
import ImageModal from './ImageModal'
import PreFooter from '../PreFooter'
import Footer from '../Footer'

const HotelDetails = ({ navigation, route }) => {
  const [image, setImage] = useState('https://firebasestorage.googleapis.com/v0/b/products-c26e6.appspot.com/o/Hotels%2FTulip3.png?alt=media&token=4de278c4-e4ce-4e2f-b900-249451aab50a')
  const [visible, setVisible] = useState(false)
  const closeModal = () => {
    setVisible(false)
  }
  const { element } = route.params;
  return (
    <>
      <ScrollView>
        <View style={{ borderBottomWidth: 1, borderBottomColor: "lightgray" }}>
          <Navbar navigation={navigation} />
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 25, color: "rgb(191, 28, 28)", marginVertical: 10, fontWeight: "bold" }}>{element.name}</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Image style={{ width: Dimensions.get('window').width - 50, height: 250, borderRadius: 10 }} source={{ uri: element.image[0] }} resizeMode='cover' />
        </View>
        <View style={{ display: "flex", flexWrap: 'wrap', marginVertical: 10, flexDirection: "row", justifyContent: 'space-between', paddingHorizontal: 30 }} >
          {element.image.map((img, index) => {
            return <TouchableOpacity key={index} onPress={() => { setImage(img); setVisible(true) }}>
              <Image resizeMode='cover' style={{ width: Dimensions.get('window').width / 3, height: 150, borderRadius: 10, marginVertical: 10 }} source={{ uri: img }} />
            </TouchableOpacity>
          })}
        </View>
        <View style={{ paddingHorizontal: 30, paddingVertical: 20 }}>
          <Text style={{ fontSize: 25, color: "rgb(191, 28, 28)", fontWeight: "bold", textDecorationLine: 'underline', marginBottom: 10 }}>Our Package</Text>
          <View style={{ display: 'flex', flexDirection: "row", gap: 10 }}>

            <Text style={{ fontSize: 20, color: 'black' }}> Per Night: </Text>
            <Text style={{ fontWeight: "bold", color: "orangered", fontSize: 20 }}> 45000 ./</Text>
          </View>
        </View>

        <View style={{ paddingHorizontal: 30, paddingVertical: 20 }}>
          <Text style={{ fontSize: 25, color: "rgb(191, 28, 28)", fontWeight: "bold", textDecorationLine: 'underline' }}>Location</Text>

          <TouchableOpacity onPress={() => { setImage(element.map); setVisible(true) }}>
            <Image style={{ width: Dimensions.get('window').width - 50, height: 250, borderRadius: 10, marginVertical: 20 }} source={{ uri: element.map }} resizeMode='cover' />
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: "center", marginVertical: 20, paddingHorizontal: 30 }}>
          <Text style={{ fontSize: 25, textAlign: "center", fontWeight: "bold", color: 'rgb(191, 28, 28)' }}>Note: Please use our Application for online booking!</Text>
        </View>

        <View style={{ paddingHorizontal: 20, }}>
          <PreFooter />
        </View>
        <Footer navigation={navigation} />
        <ImageModal img={image} showMoadl={visible} closeModal={closeModal} />
      </ScrollView>
    </>
  )
}

export default HotelDetails