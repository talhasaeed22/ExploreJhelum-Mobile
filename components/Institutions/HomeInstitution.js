import { View, Text, ScrollView, Dimensions, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navbar from '../Navbar';
import PreFooter from '../PreFooter';
import Footer from '../Footer';
const Stack = createNativeStackNavigator();
import { Button } from 'react-native-paper'
import Institutions from './Institutions';
import InstitutionDetails from './InstitutionDetails';
import InstitutionData from './InstitutionData';
import firestore from '@react-native-firebase/firestore';
import { useIsFocused } from '@react-navigation/native';

function HomeScreen({ navigation }) {
  const isFocus = useIsFocused();
  useEffect(()=>{
    getPosts();
  }, [isFocus])
  const [list, setList] = useState([])
  const getPosts = ()=>{
    let data= [];
    firestore().collection('Institutions')
    .get().then((snap)=>{
      snap.forEach((doc)=>{
        const {image, name} = doc.data();
        data.push({
          name:name,
          image:image
        })
      })
      setList(data);
    }).catch((err)=>{
      console.log(err)
    })
  }
  return (
    <>
      <View style={{ borderBottomWidth: 1, borderBottomColor: "lightgray" }}>
        <Navbar navigation={navigation} />
      </View>
      <ScrollView>
        <View style={{ padding: 20 }}>
          <Text style={{ color: "rgb(191, 28, 28)", fontSize: 30, fontWeight: 'bold', textDecorationLine:"underline",  }}>Institution</Text>
          <Text style={{ fontSize: 16 }}>Institutions are categorized depending upon Location, Level of education, Standard and other available facilities. One of the important facilities in hotels includes good reception and information counter. </Text>
          <FlatList
            data={list}
            renderItem={({ item }) => <View style={{ paddingRight: 20, paddingVertical: 20 }}>
              <Text numberOfLines={1} style={{ fontSize: 20, paddingBottom: 10, color: 'black', fontWeight: "bold" }}>{item.name}</Text>
              <Image style={{ justifyContent: "center", width: Dimensions.get('window').width - 50, height:250 }} resizeMode='cover' source={{uri:item.image[0]}} />
            </View>}
            horizontal
          />
         
          <View style={{display:'flex', justifyContent:"space-between", flexDirection:'row'}}>
          <TouchableOpacity onPress={()=>{navigation.navigate('InstitutionsCollection')}}>
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

const HomeInstitution = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="InstitutionHome" component={HomeScreen} options={{
        headerShown: false
      }} />
      <Stack.Screen name="InstitutionsCollection" component={Institutions} options={{
        headerShown: false
      }} />
      <Stack.Screen name="InstitutionDetail" component={InstitutionDetails} options={{
        headerShown: false
      }} />
    </Stack.Navigator>
  )
}

export default HomeInstitution