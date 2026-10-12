
import { ScrollView, StyleSheet, Text } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { ProjectsStackParamList } from '../RootNavigator';

type Props = NativeStackScreenProps<
  ProjectsStackParamList,
  'ProjectDetails'
>;

export default function ProjectDetailsScreen({ route }: Props) {
  const { project } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{project.title}</Text>

      <Text style={styles.heading}>Problem</Text>
      <Text style={styles.body}>{project.problem}</Text>

      <Text style={styles.heading}>My Contribution</Text>
      <Text style={styles.body}>{project.contribution}</Text>

      <Text style={styles.heading}>Technologies Used</Text>
      {project.technology.map((technology, index) => (
        <Text key={`${technology}-${index}`} style={styles.body}>
          • {technology}
        </Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 22, backgroundColor: '#F8FAFC', flexGrow: 1 },
  title: { fontSize: 25, fontWeight: 'bold', color: '#14213D', marginBottom: 20 },
  heading: { fontSize: 18, fontWeight: 'bold', marginTop: 16, marginBottom: 6, color: '#1D4ED8' },
  body: { fontSize: 16, lineHeight: 24, color: '#334155' },
});
