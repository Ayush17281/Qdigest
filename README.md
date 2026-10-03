# About the Web-Application 

The Main Target Users are the Collage students who everyday waste their time due to long waiting at the collage work/hangout places. The Project Focuses on providing students latest info regarding the crowd/queue status at certain collage places, they coud see whether the crowd strength is High, Medium or Less, Estimated waiting time is also provided and number of seats available to rest are also provided. Users Presents at the Location can Update the details on the Web-app according to curent status.

# Overall it helps users decide whether they shold leave for a Particular place to get their work done / Decide priority to visit collage places so to save maximum time and get things done in less time than usuall. 

## Live Demo
https://qdigest.vercel.app/


# My Constraints 
Featherweight. The first load is under 150 KB in total (DevTools, Network tab, "transferred").
Due the Constraint i had to avoid using fancy animations, Google Fonts, Font Awsome, Bootstrap CDN i just used plain CSS whoich kept the first load around 477B = 0.4 kb far lesse than 150 kb 

# Greater Part 
In the Web Application i have a Feature to update the crowd condition at the listed Locations which i think is the most essential part, it provides users with the latest data/scenario at the locatins. It Also demonstrates that the Frontend -> Backend -> Database is successfully connected and the Database modifies as we do changes in it using PATCH Request.

# The Two Testers 

1. Got confused about whether the displayed queue information was up to date. I added the last updated time to each location.
2. I faced an issue where the deployed backend was unable to connect to MongoDB Atlas, causing the location cards to disappear. I fixed it by configuring the MongoDB Atlas network access and redeploying the backend. After that, the frontend successfully fetched the data from the database.


# Use of AI 
1. Learning the Deployment Process: I got stuck in Deploying the frontend(REACT) on Vercel and DB on MongoDB Atlas. 
2. I was not much Proficient in REACT SO i used AI to help me write REACT Code to generate UI Stable for both Mobile and Laptop.
3. Verify the Code wherever needed, debug it.



# What's missing  ?
1. User Login/Signup
2. Authentication (only emails that ends with vit.edu will be able to create account and use the Service).
3. Access to update the data is available for every use so the information might be misleading. 
4. Add all the collage places Mostly used by students.
5. Intigrate ML to predict future crowd.    
6. Insted of Manually counting/estimating crowd count it using Camera (Open CV)


# How to Run it ??

# How to Run

### 1. Clone the repository

git clone https://github.com/Ayush17281/Qdigest.git
cd Qdigest

### 2. Start the Backend

cd server
npm install
npm run dev

### 3. Start the Frontend

Open a new terminal:

cd Qdigest/client
npm install
npm run dev

Open the URL shown by Vite, usually:

http://localhost:5173

### 4. Environment Variables

Create a `.env` file inside the `server` folder:

MONGO_URL=your_mongodb_connection_string
PORT=5000

Make sure MongoDB is connected before running the backend.