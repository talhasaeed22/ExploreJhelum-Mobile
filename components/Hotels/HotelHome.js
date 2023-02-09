import { View, Text, ScrollView, Dimensions, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navbar from '../Navbar';
import PreFooter from '../PreFooter';
import Footer from '../Footer';
const Stack = createNativeStackNavigator();
import { Button } from 'react-native-paper'
import hoteldetails from './HotelData'
import Hotels from './Hotels';
import HotelDetails from './HotelDetails';

function HomeScreen({ navigation }) {
  return (
    <>
      <View style={{ borderBottomWidth: 1, borderBottomColor: "lightgray" }}>
        <Navbar />
      </View>
      <ScrollView>
        <View style={{ padding: 20 }}>
          <Text style={{ color: "rgb(191, 28, 28)", fontSize: 30, fontWeight: 'bold', textDecorationLine:"underline",  }}>Hotels</Text>
          <Text style={{ fontSize: 16 }}>Hotels are categorized depending upon location, number of rooms, types of rooms and other available facilities. One of the important facilities in hotels includes good reception and information counter. </Text>
          <FlatList
            data={hoteldetails}
            renderItem={({ item }) => <View style={{ paddingRight: 20, paddingVertical: 20 }}>
              <Text numberOfLines={1} style={{ fontSize: 20, paddingBottom: 10, color: 'black', fontWeight: "bold" }}>{item.title}</Text>
              <Image style={{ justifyContent: "center", width: Dimensions.get('window').width - 50 }} resizeMode='cover' source={item.url} />
            </View>}
            horizontal
          />
          <Text style={{ fontSize: 16 }}>Today, modern western hotels are found in all big cities and at important tourist locations. </Text>
          <Text style={{ fontSize: 16 }}>Large comfortable beds covered with special bedspreads that get made by themselves, and bathrooms that are clean and shiny.</Text>
          <Text style={{ fontSize: 16 }}>Hotel rooms have everything you need for a pleasant stay</Text>

          <View style={{display:'flex', justifyContent:"space-between", flexDirection:'row'}}>
          <TouchableOpacity onPress={()=>{navigation.navigate('HotelsCollection')}}>
            <Button style={{ height: 45, alignItems: 'center', justifyContent: "center", marginVertical: 20, marginBottom: 30, borderRadius: 10, width:140 }} textColor="white" labelStyle={{ fontSize: 17 }} buttonColor='rgb(191, 28, 28)' mode="contained" >
              View More
            </Button>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{navigation.navigate('Start')}}>
            <Button style={{ height: 45, alignItems: 'center', justifyContent: "center", marginVertical: 20, marginBottom: 30, borderRadius: 10, width:140 }} textColor="white" labelStyle={{ fontSize: 17 }} buttonColor='black' mode="contained" >
              Go Back
            </Button>
          </TouchableOpacity>
          </View>

        </View>

        <View style={{ paddingHorizontal: 20, }}>
          <PreFooter />
        </View>
        <Footer navigation={navigation} />
      </ScrollView>
    </>
  );
}

const HotelHome = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HotelHome" component={HomeScreen} options={{
        headerShown: false
      }} />
      <Stack.Screen name="HotelsCollection" component={Hotels} options={{
        headerShown: false
      }} />
      <Stack.Screen name="HotelDetail" component={HotelDetails} options={{
        headerShown: false
      }} />
    </Stack.Navigator>
  )
}

export default HotelHome