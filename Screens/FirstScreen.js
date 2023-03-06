import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, Dimensions} from 'react-native';
import { useFonts } from 'expo-font';
import TextViewer from '../components/about'; '../components/about';
import Boutton from '../components/boutton';


export default function FirstScreen({ navigation }) {
  const PlaceholderImage = require('../assets/images/ClubQuran.png');
  const [loaded] = useFonts({
    Cairo_Bold: require('../assets/fonts/Cairo-Bold.ttf'),
    Cairo_SemiBold: require('../assets/fonts/Cairo-SemiBold.ttf'),
    samt:require('../assets/fonts/arbfonts-samt-7017.ttf'),
    arab:require('../assets/fonts/arabswell_1.ttf'),

  });

  if (!loaded) {
    return null;
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.mainText}>مشروع التطبيق</Text>
      </View>
      <View style={styles.logoContainer2}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>

      <View style={styles.footer}>
        <Boutton text={"إبدأ"} onPress={() => navigation.navigate('destination')}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: height*0.3,
    paddingBottom: 8,
  },
  logoContainer2: {
    //alignItems: 'center',
    //justifyContent: 'center',
    height: height*0.2,
    paddingBottom: 8,
  },
  image: {
    marginTop:100,
    height: height*0.27,
    width: width*0.6,
  },
  TextContainer: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 10,
    width: '80%',
  },
  mainText: {
    paddingTop: 100,
    fontSize: 36,
    fontFamily: 'Cairo_Bold',
    lineHeight: 70,
  },
  footer:{
    marginTop: height*0.4,
    width: '80%',
  },
});
