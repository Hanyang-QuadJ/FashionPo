import React, { PureComponent } from 'react';
import { Animated, View, Text, StyleSheet,StatusBar,TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import Rank from './Rank/index';
import Vote from './Vote/index';
import Upload from './Upload/index';
import Profile from './Profile';



import type { NavigationState } from 'react-native-tab-view/types';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

type Route = {
    key: string,
    title: string,
    icon: string,
    username: string
};

type State = NavigationState<Route>;


export default class Main extends PureComponent<void, *, State> {
    static title = 'No animation';
    static backgroundColor = '#f47857';

    getUserProfile = () => {
        fetch('http://54.162.160.91/api/user/authed', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                token: AsyncStorage.getItem(STORAGE_KEY)
            })
        })
        .then((response) => response.json())
        .then((responseData) => {
            console.log(responseData);
            Route.username = responseData.username;
        })
        .catch(error => {
            console.log(error);
        })
    };



    state: State = {
        index: 0,
        routes: [
            { key: '1',  icon: 'ios-trophy'},
            { key: '2',  icon: 'ios-person'},
            { key: '3',  icon: 'ios-camera' },
            { key: '4',  icon: 'ios-eye',},

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
                    name={route.icon}
                    size={30}
                    style={[styles.icon2, styles.outline, { opacity: outlineOpacity }]}
                />
            </View>

        );
    };

    _renderFooter = props => {
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
                    <Vote
                        state={this.state}

                    />
                );
            case '2':
                return (
                    <Profile
                        state={this.state}

                    />
                );
            case '3':
                return (
                    <Upload
                        state={this.state}

                    />
                );
            case '4':
                return (
                    <Rank
                        state={this.state}

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
                animationEnabled={false}
                swipeEnabled={false}
                renderScene={this._renderScene}
                renderFooter={this._renderFooter}
                onRequestChangeTab={this._handleChangeTab}

            />


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabbar: {
        backgroundColor: '#fafafa',
        height: 45,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: 'rgba(0, 0, 0, .2)',
        paddingTop: 5,

    },

    icon2: {
        color: '#959595',
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
});
















