import { View, Text, TextInput, StyleSheet, Pressable, Alert } from 'react-native';
import React, { useState } from 'react';
import Button from '../../components/Button';
import Colors from '../../constants/Colors';
import { Link, Redirect, Stack} from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { supabase } from '@lib/supabase';

const SignInScreen = () => {
  const [email, setEmail] = useState('hi@gmail.com');
  const [password, setPassword] = useState('hi@gmail.com');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(true);
  
  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
  
    setLoading(false);
    if (error !== null) {
      console.warn(error.message);
    }
    setError(false);
  }
  return (
    
    <View style={styles.container}>
      <Stack.Screen options={{ title:'Sign In',headerBackVisible:false,headerRight: () => (
            <Link href="/(auth)/sign-up" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="backward"
                    size={25}
                    color={Colors.light.tint}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}/>
 
      <Text style={styles.label}>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="jon@gmail.com"
        style={styles.input}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder=""
        style={styles.input}
        secureTextEntry
      />

      <Button disabled={loading} onPress={signInWithEmail} text={!loading? "Sign In ":"loading... "} />
      <Link href="/(auth)/sign-up" style={styles.textButton}>
        Create an Account </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    flex: 1,
  },
  label: {
    color: 'gray',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginTop: 5,
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  textButton: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: Colors.light.tint,
    marginVertical: 10,
  },
});

export default SignInScreen;