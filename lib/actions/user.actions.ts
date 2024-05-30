'use server';

import { createSessionClient } from "../appwrite";

export const signIn = async () => {
    try{
        // Mutation / Database / Make fetch
    } catch (error) {
        console.log('Error', error)
    }
}

export const signUp = async (userData: SignUpParams) => {
    try{
        // Create user Account
    } catch (error) {
        console.log('Error', error)
    }
}

// ... your initilization functions

export async function getLoggedInUser() {
    try {
      const { account } = await createSessionClient();
      return await account.get();
    } catch (error) {
      return null;
    }
  }
  