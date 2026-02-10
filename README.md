# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

📱 Android Release Workflow
This section documents the specific steps required to build and release the Android version of the app, managing signing keys and versioning manually via Gradle.

🔑 Signing Keys & Security
To build a release version (production), the app requires a specific keystore and configuration file.

⚠️ IMPORTANT: The keystore file (.jks) and the properties file (key.properties) contain sensitive information. They are NOT included in the repository for security reasons.

If you are setting up this project on a new machine, you must place the files manually:

Keystore File: Place your hexpro-upload-key.jks file inside android/app/.

Properties File: Create a key.properties file inside android/ with the following structure:

Properties

storePassword=YOUR_STORE_PASSWORD
keyPassword=YOUR_KEY_PASSWORD
keyAlias=hexpro
storeFile=hexpro-upload-key.jks
📈 Versioning
Before generating a new build for the Google Play Store, you must increment the version numbers in the native Android configuration.

Open android/app/build.gradle.

Locate the defaultConfig block.

Update the following values:

versionCode: An integer (e.g., 100). Must be higher than the previous version uploaded to the Play Store.

versionName: A string (e.g., "1.0.0"). This is what users see in the store.

Gradle

defaultConfig {
    applicationId "com.hex.pro"
    versionCode 101       // <--- Increment this for every release
    versionName "1.0.1"   // <--- Update this for users
    // ...
}
🚀 Generating the Release Bundle (.aab)
Google Play requires an Android App Bundle (.aab) for distribution. To generate it:

Navigate to the android directory:

Bash

cd android
Clean previous builds (recommended to avoid cache issues):

Bash

./gradlew clean
Generate the bundle:

Bash

./gradlew bundleRelease
Output Location: The final signed file will be generated at: android/app/build/outputs/bundle/release/app-release.aab