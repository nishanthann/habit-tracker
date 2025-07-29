import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

export default function AuthScreen() {
  const [isSignUp,setIsSignUp]=useState<boolean>(false);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "android" ? "padding" : "height"}
    >
      <View>
        <Text>{isCreate Account</Text>
        <TextInput
          label="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="example@gmail.com"
          mode="outlined"
        />

        <TextInput
          label="Password"
          autoCapitalize="none"
          keyboardType="email-address"
          mode="outlined"
        />

        <Button mode="contained">Sign Up</Button>
        <Button mode="text">Already have an account? Sign In</Button>
      </View>
    </KeyboardAvoidingView>
  );
}
