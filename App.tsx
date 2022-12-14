/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {LogBox} from 'react-native';
import {SafeAreaView, useColorScheme} from 'react-native';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import {BlogRealmContext} from './src/realmDB/schema';
import Initial from './src/navigation/Initial';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const App = () => {
  const {RealmProvider} = BlogRealmContext;
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? 'black' : 'white',
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={backgroundStyle}>
        <RealmProvider>
          <NavigationContainer>
            <Initial />
          </NavigationContainer>
        </RealmProvider>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default App;
