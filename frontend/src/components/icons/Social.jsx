import { Image, View } from "react-native";
import icons from "../constants/icons";
import { socialStyle } from "./socialStyle";
import { style } from "../header/headerStyle";

function SocialMedia(props){
    return<View style={socialStyle.containerSocial}>
        <Image style={socialStyle.logoSocial} source={icons.google}/>
        <Image style={socialStyle.logoSocial} source={icons.facebook}/>
        <Image style={socialStyle.logoSocial} source={icons.apple}/>
        
    </View>
}
export default SocialMedia;