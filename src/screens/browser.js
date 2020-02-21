import React from "react";
import { SafeAreaView, Text, ActivityIndicator } from "react-native";
import { WebView } from "react-native-webview";

export const BrowserScreen = props => {
  const route = props.route.params.uri;

  return (
    <WebView
      source={{ uri: route }}
      startInLoadingState
      renderLoading={() => (
        <ActivityIndicator
          style={{ position: "absolute", top: 100, left: 200 }}
        />
      )}
    />
  );
};

export default BrowserScreen;
