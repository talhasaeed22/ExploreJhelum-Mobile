import { View, Text, ScrollView, Dimensions, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navbar from '../Navbar';
import PreFooter from '../PreFooter';
import Footer from '../Footer';
const Stack = createNativeStackNavigator();
import { Button } from 'react-native-paper'
import PlacesData from './PlacesData';
import Entypo from 'react-native-vector-icons/Entypo'
import Places from './Places';
import PlacesDetail from './PlacesDetail';
function HomeScreen({ navigation }) {
  return (
    <>
      <View style={{ borderBottomWidth: 1, borderBottomColor: "lightgray" }}>
        <Navbar navigation={navigation} />
      </View>
      <ScrollView>
        <View style={{ padding: 20 }}>
          <Text style={{ color: "rgb(191, 28, 28)", fontSize: 30, fontWeight: 'bold', textDecorationLine:"underline",  }}>Trip Places</Text>
          <Text style={{ fontSize: 16 }}>Restaurants are categorized depending upon their Menu, quality of food, types of items and other available facilities. We always preffer to have the information for those which meets the needs of our customers. </Text>
          <FlatList
            data={PlacesData}
            renderItem={({ item }) => <View style={{ paddingRight: 20, paddingVertical: 20 }}>
              <Text numberOfLines={1} style={{ fontSize: 20, paddingBottom: 10, color: 'black', fontWeight: "bold" }}>{item.title}</Text>
              <Image style={{ justifyContent: "center", width: Dimensions.get('window').width - 50, height:250 }} resizeMode='cover' source={item.url} />
            </View>}
            horizontal
          />
       
          <View style={{display:'flex', justifyContent:"space-between", flexDirection:'row'}}>
          <TouchableOpacity onPress={()=>{navigation.navigate('PlacesCollection')}}>
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

const PlacesHome = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PlacesHome" component={HomeScreen} options={{
        headerShown: false
      }} />
      <Stack.Screen name="PlacesCollection" component={Places} options={{
        headerShown: false
      }} />
      <Stack.Screen name="PlacesDetail" component={PlacesDetail} options={{
        headerShown: false
      }} />
    </Stack.Navigator>
  )
}

export default PlacesHome