import React, {Component} from 'react';
import Button from 'react-native-button';

import { styles } from './Components/styles';
import {
    Text,
    TextInput,
    View,
    Image,
    KeyboardAvoidingView,
    StatusBar,
    AsyncStorage
} from 'react-native';
import Vote from '../Main/index';
import Register from './Components/register';

let STORAGE_KEY = 'id_token';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
        };
    }

    async checkToken(item, selectedValue) {
        try {
            const value = await AsyncStorage.getItem(STORAGE_KEY);
            if (value !== null){
                // We have data!!
                this.state.token_value = value;
                console.log(this.state.token_value);
            }
        } catch (error) {
            // Error retrieving data
            console.log(error);
        }
    }

    async saveToken(item, selectedValue) {
        try {
            await AsyncStorage.setItem(item, selectedValue);
        } catch (error) {
            console.log('AsyncStorage error: ' + error.message);
        }
    }


    _navigateToMain = () => {
        this.props.navigator.push({
            component: Vote,
            title: 'Vote'
        });
    };

    _navigateToRegister = () => {
        this.props.navigator.push({
            component: Register,
            title: 'Register'
        });
    };

    _userLogin = () => {
        if (true) {
            return fetch("http://54.162.160.91/api/auth/login", {
                method: "POST",
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                })
            })
            .then((response) => response.json())
            .then((responseJson) => {
                this.saveToken(STORAGE_KEY, JSON.stringify(responseJson.token));
                this._navigateToMain();
            })
            .catch((error) => {
                console.error("Julian: " + error);
            });
        }
    };

    render() {

        return(

            <KeyboardAvoidingView behavior="padding" style={styles.container}>

                <StatusBar barStyle="dark-content"/>


                <View style={styles.logo}>
                    <Image source={require('../../img/fashionpo.png')}
                           style={{width:250, height:100, marginTop:30}}/>

                </View>
                <View style={styles.middle}>

                    <Text style={ styles.textHead }>User Email</Text>
                    <TextInput style={ styles.textInput }
                        onChangeText={ (email) => this.setState({email}) }
                        value={ this.state.email }
                        placeholder="sample@fit.edu"
                        placeholderTextColor='#a7a7a7'
                        autoCorrect={ false }
                        autoCapitalize='none'
                        keyboardType='email-address'
                        onSubmitEditing={ () => this.passwordInput.focus() }
                        returnKeyType='next'/>
                    <View style={styles.hairline}/>

                    <Text style={ styles.textHead }>Password</Text>
                    <TextInput style={ styles.textInput }
                        onChangeText={ (password) => this.setState({password}) }
                        value={ this.state.password }
                        secureTextEntry={ true }
                        autoCorrect={ false }
                        returnKeyType='next'/>
                    <View style={styles.hairline}/>

                </View>
                <Button
                    onPress={this._userLogin}
                    containerStyle={{padding:20, overflow:'hidden', borderRadius:5, backgroundColor: '#FFC305', marginLeft:25, marginRight:25,}}
                    style={{fontSize: 15, color: 'black', fontWeight:'100', letterSpacing:3 }}>

                    SIGN IN
                </Button>
                <Button
                    onPress={this._navigateToRegister}
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
