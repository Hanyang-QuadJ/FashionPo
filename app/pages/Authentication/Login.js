import React, {Component,PropTypes} from 'react'
import Button from 'react-native-button'

import { styles } from './styles'
import {
    NavigatorIOS,
    Text,
    TextInput,
    View,
    StyleSheet,
    Image,
    KeyboardAvoidingView,
    StatusBar,
    AsyncStorage,

} from 'react-native'
import Vote from '../Main/Main';


export default class Login extends Component{

    // constructor(props){
    //     super(props)
    //     this.state = {
    //         email: '',
    //         password: '',
    //     }
    //
    // }
    // _handlePress() {
    //     console.log('Pressed!');
    // }
    _navigateToMain = ()=> {
        this.props.navigator.push({
            component: Vote,
            title: 'Vote'
        });
    };



    render(){
        return(


            <KeyboardAvoidingView behavior="padding" style={styles.container}>

                <StatusBar barStyle="dark-content"/>


                <View style={styles.logo}>
                    <Image source={require('../../img/fashionpo.png')}
                           style={{width:250,height:100, marginTop:30
                           }}
                    />

                </View>
                <View style={styles.middle}>
                    <Text style={styles.textHead}>User Email</Text>
                    <TextInput style={styles.textInput}
                        // onChangeText={(text) => this.setState({email: text})}
                        // value={this.state.email}
                               placeholder="sample@fit.com"
                               placeholderTextColor='#a7a7a7'
                               autoCorrect={false}
                               keyboardType="email-address"
                               onSubmitEditing={()=> this.passwordInput.focus()}

                               returnKeyType="next"/>
                    <View style={styles.hairline}/>
                    <Text style={styles.textHead}>Password</Text>
                    <TextInput style={styles.textInput}
                        // onChangeText={(text) => this.setState({password: text})}
                        // value={this.state.password}


                               autoCorrect={false}
                               returnKeyType="go"
                               ref={(input) => this.passwordInput = input}
                               secureTextEntry={true}/>
                    <View style={styles.hairline}/>

                </View>
                <Button
                    onPress={this._navigateToMain}
                    containerStyle={{padding:20, overflow:'hidden', borderRadius:5, backgroundColor: '#FFC305', marginLeft:25, marginRight:25,}}
                    style={{fontSize: 15, color: 'black', fontWeight:'100', letterSpacing:3 }}>

                    SIGN IN
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
