import { View,Text, Image } from "react-native";
import { styled } from "./registry_Style2";
import Header from "../../../header/header";
import TextBox from "../../../textbox/textBoxComponent";
import Button from "../../../button/button";
import { styles } from "../../../textbox/textboxStyles";
import { style } from "../../../header/headerStyle";
import icons from "../../../constants/icons";
import SocialMedia from "../../../icons/Social";



function Registry2(){
    return <View style={styled.container}>
        <Header style={style.titulo} texto='Informe seu endereço.'/>

        <View style={styled.viewForm}>
            <View style={styled.viewFormGroupRow}>
                <View style={styled.chilldreForm}>
                    <TextBox texto='Endereço' placeholder='Digite seu endereço'style={styled.plac}/>
                </View >
                
                <View style={styled.chilldreForm2}>
                    <TextBox texto='Comple.' placeholder='Complemento'style={styled.plac}/>
                </View>
            </View>
            <View style={styled.viewFormGroup2}>
                <TextBox texto='Bairro' placeholder="Digite seu bairro" />
            </View>
            <View style={styled.viewFormGroupRow}>
                <View style={styled.chilldreForm}>
                    <TextBox texto='Cidade' placeholder='Digite sua Cidade'style={styled.plac}/>
                </View >
                
                <View style={styled.chilldreForm2}>
                    <TextBox texto='UF' placeholder='Estado'style={styled.plac}/>
                </View>
            </View>
            <View style={styled.viewFormGroup}>
                <TextBox texto='CEP' placeholder="Digite seu CEP" />
            </View>
            <View style={styled.viewFormGroup}>
                <Button texto='Criar minha conta'/>
            </View>
           
        </View>

         
    </View>
    
}
export default Registry2;