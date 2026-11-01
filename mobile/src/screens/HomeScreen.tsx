import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen({ onStart }: { onStart: () => void }) {
  return <View style={styles.container}><StatusBar style="light" /><Text style={styles.title}>CineMatch</Text><Text style={styles.subtitle}>당신의 취향에 딱 맞는 영화 추천 서비스</Text><Text style={styles.description}>원하는 영화의 분위기와 취향을 알려주세요.{ '\n' }리뷰 데이터를 바탕으로 영화를 추천해드릴게요.</Text><Pressable style={styles.button} onPress={onStart}><Text style={styles.buttonText}>영화 추천 시작하기</Text></Pressable></View>;
}
const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: '#101827', alignItems: 'center', justifyContent: 'center', padding: 24 }, title: { fontSize: 40, fontWeight: 'bold', color: '#FFFFFF', marginBottom: 16 }, subtitle: { fontSize: 18, color: '#E5E7EB', marginBottom: 32, textAlign: 'center' }, description: { fontSize: 15, color: '#9CA3AF', textAlign: 'center', lineHeight: 26, marginBottom: 40 }, button: { backgroundColor: '#6366F1', paddingVertical: 16, paddingHorizontal: 32, borderRadius: 12 }, buttonText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' } });
