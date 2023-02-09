import { View, Text } from 'react-native'
import React from 'react'

const PreFooter = () => {
    return (
        <View >
            <Text style={{ color: "black", fontSize: 25, fontWeight: 'bold' }}>What to Expect from</Text>
            <Text style={{ color: "rgb(191, 28, 28)", fontSize: 25, fontWeight: 'bold' }}>Xplore Jhelum</Text>
            <Text style={{ fontSize: 16, marginTop:15}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab doloribus quia velit, voluptates sit nulla impedit quae magni nisi dolor at mollitia nesciunt facilis similique libero delectus, deserunt laudantium in animi maxime ea nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aliquam et veritatis cupiditate odit laborum neque, perspiciatis minima ipsa sunt consequuntur rerum ad nisi at corrupti inventore iure molestias aspernatur</Text>
            <View>
            <Text style={{paddingTop:20, textAlign:'center', fontWeight:"bold", color:"black"}}>Find out more about our Hotel Services by giving us a call on <Text style={{color:"rgb(191, 28, 28)", fontWeight:"bold",}}>01689 493 641</Text> or email <Text style={{color:"rgb(191, 28, 28)", fontWeight:"bold",}}>info@gmail.com</Text> today.</Text>
        </View>
        </View>
        
    )
}

export default PreFooter