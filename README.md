# Design Den - designden.space
## Intro
build a react web app for a school called "The Design Den"
the homepage should have two buttons create an account and Login

## Account Types
There should be three user account types
1. Admin
2. staff
3. student

## Admin Dashboard
The admin dashboard have the following elements
1. Import/Export csv
    a. import courses
    b. import students
    c. import courses & students together
2. Create
    a. create class
    b. create student
    c. the ability to add a student to an existing class or a new class
3. View Progress
4. Forms

## Staff Dashboard
View everything cannot create

## Student Dashbaord
1. See Courses that they are enrolled in
2. See Certificate progress

## User profiles
1. Name
2. Email
3. Student ID
4. Avatar
5. Account Type
6. only users on a certain domain are able to create accounts

## Courses
Filters
1. Year
2. Term
3. Course

### Course Content
Each course is comprised of a series of forms (quizzes) which the student must take. Each form (quiz) certifies the student to operate the tool. Upon completion of the the form each student should receive a green check mark that is displayed in the student and admin dashboard that they have completed that form/quiz task. 

### Course View
1. In the course view admin and staff should be able 
2. to see all students enrolled in the course
3. See all students progress at a glance. 
4. Each form compeleted taht semester earns a green check. Each form uncompleted is a ? and each form that fails is a red X

### Forms/Quizzes
1. The ability to design and create forms
2. All standard HTML Form elements needed including file upload
3. Include a signature field where students can sign using mouse/pen/finger their name