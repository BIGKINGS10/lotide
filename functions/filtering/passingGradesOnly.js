const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];

grades.filter((grade) => {
  if (grade >= 70) {
    console.log(`Congratulations! Grade is ${grade}`)
  }
})