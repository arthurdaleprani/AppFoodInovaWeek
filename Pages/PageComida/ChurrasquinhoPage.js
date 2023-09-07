import React, { useState, useEffect } from 'react';
import { View, Text, Image, ActivityIndicator, Button, StyleSheet } from 'react-native';

const restaurantes = [
  {
    nome: "Bar dos Meninos",
    descricao: "Um bar rústico com mesas ao ar livre e uma grande variedade de espetinhos.",
    localizacao: "https://www.google.com/maps/place/Bar+dos+Meninos/@-20.351264,-40.287719,17z/data=!3m1!4b1!4m6!3m5!1s0xb8166c4fc8fa21:0x91198ecfb04f19ac!8m2!3d-20.351264!4d-40.2851441!16s%2Fg%2F11c3s95qbt?entry=ttu",
    foto: require('../../src/imgs/meninos.PNG')
  },
  {
    nome: "Churrasquinho do Fred na Brasa",
    descricao: "Um bar rústico com mesas ao ar livre e uma grande variedade de espetinhos.",
    localizacao: "https://goo.gl/maps/HZhDQh8Li8C2XFFL6",
    foto: require('../../src/imgs/fred.PNG')
  },
  {
  nome: "Churras415",
  descricao: "Um bar rústico com mesas ao ar livre e uma grande variedade de espetinhos.",
  localizacao: "https://goo.gl/maps/rJbHsAgVdKeNmsvB9",
  foto: require('../../src/imgs/295.PNG')

  },
  {
    nome: "Espetão de Itapoã",
    descricao: "Um bar rústico com mesas ao ar livre e uma grande variedade de espetinhos.",
    localizacao: "https://goo.gl/maps/YuwaCCZWjg6Xa2J5A",
    foto: require('../../src/imgs/espeto.PNG')
  
    },
    
];

function escolherRestauranteAleatorio() {
  const indiceAleatorio = Math.floor(Math.random() * restaurantes.length);
  return restaurantes[indiceAleatorio];
}

const ChurrasquinhoPage = () => {
  const [restauranteAleatorio, setRestauranteAleatorio] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const restaurante = escolherRestauranteAleatorio();
      setRestauranteAleatorio(restaurante);
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#E07F21" />
      ) : restauranteAleatorio ? (
        <View>
          <Image source={restauranteAleatorio.foto} style={styles.foto} />
          <Text style={styles.nome}>{restauranteAleatorio.nome}</Text>
          <Text style={styles.descricao}>{restauranteAleatorio.descricao}</Text>
          <Button
            title="Ver Localização"
            onPress={() => {
              // Abra a localização no Google Maps ou outro aplicativo de mapa
              // Use restauranteAleatorio.localizacao para o link
            }}
          />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  foto: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  descricao: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default ChurrasquinhoPage;
