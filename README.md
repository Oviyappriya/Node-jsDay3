Mentor-Student Relationship Management API
The Mentor-Student Relationship Management API is a comprehensive solution designed to streamline the administration of mentor-student relationships. It offers a suite of features for creating and managing mentors and students, assigning relationships, and retrieving information.

Quick Start Guide:

Our API server is conveniently hosted at: 
https://node-jsday3.onrender.com

1:Create Mentor (POST): Establish a new mentor profile.
---> Endpoint :  /mentors

2:Create Student (POST): Establish a new student profile
---> Endpoint :  /students

3:Assign Student to Mentor (POST): Link a student to a mentor, fostering a learning relationship.
---> Endpoint :  /:studentId 

4:Assign or Change Mentor for Student (PUT): Assign a new mentor to student
---> Endpoint :  /students/:studentId/mentor

5:Get All Students for a Mentor (GET): Retrieve a comprehensive list of all students under the guidance of a specific mentor.
---> Endpoint :  /:mentorId

6:Get Previously Assigned Mentor for a Student (GET): Access the historical data of a student's previously assigned mentor.
---> Endpoint :  /:studentId

Postman Documentation:
    https://documenter.getpostman.com/view/34113822/2sA3dvkstS
