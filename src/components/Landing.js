import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class Landing extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <View style={styles.content}>
                <TouchableOpacity onPress={() => this.props.setLayout('router-a')}>
                    <Text>Render Nested TabNavigator</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.setLayout('router-b')}>
                    <Text>Render Nested StackNavigators</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});