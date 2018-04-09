Requirement:
1. You need to install docker in your machine in order to launch this application.
Step to Run application:
 1. sh Startup.sh //This command with generate image for frontend and backend 
 2. docker-compose up //This command will run the application backend fail to connect with mysql. Please CTRL+C then again enter this command after that i will found. I am also looking into this problem i will fix it.
 3. Then frontend is running of localhost:9000
 4. Then backend is running of localhost:8080 
    EndPoints:  
        1. /api/getlogs
        2. /api/sendsms
        3. /api/delete/{id}
        4./api/deleteall
 4. Then kannel rest is running of localhost:13013