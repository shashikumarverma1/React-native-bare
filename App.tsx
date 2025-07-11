

import { StatusBar, StyleSheet, useColorScheme, View , Text } from 'react-native';
import React  , {useEffect} from "react"
import { notificationListener, requestUserPermission } from './utils/notification';
function App() {
  const isDarkMode = useColorScheme() === 'dark';
 useEffect(() => {
    requestUserPermission();
    notificationListener();
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text style={{padding:50}}>wowo</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
