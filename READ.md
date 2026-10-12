My name is MUGABO ALVIN MARVIN.

# AMPortfolio — Personal Portfolio App

## Student Information

- **Full name:** MUGABO ALVIN MARVIN
- **Registration number:** 24/26657
- **Course:** SWE 3409 — Mobile Application Development
- **Assignment:** Individual Assignment 2
- **Verification code:** MOB-A2-6657
- **Application name:** AMPortfolio

## Purpose

AMPortfolio is a personal portfolio mobile application designed to introduce me to recruiters and showcase my skills, education, projects and professional profile.

## Features

- Personal introduction and profile
- Skills and education timeline
- Student project portfolio with project details
- Editable profile with input validation
- Profile image selection or capture
- Local profile data persistence
- Bottom-tab and stack navigation
- Offline access to core portfolio content
- About screen with student and release information

*Note: The features listed above must be verified against the final implementation before submission.*

## Technologies

- React Native
- Expo
- TypeScript
- React Navigation
- AsyncStorage
- Expo ImagePicker and/or Expo Camera
- Expo Application Services (EAS)

## Installation and Setup

Install Node.js and Git, then clone the project repository.

Install dependencies:

```bash
npm install
```

Start the Expo development server:

```bash
npx expo start
```

Check TypeScript:

```bash
npx tsc --noEmit
```

## Android APK Build

Install and configure EAS CLI, then log in to your Expo account:

```bash
npm install -g eas-cli
eas login
```

Configure the project if necessary:

```bash
eas build:configure
```

Build the Android APK using the configured preview profile:

```bash
eas build --platform android --profile preview
```

## Testing Information

- **Test device:** To be completed after testing
- **Android version:** To be completed after testing
- **Airplane Mode test:** To be completed
- **Persistence after restart:** To be completed

## Release Information

- **GitHub repository:** To be added
- **Final commit hash:** To be added
- **GitHub release:** To be added
- **APK download link:** To be added

## Data Use and Privacy

The application is intended for educational and portfolio demonstration purposes. Editable profile information and the selected local image reference should be stored locally on the device. No passwords, authentication tokens or sensitive personal records should be stored in AsyncStorage.

## Known Limitations

To be updated after testing the final application.

## Acknowledgements and AI Use

Any external libraries, starter code and AI assistance used during development will be acknowledged in accordance with the assignment requirements and documented in `evidence/AI_USE.md`.