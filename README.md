work time: roughly 8 hours
# API endpoint: Usage and Installation

to install and use the api, clone this repository using preferred method.
afterwards, cd into the root directory and run the command npm install to install the required dependencies.
drag the .env file that was provided to you via email into the root directory and and use the command npm start to start the server. 

the server should now start at localhost:3000 , in order to interact with the server, you will have to use a service like Postman as there is no client to accept incoming data. 

if you are familiar with postman, you can skip reading the rest of this document.

head to postman.com, create an account and download the desktop agent, once in the web client for postman, create a request, navigate to the bar and enter the address you want to interact with, for instance http://localhost:3000/user/ in order to POST data to the users collection or get previous users.
Navigate to the body header under the address bar, select raw and JSON as your input methods, enter your desired data in the json format in the appropriate space, depending on your request you should see the results in the web address you used, for instance for a GET request, all users should be returned, for a POST request, details are shown on postman after a succesful request or can be seen in the database that you should have received an invite link for. 
