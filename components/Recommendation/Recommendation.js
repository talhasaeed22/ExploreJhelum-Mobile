import { View, Text, ScrollView, FlatList, Image, Dimensions } from 'react-native'
import React from 'react'
import Navbar from '../Navbar'
import HotelList from './HotelList'
import Ant from 'react-native-vector-icons/AntDesign'
import PreFooter from '../PreFooter'
import Footer from '../Footer'
import FAwesome from 'react-native-vector-icons/FontAwesome'
import RestaurantsList from './RestaurantsList'
import InstitutionList from './InstitutionList'
import TripPlacesList from './TripPlacesList'
const Recommendation = ({ navigation }) => {
    return (
        <>
            <View style={{ borderBottomWidth: 1, borderBottomColor: "lightgray" }}>
                <Navbar navigation={navigation} />
            </View>
            <ScrollView>
                <View style={{ padding: 20, display: 'flex', gap: 10 }}>
                    <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold', textDecorationLine: "underline", }}>Recommendation</Text>
                    <Text style={{ fontSize: 16 }}>We will recommend you the best ratting available on google. </Text>
                    <Text style={{ fontSize: 16 }}>The Best of all categories, your need and all in one platform</Text>
                    <Text style={{ fontSize: 16 }}>The ratting is frequently taken by customers and provide you the best of them. </Text>
                </View>
                <View style={{ paddingHorizontal: 20, marginVertical: 10 }}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: "center" }}>
                        <Text style={{ color: "rgb(191, 28, 28)", fontSize: 30, fontWeight: 'bold', textDecorationLine: "underline", }}>Hotels</Text>
                        <View style={{ display: "flex", flexDirection: 'column', gap: 0 }}>
                            <Ant name='swapright' size={23} color='black' />
                            <Text>Slide</Text>
                        </View>
                    </View>
                    <FlatList
                        data={HotelList}
                        renderItem={({ item }) => <View style={{ paddingRight: 20, paddingVertical: 20 }}>
                            <Text numberOfLines={1} style={{ fontSize: 20, paddingBottom: 10, color: 'black', fontWeight: "bold" }}>{item.title}</Text>
                            <Image style={{ justifyContent: "center", width: Dimensions.get('window').width - 50, height: 250 }} resizeMode='cover' source={item.url} />
                            {item.ratting === 5 ? <View style={{ display: 'flex', }}>
                                <View style={{ display: 'flex', flexDirection: "row", gap: 5, paddingTop: 10 }}>
                                    <Ant name='star' color='#fabd04' size={13} />
                                    <Ant name='star' color='#fabd04' size={13} />
                                    <Ant name='star' color='#fabd04' size={13} />
                                    <Ant name='star' color='#fabd04' size={13} />
                                    <Ant name='star' color='#fabd04' size={13} />
                                </View>
                                <Text>5 Rating</Text>
                            </View> :
                                <View style={{ display: 'flex', }}>
                                <View style={{ display: 'flex', flexDirection: "row", gap: 5, paddingTop: 10 }}>
                                    <Ant name='star' color='#fabd04' size={13} />
                                    <Ant name='star' color='#fabd04' size={13} />
                                    <FAwesome name='star-half-o' color='#fabd04' size={13} />
                                    <Ant name='staro' color='#fabd04' size={13} />
                                    <Ant name='staro' color='#fabd04' size={13} />
                                </View>
                                <Text>3.9 Rating</Text>
                            </View>
                            }

                        </View>
                        }
                        horizontal
                    />
                </View>

                <View style={{ paddingHorizontal: 20, marginVertical: 10 }}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: "center" }}>
                        <Text style={{ color: "rgb(191, 28, 28)", fontSize: 30, fontWeight: 'bold', textDecorationLine: "underline", }}>Restaurants</Text>
                        <View style={{ display: "flex", flexDirection: 'column', gap: 0 }}>
                            <Ant name='swapright' size={23} color='black' />
                            <Text>Slide</Text>
                        </View>
                    </View>
                    <FlatList
                        data={RestaurantsList}
                        renderItem={({ item }) => <View style={{ paddingRight: 20, paddingVertical: 20 }}>
                            <Text numberOfLines={1} style={{ fontSize: 20, paddingBottom: 10, color: 'black', fontWeight: "bold" }}>{item.title}</Text>
                            <Image style={{ justifyContent: "center", width: Dimensions.get('window').width - 50, height: 250 }} resizeMode='cover' source={item.url} />
                            {item.ratting === 4 ? <View style={{ display: 'flex', }}>
                                <View style={{ display: 'flex', flexDirection: "row", gap: 5, paddingTop: 10 }}>
                                    <Ant name='star' color='#fabd04' size={13} />
                                    <Ant name='star' color='#fabd04' size={13} />
                                    <Ant name='star' color='#fabd04' size={13} />
                                    <Ant name='star' color='#fabd04' size={13} />
                                    <Ant name='staro' color='#fabd04' size={13} />
                                </View>
                                <Text>4 Rating</Text>
                            </View> :
                                <View style={{ display: 'flex', }}>
                                <View style={{ display: 'flex', flexDirection: "row", gap: 5, paddingTop: 10 }}>
                                    <Ant name='star' color='#fabd04' size={13} />
                                    <Ant name='star' color='#fabd04' size={13} />
                                    <Ant name='star' color='#fabd04' size={13} />
                                    <Ant name='star' color='#fabd04' size={13} />
                                    <FAwesome name='star-half-o' color='#fabd04' size={13} />
                                </View>
                                <Text>4.2 Rating</Text>
                            </View>
                            }
                        </View>
                        }
                        horizontal
                    />
                </View>

                <View style={{ paddingHorizontal: 20, marginVertical: 10 }}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: "center" }}>
                        <Text style={{ color: "rgb(191, 28, 28)", fontSize: 30, fontWeight: 'bold', textDecorationLine: "underline", }}>Institutions</Text>
                        <View style={{ display: "flex", flexDirection: 'column', gap: 0 }}>
                            <Ant name='swapright' size={23} color='black' />
                            <Text>Slide</Text>
                        </View>
                    </View>
                    <FlatList
                        data={InstitutionList}
                        renderItem={({ item }) => <View style={{ paddingRight: 20, paddingVertical: 20 }}>
                            <Text numberOfLines={1} style={{ fontSize: 20, paddingBottom: 10, color: 'black', fontWeight: "bold" }}>{item.title}</Text>
                            <Image style={{ justifyContent: "center", width: Dimensions.get('window').width - 50, height: 250 }} resizeMode='cover' source={item.url} />
                            {item.ratting === 4 ? <View style={{ display: 'flex', }}>
                                <View style={{ display: 'flex', flexDirection: "row", gap: 5, paddingTop: 10 }}>
                                    <Ant name='star' color='#fabd04' size={13} />
                                    <Ant name='star' color='#fabd04' size={13} />
                                    <Ant name='star' color='#fabd04' size={13} />
                                    <Ant name='star' color='#fabd04' size={13} />
                                    <Ant name='staro' color='#fabd04' size={13} />
                                </View>
                                <Text>4 Rating</Text>
                            </View> :
                                <View style={{ display: 'flex', }}>
                                <View style={{ display: 'flex', flexDirection: "row", gap: 5, paddingTop: 10 }}>
                                    <Ant name='star' color='#fabd04' size={13} />
                                    <Ant name='star' color='#fabd04' size={13} />
                                    <Ant name='star' color='#fabd04' size={13} />
                                    <Ant name='star' color='#fabd04' size={13} />
                                    <FAwesome name='star-half-o' color='#fabd04' size={13} />
                                </View>
                                <Text>4.2 Rating</Text>
                            </View>
                            }
                        </View>}
                        horizontal
                    />
                </View>

                <View style={{ paddingHorizontal: 20, marginVertical: 10 }}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: "center" }}>
                        <Text style={{ color: "rgb(191, 28, 28)", fontSize: 30, fontWeight: 'bold', textDecorationLine: "underline", }}>Tip Places</Text>
                        <View style={{ display: "flex", flexDirection: 'column', gap: 0 }}>
                            <Ant name='swapright' size={23} color='black' />
                            <Text>Slide</Text>
                        </View>
                    </View>
                    <FlatList
                        data={TripPlacesList}
                        renderItem={({ item }) => <View style={{ paddingRight: 20, paddingVertical: 20 }}>
                            <Text numberOfLines={1} style={{ fontSize: 20, paddingBottom: 10, color: 'black', fontWeight: "bold" }}>{item.title}</Text>
                            <Image style={{ justifyContent: "center", width: Dimensions.get('window').width - 50, height: 250 }} resizeMode='cover' source={item.url} />
                            {item.ratting === 5 ? <View style={{ display: 'flex', }}>
                                <View style={{ display: 'flex', flexDirection: "row", gap: 5, paddingTop: 10 }}>
                                    <Ant name='star' color='#fabd04' size={13} />
                                    <Ant name='star' color='#fabd04' size={13} />
                                    <Ant name='star' color='#fabd04' size={13} />
                                    <Ant name='star' color='#fabd04' size={13} />
                                    <Ant name='star' color='#fabd04' size={13} />
                                </View>
                                <Text>5 Rating</Text>
                            </View> :
                                <View style={{ display: 'flex', }}>
                                <View style={{ display: 'flex', flexDirection: "row", gap: 5, paddingTop: 10 }}>
                                    <Ant name='star' color='#fabd04' size={13} />
                                    <Ant name='star' color='#fabd04' size={13} />
                                    <Ant name='star' color='#fabd04' size={13} />
                                    <Ant name='star' color='#fabd04' size={13} />
                                    <FAwesome name='star-half-o' color='#fabd04' size={13} />
                                </View>
                                <Text>4.2 Rating</Text>
                            </View>
                            }
                        </View>}
                        horizontal
                    />
                </View>

                <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: 'lightgray' }}>
                    <PreFooter />
                </View>
                <Footer navigation={navigation} />
            </ScrollView>
        </>
    )
}

export default Recommendation