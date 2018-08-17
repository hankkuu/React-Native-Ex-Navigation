import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    StatusBar,
    Image,
    TouchableOpacity,
    Platform
} from "react-native";
import {createMaterialTopTabNavigator, createStackNavigator, createDrawerNavigator} from 'react-navigation'

import FriendsListScreen from './screens/FriendListScreen'
import ChatListScreen from './screens/ChatListScreen'
import ChatScreen from './screens/ChatScreen'
import LoginScreen from './screens/LoginScreen'
import SettingScreen from './screens/SettingScreen'
import UserProfileScreen from './screens/UserProfileScreen'
import AdvancedScreen from './screens/AdvancedScreen'



export const DrawerOpenButton = (props) => (
    <TouchableOpacity onPress={() => props.navigation.openDrawer('DrawerOpen')}>
        <Image style={{marginLeft:15, width:24, height:24}} source={require('../assets/icon_hamburger.png')}/>
    </TouchableOpacity>
)

const TabNavigationOptions = (props) => ({
    title:'Sample App',
    headerStyle:{backgroundColor:'#4d3241', borderBottomColor: 'transparent', borderBottomWidth: 0, elevation: 0},
    headerLeft:<DrawerOpenButton {...props} />
})

const StackNavigationOptions = (props) => ({
    headerStyle:{backgroundColor:'#4d3241'},
    headerTitleStyle:{color:'white'},
    headerTintColor:'white',
    headerBackTitle:null,
})

const Tab = createMaterialTopTabNavigator({
    friendslist:{screen:FriendsListScreen},
    chatlist:{screen:ChatListScreen}
},{
    tabBarOptions:{
        activeTintColor:'#4d3241',
        style:{backgroundColor:Platform.select({ios:'white', android:'#4d3241'}), borderTopColor: 'transparent', borderTopWidth: 0, elevation: 0},
        labelStyle:{color:Platform.select({ios:null, android:'#fff'})},
        indicatorStyle:{backgroundColor:'#fff'},
    }
})


const Stack = createStackNavigator({
    root:{screen:Tab, navigationOptions:TabNavigationOptions},
    chat:{screen:ChatScreen},
    advanced:{screen:AdvancedScreen}
},{
    navigationOptions:StackNavigationOptions,
    //transitionConfig:getSlideFromRightTransition
})

const Stack_Setting = createStackNavigator({
    root: { screen: SettingScreen }
}, {
    navigationOptions: StackNavigationOptions
})

const Drawer = createDrawerNavigator({
    main: { screen: Stack },
    setting: { screen: Stack_Setting }
}, {
    navigationOptions: {
        drawerLockMode: 'locked-closed'
    },
    backBehavior:'none'
})

const ModalStack = createStackNavigator({
    logout: { screen: LoginScreen },
    login: { screen: Drawer },
    userprofile: { screen: UserProfileScreen }
}, {
    mode: 'modal',
    headerMode: 'none'
})

class Main extends Component {
    render() {
        return (
            <StatusBar key='statusbar' barStyle="light-content"/>,
            <ModalStack key='navigation'/>
        );
    }
}
export default Main;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});