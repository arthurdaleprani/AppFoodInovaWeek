import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet, Button } from 'react-native';

const EscolherTipoScreen = ({ navigation, route }) => {
  const { irPag } = route.params;

  const buttonData = [
    {
      title: "Churrasquinho",
      image: require('../src/imgs/espetin.jpg'), 
      onPress: () => navigation.navigate('ChurrasquinhoPage', { mostrarDadosRestaurante: true }),
    },
    {
      title: "Pizza",
      image: require('../src/imgs/logopizza.jpg'), 
      onPress: () => navigation.navigate('PizzaPage'),
    },
    {
      title: "Hamburguer",
      image: require('../src/imgs/burguer.jpg'), 
      onPress: () => navigation.navigate('HamburguerPage'),
    },
    {
      title: "Comida Japonesa",
      image: require('../src/imgs/japa.jpg'), 
      onPress: () => navigation.navigate('ComidaJaponesaPage', { mostrarDadosRestaurante: true }),
    },
  ];

  return (
    <View style={styles.container}>
      {buttonData.map((button, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={button.onPress}
        >
          <Image source={button.image} style={styles.buttonImage} />
          <Text style={styles.buttonText}>{button.title}</Text>
        </TouchableOpacity>
        
      ))}

      <Button style={styles.btn}
        title="Voltar"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#E1B60A',
  },
   
  button: {
    borderRadius:160,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#E07F21',
    padding: 30,
    borderRadius: 5,
    marginBottom: 10,
    height:160,
   width: 240, // Ajuste a largura conforme necessário
  },
  buttonImage: {
    width: '120%', // Ajuste o tamanho da imagem conforme necessário
    height: '100%', // Ajuste o tamanho da imagem conforme necessário
    marginBottom: 5, // Espaço entre a imagem e o texto
    borderRadius:20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  goBackButton: {
    marginTop: 20,
    width: '80%', // Ajuste a largura conforme necessário
  }
});

export default EscolherTipoScreen;
