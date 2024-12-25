document.addEventListener("DOMContentLoaded", function () {
  let totalGradePointsSem5 = 0;

  function isValidGrade(grade) {
    const validGrades = [
      "EX",
      "AA",
      "AB",
      "BB",
      "BC",
      "CC",
      "CD",
      "DD",
      "DE",
      "EE",
    ];
    return validGrades.includes(grade);
  }

  function showValidationError(message) {
    alert(message); // Basic alert for validation errors
  }

  function calculateSGPA(totalPoints, totalCredits) {
    return totalPoints / totalCredits;
  }

  function calculateCGPA5() {
    const gradePoints = {
      EX: 10,
      AA: 9,
      AB: 8.5,
      BB: 8,
      BC: 7.5,
      CC: 7,
      CD: 6.5,
      DD: 6,
      DE: 5.5,
      EE: 5.0,
    };

    let grades = [];
    for (let i = 1; i <= 7; i++) {
      let grade = document
        .getElementById(`subject${i}-5`)
        .value.trim()
        .toUpperCase();
      if (!isValidGrade(grade)) {
        showValidationError(`Invalid grade entered for subject ${i} in Sem-5.`);
        return;
      }
      grades.push(gradePoints[grade]);
    }

    let totalSemPoints =
      parseFloat(document.getElementById("gradePoints5").value) || 0;
    if (isNaN(totalSemPoints) || totalSemPoints < 0) {
      showValidationError("Invalid grade points entered for Sem-4.");
      return;
    }

    let totalPointsSem5 =
      grades[0] * 4 +
      grades[1] * 4 +
      grades[2] * 4 +
      grades[3] * 3 +
      grades[4] * 3 +
      grades[5] * 2 +
      grades[6] * 2;
    let sgpa = calculateSGPA(totalPointsSem5, 22); // Total credits for Sem-5
    totalGradePointsSem5 = totalSemPoints + totalPointsSem5;
    let cgpa = totalGradePointsSem5 / 106;

    document.getElementById("sgpaValue5").innerText = sgpa.toFixed(2);
    document.getElementById("cgpaValue5").innerText = cgpa.toFixed(2);
    document.getElementById("gradePointsDisplay5").innerText = totalPointsSem5;
    document.getElementById("totalGradePointsDisplay5").innerText =
      totalGradePointsSem5;
  }

  function calculateCGPA6() {
    const gradePoints = {
      EX: 10,
      AA: 9,
      AB: 8.5,
      BB: 8,
      BC: 7.5,
      CC: 7,
      CD: 6.5,
      DD: 6,
      DE: 5.5,
      EE: 5.0,
    };

    let grades = [];
    for (let i = 1; i <= 7; i++) {
      let grade = document
        .getElementById(`subject${i}-6`)
        .value.trim()
        .toUpperCase();
      if (!isValidGrade(grade)) {
        showValidationError(`Invalid grade entered for subject ${i} in Sem-6.`);
        return;
      }
      grades.push(gradePoints[grade]);
    }

    let totalPointsSem6 =
      grades[0] * 4 +
      grades[1] * 4 +
      grades[2] * 4 +
      grades[3] * 3 +
      grades[4] * 3 +
      grades[5] * 3 +
      grades[6] * 2;
    let sgpa = calculateSGPA(totalPointsSem6, 23); // Total credits for Sem-6
    let cgpa = (totalPointsSem6 + totalGradePointsSem5) / 129;

    document.getElementById("sgpaValue6").innerText = sgpa.toFixed(2);
    document.getElementById("cgpaValue6").innerText = cgpa.toFixed(2);
    document.getElementById("gradePointsDisplay6").innerText = totalPointsSem6;
    document.getElementById("totalGradePointsDisplay6").innerText =
      totalPointsSem6 + totalGradePointsSem5;
  }

  document
    .querySelector("#cgpaForm5 button")
    .addEventListener("click", calculateCGPA5);
  document
    .querySelector("#cgpaForm6 button")
    .addEventListener("click", calculateCGPA6);
});
