import { Text, TextInput } from "react-native";
import { styles } from "./textboxStyles";

function TextBox(props){
    return<>
        {
            props.texto && <Text style={styles.label}>{props.texto}</Text>            
        }
        <TextInput style={styles.input}
            placeholder={props.placeholder}
            secureTextEntry={props.isPassword}            
            />
    </>
}
export default TextBox;