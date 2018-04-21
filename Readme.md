## Requirement:
#####  You need to install docker in your machine in order to launch this application.


## 50M_msisdns992.zip Please extract this in backend in order to work with bulk sms.
### Step to Run application:
  ``` 
  1. sh Startup.sh // This command with generate image for frontend and backend 

 2. docker-compose up This command will run the application backend fail to connect with mysql. Please CTRL+C then again enter this command after that i will found. I am also looking into this problem i will fix it.

 3. Then frontend is running on localhost:9000

 4. Then backend is running on localhost:8080
    EndPoints:
        1. /api/getlogs
        2. /api/sendsms
        3. /api/delete/{id}
        4./api/deleteall
        5./api/startbulk
        6./api/stopbulk
        6./api/delivery

 4. Then kannel rest is running of localhost:13013 ```


 Kannel is throwing error while using dlr-storage=mysql.
 if i use sqlbox then it says not valid group identifier.

 I also tried with dlr-url but no luck it doesn't request dlr-url after message send.

 I spend around two day but i am not able to find the actual cause of this error.
