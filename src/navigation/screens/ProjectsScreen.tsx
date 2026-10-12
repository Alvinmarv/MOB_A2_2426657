
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { Project, ProjectsStackParamList } from '../RootNavigator';

type Props = NativeStackScreenProps<ProjectsStackParamList, 'ProjectsList'>;

const projects: Project[] = [
  {
    id: '1',
    title: 'Electronic Shop Website',
    problem: 'Customers need a convenient way to view electronic products.',
    contribution:
      'I designed and built the product catalog, filtering, and checkout experience for the storefront.',
    technology: ['HTML', 'CSS', 'PHP', 'MySQL'],
  },
  {
    id: '2',
    title: 'Portfolio Website',
    problem: 'I needed a clean platform to present my work and skills.',
    contribution:
      'I created the layout, refined the visual design, and organized the content to highlight my projects.',
    technology: ['React Native', 'TypeScript', 'Expo'],
  },
];

export default function ProjectsScreen(_: Props) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.intro}>Selected work and personal projects</Text>

      {projects.map((project) => (
        <View key={project.id} style={styles.card}>
          <Text style={styles.title}>{project.title}</Text>
          <Text style={styles.description}>
            <Text style={styles.label}>Problem:</Text> {project.problem}
          </Text>
          <Text style={styles.description}>
            <Text style={styles.label}>Contribution:</Text> {project.contribution}
          </Text>
          <Text style={styles.description}>
            <Text style={styles.label}>Technologies:</Text>{' '}
            {project.technology.join(', ')}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#F8FAFC', flexGrow: 1 },
  intro: { fontSize: 16, color: '#475569', marginBottom: 18 },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  title: { fontSize: 19, fontWeight: 'bold', color: '#14213D' },
  label: { fontWeight: '700', color: '#14213D' },
  description: {
    fontSize: 15,
    lineHeight: 22,
    marginTop: 8,
    color: '#475569',
  },
  link: { marginTop: 14, color: '#2563EB', fontWeight: '600' },
});
