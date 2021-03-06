import {StyleSheet,Dimensions} from 'react-native'

const {width, height} = Dimensions.get('window');


export default  {
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    header: {
        width: width,
        height: 80,
        padding: 20,
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderColor: 'lightgray',
        backgroundColor: 'whitesmoke'
    },
    headerSegment: {
        width: width,
        height: 60,
        flexDirection: 'row',
        alignItems: 'center'
    },
    row: {
        flex: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        shadowOffset: {width: 0, height: 0},
        marginLeft: -1,
        marginRight: -1,
        marginTop: 0,
        marginBottom: 0,
        padding: 0
    },
    rowAndroid: {
        flex: 0,
        borderColor: 'gray',
        borderTopWidth: 0,
        borderBottomWidth: 1,
        shadowOffset: {width: 0, height: 0},
        marginLeft: -1,
        marginRight: -1,
        marginTop: 0,
        marginBottom: 0,
        padding: 0
    },
    rowHeader: {

    },
    rowBody: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        height: height * 0.25,
        marginBottom: 0,
        backgroundColor: 'whitesmoke',
    },
    image: {
        flex: 1,
        height: height * 0.25,
        marginBottom: 0,
        resizeMode: 'cover',
        backgroundColor: 'whitesmoke'
    },
    rowFooter: {
        padding: 0
    },
    thumb: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    gridThumb: {
        alignSelf: 'center',
        width: 50,
        height: 50,
        borderRadius: 25,
        marginBottom: 10
    },
    cardTitle: {
        fontSize: 14
    },
    cardSubTitle: {
        marginTop: 3,
        fontSize: 11
    },
    rightBtnGroup: {
        flexDirection: 'row',
        width: width * 0.3
    },
    rightBtn: {
        margin: 0,
        padding: 5
    },
    rightBtnIcon: {
        color: 'dimgray'
    },
    gridText: {
        textAlign: 'center'
    },
    gridBorder: {
        justifyContent: 'center',
        alignItems: 'center',
        width: width/3 - 10,
        height: width/3 - 10,
        borderWidth: 0.5,
        borderColor: 'gray'
    },
    description:{
        flex:5,
        flexDirection:'row',
        justifyContent: 'space-between', // step 2
        alignItems: 'center', // step 3
    },

    titleText: {
        fontWeight: '600',
        color: 'black',
    },
    rightText: {
        color: 'black',
    },
    cover:{
        opacity:0.5,
        width:width.width,
        height:150,
        alignSelf: 'stretch',
        resizeMode: 'cover',
    },
    profile:{
        alignSelf:'center',
        position:'absolute',
        top:100,
        width:100,
        height:100,
        borderRadius:50,

    },
    overlay:{
        backgroundColor: 'black'
    },
    name:{
        position:'absolute',
        top:120,
        left:20,
        bottom:0,
        color: 'white',
        fontSize:15,
        backgroundColor:'transparent'
    },
    textArea:{
        backgroundColor: "transparent",
        paddingTop:20,
        paddingBottom:10,
        flexDirection: 'row', // step 1
        justifyContent: 'space-between', // step 2
        alignItems: 'center', // step 3
    },
    buttonLeft:{
        paddingLeft:40,
        color: "black",

    },

    buttonRight:{

        paddingRight:45,
        color:"black",

    },
    number:{
        fontSize:20,
        fontWeight:'500',


    },
    buttonArea:{
        backgroundColor: "white",
        paddingTop:10,
        paddingBottom:10,
        flexDirection: 'row', // step 1
        justifyContent: 'space-between', // step 2
        alignItems: 'center', // step 3
        borderBottomWidth:2,
        borderBottomColor:"#fbf9f9",
    },
    hairline:{
        flex:0.3,
        backgroundColor:"#fbf9f9",
        padding:10,

    },
    iconLeft: {
        color:"#ff5733",
        paddingLeft:80,


    },
    iconRight:{
        color:"#ff5733",
        paddingRight:80,
    },



    profileText:{
        flex:0.1,
        borderTopWidth:1,
        borderTopColor:"#fbf9f9",

        paddingTop:20,
        paddingHorizontal:30,

        // textAlign:"center",
    },
    profileword:{
        textAlign:"center",
        fontSize:13,
        color:"#767676"

    },
    setting:{
        position:'absolute',
        top:-130,
        right:10,
        color: 'white',
        fontSize:20,
        backgroundColor:"transparent"

    },
    two:{
        flex:0.5,
    },
    sns:{
        flex:0.1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom:25,
        paddingTop:8,
    },
    snsIcon:{
        paddingHorizontal:5,
        color:"#ff5733"

    },
    myPicture:{
        flex:0.3,
        borderTopWidth:1,
        borderTopColor:"#f9f9f9",
        overflow: 'hidden',
        flexDirection:"row",


    },
    myPictures:{
        flex:1,
        position: 'relative',
        margin: 10,

    },
    moreInfo:{
        justifyContent:"center",
        alignItems:"center",
        paddingBottom:5,
    },
    profileSection:{
        flex:0.5,
        paddingVertical:5,

        flexDirection:"row",
        justifyContent:"center",
        alignItems:'center',
    },
    profileName:{
        marginLeft:5,

    },
    profilePicture:{
        width:45,
        height:45,
        borderRadius:22,
    },

    profileImage:{
      width:width.width/3-10,
        height:410,
        resizeMode:"contain",
    },
    likeCount:{
        fontSize:18,
        fontWeight:'500',
        marginLeft:15,
        color:"#ff5733"

    },
    likeArea:{
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'space-between',
    },
    likeButton:{
      marginRight:25,
    },
    shareButton:{
      marginRight:10,

    },
    likes:{
        fontSize:14,
        color:"black",
        fontWeight:"200",
    }






}