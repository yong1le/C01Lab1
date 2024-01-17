import { StyleSheet, View } from "react-native";
import ToDoList from "./components/ToDoList";
import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);
  return (
    <View style={styles.container}>
      <ToDoList todos={todos} setTodos={setTodos} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
