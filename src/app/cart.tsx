import { StatusBar } from "expo-status-bar";
import { View, Text, Platform, FlatList, StyleSheet } from "react-native";
import { useCart } from "@providers/CartProvider";
import CartListItem from "@components/CartListItem";
import Button from "@components/Button";

const cart = () => {
  const {total, item} = useCart();
  return (
    <View style={{paddingTop:10, paddingHorizontal:10}}>
      
        <FlatList data={item} renderItem={({item}) => <CartListItem cartItem={item}/>} contentContainerStyle={{ gap:1}}>

        </FlatList>
        <Text style={{paddingHorizontal:5, marginTop:20, fontSize:20, fontWeight:'600'}}>Total: ${total}</Text>
        <Button style={styles.button} text="Checkout "/>
        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  )
}
const styles = StyleSheet.create({
  button:{
    backgroundColor: 'blue',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default cart;