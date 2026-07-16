function calculateGrade(){
    var subjects = ["HTML", "CSS", "JavaScript"];

    var total = 0;
    for(let i = 0; i < subjects.length; i++){
        const subjectTitle = subjects[i];
        const userSubjectScore = prompt(`${subjectTitle}의 성적을 숫자로 입력하세요.`);
        const score = Number(userSubjectScore);

        if(Number.isNaN(score)){
            alert(`성적을 숫자로 입력하세요!`);
            i--;
            continue;
        }

        total += score;
    }

    const avg = total / 3;
    const studentResult = (avg >= 60);
    const grade = getGrade(avg);
    alert(`총점 : ${total}점, 평균 : ${avg}, 등급 : ${grade}, 결과 : ${studentResult ? "" : "불"}합격입니다!`);
}

function getGrade(avg){
    if(avg >= 90) return "A";
    if(avg >= 80) return "B";
    if(avg >= 70) return "C";
    if(avg >= 60) return "D";
    return "F";
}
