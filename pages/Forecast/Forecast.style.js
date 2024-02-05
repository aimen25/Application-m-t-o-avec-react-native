import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  header: {
    flexDirection: "row",
  },
  subtitle: {
    fontSize: 20,
  },
  back_btn: {
    width: 30,
  },
  header_texts: {
    flex: 1,
    alignItems: "center",
    // Taille du bouton back
    marginRight: 30,
  },
  forecastList: {
    marginTop: 50,
  },
});

export { s };
