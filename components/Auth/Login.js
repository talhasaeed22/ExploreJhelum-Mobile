import React, { useState } from 'react';
import { Text, View, Dimensions, Image, ScrollView, Alert, Modal, ActivityIndicator } from 'react-native';
import Anticon from 'react-native-vector-icons/AntDesign'
import { IconButton, TextInput } from 'react-native-paper'
import auth from '@react-native-firebase/auth';
import { StackActions } from '@react-navigation/native';


export default Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('')
    const [loading, setLoading] = useState(false)


    const handleSignin = () => {
        if (email !== '' && pass !== '') {
            setLoading(true)
            auth()
                .signInWithEmailAndPassword(email, pass)
                .then(() => {
                    setLoading(false)

                    navigation.dispatch(
                        StackActions.replace('Home')
                    );
                    
                })
                .catch(error => {
                    setLoading(false)

                    if (error.code === 'auth/invalid-email') {
                        Alert.alert(
                            'Warning',
                            'That email address is invalid!'
                        );
                    } else if (error.code === 'auth/wrong-password') {
                        Alert.alert(
                            'Warning',
                            'The Password is invalid!'
                        );
                    } else if (error.code === 'auth/user-not-found') {
                        Alert.alert(
                            'Warning',
                            'Please Enter Valid Credentials'
                        );
                    }
                });
        } else {
            Alert.alert(
                'Warning',
                'Please Enter All the Fields'
            );
        }
    }


    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={{ backgroundColor: 'white' }}>

                <View style={{ backgroundColor: 'rgb(191, 28, 28)', alignItems: 'center', borderBottomLeftRadius: 300, height: 300, width: Dimensions.get('window').width }} >
                    <View style={{ flexDirection: 'row', marginTop: 20, alignItems: 'center' }}>
                        <Image style={{ width: 100, height: 100 }} source={require('../../images/whitelogo.png')} />
                        <View style={{display:'flex', flexDirection:'column'}}>
                        <Text style={{ fontSize: 31, color: 'white', fontWeight: 'bold', }}>PLORE </Text>
                        <Text style={{ fontSize: 31, color: 'white', fontWeight: 'bold', }}>JHELUM</Text>
                        </View>
                    </View>
                   
                    <View style={{marginTop:20}}>
                        <Text style={{ fontSize: 25, fontStyle: 'italic', color: 'white', fontWeight:"bold", paddingHorizontal:20, textAlign:'center' }}> Login Page </Text>
                    </View>
                </View>
            </View>

            <View style={{ padding: 20, paddingLeft: 40, paddingRight: 40 }}>


                <View style={{
                    backgroundColor: 'white',
                    borderRadius: 20,
                    marginTop: 20,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 5,
                }}>
                    <View style={{ paddingHorizontal: 20, paddingVertical:10 }}>
                        <Text style={{fontSize:16}}>Let's Login To Your Account</Text>
                        <View style={{ display: "flex", flexDirection: 'column', gap: 3, marginTop: 20 }}>
                            <TextInput value={email} onChangeText={setEmail} underlineColor='white' theme={{ colors: { placeholder: '#636bad', text: '#181c3f', primary: '#636bad', background: 'transparent' } }} style={{ marginTop: 7, marginBottom: 7, color: 'red', height: 50, backgroundColor: '#f5f5f5', borderRadius: 10 }} label='Email' mode='flat' />
                            <TextInput onChangeText={setPass} secureTextEntry value={pass} underlineColor='white' theme={{ colors: { placeholder: '#636bad', text: '#181c3f', primary: '#636bad', background: 'transparent' } }} style={{ marginTop: 7, marginBottom: 7, color: 'red', height: 50, backgroundColor: '#f5f5f5' }} label='Password' mode='flat' />
                        </View>
                    </View>
                </View>


                <View style={{ alignItems: 'center' }}>
                    {loading ? <ActivityIndicator size={'large'} color='rgb(191, 28, 28)' />  : <IconButton
                        icon={() => (<Anticon name={'login'} size={50} color={'rgb(191, 28, 28)'} />)}
                        size={50}
                        onPress={handleSignin}
                    />}
                </View>

                <View style={{ marginTop: 20 }}>
                    <Text style={{ color: 'rgb(191, 28, 28)', textAlign: 'center', fontSize: 15 }} > Dont't have an Account? <Text onPress={() => { navigation.navigate('Signup') }} style={{ fontStyle: 'italic', fontWeight: 'bold', color: '#636bad', textDecorationLine: 'underline' }}> Register Here </Text> </Text>
                </View>

            </View>


        </ScrollView>
    )
}
