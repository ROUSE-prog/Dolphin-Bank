import { account } from "../services/appwrite";

export async function signUp(email: string, password: string) {
  try {
    return await account.create("unique()", email, password);
  } catch (error) {
    console.error("Sign-up error:", error);
  }
}

export async function login(email: string, password: string) {
    try {
      // Check if a session already exists
      const session = await account.getSession("current").catch(() => null);
  
      if (session) {
        console.log("User is already logged in.");
        return session; // Avoid creating a duplicate session
      }
  
      return await account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.error("Login error:", error);
    }
  }

  export async function logout() {
    try {
      await account.deleteSessions(); // Clear all active sessions
      console.log("Logged out successfully.");
    } catch (error) {
      console.error("Logout error:", error);
    }
  }
  
