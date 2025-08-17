import { View, Text, StyleSheet } from 'react-native';

export default function Projects() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Projects</Text>
      <Text>- Portfolio App (React Native + Expo)</Text>
      <Text>- Blog Website (HTML, CSS, JS)</Text>
      <Text>- IT Support Scripts</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
