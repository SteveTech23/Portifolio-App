import { View, Text, StyleSheet, Image } from 'react-native';

export default function About() {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image 
          source={{ uri: 'https://avatars.githubusercontent.com/u/12345678' }} // Replace with your actual image URL
          style={styles.profileImage}
        />
        <Text style={styles.title}>About Me</Text>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.text}>
          Hi, I'm Steven Msowoya 👋
        </Text>
        <Text style={styles.description}>
          I'm a passionate IT professional specializing in:
        </Text>
        
        <View style={styles.skillsContainer}>
          <View style={styles.skillPill}>
            <Text style={styles.skillText}>IT Support</Text>
          </View>
          <View style={styles.skillPill}>
            <Text style={styles.skillText}>Programming</Text>
          </View>
          <View style={styles.skillPill}>
            <Text style={styles.skillText}>App Development</Text>
          </View>
        </View>
        
        <Text style={styles.quote}>
          "Turning ideas into functional solutions through code and technology."
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 25,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: '#4e6bff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  content: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: '#4e6bff',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 20,
    textAlign: 'center',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  skillPill: {
    backgroundColor: '#e8f0fe',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    margin: 5,
  },
  skillText: {
    color: '#4e6bff',
    fontWeight: '500',
  },
  quote: {
    fontStyle: 'italic',
    color: '#95a5a6',
    textAlign: 'center',
    marginTop: 15,
    lineHeight: 22,
  },
});