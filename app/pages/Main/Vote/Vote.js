import React, {Component} from 'react'
import {
    Text,
    View,
    Button,
    Image,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    Navigator,

} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Fitimage from 'react-native-fit-image'



export default class Vote extends Component{
    render(){
        return(


        <View style={styles.container}>




            <View style={styles.navbar}>




                <TouchableOpacity><Icon name="ios-camera" size={24} color="white"/></TouchableOpacity>
                <Text style={styles.titleText}>Fashion Po</Text>
                <TouchableOpacity><Icon name="md-arrow-round-forward" size={24} color="white"/></TouchableOpacity>

            </View>
            <StatusBar barStyle="dark-content"/>
                <View style={styles.spacetop}>



                </View>

                <View style={styles.picture}>

                    <Fitimage source={require('../../../img/vote1.png')} originalWidth={400} originalHeight={550} style={styles.vote1} />
                    <Fitimage source={require('../../../img/vote2.png')} originalWidth={400} originalHeight={550} style={styles.vote1}  />






                </View>

                <View style={styles.spacetop}>


                </View>


        </View>




        );
    }
}
const styles = StyleSheet.create({

    vote1:{
        flex:2,



    },
    vote2:{
        flex:2,

    },
    line1:{
        flex: .1,
        backgroundColor:"#ff5733",

    },

    spaceText:{
        textAlign: "center",
    },
    spacetop:{
        flex:2.5,
        backgroundColor:"white",

    },
    picture:{
       flex:4,
        flexDirection:"row",


    },
    main:{
        flex:1.5,
        fontSize: 30,
        padding: 100,
        justifyContent:'center',
        alignItems:'center',
        textAlign: 'center',
    },
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
    }


});