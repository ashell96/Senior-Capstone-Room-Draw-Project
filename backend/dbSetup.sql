# Run this to setup the database


DROP DATABASE housing;
CREATE DATABASE housing;
USE housing;

CREATE TABLE room (
  complex VARCHAR(20) NOT NULL,
  house VARCHAR(20) NOT NULL,
  room_number VARCHAR(20) NOT NULL,
  PRIMARY KEY (complex,house,room_number)
);

CREATE TABLE term (
    term_code INT NOT NULL PRIMARY KEY, # usually 20171, 20172, 20173, 20181, etc
    term_name VARCHAR(30) NOT NULL
);

CREATE TABLE application (
  app_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  app_name VARCHAR(50) NOT NULL,
  app_open DATETIME NOT NULL,
  app_close DATETIME NOT NULL,
  app_type VARCHAR(20) NOT NULL,
  app_term INT NOT NULL,
  FOREIGN KEY (app_term) REFERENCES term(term_code)
);

CREATE TABLE student (
  student_id INT NOT NULL PRIMARY KEY,
  first_name VARCHAR(20) NOT NULL,
  last_name VARCHAR(20) NOT NULL,
  class_standing INT NOT NULL, # 0 (freshmen) through 3(senior)
  email VARCHAR(30) NOT NULL UNIQUE,
  phone VARCHAR(30) NOT NULL
);

CREATE TABLE submission (
  submission_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  primary_student_id INT NOT NULL,
  submission_date DATETIME NOT NULL DEFAULT NOW(),
  app_id INT NOT NULL, 
  room VARCHAR(30),
  sub_status VARCHAR(30),
  FOREIGN KEY (primary_student_id) REFERENCES student(student_id),
  FOREIGN KEY (app_id) REFERENCES application(app_id)
);


CREATE TABLE request (
  request_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  requester_id INT NOT NULL,
  requestee_id INT NOT NULL,
  submission_id  INT NOT NULL,
  request_status VARCHAR(30), # pending, approved, denied
  FOREIGN KEY (requester_id) REFERENCES student(student_id),
  FOREIGN KEY (requestee_id) REFERENCES student(student_id),
  FOREIGN KEY (submission_id) REFERENCES submission(submission_id)
);

CREATE TABLE submissions_requests (
    submission_id INT NOT NULL,
    request_id INT NOT NULL,
    FOREIGN KEY (submission_id) REFERENCES submission(submission_id),
    FOREIGN KEY (request_id) REFERENCES request(request_id)
);


## Test data


INSERT INTO term VALUES (20172, "Spring 2017 Room Draw");
INSERT INTO term VALUES (20162, "Spring 2016 Room Draw");

INSERT INTO application (app_name,app_open, app_close, app_type, app_term)
VALUES ('Squatting Fall 2018','2018-11-26 00:00:00','2012-11-29 00:00:00', "squatting",20172);
INSERT INTO application (app_name,app_open, app_close, app_type, app_term)
VALUES ('Omega Fall 2018','2018-11-26 00:00:00','2012-11-29 00:00:00', "omega",20172);


INSERT INTO student VALUES (1274222, "Ray","Berger",3,"rlberger@eckerd.edu","1 800 411 PAIN");
INSERT INTO student VALUES (1274653, "Craig","Reynolds",3,"rlbedrger@eckerd.edu","1 800 411 PAIN");
INSERT INTO student VALUES (1274768, "Bethany","Moss",3,"rlbereger@eckerd.edu","1 800 411 PAIN");
INSERT INTO student VALUES (1274357, "Joanne","Simon",3,"rlberager@eckerd.edu","1 800 411 PAIN");
INSERT INTO student VALUES (1274132, "Wilbur","Daniels",3,"rlbcerger@eckerd.edu","1 800 411 PAIN");
INSERT INTO student VALUES (1274765, "Wilbert","Mendoza",3,"rlbeerger@eckerd.edu","1 800 411 PAIN");
INSERT INTO student VALUES (1274735, "Dewey","Holt",3,"rlbergaer@eckerd.edu","1 800 411 PAIN");
INSERT INTO student VALUES (1274456, "Woodrow","Armstrong",3,"rlbearger@eckerd.edu","1 800 411 PAIN");

INSERT INTO room VALUES ("Omega","","101");
INSERT INTO room VALUES ("Omega","","103");
INSERT INTO room VALUES ("Alpha","Gershwin","22");
INSERT INTO room VALUES ("Beta","Darwin","11");

INSERT INTO submission (primary_student_id, app_id, room, sub_status)
VALUES (1274222, 1, "Alpha Beta 3", "pending");
INSERT INTO submission (primary_student_id, app_id, room, sub_status)
VALUES (1274768, 1, "Omega 300", "pending");
INSERT INTO submission (primary_student_id, app_id, room, sub_status)
VALUES (1274765, 1, "Kappa Morris 1", "pending");

INSERT INTO request (requester_id, requestee_id, submission_id, request_status)
VALUES (1274222, 1274132, 1, "pending");
INSERT INTO request (requester_id, requestee_id, submission_id, request_status)
VALUES (1274768, 1274735, 1, "pending");
INSERT INTO request (requester_id, requestee_id, submission_id, request_status)
VALUES (1274765, 1274456, 1, "pending");

INSERT INTO submissions_requests VALUES (1,1);
INSERT INTO submissions_requests VALUES (2,2);
INSERT INTO submissions_requests VALUES (3,3);