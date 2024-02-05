import { s } from "./Container.style";
import { ImageBackground } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import backgroundImg from "../../assets/background.png";

export function Container({ children }) {
  return (
    <ImageBackground
      source={backgroundImg}
      style={s.background_img}
      imageStyle={s.img}
    >
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>{children}</SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
