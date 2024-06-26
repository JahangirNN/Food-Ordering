import { Text, View , Image, StyleSheet} from 'react-native';
import { defaultPizzaImage } from './ProductListItem';
import { CartItem } from '@types';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '@constants/Colors';
import { useCart } from '@providers/CartProvider';

type cartItemListProps = {
    cartItem: CartItem;
}

const CartListItem = ({cartItem}:cartItemListProps) => {
    const {updateQuantity} = useCart();
  return (
    <View style={styles.container}>

        <Image 
        style={styles.image} 
        resizeMode='contain' 
        source={{uri :cartItem.product.image || defaultPizzaImage}} 
        />
        
        <View style={{ flex: 1 }}>
            <Text style={styles.title}>{cartItem.product.name}</Text>
            <View style={styles.subtitleContainer}>
                <Text style={styles.price}>${cartItem.product.price.toFixed(2)}</Text>
                <Text>Size: {cartItem.size}</Text>
            </View>
        </View>

        <View style={styles.quantitySelector}>
        
            <FontAwesome
                onPress={() => updateQuantity(cartItem.id, -1)}
                name="minus"
                color="gray"
                style={{ padding: 5, fontSize:18 }}
                />

            <Text style={styles.quantity}>{cartItem.quantity}</Text>
        
            <FontAwesome
                onPress={() => updateQuantity(cartItem.id, 1)}
                name="plus"
                color="gray"
                style={{ padding: 5, fontSize:18 }}
                />
        </View>


    </View>
  )
}

const styles= StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 5,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 75,
        aspectRatio: 1,
        alignSelf: 'center',
        marginRight: 10,
    },
    title: {
        fontWeight: '500',
        fontSize: 16,
        marginBottom: 5,
    },
    subtitleContainer: {
        flexDirection: 'row',
        gap: 5,
    },
    quantitySelector: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        marginVertical: 10,
    },
    quantity: {
        fontWeight: '500',
        fontSize: 20,
    },
    price: {
        color: Colors.light.tint,
        fontWeight: 'bold',
    },

})

export default CartListItem