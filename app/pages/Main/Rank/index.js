
import React, {Component} from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import {
    Text,
    View,
    StatusBar,
    StyleSheet,
    Navigator,
    Image,
    TouchableOpacity,


} from 'react-native'
import SearchBar from 'react-native-searchbar'


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


    constructor(props) {
        super(props);
        this.state = {
            items,
            results: []
        };
        this._handleResults = this._handleResults.bind(this);
    }


    _handleResults(results) {
        this.setState({ results });
    }
    render(){


        return(
            <View style={styles.container}>
                <StatusBar barStyle="light-content"/>




                <SearchBar
                    ref={(ref) => this.searchBar = ref}
                    data={items}
                    handleResults={this._handleResults}
                    showOnLoad
                    // iOSPadding={true}
                    textColor="white"
                    heightAdjust={0}
                    backgroundColor="#ff5733"
                    hideBack={true}
                    fontSize={14}
                />




                <View style={styles.firstPlace}>
                    <View style={styles.title}>
                        <Text>Rank</Text>
                    </View>
                    <View style={styles.Imagearea}>
                        <Image source={require('../../../img/post1.png')} style={styles.firstImage}></Image>

                    </View>


                    <Text>1st Place</Text>


                </View>
                <View style={styles.secondPlace}>


                </View>



            </View>




        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column'
    },
    firstPlace:{
        flex:1,
        backgroundColor:"yellow",
        justifyContent:'center',
        alignItems:'center',
    },
    firstImage:{
        flexDirection:'column',
        width:150,
        height:200,
        resizeMode:"contain",
    },
    secondPlace:{
        flex:1,
        backgroundColor:"green"
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
        flex:0.2,
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
    title:{
        flex:0.2,

    },
    Imagearea:{
        flex:1,

    },


});
