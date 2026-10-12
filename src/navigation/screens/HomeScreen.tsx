
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const STUDENT_NAME: string = ' MUGABO ALVIN MARVIN';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>
          {STUDENT_NAME === 'MUGABO ALVIN MARVIN'
            ? '?'
            : STUDENT_NAME.charAt(0).toUpperCase()}
        </Text>
      </View>

      <Text style={styles.name}>
        My name is {STUDENT_NAME}.
      </Text>

      <Text style={styles.headline}>
        Aspiring Web and Mobile Developer
      </Text>

      <Text style={styles.sectionTitle}>About Me</Text>
      <Text style={styles.biography}>
        I am developing my skills in web development and
        programming. I enjoy learning how to build useful,
        accessible applications and solving problems with code.
      </Text>

      <Text style={styles.sectionTitle}>What I Do</Text>
      <Text style={styles.skill}>
        HTML · CSS · JavaScript · PHP
      </Text>

      <Text style={styles.note}>
        Replace the temporary name and biography with your
        own details before submitting the assignment.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#DBEAFE',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  avatarText: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#1D4ED8',
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#14213D',
    textAlign: 'center',
    marginBottom: 10,
  },
  headline: {
    fontSize: 16,
    color: '#2563EB',
    textAlign: 'center',
    marginBottom: 24,
  },
  sectionTitle: {
    alignSelf: 'stretch',
    fontSize: 19,
    fontWeight: 'bold',
    color: '#14213D',
    marginTop: 16,
    marginBottom: 8,
  },
  biography: {
    alignSelf: 'stretch',
    fontSize: 16,
    lineHeight: 25,
    color: '#334155',
  },
  skill: {
    alignSelf: 'stretch',
    fontSize: 16,
    lineHeight: 24,
    color: '#334155',
  },
  note: {
    marginTop: 28,
    fontSize: 12,
    color: '#64748B',
    textAlign: 'center',
  },
});
