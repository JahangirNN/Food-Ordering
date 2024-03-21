import { StyleSheet, Image , Text, View} from 'react-native';

import products from '@assets/data/products';
import Colors from '@constants/Colors';
import ProductListItem from '@components/ProductListItem';

const product = products[0];
const product1 = products[1];

export default function TabOneScreen() {
  return ( 
  <View>
      <ProductListItem product={product}/>
      <ProductListItem product={product1}/>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    borderRadius:20,
    padding:20,
    overflow:'hidden',
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
