// Student 1 (information)
const firstName1 = "Princess";
const middleName1 = "Pedrozo";
const lastName1 = "Haduca";
const birthdate1 = "Julu 12, 2006";
const birthplace1 = "Damacuag Sta. Lucia Ilocos Sur, 2712";
const address1 =  "Damacuag Sta. Lucia Ilocos Sur, 2712";
const course1 = " Bachelor of Scince in Computer Science";
const dreamJob1 = " Software Engineer";

// Student 2 (Classmate)
const firstName2 = "Lariane";
const middleName2 = "Ancheta";
const lastName2 = "Arquero";
const birthdate2 = "November 19, 2005";
const birthplace2 = "Baluarte, Salcedo Ilocos Sur, 2711";
const address2 =  "Baluarte, Salcedo Ilocos Sur, 2711";
const course2 = " Bachelor of Scince in Computer Science";
const dreamJob2 = " Software Engineering";

// Student 3(Classmate)
const firstName3 = "Mariane";
const middleName3 = "Ingen";
const lastName3 = "Belen";
const birthdate3 = "May 23, 2006";
const birthplace3 = "La Trinidad Benguet, 2601";
const address3 =  "San Andress, Candon City Ilocos Sur, 2720";
const course3 = " Bachelor of Scince in Computer Science";
const dreamJob3 = " Software Engineer";

// This the function to format and print student details
function printStudentInfo(firstName,middleName,lastName,birthdate,birthplace,address,course,dreamJob) {
 
console.log(`[${firstName.toUpperCase()} ${middleName.toUpperCase()} ${lastName.toUpperCase()} was born [${birthdate}] at [${birthplace}], and currently living at [${address}] `);
console.log(`[${firstName.toLowerCase()} ${middleName.toLowercase()} ${lastName.toLowerCase()}] is taking up [${course}] and dreams to be [${dreamJob}] after graduation. \n`);
}

// Printing details information of students 
printStudentInfo(firstName1, middleName1, lastName1, birthdate1, birthplace1, address1, course1, dreamJob1);
printStudentInfo(firstName2, middleName2, lastName2, birthdate2, birthplace2, address2, course2, dreamJob2);
printStudentInfo(firstName3, middleName3, lastName3, birthdate3, birthplace3, address3, course3, dreamJob3);



