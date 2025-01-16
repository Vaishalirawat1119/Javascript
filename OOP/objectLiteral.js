// Object Literal

const college = {
    stuName: "John",
    stuRollNo: 22,
    stuCourse: "BCA",
    isEnrolled: true,
    getStudentDetails: function(){
        // console.log("Got user details from DB");
        console.log(`Student Name: ${this.stuName}`);
        // console.log(this);
        
    }
};
// console.log(college);
console.log(college.getStudentDetails());
// console.log(this);