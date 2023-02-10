import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const PlaceBox = ({ navigation, path, name, location, element }) => {
  return (
    <>
      <View style={{ display: "flex", alignItems: "center" }}>
        <Image style={{ width: Dimensions.get('window').width - 50, height: 250, borderRadius: 10 }} source={{ uri: path }} />
      </View >


      <View style={{ paddingHorizontal: 30, paddingTop: 10 }}>
        <Text style={{ fontSize: 20, color: "black", fontWeight: "bold" }}>{name}</Text>
      </View>

      <View style={{ display: "flex", paddingHorizontal: 30, gap:5, paddingTop:5 }}>

        <Text style={{ fontSize: 15, fontStyle: 'italic', fontWeight: "bold" }}>{element.location}</Text>
        


      </View>

      
      <View style={{display:'flex', alignItems:"flex-end", paddingHorizontal:30, paddingVertical:10}}>
        <TouchableOpacity style={{marginVertical:10}} onPress={() => { navigation.navigate('PlacesDetail', {element:element}) }}>
          <Button style={{ height: 45, alignItems: 'center', justifyContent: "center", borderRadius: 10}} textColor="white" labelStyle={{ fontSize: 17 }} buttonColor='rgb(191, 28, 28)' mode="contained" >
            View Details
          </Button>
        </TouchableOpacity>
      </View>
    </>


  )
}

export default PlaceBox