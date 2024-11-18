import { useState } from "react";
import { Alert, View, StyleSheet, TextInput, Button, Text } from "react-native";

const HomeScreen = () => {
  const [inputValue, setInputValue] = useState('');

  const handlePress = () => {
    if (inputValue.trim()) {
      Alert.alert('Valor enviado', `Você enviou: ${inputValue}`);
      setInputValue('');
    } else {
      Alert.alert('Erro', 'Por favor, insira algum texto antes de enviar.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Envio</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite algo..."
        value={inputValue}
        onChangeText={setInputValue}
      />
      <Button title="Enviar" onPress={handlePress} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
});

export default HomeScreen