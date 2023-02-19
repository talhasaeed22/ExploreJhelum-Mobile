import React, { useEffect, useState, useContext } from 'react'
import { Text, View, Dimensions, Image, Alert, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import logo from '../images/logo.png'
import Login from 'react-native-vector-icons/AntDesign';
import auth from '@react-native-firebase/auth'
import HotelHome from './Hotels/HotelHome';
import MyDrawer from './MyDrawer';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackActions } from '@react-navigation/native';
import RestaurantHome from './Restaurants/RestaurantHome';
import HomeInstitution from './Institutions/HomeInstitution';
import PlacesHome from './Places/PlacesHome';
import Recommendation from './Recommendation/Recommendation';

const Drawer = createDrawerNavigator();

const HomeScreen = ({ navigation }) => {
    const handleSignout = () => {
        auth().signOut().then(() => {
            Alert.alert('User Signed Out')
            navigation.dispatch(
                StackActions.replace('Login')
            );
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <>
            <View style={{ flex: 1, backgroundColor: 'rgb(191, 28, 28)' }}>

                <View style={{ backgroundColor: 'white', borderBottomRightRadius: 80, flex: 1 }} >
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={logo} style={{ height: 120, width: 120, borderRadius: 24 }} />
                        <Text style={{ marginTop: 15, fontWeight: 'bold', fontStyle: 'italic', fontSize: 25, color: 'black' }}>Xplore Jhelum </Text>
                        <Text style={{ fontSize: 16, fontStyle: 'italic' }}>Everything you need, in your hand</Text>
                    </View>
                </View>
            </View>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ backgroundColor: 'rgb(191, 28, 28)', borderTopLeftRadius: 80, flex: 1 }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 35 }}>
                        {/* {auth().currentUser && <Text style={{ fontWeight: 'bold', marginTop: 12, fontSize: 28, color: 'white' }}>Hi, {auth().currentUser.displayName}</Text>} */}
                        <Text style={{ fontWeight: 'bold', marginTop: 12, fontSize: 28, color: 'white' }}>{auth().currentUser ? 'Hi, Talha' : ' '}</Text>
                        <Text style={{ fontWeight: 'bold', marginTop: 12, fontSize: 28, color: 'white', fontFamily: 'Cabin-Bold' }}>Welcome to XploreJhelum</Text>
                        <Text style={{ fontWeight: 'bold', marginTop: 28, fontSize: 15, color: 'white' }}>We Suggest you to login to our app in order to have all the oppurtunities.</Text>
                        {!auth().currentUser ? <TouchableOpacity onPress={() => {
                            navigation.dispatch(
                                StackActions.replace('Login')
                            );
                        }}>
                            <Button labelStyle={{ fontWeight: 'normal', fontSize: 17, color: 'black' }} buttonColor='white' style={{ marginTop: 60, width: 125, borderRadius: 10 }} icon={() => (<Login name="login" color="black" size={23} />)} mode="contained">
                                Login
                            </Button>
                        </TouchableOpacity> : <TouchableOpacity onPress={handleSignout}>
                            <Button labelStyle={{ fontWeight: 'normal', fontSize: 17, color: 'black' }} buttonColor='white' style={{ marginTop: 60, width: 125, borderRadius: 10 }} icon={() => (<Login name="poweroff" color="black" size={23} />)} mode="contained">
                                Signout
                            </Button>
                        </TouchableOpacity>}

                    </View>
                </View>

            </View>
        </>
    )
}
const Home = () => {

    return (

        <Drawer.Navigator screenOptions={{
            drawerStyle: {
                backgroundColor: 'white',
                
            },
            
        }}

            drawerContent={props => <MyDrawer {...props} />}>

            <Drawer.Screen name="Start" component={HomeScreen} options={{
                title: '',
                headerShown: true,
                headerTransparent: true,
            }} />

            <Drawer.Screen name="Hotels" component={HotelHome} options={{
                title: 'Hotels',
                headerShown: true,
                headerTintColor: 'white',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: 'rgb(191, 28, 28)',
                },

            }} />
            <Drawer.Screen name="Restaurants" component={RestaurantHome} options={{
                title: 'Restaurants',
                headerShown: true,
                headerTintColor: 'white',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: 'rgb(191, 28, 28)',
                },

            }} />
            <Drawer.Screen name="Institutions" component={HomeInstitution} options={{
                title: 'Institutions',
                headerShown: true,
                headerTintColor: 'white',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: 'rgb(191, 28, 28)',
                },

            }} />
            <Drawer.Screen name="TripPlaces" component={PlacesHome} options={{
                title: 'Trip Places',
                headerShown: true,
                headerTintColor: 'white',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: 'rgb(191, 28, 28)',
                },

            }} />
            <Drawer.Screen name="Recommendations" component={Recommendation} options={{
                title: 'Recommendations',
                headerShown: true,
                headerTintColor: 'white',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: 'rgb(191, 28, 28)',
                },

            }} />
            
        </Drawer.Navigator>

    )
}

export default Home