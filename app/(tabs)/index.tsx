import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button, Surface } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Surface style={styles.surface} elevation={1}>
        <Text variant="headlineMedium">ברוכים הבאים!</Text>
        <Button 
          mode="contained" 
          onPress={() => console.log('Pressed')}
          style={styles.button}
        >
          התחל כאן
        </Button>
      </Surface>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  surface: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 16,
  }
});
