import { View,Text, Image } from "react-native";
import { styled } from "./registry_Style2";
import Header from "../../../header/header";
import TextBox from "../../../textbox/textBoxComponent";
import Button from "../../../button/button";
import { styles } from "../../../textbox/textboxStyles";
import { style } from "../../../header/headerStyle";
import icons from "../../../constants/icons";
import SocialMedia from "../../../icons/Social";
import { useState } from "react";



function Registry2(){

    const [endereço, setEndereco] = useState("");
    const [complemento, setComplemento] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [uf, setUf] = useState("");
    const [cep, setCep] = useState("");


    return <View style={styled.container}>
        <Header style={style.titulo} texto='Informe seu endereço.'/>

        <View style={styled.viewForm}>

            <View style={styled.viewFormGroupRow}>
                <View style={styled.chilldreForm}>
                    <TextBox texto='Endereço' 
                        placeholder='Digite seu endereço'
                        style={styled.plac}
                        onChangeText={(texto)=>setEndereco(texto)}
                        value={endereço}
                    />
                </View >
                
                <View style={styled.chilldreForm2}>
                    <TextBox texto='Comple.' 
                        placeholder='Complemento'
                        style={styled.plac}
                        onChangeText={(texto)=>setComplemento(texto)}
                        value={complemento}
                    />
                </View>
            </View>
            <View style={styled.viewFormGroup2}>
                <TextBox texto='Bairro' 
                    placeholder="Digite seu bairro" 
                    onChangeText={(texto)=>setBairro(texto)}
                    value={bairro}
                />
            </View>
            <View style={styled.viewFormGroupRow}>
                <View style={styled.chilldreForm}>
                    <TextBox texto='Cidade' 
                        placeholder='Digite sua Cidade'
                        style={styled.plac}
                        onChangeText={(texto)=>setCidade(texto)}
                        value={cidade}
                    />
                </View >
                
                <View style={styled.chilldreForm2}>
                    <TextBox texto='UF' 
                        placeholder='Estado'
                        style={styled.plac}
                        onChangeText={(texto)=>setUf(texto)}
                        value={uf}
                    />
                </View>
            </View>
            <View style={styled.viewFormGroup}>
                <TextBox texto='CEP' 
                    placeholder="Digite seu CEP" 
                    onChangeText={(texto)=>setCep(texto)}
                    value={cep}
                />
            </View>
            <View style={styled.viewFormGroup}>
                <Button texto='Criar minha conta'/>
            </View>
           
        </View>

         
    </View>
    
}
export default Registry2;