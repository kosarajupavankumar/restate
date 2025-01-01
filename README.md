# Real Estate App

This is a Real Estate application built with Expo and React Native. The app allows users to search for properties, view property details, and manage their profiles. It includes features like user authentication, property search, filters, and more.

## Features

- **User Authentication**: The project includes user authentication using Google OAuth, allowing users to sign in and out securely. This is implemented in `lib/appwrite.ts` and `app/sign-in.tsx`.
- **Navigation**: The project uses Expo Router for navigation, with a tab-based layout for different sections like Home, Explore, and Profile. This is implemented in files like `app/_layout.tsx`, `app/(root)/_layout.tsx`, and `app/(root)/(tabs)/_layout.tsx`.
- **Custom Fonts**: The project uses custom fonts, specifically the Rubik font family, which is loaded and used throughout the application. This is implemented in `app/_layout.tsx`.
- **Global State Management**: The project uses a global context provider to manage the global state, including user information and loading states. This is implemented in `lib/global-provider.tsx`.
- **Search and Filters**: The project includes a search functionality with debounced input and filters for different categories. This is implemented in `components/Search.tsx` and `components/Filters.tsx`.
- **Card Components**: The project includes reusable card components for displaying featured properties and recommendations. This is implemented in `components/Cards.tsx`.
- **Profile Management**: The project includes a profile section where users can view and edit their profile information, view bookings, and manage settings. This is implemented in `app/(root)/(tabs)/profile.tsx`.
- **Expo Plugins**: The project uses various Expo plugins like `expo-font`, `expo-splash-screen`, and `expo-router` for enhanced functionality. This is configured in `app.json`.
- **TypeScript Support**: The project is written in TypeScript, providing type safety and better development experience. This is evident from the presence of TypeScript configuration files like `tsconfig.json`.

## Prerequisites

To run this project, you need to have the following prerequisites:

- **Node.js**: Ensure you have Node.js installed. You can download it from Node.js official website.
- **npm**: Node.js comes with npm (Node Package Manager). Verify the installation by running `npm -v` in your terminal.
- **Expo CLI**: Install Expo CLI globally by running `npm install -g expo-cli`.
- **Google OAuth Credentials**: Set up Google OAuth credentials for user authentication. You will need to configure the `EXPO_PUBLIC_APPWRITE_ENDPOINT` and `EXPO_PUBLIC_APPWRITE_PROJECT_ID` environment variables.
- **TypeScript**: This project uses TypeScript, so ensure you have TypeScript installed. You can install it globally by running `npm install -g typescript`.
- **Expo Development Tools**: Install the Expo Go app on your mobile device for testing. You can find it on the App Store or Google Play.
- **Expo Plugins**: The project uses various Expo plugins like `expo-router`, `expo-splash-screen`, and `expo-font`. These are configured in the `app.json` file.
- **React Native Environment**: Set up the React Native environment by following the React Native CLI Quickstart guide.
- **Appwrite Server**: Ensure you have an Appwrite server set up and running. You can find more information on setting up Appwrite here.

Make sure to configure the environment variables and dependencies correctly to run the project smoothly. For more details, refer to the `README.md` file.

## Setup

1. Clone the repository

   ```bash
   git clone https://github.com/kosarajupavankumar/restate.git
   cd restate
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Set up environment variables

   Create a `.env.local` file in the root directory and add the following variables:

   ```env
   EXPO_PUBLIC_APPWRITE_ENDPOINT=your_appwrite_endpoint
   EXPO_PUBLIC_APPWRITE_PROJECT_ID=your_appwrite_project_id
   ```

4. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Technologies Used

- **Expo**: A framework and platform for universal React applications.
- **React Native**: A framework for building native apps using React.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Appwrite**: An open-source backend server for web, mobile, and flutter developers.
- **Expo Router**: Used for navigation within the app.
- **Expo Splash Screen**: Configured to display a splash screen with a custom image, resize mode, and background color. The configuration can be found in `app.json`.
- **Expo Font**: Used to load custom fonts, specifically the Rubik font family. The configuration can be found in `app.json` and the fonts are loaded in `app/_layout.tsx`.

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
