import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

const client = new Client()
  .setEndpoint(conf.appwriteUrl)
  .setProject(conf.appwriteProjectId);

const account = new Account(client);

async  createAccount({ email, password, name ,userAccount}) {
  try {
    const userAccount = await account.create(
      ID.unique(),
      email,
      password,
      name
    );

    if (userAccount) {
        // return userAccount;
        return this.login({ email, password ,userAccount });
    } else {
      return undefined;
    }
  } catch (error) {
    throw error;
  }
  async login({ email, password  }) {
        try {
          return  await account.createEmailSession(email, password);
         
        } catch (error) {
          throw error;
        }
      }
 async  getCurrentUser () {
  try {
    return await account.get();
  } catch (error) {
    throw error;
  }
 }
}



// export default createAccount;

const authService = new AuthService();
export default authService;
