# VivproCodingChallenge
This repository holds the code for Vivpro Coding Challenge


## 1. Project Structure and Languages Used
**Backend**: Flask, Python\
**FrontEnd**: Angular, JavaScript, TypeScript, ngxDataTables, ngxCharts.

## 2. How to run
Clone the github repository.\
Open backend folder and run **pip install -r requirements.txt**. This command will download all the requirements. Then run **python app.py** this will spawn the flask server.

**There are two ways to run Frontend**
1. Follow this path **VivproCodingChallenge/music/dist/music** and double click **index.html** file in that folder. This is a prod build so we need no servers here.
2. Firstly, install the nodejs from https://nodejs.org/en/ . Then open music directory from the repo and run **npm i** this will install all the packages required for running the application. Then run **npm start** or **ng serve** this will spawn a development angular server in watch mode. This way of running things only helps you if you want to make changes in the code and see how the app behaves.\

Amazing now you have a working demo. I guess you are happy with what you see on screen.

## 3. Backend Process:
1. We started with preprocessing the json data and developed a song object out of each key. Run **python preprocessData.py** to perform the preprocessing stage again.
2. Then the data is again dumped in a json file.
3. We will be consuming both the files, if there is a query related to a specific feature original file will be used, in other case preprocessed file will be used.
4. Running **python app.py** will spawn the flask server we have three get routes here.\
  i. **/songs** with start and limit as query params. This is a paginated api which will return the limit elements starting from start. It also provides count, next, and previous URL's.\
  ii. **/feature** with key as querry param. Pass the required feature name as a response get the hashMap as a response.\
  iii. **/song** with key as querry param. This takes title as a key and return the single song instance.
  
## 4. FrontEnd:
1. We have song-card component for displaying single song info.
2. songs-list component to render paginated response with limit 10 and rating feature.
3. charts component to visualize data.
4. songs service file to make http calls
5. Unit testing with Jasmine and karma
6. run **npm run test-coverage** to run the unit test cases and get coverage report. Find the coverage report in the folder named coverage. Achieved 90% **coverage**.

## 6. What we achieved:
1.1 Data preprocessing and store inmemory.\

1.2.1 API to fetch normalized songs\
1.2.1 **Bonus** Pagination enabled\
1.2.2 Search based on title\
1.2.3 Added ratings column in preprocessing state. But doesn't created a route to update ratings.\
**Additional** --> Created route to fetch data related to specific feature.\

1.3.1 Implemented API requests\
1.3.2 Implemented Tabular view rendering\
1.3.3 Implemented paginated tabular view\
1.3.4 Implemented sorting functionality\
1.3.5 Implement Export to CSV functionality\
1.3.6 Allow users to search song based on Title\
1.3.7 Implemented rating functionality in UI but not connected to backend.\
1.3.8 Implemented scatter plot\
1.3.9 Not Implemented\
1.3.10 Implemented bar chart for acoustics and tempo valu
1.3.11 **Bonus** Unit Testcases\


## 5. What could be improved.
I am big believer of that fact that there is always room for improvement. This project is no exception. These are the things I would have concentrated if there is extra time.
1. Replacing the Json file with database in backend.
2. Write unit testing for backend.
3. Add user authentication for backend.
4. Create more resuable components in frontend.
5. Write more unit test cases.
