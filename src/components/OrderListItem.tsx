import { StyleSheet, Image , Text, View, Pressable} from 'react-native';
import { Order } from '@/types';
import { Link, useSegments } from 'expo-router';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

type OrderListItemProps = {
    order: Order;
}

const OrderListItem = ({order}: OrderListItemProps) => {
    const segments = useSegments();
    return (
    <Link href={`/${segments[0]}/order/${order.id}`} asChild> 
        <Pressable style={styles.container}>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>Order #{order.id}</Text>
                <Text style={styles.time}>{dayjs(order.created_at).fromNow()}</Text>
            </View>

            <View>
                <Text style={styles.status}>{order.status} </Text>
            </View>
        </Pressable>
    </Link>


  )
}  
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 30,
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
});

export default OrderListItem;