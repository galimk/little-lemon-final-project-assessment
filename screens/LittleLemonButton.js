import { Pressable, Text, StyleSheet } from "react-native";

export const LittleLemonButton = ({ onPress, buttonText, disabled }) => (
  <Pressable
    style={disabled ? [styles.pressableContainer, { backgroundColor: "#AEAEAE" }]
      : [styles.pressableContainer]}
    onPress={onPress}>
    <Text style={styles.newsletterLink}>
      {buttonText}
    </Text>
  </Pressable>
);

export const styles = StyleSheet.create({
  pressableContainer: {
    backgroundColor: "#37424A",
    borderRadius: 10,
    width: "90%",
    marginLeft: 10,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  newsletterLink: {
    margin: 10,
    textAlign: "center",
    fontSize: 20,
    color: "white"
  }
});