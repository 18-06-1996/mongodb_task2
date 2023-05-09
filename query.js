//1.Find all the topics and tasks which are thought in the month of October

db.topics.find({})

//2.Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020

db.topics.find({due_date:{$gt:new Date('2021-10-15'),$lt:new Date('2021-10-30')}}).count()

//3.Find all the company drives and students who are appeared for the placement.

db.company_drives.find({},{"user-id":1,"company_name":1})

//4.Find the number of problems solved by the user in codekata
db.codekata.find({},{"user-id":1,"no_of_problems_solved":1})

//5.Find all the mentors with who has the mentee's count more than 15
db.users.find({"mentor-id":1}).count()>15

//6.Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020

db.attendance.find({"present":false}).count()
db.task.find({"submitted":false}).count()



