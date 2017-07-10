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

export default class