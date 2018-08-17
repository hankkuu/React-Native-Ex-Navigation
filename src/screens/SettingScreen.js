import React from 'react'
import {FlatList, View, TouchableOpacity, Text, Image} from 'react-native'
import {NavigationActions} from 'react-navigation';

import {DrawerOpenButton} from '../main'

export default class SettingScreen extends React.Component{

    static navigationOptions = props => ({
        title:'Settings',
        headerLeft:<DrawerOpenButton {...props}/>
    })

    render(){
        console.log('test', this.props.screenProps);
        return (
            <View style={{flex:1, justifyContent:'center'}}>
                <TouchableOpacity onPress={() => this.props.navigation.dispatch(NavigationActions.back())} style={{alignSelf:'center'}}>
                    <Text style={{fontSize:36}}>Log out</Text>
                </TouchableOpacity>
            </View>
        )
    }

}