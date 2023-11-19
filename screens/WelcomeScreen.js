import * as React from "react";
import { Text, Image, View, Pressable, StyleSheet } from "react-native";

const WelcomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.logoContainer}>
      <Image style={styles.logo} source={require("../assets/little-lemon-logo.png")} resizeMode="contain" />
    </View>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Little Lemon, your local Mediterranean Bistro</Text>
    </View>
    <Pressable style={styles.pressableContainer} onPress={() => navigation.navigate("Subscribe")}>
      <Text style={styles.newsletterLink}>
        Newsletter
      </Text>
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  logoContainer: {
    flex: 0.5,
    justifyContent: "flex-end"
  },
  logo: {
    width: 200,
    height: 200
  },
  titleContainer: {
    flex: 0.4,
    justifyContent: "center"
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center"
  },
  pressableContainer: {
    backgroundColor: '#37424A',
    borderRadius: 10,
    width: '90%',
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  newsletterLink: {
    margin: 10,
    textAlign: "center",
    fontSize: 20,
    color: "white",

  }
});

export default WelcomeScreen;
