import React, {Component} from 'react'

import { Header, Input, Item, Left, Right,} from "native-base";

import {
    View,
    Image,
    Alert,
    Text,
    Button,
    Dimensions,
    TouchableOpacity,
    ScrollView,


} from 'react-native'


// import FitImage from 'react-native-fit-image'
// import Mypicture from './Mypicture'
// import MypageTab from './MypageTab'
// import Follow from './Follow'
import styles from '../styles'
// import LoadingSpinner from "../loadingSpinner/LoadingSpinner";
import ControlTab from "../controlTab/ControlTab";
import Fitimage from 'react-native-fit-image';
import FlatListItem from "../itemContainer/flatListItem";
import FlatListGrid from "../itemContainer/flatListGrid";
import UltimateListView from "react-native-ultimate-listview";
import FitImage from "react-native-fit-image"
import Icon from "react-native-vector-icons/Ionicons";



const {width, height} = Dimensions.get('window');

export default class Mypage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            layout: 'list',
            text: '',
        }
    }


    sleep = (time) => new Promise(resolve => setTimeout(() => resolve(), time));


    onFetch = async (page = 1, startFetch, abortFetch) => {
        try {
            //This is required to determinate whether the first loading list is all loaded.
            let pageLimit = 24;

            let skip = (page - 1) * pageLimit;

            //Generate dummy data
            let rowData = Array.from({length: pageLimit}, (value, index) => `item -> ${index + skip}`);

            //Simulate the end of the list if there is no more data returned from the server
            if (page === 10) {
                rowData = [];
            }

            //Simulate the network loading in ES7 syntax (async/await)
            await this.sleep(100);
            startFetch(rowData, pageLimit);
        } catch (err) {
            abortFetch(); //manually stop the refresh or pagination if it encounters network error
            console.log(err);
        }
    };

    onChangeLayout = (event) => {
        this.setState({text: ''});
        switch (event.nativeEvent.selectedSegmentIndex) {
            case 0:
                this.setState({layout: 'list'});
                break;
            case 1:
                this.setState({layout: 'grid'});
                break;
            default:
                break;
        }
    };

    onChangeScrollToIndex = (num) => {
        this.setState({text: num});
        let index = num;
        if (this.state.layout === 'grid') {
            index = num / 3;
        }
        try {
            this.listView.scrollToIndex({viewPosition: 0, index: Math.floor(index)});
        } catch (err) {
            console.warn(err);
        }
    };

    renderItem = (item, index, separator) => {

        return (
            null
        )
    }


    onPressItem = (type, index, item) => {
        Alert.alert(type, `You're pressing on ${item}`);
    };

    renderControlTab = () => {
        return (
            <ControlTab  layout={this.state.layout}
                         onChangeLayout={this.onChangeLayout}/>
        );
    };

    renderHeader = () => {
        return (
            <View style={styles.container}>
                <View style={styles.overlay}>
                    <Image source={require('../../../img/cover.png')} style={styles.cover} />
                    <TouchableOpacity><Icon style={styles.setting} name="ios-settings"/></TouchableOpacity>
                    <Text style={styles.name}>Lee Haran</Text>

                </View>
                <Image source={require('../../../img/profile.png')} style={styles.profile}/>


                <View style={styles.textArea}>

                    <Text style={styles.buttonLeft}>Followers{"\n"}     <Text style={styles.number}>10</Text></Text>

                    <Text style={styles.buttonRight}>Follwings{"\n"}    <Text style={styles.number}>20</Text></Text>
                </View>
                <View style={styles.profileText}>
                    <Text style={styles.profileword}>He who spares the rod hates his son, but he who loves him is careful to discipline him.</Text>

                </View>

                <View style={styles.two}>
                    {this.renderControlTab()}
                </View>




            </View>

        );
    };

    // renderPaginationFetchingView = () => {
    //     return (
    //         <LoadingSpinner height={height * 0.2} text="loading..."/>
    //     );
    // };




    render(){


        return(

            <ScrollView style={styles.container}>

                    <ScrollView style={styles.overlay}>
                        <Image source={require('../../../img/cover.png')} style={styles.cover} />
                        <TouchableOpacity><Icon style={styles.setting} name="ios-settings"/></TouchableOpacity>
                        <Text style={styles.name}>Lee Haran</Text>

                    </ScrollView>
                    <Image source={require('../../../img/profile.png')} style={styles.profile}/>


                    <View style={styles.textArea}>

                        <Text style={styles.buttonLeft}>Followers{"\n"}     <Text style={styles.number}>10</Text></Text>

                        <Text style={styles.buttonRight}>Follwings{"\n"}    <Text style={styles.number}>20</Text></Text>
                    </View>
                    <View style={styles.profileText}>
                        <Text style={styles.profileword}>He who spares the rod hates his son, but he who loves him is careful to discipline him.</Text>

                    </View>
                <View style={styles.sns}>
                    <TouchableOpacity><Icon name="logo-twitter" size={28} style={styles.snsIcon}/></TouchableOpacity>
                    <TouchableOpacity><Icon name="logo-facebook" size={28} style={styles.snsIcon}/></TouchableOpacity>
                    <TouchableOpacity><Icon name="logo-instagram" size={28} style={styles.snsIcon}/></TouchableOpacity>
                </View>
                <View style={styles.myPicture}>
                    <Fitimage source={require("../../../img/myPic1.png")} originalWidth={30} originalHeight={40} style={styles.myPictures}></Fitimage>
                    <Fitimage source={require("../../../img/myPic2.png")} originalWidth={30} originalHeight={40} style={styles.myPictures}></Fitimage>
                    <Fitimage source={require("../../../img/myPic3.png")} originalWidth={30} originalHeight={40} style={styles.myPictures}></Fitimage>


                </View>
                <View  style={styles.moreInfo}><Icon name="ios-search" size={20} /></View>

                    <View style={styles.two}>
                        {this.renderControlTab()}
                    </View>
                <View style={styles.profileSection}>
                    <Image source={require('../../../img/profile2.png')} style={styles.profilePicture}/>
                    <Text style={styles.profileName}>llan_e</Text>
                </View>
                <View style={styles.profileImageSection}>
                    <Image source={require('../../../img/post1.png')} style={styles.profileImage}/>
                </View>
                <View style={styles.likeArea}>
                    <Text style={styles.likeCount}>56 <Text style={styles.likes}>Likes</Text></Text>
                    <Icon name="md-heart-outline" size={26} style={styles.likeButton}/>
                    <Icon name="ios-share-alt-outline" size={26} style={styles.likeButton}/>
                </View>



            </ScrollView>




        );
    }
}
