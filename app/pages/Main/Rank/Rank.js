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


const items = [
    1337,
    'janeway',
    {
        lots: 'of',
        different: {
            types: 0,
            data: false,
            that: {
                can: {
                    be: {
                        quite: {
                            complex: {
                                hidden: [ 'gold!' ],
                            },
                        },
                    },
                },
            },
        },
    },
    [ 4, 2, 'tree' ],
];



export default class Rank extends Component{



    render(){


        return(
            <View style={styles.container}>
                <StatusBar barStyle="light-content"/>
                <View style={styles.navbar}>
                    <TouchableOpacity><Icon name="ios-camera" size={24} color="white"/></TouchableOpacity>
                    <Text style={styles.titleText}>Rank</Text>
                    <TouchableOpacity><Icon name="md-arrow-round-forward" size={24} color="white"/></TouchableOpacity>
                </View>








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
    spacetop:{
        flex:1,
        backgroundColor:"yellow"
    },
    tabbar: {
        backgroundColor: '#ffc305',
        height: 45,
    },
    titleText:{
      color:"white",

    },
    tab: {

        padding: 10,
    },
    icon: {
        backgroundColor: 'transparent',
        color: 'white',
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