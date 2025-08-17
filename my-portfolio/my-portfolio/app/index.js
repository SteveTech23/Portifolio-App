import { View, Text, StyleSheet, Button } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My Portfolio 🚀</Text>
      <Link href="/about">
        <Button title="Go to About" />
      </Link>
      <Link href="/projects">
        <Button title="See My Projects" />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
