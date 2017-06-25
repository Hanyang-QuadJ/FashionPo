import React, { PureComponent } from 'react';
import { Animated, View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import Rank from './Rank';
import Vote from './Vote';
import Upload from './Upload';
import Follow from './Follow';
import Mypage from './Mypage';



import type { NavigationState } from 'react-native-tab-view/types';

type Route = {
    key: string,
    title: string,
    icon: string,
};

type State = NavigationState<Route>;


export default class TopBarIconExample extends PureComponent<void, *, State> {
    static title = 'Bottom bar with indicator';
    static appbarElevation = 4;


    state: State = {
        index: 0,
        routes: [
            { key: '1',  icon: 'md-trophy' },
            { key: '2', icon: 'md-list-box' },
            { key: '3',  icon: 'md-add-circle' },
            { key: '4',  icon: 'ios-eye' },
            { key: '5',  icon: 'md-person' },
        ],
    };

    _handleChangeTab = index => {
        this.setState({
            index,
        });
    };

    _renderIndicator = props => {
        const { width, position } = props;

        const translateX = Animated.multiply(position, width);

        return (
            <Animated.View
                style={[styles.container, { width, transform: [{ translateX }] }]}
            >
                <View style={styles.indicator} />
            </Animated.View>
        );
    };

    _renderIcon = ({ route }) => {
        return <Icon name={route.icon} size={24} style={styles.icon} />;
    };

    _renderBadge = ({ route }) => {
        if (route.key === '2') {
            return (
                <View style={styles.badge}>
                    <Text style={styles.count}>42</Text>
                </View>
            );
        }
        return null;
    };

    _renderFooter = props => {
        return (
            <TabBar
                {...props}
                renderIcon={this._renderIcon}
                // renderBadge={this._renderBadge}
                renderIndicator={this._renderIndicator}
                style={styles.tabbar}
                tabStyle={styles.tab}
            />
        );
    };

    _renderScene = ({ route }) => {
        switch (route.key) {
            case '1':
                return (
                    <Vote
                        state={this.state}
                        style={{ backgroundColor: '#ff4081' }}
                    />
                );
            case '2':
                return (
                    <Rank
                        state={this.state}
                        style={{ backgroundColor: '#673ab7' }}
                    />
                );
            case '3':
                return (
                    <Upload
                        state={this.state}
                        style={{ backgroundColor: '#4caf50' }}
                    />
                );
            case '4':
                return (
                    <Follow
                        state={this.state}
                        style={{ backgroundColor: '#4caf50' }}
                    />
                );
            case '5':
                return (
                    <Mypage
                        state={this.state}
                        style={{ backgroundColor: '#4caf50' }}
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
        flex: 2,
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
});
















