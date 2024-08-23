import config from "../config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    
    databases;
    bucket;
    
    constructor(){
        this.client = new Client();
        this.client
        .setEndpoint(config.appwriteEndpoint)
        .setProject(config.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({Title, image, Content,slug}){
        //console.log("Creating post with data:", { Title, Content, featuredImage, status, userID });
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionId,
                slug,
                {
                    Title,
                    Content,
                    image,
                }
            )
        } catch (error) {
            console.error("Appwrite service :: createPost :: error", error.message);
            throw new Error("Appwrite serive :: createPost :: error", error.message);
        }
    }

    async updatePost({Title, image, Content,slug}){
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionId,
                slug,
                {
                    Title,
                    Content,
                    image,
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: updatePost :: error", error);
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            throw new Error("Appwrite serive :: deletePost :: error", error.message);
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionId,
                slug
            
            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            return false
        }
    }

    async getPosts(){
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseID,
                config.appwriteCollectionId,
                

            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }

    // file upload service

    async uploadFile(file){
        // const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB limit
        // if (file.size > MAX_FILE_SIZE) {
        //     throw new Error("File size not allowed. Maximum allowed size is 5MB.");
        // }

        try {
            return await this.bucket.createFile(
                config.appwriteBucketID,
                ID.unique(),
                file
            )
        } catch (error) {
            throw new Error("Appwrite serive :: uploadFile :: error", error.message);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                config.appwriteBucketID,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
    }

    getFilePreview(fileId){
        try {
            return this.bucket.getFilePreview(
                config.appwriteBucketID,
                fileId
            )
        } catch (error) {
            throw new Error("Appwrite serive :: getFilePreview :: error", error.message);
        }
    }
}


const Blogservice = new Service()
export default Blogservice