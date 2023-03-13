import { View, Text, Image, Dimensions, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar'
import ImageModal from '../Hotels/ImageModal'
import PreFooter from '../PreFooter'
import Footer from '../Footer'
import FontA from 'react-native-vector-icons/FontAwesome'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import Material from 'react-native-vector-icons/MaterialIcons'
const InstitutionDetails = ({ navigation, route }) => {
  const [image, setImage] = useState('https://firebasestorage.googleapis.com/v0/b/products-c26e6.appspot.com/o/Hotels%2FTulip3.png?alt=media&token=4de278c4-e4ce-4e2f-b900-249451aab50a')
  const [visible, setVisible] = useState(false)
  const closeModal = () => {
    setVisible(false)
  }
  const [commentLoading, setCommentLoading] = useState(false)
  const [comments, setComments] = useState('')
  const { element } = route.params;
  const [update, setUpdate] = useState(false)
  const [list, setList] = useState([])
  const handleComments = () => {
    firestore().collection('Institutions').doc(element.id).update({
      feedback: [...element.feedback, {
        'name': auth().currentUser.displayName,
        'comment': comments

      }]
    }).then(() => {
      setComments('')
      setUpdate(!update)
      Alert.alert("Success", "Feedback Added")
    })
  }

  useEffect(() => {
    getComments()
  }, [update])

  const getComments = async () => {

    setCommentLoading(true)

    firestore().collection('Institutions').get().then((snapshot) => {
      snapshot.forEach((doc) => {
        if (doc.id === element.id) {
          const { feedback } = doc.data();
          setList(feedback)
        }
      })
    })

    setCommentLoading(false)

  }
  return (
    <>
      <ScrollView>
        <View style={{ borderBottomWidth: 1, borderBottomColor: "lightgray" }}>
          <Navbar navigation={navigation} />
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 25, color: "rgb(191, 28, 28)", marginVertical: 10, fontWeight: "bold" }}>{element.name}</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Image style={{ width: Dimensions.get('window').width - 50, height: 250, borderRadius: 10 }} source={{ uri: element.image[0] }} resizeMode='contain' />
        </View>
        <View style={{ display: "flex", flexWrap: 'wrap', marginVertical: 10, flexDirection: "row", justifyContent: 'space-between', paddingHorizontal: 30 }} >
          {element.image.map((img, index) => {
            return <TouchableOpacity key={index} onPress={() => { setImage(img); setVisible(true) }}>
              <Image resizeMode='cover' style={{ width: Dimensions.get('window').width / 3, height: 150, borderRadius: 10, marginVertical: 10 }} source={{ uri: img }} />
            </TouchableOpacity>
          })}
        </View>

        <View style={{ padding: 10 }}>
          <Text style={{ color: 'rgb(191 28 28)', fontSize: 30, fontWeight: 'bold' }}>Feedback</Text>
          <View style={{ display: "flex", flexDirection: 'row', gap: 10, marginVertical:10, paddingHorizontal:20 }}>
            <TouchableOpacity onPress={()=>{Alert.alert("Ratting Saved", "Thank you for ratting")}} ><Material name='stars' size={23} color='#fabd04'  /></TouchableOpacity>
            <TouchableOpacity onPress={()=>{Alert.alert("Ratting Saved", "Thank you for ratting")}} ><Material name='stars' size={23} color='#fabd04'  /></TouchableOpacity>
            <TouchableOpacity onPress={()=>{Alert.alert("Ratting Saved", "Thank you for ratting")}} ><Material name='stars' size={23} color='#fabd04'  /></TouchableOpacity>
            <TouchableOpacity onPress={()=>{Alert.alert("Ratting Saved", "Thank you for ratting")}} ><Material name='stars' size={23} color='#fabd04'  /></TouchableOpacity>
            <TouchableOpacity onPress={()=>{Alert.alert("Ratting Saved", "Thank you for ratting")}} ><Material name='stars' size={23} color='#fabd04'  /></TouchableOpacity>
          </View>
          <View style={{ backgroundColor: 'white', boxShadow: '0px 5px 7px 0px rgb(114 114 114 / 25%)', borderRadius: 10, borderTopWidth: 1, borderTopColor: "lightgray" }}>

            {list.map((feedback, index) => {
              return <View key={index} style={{ display: 'flex', flexDirection: 'column', gap: 7, marginVertical: 5, padding: 15 }}>
                <View style={{ display: "flex", flexDirection: 'row', gap: 4, alignItems: 'center' }}>
                  <FontA name='user' size={23} />
                  <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', }}>{feedback.name}</Text>
                </View>
                <View className='d-flex flex-column ' >
                  <Text style={{ fontSize: 14, color: 'black', paddingRight: 18 }}>{feedback.comment}</Text>
                </View>
              </View>
            })}

          </View>

          <View style={{ alignItems: 'center', display: 'flex', flexDirection: 'row', marginVertical: 10, justifyContent: "space-between", paddingHorizontal: 10 }} >
            <View>
              <FontA name='user' size={23} />
            </View>

            <TouchableOpacity style={{ width: Dimensions.get('window').width - 100 }} onPress={() => {
              if (!auth().currentUser) {
                Alert.alert('Please Login to Send Feedback')
              }
            }} >
              <TextInput value={comments} onChangeText={setComments} editable={auth().currentUser ? true : false} style={{ borderWidth: 1, borderColor: 'lightgray', borderRadius: 12, width: "100%", padding: 12 }} placeholder='Enter Feedback' />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { handleComments() }}>
              <FontA name='send-o' size={23} />
            </TouchableOpacity>

          </View>
        </View>

        <View style={{ alignItems: "center", marginVertical:20, paddingHorizontal:30}}>
          <Text style={{ fontSize: 25, textAlign: "center", fontWeight: "bold", color: 'rgb(191, 28, 28)' }}>Note: Please use our Web Application for further Details!</Text>
        </View>

        <View style={{borderTopWidth:1, borderTopColor:'lightgray', paddingBottom:10}}></View>


        <View style={{ paddingHorizontal: 20, }}>
          <PreFooter />
        </View>
        <Footer navigation={navigation} />
        <ImageModal img={image} showMoadl={visible} closeModal={closeModal} />
      </ScrollView>
    </>
  )
}

export default InstitutionDetails