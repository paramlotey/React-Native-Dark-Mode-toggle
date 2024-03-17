// import React from "react";
// import { View, Text, StyleSheet } from "react-native";

// const AppPro = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.row}>
//         <View style={styles.cell}>
//           <Text style={styles.cellHeading}>Name</Text>
//         </View>
//         <View style={styles.cell}>
//           <Text style={styles.cellHeading}>Age</Text>
//         </View>
//         <View style={styles.cell}>
//           <Text style={styles.cellHeading}>Gender</Text>
//         </View>
//       </View>
//       <View style={styles.row}>
//         <View style={styles.cell}>
//           <Text style={styles.cellText}>Param</Text>
//         </View>
//         <View style={styles.cell}>
//           <Text style={styles.cellText}>25</Text>
//         </View>
//         <View style={styles.cell}>
//           <Text style={styles.cellText}>Male</Text>
//         </View>
//       </View>
//       {/* Add more rows as needed */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: "#fff",
//   },
//   row: {
//     flexDirection: "row",
//     borderBottomWidth: 1,
//     borderBottomColor: "#ccc",
//   },
//   cell: {
//     flex: 1,
//     padding: 10,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   cellHeading: {
//     textAlign: "center",
//     color:"black",
//     fontWeight:"900"
//   },
//   cellText: {
//     textAlign: "center",
//     color:"black"
//   },
// });

// export default AppPro;

import React, { useState } from 'react';
import { View, Text, Button, SafeAreaView, useColorScheme, StyleSheet } from 'react-native';

const AppPro = () => {
  const isDarkMode = useColorScheme();
  const [mode, setMode] = useState(isDarkMode === 'dark');

  const toggleDarkMode = () => {
    setMode(prevMode => !prevMode);
    console.log("Mode Changed");
    console.log("Mode Changed Again");
  };

  return (
    <SafeAreaView style={mode ? styles.containerDark : styles.containerLight}>
      <View>
        <Text style={mode ? styles.whiteText : styles.blackText}>Hello World</Text>
        <Button title='Toggle Dark Mode' onPress={toggleDarkMode} />
        {/* <Text style={{fontSize:100, fontWeight:"900", color:"white"}}>Heading</Text> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerLight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  containerDark: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  whiteText: {
    color: 'white',
    fontSize: 100,
  },
  blackText: {
    color: 'black',
    fontSize: 100,
  },
});

export default AppPro;

