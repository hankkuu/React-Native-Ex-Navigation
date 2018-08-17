import React from 'react'
import {FlatList, View, TouchableOpacity, Text, Image} from 'react-native'

export default class ChatScreen extends React.Component{

    static navigationOptions = (props) => ({
        title:'Chat with ' + props.navigation.state.params.name,
        headerRight:
            <TouchableOpacity onPress={() => props.navigation.navigate('userprofile', {imageFilename:props.navigation.state.params.photoFilename})}>
                <Text style={{marginHorizontal:15, color:'white'}}>Info</Text>
            </TouchableOpacity>
    })

    render(){
        return (
            <View>
                <Text style={{margin:20, fontSize:24}}>{this.props.navigation.state.params.name}'s saying blah blah blah.</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('advanced', {keyGoBackToRoot:this.props.navigation.state.key})} style={{margin:20}}>
                    <Text style={{color:'blue'}}>Advanced Technique</Text>
                </TouchableOpacity>
            </View>
        )
    }
}