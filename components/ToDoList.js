import { Button, StyleSheet, Text, View } from "react-native";
import AddTask from "./AddTask";
import { v4 as uuidv4 } from "uuid";

const ToDoList = ({ todos, setTodos }) => {
  const addToDo = (title) => {
    setTodos((prev) => [...prev, { id: uuidv4(), title: title }]);
  };

  const removeToDo = (id) => {
    setTodos(todos.filter((e) => e.id != id));
  };

  return (
    <View style={styles.todoListContainer}>
      {todos.map((e) => (
        <View key={e.id} style={styles.todoItem}>
          <Text>{e.title}</Text>
          <Button title="Remove" onPress={() => removeToDo(e.id)} />
        </View>
      ))}
      <AddTask onAddTask={addToDo} />
    </View>
  );
};

const styles = StyleSheet.create({
  todoListContainer: {
    margin: 10,
  },
  todoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginVertical: 5,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default ToDoList;
