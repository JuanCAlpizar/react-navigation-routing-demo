import React from 'react';
import { StyleSheet, Platform, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Home from '../components/Home';
import Profile from '../components/Profile';


const styles = StyleSheet.create({
    mainHeader: {        
        paddingTop: (Platform.OS === 'android') ? Expo.Constants.statusBarHeight : 20,
        height: ( (Platform.OS === 'android') ? 56 : 44 ) + Expo.Constants.statusBarHeight
    },
    headerTitle: {
        alignSelf: 'center'
    },
    icon: {
        width: 40, 
        height: 35
    }
});

const RootNavigator = TabNavigator ({
    Home: {
        screen: StackNavigator({
            Home: {
                screen: Home,
                navigationOptions: {
                    headerTitle: 'Home',
                    headerStyle: styles.mainHeader,
                    headerTitleStyle: styles.headerTitle,
                }
            }
        }),
        navigationOptions: {
            title: 'Home',            
            tabBarIcon: ({ tintColor }) => (
                <Icon name="home" size={24} color="#fff" style={{color: tintColor}} />
            )
        }
    },
    Profile:{
        screen: StackNavigator({
            Profile: {
                screen: Profile,
                navigationOptions: {
                    headerTitle: 'Profile',
                    headerStyle: styles.mainHeader,
                    headerTitleStyle: styles.headerTitle,
                }
            }
        }),
        navigationOptions: {
            title: 'Profile',            
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

export default RootNavigator;