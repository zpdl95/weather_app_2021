import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// const conditionCode = (con) => {
//   if (con <= 232) {
//     return "Thunderstorm";
//   } else if (con >= 300 && con <= 321) {
//     return "Drizzle";
//   } else if (con >= 500 && con <= 531) {
//     return "Rain";
//   } else if (con >= 600 && con <= 622) {
//     return "Snow";
//   } else if (con >= 701 && con <= 781) {
//     return "Atmosphere";
//   } else if (con === 800) {
//     return "Clear";
//   } else if (con >= 801 && con <= 804) {
//     return "Clouds";
//   }
// };

export default function Weather({ temp }) {
  //   const sky = conditionCode(condition);

  return (
    <View style={styles.container}>
      <View style={styles.halfcontainer}>
        <MaterialCommunityIcons size={100} name="weather-lightning-rainy" />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={styles.halfcontainer} />
    </View>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 40,
  },
  halfcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
