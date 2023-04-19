import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking,Image,ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

//import { ImageBackground } from 'react-native-web';



export default function ContactUs(){
  const [loaded] = useFonts({
    Cairo_Bold: require('./assets/fonts/Cairo-Bold.ttf'),
    Cairo_SemiBold: require('./assets/fonts/Cairo-SemiBold.ttf'),

  });

  if (!loaded) {
    return null;
  }
  return (

    
    <ImageBackground source={require('./assets/b9.png')} style={styles.container1}>
        <View style={styles.logoContainer}>
        <Image source={require('./assets/logo.png')} style={styles.imagelogo}/>
        </View>
        <View style={styles.container}>
         <View style={styles.header1}>
            <Text style={styles.title}> من نحن؟ </Text>
         </View> 
             
         <View style={styles.content}>
         <Text  style={styles.body}> شباب من مسلمي هذا العالم؛ من أهل الإغاثة بحق؛ يؤمنون يقينا بعالمية الإسلام وصواب عقيدة التوحيد، يجاهدون افتقارا في تحقيق معانيه؛ محبين الخير للناس، وحاملين في سير النصح نور القرآن، بل تائقين إلى الحياة به وإليه؛ حتى يلقوا الله غدا وهم من أهله وخاصته.. إن شاء الله!{'\n'}

 ▪عمليا: هَمّ النادي بأعضائه عبر مجموع أنشطته هو إحياء ما يَتِمّ تَغييبُه، وَسَدّ ثغرات وجودية ومعرفية ونفسية وأخلاقية تحَمّلنا وِزرها مُذ كنا صغارا؛ بوجه العظمة وأغوار العزة التي بُعث من أجلها القَائدُ النّبيّ العظيم مُحَمّد بن عبد الله -ﷺ-.
  </Text> 
         </View>  
        
      <View style={styles.header2}>
        <Text style={styles.mazid}>للمزيد تابعونا على صفحاتنا : </Text>
      </View>
      <View style={styles.socialIcons}>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/clubquran')}>
          <Ionicons name="logo-facebook" size={30} color="#3b5998" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/clubquran_ensias/')}>
          <Ionicons name="logo-instagram" size={30} color="#BF0CB3" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://t.me/clubQuran_Dawah')}>
          <Ionicons name="paper-plane-outline" size={30} color='#2EA8DA' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://youtube.com/@clubquranensias5044')}>
          <Ionicons name="logo-youtube" size={30} color="red" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/company/club-quran-ensias/')}>
          <Ionicons name="logo-linkedin" size={30} color='#0D6EC2'/>
        </TouchableOpacity>
      </View> 
      <View style={styles.accounts}>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/clubquran')}>
          
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/clubquran_ensias/')}>
          
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://t.me/clubQuran_Dawah')}>
        
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://youtube.com/@clubquranensias5044')}>
         
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/company/club-quran-ensias/')}>
          
        </TouchableOpacity>
      </View>
     
    </View>
    </ImageBackground>
  );
};
 

const styles = StyleSheet.create({
  container: {
   // marginTop : "5%",
    alignItems: 'center',
    justifyContent: 'flex-start',
   // marginTop: "1%",
   //padding : "5%"
  },
  logoContainer: {
    flex: 1,
    paddingTop: 30,
    //marginTop:40,
    marginRight: "3%",
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'transparent',
 },

  header2: {
     marginTop : "40%",
     alignItems: 'center',
    backgroundColor: 'transparent',
    paddingVertical: 10,
    borderRadius: 20,
   marginStart: 30,
   marginEnd: 30,
   paddingStart: 10,
   paddingEnd: 10,
  },
  header1: {
  //  marginTop : "5%",
    alignItems: 'center',
    justifyContent: 'center',
   backgroundColor:  '#ffe4c4',
   paddingVertical: "5%",
   borderRadius: 20,
   marginStart: "5%",
   marginEnd: "5%",
   marginRight: "5%",
   paddingStart: "5%",
   paddingEnd: "5%",
  
   
 },
 content:{
   // marginTop : "7%",
   // marginEnd: "7%",
    marginStart:0,
   alignItems: 'center',
   backgroundColor: 'transparent',
   borderRadius: 20,
   padding: "7%",
 },

  title: {
    
    fontSize: 20,
   //fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Cairo_SemiBold',
  },
  mazid: {
    
    fontSize: 10,
   //fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Cairo-Bold',
  },
  body:{
    fontSize: 11,
    fontFamily: 'Cairo_SemiBold',
    //fontWeight: 'bold',

  },
  socialIcons: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 0,
    marginTop: 2,
  },
  accounts: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  accountText: {
    marginHorizontal: 10,
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%' ,
    height:'100%',
  },
  image: {
    width: '100%',
    height: '100%',
     resizeMode : 'contain',
  },
   imagelogo: {
     resizeMode: 'cover',
     width: "60%", height: "60%",
     resizeMode : 'contain',
     
    },
});





