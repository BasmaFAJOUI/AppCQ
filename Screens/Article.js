
import React from 'react';
import { StyleSheet, View, Text, Image,ScrollView } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const Article = ({ route }) => {
  const item = route.params?.item; // Add a null-check using the "?" operator
  
  if (!item) {
    return null; // Return null or a loading component if item is undefined
  }

  const { heading, text, image } = item;
 // const PlaceholderImage = require('../assets/images/ClubQuran.png');


  return (
    <View style={styles.container}>
    <View style={styles.logoContainer}>
        <Image source={require('../assets/images/ClubQuran.png')} style={styles.imagelogo}/>
        <Text style={styles.mainText}>مشروع {"\n"}التطبيق</Text>

     </View>
        <ScrollView style={styles.scroll}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.heading}>{heading}</Text>
      <Text style={styles.text}>{text}</Text>
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
   // padding: wp(5),
  },
  contentContainer: {
    flex: 9,
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: wp(60),
  },
  heading: {
    fontFamily: 'Cairo_Bold',
    fontSize: wp(5),
    marginBottom: wp(2),
  },
  text: {
    fontFamily: 'Cairo_SemiBold',
    fontSize: wp(4),
    lineHeight: wp(6),
    textAlign: 'right',
  },
  mainText: {
    fontSize: wp(4),
    fontFamily: 'Cairo_Bold',
    lineHeight: wp(6),
    paddingTop: wp(1),
  },  
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
   // marginTop: wp(10),
  },
  imagelogo: {
    resizeMode: 'cover',
    width: wp(15),
    height: wp(15),
    marginRight: wp(2),
  },
  scroll: {
    padding: 30,
    flex: 1,
  },


});

export default Article;

/*
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { firebase } from '../config';
import 'firebase/firestore';

const Fetch1 = () => {
  const [posts, setPosts] = useState([]);
  const PlaceholderImage = require('../assets/images/ClubQuran.png');

  useEffect(() => {
    const postRef = firebase.firestore().collection('posts');
    const fetchData = async () => {
      try {
        const querySnapshot = await postRef.orderBy('time', 'desc').get();
        if (!querySnapshot.empty) {
          const promises = querySnapshot.docs.map(async (doc) => {
            const { heading, text, image, time } = doc.data();
            console.log('Timestamp:', time.toDate());
            return {
              id: doc.id,
              heading,
              text,
              image,
              time,
            };
          });
          const posts = await Promise.all(promises);
          setPosts(posts);
        } else {
          console.log('La collection est vide !');
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
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
        <Text style={styles.mainText}>مشروع {"\n"}التطبيق</Text>
      </View>
      <ScrollView>
        {posts.map((post) => (
          <View key={post.id}>
            <Image source={{ uri: post.image }} style={styles.image1} />
            <Text style={styles.title}>{post.heading}</Text>
            <Text style={styles.text}>{post.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default function Article({}) {
  //const PlaceholderImage = require('../assets/images/ClubQuran.png');
  const [loaded] = useFonts({
    Cairo_Bold: require('../assets/fonts/Cairo-Bold.ttf'),
    Cairo_SemiBold: require('../assets/fonts/Cairo-SemiBold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return <Fetch1 />;
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  image: {
    resizeMode: 'cover',
    width: "15%", height: "50%",
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
    paddingTop:30,
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image1: {
    flex: 3,
            width: '100%',
            height: '100%',
            weight: '100%',
            resizeMode: 'cover',
            borderRadius: 25,
    marginBottom: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  content: {
    fontSize: 16,
    textAlign: 'left',
 }, });

 import React, { useState, useEffect } from 'react';
 import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
 import { useFonts } from 'expo-font';
 import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
 import { firebase } from '../config';
 import 'firebase/firestore';
 
 const Fetch1 = () => {
   const [posts, setPosts] = useState([]);
   const [selectedPost, setSelectedPost] = useState(null);
   const PlaceholderImage = require('../assets/images/ClubQuran.png');
 
   useEffect(() => {
     const postRef = firebase.firestore().collection('posts');
     const fetchData = async () => {
       try {
         const querySnapshot = await postRef.orderBy('time', 'desc').get();
         if (!querySnapshot.empty) {
           const promises = querySnapshot.docs.map(async (doc) => {
             const { heading, text, image, time } = doc.data();
             console.log('Timestamp:', time.toDate());
             return {
               id: doc.id,
               heading,
               text,
               image,
               time,
             };
           });
           const posts = await Promise.all(promises);
           setPosts(posts);
         } else {
           console.log('La collection est vide !');
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
 
   const handlePostSelect = (postId) => {
     setSelectedPost(postId);
   };
 
   const handlePostDeselect = () => {
     setSelectedPost(null);
   };
 
   return (
     <View style={styles.container}>
       <View style={styles.logoContainer}>
         <Image source={PlaceholderImage} style={styles.image} />
         <Text style={styles.mainText}>مشروع {"\n"}التطبيق</Text>
       </View>
       <ScrollView>
         {posts.map((post) => (
           <TouchableOpacity key={post.id} onPress={() => handlePostSelect(post.id)}>
             <View>
               <Image source={{ uri: post.image }} style={styles.image1} />
               <Text style={styles.title}>{post.heading}</Text>
               {selectedPost === post.id ? (
                 <>
                   <Text style={styles.text}>{post.text}</Text>
                   <TouchableOpacity onPress={handlePostDeselect}>
                     <Text style={styles.backButton}>Back</Text>
                   </TouchableOpacity>
                 </>
               ) : null}
             </View>
           </TouchableOpacity>
         ))}
       </ScrollView>
     </View>
   );
 };
 
 export default function Article({}) {
   const PlaceholderImage = require('../assets/images/ClubQuran.png');
   const [loaded] = useFonts({
     Cairo_Bold: require('../assets/fonts/Cairo-Bold.ttf'),
     Cairo_SemiBold: require('../assets/fonts/Cairo-SemiBold.ttf'),
   });
 
   if (!loaded) {
     return null;
   }
 
   return <Fetch1 />;
 }
 
 const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  image: {
    resizeMode: 'cover',
    width: "15%", height: "50%",
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
    paddingTop:30,
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image1: {
    flex: 3,
            width: '100%',
            height: '100%',
            weight: '100%',
            resizeMode: 'cover',
            borderRadius: 25,
    marginBottom: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  content: {
    fontSize: 16,
    textAlign: 'left',
 }, });
 import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Article = ({ route }) => {
  const { post } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{post.heading}</Text>
      <Text style={styles.text}>{post.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
  },
});

export default function Article({ route })*/
