import React, {Component} from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import {
    Text,
    View,
    StatusBar,
    StyleSheet,
    Navigator,
    TouchableOpacity,

} from 'react-native'



export default class Rank extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.navbar}>
                    <StatusBar barStyle="light-content"/>


                    <Text style={styles.titleText}>Fashion Po</Text>

                </View>

                <View style={styles.spacetop}>


                </View>


                <View style={styles.picture}>
                    <View style={styles.vote1}>
                    </View>
                    <View style={styles.vote2}>
                    </View>
                </View>
                <View style={styles.line}></View>
                <View style={styles.spacetop}>


                </View>
            </View>




        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabbar: {
        backgroundColor: '#ffc305',
        height: 45,
    },
    tab: {

        padding: 10,
    },
    icon: {
        backgroundColor: 'transparent',
        color: 'white',
    },
    line:{
        flex: 2,
        backgroundColor:"red",

    },
    indicator: {
        flex: 1,
        backgroundColor: '#ff5733',

        padding:5,
        borderRadius: 2,
    },
    badge: {
        marginTop: 4,
        marginRight: 32,
        backgroundColor: '#f44336',
        height: 24,
        width: 24,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
    },
    count: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: -2,
    },
    navbar: {
        paddingTop: 20,
        height: 64,
        backgroundColor: '#ff5733',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#DDDDDD',
        paddingHorizontal: 12,
        flexDirection: 'row', // step 1
        justifyContent: 'space-between', // step 2
        alignItems: 'center', // step 3
    },
});