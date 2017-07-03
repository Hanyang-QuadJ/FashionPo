import React, {Component} from 'react'

import {Button, Header,Icon, Input, Item, Left, Right,} from "native-base";

import {
    View,
    Image,
    Alert,
    Text,
    Dimensions,


} from 'react-native'
// import Icon from 'react-native-vector-icons/Ionicons'

// import FitImage from 'react-native-fit-image'
// import Mypicture from './Mypicture'
// import MypageTab from './MypageTab'
// import Follow from './Follow'
import styles from '../styles'
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";
import ControlTab from "../controlTab/ControlTab";
import FlatListItem from "../itemContainer/flatListItem";
import FlatListGrid from "../itemContainer/flatListGrid";
import UltimateListView from "react-native-ultimate-listview";
import FitImage from "react-native-fit-image"



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
            if (this.state.layout === 'grid') pageLimit = 60;
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
        if (this.state.layout === 'list') {
            return (
                <FlatListItem item={item} index={index} onPress={this.onPressItem}/>
            );
        } else if (this.state.layout === 'grid') {
            return (
                <FlatListGrid item={item} index={index} onPress={this.onPressItem}/>
            );
        }
    };

    onPressItem = (type, index, item) => {
        Alert.alert(type, `You're pressing on ${item}`);
    };

    renderControlTab = () => {
        return (
            <ControlTab layout={this.state.layout}
                        onChangeLayout={this.onChangeLayout}
            />
        );
    };

    renderHeader = () => {
        return (
            <View style={styles.container}>
                <View style={styles.overlay}>
                    <Image source={require('../../../img/cover.png')} style={styles.cover} />
                    <Text style={styles.name}>Lee Haran</Text>
                </View>
                <Image source={require('../../../img/profile.png')} style={styles.profile}/>


                <View style={styles.textArea}>

                    <Text style={styles.buttonLeft}>Followers{"\n"}     <Text style={styles.number}>10</Text></Text>

                    <Text style={styles.buttonRight}>Follwings{"\n"}    <Text style={styles.number}>20</Text></Text>
                </View>
                <View style={styles.profileText}>
                    <Text>ASDADSf</Text>

                </View>




            </View>

        );
    };

    renderPaginationFetchingView = () => {
        return (
            <LoadingSpinner height={height * 0.2} text="loading..."/>
        );
    };




    render(){


        return(

            <View style={styles.container}>

                <UltimateListView
                    ref={(ref) => this.listView = ref}
                    key={this.state.layout} //this is important to distinguish different FlatList, default is numColumns
                    onFetch={this.onFetch}
                    keyExtractor={(item, index) => `${this.state.layout} - ${item}`}  //this is required when you are using FlatList
                    refreshableMode="advanced" //basic or advanced


                    item={this.renderItem}  //this takes three params (item, index, separator)
                    numColumns={this.state.layout === 'list' ? 1 : 3} //to use grid layout, simply set gridColumn > 1
                    columnWrapperStyle={{height: 120}}  //use this line to customise style of each row in FlatList, only work when gridColumn > 1

                    //----Extra Config----
                    header={this.renderHeader}
                    paginationFetchingView={this.renderPaginationFetchingView}
                    //sectionHeaderView={this.renderSectionHeaderView}   //not supported on FlatList
                    //paginationFetchingView={this.renderPaginationFetchingView}
                    //paginationAllLoadedView={this.renderPaginationAllLoadedView}
                    //paginationWaitingView={this.renderPaginationWaitingView}
                    //emptyView={this.renderEmptyView}
                    //separator={this.renderSeparatorView}
                />
            </View>




        );
    }
}
