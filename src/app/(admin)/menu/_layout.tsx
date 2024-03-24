import Colors from "@constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { Stack, Link,  } from "expo-router";
import { Pressable } from "react-native";

export default function MenuStack () {
    return (
    <Stack screenOptions={{
        }}>
        <Stack.Screen name="index" options={{title:'Menu', 
          headerRight: () => (
            <Link href="/" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="shopping-cart"
                    size={25}
                    color={Colors.light.tint}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
          
          }}/>
        <Stack.Screen name="[id]" options={{title:'Menu', 
          headerRight: () => (
            <Link href="/" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="pencil"
                    size={25}
                    color={Colors.light.tint}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
          
          }}/>
    </Stack>
    )
}