A small app that will help faculty see students and desk setups

Run npm run json-server to start json server for data. 
App starts a JSON server on port 5000 to grab data. Using mock Async await calls to bring in data. 


Tests that need to be written:
MAIN PAGE
If main page Container gets displayed
if buttons on main page component gets displayed
if buttons contain proper text on main page component 
-----
upon clicking on name button show dates for Teacher
upon clicking on name button show dates for Custodial Staff

TEACHER PAGE
Teacher page Container is rendered
teacher page component contains room number
teacher page component has signout button
teacher page component contains 8 desks displayed
teacher page component contains kids present component
--- kid present component has kids names 
-- if no kids are present place "N/A"
teacher page component contains kids absent component
--- kid present component has kids name
---if no kids are absent place "N/A"
clickon on student link shows student component

CUSTODIAL PAGE
Custodial page Container is rednered
custodial page component contains room number
custodial page component has signout button
custodial page component contains 8 desks displayed
custodial page component contains desk location component
clicking on desk link shows desk component

STUDENT PAGE
-student ID
-student Bio
-student history 
-student grades

DESK PAGE
-desk ID
-desk purchase date
-repairs to desk