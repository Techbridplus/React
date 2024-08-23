import config from "../config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  constructor() {
    this.client = new Client();
    this.client
      .setEndpoint(config.appwriteEndpoint)
      .setProject(config.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({name,email,password}) {
    try {
        const userAccount= await this.account.create(ID.unique(),email, password, name);
        if(userAccount){
            return this.login({email,password});
        }else{
            return userAccount;
        }

        } catch (error) {
          throw error;

  }
}

  async login({ email, password }) {
    try {
        const Session=await this.account.createEmailPasswordSession(email,password);
        console.log('Session:',Session);
        return Session;
    } catch (error) {
      throw error;
    }
}
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      throw new Error("Error while fetching user", error);
    }
  }
  async logout() {
    try {
      return await this.account.deleteSession("current");
    } catch (error) {
      throw error;
    }
  }
}

const authService = new AuthService(); 
export default authService;