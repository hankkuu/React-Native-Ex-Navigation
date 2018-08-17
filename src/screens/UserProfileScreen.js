import React from 'react'
import {FlatList, View, TouchableOpacity, Text, Image} from 'react-native'
import {getAssetByFilename} from '../Asset'

export default class UserProfileScreen extends React.Component{

    render(){
        return (
            <View style={{flex:1}}>
                <Image 
                    style={{width:'100%', height:'100%', backgroundColor:'black', resizeMode:'contain'}} 
                    source={getAssetByFilename(this.props.navigation.state.params.imageFilename)}/>
                
                <TouchableOpacity style={{paddingTop:20, position:'absolute'}} onPress={() => this.props.navigation.goBack()}>
                    <Text style={{color:'white', fontSize:30, margin:20}}>✖</Text>
                </TouchableOpacity>

            </View>
        )
    }
}