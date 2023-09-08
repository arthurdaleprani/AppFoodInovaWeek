import React, { useState, useEffect } from 'react';
import { View, Text, Image, ActivityIndicator, Button, StyleSheet, Linking } from 'react-native';

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

const ChurrasquinhoPage = ({navigation, route}) => {
  const [restauranteAleatorio, setRestauranteAleatorio] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const restaurante = escolherRestauranteAleatorio();
      setRestauranteAleatorio(restaurante);
      setIsLoading(false);
    }, 1000);
  }, []);

  const openLocationInMaps = () => {
    if (restauranteAleatorio && restauranteAleatorio.localizacao) {
      Linking.openURL(restauranteAleatorio.localizacao);
    }
  };
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#E07F21" />
      ) : restauranteAleatorio ? (
        <View>
          <Image source={restauranteAleatorio.foto} style={styles.foto} />
          <Text style={styles.nome}>{restauranteAleatorio.nome}</Text>
          <Text style={styles.descricao}>{restauranteAleatorio.descricao}</Text>
          <Button style={styles.button}
            title="Ver Localização"
            onPress={openLocationInMaps}
          />
<Button style={styles.btn}
        title="Voltar"
        onPress={() => navigation.goBack()}
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
    backgroundColor: '#E1B60A',
  },
 
  foto: {
    width: '90%', // Usar uma porcentagem para tornar a imagem responsiva
    aspectRatio: 1, // Manter a proporção da imagem
    borderRadius: 50,
    marginBottom: 30,
    maxHeight: '50%', // Limitar a altura máxima da imagem
    alignItems:'center',
    justifyContent:'center',
    left:15

  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center', // Centralizar o texto horizontalmente
  },
  desc: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  btn: {
    backgroundColor: '#E07F21',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    width:50
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  goBackButton: {
    backgroundColor: '#E07F21',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    width:50
  },
});

export default ChurrasquinhoPage;
