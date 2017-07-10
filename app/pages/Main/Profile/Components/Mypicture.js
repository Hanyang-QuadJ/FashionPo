import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    Navigator,
    ListView,
    Image,

} from 'react-native'



export default class Mypicture extends Component{


    render(){
        return(
            <View style={styles.container}>
                <Image />
            </View>






        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",

    },



});