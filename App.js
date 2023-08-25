import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoadingScreen from './LoadingScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <LoadingScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
