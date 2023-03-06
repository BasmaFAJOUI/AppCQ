import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import {Image} from 'react-native' ; 
//import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import{firebase} from'../config';

const Fetch =() =>{
    const[posts,setposts]=useState([]);
    const postRef=firebase.firestore().collection('posts');
    useEffect(() =>{
      const fetchData = async ()=>{
       postRef
       .onSnapshot(
          querySnapshoot=>{
            const posts = []
            querySnapshoot.forEach((doc) => {
              const{heading,text } = doc.data()
              posts.push({
                id:doc.id,
                heading,
                text,
            })
          })
          setposts(posts)
          })
        };
        fetchData();
    },[])
  
    return (
      <View style = {{flex:1,marginTop:100}}>
        <FlatList
          style={{height:'100%'}}
          data={posts}
          numColumns ={1}
          renderItem={({item})=>(
            <View style={styles.innerContainer}>
              <Text style={styles.itemHeading}>{item.heading}</Text>
              <Text style={styles.itemText}>{item.text}</Text>
  
            </View>
          )}
          /> 
        </View>
    )
  }
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      //paddingTop:10,
     // justifyContent: 'center',
    },
  
    container1: {
     // flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
     // justifyContent: 'center',
    },
    container2: {
      // flex: 1,
       backgroundColor: '#fff',
      // alignItems: 'center',
       paddingTop:1,
       paddingLeft:10,
       paddingRight:10,
       
      // justifyContent: 'center',
     },
    text :{
      //fontFamily:'arbfonts-samt-7017',
      backgroundColor: '#68C790',
      marginTop:0,
      Weight:100,
      fontSize:15,
      borderRadius:60,
      color:'#fff',
      
    },
    text1 :{
      //fontFamily:'arbfonts-samt-7017',
      backgroundColor: '#EFFFED',
      marginTop:0,
      Weight:50,
      fontSize:10,
      borderRadius:20,
      color:'#000',
      lineHeight:15,
  
    },
    image :{
      height : 40,
      width : 40,
     // paddingTop:80,
     // flexDirection:"column",
     // alignContent:'center',
     // resizeMode:'cover',
      marginTop:0,
     // marginLeft:300,
     // marginEnd:1,
     // marginVertical:500,
    },
    innerContainer:{
      alignItems:'center',
      flexDirection : 'column',
    },
    itemHeading:{
      fontWeight:'bold'
    },
    itemText:{
      fontWeight:'300'
    },
    container0: {
      // flex: 1,
       backgroundColor: '#fff',
       alignItems: 'center',
       paddingTop:50,
       paddingLeft:10,
       paddingRight:10,
       marginTop:300,
       
      // justifyContent: 'center',
     },
     text2 :{
      //fontFamily:'arbfonts-samt-7017',
      backgroundColor: '#68C790',
      marginTop:5,
      marginRight:10,
      marginLeft: 10,
      Weight:100,
      fontSize:15,
      borderRadius:60,
      color:'#fff',
      
    },
  })
  
  
  
