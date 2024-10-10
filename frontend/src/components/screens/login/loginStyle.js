import { COLORS, FONT_SIZE } from "../../constants/themes.js"

export const styled ={
    container:{
        flex: 1,
        padding: 40,
        overflow: 'hidden',
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
    }
}
