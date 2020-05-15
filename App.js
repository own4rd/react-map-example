import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import MapView, { Marker } from 'react-native-maps';

const App = () => {
  const [pos] = useState({
    latitude: -22.951916,
    longitude: -43.210466,
    latitudeDelta: 0.0532,
    longitudeDelta: 0.0311,
  });

  return (
    <View style={styles.container}>
      <MapView
        style={styles.boxmap}
        region={pos}
      >
        <Marker
          coordinate={pos}
          title={'Cristo Redentor'}
          description={'Ponto turistico do rio de janeiro'}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  // Flex 1 para preencher toda a tela, se remover irá apresentar 1 tela em branco
  container: {
    flex: 1,
  },
  // absoluteFill: Adicionar posição absoluta indo do TOPO 0, até BOTTOM 0 etc. Preenchendo a tela inteira
  boxmap: {
    ...StyleSheet.absoluteFill,
  },
});

export default App;
