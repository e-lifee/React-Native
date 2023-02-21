import React from "react"; //tırnak içindeki ifadeler nodemodules'ten gelir
import { Button, SafeAreaView, Text, View, TouchableOpacity,StyleSheet,Alert } from "react-native"; //View->Div-------Text->Paragraph
import Card from './components/Card';
function App(){
  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.card_container}>
      <View style={styles.card_body}>
        <Text style={styles.card_title}>Edward Stark</Text>
        <Text style={styles.card_text}>Winter is coming.</Text>
      </View> 
      <TouchableOpacity style={styles.card_down_container}>
        <Text style={styles.card_down_title}>LIKE</Text>
        </TouchableOpacity>    
      </View> 
      <View style={styles.card_container}>
      <View style={styles.card_body}>
        <Text style={styles.card_title}>Nancy Blank</Text>
        <Text style={styles.card_text}>Gonna Die!..</Text>
      </View> 
      <TouchableOpacity style={styles.card_down_container}>
        <Text style={styles.card_down_title}>LIKE</Text>
        </TouchableOpacity>    
      </View> 
      <View style={styles.card_container}>
      <View style={styles.card_body}>
        <Text style={styles.card_title}>Steve Erikson</Text>
        <Text style={styles.card_text}>Never run away.</Text>
      </View> 
      <TouchableOpacity style={styles.card_down_container}>
        <Text style={styles.card_down_title}>LIKE</Text>
        </TouchableOpacity>    
      </View> 
      <Card title="Elife EFE" text="I don't like humans xxxxxxxx"/>  
      <Card title="Edward Stark" text="Winter is coming."/>
      <Card title="Nancy Blank" text="Gonna Die!.."/>
      <Card title="Steve Erikson" text="Never run away."/>
    </SafeAreaView>
  );
  
};
/**
 * Card sayesinde hem card içindeki yazar ve söz gelir hem de bzm burda içine yazdıgımız gelir. ama birleşik alt alta gelir.
 * İstediğin kdr custom component kullanarak view text touchable vs gerek kalmadan bir sürü veri oluşturabilirsin ekranda
 * 
 */
const styles=StyleSheet.create({
  container:{
    flex:1,
    margin:15,
    backgroundColor:'#e0e0e0',
  },

  card_container:{
    backgroundColor:'white',
    margin:10,
    borderWidth:1,
    borderColor:'grey',
    borderRadius:10,
  },
  card_body:{
    padding:10,
  },
  card_title:{
    fontSize:20,
    fontWeight:"bold",
    margin:10,
    marginBottom:3,
  },
  card_text:{
    fontSize:18,
    margin:10,
    marginTop:3,
  },
  card_down_container:{
    backgroundColor:'#00C2FF',
    padding:10,
    alignItems:'center',
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
  },
  card_down_title:{
    color:'white',
    fontWeight:'bold',
  },
});
/** 
const App = () => {
  /**
   * React'ta her bir component tek bir yapıyı return etmeli
   * burda sadece safeareaview return ediliyor
   * birden fazla yapıyı return edemezsin
   * "you must keep only one parent"
   

  function sayHello() {
    console.log("HELOO");
  }

  const showNumber = (number) => {
    console.log(number);
  };
  return (
    /**SafeAreaView çalışmıyor
     * Bu yüzden iki tane boşluk text'li view attım içine.
     
    <SafeAreaView style={styles.container}>
   
      <View style={styles.up_viewcontainer}>
        <Text>Inshallah,works...</Text>
        <Text>Inshallah,works...</Text>
        <Text>Inshallah,works...</Text>
      </View>
      <View style={styles.down_viewcontainer}>
        <Text>Inshallah,works...</Text>
        <Text>Inshallah,works...</Text>
        <Text>Inshallah,works...</Text>
      </View>
      <View>
        <Text>Inshallah,works...</Text>
        <Button title="Show Number" onPress={()=>showNumber(8)} /> 
        <Text>Inshallah, works....</Text>
      </View>

      <Text style={{ backgroundColor: "yellow" }}>Inshallah,works...</Text>
      <Button
        title="Press Me!"
        /**do this: 
        onPress={sayHello}
        /**instead of thisss
       
        onPress={() => {   
          sayHello;
          console.log("HELOO...");
          
        }}

        color="orange"
      />
    </SafeAreaView>
  );
};

/**
 * inline style yerine 
 * bu daha cok
 * tercih edilir!!!!!!!
 
const styles=StyleSheet.create({
  /**
   * safeareaview'e flex belirtmek zorundasın içindekilere belirttiysen
   
  container:{
    flex:100,
    flexDirection:'column',
    backgroundColor:'grey',
  },
  up_viewcontainer:{
    backgroundColor:'red',
    marginHorizontal:10,
    marginTop:20,
    paddingHorizontal:130,
    paddingVertical:10,
    borderRadius:10,
    flex:1,
  },
  down_viewcontainer:{
    backgroundColor:'green',
    marginHorizontal:10,
    marginTop:20,
    paddingHorizontal:130,
    paddingVertical:10,
    borderRadius:10,
    flex:2,
  },
})*/
export default App;

//ekrana basabildiğin bütün yapılar COMPONENT; ekrana basamadığın ama özellikerini kullanabildigin bütün yapılar da API'dır.
