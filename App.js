import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Landing from './src/components/Landing';
import NestedTabNavigator from './src/components/NestedTabNavigator';
import NestedStackNavigator from './src/components/NestedStackNavigator';

export default class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            renderLayout: 'initial'
        }
    }

    setLayout = (layout) => {
        this.setState({renderLayout: layout});
    }

    renderLayout = () => {
        let layout = undefined;

        switch (this.state.renderLayout){
            case 'initial':
                layout = (
                    <Landing setLayout={this.setLayout}/>
                );
                break;
            case 'router-a':                
                layout = (
                    <NestedTabNavigator />
                );
                break;
            case 'router-b':
                layout = (
                    <NestedStackNavigator />
                );
                break;
            default:
                layout = (
                    <Landing />
                );
        }

        return layout;
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderLayout()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
   container: {
       flex: 1
   } 
});