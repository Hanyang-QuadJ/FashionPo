
import React, {Component} from 'react'
import Button from 'react-native-button'
import PropTypes from 'prop-types';



import { styles } from './Components/styles'
import {
    InputGroup,
    Input,
    Text,
    TextInput,
    View,
    StyleSheet,
    Image,
    KeyboardAvoidingView,
    StatusBar,
    AsyncStorage,
    AlertIOS

} from 'react-native';
import Vote from '../Main/index';

var STORAGE_KEY = 'id_token';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            emailText: '',
            passwdText: '',
        };

    }

    async _onValueChange(item, selectedValue) {
        try {
            await AsyncStorage.setItem(item, selectedValue);
        } catch (error) {
            console.log('AsyncStorage error: ' + error.message);
        }
    }


    _navigateToMain = ()=> {
        this.props.navigator.push({
            component: Vote,
            title: 'Vote'
        });
    }

    _userLogin() {
        if (true) {
            return fetch("http://54.162.160.91/api/auth/login", {
                method: "POST",
                body: JSON.stringify({
                    email: this.state.emailText,
                    password: this.state.passwdText
                })
            })
            .then((response) => response.json())
            .then((responseJson) => {
                this._onValueChange(STORAGE_KEY, responseJson.token),
                AlertIOS.alert("Response Body -> " + JSON.stringify(responseJson.message))
            })
            .catch((error) => {
                console.error(error);
            });
        }
    }

    // componentDidMount() {
    //     return fetch("http://54.162.160.91/api/post/new", {
    //         method: "POST",
    //         headers: {
    //             "x-access-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OTVjOGY3MTkwY2M0MjVmYmRjODJhMGUiLCJlbWFpbCI6Inlvb25qZWV3b29AZ21haWwuY29tIiwiaWF0IjoxNDk5MjM4OTA0LCJleHAiOjE0OTk4NDM3MDQsImlzcyI6InZlbG9wZXJ0LmNvbSIsInN1YiI6InVzZXJJbmZvIn0.SVpQjqfQWVtcpMfov59E1Uq_gSgAkmM9-HjTwvWdk1c"
    //         },
    //         body: JSON.stringify({
    //             "picURL": "https://post.com",
    //             "comments": {
    //                     "text": "String",
    //                     "by": "String",
    //                     "createdAt": "2017-05-11"
    //                 },
    //             "tags" : [{"tag":"#nice"},{"tag":"#great"}],
    //             "likeCnt": 3
    //         })
    //     })
    //     .then((response) => response.json() )
    //     .then((responseJson) => {
    //         console.log("Response Body -> " + JSON.stringify(responseJson.token));
    //     })
    //     .catch((error) => {
    //         console.error(error);
    //     });
    // }


    render(){

        return(


            <KeyboardAvoidingView behavior="padding" style={styles.container}>

                <StatusBar barStyle="dark-content"/>


                <View style={styles.logo}>
                    <Image source={require('../../img/fashionpo.png')}
                           style={{width:250,height:100, marginTop:30}}/>

                </View>
                <View style={styles.middle}>

                    <Text style={ styles.textHead }>User Email</Text>
                    <TextInput style={ styles.textInput }
                        onChangeText={ (text) => this.setState({emailText: text}) }
                        value={ this.state.emailText }
                        placeholder="sample@fit.edu"
                        placeholderTextColor='#a7a7a7'
                        autoCorrect={ false }
                        keyboardType="email-address"
                        onSubmitEditing={ () => this.passwordInput.focus() }
                        returnKeyType="next"/>
                    <View style={styles.hairline}/>
                    <Text>{ this.emailText }</Text>

                    <Text style={ styles.textHead }>Password</Text>
                    <TextInput style={ styles.textInput }
                        onChangeText={ (text) => this.setState({passwdText: text}) }
                        value={ this.state.passwdText }
                        secureTextEntry={ true }
                        autoCorrect={ false }
                        returnKeyType="go"
                        secureTextEntry={ true }/>
                    <View style={styles.hairline}/>

                </View>
                <Button
                    onPress={this._navigateToMain}
                    containerStyle={{padding:20, overflow:'hidden', borderRadius:5, backgroundColor: '#FFC305', marginLeft:25, marginRight:25,}}
                    style={{fontSize: 15, color: 'black', fontWeight:'100', letterSpacing:3 }}>

                    SIGN IN
                </Button>
                <Button
                    style={{fontSize: 10, color: 'black', padding: 20, letterSpacing: 3}}>
                    SIGN UP
                </Button>
                <Button
                    style={{fontSize: 10, color: 'black', padding:20, letterSpacing:3}}
                    styleDisabled={{color: 'red'}}
                    onPress={() => this._handlePress()}>
                    FORGOT YOUR PASSWORD?
                </Button>

            </KeyboardAvoidingView>

        );

    }
}
