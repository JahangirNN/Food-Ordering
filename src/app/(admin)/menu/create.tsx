import Button from "@components/Button";
import * as ImagePicker from 'expo-image-picker';
import { defaultPizzaImage } from "@components/ProductListItem";
import Colors from "@constants/Colors";
import { useState } from "react";
import { Alert, Image, StyleSheet, Text, TextInput, View } from "react-native"
import { Stack, useLocalSearchParams } from "expo-router";


const CreateProductScreen = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [error, setError] = useState('');
    const [image, setImage] = useState<string | null>(null);

    const {id} = useLocalSearchParams();
    const isUpdating = !!id;

    const resetFields = () => {
        setName('');
        setPrice('');
    } 

    const validInput = () => {
        if(!name || !price ){
            setError('Both Fields are required');
            return false;
        }
        if(isNaN(parseFloat(price))){
            setError('Price should be a number!');
            return false;
        }
        setError('');
        return true;

    }

    const onSubmit = () => {
        if(isUpdating) {
            onUpdate();
        }
        else{
            onCreate();
        }
    }

    const onCreate = () => {
        if(!validInput()){
            return
        }
        console.warn('creating ', name, price);
        resetFields();
    }

    const onUpdate = () => {
        if(!validInput()){
            return
        }
        console.warn('Updating ', name, price);
        resetFields();
        
    }
    const onDelete = () => {
        console.warn('DELETE!')
    }
    const confirmDelete = () => {
        Alert.alert("Confirm", "Are you sure you want to delete",[
        {
            text: 'Cancel',
            style:"cancel",
        },
        {
            text:'Delete',
            style:'destructive',
            onPress:onDelete,
        },]
        
        );
    }
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
        
      };
  return (
    <View style={styles.container}>
        <Stack.Screen options={{title: isUpdating? 'Update Product ':'Create Product'}}/>
        <Image style={styles.image} source={{uri:image ||defaultPizzaImage}} />
        <Text onPress={pickImage} style={styles.buttonText} >Select Image </Text>

        <Text style={styles.label} >Create</Text>        
        <TextInput 
        placeholder="Name" 
        value={name} 
        onChangeText={setName} 
        style={styles.input} 
        />
        
        <Text style={styles.label} >Price ($)</Text>
        <TextInput 
        placeholder="9.99" 
        value={price}
        onChangeText={setPrice}
        style={styles.input} keyboardType="numeric"/>

        <Text style={{color:'red'}}>{error}</Text>
        <Button onPress={onSubmit} text={isUpdating? "Update ":"Create "}/>
        {isUpdating && 
        <Text onPress={confirmDelete} 
        style={[styles.buttonText, {color:'red'} ]}>Delete </Text>}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        padding:10,
    },
    input:{
        backgroundColor:'white',
        padding:10,
        borderRadius:5,
        marginTop:5,
        marginBottom:20,
    },
    label:{
        color:'grey',
        fontSize:16,
        paddingHorizontal:2
    },
    image:{
        aspectRatio:1,
        width:'50%',
        alignSelf:'center',
        borderRadius:100,
    },
    buttonText:{
       color:Colors.light.tint,
       alignSelf:'center',
       fontWeight: 'bold', 
       marginVertical:10,
    },
})
export default CreateProductScreen;