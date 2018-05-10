var keyPairs = {
    "Do you smoke?": {
      "Absolutely Not": 0,
      "Occasionally or Socially": 1,
      "TODO Another one here": 2
    },
    "Do you object to a roommate who smokes?": {
      "No": 0,
      "Yes": 1
    },
    "Please describe your room.": {
      "Mostly messy": 0,
      "Somewhat cluttered": 1,
      "Generally neat and tidy": 2,
      "TODO seems like this is missing one": 3
    },
    "You're leaving for Eckerd tomorrow, you....": {
      "haven't even started packing!": 0,
      "still have a few last minute things to pack up.": 1,
      "have had your bags packed for weeks!": 2
    },
    "When do you usually go to bed?": {
      "Between 10pm - Midnight": 0,
      "After Midnight": 1
    },
    "On a typical weekend, when do you usually wake u": {
      "Between 10am - Noon": 0,
      "Before 10am": 1
    },
    "How often do you like to have friends in your ro": {
      "Seldom": 0,
      "Occasionally": 1,
      "Frequently": 2
    },
    "In your free time, what are you most likely foun": {
      "Binge-watching Netflix": 0,
      "Relaxing with friends": 1,
      "On some sort of outdoor adventure": 2
    },
    "You study best....": {
      "during the day.": 0,
      "in quiet.": 1,
      "with music.": 2,
      "in the evening.": 3,
      "after midnight.": 4
    },
    "Will you be an intercollegiate student athlete?": {
      "No": 0,
      "Yes": 1
    }
  }

function maxValue(obj){
    // Takes in an object from the key pairs and returns the max value
    let max = 0;
    let keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++){
        if(obj[keys[i]] > max){
            max = obj[keys[i]];
        }
    }
    return max;
}

function calculateCompatibility(student1, student2){
    if (arguments.length != 2 || student1 == undefined || student2 == undefined) throw "Didn't get two students";
    let questions = Object.keys(keyPairs);
    //console.log(questions);
    let score = 0; // from 0 to 1
    for(let i = 0; i < questions.length; i++){
        let q = questions[i]; // "Do you smoke?"
        let qValues = keyPairs[q]; // {"yes": 1, etc}
        let s1Answer = student1[q]; // "yes"
        let s2Answer = student2[q]; // "no"
        let v1 = qValues[s1Answer]; // 1
        let v2 = qValues[s2Answer]; // 0
        if (v1 == undefined || v2 == undefined) throw "Error: '" + s1Answer + "' not found in questions from key value pairs. \n Could be a hidden character";
        let answerDiff = Math.abs(qValues[s1Answer] - qValues[s2Answer]); // 0
                
        //debugger;
        let max = maxValue(qValues) + 1;
        //console.log(s1Answer, s2Answer);
        //console.log(qValues[s1Answer], qValues[s2Answer]);
        score += (max - answerDiff) / max;
        //console.log("max", max, ", score", score, "answer diff", answerDiff);
    }
    score = score/questions.length; // Device by number of questions to get score out of 1
    // /console.log("Score " + score);
    return score;
}

var students = [
    {
      "Student Type": "First Year Domestic",
      "Entry Term": "2017 Autumn",
      "Sex": "F",
      "Gender Identity": null,
      "Do you smoke?": "Absolutely Not",
      "Do you object to a roommate who smokes?": "Yes",
      "Please describe your room.": "Somewhat cluttered",
      "You're leaving for Eckerd tomorrow, you....": "still have a few last minute things to pack up.",
      "When do you usually go to bed?": "Between 10pm - Midnight",
      "On a typical weekend, when do you usually wake u": "Between 10am - Noon",
      "How often do you like to have friends in your ro": "Occasionally",
      "In your free time, what are you most likely foun": "Relaxing with friends",
      "You study best....": "in quiet.",
      "Will you be an intercollegiate student athlete?": "No",
      "If yes, which sport?": null,
      "Select three of the six housing options.": "Traditional Double Room, Traditional Corner Double Room*, Renovated Double Room*",
      "Traditional Co-Ed": "1st Choice",
      "All Female": "No Preference",
      "Animal Friendly": "No Preference",
      "Health and Wellness": "No Preference",
      "Gender Neutral": "No Preference",
      "I plan on bringing the following animal/small pe": "",
      "I object to a roommate who has one of the follow": "",
      "Do you have any physical limitations or allergie": "No",
      "If yes, please describe:": "",
      "Are there any new or currently enrolled students": "Yes"
    },
    {
      "Student Type": "First Year Domestic",
      "Entry Term": "2017 Autumn",
      "Sex": "F",
      "Gender Identity": null,
      "Do you smoke?": "Absolutely Not",
      "Do you object to a roommate who smokes?": "No",
      "Please describe your room.": "Somewhat cluttered",
      "You're leaving for Eckerd tomorrow, you....": "haven't even started packing!",
      "When do you usually go to bed?": "Between 10pm - Midnight",
      "On a typical weekend, when do you usually wake u": "Between 10am - Noon",
      "How often do you like to have friends in your ro": "Occasionally",
      "In your free time, what are you most likely foun": "Binge-watching Netflix",
      "You study best....": "with music.",
      "Will you be an intercollegiate student athlete?": "No",
      "If yes, which sport?": null,
      "Select three of the six housing options.": "Traditional Double Room, Renovated Double Room*, Sigma/West Lodge Triple Room*",
      "Traditional Co-Ed": "1st Choice",
      "All Female": "3rd Choice",
      "Animal Friendly": "2nd Choice",
      "Health and Wellness": "No Preference",
      "Gender Neutral": "No Preference",
      "I plan on bringing the following animal/small pe": "",
      "I object to a roommate who has one of the follow": "",
      "Do you have any physical limitations or allergie": "No",
      "If yes, please describe:": "",
      "Are there any new or currently enrolled students": "No"
    },
    {
      "Student Type": "First Year Domestic",
      "Entry Term": "2017 Autumn",
      "Sex": "F",
      "Gender Identity": null,
      "Do you smoke?": "Absolutely Not",
      "Do you object to a roommate who smokes?": "Yes",
      "Please describe your room.": "Somewhat cluttered",
      "You're leaving for Eckerd tomorrow, you....": "still have a few last minute things to pack up.",
      "When do you usually go to bed?": "Between 10pm - Midnight",
      "On a typical weekend, when do you usually wake u": "Before 10am",
      "How often do you like to have friends in your ro": "Seldom",
      "In your free time, what are you most likely foun": "Binge-watching Netflix",
      "You study best....": "in the evening.",
      "Will you be an intercollegiate student athlete?": "No",
      "If yes, which sport?": null,
      "Select three of the six housing options.": "Renovated Double Room*, Renovated Corner Double Room*, Iota Double Room*",
      "Traditional Co-Ed": "No Preference",
      "All Female": "3rd Choice",
      "Animal Friendly": "1st Choice",
      "Health and Wellness": "2nd Choice",
      "Gender Neutral": "No Preference",
      "I plan on bringing the following animal/small pe": "Dog (non-aggressive breed & under 40lbs)",
      "I object to a roommate who has one of the follow": "Tarantula",
      "Do you have any physical limitations or allergie": "No",
      "If yes, please describe:": "",
      "Are there any new or currently enrolled students": "No"
    },
    {
      "Student Type": "First Year Domestic",
      "Entry Term": "2017 Autumn",
      "Sex": "F",
      "Gender Identity": null,
      "Do you smoke?": "Absolutely Not",
      "Do you object to a roommate who smokes?": "Yes",
      "Please describe your room.": "Somewhat cluttered",
      "You're leaving for Eckerd tomorrow, you....": "still have a few last minute things to pack up.",
      "When do you usually go to bed?": "Between 10pm - Midnight",
      "On a typical weekend, when do you usually wake u": "Before 10am",
      "How often do you like to have friends in your ro": "Frequently",
      "In your free time, what are you most likely foun": "Relaxing with friends",
      "You study best....": "during the day.",
      "Will you be an intercollegiate student athlete?": "No",
      "If yes, which sport?": null,
      "Select three of the six housing options.": "Sigma/West Lodge Triple Room*",
      "Traditional Co-Ed": "3rd Choice",
      "All Female": "No Preference",
      "Animal Friendly": "2nd Choice",
      "Health and Wellness": "1st Choice",
      "Gender Neutral": "No Preference",
      "I plan on bringing the following animal/small pe": "",
      "I object to a roommate who has one of the follow": "Tarantula",
      "Do you have any physical limitations or allergie": "Yes",
      "If yes, please describe:": "I am allergic to rabbits, hamsters, guinea pigs, birds, cats, ducks, and ferrets.",
      "Are there any new or currently enrolled students": "No"
    },
    {
      "Student Type": "First Year Domestic",
      "Entry Term": "2017 Autumn",
      "Sex": "F",
      "Gender Identity": null,
      "Do you smoke?": "Absolutely Not",
      "Do you object to a roommate who smokes?": "Yes",
      "Please describe your room.": "Generally neat and tidy",
      "You're leaving for Eckerd tomorrow, you....": "have had your bags packed for weeks!",
      "When do you usually go to bed?": "Between 10pm - Midnight",
      "On a typical weekend, when do you usually wake u": "Before 10am",
      "How often do you like to have friends in your ro": "Frequently",
      "In your free time, what are you most likely foun": "On some sort of outdoor adventure",
      "You study best....": "in quiet.",
      "Will you be an intercollegiate student athlete?": "No",
      "If yes, which sport?": null,
      "Select three of the six housing options.": "Traditional Double Room, Traditional Corner Double Room*, Renovated Double Room*",
      "Traditional Co-Ed": "3rd Choice",
      "All Female": "No Preference",
      "Animal Friendly": "2nd Choice",
      "Health and Wellness": "1st Choice",
      "Gender Neutral": "No Preference",
      "I plan on bringing the following animal/small pe": "",
      "I object to a roommate who has one of the follow": "Cat",
      "Do you have any physical limitations or allergie": "No",
      "If yes, please describe:": "",
      "Are there any new or currently enrolled students": "No"
    },
    {
      "Student Type": "First Year Domestic",
      "Entry Term": "2017 Autumn",
      "Sex": "F",
      "Gender Identity": null,
      "Do you smoke?": "Absolutely Not",
      "Do you object to a roommate who smokes?": "Yes",
      "Please describe your room.": "Generally neat and tidy",
      "You're leaving for Eckerd tomorrow, you....": "still have a few last minute things to pack up.",
      "When do you usually go to bed?": "Between 10pm - Midnight",
      "On a typical weekend, when do you usually wake u": "Before 10am",
      "How often do you like to have friends in your ro": "Occasionally",
      "In your free time, what are you most likely foun": "On some sort of outdoor adventure",
      "You study best....": "in the evening.",
      "Will you be an intercollegiate student athlete?": "No",
      "If yes, which sport?": null,
      "Select three of the six housing options.": "Traditional Corner Double Room*, Renovated Double Room*, Renovated Corner Double Room*",
      "Traditional Co-Ed": "3rd Choice",
      "All Female": "1st Choice",
      "Animal Friendly": "2nd Choice",
      "Health and Wellness": "1st Choice",
      "Gender Neutral": "3rd Choice",
      "I plan on bringing the following animal/small pe": "",
      "I object to a roommate who has one of the follow": "Large Bird",
      "Do you have any physical limitations or allergie": "No",
      "If yes, please describe:": "",
      "Are there any new or currently enrolled students": "No"
    },
    {
      "Student Type": "First Year Domestic",
      "Entry Term": "2017 Autumn",
      "Sex": "M",
      "Gender Identity": null,
      "Do you smoke?": "Absolutely Not",
      "Do you object to a roommate who smokes?": "No",
      "Please describe your room.": "Mostly messy",
      "You're leaving for Eckerd tomorrow, you....": "still have a few last minute things to pack up.",
      "When do you usually go to bed?": "Between 10pm - Midnight",
      "On a typical weekend, when do you usually wake u": "Between 10am - Noon",
      "How often do you like to have friends in your ro": "Occasionally",
      "In your free time, what are you most likely foun": "Relaxing with friends",
      "You study best....": "in quiet.",
      "Will you be an intercollegiate student athlete?": "No",
      "If yes, which sport?": null,
      "Select three of the six housing options.": "Traditional Double Room, Traditional Corner Double Room*, Renovated Double Room*",
      "Traditional Co-Ed": "2nd Choice",
      "All Female": "No Preference",
      "Animal Friendly": "1st Choice",
      "Health and Wellness": "3rd Choice",
      "Gender Neutral": "No Preference",
      "I plan on bringing the following animal/small pe": "Small Bird",
      "I object to a roommate who has one of the follow": "",
      "Do you have any physical limitations or allergie": "No",
      "If yes, please describe:": "",
      "Are there any new or currently enrolled students": "Yes"
    },
    {
      "Student Type": "First Year Domestic",
      "Entry Term": "2017 Autumn",
      "Sex": "F",
      "Gender Identity": null,
      "Do you smoke?": "Absolutely Not",
      "Do you object to a roommate who smokes?": "Yes",
      "Please describe your room.": "Somewhat cluttered",
      "You're leaving for Eckerd tomorrow, you....": "still have a few last minute things to pack up.",
      "When do you usually go to bed?": "Between 10pm - Midnight",
      "On a typical weekend, when do you usually wake u": "Before 10am",
      "How often do you like to have friends in your ro": "Occasionally",
      "In your free time, what are you most likely foun": "Binge-watching Netflix",
      "You study best....": "in the evening.",
      "Will you be an intercollegiate student athlete?": "No",
      "If yes, which sport?": null,
      "Select three of the six housing options.": "Traditional Corner Double Room*, Renovated Double Room*, Renovated Corner Double Room*",
      "Traditional Co-Ed": "1st Choice",
      "All Female": "2nd Choice",
      "Animal Friendly": "No Preference",
      "Health and Wellness": "No Preference",
      "Gender Neutral": "No Preference",
      "I plan on bringing the following animal/small pe": "",
      "I object to a roommate who has one of the follow": "",
      "Do you have any physical limitations or allergie": "Yes",
      "If yes, please describe:": "I have asthma and cannot be with a student with an animal with fur",
      "Are there any new or currently enrolled students": "No"
    },
    {
      "Student Type": "First Year Domestic",
      "Entry Term": "2017 Autumn",
      "Sex": "F",
      "Gender Identity": null,
      "Do you smoke?": "Absolutely Not",
      "Do you object to a roommate who smokes?": "Yes",
      "Please describe your room.": "Somewhat cluttered",
      "You're leaving for Eckerd tomorrow, you....": "have had your bags packed for weeks!",
      "When do you usually go to bed?": "Between 10pm - Midnight",
      "On a typical weekend, when do you usually wake u": "Before 10am",
      "How often do you like to have friends in your ro": "Occasionally",
      "In your free time, what are you most likely foun": "On some sort of outdoor adventure",
      "You study best....": "in quiet.",
      "Will you be an intercollegiate student athlete?": "No",
      "If yes, which sport?": null,
      "Select three of the six housing options.": "Traditional Double Room, Renovated Double Room*, Sigma/West Lodge Triple Room*",
      "Traditional Co-Ed": "3rd Choice",
      "All Female": "1st Choice",
      "Animal Friendly": "No Preference",
      "Health and Wellness": "2nd Choice",
      "Gender Neutral": "No Preference",
      "I plan on bringing the following animal/small pe": "",
      "I object to a roommate who has one of the follow": "",
      "Do you have any physical limitations or allergie": "No",
      "If yes, please describe:": "",
      "Are there any new or currently enrolled students": "No"
    },
    {
      "Student Type": "First Year Domestic",
      "Entry Term": "2017 Autumn",
      "Sex": "M",
      "Gender Identity": null,
      "Do you smoke?": "Occasionally or Socially",
      "Do you object to a roommate who smokes?": "No",
      "Please describe your room.": "Somewhat cluttered",
      "You're leaving for Eckerd tomorrow, you....": "still have a few last minute things to pack up.",
      "When do you usually go to bed?": "Between 10pm - Midnight",
      "On a typical weekend, when do you usually wake u": "Between 10am - Noon",
      "How often do you like to have friends in your ro": "Seldom",
      "In your free time, what are you most likely foun": "On some sort of outdoor adventure",
      "You study best....": "after midnight.",
      "Will you be an intercollegiate student athlete?": "No",
      "If yes, which sport?": null,
      "Select three of the six housing options.": "Traditional Double Room, Traditional Corner Double Room*, Renovated Double Room*",
      "Traditional Co-Ed": "No Preference",
      "All Female": "No Preference",
      "Animal Friendly": "No Preference",
      "Health and Wellness": "No Preference",
      "Gender Neutral": "No Preference",
      "I plan on bringing the following animal/small pe": "",
      "I object to a roommate who has one of the follow": "",
      "Do you have any physical limitations or allergie": "No",
      "If yes, please describe:": "",
      "Are there any new or currently enrolled students": "No"
    },
    {
      "Student Type": "First Year Domestic",
      "Entry Term": "2017 Autumn",
      "Sex": "F",
      "Gender Identity": null,
      "Do you smoke?": "Absolutely Not",
      "Do you object to a roommate who smokes?": "No",
      "Please describe your room.": "Generally neat and tidy",
      "You're leaving for Eckerd tomorrow, you....": "still have a few last minute things to pack up.",
      "When do you usually go to bed?": "Between 10pm - Midnight",
      "On a typical weekend, when do you usually wake u": "Before 10am",
      "How often do you like to have friends in your ro": "Occasionally",
      "In your free time, what are you most likely foun": "On some sort of outdoor adventure",
      "You study best....": "in quiet.",
      "Will you be an intercollegiate student athlete?": "No",
      "If yes, which sport?": null,
      "Select three of the six housing options.": "Traditional Corner Double Room*, Iota Double Room*, Sigma/West Lodge Triple Room*",
      "Traditional Co-Ed": "No Preference",
      "All Female": "No Preference",
      "Animal Friendly": "No Preference",
      "Health and Wellness": "3rd Choice",
      "Gender Neutral": "No Preference",
      "I plan on bringing the following animal/small pe": "",
      "I object to a roommate who has one of the follow": "",
      "Do you have any physical limitations or allergie": "No",
      "If yes, please describe:": "",
      "Are there any new or currently enrolled students": "Yes"
    },
    {
      "Student Type": "Transfer Domestic",
      "Entry Term": "2017 Fall",
      "Sex": "F",
      "Gender Identity": null,
      "Do you smoke?": "Absolutely Not",
      "Do you object to a roommate who smokes?": "No",
      "Please describe your room.": "Somewhat cluttered",
      "You're leaving for Eckerd tomorrow, you....": "still have a few last minute things to pack up.",
      "When do you usually go to bed?": "After Midnight",
      "On a typical weekend, when do you usually wake u": "Between 10am - Noon",
      "How often do you like to have friends in your ro": "Occasionally",
      "In your free time, what are you most likely foun": "On some sort of outdoor adventure",
      "You study best....": "with music.",
      "Will you be an intercollegiate student athlete?": "No",
      "If yes, which sport?": null,
      "Select three of the six housing options.": "Traditional Corner Double Room*, Renovated Double Room*, Iota Double Room*",
      "Traditional Co-Ed": "1st Choice",
      "All Female": "No Preference",
      "Animal Friendly": "2nd Choice",
      "Health and Wellness": "No Preference",
      "Gender Neutral": "3rd Choice",
      "I plan on bringing the following animal/small pe": "",
      "I object to a roommate who has one of the follow": "Tarantula",
      "Do you have any physical limitations or allergie": "No",
      "If yes, please describe:": "",
      "Are there any new or currently enrolled students": "No"
    },
    {
      "Student Type": "Transfer International",
      "Entry Term": "2017 Fall",
      "Sex": "F",
      "Gender Identity": null,
      "Do you smoke?": "Absolutely Not",
      "Do you object to a roommate who smokes?": "Yes",
      "Please describe your room.": "Somewhat cluttered",
      "You're leaving for Eckerd tomorrow, you....": "still have a few last minute things to pack up.",
      "When do you usually go to bed?": "Between 10pm - Midnight",
      "On a typical weekend, when do you usually wake u": "Before 10am",
      "How often do you like to have friends in your ro": "Occasionally",
      "In your free time, what are you most likely foun": "Relaxing with friends",
      "You study best....": "in quiet.",
      "Will you be an intercollegiate student athlete?": "No",
      "If yes, which sport?": null,
      "Select three of the six housing options.": "Traditional Double Room, Traditional Corner Double Room*, Renovated Double Room*",
      "Traditional Co-Ed": "No Preference",
      "All Female": "No Preference",
      "Animal Friendly": "1st Choice",
      "Health and Wellness": "No Preference",
      "Gender Neutral": "No Preference",
      "I plan on bringing the following animal/small pe": "",
      "I object to a roommate who has one of the follow": "",
      "Do you have any physical limitations or allergie": "No",
      "If yes, please describe:": "",
      "Are there any new or currently enrolled students": "No"
    },
    {
      "Student Type": "First Year Domestic",
      "Entry Term": "2017 Autumn",
      "Sex": "F",
      "Gender Identity": null,
      "Do you smoke?": "Occasionally or Socially",
      "Do you object to a roommate who smokes?": "No",
      "Please describe your room.": "Somewhat cluttered",
      "You're leaving for Eckerd tomorrow, you....": "still have a few last minute things to pack up.",
      "When do you usually go to bed?": "Between 10pm - Midnight",
      "On a typical weekend, when do you usually wake u": "Between 10am - Noon",
      "How often do you like to have friends in your ro": "Occasionally",
      "In your free time, what are you most likely foun": "Binge-watching Netflix",
      "You study best....": "in the evening.",
      "Will you be an intercollegiate student athlete?": "No",
      "If yes, which sport?": null,
      "Select three of the six housing options.": "Traditional Double Room, Renovated Double Room*, Iota Double Room*",
      "Traditional Co-Ed": "1st Choice",
      "All Female": "2nd Choice",
      "Animal Friendly": "No Preference",
      "Health and Wellness": "No Preference",
      "Gender Neutral": "3rd Choice",
      "I plan on bringing the following animal/small pe": "",
      "I object to a roommate who has one of the follow": "",
      "Do you have any physical limitations or allergie": "No",
      "If yes, please describe:": "",
      "Are there any new or currently enrolled students": "Yes"
    }
  ];

//calculateCompatibility(students[0], students[1]);

/*
for (let i = 0; i < students.length; i++){
    let question = "Do you smoke?";
    let answer = students[i]["Do you smoke?"];
    let quant = keyPairs[question][answer];
    console.log("Student " + i);
    printStudent(students[i]);
}
*/



function calculatePopCompat(arr){
    let total = 0;
    for (let i = 0; i < arr.length; i+=2){
        total += calculateCompatibility(students[arr[i]],students[arr[i+1]]);
    }
    total /= arr.length/2;
    //console.log("avg compat: " + total);
    return total;
}



var curPairings = [4,5,2,3,7,1,6,0,8,9,10,13,12,11,   4,5,2,3,7,1,6,0,8,9,10,13,12,11];
for (let i = 0; i < 10000; i++){
    let newArr = curPairings.slice(0);
    swap(newArr);
    swap(newArr);
    if (calculatePopCompat(curPairings) < calculatePopCompat(newArr)){
        curPairings = newArr;
        console.log(i + " New guy!", calculatePopCompat(newArr));
    }
}

function swap(arr){
    // Swaps two random values in array;
    let rand1 = Math.floor(Math.random() * arr.length); 
    let rand2 = Math.floor(Math.random() * arr.length);

    let temp = arr[rand1];
    arr[rand1] = arr[rand2];
    arr[rand2] = temp;
}


function printStudent(studentObj){
    let s = studentObj;
    let keys = Object.keys(s);
    for (let i = 0; i < keys.length; i++){
        let question = keys[i];
        let answer = s[question];
        let quant = keyPairs[question];
        if (quant != undefined){
            quant = quant[answer];
        }
        console.log(`\tQuestion: ${question}\t Quant: ${quant}\t Answer: ${answer}`)
    }
}