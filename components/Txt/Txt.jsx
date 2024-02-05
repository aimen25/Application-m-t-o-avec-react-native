import { Text, useWindowDimensions } from "react-native";
import { s } from "./Txt.style";

export default function Txt({ children, style }) {
  const { height } = useWindowDimensions();
  const fontSize = style?.fontSize || s.text.fontSize;

  return (
    // Permet de rendre responsive les textes et de mettre la même font partout
    // 0.00118 est égale à 1/height de mon device
    <Text style={[s.text, style, { fontSize: fontSize * 0.00118 * height }]}>
      {children}
    </Text>
  );
}
