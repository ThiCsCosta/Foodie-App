import { COLORS, FONT_SIZE, BORDER_RADIUNS } from "../constants/themes.js"

export const styles ={
    input:{
        with: '100%',
        height: 50,
        marginBottom: 37,
        backgroundColor: COLORS.light_grey,
        borderRadius: BORDER_RADIUNS.borderRadiuns,
        padding: 10,
        borderWidth: 1,
        borderColor: COLORS.medium_red,
        color: COLORS.dark_grey
    },
    label:{
        marginLeft: 5,
        padding: 5
    }
}