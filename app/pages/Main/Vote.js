import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    Navigator,

} from 'react-native'



export default class Vote extends Component{
    render(){
        return(


            <Text style={styles.main}>Vote</Text>


        );
    }
}
const styles = StyleSheet.create({
    main:{
        flex:2,
        fontSize: 30,
        padding: 100,
        justifyContent:'center',
        alignItems:'center',
        textAlign: 'center',
    }

});