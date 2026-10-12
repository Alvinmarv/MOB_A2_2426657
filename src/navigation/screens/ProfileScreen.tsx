import { useEffect, useState } from 'react';
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PROFILE_KEY = '@amportfolio_profile';

type ProfileData = {
  headline: string;
  biography: string;
  primarySkill: string;
  available: boolean;
};

type ProfileErrors = {
  headline?: string;
  biography?: string;
  primarySkill?: string;
};

const defaultProfile: ProfileData = {
  headline: 'Aspiring Web and Mobile Developer',
  biography: '',
  primarySkill: 'JavaScript',
  available: true,
};

export default function ProfileScreen() {
  const [headline, setHeadline] = useState(defaultProfile.headline);
  const [biography, setBiography] = useState(defaultProfile.biography);
  const [primarySkill, setPrimarySkill] = useState(
    defaultProfile.primarySkill
  );
  const [available, setAvailable] = useState(defaultProfile.available);
  const [errors, setErrors] = useState<ProfileErrors>({});
  const [loading, setLoading] = useState(true);

  // Load the previously saved profile when the screen opens.
  useEffect(() => {
    async function loadProfile() {
      try {
        const saved = await AsyncStorage.getItem(PROFILE_KEY);

        if (saved) {
          const profile: ProfileData = {
            ...defaultProfile,
            ...JSON.parse(saved),
          };

          setHeadline(profile.headline);
          setBiography(profile.biography);
          setPrimarySkill(profile.primarySkill);
          setAvailable(profile.available);
        }
      } catch {
        Alert.alert('Error', 'Could not load your saved profile.');
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, []);

  function validateProfile(): ProfileErrors {
    const nextErrors: ProfileErrors = {};

    if (headline.trim().length < 5) {
      nextErrors.headline = 'Headline must contain at least 5 characters.';
    }

    if (biography.trim().length < 20) {
      nextErrors.biography =
        'Biography must contain at least 20 characters.';
    }

    if (primarySkill.trim().length < 2) {
      nextErrors.primarySkill =
        'Primary skill must contain at least 2 characters.';
    }

    return nextErrors;
  }

  async function handleSave() {
    const validationErrors = validateProfile();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      Alert.alert(
        'Check your profile',
        'Please correct the highlighted fields before saving.'
      );
      return;
    }

    const profile: ProfileData = {
      headline: headline.trim(),
      biography: biography.trim(),
      primarySkill: primarySkill.trim(),
      available,
    };

    try {
      await AsyncStorage.setItem(PROFILE_KEY, JSON.stringify(profile));

      Alert.alert(
        'Profile saved!',
        'Your profile is valid and your changes have been saved.'
      );
    } catch {
      Alert.alert(
        'Save failed',
        'Your profile could not be saved. Please try again.'
      );
    }
  }

  if (loading) {
    return (
      <View style={styles.loading}>
        <Text style={styles.loadingText}>Loading your profile...</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.title}>Edit My Profile</Text>
      <Text style={styles.description}>
        Update your details, correct any validation errors, and save your
        profile.
      </Text>

      <Text style={styles.label}>Professional headline</Text>
      <TextInput
        style={[styles.input, errors.headline ? styles.invalid : null]}
        value={headline}
        onChangeText={(value) => {
          setHeadline(value);
          setErrors((previous) => ({ ...previous, headline: undefined }));
        }}
        placeholder="Your professional headline"
        placeholderTextColor="#94A3B8"
        accessibilityLabel="Professional headline"
        autoCapitalize="sentences"
        returnKeyType="next"
      />
      {errors.headline ? (
        <Text style={styles.error}>{errors.headline}</Text>
      ) : null}

      <Text style={styles.label}>Short biography</Text>
      <TextInput
        style={[
          styles.input,
          styles.multiline,
          errors.biography ? styles.invalid : null,
        ]}
        value={biography}
        onChangeText={(value) => {
          setBiography(value);
          setErrors((previous) => ({ ...previous, biography: undefined }));
        }}
        placeholder="Write at least 20 characters about yourself"
        placeholderTextColor="#94A3B8"
        multiline
        textAlignVertical="top"
        accessibilityLabel="Short biography"
      />
      <Text style={styles.helper}>
        {biography.trim().length}/20 minimum characters
      </Text>
      {errors.biography ? (
        <Text style={styles.error}>{errors.biography}</Text>
      ) : null}

      <Text style={styles.label}>Primary skill</Text>
      <TextInput
        style={[styles.input, errors.primarySkill ? styles.invalid : null]}
        value={primarySkill}
        onChangeText={(value) => {
          setPrimarySkill(value);
          setErrors((previous) => ({
            ...previous,
            primarySkill: undefined,
          }));
        }}
        placeholder="Your strongest skill"
        placeholderTextColor="#94A3B8"
        accessibilityLabel="Primary skill"
        autoCapitalize="words"
        returnKeyType="done"
      />
      {errors.primarySkill ? (
        <Text style={styles.error}>{errors.primarySkill}</Text>
      ) : null}

      <View style={styles.switchRow}>
        <View style={styles.switchText}>
          <Text style={styles.label}>Available for opportunities?</Text>
          <Text style={styles.helper}>
            {available ? 'Available' : 'Not currently available'}
          </Text>
        </View>
        <Switch
          value={available}
          onValueChange={setAvailable}
          accessibilityLabel="Available for opportunities"
        />
      </View>

      <Pressable
        style={styles.button}
        onPress={handleSave}
        accessibilityRole="button"
        disabled={loading}
      >
        <Text style={styles.buttonText}>Validate and Save Profile</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  container: {
    padding: 20,
    paddingBottom: 40,
    flexGrow: 1,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
  },
  loadingText: {
    color: '#334155',
    fontSize: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#14213D',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 21,
    marginBottom: 12,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    marginTop: 14,
    marginBottom: 7,
    color: '#334155',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    color: '#0F172A',
  },
  invalid: {
    borderColor: '#DC2626',
    borderWidth: 1.5,
  },
  multiline: {
    minHeight: 120,
    textAlignVertical: 'top',
  },
  helper: {
    color: '#64748B',
    fontSize: 12,
    marginTop: 5,
  },
  error: {
    color: '#DC2626',
    fontSize: 13,
    marginTop: 5,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  switchText: {
    flex: 1,
    paddingRight: 12,
  },
  button: {
    backgroundColor: '#2563EB',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 26,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
