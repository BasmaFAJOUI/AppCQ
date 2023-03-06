import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Image } from 'react-native';
import { firebase } from '../config';
import 'firebase/firestore';

const Fetch = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postRef = firebase.firestore().collection('posts');
    const fetchData = async () => {
      try {
        const querySnapshot = await postRef.get();
        if (!querySnapshot.empty) { // Vérifier si querySnapshot contient des données
          const promises = querySnapshot.docs.map(async (doc) => {
            const { heading, text, image,time } = doc.data();
            console.log('Timestamp:', time.toDate());
            return {
              id: doc.id,
              heading,
              text,
              image,
              time
            };
          });
          const posts = await Promise.all(promises);
          setPosts(posts);
        } else {
          console.log("La collection est vide !");
        }
      } catch (error) {
        console.error(error);
      }
    };

    const unsubscribe = postRef.onSnapshot(() => {
      fetchData();
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <View style={{ flex: 1, marginTop: 100 }}>
      <FlatList
        style={{ height: '100%' }}
        data={posts}
        numColumns={1}
        renderItem={({ item }) => (
          <View style={styles.innerContainer}>
            <Text style={styles.itemHeading}>{item.heading}</Text>
            <Text style={styles.itemText}>{item.text}</Text>
            <Text style={styles.itemText}>{item.time.toDate().toLocaleString()}</Text>
            <Image style={styles.image} source={{ uri: item.image }} />
          </View>
        )}
      />
    </View>
  );
};

export default function HomeScreen() {
  return (
    <View style={styles.container}>
         <View style={styles.container1}>
           <Image source={require('../assets/images/ClubQuran.png')} style={styles.image} />
           <Text style={styles.text}>وقفة اليوم </Text>
         </View>
         <View style={styles.container2} >
            <Text style={styles.text1}>اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ  لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ  مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ  يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ
</Text>
          </View>

          <View>
          <Text style={styles.text2}>احدث المنشورات </Text>
            <Fetch/>
         </View>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

  },

  container1: {
   // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  
  },
  container2: {
    // flex: 1,
     backgroundColor: '#fff',
 
     paddingTop:1,
     paddingLeft:10,
     paddingRight:10,
     
  
   },
  text :{
    backgroundColor: '#68C790',
    marginTop:0,
    Weight:100,
    fontSize:15,
    borderRadius:60,
    color:'#fff',
    
  },
  text1 :{
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




