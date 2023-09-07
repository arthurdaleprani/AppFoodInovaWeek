import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, Buutton, StyleSheet } from 'react-native';

const Japa = {



}

function japaEscolher() {
indiceAleatorio = Math.floor(Math.random() * Japa.lenght)
return Japa[indiceAleatorio]

}




const ComidaJaponesaPage = () => {
  const [japaAleatorio, setJapaAleatorio] = useState(null)
  const[isLoading, setIsLoading] = useState(true)
  
  useEffect(()=>{
      setTimeout(()=>{
          const Japa = japaEscolher();
          setJapaAleatorio(Japa);
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
          <Text source={japaAleatorio.nome} style={styles.nome}/>
          <Text source={japaAleatorio.desc} style={styles.desc}/>
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


export default ComidaJaponesaPage; 