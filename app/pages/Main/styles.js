import {StyleSheet} from 'react-native'


export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabbar: {
        backgroundColor: '#222',
    },
    tab: {
        padding: 0,
    },
    icon: {
        backgroundColor: 'transparent',
        color: 'white',
    },
    indicator: {
        flex: 1,
        backgroundColor: '#0084ff',
        margin: 4,
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



})