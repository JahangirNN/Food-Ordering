import products from '@assets/data/products';
import Button from '@components/Button';
import { defaultPizzaImage } from '@components/ProductListItem';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import { useCart } from '@providers/CartProvider';
import { PizzaSize } from '@types';

const sizes: PizzaSize[] = ['S', 'M', 'L', 'XL', ];

const product = () => {
  const router = useRouter();
  const {addItem, item} = useCart();
  
  const addToCart = () => {
    if(!product) return
    addItem(product, currentSize)
    router.push('/cart')
  }
  
  const [currentSize, setCurrentSize] = useState<PizzaSize>('M');
  const {id} = useLocalSearchParams();
  
  const product = products.find((p)=> p.id.toString() === id);
  if (!product){
    return( 
      <View>
        <Stack.Screen options={{title: 'Not found'}}/>
        <Text>Product Not Found</Text>
      </View>  
    )
  }
  return (
    <View style= {style.container}>
      <Stack.Screen options={{title: product?.name}}/>
      <Image style={style.image} source={{uri: product.image || defaultPizzaImage }}/>
      {/* <Text style={{paddingHorizontal:10}}>Select size</Text> */}
      
      {/* <View style={style.sizes} >
        {sizes.map((size)=> (
      
          <View style={[style.size, {backgroundColor: currentSize===size? 'gainsboro':'white'}]} key={size} onTouchStart={()=>{
            setCurrentSize(size)
          }}>
            <Text style={[style.sizeText, {color: currentSize===size? 'black':'grey' } ]}>{size}</Text>
          </View>
        
        ))}
      </View>
       */}
      <Text style={style.price}>${product.price}</Text>
      {/* <Button onPress={addToCart} text='Add to cart '/> */}
    </View>
  )
}

const style = StyleSheet.create({
  container:{
    backgroundColor:'white',
    flex:1,
    padding:10,
  },
  price: {
    fontSize:18,
    fontWeight:'bold',
    paddingHorizontal:10,
    // marginTop:'auto',
  },
  image:{
    width:'100%',
    aspectRatio:1,

  },
  size:{
    backgroundColor:'gainsboro',
    width:50,
    aspectRatio:1,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
  },
  sizes:{
    flexDirection:'row',
    marginVertical:10,
    justifyContent:'space-around'    
  },
  sizeText:{
    fontSize:20,
    fontWeight:'100',
  },
})


export default product;