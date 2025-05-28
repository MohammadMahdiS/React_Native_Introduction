import React, {useState} from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';


const App = () => {
  const [firstName, setFirstName] = useState('یونس');

  const handleNameChange = () => {
    setFirstName("مهدی")
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_text}>Hi React Native</Text>
      </View>
      <View>
        <Text style={styles.body}>سلام {firstName} دوستان عزیز</Text>
        <Button title="تغییر" onPress={handleNameChange}/>
      </View>
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