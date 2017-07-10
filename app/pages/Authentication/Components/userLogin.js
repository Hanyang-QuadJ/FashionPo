import React, { Component } from 'react';
import {
	AppRegistry,
	ActivityIndicator,
	ListView,
	StyleSheet,
	TouchableHighlight,
	AlertIOS,
	AsyncStorage,
	Text,
	View } from 'react-native';
import t from 'tcomb-form-native';

var STORAGE_KEY = 'id_token';

var Form = t.form.Form;

var Person = t.struct({
	username: t.String,
	password: t.String,
});

const options = {};

export default class UserLogin extends Component {

	async _onValueChange(item, selectedValue) {
		try {
			await AsyncStorage.setItem(item, selectedValue);
		} catch (error) {
			console.log('AsyncStorage error: ' + error.message);
		}
	}

	async _getProtectedQuote() {
		var DEMO_TOKEN = await AsyncStorage.getItem(STORAGE_KEY);
		fetch("http://localhost:3001/api/protected/random-quote", {
			method: "GET",
			headers: {
				'Authorization': 'Bearer ' + DEMO_TOKEN
			}

		})
		.then((response) => response.text())
		.then((quote) => {
			AlertIOS.alert(
				'julian kwon quote: ', quote)
		})
		.done();
	}

	async _userLogout() {
		try {
			await AsyncStorage.removeItem(STORAGE_KEY);
			AlertIOS.alert('Logout Success!');
		} catch (error) {
			console.log('Async error: ', error);
		}
	}

	_userSignup() {
		var value = this.refs.form.getValue();
		if (value) {
			fetch("http://localhost:3001/users", {
				method: "POST",
				headers: {
					'Accept' : 'application/json',
					'Content-Type' : 'application/json'
				},
				body : JSON.stringify({
					email: value.email,
					password: value.password,
				})
			})
			.then((response) => response.json())
			.then((responseData) => {
				this._onValueChange(STORAGE_KEY, responseData.id_token),
				AlertIOS.alert(
	        "Signup Success!"
      	)
			})
			.done();
		}
	}

	render() {
	  return (
	    <View style={styles.container}>
	      <View style={styles.row}>
	        <Text style={styles.title}>Signup/Login below for Chuck Norris Quotes!</Text>
	      </View>
	      <View style={styles.row}>
	        <Form
	          ref="form"
	          type={Person}
	          options={options}
	        />
	      </View>
	      <View style={styles.row}>
	        <TouchableHighlight style={styles.button} onPress={this._userSignup} underlayColor='#99d9f4'>
	          <Text style={styles.buttonText}>Signup</Text>
	        </TouchableHighlight>
	        <TouchableHighlight style={styles.button} onPress={this._userLogin} underlayColor='#99d9f4'>
	          <Text style={styles.buttonText}>Login</Text>
	        </TouchableHighlight>
	      </View>
	      <View style={styles.row}>
	        <TouchableHighlight onPress={this._getProtectedQuote} style={styles.button}>
	          <Text style={styles.buttonText}>Get a Chuck Norris Quote!</Text>
	        </TouchableHighlight>
	      </View>
	    </View>
	  );
	}
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});