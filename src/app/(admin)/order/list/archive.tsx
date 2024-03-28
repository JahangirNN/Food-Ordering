import { FlatList, Text, View } from "react-native"
import orders from "@assets/data/orders"
import OrderListItem from "@components/OrderListItem"
import { Stack } from "expo-router"

const index = () => {
  return (
    <View>
        <Stack.Screen  options={{title:'Archive ', headerTitleAlign:'center' }} />

        <FlatList 
        contentContainerStyle={{gap:10, padding:10}}
        data={orders} renderItem={({item}) => (
            <OrderListItem order={item}/>
        )}/>
    </View>
    
  )
}

export default index