import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";

export default class extends React.Component {
  state = {
    isLoading: true,
  };
  getLocation = async () => {
    try {
      /* 권한요청코드 */
      await Location.requestForegroundPermissionsAsync();
      /* 현재위치를 구함 */
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      // Send to API and get weather
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
