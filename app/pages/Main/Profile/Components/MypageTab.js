/**
 * Created by pleiades on 2017. 6. 27..
 */
import React, { PureComponent } from 'react';
import {
    Animated,
    View,
    TouchableWithoutFeedback,
    StyleSheet,
} from 'react-native';
import { TabViewAnimated } from 'react-native-tab-view';
import  Ionicons  from 'react-native-vector-icons/Ionicons';
import Follow from './Follow'
import Mypicture from './Mypicture'

import type { NavigationState } from 'react-native-tab-view/types';

const AnimatedIcon = Animated.createAnimatedComponent(Ionicons);

type Route = {
    key: string,
    title: string,
    icon: string,
};

type State = NavigationState<Route>;

export default class MypageTab extends PureComponent<void, *, State> {
    static title = 'No animation';
    static backgroundColor = '#f4f4f4';
    static tintColor = '#222';
    static appbarElevation = 4;

    state: State = {
        index: 0,
        routes: [
            { key: '1', title: 'Featured', icon: 'ios-star' },
            { key: '2', title: 'Playlists', icon: 'ios-albums' },
            { key: '3', title: 'Near Me', icon: 'ios-navigate' },
            { key: '4', title: 'Search', icon: 'ios-search' },
            { key: '5', title: 'Updates', icon: 'ios-download' },
        ],
    };

    _handleChangeTab = index => {
        this.setState({
            index,
        });
    };

    _renderLabel = ({ position, navigationState }) => ({ route, index }) => {
        const inputRange = navigationState.routes.map((x, i) => i);
        const outputRange = inputRange.map(
            inputIndex => (inputIndex === index ? '#2196f3' : '#939393'),
        );
        const color = position.interpolate({
            inputRange,
            outputRange,
        });
        return (
            <Animated.Text style={[styles.label, { color }]}>
                {route.title}
            </Animated.Text>
        );
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
            <View style={styles.iconContainer}>
                <AnimatedIcon
                    name={route.icon}
                    size={26}
                    style={[styles.icon, { opacity: filledOpacity }]}
                />
                <AnimatedIcon
                    name={route.icon + '-outline'}
                    size={26}
                    style={[styles.icon, styles.outline, { opacity: outlineOpacity }]}
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
                                {this._renderLabel(props)({ route, index })}
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
                    <Follow
                        style={[styles.page, { backgroundColor: '#E3F4DD' }]}
                    />
                );
            case '2':
                return (
                    <Mypicture
                        style={[styles.page, { backgroundColor: '#E6BDC5' }]}
                    />
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
                renderScene={this._renderScene}
                renderHeader={this._renderHeader}
                onRequestChangeTab={this._handleChangeTab}
                animationEnabled={false}

                swipeEnabled={false}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f4f4f4',
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: 'rgba(0, 0, 0, .2)',
        paddingTop: 4.5,
    },
    iconContainer: {
        height: 26,
        width: 26,
    },
    icon: {
        position: 'absolute',
        textAlign: 'center',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        color: '#0084ff',
    },
    outline: {
        color: '#939393',
    },
    label: {
        fontSize: 10,
        marginTop: 3,
        marginBottom: 1.5,
        backgroundColor: 'transparent',
    },
    page: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
});