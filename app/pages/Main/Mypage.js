import React, {Component} from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet,
    Navigator,
    StatusBar,
    Dimensions,


    TouchableOpacity,

} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import FitImage from 'react-native-fit-image'



export default class Mypage extends Component{


    render(){


        return(

            <View style={styles.container}>
                <View style={styles.overlay}>
                    <FitImage source={require('../../img/cover.png')} style={styles.cover} />
                </View>
                <Image source={require('../../img/profile.png')} style={styles.profile}/>


                <View style={styles.buttonArea}>

                        <Text style={styles.buttonLeft}>Followers</Text>
                    <Text style={styles.buttonRight}>Post</Text>


                </View>

                <View style={styles.description}></View>




            </View>

        );
    }
}
const win = Dimensions.get('window');
const styles = StyleSheet.create({
    main:{
        flex:2,
        fontSize: 30,
        padding: 100,
        justifyContent:'center',
        alignItems:'center',
        textAlign: 'center',
    },
    navbar: {
        paddingTop: 20,
        height: 64,
        backgroundColor: "#ffc305",
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#DDDDDD',
        paddingHorizontal: 12,
        flexDirection: 'row', // step 1
        justifyContent: 'space-between', // step 2
        alignItems: 'center', // step 3
    },
    description:{
        flex:1,
        backgroundColor:'yellow'
    },

    titleText: {
        fontWeight: '600',
        color: 'black',
    },
    rightText: {
        color: 'black',
    },
    cover:{
        opacity:0.5,
        width:win.width,
        height:150,
        alignSelf: 'stretch',
        resizeMode: 'cover',



    },
    profile:{
        alignSelf:'center',
        position:'absolute',
        top:100,
        width:100,
        height:100,
        borderRadius:50,

    },
    overlay:{
        backgroundColor: 'black'
    },
    buttonArea:{
        flex:.4,
        backgroundColor: "transparent",
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#DDDDDD',
        paddingHorizontal: 4,
        flexDirection: 'row', // step 1
        justifyContent: 'space-between', // step 2
        alignItems: 'center', // step 3
    },
    buttonLeft:{
        paddingLeft:40,
        color: "black",

    },
    buttonRight:{

        paddingRight:40,
        color:"black",

    },

    container: {
        flex: 0.6,
        flexDirection: 'column',
    },


});