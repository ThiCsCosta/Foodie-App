import { View, Text, Image, ScrollView } from "react-native";
import { stylesBanner, stylesCategory } from "./bannerStyle.js";
import { categorysData, banners } from "../constants/dados.js";

function Banners(props){
    return <View>
        <ScrollView 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >{
                props.dados.map((banners, index) =>{
                    return <View key={index} style={stylesBanner.banner}>
                        <Image style={stylesBanner.imgBanner} 
                        source={banners.icon}/>
                    </View>
                })
            }
        </ScrollView>
        
    </View>
}
export default Banners;