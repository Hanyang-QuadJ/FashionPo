import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    Navigator,
    ListView,

} from 'react-native'



export default class Mypicture extends Component{

    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1,r2)=> r1 !== r2});
        this.state ={
            dataSource:ds.cloneWithRows(['1','2','3','4','5','6','7','8','9','10','11'])
        }

    }
    _renderRow(rowData) {
        return <Text style={styles.row}>{rowData}</Text>

    }
    render(){
        return(
            <ListView dataSource={this.state.dataSource} renderRow={this._renderRow} horizontal={true}/>





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
        borderRightWidth:2,
        borderRightColor:'black',
        backgroundColor:'#fbf9f9'
    },


});