import { View, Text } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
const PreFooter = () => {
    return (
        <View >
            <Text style={{ color: "black", fontSize: 25, fontWeight: 'bold' }}>What to Expect from</Text>
            <Text style={{ color: "rgb(191, 28, 28)", fontSize: 25, fontWeight: 'bold' }}>Xplore Jhelum</Text>
            <Text style={{ fontSize: 16, marginTop: 15 }}>In today’s users have high expectations of the websites they visit, though the chances are that you will have much of this already in place. The first thing that users expect from Xplore Jhelum website that</Text>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems:'center' }}>
                <Entypo name="dot-single" size={23} color="rgb(191, 28, 28)" />
                <Text>Our website satisfies user intent and has a clear goal.</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems:'center' }}>
                <Entypo name="dot-single" size={23} color="rgb(191, 28, 28)" />
                <Text>Our website is trustworthy, safe and secure.</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems:'center' }}>
                <Entypo name="dot-single" size={23} color="rgb(191, 28, 28)" />
                <Text>Our site has awesome, user-centered content.</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems:'center' }}>
                <Entypo name="dot-single" size={23} color="rgb(191, 28, 28)" />
                <Text>Our site is mobile-friendly.</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems:'center' }}>
                <Entypo name="dot-single" size={23} color="rgb(191, 28, 28)" />
                <Text>Our website has a great design.</Text>
            </View>

            <View>
                <Text style={{ paddingTop: 20, textAlign: 'center', fontWeight: "bold", color: "black" }}>Find out more about our Hotel Services by giving us a call on <Text style={{ color: "rgb(191, 28, 28)", fontWeight: "bold", }}>01689 493 641</Text> or email <Text style={{ color: "rgb(191, 28, 28)", fontWeight: "bold", }}>info@gmail.com</Text> today.</Text>

            </View>
        </View>

    )
}

export default PreFooter