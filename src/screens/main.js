import React from "react";
import {
  Text,
  SafeAreaView,
  View,
  TextInput,
  AsyncStorage,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";

const MainScreen = () => {
  const [currentUserInput, setCurrentUserInput] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [lastUser, setLastUser] = React.useState("");

  React.useEffect(() => {
    AsyncStorage.getItem("lastUser").then(user => {
      setLastUser(user);
    });
  },[]);

  function handlePress() {
    setIsSubmitting(true);
    AsyncStorage.setItem("lastUser", currentUserInput).then(() => {
      setIsSubmitting(false);
      setCurrentUserInput("");
    });
  }

  return (
    <SafeAreaView>
      <View>
        <Text style={{ fontSize: 18, margin: 20}} >
          Last User: <Text>{lastUser}</Text>
        </Text>
        <TextInput
          value={currentUserInput}
          onChangeText={setCurrentUserInput}
          placeholder="Current User"
          style={{
            padding: 20,
            borderWidth: 1,
            borderColor: "#ccc",
            margin: 20,
            backgroundColor: "#fff"
          }}
        />
        <TouchableOpacity onPress={handlePress} >
          <View style={{ padding: 20, margin: 20, backgroundColor: "orange" }}>
            {isSubmitting ? (
              <ActivityIndicator />
            ) : (
              <Text style={{ color: "#fff", textAlign: "center" }}>Submit</Text>
            )}
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;
