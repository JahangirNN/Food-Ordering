import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react';
import Button from '../../components/Button';
import Colors from '../../constants/Colors';
import { Link, Stack, useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { supabase } from '@lib/supabase';

const SignUpScreen = () => {
  const [email, setEmail] = useState('hi@gmail.com');
  const [password, setPassword] = useState('hi@gmail.com');
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function signUpWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
  
    if (error) console.warn(error.message);
    setLoading(false);
  }
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title:'Sign Up',headerBackVisible:false, headerRight: () => (
            <Link href="/(auth)/sign-in" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="sign-in"
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

<Button disabled={loading} onPress={signUpWithEmail} text={!loading? "Create account ":"loading... "} />
      <Pressable onPress={router.back}>
        <Text style={styles.textButton}>
        Sign in </Text>
      </Pressable>
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

export default SignUpScreen;