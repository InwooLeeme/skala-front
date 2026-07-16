function startRpsGame() {
    const choices = ["가위", "바위", "보"];
    let win = 0;
    let draw = 0;
    let lose = 0;

    while (true) {
        const userInput = prompt("가위 / 바위 / 보 중 하나를 입력하세요. (취소 시 종료)");
        if (userInput === null) {
            alert(`게임 종료! 전적: ${win}승 ${draw}무 ${lose}패`);
            break;
        }

        const userChoice = userInput.trim();
        if (!choices.includes(userChoice)) {
            alert("가위, 바위, 보 중 하나로 입력해주세요.");
            continue;
        }

        const computerChoice = choices[Math.floor(Math.random() * 3)];

        let result;
        if (userChoice === computerChoice) {
            draw++;
            result = "무승부!";
        } else if (
            (userChoice === "가위" && computerChoice === "보") ||
            (userChoice === "바위" && computerChoice === "가위") ||
            (userChoice === "보" && computerChoice === "바위")
        ) {
            win++;
            result = "승리!";
        } else {
            lose++;
            result = "패배!";
        }

        alert(`나: ${userChoice} vs 컴퓨터: ${computerChoice} → ${result}`);
    }
}
