import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView,View } from 'react-native';
import {PropTypes} from 'prop-types';
export default function Game(props) {
  
 
  var numbers=[];
  for(let i=0;i<6;i+=1){
    numbers.push(1+Math.floor(10*Math.random()))
  }
  var target=numbers.slice(0,4).reduce((acc,curr)=>acc+curr,0);
  return (
    
    <SafeAreaView style={styles.container}>
      {numbers.map((num,index)=><Text key={index}>{num}</Text>)}
      <Text style={styles.targetNum}>{target}</Text>
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    paddingTop:40,
  },
  targetNum:{
      fontSize:40,
      backgroundColor:'#ddd',
      marginHorizontal:50,
      textAlign:'center',
      flexDirection:'row',
      flex:0,
  },
});
