const conf = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_APPWRIE_PROJECT_ID),
  appwriteDatabaseId: String(import.meta.env.VITE_APPWRIE_DATEBASE_ID),
  appwriteCollectionId: String(import.meta.env.VITE_APPWRIE_COLLECTION_ID),
  appwriteBucketId: String(import.meta.env.VITE_APPWRIE_BUCKET_ID),
};

export default conf
