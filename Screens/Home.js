import React, { useState, useEffect } from 'react';
import { firebase } from '../config';
import 'firebase/firestore';
import { useFonts } from 'expo-font';
import FirstScreen from '../Screens/FirstScreen';
import Article from '../Screens/Article';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ArticlePreview from '../components/articlePreview.js';

const Fetch1 = ({ navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postRef = firebase.firestore().collection('posts');
    const fetchData = async () => {
      try {
        const querySnapshot = await postRef.orderBy("time", firebase.firestore.Desc).get();
        if (!querySnapshot.empty) {
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
    <View style={{ flex: 1, marginTop: 0}}>
      <FlatList
        data={posts}
        numColumns={1}
        horizontal
        inverted
        renderItem={({ item}) => (
          <ArticlePreview
            navigation={navigation}
            goToArticleScreen={() => navigation.navigate('article',{item})}
            imageSrc={{ uri: item.image }}
            name={item.heading}
            text={item.text}
          />
        )}
      />
    </View>
  );
};

const Fetch2 = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    const unsubscribe = firebase.firestore()
      .collection('wakfa')
      .doc('09gCLI26H0tbeW6HiHK9')
      .onSnapshot(documentSnapshot => {
        const newText = documentSnapshot.data().text;
        setText(newText);
      });

    return () => unsubscribe();
  }, []);

  return (
    <Text style={[styles.card, { fontFamily: 'Cairo_SemiBold' }]}>{text}</Text>
  );
};


export default function HomeScreen({navigation}) {

    const PlaceholderImage = require('../assets/images/ClubQuran.png');

    return (

      <View style={styles.container}>
        <View style={styles.logoContainer}>
        <Image source={PlaceholderImage} style={styles.image}/>
          <Text style={styles.mainText}>مشروع {"\n"}التطبيق</Text>
        </View>


        <View style={styles.wakfa}>
          <View style={styles.title}>
            <Text style={[styles.card, { fontFamily: 'Cairo_Bold' }]}>وقفة اليوم</Text>
          </View>
          <View style={styles.wakfaContent}>
            <Text style={styles.card}> <Fetch2/></Text>
          </View>
        </View> 

        <View style={styles.content}>
          <View style={styles.title}>
            <Text style={[styles.card, { fontFamily: 'Cairo_Bold' }]}>المواضيع</Text>
            </View>

            <View style={styles.wakfaContent1}>
            <Fetch1 navigation ={navigation}/>
            </View>
      
        </View>
      </View>

    )
  }
  
const styles = StyleSheet.create({
    image: {
      resizeMode: 'cover',
      width: "15%", height: "70%",
      marginLeft: wp(5),
    },
    mainText:{
      fontSize: wp(4),
      fontFamily: 'Cairo_Bold',
      lineHeight: wp(6),
      paddingTop: wp(1),
    },  
    container: {
      flex: 1,
      backgroundColor: '#F6F6F6',
      
    },
    logoContainer: {
      flex: 1,
      paddingTop:5,
      flexDirection: 'row-reverse',
      justifyContent: 'center',
      alignItems: 'center',
    },
    wakfa: {
      flex: 3,
      alignItems: 'center',
      backgroundColor: '#FFF',
      borderRadius: 20,
      width: '90%',
      alignSelf: 'center',
      marginBottom: wp(3),
      //backgroundColor: 'grey',
    },
    title:{
      flex: 1,
      backgroundColor: '#FCF0DD',
      height: '100%', width: '100%',
      borderRadius: 20,
      
    },
    wakfaContent1:{
      flex: 5,
      backgroundColor: 'white',
      justifyContent:'center',
      alignItems:'center',
      alignContent:'center',
      borderRadius: 20,


    },
    wakfaContent:{
      flex: 3,
      backgroundColor: 'white',
      justifyContent:'center',
      alignItems:'center',
      alignContent:'center',
      borderRadius: 20,


    },
    content: {
        flex: 5,
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 10,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 20,
        marginBottom:20//pour voir le gris au dessous de la barre des sujets 
                  },
    soon: {
      flex: 2,
      backgroundColor: 'grey',
    },
    card: {
      padding: 8,
      textAlign:'center',
      fontSize: wp(5),
      fontFamily: 'Cairo_SemiBold',
      lineHeight: 32,
    },
    articleImage: {
      width: null,
      height: null,
      resizeMode: 'cover',
      flex: 1,
    },
    card1: {
      padding: 8,
     textAlign:'justify',
      fontSize: 20,
      fontFamily: 'Cairo_SemiBold',
      lineHeight: 32,
      backgroundColor:'#FCF0DD',
      width: 300,
      
    },
});



