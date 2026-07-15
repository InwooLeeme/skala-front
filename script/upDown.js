function startUpDownGame() {
    const computerNum = Math.floor((Math.random() * 50) + 1);
    let cnt = 0;

    while (true) {
        const userInput = prompt("1부터 50 사이의 숫자 중 컴퓨터가 생각한 숫자는 무엇일까요?");
        if(userInput === null) {
            alert("게임을 취소했습니다.");
            break;
        }
        const userNum = Number(userInput);
        if(userNum < 1 || userNum > 50 || Number.isNaN(userNum)) {
            alert("1부터 50 사이의 숫자를 입력해주세요.");
            continue;
        }
        cnt++;
        if(userNum > computerNum) {
            alert("Down!");
        } 
        else if(userNum === computerNum) {
            alert(`축하합니다! ${cnt}번 만에 맞추셨습니다.`);
            break;
        } 
        else{
            alert("Up!");
        }
    }
}
