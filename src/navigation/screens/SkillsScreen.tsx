
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'PHP',
  'Web Development',
];

export default function SkillsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>My Skills</Text>

      {skills.map((skill) => (
        <View key={skill} style={styles.card}>
          <Text style={styles.skill}>{skill}</Text>
        </View>
      ))}

      <Text style={styles.heading}>Education & Training</Text>
      <View style={styles.card}>
        <Text style={styles.skill}>
          Mobile Application Development
        </Text>
        <Text style={styles.description}>
         INES RUHENGERI, programme and study dates.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#F8FAFC', flexGrow: 1 },
  heading: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#14213D',
    marginBottom: 14,
    marginTop: 10,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  skill: { fontSize: 16, fontWeight: '600', color: '#1E293B' },
  description: { fontSize: 14, color: '#64748B', marginTop: 8 },
});
