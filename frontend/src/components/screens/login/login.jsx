import { View,Text, Image, TouchableOpacity, Platform, KeyboardAware, KeyboardAvoidingView } from "react-native";
import { styled } from "./loginStyle";
import Header from "../../header/header";
import TextBox from "../../textbox/textBoxComponent";
import Button from "../../button/button";
import { styles } from "../../textbox/textboxStyles";
import { style } from "../../header/headerStyle";
import icons from "../../constants/icons";
import SocialMedia from "../../icons/Social";
import { useState } from "react";



function Login(props){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function ProcessLogin(){
        console.log(email, senha)
    }

    return <KeyboardAvoidingView style={styled.container}
        
    >
        <Header style={style.titulo} texto='Acesse sua conta.'/>

        <KeyboardAvoidingView style={styled.viewForm}
            behavior={
                Platform.OS === 'ios' ? 'padding' : null}

        >
            <View style={styled.viewFormGroup}>
                <TextBox texto='E-mail' 
                placeholder='Digite seu E-mail'style={styled.plac}
                onChangeText={(texto)=>setEmail(texto)}
                value={email}
                />
            </View>

            <View style={styled.viewFormGroup}>
                <TextBox texto='Senha' 
                placeholder="Digite sua senha" isPassword
                onChangeText={(texto)=>setSenha(texto)}
                value={senha}
                />
            </View>

            <View style={styled.viewFormGroup}>
                <Button texto='Acessar'/>
            </View>
            <View style={styled.containerSocial}>
                <View style={styled.view}>
                    <SocialMedia/>
                    <TouchableOpacity onPress = {
                        ()=> props.navigation.navigate('registry')
                        }>
                        <Text style={styled.textStyle}>Criar minha conta</Text>
                    </TouchableOpacity>
                </View>  

            </View>
        </KeyboardAvoidingView>

         
    </KeyboardAvoidingView>
    
}
export default Login;