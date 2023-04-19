import React, { Component, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Font } from 'expo-font';
import { widthPercentageToDP } from 'react-native-responsive-screen';
//import { withNavigation } from 'react-navigation';
//import { useNavigation } from '@react-navigation/native';



async function loadFonts() {
  await Font.loadAsync({
    Cairo_Bold: require('../assets/fonts/Cairo-Bold.ttf'),
    Cairo_SemiBold: require('../assets/fonts/Cairo-SemiBold.ttf'),

  });
}

const styles = {
  title: {
    textAlign:'center',
    fontFamily: 'Cairo_Bold',
    fontSize:14
  },
  text: {
    fontFamily: 'Cairo_SemiBold',
    textAlign:'right',
    paddingRight: 10,
    fontSize:11

    
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
},
};




export default function ArticlePreview({goToArticleScreen,  imageSrc, name, text })
{
  /*const goToArticleScreen = ({navigation}) => {
    navigation.navigate('article');
  };*/
//const ArticlePreview = ({ navigation, imageSrc, name, text }) => {
  return (
    <TouchableOpacity 
      style={{
        height: widthPercentageToDP(70),
        width: widthPercentageToDP(73),
        marginLeft: 5,
        marginRight: 5,
        marginEnd: 5,
        marginTop: 20,
        borderWidth: 0.5,
        borderColor: '#dddddd',
        borderRadius: 25,
        backgroundColor: '#FCF0DD',
        resizeMode: 'cover',
      }}
      onPress={() => {goToArticleScreen()}}>
      <View style={{ flex: 4 }}>
        <Image
          source={imageSrc}
          style={{
            flex: 1,
            width: '100%',
            height: '100%',
            weight: '100%',
            resizeMode: 'cover',
            borderRadius: 25,
          }}
        />
      </View>
      <View style={{ flex: 1, paddingLeft: 5, paddingTop: 8 }}>
        <Text style={styles.title}>{name} </Text>
      </View>
      <View style={{ flex: 2, paddingLeft: 10, marginTop: 0 }}>
        <Text style={styles.text} numberOfLines={2}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

//const navigation = useNavigation();
/*
class ArticlePreview extends Component {
  componentDidMount() {
    loadFonts();
  }


  render() {
    const { navigation } = this.props; // destructure navigation from props

    return (
      <TouchableOpacity
        style={{
          height:widthPercentageToDP(73),
          width:widthPercentageToDP(73),
          marginLeft: 5,
          marginRight: 5,
          marginEnd: 5,
          marginTop: 20,
          borderWidth: 0.5,
          borderColor: '#dddddd',
          borderRadius: 25,
          backgroundColor: '#FCF0DD',
          resizeMode: 'cover',
        }}
        onPress={() => navigation.navigate('article')
}>
        <View style={{ flex: 4 }}>
          <Image
            source={this.props.imageSrc}
            style={{
              flex: 1,
              width: "100%",
              height: "100%",
              weight:"100%",
              resizeMode: 'cover',
              borderRadius: 25,
            }}
          />
        </View>
        <View style={{ flex: 1, paddingLeft: 5, paddingTop: 8 }}>
          <Text style={styles.title}>{this.props.name} </Text>
        </View>
        <View style={{ flex: 2, paddingLeft: 10, marginTop: 0 }}>
          <Text style={styles.text} numberOfLines={2}>
            {this.props.text}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
export default ArticlePreview;
//export default withNavigation(ArticlePreview);


/*
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from "react-native";


class ArticlePreview extends Component {
    render() {

        return (
            <TouchableOpacity style={{ height: 190, width: 190, marginLeft: 20,marginRight:20,marginEnd:20,marginTop:20, borderWidth: 0.5, borderColor: '#dddddd',borderRadius:25,backgroundColor:'#FCF0DD', resizeMode: 'cover'}}>
            
                <View style={{ flex: 2}}>
                    <Image source={this.props.imageSrc}
                        style={{ flex: 1, width: '90%', height: '75%', resizeMode: 'cover', borderRadius:25, }}
                    />
                </View>
                <View style={{ flex: 1, paddingLeft: 5, paddingTop: 8 }}>
                    <Text style={styles.title}>{this.props.name} </Text>
                </View>
                <View style={{ flex: 1, paddingLeft: 10,margintop:3 }}>
                    <Text style={styles.text} numberOfLines={2}>{this.props.text} </Text>
                </View>
            
            </TouchableOpacity>
        );
    }
}
export default ArticlePreview;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        fontFamily: 'Cairo',
        textAlign:'right',
        paddingRight: 10
    },
    title:{
            textAlign:'center',
            fontFamily: 'Cairo_bold',
            
    }
});
*/