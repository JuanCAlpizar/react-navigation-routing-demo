import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Home extends React.Component{    
    render(){
        return (                            
            <View style={styles.mainContainer}>             
                <View style={styles.contentWrapper}>
                    <Text>Hi! I'm the home component</Text>
                </View>
            </View>            
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentWrapper: {
        padding: 20
    }
});