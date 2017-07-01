import React, {Component} from "react";
import {Dimensions, Platform, SegmentedControlIOS} from "react-native";
import {View, Text, Button} from "native-base";
import Icon from 'react-native-vector-icons/Ionicons'

const {width, height} = Dimensions.get('window');

export default class ControlTab extends Component {

    render() {

            return (
                <SegmentedControlIOS
                    style={{flex: 0.7}}
                    values={['list', 'grid']}
                    tintColor='black'
                    selectedIndex={this.props.layout === 'list' ? 0 : 1}
                    onChange={this.props.onChangeLayout}
                />
            );


        }

}