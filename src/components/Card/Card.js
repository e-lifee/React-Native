import React from 'react';
import {View,Text,TouchableOpacity,Alert} from 'react-native';
import styles from './Card.style';
const Card=(props)=>{
    return(
        <View style={styles.container}>
        <View style={styles.body}>
            <Text style={styles.title}>John Doe</Text>
            <Text style={styles.text}>Lorem ipsum...</Text>
        </View>
        <TouchableOpacity style={styles.down_container} onPress={()=>Alert.alert('Hi, '+props.title)}>
           <Text style={styles.down_title}>LIKE</Text> 
        </TouchableOpacity>
        <View style={styles.body}>
            <Text style={styles.title}>USER: {props.title}</Text>
            <Text style={styles.text}>{props.text}</Text>
        </View>
        <TouchableOpacity style={styles.down_container} onPress={()=>Alert.alert('Hi, ' + props.title)}>
           <Text style={styles.down_title}>LIKE</Text> 
        </TouchableOpacity>
        </View>
    );
};

export default Card;
