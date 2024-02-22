class Student 
{
    constructor(firstName,lastName,studentID)   {
        this.firstName = firstName;
        this.lastName = lastName;
        this.studentID = studentID;
    }
    
    printFullName() {
        console.log("Welcome " + this.firstName + " " + this.lastName);
    }
    
    getStudentNumberLastTwoDigits(){
        return this.studentID.slice(-2);
        
    }

    nameComparisonOfStudentID(){
        let lengthOfName = this.firstName.length + this.lastName.length
        let lastTwoOfStudentID = this.getStudentNumberLastTwoDigits();
        let comparisonResult = (lengthOfName >= parseInt(lastTwoOfStudentID)) ? "greater or equal" : "less";

        console.log("The length of " + this.firstName + " " + this.lastName +" is " + comparisonResult + " of the last two digits of student ID (" + lastTwoOfStudentID + ")");
    }
    
} 

let studentA = new Student('Saul','Andrade', '887756385');
studentA.printFullName();
let lastTwoDigits = studentA.getStudentNumberLastTwoDigits();
console.log("Student's last two digits is " + lastTwoDigits);
studentA.nameComparisonOfStudentID();