import React, { useState, useEffect, useContext } from 'react';
import { Button, Image, View, Text, Alert } from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import Fontiso from 'react-native-vector-icons/Fontisto'
import { StackActions } from '@react-navigation/native';
import { Drawer, Avatar, Switch } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Material from 'react-native-vector-icons/MaterialIcons'
import FAwesome from 'react-native-vector-icons/FontAwesome'
import IonIcon from 'react-native-vector-icons/Ionicons'
import auth from '@react-native-firebase/auth'
const MyDrawer = (props) => {
  const handleSignout = () => {
    auth().signOut().then(() => {
      Alert.alert('User Signed Out')
      
      props.navigation.dispatch(
        StackActions.replace('Login')
      );
    }).catch((err) => {
      console.log(err)
    })
  }
  const { state } = props
  const { routes, index } = state; //Not sure about the name of index property. Do check it out by logging the 'state' variable.
  const focusedRoute = routes[index].name;
  const [screen, setScreen] = useState(1);

  return (

    <View style={{ flex: 1, }}>
      <DrawerContentScrollView {...props}>
        <View style={{  flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingTop: 50, backgroundColor:'rgb(191, 28, 28)' }}>
          <Image style={{ width: 50, height: 50 }} source={require('../images/whitelogo.png')} />
          <Text style={{ fontSize: 31, color: 'white', fontWeight: 'bold', }}>ploreJhelum </Text>
        </View>
        {auth().currentUser && <View style={{ flexDirection: 'row', alignItems: "center", padding: 25, backgroundColor:'rgb(191, 28, 28)', paddingVertical:30 }}>
          {/* <Avatar.Image source={{  }} size={50} /> */}
          <Fontiso name='person' size={42} color='white' />
          <View style={{ flexDirection: 'column', backgroundColor:'rgb(191, 28, 28)'  }}>
            <Text style={{ marginLeft: 15, fontSize: 15, color: 'white', fontWeight: 'bold' }}> {auth().currentUser.displayName} </Text>
            <Text style={{ marginLeft: 15, fontWeight: 'bold', color: 'white' }}> {auth().currentUser.email} </Text>
          </View>
        </View>}
        {!auth().currentUser && <View style={{ paddingBottom: 30, paddingHorizontal:20, backgroundColor:'rgb(191, 28, 28)', borderBottomRightRadius:40 }}>
          <Text style={{ fontWeight: 'bold', marginTop: 28, fontSize: 15, color: 'white' }}>We Suggest you to login to our app in order to have all the oppurtunities.</Text>
        </View>}
        <View style={{ marginTop: 15, flexDirection: 'column', marginLeft: 15, }}>

          <DrawerItem onPress={() => { props.navigation.navigate('Start') }} style={focusedRoute === 'Start' ? { backgroundColor: '#ff0000' } : {}}
            icon={({ color, size }) => (<Icon name="home-outline" size={21} color={focusedRoute === 'Start' ? ('white') : 'black'} />)}
            label={() => (<Text style={{ color: focusedRoute === 'Start' ? ('white') : 'black', fontSize: 15 }}>Home</Text>)}

          />
          <DrawerItem onPress={() => { props.navigation.navigate('Hotels') }} style={focusedRoute === 'Hotels' ? { backgroundColor: '#ff0000' } : {}}
            icon={({ color, size }) => (<FAwesome name="hotel" size={21} color={focusedRoute === 'Hotels' ? ('white') : 'black'} />)}
            label={() => (<Text style={{ color: focusedRoute === 'Hotels' ? ('white') : 'black', fontSize: 15 }}>Hotles</Text>)}

          />

          <DrawerItem onPress={() => { props.navigation.navigate('Restaurants') }} style={focusedRoute === 'Restaurants' ? { backgroundColor: '#ff0000' } : {}}
            icon={({ color, size }) => (<IonIcon name="restaurant-outline" size={21} color={focusedRoute === 'Restaurants' ? ('white') : 'black'} />)}
            label={() => (<Text style={{ color: focusedRoute === 'Restaurants' ? ('white') : 'black', fontSize: 15 }}>Restaurants</Text>)}

          />
          <DrawerItem onPress={() => { props.navigation.navigate('Institutions') }} style={focusedRoute === 'Institutions' ? { backgroundColor: '#ff0000' } : {}}
            icon={({ color, size }) => (<IonIcon name="school-outline" size={21} color={focusedRoute === 'Institutions' ? ('white') : 'black'} />)}
            label={() => (<Text style={{ color: focusedRoute === 'Institutions' ? ('white') : 'black', fontSize: 15 }}>Institutions</Text>)}

          />
          <DrawerItem onPress={() => { props.navigation.navigate('TripPlaces') }} style={focusedRoute === 'TripPlaces' ? { backgroundColor: '#ff0000' } : {}}
            icon={({ color, size }) => (<Material name="place" size={21} color={focusedRoute === 'TripPlaces' ? ('white') : 'black'} />)}
            label={() => (<Text style={{ color: focusedRoute === 'TripPlaces' ? ('white') : 'black', fontSize: 15 }}>Trip Places</Text>)}

          />
          <DrawerItem onPress={() => { props.navigation.navigate('Recommendations') }} style={focusedRoute === 'Recommendations' ? { backgroundColor: '#ff0000' } : {}}
            icon={({ color, size }) => (<Icon name="hand-coin" size={21} color={focusedRoute === 'Recommendations' ? ('white') : 'black'} />)}
            label={() => (<Text style={{ color: focusedRoute === 'Recommendations' ? ('white') : 'black', fontSize: 15 }}>Recommendations</Text>)}

          />


        </View>



      </DrawerContentScrollView>
      <Drawer.Section>
        <View style={{ borderTopWidth: 1, borderTopColor: 'lightgray', }}></View>
        {!auth().currentUser ? <DrawerItem onPress={() => { props.navigation.navigate('Login'); setScreen(1) }}
          icon={({ color, size }) => (<Icon name="login" size={21} color={'black'} />)}
          label={() => (<Text style={{ fontSize: 15 }}>Login</Text>)}

        /> : <DrawerItem onPress={handleSignout}
          icon={({ color, size }) => (<Icon name="login" size={21} color={'black'} />)}
          label={() => (<Text style={{ fontSize: 15, color: 'gray' }}>Signout</Text>)}

        />}

      </Drawer.Section>
    </View>
  )
}

export default MyDrawer;
