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
import {SafeAreaView, useColorScheme} from 'react-native';

import {BlogRealmContext} from './src/realmDB/schema';
import BlogsContainer from './src/screens/Blogs/BlogsContainer';

const App = () => {
  const {RealmProvider} = BlogRealmContext;
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? 'black' : 'white',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <RealmProvider>
        <BlogsContainer />
      </RealmProvider>
    </SafeAreaView>
  );
};

export default App;