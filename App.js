import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";

const API_KEY = "434e4d55ced79428b160d0ff40fab01c";

export default class extends React.Component {
  state = {
    isLoading: true,
  };
  getWeather = async (lat, long) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`
    );
    console.log(data);
  };
  getLocation = async () => {
    try {
      /* 권한요청코드 */
      await Location.requestForegroundPermissionsAsync();
      /* 현재위치를 구함 */
      const {
        coords: { latitude: lat, longitude: long },
      } = await Location.getCurrentPositionAsync();
      // Send to API and get weather
      this.getWeather(lat, long);
      this.setState({ isLoading: false });
    } catch (error) {
      /* 첫번째 인자는 타이틀, 두번째 인자는 내용 */
      Alert.alert("Can't find you.", "So sad");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}
