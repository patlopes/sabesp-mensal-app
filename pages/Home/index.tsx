import React, { useCallback } from "react";
import { Linking } from "react-native";

import {
  Container,
  Header,
  PosterHeader,
  TitleHeader,
  SectionTitle,
  Section,
  ConteinerMedicao,
  Poster,
  MesMedicao,
  IconeMedicao,
  Medicao,
  VerticalList,
} from "./style";

export default function Home() {
  // Só tem dados até setembro
  const medicoes: Array<any> = [
    { id: 1, month: "Janeiro" },
    { id: 2, month: "Fevereiro" },
    { id: 3, month: "Março" },
    { id: 4, month: "Abril" },
    { id: 5, month: "Maio" },
    { id: 6, month: "Junho" },
    { id: 7, month: "Julho" },
    { id: 8, month: "Agosto" },
    { id: 9, month: "Setembro" }
  ];

  const showMedidas = useCallback(
    ({ item }) => (
      <ConteinerMedicao onPress={() => Linking.openURL("https://storage.googleapis.com/ford-prevention-system.appspot.com/imgs/medidas.pdf")}>
        <Poster
          source={{
            uri: "https://engenhariacivil.ufms.br/files/2019/04/icon-calendar.png",
          }}
        />
        <MesMedicao>
          <IconeMedicao name="get-app" />
          <Medicao>{item.month}</Medicao>
        </MesMedicao>
      </ConteinerMedicao>
    ),
    []
  );

  return (
    <Container>
      <Header>
        <PosterHeader
          source={{
            uri: "https://informa.life/wp-content/uploads/2021/11/Furto-em-bomba-da-Sabesp.jpg",
          }}
        />
        <TitleHeader>Sabesp Mensal</TitleHeader>
      </Header>

      <SectionTitle>Medições 2021</SectionTitle>
      <Section>
        <VerticalList
          data={medicoes}
          keyExtractor={(item) => String(item.id)}
          renderItem={showMedidas}
        />
      </Section>
    </Container>
  );
}
