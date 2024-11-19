import { useState } from "react";
import {
  Alert,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function HomeScreen() {
  const [inputValue, setInputValue] = useState("");

  const handlePress = () => {
    if (inputValue.trim()) {
      Alert.alert("Valor enviado", `Você enviou: ${inputValue}`);
      setInputValue("");
    } else {
      Alert.alert("Erro", "Por favor, insira algum texto antes de enviar.");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="O que deseja saber?"
        value={inputValue}
        onChangeText={setInputValue}
      />
      <TouchableOpacity onPress={handlePress} style={styles.sendButton}>
        <Text style={styles.textSendButton}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    width: "100%",
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  sendButton: {
    width: '100%',
    backgroundColor: '#A54DFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  textSendButton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
