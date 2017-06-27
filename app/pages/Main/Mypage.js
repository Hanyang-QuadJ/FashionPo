import React, {Component} from 'react'
import Button from 'react-native-button'
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import {
    Text,
    View,
    Image,
    StyleSheet,
    Navigator,
    ScrollView,
    StatusBar,
    Dimensions,



    TouchableOpacity,

} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import FitImage from 'react-native-fit-image'
import Follow from './MypageTab'




export default class Mypage extends Component{


    render(){


        return(
            <ScrollView style={styles.container}>


                <View style={styles.overlay}>
                    <FitImage source={require('../../img/cover.png')} style={styles.cover} />
                    <Text style={styles.name}>Lee Haran</Text>
                </View>
                <Image source={require('../../img/profile.png')} style={styles.profile}/>


                <View style={styles.buttonArea}>

                    <Text style={styles.buttonLeft}>Followers{"\n"}     <Text style={styles.number}>10</Text></Text>

                    <Text style={styles.buttonRight}>Post{"\n"} <Text style={styles.number}>20</Text></Text>



                </View>



                <View style={styles.description}>
                    <Follow/>


                </View>









            </ScrollView>

        );
    }
}
const win = Dimensions.get('window');
const styles = StyleSheet.create({


    description:{
        flex:5,
        flexDirection:'row',
        justifyContent: 'space-between', // step 2
        alignItems: 'center', // step 3
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
    name:{
      position:'absolute',
        top:120,
        left:20,
        bottom:0,
        color: 'white',
        fontSize:15,
        backgroundColor:'transparent'
    },
    buttonArea:{

        backgroundColor: "transparent",

        paddingTop:20,
        paddingBottom:10,
        flexDirection: 'row', // step 1
        justifyContent: 'space-between', // step 2
        alignItems: 'center', // step 3
    },
    buttonLeft:{
        paddingLeft:40,
        color: "black",

    },
    myPicture:{
        flex: 2,
        backgroundColor:'blue',

    },
    buttonRight:{

        paddingRight:45,
        color:"black",

    },
    number:{
        fontSize:20,
        fontWeight:'500',


    },


    container: {
        flex: 0.6,
        flexDirection: 'column',
    },


});