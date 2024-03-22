import { StatusBar } from "expo-status-bar";
import { View, Text, Platform, FlatList } from "react-native";
import { useCart } from "@providers/CartProvider";
import CartListItem from "@components/CartListItem";

const cart = () => {
  const {item} = useCart();
  return (
    <View style={{paddingTop:10}}>
      
        <FlatList data={item} renderItem={({item}) => <CartListItem cartItem={item}/>} contentContainerStyle={{padding:10, gap:1}}>

        </FlatList>

        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  )
}

export default cart;