import React from 'react';
import { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Alert,
  Button,
  Pressable,
} from 'react-native';
import Item from './components/Item';

const App = () => {
  type Food = {
    name: String;
    exp: Date;
  };

  const sampleItem: Food = {name: "carrot", exp: new Date("2022-03-25")};

  const [adding, setAdding] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [items, setItems] = useState<Food[]>([sampleItem]);

  const handler = () => Alert.alert('button pressed');
  const addHandler = () => setItems(items.concat(sampleItem))

  return (
    <SafeAreaView>
      <Text style={{textAlign: 'center',}}>Items</Text>
      {items.map((item, i) => (<View key={i}>{Item(item.name, item.exp, handler)}</View>))}

      <Pressable
        onPress={addHandler}
        style={{
          borderRadius:10,
          backgroundColor: 'lightblue',
          height:32,
          alignItems: 'center',
        }}
      >
        <Text>
          Add Item
        </Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default App;
