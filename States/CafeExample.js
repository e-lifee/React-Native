import React,{ useState } from 'react';
import { SafeAreaView,View,Text,Button,FlatList,Switch } from 'react-native';

const data=[
{id:0,name:'Lemon Cafe',isFav:true},
{id:1,name:'Daisy Cafe',isFav:true},
{id:2,name:'BugG Cafe',isFav:false},
{id:3,name:'Rock`n Code Cafe',isFav:true},
{id:4,name:'ESC Cafe',isFav:false},
{id:5,name:'TAB Cafe',isFav:false},
];
function App(){
 const [cafeList,setCafeList]=useState(data);
 const [showOnlyFavs,setShowFavs]=useState(false);

 function onFavsChange(favSelected){
  setShowFavs(favSelected);
  favSelected
  ?
  setCafeList(cafeList.filter(cafe=>cafe.isFav))
  :
  setCafeList(data);
 }
  return(
    
    <SafeAreaView>
    <View style={{margin:50}}>
    <View></View>
    <View></View>
        <Text>Show Only Fvaorites</Text>
        <Switch value={showOnlyFavs} onValueChange={onFavsChange}/>
      </View>
      <FlatList style={{marginLeft:30}} data={cafeList}
       renderItem={({item})=><Text style={{fontSize:25}}>{item.name}</Text>}
       />
    </SafeAreaView>
  );
}

export default App;
