import { Client, Account } from "appwrite";

const client = new Client();
client.setEndpoint("https://cloud.appwrite.io/v1") // Your Appwrite endpoint
      .setProject("67a4e5e6002fe295ea06"); // Replace with your Appwrite Project ID

const account = new Account(client);

export { account };
