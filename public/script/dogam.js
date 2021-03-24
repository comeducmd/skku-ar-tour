window.onload = () => {
    init()
}

// 유생 ID
const usaengArr = [["A1", "교육학과"], ["A2", "수학교육과"], ["A3", "컴퓨터교육과"],
["A4", "한문교육과"], ["A5", "소비자가족학과"], ["A6", "아동청소년학과"],
["B1", "경영학과"], ["C1", "러시아어문학과"], ["C2", "한문학과"], ["C3", "철학과"],
["C4", "중어중문학과"],["C5", "프랑스어문학과"],
["C6", "국어국문학과"], ["C7", "사학과"],
["C8", "문헌정보학과"], ["C9", "경제학과"], ["D1", "미술학과"], ["D2", "영상학과"],
["D3", "연기예술학과"], ["D4", "의상학과"], ["D5", "무용학과"], ["D6", "디자인학과"],
["E1", "글로벌리더학과"], ["F1", "글로벌경영"], ["F2", "글로벌경제"]]

// 건물 ID
const blockArr = {"A":"호암관", "B":"경영관","C":"경제관","D":"수선관", "E":"법학관","F":"국제관"}

// 건물 생성 확인 리스트
let blockList = []
let usaengList = []

function addBlock(){
    usaengArr.forEach(useang => {
        // 해당 건물 div가 없을 때 div 추가
        blockId = useang[0].slice(0,1)

        if (!blockList.includes(blockId)){
            blockList.push(blockId);
            let newBlock = document.createElement("div");
            newBlock.innerHTML= `<p class='blockname'>${blockArr[blockId]}</p>`;
            newBlock.setAttribute("class",`block ${blockId}`);

            let body = document.querySelector('.showScore');
            body.appendChild(newBlock);
        }
        blockDiv = document.querySelector(`.${blockId}`);
        
        // 해당 건물에 유생 append
        if (!usaengList.includes(useang[0])){
            usaengList.push(useang[0]);
            let newUsaeng = document.createElement("div");
            newUsaeng.setAttribute("class",`${useang[0]} newUsaeng`)
            newUsaeng.innerHTML = `<p class='major'>${useang[1]}</p>`;
            blockDiv.appendChild(newUsaeng);
            let image = document.createElement('img');
            image.src = `/black/${useang[0]}.png`;
            image.setAttribute("class",`${useang[0]} blackImg`)
            document.querySelector(`.${useang[0]}`).appendChild(image);
        }
        
    });
}

// 팝업 js
function onClick(){
    document.querySelector(".container").classList.add('modal-open');
    addBlock();
}

function onClose(){
    document.querySelector(".container").classList.remove('modal-open');
}

function init(){
    document.querySelector('button[data-action="dogam"]').addEventListener('click', onClick);
document.querySelector(".js-close-modal").addEventListener('click',onClose);
}
