import React, {useState} from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';

// Class Base Implement
// class App extends React.Component {
//   state = {
//     firstName : "یونس",
//   }

//   handleNameChange = () => {
//     this.setState({
//       firstName: "مهدی",
//     })
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.header}>
//           <Text style={styles.header_text}>Hi React Native</Text>
//         </View>
//         <View>
//           <Text style={styles.body}>سلام {this.state.firstName} دوستان عزیز</Text>
//           <Button title="تغییر" onPress={this.handleNameChange}/>
//         </View>
//       </View>
//     )
//   }
// }

// Function Base Implement
const App = () => {

  const [firstName, setFirstName] = useState('یونس');
  const [fullName, setFullName] = useState();
  const [age, setAge] = useState();

  const handleNameChange = () => {
    setFirstName("مهدی")
  }

  return (
    <View style={styles.container}>
      {/* Title */}
      <View style={styles.header}>
        <Text style={styles.header_text}>Hi React Native</Text>
      </View>

      {/* Button */}
      <View>
        <Text style={styles.body}>سلام {firstName} دوستان عزیز</Text>
        <Button title="تغییر" onPress={handleNameChange}/>
      </View>
      {/* Inputs */}
      <View style = {{ 
        marginBottom:30,
        backgroundColor: "orange",
        padding: 20,
        width: 300,
        borderRadius: 10,
       }} >
        <Text style={styles.label}>نام و نام خانوادگی: {fullName} </Text>
        <Text style={styles.label}>سن: {age} </Text>
      </View>
      <View>
        <Text style={styles.label}>نام و نام خانوادگی: {fullName} </Text>
        <TextInput style={styles.text_input} placeholder="مثلا امیرعلی" onChangeText={(value) => setFullName(value) } />
        <Text style={styles.label}>سن: {age} </Text>
        <TextInput style={styles.text_input} keyboardType="numeric" placeholder="مثلا 25" onChangeText={(value) => setAge(value) }/>
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
  },
  label: {
    fontSize: 17,
    fontWeight: "bold",
  },
  text_input: {
    borderWidth: 1,
    borderColor: "lightGrey",
    borderRadius: 10,
    padding: 5,
    margin: 10,
    width: 250,
    textAlign: "center",
    fontSize: 15,
  }
})

export default App;