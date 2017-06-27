import React, { PureComponent } from 'react';
import { StyleSheet } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';


import type { NavigationState } from 'react-native-tab-view/types';
import Follow1 from './Follow'
import Mypicture from './Mypicture'

type Route = {
    key: string,
    icon: string,
};


type State = NavigationState<Route>;



export default class MypageTab extends PureComponent<void, *, State>{

    state: State = {
        index: 0,
        routes: [
            { key: '1', icon: 'md-image' },
            { key: '2', icon: 'ios-download' },
        ],
    };

    _handleChangeTab = index => {
        this.setState({
            index,
        });
    };

    _renderIcon = ({ route }) => {
        return <Icon name={route.icon} size={24} color="#ff5733" />;
    };

    _renderHeader = props => {
        return (
            <TabBar
                {...props}

                indicatorStyle={styles.indicator}
                renderIcon={this._renderIcon}
                style={styles.tabbar}
            />
        );
    };

    _renderScene = ({ route }) => {
        switch (route.key) {
            case '1':
                return (
                    <Follow1
                        state={this.state}
                        style={{ backgroundColor: '#ff4081' }}
                    />
                );
            case '2':
                return (
                    <Mypicture
                        state={this.state}
                        style={{ backgroundColor: '#673ab7' }}
                    />
                );

            default:
                return null;
        }
    };



    render(){
        return(
            <TabViewAnimated
                style={[styles.container, this.props.style]}
                navigationState={this.state}
                renderScene={this._renderScene}
                renderHeader={this._renderHeader}
                onRequestChangeTab={this._handleChangeTab}
            />


        );
    }
}

const styles = StyleSheet.create({
    main:{
        flex:2,
        fontSize: 30,
        padding: 100,
        justifyContent:'center',
        alignItems:'center',
        textAlign: 'center',
    },
    container: {
        flex: 1,
    },
    tabbar: {

        backgroundColor: '#fbfbfb',

    },
    indicator: {
        backgroundColor: '#fbfbfb',
    },

});