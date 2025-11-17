import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// INPUT from user
let userInput = "   my   file   name   .js   ";

// 1. Trim spaces + collapse multiple spaces
let cleaned = userInput.trim().replace(/\s+/g, " ");

// 2. Remove .js (case-insensitive)
cleaned = cleaned.replace(/\.js$/i, "");

// 3. Replace spaces with underscores (optional)
let finalName = cleaned.replace(/ /g, "_");

// 4. Add .js back to create file
let filePath = path.join(__dirname, finalName + ".js");

// 5. Create file
fs.writeFileSync(filePath, "// File created automatically\n");

console.log("Created:", filePath);
