import { Client, Account } from "appwrite"; // ✅ Only import what's needed

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1") // Replace with your Appwrite endpoint
  .setProject("67a4e5e6002fe295ea06"); // Replace with your actual Project ID

export const account = new Account(client);

// ✅ Ensure we export only once
export { client, account };
