import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Using normal function keyword
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>React Native Function Component using normal function keyword</Text>
//     </View>
//   );
// }

// Using ES6 arrow function
const App = () => {
  return (
    <View style={styles.container}>
      <Text>React Native Function Component using arrow function</Text>
    </View>
  );
};

// In Arrow Function component we need to export the component using export default and component name
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
