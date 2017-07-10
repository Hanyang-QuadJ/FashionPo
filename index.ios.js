import React, { Component, } from 'react';

import {
    AppRegistry,
    View,
    StyleSheet,
    NavigatorIOS,
    AsyncStorage,
    Navigator} from 'react-native';

import Login from './app/pages/Authentication';
import Vote from './app/pages/Main/Vote/Vote';

let STORAGE_KEY = 'id_token';

class CustomNavigate extends Component {
    render() {
        return (
            <NavigatorIOS
                style={{flex:1}}
                navigationBarHidden={true}
                initialRoute={{
                    component: this.props.nextpage,
                    title: this.props.nextPageName,
                }}
            />
        )
    }
}

export default class FashionPo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            token_value: null,
            nextPage: null,
            nextPageName: null
        }
    }

    ComponentWillMount() {
        if (AsyncStorage.getItem(STORAGE_KEY)) {
            this.setState(previousState => {
                return { nextPage: Vote, nextPageName: 'Vote' };
            });
        } else {
            this.setState(previousState => {
                return { nextPage: Login, nextPageName: 'Login' };
            });
        }
    };

    render() {
        return (
            <CustomNavigate nextpage={this.state.nextPage} nextpageName={this.state.nextPageName}/>
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
