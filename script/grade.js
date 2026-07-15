function calculateGrade(){
    const subjects = ["HTML", "CSS", "JavaScript"];

    let totalScore = 0;
    for(let i = 0; i < subjects.length; i++){
        const subjectTitle = subjects[i];
        const userSubjectScore = prompt(`${subjectTitle}의 성적을 숫자로 입력하세요.`);
        const score = Number(userSubjectScore);

        if(Number.isNaN(score)){
            alert(`성적을 숫자로 입력하세요!`);
            i--;
            continue;
        }

        totalScore += score;
    }

    const avg = totalScore / 3;
    const studentResult = (avg >= 60);
    alert(`총점 : ${totalScore}점, 평균 : ${avg}, 결과 : ${studentResult ? "" : "불"}합격입니다!`);
}
