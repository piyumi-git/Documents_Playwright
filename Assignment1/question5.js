
function calculateAverage(scores){
    let sum = 0;
    for(let i = 0; i < scores.length; i++){
        sum += scores[i];
    }
    return sum / scores.length;
}

function createStudentReport(name, scores) {
     let average = calculateAverage(scores);
     let grade;  

     if (average >= 90) grade = 'A';
     else if (average >=80) grade = 'B';
     else if(average >=70) grade = 'C';
     else if (average >=60) grade = 'D';
     else grade = 'F';

    
        let passed = grade !== 'F';
        return {
            name:name,
            scores: scores,
            average: average,
            grade: grade,
            passed: passed
        };

}

let student1 = createStudentReport("Ryan", 85,100,69,44,90);
let student2 = createStudentReport("Keyan", 95,84,73,22,60);

console.log(student1);
console.log(student2);
