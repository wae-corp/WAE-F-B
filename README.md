--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--
# WAE-FNB Launch Page Dependency Installation Instructions  

This project is a Next.js-based landing page with a form that submits responses to a Google Sheet.

# 📌 Prerequisites
Ensure you have the following installed:  

Node.js (LTS version recommended)  

pnpm or npm/yarn

# 🚀 Getting Started
# 1️⃣ Install Dependencies
npm install --legacy-peer-deps  

 OR  
 
pnpm install --legacy-peer-deps  

 OR  
 
yarn install --legacy-peer-deps

# 2️⃣ Configure Environment Variables
The required environment variables can be found in the wae-fnb-launch-page-responses-794ac3419e61.json file located in the root directory.  

Extract the necessary keys from this file and add them to a .env.local file:  

GOOGLE_SHEETS_ID=your_google_sheets_id  

GOOGLE_SERVICE_ACCOUNT_EMAIL=your_service_account_email  

GOOGLE_PRIVATE_KEY=your_private_key  

Replace your_google_sheets_id, your_service_account_email, and your_private_key with actual values from the JSON file.

# 3️⃣ Run the Development Server
npm run dev  

OR  

pnpm run dev  

OR  

yarn dev  

Your app will be available at http://localhost:3000.

# 📝 API Endpoint
The form submits data to:  

POST /api/submit

Request Body
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "company": "Acme Corp",
  "message": "Looking forward to working together!"
}

# 🛠️ Troubleshooting
Module errors?  
Run rm -rf node_modules && npm install --legacy-peer-deps.  

Environment variable issues? Ensure .env.local exists and contains valid values.  

Google Sheets errors? Verify API permissions and credentials.

# 📜 License
This project is licensed under MIT License.

# Result
The responses will be recorded in a google sheet. Here’s the link to the sheet:  

[WAE F&B launch page form responses](https://docs.google.com/spreadsheets/d/1m8E5-gsBuGusA13GMOQFNYUuuASA2doMYDYvuz_lpNo/edit?usp=sharing)


All the permissions (if required) can be enabled through wae.marktech@gmail.com


