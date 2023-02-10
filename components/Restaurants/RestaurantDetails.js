import { View, Text, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Navbar from '../Navbar'
import ImageModal from '../Hotels/ImageModal'
import PreFooter from '../PreFooter'
import Footer from '../Footer'

const RestaurantDetail = ({ navigation, route }) => {
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
          <Image style={{ width: Dimensions.get('window').width - 50, height: 250, borderRadius: 10 }} source={{ uri: element.image[0] }} resizeMode='contain' />
        </View>
        <View style={{ display: "flex", flexWrap: 'wrap', marginVertical: 10, flexDirection: "row", justifyContent: 'space-between', paddingHorizontal: 30 }} >
          {element.image.map((img, index) => {
            return <TouchableOpacity key={index} onPress={() => { setImage(img); setVisible(true) }}>
              <Image resizeMode='cover' style={{ width: Dimensions.get('window').width / 3, height: 150, borderRadius: 10, marginVertical: 10 }} source={{ uri: img }} />
            </TouchableOpacity>
          })}
        </View>

        <View style={{ alignItems: "center", marginVertical:20, paddingHorizontal:30}}>
          <Text style={{ fontSize: 25, textAlign: "center", fontWeight: "bold", color: 'rgb(191, 28, 28)' }}>Note: Please use our Web Application for further Details!</Text>
        </View>

        <View style={{borderTopWidth:1, borderTopColor:'lightgray', paddingBottom:10}}></View>


        <View style={{ paddingHorizontal: 20, }}>
          <PreFooter />
        </View>
        <Footer navigation={navigation} />
        <ImageModal img={image} showMoadl={visible} closeModal={closeModal} />
      </ScrollView>
    </>
  )
}

export default RestaurantDetail