import React,{ useState } from 'react';
import { SafeAreaView,View,Text,Button } from 'react-native';

function App(){
  const[counter,setCounter]=useState(0);
/**
  function updateCounter(){
    setCounter(counter+1);
  }
 */
  function increaseCounter(){
    setCounter(counter+1);
  }
  function decreaseCounter(){
    setCounter(counter-1);
  }
  return(
    <SafeAreaView>
      <Text style={{fontSize:40}}>Counter:{counter}</Text>
      <Button title="Increase Counter" onPress={increaseCounter}/>
      <Button title="Decrease Counter" onPress={decreaseCounter}/>
    </SafeAreaView>
  );
}

export default App;
