import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading process
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 10;
        } else {
          clearInterval(interval);
          setIsLoading(false);
          return 100;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <>
          <Text style={styles.loadingText}>Yükleniyor...</Text>
          <AnimatedCircularProgress
            size={150}
            width={15}
            fill={progress}
            tintColor="#00e0ff"
            onAnimationComplete={() => console.log('Animation complete')}
            backgroundColor="#3d5875"
          />
        </>
      ) : (
        <Text style={styles.loadingText}>Yükleme Tamamlandı!</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginBottom: 10,
  },
});

export default LoadingScreen;
