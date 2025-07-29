import { Account, Client } from "react-native-appwrite";

const client = new Client()
  .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!)
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!);

const account = new Account(client);
