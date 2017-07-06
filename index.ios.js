import React, { Component, } from 'react';

import {
    AppRegistry,
    View,
    StyleSheet,
    NavigatorIOS,
    Navigator} from 'react-native';

import Login from './app/pages/Authentication';


export default class FashionPo extends Component {
    render() {
        return (
            <NavigatorIOS
                style={{flex:1}}
                navigationBarHidden={true}
                initialRoute={{
                    component:Login,
                    title: "Login",
                }}
            />

        );
    }

}
const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:10,
    }
});

AppRegistry.registerComponent('FashionPo', () => FashionPo);
