import { View, Text, Image,Dimensions } from 'react-native'
import React from 'react'
import Loader from '../componenti/Element/LoadingIndicator'
const Widthi = Dimensions.get('window').width
const Heighti = Dimensions.get('window').height
const Loading = ({navigation}) => {
  return (
    <View style={{flex:1, backgroundColor:'#1f1e1c'}}>
    <Loader />
    </View>
  )
}

export default Loading