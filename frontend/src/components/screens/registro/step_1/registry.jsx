import { View,Text, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import { styled } from "./registry_Style";
import Header from "../../../header/header";
import TextBox from "../../../textbox/textBoxComponent";
import Button from "../../../button/button";
import { styles } from "../../../textbox/textboxStyles";
import { style } from "../../../header/headerStyle";
import icons from "../../../constants/icons";
import SocialMedia from "../../../icons/Social";



function Registry(props){

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha1, setSenha1] = useState("");
    const [senha2, setSenha2] = useState("");
    
    
    return <View style={styled.container}>
        
        <Header style={style.titulo} texto='Criar sua conta.'/>

        <View style={styled.viewForm}>
            <View style={styled.viewFormGroup}>
                <TextBox texto='Nome Completo' 
                    placeholder='Digite seu nome completo' 
                    style={styled.plac}
                    onChangeText={(texto)=>setNome(texto)}
                    value={nome}
                    />
            </View>
            <View style={styled.viewFormGroup}>
                <TextBox texto='E-mail' 
                placeholder="Digite seu E-mail" 
                onChangeText={(texto)=>setEmail(texto)}
                value={email}
                />
            </View>
            <View style={styled.viewFormGroup}>
                <TextBox texto='Escolha uma senha' 
                placeholder="Digite sua senha" 
                isPassword
                onChangeText={(texto)=>setSenha1(texto)}
                value={senha1}
                />
            </View>
            <View style={styled.viewFormGroup}>
                <TextBox texto='Confirme sua senha' 
                placeholder="Confirme sua senha" 
                isPassword
                onChangeText={(texto)=>setSenha2(texto)}
                value={senha2}
                />
            </View>
            
        </View>
        <View >
            <TouchableOpacity  onPress={()=>props.navigation.navigate('registry_2')}>
                <Text style={styled.viewFormGroupStap}>Próximo passo</Text>                
            </TouchableOpacity>
        </View>
        
         
    </View>
    
}
export default Registry;