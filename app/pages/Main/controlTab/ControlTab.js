import React, {PureComponent} from "react";
import {Animated, Dimensions, Platform, SegmentedControlIOS,Text, View, StyleSheet,TouchableWithoutFeedback} from "react-native";
import Button from "native-base";
import Icon from 'react-native-vector-icons/Ionicons'
import {TabViewAnimated, TabBar} from 'react-native-tab-view'

import type { NavigationState } from 'react-native-tab-view/types';
import Follow from '../Profile/Components/Follow'
import Mypicture from "../Profile/Components/Mypicture";


type State = NavigationState<Route>;

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

const {width, height} = Dimensions.get('window');

type Route = {
    key: string,
    title: string,
    icon: string,
};

export default class ControlTab extends PureComponent<void, *, State > {


    state: State = {
        index: 0,
        routes: [
            { key: '1',  icon: 'ios-trophy'},
            { key: '2', icon: 'ios-person'},
        ],
    };

    _handleChangeTab = index => {
        this.setState({
            index,
        });
    };

    _renderIcon = ({ navigationState, position }) => ({
                                                          route,
                                                          index,
                                                      }: { route: Route, index: number }) => {
        const inputRange = navigationState.routes.map((x, i) => i);
        const filledOpacity = position.interpolate({
            inputRange,
            outputRange: inputRange.map(i => (i === index ? 1 : 0)),
        });
        const outlineOpacity = position.interpolate({
            inputRange,
            outputRange: inputRange.map(i => (i === index ? 0 : 1)),
        });
        return (
            <View>
                <AnimatedIcon
                    name={route.icon}
                    size={30}
                    style={[styles.icon, { opacity: filledOpacity }]}
                />
                <AnimatedIcon
                    name={route.icon+"-outline"}
                    size={30}
                    style={[styles.icon2, styles.outline, { opacity: outlineOpacity }]}
                />
            </View>

        );
    };


    _renderHeader = props => {
        return (
            <View style={styles.tabbar}>
                {props.navigationState.routes.map((route, index) => {
                    return (
                        <TouchableWithoutFeedback
                            key={route.key}
                            onPress={() => props.jumpToIndex(index)}
                        >
                            <Animated.View style={styles.tab}>
                                {this._renderIcon(props)({ route, index })}

                            </Animated.View>
                        </TouchableWithoutFeedback>
                    );
                })}
            </View>
        );
    };

    _renderScene = ({ route }) => {
        switch (route.key) {
            case '1':
                return (
                    null


                );
            case '2':
                return (
                    null

                );


            default:
                return null;
        }
    };

    render() {

            return (
                <TabViewAnimated
                    style={[styles.container, this.props.style]}
                    navigationState={this.state}
                    animationEnabled={false}
                    swipeEnabled={false}
                    renderScene={this._renderScene}
                    renderHeader={this._renderHeader}
                    onRequestChangeTab={this._handleChangeTab}
                />
            );


        }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },


    icon2: {
        color: '#959595',

    },
    tabbar: {
        backgroundColor: 'transparent',
        borderTopWidth:1,
        borderTopColor:"#dadada",
        borderBottomWidth:1,
        borderBottomColor:"#dadada",

        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    icon: {
        backgroundColor: 'transparent',
        position: 'absolute',
        textAlign: 'center',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        color: '#ff5733',


    },
    tab: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 2,
        paddingBottom:2,


    },

});