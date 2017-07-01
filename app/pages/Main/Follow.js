import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    Navigator,
    ListView,
    ScrollView,

} from 'react-native'



export default class Follow extends Component{
    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1,r2)=> r1 !== r2});
        this.state ={
            dataSource:ds.cloneWithRows(['a','b','c','d','d','d','d','d','d','d','d'])
        }

    }
    _renderRow(rowData) {
        return <Text style={styles.row}>{rowData}</Text>

    }

    render(){
        return(
            <ScrollView>


                <ListView dataSource={this.state.dataSource} renderRow={this._renderRow} removeClippedSubviews={false}/>
            </ScrollView>



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
    row:{
        flex:1,
        padding: 42,
        fontSize:24,
        borderBottomWidth:2,
    }

});

