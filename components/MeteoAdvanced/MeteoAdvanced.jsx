import { View } from "react-native";
import Txt from "../Txt/Txt";
import {
  StyledLabel,
  StyledValue,
  StyledContainer,
  s,
} from "./MeteoAdvanced.style";

export default function MeteoAdvanced({ dusk, dawn, wind }) {
  return (
    <View style={s.container}>
      <StyledContainer>
        <StyledValue>{dusk}</StyledValue>
        <StyledLabel>Aube</StyledLabel>
      </StyledContainer>
      <StyledContainer>
        <StyledValue>{dawn}</StyledValue>
        <StyledLabel>Crépuscule</StyledLabel>
      </StyledContainer>
      <StyledContainer>
        <StyledValue>{wind} km/h</StyledValue>
        <StyledLabel>Vent</StyledLabel>
      </StyledContainer>
    </View>
  );
}
