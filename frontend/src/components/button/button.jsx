import { Text, TouchableOpacity } from "react-native";
import { styled } from "./btn.style.js";

function Button(props){
    return  <TouchableOpacity style={styled.btn}>
        <Text style={styled.styleText}>
            {props.texto}
        </Text>
    </TouchableOpacity>
    
}

export default Button;