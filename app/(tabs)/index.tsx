import { useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <View style={styles.container}>
      {loading && (
        <ActivityIndicator size="large" style={styles.loading} />
      )}

      <WebView
        source={{ uri: "https://hexpro.com.br/" }}
        onLoadEnd={() => setLoading(false)}
        javaScriptEnabled
        domStorageEnabled
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  loading: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginLeft: -20,
    marginTop: -20,
    zIndex: 10,
  },
});
