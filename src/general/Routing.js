import React from 'react';
import { StyleSheet, Platform, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Home from '../components/Home';
import Profile from '../components/Profile';


const styles = StyleSheet.create({
    //calculate the translucent status bar in expo to match material design standards
    mainHeader: {        
        paddingTop: (Platform.OS === 'android') ? Expo.Constants.statusBarHeight : 20,
        height: ( (Platform.OS === 'android') ? 56 : 44 ) + Expo.Constants.statusBarHeight
    },
    headerTitle: {
        alignSelf: 'center'
    }
});

const MainNavigation = TabNavigator ({
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Home',
            headerStyle: styles.mainHeader,
            headerTitleStyle: styles.headerTitle,
            tabBarIcon: ({ tintColor }) => (
                <Icon name="home" size={24} color="#fff" style={{color: tintColor}} />
            )
        }
    },
    Profile:{
        screen: Profile,
        navigationOptions: {
            title: 'Profile',
            headerStyle: styles.mainHeader,
            headerTitleStyle: styles.headerTitle,
            tabBarIcon: ({ tintColor }) => (
                <Icon name="user" size={24} color="#fff" style={{color: tintColor}} />
            )
        }
    }
},
{
    tabBarPosition: 'bottom',
    tabBarOptions: {
        showIcon: true,
    }    
});

const RootNavigator = StackNavigator ({
    Home: {
        screen: MainNavigation
    }
});

export default RootNavigator;