import React, {Component} from 'react';
import {
    Text,
    TextInput,
    View,
    Image,
    StyleSheet,
    AlertIOS
} from 'react-native';
import Button from 'react-native-button';
import {styles} from './styles';
import Login from '../index';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            username: null,
            password: null
        };
    }

    _navigateToLogin = () => {
        this.props.navigator.push({
            component: Login,
            title: 'Login'
        });
    };



    _userResister = () => {
        if (true) {
            return fetch("http://54.162.160.91/api/auth/register", {
                method: "POST",
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    email: this.state.email,
                    username: this.state.username,
                    password: this.state.password
				})
            })
            .then((response) => response.json())
            .then((responseJson) => {
                this._navigateToLogin();
            })
            .catch((error) => {
                console.error(error);
            });
        }
    };

    render() {
        return (
			<View>
				<View>
                    <Text style={ styles.textHead }>User Name</Text>
                    <TextInput style={ styles.textInput }
                               onChangeText={(username) => this.setState({username})}
                               value={this.state.username}
                               placeholder="username"
                               placeholderTextColor='#a7a7a7'
                               autoCorrect={ false }
                               autoCapitalize='none'
                               returnkeytype='next'/>
                    <View style={styles.hairline}/>

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
                    <Button
                        onPress={this._userResister}
                        containerStyle={{padding:20, overflow:'hidden', borderRadius:5, backgroundColor: '#FFC305', marginLeft:25, marginRight:25,}}
                        style={{fontSize: 15, color: 'black', fontWeight:'100', letterSpacing:3 }}>
                        Register
                    </Button>

				</View>
				<View></View>
			</View>
        );
    }
}