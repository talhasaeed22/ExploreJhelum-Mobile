import { View, Text, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native'
import { Button } from 'react-native-paper'
import React from 'react'
import PreFooter from './PreFooter'
import Footer from './Footer'

const Feedback = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={{ padding: 30, paddingBottom:10 }}>
                <Text style={{ fontSize: 20, color: "black", fontWeight: 'bold' }}>Send Feedback</Text>
                <View style={{ marginTop: 20, display: 'flex', gap: 10, }}>
                    <Text>Enter Name</Text>
                    <TextInput style={{ borderWidth: 1, borderRadius: 10, height: 50, borderColor:'gray', padding:10 }} placeholder='e.g John Doe' />
                    <Text>Enter Name</Text>
                    <TextInput style={{ borderWidth: 1,borderRadius: 10, height: 50, borderColor:'gray', padding:10  }} placeholder='e.g info@gmail.com' />
                    <Text>Enter Name</Text>
                    <TextInput style={{ borderWidth: 1, borderRadius: 10, height: 100, borderColor:'gray', padding:10  }} placeholder="What's on your mind" />
                    <TouchableOpacity style={{ paddingHorizontal: 40 }} onPress={() => { Alert.alert('Success', 'Feedback Sent') }}>
                        <Button style={{ height: 50, alignItems: 'center', justifyContent: "center", marginVertical: 20, marginBottom: 30, borderRadius: 10 }} textColor="white" labelStyle={{ fontSize: 20 }} buttonColor='#ff0000' icon="login" mode="contained" >
                            Send Feedback
                        </Button>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{borderTopWidth:1, borderTopColor:'lightgray', paddingBottom:10}}></View>
            <View style={{ paddingHorizontal: 20,  }}>
                <PreFooter />
            </View>
            <Footer navigation={navigation} />
        </ScrollView>
    )
}

export default Feedback