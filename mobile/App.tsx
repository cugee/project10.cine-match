import React, { useState } from 'react';
import { View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import PreferenceScreen, { PreferenceData } from './src/screens/PreferenceScreen';
import ResultScreen from './src/screens/ResultScreen';

type Screen = 'home' | 'preference' | 'result';

export default function App() {
  const [screen, setScreen] = useState<Screen>('home');
  const [preferences, setPreferences] = useState<PreferenceData | null>(null);
  return <View style={{ flex: 1 }}>
    {screen === 'home' && <HomeScreen onStart={() => setScreen('preference')} />}
    {screen === 'preference' && <PreferenceScreen onBack={() => setScreen('home')} onSubmit={(data) => { setPreferences(data); setScreen('result'); }} />}
    {screen === 'result' && preferences && <ResultScreen preferences={preferences} onBack={() => setScreen('preference')} />}
  </View>;
}
