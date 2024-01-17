import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const AddTask = ({ onAddTask }) => {
  const [title, setTitle] = useState("");

  const handleAddTask = (title) => {
    if (title.trim() === "") {
      return;
    }
    onAddTask(title);
    setTitle("");
  };

  return (
    <View style={styles.addTodoForm}>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} />
      <Button title="Add" onPress={() => handleAddTask(title)} />
    </View>
  );
};

const styles = StyleSheet.create({
  addTodoForm: {
    margin: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default AddTask;
