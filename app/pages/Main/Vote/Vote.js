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
import Icon from 'react-native-vector-icons/Ionicons';
import Fitimage from 'react-native-fit-image';



export default class Vote extends Component{

    constructor(props) {
        super(props);
        this.state = {
            blurBool : 10,
        };
    }

    render(){
        return(


            <View style={styles.container}>

                <View style={styles.navbar}>

                    <TouchableOpacity><Icon name="ios-camera" size={24} color="white"/></TouchableOpacity>
                    <Text style={styles.titleText}>Fashion Po</Text>
                    <TouchableOpacity><Icon name="md-arrow-round-forward" size={24} color="white"/></TouchableOpacity>

                </View>

                <StatusBar barStyle="dark-content"/>

                <View style={styles.vote}>

                    <Fitimage source={require('./img/vote1.png')}
                        style={styles.votePicture}
                        blurRadius={this.state.blurBool}>

                        <View style={styles.iconbar}>
                            <View style={styles.icons}>
                                <TouchableOpacity><Icon name="ios-heart-outline" size={24} color="black" /></TouchableOpacity>
                                </View>
                            <View style={styles.icons}>
                                <TouchableOpacity><Icon name="ios-text-outline" size={24} color="black" /></TouchableOpacity>
                            </View>
                            <View style={styles.icons}>
                                <TouchableOpacity><Icon name="ios-bookmark-outline" size={24} color="black" /></TouchableOpacity>
                            </View>
                        </View>

                    </Fitimage>

                </View>

            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    titleText: {
        fontWeight: '600',
        color: 'white',
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
    vote:{
        flex: 1,
        flexDirection: 'row',
    },
    votePicture:{
       flex: 1,
       alignItems: 'flex-end',
    },
    spacetop:{
        flex:2.5,
        backgroundColor:"black",
    },
    iconBar: {
        flex: 1,
        flexDirection: 'row',
        padding: 3,
        backgroundColor: 'black',
        opacity: 10
    },
    icons: {
        margin: 7,
        justifyContent: 'center',
        alignItems: 'center',
    }
});