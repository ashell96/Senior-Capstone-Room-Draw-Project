# API Guide



## API Todo
* Terms
* Applications
* Rooms
* Students
* Requests
* Submissions

### Terms
* GET - Get a list of terms
* POST - Add a new term

### Rooms
* GET - Return a list of rooms

### Applications
* GET - Return a list of available applications
* POST - Create a new application

### Submissions
* GET - Return a list of all submissions
* GET/studentemail - return all submissions associated with that student
* Post - Create a new submission

### Requests
These will probably not be accessible to user and only happen on server side

## Students
* POST - Register a new student


# Current API
## Get
* /rooms
* /terms
* /applications
* /students
* /submissions
* /applications/:applicationID
* /students/:email
* /submissions/:stubmissionID

## POST
* /