import { StyleSheet, Image , Text, View, Pressable} from 'react-native';
import Colors from '@constants/Colors';
import { Product } from '@/types';
import { Link } from 'expo-router';

export const defaultPizzaImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png';

type ProductListItemProps = {
    product: Product;
}

const ProductListItem = ({product}: ProductListItemProps) => {
  return (
    <Link href={`/menu/${product.id}`} asChild> 
        <Pressable style={styles.container}>
            <Image 
            source={{uri: product.image || defaultPizzaImage}}
            style={styles.image}
            resizeMode='contain'/>
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.price}>${product.price}</Text>
        </Pressable>
    </Link>


  )
}  
const styles = StyleSheet.create({
container: {
    backgroundColor:'white',
    borderRadius:20,
    padding:20,
    overflow:'hidden',
    flex:1,
    maxWidth:'50%'
},
title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical:10,
},
price: {
    color:Colors.light.tint,
    fontWeight:'bold',
    marginTop:'auto',
},
image:{
    width:'100%',
    aspectRatio:1,
    alignSelf:'center',
}
});

export default ProductListItem;