import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Slider,
    Alert,
    Dimensions,
} from 'react-native';

import Coverflow from 'react-native-coverflow';

/* eslint-disable global-require */
const CARDS = {
    '1C': require('../../../../img/profile2.png'),
    '1S': require('../../../../img/post2.png'),
    '3S': require('../../../../img/post3.png'),
    '8H': require('../../../../img/post4.png'),
    '9C': require('../../../../img/post5.png'),
    'JC': require('../../../../img/post6.png'),
    'JH': require('../../../../img/post7.png'),
    'KH': require('../../../../img/post8.png'),
    'MJ': require('../../../../img/post9.png'),
    'QS': require('../../../../img/post10.png'),
    'TS': require('../../../../img/post11.png'),
};
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        width:width.width,
        height:200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        width: 64 * 2.5,
        height: 90 * 2.5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 10,
    },
});

const Item = ({title}) => (
    <View style={styles.item}>
        <Text style={{ color: 'white' }}>{title}</Text>
    </View>
);

export default class CoverFlow extends Component {
    constructor(props) {
        super(props);

        const values = {
            spacing: 100,
            wingSpan: 61,
            rotation: 50,
            midRotation: 50,
            scaleDown: 0.8,
            scaleFurther: 0.75,
            perspective: 660,
            cards: 11,
        };

        this.V = ({ name, caption, min, max, step, value }) => (
            <View style={{ flex: 1 }}>
                <Text>{caption}:{value}</Text>
                <Slider
                    minimumValue={min}
                    maximumValue={max}
                    step={step}
                    value={value}
                    onValueChange={v => this.setState({ [name]: v })}
                />
            </View>
        );

        this.state = values;
    }

    onChange = (item) => {
        console.log(`'Current Item', ${item}`);
    }

    onPress = (item) => {
        Alert.alert(`Pressed on current item ${item}`);
    }

    getCards(count) {
        const res = [];
        const keys = Object.keys(CARDS);
        for (let i = 0; i < count && i < keys.length; i += 1) {
            const card = keys[i];
            console.log('Rendering Card', card);
            res.push(
                <Image
                    key={card}
                    source={CARDS[card]}
                    resizeMode="contain"
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        width:150,
                        height:200,
                    }}
                />);
        }
        return res;
    }

    render() {
        const V = this.V;
        const { spacing, wingSpan, rotation, perspective, scaleDown, scaleFurther, midRotation, cards } = this.state;

        return (
            <View style={{ flex: 1, height:'50%' }}>
                <Coverflow
                    style={styles.container}
                    onChange={this.onChange}
                    onPress={this.onPress}
                    spacing={spacing}
                    wingSpan={wingSpan}
                    rotation={rotation}
                    midRotation={midRotation}
                    scaleDown={scaleDown}
                    scaleFurther={scaleFurther}
                    perspective={perspective}
                    initialSelection={5}
                >
                    {this.getCards(cards)}
                </Coverflow>


            </View>


        );
    }
}