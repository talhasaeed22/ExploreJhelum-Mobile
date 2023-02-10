import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import { Avatar, Button } from 'react-native-paper'
import FOntsito from 'react-native-vector-icons/Fontisto'
import auth from '@react-native-firebase/auth'
const Navbar = ({ navigation }) => {
  return (
    <View style={{ display: "flex", flexDirection: 'row', justifyContent: "space-between", paddingHorizontal: 20, alignItems: "center" }}>
      <TouchableOpacity onPress={() => { navigation && navigation.goBack() }}>
        <Entypo name='back' color={'rgb(191, 28, 28)'} size={33} />
      </TouchableOpacity>
      {auth().currentUser ?
        <View style={{ display: 'flex', flexDirection: 'row', gap: 20, alignItems: "center", paddingHorizontal:20, paddingVertical:13 }}>
          <FOntsito name='person' color='rgb(191, 28, 28)' size={33} />
          <Text style={{ fontSize: 17, fontWeight: "bold", color: "black" }}>{auth().currentUser.displayName}</Text>
        </View>
        : <TouchableOpacity onPress={()=>{navigation.navigate('Login')}}><Button style={{ height: 40, alignItems: 'center', justifyContent: "center", marginVertical: 10, borderRadius: 10 }} textColor="white" labelStyle={{ fontSize: 18 }} buttonColor='black' icon="login" mode="contained" >
          Login
        </Button></TouchableOpacity>}


    </View>
  )
}

export default Navbar