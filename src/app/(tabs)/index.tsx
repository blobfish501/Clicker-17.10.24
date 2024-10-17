

import React, {useState} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';


export default function Counter()
{
  const [count, setCount] = useState(0);
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  return
  (
    <View style = {styles.container}>
      <Text style = {styles.counterText}>
        Count: {count}
      </Text>
      <View style = {styles.buttonContainer}>
        <Button title = 'Increase' onPress = {increase} />
        <Button title = 'Decrease' onPress = {decrease} />
      </View>
    </View>
  );
}


const styles = StyleSheet.create
({

  container:
  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  counterText:
  {
    fontSize: 30,
    marginBottom: 20,
  },
  
  buttonContainer:
  {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
});