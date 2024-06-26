import orders from '@assets/data/orders';
import OrderItemListItem from '@components/OrderItemListItem';
import OrderListItem from '@components/OrderListItem';
import Colors from '@constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { Order, OrderItem } from '@types';
import { Link, Stack, Tabs, useLocalSearchParams } from 'expo-router'
import React from 'react'
import { FlatList, Pressable, Text, View } from 'react-native'



const order = () => {
    const {id} = useLocalSearchParams();
    const item = orders.find((item) => (item.id.toString() === id)); 
    if (!item){
        return( 
          <View>
            <Stack.Screen options={{title: 'Not found'}}/>
            <Text>Order Not Found</Text>
          </View>  
        )
    }
    const title = 'Order #' + item.id.toString() + ' ';
    return (
        <View>
        <Stack.Screen options={{title, headerTitleAlign:'center',  
            headerLeft: () => (
            <Link href="/order" asChild>
                <Pressable>
                {({ pressed }) => (
                    <Text style={{color:Colors.light.tint, fontSize:20, padding:10}}>order </Text>
                )}
                </Pressable>
            </Link>
            ),
            }}/>
        <View style={{margin: 10}}>
            <OrderListItem order={item}/>
        <FlatList contentContainerStyle={{}} data={item.order_items} renderItem={({item}) => (
            <OrderItemListItem order={item}/>
            )}/>
        </View>

    </View>
  )
}

export default order;