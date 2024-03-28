import { withLayoutContext} from "expo-router";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "react-native-safe-area-context";

const TopTab = withLayoutContext(createMaterialTopTabNavigator().Navigator)
export default function TabNavigator(){
    return(
        <SafeAreaView edges={['top']} style={{flex:1 , backgroundColor:'white'}}>
           <TopTab screenOptions={{}}/>
        </SafeAreaView>
    )

}