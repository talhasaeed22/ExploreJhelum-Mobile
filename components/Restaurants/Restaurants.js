import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import PreFooter from '../PreFooter'
import Footer from '../Footer'
import firestore from '@react-native-firebase/firestore'
import RestaurantBox from './RestaurantBox'
const Restaurants = ({ navigation }) => {
    useEffect(() => {
        getPosts()
    }, [])
    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState([])
    const getPosts = async () => {
        setLoading(true)
        const postItem = [];
        firestore().collection('Restaurants').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const { name, image, number, location, map, link, feedback } = doc.data();
                postItem.push({
                    id: doc.id,
                    name: name,
                    image: image,
                    number: number,
                    location: location,
                    map:map,
                    link,
                    feedback
                });
            });
            setPosts(postItem);
            setLoading(false)

        }).catch((err) => { console.log(err) })


    }

    return (
        <>
            <View style={{ borderBottomWidth: 1, borderBottomColor: "lightgray" }}>
                <Navbar navigation={navigation} />
            </View>
            <ScrollView>
                <View style={{ padding: 20 }}>
                    <Text style={{ color: "rgb(191, 28, 28)", fontSize: 30, fontWeight: 'bold', textDecorationLine: "underline", }}>All Restaurants</Text>
                </View>

                {loading ? 
                    <ActivityIndicator size={'large'} color="rgb(191, 28, 28)" />
                 : posts.map((item) => {
                    return <View style={{marginVertical:20}} key={item.id}>
                       <RestaurantBox navigation={navigation} name={item.name} path={item.image[0]} element={item} />
                    </View>
                })
                }
                <View style={{borderTopWidth:1, borderTopColor:'lightgray', paddingBottom:10}}></View>

                <View style={{ paddingHorizontal: 20, }}>
                    <PreFooter />
                </View>
                <Footer navigation={navigation} />
            </ScrollView>
        </>
    )
}

export default Restaurants