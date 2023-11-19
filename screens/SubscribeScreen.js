import { View, StyleSheet, Image, Text, TextInput } from "react-native";
import { useState } from "react";
import { LittleLemonButton } from "./LittleLemonButton";

const SubscribeScreen = () => {
  const [subscriptionState, setSubscriptionState] = useState({
    email: "",
    isSubscribed: false
  });

  const handleEmailTextChange = (text) => {
    setSubscriptionState({
      ...subscriptionState,
      email: text
    });
  };

  const handleSubscribe = () => {
    alert("Thank you for subscribing, stay tuned!");
    setSubscriptionState({
      email: "",
      isSubscribed: true
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo}
               source={require("../assets/little-lemon-logo-grey.png")} resizeMode="contain" />
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>Subscribe to our newsletter for our delicious recipes!</Text>
      </View>
      <TextInput
        editable={!subscriptionState.isSubscribed}
        style={styles.input}
        value={subscriptionState.email}
        onChangeText={handleEmailTextChange}
        textContentType={"emailAddress"}
        placeholder="Type your email"
      />
      <LittleLemonButton disabled={subscriptionState.isSubscribed} buttonText="Subscribe" onPress={handleSubscribe} />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    alignItems: "center"
  },
  logoContainer: {
    paddingTop: 50
  },
  logo: {
    width: 150,
    height: 150
  },
  descriptionContainer: {
    justifyContent: "center",
    padding: 20
  },
  description: {
    fontSize: 25,
    textAlign: "center"
  },
  input: {
    borderWidth: 1,
    borderColor: "#37424A",
    borderRadius: 10,
    width: "90%",
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    fontSize: 20,
    marginBottom: 20
  }
});

export default SubscribeScreen;
