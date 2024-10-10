import { Colors } from "react-native/Libraries/NewAppScreen"
import { COLORS, FONT_SIZE } from "../../../constants/themes"

export const styled ={
    container:{
        flex: 1,
        paddingLeft: 40,
        paddingRight: 40,
        //alignItens: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.light_white
    },
    textStyle:{
        textAlign:'center',
        fontSize: FONT_SIZE.md,
        
    },
    containerSocial:{
        alignText: 'center',
        flexDirection: "row",
        justifyContent: 'space-around',
        marginTop: 10,
        
    },
    logoSocial:{
        width: 50,
        height: 50,
        borderRadius: 50,
        color: COLORS.dark_grey
    },
    plac:{
        color: COLORS.light_grey
    },
    viewForm:{
        marginBottom: 20,
        width: '100%'
    },
    viewFormGroup:{
        width: '100%'
    },
    viewFormGroupRow:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-between'
    },
    chilldreForm:{
        width: '60%',
    },
    chilldreForm2:{
        width: '30%'
    },
}
