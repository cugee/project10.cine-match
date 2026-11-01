import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { PreferenceData } from './PreferenceScreen';

export default function ResultScreen({ preferences, onBack }: { preferences: PreferenceData; onBack: () => void }) {
  return <View style={styles.container}><StatusBar style="light" /><Pressable onPress={onBack}><Text style={styles.back}>‹ 취향 다시 입력하기</Text></Pressable><Text style={styles.title}>추천 결과</Text><Text style={styles.subtitle}>입력한 취향을 바탕으로 준비 중인 추천 화면입니다.</Text><View style={styles.card}><Text style={styles.label}>상영시간</Text><Text style={styles.value}>{preferences.duration}</Text><Text style={styles.label}>선택한 배우 및 감독</Text><Text style={styles.value}>{preferences.people.length ? preferences.people.join(', ') : '선택하지 않음'}</Text><Text style={styles.label}>원하는 영화</Text><Text style={styles.value}>{preferences.keywords || '입력하지 않음'}</Text></View><Text style={styles.note}>실제 LLM/API 영화 추천은 다음 단계에서 연결됩니다.</Text></View>;
}
const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: '#101827', padding: 24, paddingTop: 56 }, back: { color: '#A5B4FC', fontSize: 16 }, title: { color: '#FFFFFF', fontSize: 32, fontWeight: '700', marginTop: 42, marginBottom: 12 }, subtitle: { color: '#9CA3AF', lineHeight: 24 }, card: { backgroundColor: '#1B2638', borderRadius: 16, padding: 20, marginTop: 28 }, label: { color: '#A5B4FC', fontSize: 13, marginTop: 14, marginBottom: 6 }, value: { color: '#FFFFFF', fontSize: 16, lineHeight: 24 }, note: { color: '#6B7280', textAlign: 'center', marginTop: 28, lineHeight: 22 } });
