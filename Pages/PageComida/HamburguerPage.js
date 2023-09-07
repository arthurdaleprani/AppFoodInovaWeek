import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, Button, StyleSheet } from 'react-native';

const Hamburguer = {



//Hamburguerias


}

function hamburguerEscolher(){
indiceAleatorio = Math.floor(Math.random() * Hamburguer.lenght )
return Hamburguer[indiceAleatorio];

}



const HamburguerPage = () => {
  const[hamburguerAleatorio, setHamburgerAleatorio] = useState(null)
  const[isLoading, setIsLoading] = useState(true);
  

  useEffect(() =>{
    setTimeout(() =>{
    const Hamburguer = hamburguerEscolher();
    setHamburgerAleatorio(Hamburguer)
    setIsLoading(false)
    
    
    }, 1000)
    
    }, [])
  
  
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#E07F21" />
      ): hamburguerAleatorio ? (
        <View>
          <Image source={hamburguerAleatorio.foto} style={styles.foto}/>
          <Text source={hamburguerAleatorio.nome} style={styles.nome}/>
          <Text source={hamburguerAleatorio.desc} style={styles.desc}/>
          <Button style={styles.button}
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
container:{



},

foto:{


},

nome:{




},

desc:{




},
button:{



  
}


})

export default HamburguerPage; 