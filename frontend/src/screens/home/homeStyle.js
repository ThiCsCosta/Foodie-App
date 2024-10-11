import { COLORS, FONT_SIZE, BORDER_RADIUNS } from "../../components/constants/themes";

export const styles ={
    container:{
        flex:1,
        backgroundColor: COLORS.light_white,
        padding: 15,
        margin: 10
    
    },
    viewHeader:{
        marginBottom: 15,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerSize: {
        width: 145,
        height: 27
    },
    cartSize: {
        width: 30,
        height: 30,
    },

    viewCategory:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    }

}