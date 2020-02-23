import React from 'react';
import { View } from 'react-native';
import { ThemeProvider, Header } from 'react-native-elements';
import { Feed, PunForm } from './src/components';

export default function App() {
  return (
    <ThemeProvider>
      <View>
        <Header
          centerComponent={{
            text: 'PunHub',
            style: { color: 'white', fontSize: 24 }
          }}
          backgroundColor="maroon"
        />
        <PunForm />
        <Feed />
      </View>
    </ThemeProvider>
  );
}
