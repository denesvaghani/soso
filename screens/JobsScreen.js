import React, { Component } from 'react';

import { StyleSheet, TextInput, View, Alert, Button, Text, AsyncStorage } from 'react-native';


export class JobsScreen extends Component {

    render() {
        return (
            <View style={styles.MainContainer}>
                <Text>
                    JobsScreen
                </Text>
            </View>
        )
    }
}

JobsScreen.navigationOptions = {
    headerShown: false,
};

const styles = StyleSheet.create({

    MainContainer: {

        justifyContent: 'center',
        flex: 1,
        margin: 10,
    },

});