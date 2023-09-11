import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, Button, StyleSheet, Linking } from 'react-native';

const Japa = [
 {
    nome: "Kizoko Sushi",
    foto: require('../../src/imgs/japa1.png'),
    desc: 'A culinária japonesa contemporânea e do tradicional repaginado em buffet descontraído de iguarias chamativas.',
    localizacao:'https://goo.gl/maps/ipHTPhkaJkzLKJs47'

 },

 {
  nome: "Mori yah Sushi",
  foto: require('../../src/imgs/japa2.png'),
  desc: 'Com um novo conceito em culinária japonesa, estamos trazendo o melhor do sushi contemporânea com preço acessível.',
  localizacao:'https://goo.gl/maps/McZ4MYs1uXLABqHU8'

},
{
  nome: "Kokai Sushi",
  foto: require('../../src/imgs/japa3.png'),
  desc: 'O Kokai Sushi Praia da Costa é um restaurante japonês renomado na Praia da Costa, conhecido por sua autêntica culinária japonesa e ambiente à beira-mar. Oferece uma variedade de pratos de sushi e sashimi de alta qualidade.',
  localizacao:'https://goo.gl/maps/E2p7oEPqHR6oEEUd7'

},
{
  nome: "Potemaki San Sushi",
  foto: require('../../src/imgs/japa4.png'),
  desc: 'O sabor do oriente na sua mesa',
  localizacao:'https://goo.gl/maps/GfGkaxxiwZVC87ks9'

},
{
  nome: "Sushi Trip",
  foto: require('../../src/imgs/japa5.png'),
  desc: 'Sushi Trip é um restaurante que oferece uma jornada gastronômica única pela culinária japonesa. Com uma variedade de pratos de sushi e sashimi de alta qualidade, proporciona aos clientes uma experiência de sabores autênticos do Japão em um ambiente acolhedor e convidativo',
  localizacao:'https://goo.gl/maps/BPkZXRvRjthKn9Hr7'

},




]

function japaEscolher() {
  const indiceAleatorio = Math.floor(Math.random() * Japa.length); // Corrigido "lenght" para "length"
  return Japa[indiceAleatorio];
}





const ComidaJaponesaPage = ({navigation, route}) => {
  const [japaAleatorio, setJapaAleatorio] = useState(null)
  const[isLoading, setIsLoading] = useState(true)
  
  useEffect(()=>{
      setTimeout(()=>{
          setJapaAleatorio(japaEscolher());
          setIsLoading(false);
      }, 1000)
  }, [])
  
  
  const openLocationInMaps = () => {
    if (japaAleatorio && japaAleatorio.localizacao) {
      Linking.openURL(japaAleatorio.localizacao);
    }
  };
  
  return (
    <View style={styles.container}>
   {isLoading ? (
        <ActivityIndicator size="large" color="#E07F21" />
      ): japaAleatorio ? (
        <View>
          <Image source={japaAleatorio.foto} style={styles.foto}/>
          <Text style={styles.nome}>{japaAleatorio.nome}</Text>
          <Text style={styles.desc}>{japaAleatorio.desc}</Text>
          <Button
             color={'#E07F21'} 
            style={styles.button}
            title="Ver Localização"
            onPress={ openLocationInMaps }
          />

<Button  color={'#E07F21'} 
style={styles.btn}
        title="Voltar"
        onPress={() => navigation.goBack()}
      />
        </View>
      ) : null}
    </View>
  );
};
//

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


})


export default ComidaJaponesaPage; 