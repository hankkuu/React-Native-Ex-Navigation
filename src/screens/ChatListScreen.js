import React from 'react'
import {FlatList, View, TouchableOpacity, Text, Image} from 'react-native'
import {getAssetByFilename} from '../Asset'

export default class ChatListScreen extends React.Component{

    static navigationOptions = {
        title:'Chat List',
        tabBarIcon:({tintColor}) => <Image style={{width:40, height:40, tintColor:tintColor}} source={require('../../assets/icon_chat.png')}/>
    }

    constructor(){
        super();

        this.state = {
            chatlist:[
                {id:'0', name:'Sunki Baek', text:'When are your coming?', photoFilename:"pic1.jpg"},
                {id:'1', name:'Comet Kim', text:'Hello buddy.', photoFilename:"pic2.jpg"},
                {id:'2', name:'Bright Lee', text:'I\'m gonna get there at 3.', photoFilename:"pic3.jpg"}
            ]
        }
    }

    render(){
        return (
            <FlatList
                data={this.state.chatlist}
                keyExtractor={item => item.id}
                renderItem={item => (
                    <TouchableOpacity 
                        onPress={() => {this.props.navigation.navigate('chat', {name:item.item.name, photoFilename:item.item.photoFilename});}}
                        style={{width:'100%', height:70, flexDirection:'row', paddingHorizontal:20, borderBottomWidth:1, borderColor:'#0002'}}>
                        <Image style={{alignSelf:'center', resizeMode:'cover', width:50, height:50, borderRadius:25}} source={getAssetByFilename(item.item.photoFilename)}/> 
                        <View style={{alignSelf:'center', marginLeft:10}}>
                            <Text style={{color:'gray'}}>{item.item.name}</Text>
                            <Text>{item.item.text}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        )
    }

}