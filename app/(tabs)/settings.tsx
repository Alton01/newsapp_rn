import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

type Props = {};

const Page = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>THIS IS A DUMMY SCREEN.</Text>
      <Text style={styles.text}>NOTHING TO SEE HERE.</Text>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
    gap: 20,
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "600",
  },
});
