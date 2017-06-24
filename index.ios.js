import React, { Component, } from 'react';

import {
    AppRegistry,
    NavigatorIOS,
    Navigator} from 'react-native';

import Login from "./app/pages/Authentication/Login";

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

AppRegistry.registerComponent('FashionPo', () => FashionPo);
