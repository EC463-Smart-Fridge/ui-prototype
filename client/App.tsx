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
  Pressable,
} from 'react-native';
import Item from './components/Item';
import NewItem from './components/NewItem';

const App = () => {
  interface Food {
    name: String;
    exp: Date;
  };

  // const sampleItem: Food = {name: "carrot", exp: new Date("2022-03-25")};

  // const [adding, setAdding] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [date, setDate] = useState<Date>(new Date);
  const [items, setItems] = useState<Food[]>([]);

  // const handleRemove = (i: any) => setItems(items.filter((_, index) => index !== i))
  // const handleAdd = () => setItems(items.concat(sampleItem))

  return (
    <ScrollView>
      <Text style={{textAlign: 'center',}}>Items</Text>
      {items.map((item, i) => (
        <View key={i}>
          {Item(item.name, item.exp, () => (
            setItems(items.filter((_, index) => index !== i))
            ))}
        </View>
      ))}

      {NewItem(items, setItems)}
    </ScrollView>
  )
}

export default App;
