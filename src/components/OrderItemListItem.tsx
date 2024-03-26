import { StyleSheet, Image , Text, View, Pressable} from 'react-native';
import { Order, OrderItem } from '@/types';
import { Link, useSegments } from 'expo-router';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { defaultPizzaImage } from './ProductListItem';
import { useCart } from '@providers/CartProvider';
import Colors from '@constants/Colors';

dayjs.extend(relativeTime);

type OrderListItemProps = {
    order: OrderItem;
}

const OrderItemListItem = ({order}: OrderListItemProps) => {
    const segments = useSegments();
    return (
        <View style={styles.container}>
            
            <Image style={styles.image} source={{uri:order.products.image || defaultPizzaImage}}/>
            
            <View style={styles.infoContainer}>

                <Text style={styles.title}>{order.products.name}</Text>
                
                <View style={styles.priceAndSize}>    
                    <Text style={{color:Colors.light.tint}}>${order.quantity * order.products.price} </Text>
                    <Text>Size: {order.size}</Text>
                
                
                </View>
            </View>

            <View>
                <Text style={styles.title}>{order.quantity} </Text>
            </View>
        </View>
    


  )
}  
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        // justifyContent:'space-evenly',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor:'white',
        borderRadius:20,
        margin: 10,
      },
      infoContainer: {
        flex: 1,
      },
      title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      priceAndSize: {
        flexDirection:'row',
        // justifyContent:'space-between',
        color:Colors.light.tint,
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      time: {
        fontSize: 14,
        color: 'gray',
      },
      status: {
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 10,
        color: 'green', // or any color you prefer
      },
            
        image:{
            width:'24%',
            aspectRatio:1,
            // alignSelf:'center',
        }
});

export default OrderItemListItem;