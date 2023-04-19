

import { createDrawerNavigator } from "@react-navigation/drawer";
import ContactUs from "./components/about";
import { MainStackNavigator } from "./navigation";

const Drawer = createDrawerNavigator();

const DrawerNavigatori = () => {
  return (
    <Drawer.Navigator  initialRouteName="FirstScreen" screenOptions={{ headerShown: true, drawerPosition:"right",activeTintColor: '#e91e63',
    itemStyle: { marginVertical: 10 } }}
    > 
    
      <Drawer.Screen name="الرئيسية" component={MainStackNavigator}  />
      <Drawer.Screen name="من نحن؟ " component={ContactUs} />

    </Drawer.Navigator>
  );
}

export default DrawerNavigatori;
/*

import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { MainStackNavigator } from './navigation';
import ContactUs from './components/about';
import { View, Text, StyleSheet, Image } from 'react-native';

const Drawer = createDrawerNavigator();

const DrawerNavigatori = () => {
  // Custom component for the drawer content
  const DrawerContent = (props) => {
    return (
      <View style={styles.drawerContentContainer}>
        <View style={styles.logoContainer}>
          <Image source={require('./assets/images/ClubQuran.png')} style={styles.logoImage} />
          <Text style={styles.logoText}>مشروع {"\n"}التطبيق</Text>
        </View>
        <DrawerContentScrollView {...props}>
          <DrawerItem label="الرئيسية" component={MainStackNavigator} />
          <DrawerItem label="من نحن؟" component={ContactUs} />
        </DrawerContentScrollView>
      </View>
    );
  };

  return (
    <Drawer.Navigator
      initialRouteName="FirstScreen"
      drawerContent={(props) => <DrawerContent {...props} />}
      drawerPosition="right"
      screenOptions={{ headerShown: true,drawerPosition:"right", activeTintColor: '#e91e63', itemStyle: { marginVertical: 10 } }}
    >
      <Drawer.Screen name="home" component={MainStackNavigator} />
      <Drawer.Screen name="about" component={ContactUs} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerContentContainer: {
    flex: 1,
  },
  logoContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    marginTop: 30,
  },
  logoImage: {
    resizeMode: 'contain',
    width: 40,
    height: 40,
    marginRight: 10,
  },
  logoText: {
    fontFamily: 'Cairo_Bold',
    fontSize: 20,
    lineHeight: 30,
    textAlign: 'right',
  },
});

export default DrawerNavigatori;
*/