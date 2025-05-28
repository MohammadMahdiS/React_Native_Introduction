import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_text}>Hi React Native</Text>
      </View>
      <Text style={styles.body}>سلام دوستان عزیز</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "purple",
    padding: 20,
  },
  header_text: {
    color: "white",
    fontWeight: "bold",
  },
  body: {
    padding: 20,
    margin: 20,
    fontSize: 20, 
    fontWeight: "bold",
  }
})

export default App;