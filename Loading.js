import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Loading() {
  return (
    /* View = div, Text = span */
    <View style={styles.container}>
      <Text style={styles.text}>Getting the fucking weather</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "#F8EA8C",
  },
  text: {
    color: "#274472",
    fontSize: 35,
  },
});
