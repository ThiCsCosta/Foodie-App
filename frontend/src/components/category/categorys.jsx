import { View, Text, Image, ScrollView } from "react-native";
import { stylesCategory } from "./categoryStyle";
import { categorysData } from "../constants/dados";

function Category(props){
    return <View>
        <ScrollView contentContainerStyle={stylesCategory.container}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            
        >{
                props.dados.map((categorysData, index) =>{
                    return <View key={index} >
                        <Image style={stylesCategory.imgCategory} 
                        source={categorysData.icon}/>

                        <Text style={stylesCategory.description}>{categorysData.descricao}

                        </Text>
                    </View>
                })
            }
        </ScrollView>
        
    </View>
}
export default Category;