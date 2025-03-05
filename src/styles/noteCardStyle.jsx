import { StyleSheet } from "react-native";
import { AppColors } from "../theme/color";
import { screenWidth } from "../utils/constants";



const noteCardStyle = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:AppColors.WHITE,
        padding:10,
        margin:5,
        borderRadius:10,
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:1,
        },
        shadowOpacity:0.22,
        shadowRadius:2.22,
        flexDirection:'row'
    },
    bubleContainer: {
        flex:1,
        alignItems: 'center',

    },
    buble: {
        width:screenWidth*0.03,
        height:screenWidth*0.03,
        backgroundColor:AppColors.GRAY,
        borderRadius:100,
        

    },
    noteContainer: {
        flex:8,
    },
    title: {
        fontSize:18,
        color:AppColors.SECONDARY,
        fontWeight:'bold',
    },
    description: {
        fontSize:14,
        color:AppColors.GRAY,
        marginVertical:5,
    },
    date: {fontSize:14,
        color:AppColors.GRAY,
        marginVertical:5,},
    buttonContainer: {
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center',
    },
  });
  
  export { noteCardStyle}