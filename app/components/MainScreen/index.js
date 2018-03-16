import React, { Component } from 'react';
import { Platform, View, Text } from 'react-native'

import { STATUS_BAR_HEIGHT } from '../../constants'

class MainScreen extends Component {
    static navigationOptions = () => ({
        title: 'KodiakApp',
        headerStyle: {
            height: Platform.os === 'android' ? 54 + STATUS_BAR_HEIGHT : 54,
            backgroundColor: '#2196F3'
        },
        headerTitleStyle: {
            marginTop: Platform.os === 'android' ? STATUS_BAR_HEIGHT: 0,
        },
        headerLeft: <View><Text>I</Text></View>,
    })

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#ddd'}}>
                <Text>Hi</Text>
            </View>
        );
    }
}

export default MainScreen;