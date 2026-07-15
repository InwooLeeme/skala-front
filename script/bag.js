const myBag = [
    {
        name: "노트북",
        count: 1,
    },
    {
        name: "충전기",
        count: 1,
    },
    {
        name: "필통",
        count: 1,
    },
    {
        name: "공책",
        count: 3,
    },
    {
        name: "물병",
        count: 1,
    },
];

function showMyBag(){
    let bagMessage = "🎒 [내 가방 속 물품 목록]\n\n";

    for(const item of myBag){
        bagMessage += `- ${item.name} : ${item.count}개\n`;
    }

    bagMessage += `\n총 물품 종류: ${myBag.length}가지`;

    alert(bagMessage);
}
