
import { StyleSheet, Text, View } from 'react-native';

const STUDENT_NAME = 'MUGABO ALVIN Marvin';
const REGISTRATION_NUMBER = '24/26657';
const APP_VERSION = '1.0.0';

// Replace these placeholders before submitting.
const VERIFICATION_CODE = 'MOB-A2-XXXX';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About This App</Text>

      <Text style={styles.label}>Application</Text>
      <Text style={styles.value}>AMPortfolio</Text>

      <Text style={styles.label}>Student</Text>
      <Text style={styles.value}>{STUDENT_NAME}</Text>

      <Text style={styles.label}>Registration Number</Text>
      <Text style={styles.value}>{REGISTRATION_NUMBER}</Text>

      <Text style={styles.label}>Verification Code</Text>
      <Text style={styles.code}>{VERIFICATION_CODE}</Text>

      <Text style={styles.label}>Version</Text>
      <Text style={styles.value}>{APP_VERSION}</Text>

      <Text style={styles.privacy}>
        This app stores portfolio information locally on the device.
        Do not enter passwords or other sensitive information.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24, backgroundColor: '#F8FAFC', flex: 1 },
  title: { fontSize: 25, fontWeight: 'bold', color: '#14213D', marginBottom: 24 },
  label: { fontSize: 14, color: '#64748B', marginTop: 15 },
  value: { fontSize: 17, color: '#1E293B', marginTop: 5 },
  code: { fontSize: 21, fontWeight: 'bold', color: '#2563EB', marginTop: 5 },
  privacy: { fontSize: 14, lineHeight: 22, color: '#475569', marginTop: 30 },
});
