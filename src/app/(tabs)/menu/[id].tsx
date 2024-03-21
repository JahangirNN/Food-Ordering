import { View } from '@components/Themed';
import { Stack, useLocalSearchParams } from 'expo-router';
import { Text} from 'react-native';
const product = () => {
  const {id} = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{title: 'Details:' + id}}/>
      <Text>{id}Hello</Text>
    </View>
  )
}



export default product;