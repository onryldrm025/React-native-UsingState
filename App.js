import React,{useState} from 'react';
import { Text, View, StyleSheet,Button } from 'react-native';




export default function App(){
  const[name,setName] = useState('Onur');
  const[person,setPerson] = useState({name:"",age:0});

  

  const clickHandler = () =>{
    setName('Yıldırım');
    setPerson({name:"deneme",age:20});
  }

  return(
    <View style={styles.container}>
      <Text>{name}</Text>
      <View style={styles.buttonContainer}> 
      <Button title='deneme' onPress={clickHandler}>Click</Button>
      <Text>{person.name + " " + person.age }</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center'
  },
  buttonContainer:{
    marginTop:20
  }

});`
  
`