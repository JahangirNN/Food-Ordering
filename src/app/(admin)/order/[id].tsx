import orders from '@assets/data/orders';
import OrderItemListItem from '@components/OrderItemListItem';
import OrderListItem from '@components/OrderListItem';
import Colors from '@constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { Order, OrderItem, OrderStatusList } from '@types';
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
            )} ListFooterComponent={()=> (
                <>
                <Text style={{ fontWeight: 'bold' }}>Status</Text>
                <View style={{ flexDirection: 'row', gap: 5 }}>
                    {OrderStatusList.map((status) => (
                    <Pressable
                        key={status}
                        onPress={() => console.warn('Update status')}
                        style={{
                        borderColor: Colors.light.tint,
                        borderWidth: 1,
                        padding: 10,
                        borderRadius: 5,
                        marginVertical: 10,
                        backgroundColor:
                            item.status === status
                            ? Colors.light.tint
                            : 'transparent',
                        }}
                    >
                        <Text
                        style={{
                            color:
                            item.status === status ? 'white' : Colors.light.tint,
                        }}
                        >
                        {status} </Text>
                    </Pressable>
                    ))}
                </View>
                </>
          )}/>
        </View>

    </View>
  )
}

export default order;