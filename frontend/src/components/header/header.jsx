import { Image, Text, View } from "react-native";
import { style } from "./headerStyle";
import icons from "../constants/icons";

function Header(props){
    return<View style={style.header}>
        <Image style={style.logoSize} source={icons.logo}/>
        <Text style={style.titulo}>{props.texto}</Text>
    </View>
}

export default Header;