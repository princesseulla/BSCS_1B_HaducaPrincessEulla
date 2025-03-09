// If Else with Conditional Ternary Operators

let score = prompt("Input your score:");

let grade = score >= 97 `1.00 Excellent`;
            score >= 94 `1.25 Excellent`;
            score >= 91 `1.50 Excellent`;
            score >= 88 `1.75 Above Average`;
            score >= 85 `2.00 Average`;
            score >= 82 `2.25 Average`;
            score >= 79 `2.50 Below Average`;
            score >= 76 `2.75 Below Average`;
            score >= 75 `3.00 Below Average`;
            score >= 72 `4.00 Poor`;
            score >= 71 `5.00 Poor`;
let remarks;
   if(score >= 90) {
    remarks = "HIGH PASS, Candidate for Cum Laude";    
} else if (score >= 80) {
    remarks = "AVERAGE PASS";
} else if (score >= 75) {
    remarks = "LOW PASS";
} else {
    remarks = "FAILED, Needs Improvement";
}
console.log(`Result: \nYour equivalent Grade is "${grade}"\nFinal Remarks: ${remarks}`);