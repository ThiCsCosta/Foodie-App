import { View, Image } from "react-native";
import Header from "../../components/header/header";
import icons from "../../components/constants/icons";
import { styles } from "./homeStyle";
import { SafeAreaView } from "react-native-safe-area-context";
import TextBox from "../../components/textbox/textBoxComponent.jsx";
import { useState } from "react";
import Category from "../../components/category/categorys.jsx";
import { categorysData, banners } from "../../components/constants/dados";
import Banners from "../../components/banners/banners";

function Home(){
    const [busca, setBusca] = useState("");
    return <SafeAreaView style={styles.container}>
                <View style={styles.viewHeader}>
                    <Image style={styles.headerSize} source={icons.logo}/>
                    <Image style={styles.cartSize} source={icons.cart}/>
                </View>

                <View style={styles.buscaStyle}>
                    <TextBox  
                    placeholder= "O que vamos pedir hoje?"
                    onChangeText={(texto)=>setBusca(texto)} value={busca}
                    />
                </View>
          
                <Category dados={categorysData}/>
                <Banners dados={banners}/>
               
    </SafeAreaView>
    
}
export default Home;