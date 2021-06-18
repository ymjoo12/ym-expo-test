import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import firebase from 'firebase';
import * as Analytics from 'expo-firebase-analytics';

var firebaseConfig = {
  apiKey: "AIzaSyAJeWco-ULuYeO6zhAgxirhGQphpK-6CJI",
  authDomain: "test-ym-2b413.firebaseapp.com",
  projectId: "test-ym-2b413",
  storageBucket: "test-ym-2b413.appspot.com",
  messagingSenderId: "224970998165",
  appId: "1:224970998165:web:7d19cb2a564605d0c2b69c",
  measurementId: "G-DMD36MZYPK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
Analytics.setAnalyticsCollectionEnabled(true).then();

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
