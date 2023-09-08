import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, Button, StyleSheet, Linking } from 'react-native';

const Hamburguer = [
  {
    nome: 'Fight Burger',
    foto: require('../../src/imgs/h1.PNG'),
    localizacao: 'https://goo.gl/maps/aMsgoKLntY9kwMJW8',
    desc: 'Ponto de encontro descontraído para fãs de pugilismo, com mesinhas na calçada, sanduíches, porções e bebidas.',
  },
  {
    nome: 'Buffalos Burger',
    foto: require('../../src/imgs/h2.PNG'),
    localizacao: 'https://goo.gl/maps/HUqG1PHcoUfUWUae8',
    desc: "O Buffalo's Burger em Vila Velha é um paraíso gastronômico que oferece hambúrgueres suculentos e um ambiente acolhedor para os amantes da comida americana. Saboreie os sabores autênticos do oeste em cada mordida.",
  },
  {
    nome: 'Texas Prime Burger',
    foto: require('../../src/imgs/h3.PNG'),
    localizacao: 'https://goo.gl/maps/L99wabF6ZFrKPG2e9',
    desc: 'O MELHOR sabor do Velho Oeste! 🤠',
  },
  {
    nome: 'Cuñas Burguer',
    foto: require('../../src/imgs/h4.PNG'),
    localizacao: 'https://goo.gl/maps/fCwinntHnU6e4woN6',
    desc: "Cuñas Burguer: O sabor inigualável que conquista paladares!"
  },
  {
    nome: 'By Rock Steakhouse',
    foto: require('../../src/imgs/h6.PNG'),
    localizacao: 'https://goo.gl/maps/J6MFutH7PGDX8ZSW9',
    desc: 'ByRockVix 🎸🥁🥩',
  },
  {
    nome: 'Heróis Burger',
    foto: require('../../src/imgs/h5.PNG'),
    localizacao: 'https://goo.gl/maps/6jKjqMbX6zy6Tj41A',
    desc: '🍔 A melhor hamburgueria temática.',
  },
];

function hamburguerEscolher() {
  const indiceAleatorio = Math.floor(Math.random() * Hamburguer.length)
  return Hamburguer[indiceAleatorio];
}

const HamburguerPage = ({navigation, route}) => {
  const [hamburguerAleatorio, setHamburgerAleatorio] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setHamburgerAleatorio(hamburguerEscolher());
      setIsLoading(false);
    }, 1000);
  }, []);

  const openLocationInMaps = () => {
    if (hamburguerAleatorio && hamburguerAleatorio.localizacao) {
      Linking.openURL(hamburguerAleatorio.localizacao);
    }
  };


  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#E07F21" />
      ) : hamburguerAleatorio ? (
        <View>
          <Image source={hamburguerAleatorio.foto} style={styles.foto} />
          <Text style={styles.nome}>{hamburguerAleatorio.nome}</Text>
          <Text style={styles.desc}>{hamburguerAleatorio.desc}</Text>
          <Button
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
  desc: {
    fontSize: 16,
    marginTop: 10,
  },
  btn:{
    width:30,
    height:30
  
   }
});

export default HamburguerPage;
