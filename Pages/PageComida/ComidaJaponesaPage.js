import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, Button, StyleSheet } from 'react-native';

const Japa = [
 {
    nome: "Kizoko Sushi",
    foto: require('../../src/imgs/japa1.PNG'),
    desc: 'A culinária japonesa contemporânea e do tradicional repaginado em buffet descontraído de iguarias chamativas.',
    localizacao:'https://goo.gl/maps/ipHTPhkaJkzLKJs47'

 },

 {
  nome: "Mori yah Sushi",
  foto: require('../../src/imgs/japa2.PNG'),
  desc: 'Com um novo conceito em culinária japonesa, estamos trazendo o melhor do sushi contemporânea com preço acessível.',
  localizacao:'https://goo.gl/maps/McZ4MYs1uXLABqHU8'

},
{
  nome: "Kokai Sushi",
  foto: require('../../src/imgs/japa3.PNG'),
  desc: 'O Kokai Sushi Praia da Costa é um restaurante japonês renomado na Praia da Costa, conhecido por sua autêntica culinária japonesa e ambiente à beira-mar. Oferece uma variedade de pratos de sushi e sashimi de alta qualidade.',
  localizacao:'https://goo.gl/maps/E2p7oEPqHR6oEEUd7'

},
{
  nome: "Potemaki San Sushi",
  foto: require('../../src/imgs/japa4.PNG'),
  desc: 'O sabor do oriente na sua mesa',
  localizacao:'https://goo.gl/maps/GfGkaxxiwZVC87ks9'

},
{
  nome: "Sushi Trip",
  foto: require('../../src/imgs/japa5.PNG'),
  desc: 'Sushi Trip é um restaurante que oferece uma jornada gastronômica única pela culinária japonesa. Com uma variedade de pratos de sushi e sashimi de alta qualidade, proporciona aos clientes uma experiência de sabores autênticos do Japão em um ambiente acolhedor e convidativo',
  localizacao:'https://goo.gl/maps/BPkZXRvRjthKn9Hr7'

},




]

function japaEscolher() {
  const indiceAleatorio = Math.floor(Math.random() * Japa.length); // Corrigido "lenght" para "length"
  return Japa[indiceAleatorio];
}





const ComidaJaponesaPage = () => {
  const [japaAleatorio, setJapaAleatorio] = useState(null)
  const[isLoading, setIsLoading] = useState(true)
  
  useEffect(()=>{
      setTimeout(()=>{
          setJapaAleatorio(japaEscolher());
          setIsLoading(false);
      }, 1000)
  }, [])
  
  
  
  
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
            style={styles.button}
            title="Ver Localização"
            onPress={() => {
              // Abra a localização no Google Maps ou outro aplicativo de mapa
              // Use japaAleatorio.localizacao para o link
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
  desc: {
    fontSize: 16,
    marginTop: 10,
  },
button:{
width:30,
height:30


  
}


})


export default ComidaJaponesaPage; 