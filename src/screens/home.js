import React from "react";
import { SafeAreaView, Text, StyleSheet, Button, Image, ScrollView } from "react-native";
import { Video } from 'expo-av';
import * as ImagePicker from 'expo-image-picker'

export const HomeScreen = props => {
  const [isPermitted, setIsPermitted] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(null);
;
  React.useEffect(() => {
    ImagePicker.getCameraPermissionsAsync().then(({ status}) => {
      if(status === 'granted') {
        setIsPermitted(true);
      }
      if(status !== 'granted') {
        ImagePicker.requestCameraRollPermissionsAsync().then(({ status: requestStatus }) => {
          if(requestStatus === 'granted') {
            setIsPermitted(true);
          }
        })
      }
    })
  }, []);

  function triggleImagePicker() {
    ImagePicker.launchImageLibraryAsync().then(({ uri }) => {
      setSelectedImage(uri)
    });
  }

  return (
    <ScrollView>
      <Text
        style={styles.link}
        onPress={() =>
          props.navigation.navigate("Browser", {
            uri: "https://www.google.com"
          })
        }
      >
        Go to google
      </Text>
      <Text
        style={styles.link}
        onPress={() =>
          props.navigation.navigate("Browser", {
            uri: "https://www.github.com"
          })
        }
      >
        Go to github
      </Text>
      <Video source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}} style={{ width: '100%', height: 300 }} shouldPlay volume={1.0} isMuted={false} useNativeControls isLooping />
      {isPermitted ? <Button title='Select Image From Library' onPress={triggleImagePicker} /> : <Text>Camera Permission not supported</Text>}
      {selectedImage && <Image source={{ uri: selectedImage }} style={{ width: '100%', height: 400}}/>}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  link: {
    color: "blue",
    margin: 30
  }
});

export default HomeScreen;
