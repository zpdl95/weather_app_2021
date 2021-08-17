import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";

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

export default function Weather({ temp, condition }) {
  //   const sky = conditionCode(condition);

  return (
    <View style={styles.container}>
      <Text>{condition}</Text>
      <Text>{temp}</Text>
    </View>
  );
}

Weather.prototype = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
