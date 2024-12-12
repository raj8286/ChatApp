import { v2 as cloudinary } from "cloudinary";
import { config } from "dotenv";

config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadOptions = {
  folder: "chat_app", // Organize uploads in a folder
  resource_type: "auto", // Auto-detect resource type
  quality: "auto", // Auto optimize quality
  fetch_format: "auto", // Auto select best format
  secure: true
};

export default cloudinary;