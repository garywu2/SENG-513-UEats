# SENG-513-UEats

SENG 513 Final Projects UEats 2022-2023

UEats is a React + Express application that helps coordinate students with food purchases from the University of Calgary. It helps bring convience to students as they can skip lines and pickup their meals at their convience.

## Development

### Dependencies

Dependencies that are needed to run our project will first involve the files themselves. \
To get them you were need to clone our repository through running the following command:
```
git clone https://github.com/garywu2/SENG-513-UEats.git
```
Once this is done, you will also need to install MongoDB on your computer to use our database https://www.mongodb.com/docs/manual/installation/. There are many great tutorials online to help you with this depending on your OS. We also recommend installing MongoDB Compass as well, however not strictly necessary.

You will also need to install a version <= 16.10 on your computer https://nodejs.org/en/download/ Again there are many great tutorials online that can help you with installing this depending on your OS.

Lastly, you will also need to create an add a .env file to the root of the directory in order to have access to our firebase authentication portion of our application. We have included these ENV values in the final report of our presentation as it is unsafe to include them in a public Github repo.

### Running the application

For the first time running the application, you will need to run the following command on the root of the directory
``` 
npm i
```
then cd into the server folder and run 
```
npm i
npm run populate
```
These commands will install all the dependencies that are required for our project as well as populate the database with mock data

Then to run both the server and client, you can run the following command in the root directory:

```
npm start
```

This will run the the client on localhost:3000 and run the server on localhost:5000

### Logging into the application 

Once on localhost:3000

You can sign up and create an account or use the following accounts that were creating during the populatioin of the database 
``` 
Customer
email: ueats@testmail.com
password: password

Vendor
email: steve@testmail.com
password: password

Admin
email: smith@testmail.com
password: password
```

### Alternative methods to run the application

Optionally you can also run the server and client in two seperate terminals through running the following command in the root directory
```
npm run startClient
```
This command will start the client \
Then in a seperate terminal running the following command in the server directory
```
npm run dev-server
```
This will start up the server aspect of the application

Lastly, if you would like to reset the data in the DB, you can simply drop the entire database and run the following command to repopulate it
### populating the database

```
npm run populate
```

Please feel free to reach out to any of our group members if any assistance is needed in order to run the application!