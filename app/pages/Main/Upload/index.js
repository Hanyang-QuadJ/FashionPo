import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    Navigator,
    TouchableOpacity,
    StatusBar,
    Image,
    ScrollView,



} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import ControlTab from '../controlTab/ControlTab';
import CoverFlow from '../Profile/Components/CoverFlow';





export default class Upload extends Component{
    render(){
        return(



            <ScrollView style={styles.container}>
                <StatusBar barStyle="light-content"/>
                <View style={styles.navbar}>
                    <TouchableOpacity><Icon name="ios-camera" size={24} color="white"/></TouchableOpacity>
                    <Text style={styles.titleText}>Kendall Jenner</Text>
                    <TouchableOpacity><Icon name="md-arrow-round-forward" size={24} color="white"/></TouchableOpacity>
                </View>
                <CoverFlow/>

                <View style={styles.info}>
                    <View style={styles.followers}>
                        <Text style={styles.infoCount}>39</Text>
                        <Text style={styles.infoText}>Followers</Text>
                    </View>


                    <View style={styles.followings}>
                        <Text style={styles.infoCount}>45</Text>
                        <Text style={styles.infoText}>Followings</Text>
                    </View>


                </View>

                <ControlTab/>
                    <View style={styles.profileSection}>
                        <Text style={styles.profileName}>Hailey Baldwin</Text>
                    </View>
                <Image source={require('../../../img/post1.png')} style={styles.post}/>
            </ScrollView>




        );
    }
}
import { Dimensions} from 'react-native'

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    navbar: {
        paddingTop: 20,
        height: 64,
        backgroundColor: "#ff5733",
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#DDDDDD',
        paddingHorizontal: 12,
        flexDirection: 'row', // step 1
        justifyContent: 'space-between', // step 2
        alignItems: 'center', // step 3

    },
    leftText: {
        color: 'white',
    },
    titleText: {
        fontWeight: '600',
        color: 'white',
    },
    rightText: {
        color: 'white',
    },
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    coverflow:{
        flex:1,

    },
    info:{
      flex:0.3,

        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,

    },
    pictures:{
      flex:3,

    },
    profileImage:{
        width:400,
        height:180,

    },
    followers:{
        flex:1,

        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',

    },
    followings:{
        flexDirection:'column',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    posts:{
        flexDirection:'column',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    infoText:{
        fontSize:14,
        marginLeft:5,
        color:'#939393'
    },
    infoCount:{
        fontSize:16,
        fontWeight:'500',
        color:"#ff5733"
    },
    profileSection:{
        flex:0.5,
        paddingVertical:10,

        flexDirection:"row",
        justifyContent:"flex-start",

    },
    profileName:{
        marginLeft:10,
        fontWeight:'500',
    },

    post:{
        width:width.width/3-10,
        height:410,
        resizeMode:"contain",
    },


});