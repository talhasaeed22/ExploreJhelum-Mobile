import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import auth from '@react-native-firebase/auth'
import { StackActions } from '@react-navigation/native';

const Footer = ({ navigation }) => {
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
        <View style={{ marginTop: 20, backgroundColor: 'rgb(191, 28, 28)', padding: 20, alignItems: "center", borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
            <Text style={{ color: "white", fontSize: 25, fontWeight: 'bold' }}>It's safe. It's easy.</Text>
            <Text style={{ color: "white", fontSize: 25, fontWeight: 'bold' }}>It's XploreJhelum</Text>
            {auth().currentUser ?<TouchableOpacity onPress={handleSignout}>
                <Button style={{ height: 50, alignItems: 'center', justifyContent: "center", marginVertical: 20, marginBottom: 30, borderRadius: 10 }} textColor="black" labelStyle={{ fontSize: 20 }} buttonColor='white' icon="login" mode="contained" >
                    Logout from App
                </Button>
            </TouchableOpacity> : <TouchableOpacity onPress={() => { navigation.navigate('Login') }}>
                <Button style={{ height: 50, alignItems: 'center', justifyContent: "center", marginVertical: 20, marginBottom: 30, borderRadius: 10 }} textColor="black" labelStyle={{ fontSize: 20 }} buttonColor='white' icon="login" mode="contained" >
                    Login to continue
                </Button>
            </TouchableOpacity>}

            <Text style={{ textAlign: 'center', color: 'lightgray' }}>All Rights Reserved © All Rights Reserved Web Dev Group Ltd. Liability Co.</Text>
        </View>

    )
}

export default Footer