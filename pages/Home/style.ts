import { FlatList } from "react-native";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.color.background};
`;

export const PosterHeader = styled.Image`
  width: 500px;
  height: 325px;
`;

export const TitleHeader = styled.Text`
  color: #fff;
  font-size: 36px;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 4px;
  top: -50px;
`;

export const ButtonHeader = styled.TouchableOpacity`
  align-items: center;
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: 5px;
  padding: 8px 32px;
  top: -40px;
`;

export const LabelButton = styled.Text`
  color: ${({ theme }) => theme.color.text};
  font-size: 18px;
  font-family: ${({ theme }) => theme.font.regular};
`;

export const Header = styled.View`
  align-items: center;
`;

export const SectionTitle = styled.Text`
  color: #AAA;
  font-size: 16px;
  border-color: ${({ theme }) => theme.color.primary};
  border-left-width: 4px;
  padding-left: 8px;
  margin-left: 8px;
`;

export const Section = styled.View`
  margin-top: 4px;
  margin-bottom: 24px;
  align-items: center;
`;

export const ConteinerMedicao = styled(RectButton)`
  width: 200px;
  margin: 8px;
  justify-content: center;
`;

export const Poster = styled.Image`
  height: 250px;
`;

export const MesMedicao = styled.View`
  background-color: #C0392B;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 2px;
`;

export const IconeMedicao = styled(MaterialIcons)`
  color: white;
  font-size: 20px;
`;

export const Medicao = styled.Text`
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  font-size: 18px;
  margin-left: 4px;
`;

export const VerticalList = styled(
  FlatList as new () => FlatList<any>
).attrs({
  showsHorizontalScrollIndicator: false,
})``;
