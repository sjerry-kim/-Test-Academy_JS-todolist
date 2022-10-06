// 배경화면 설정하기
// 이미지 배열 만들기
const imgList = ["img01.jpg","img02.jpg","img03.jpg"];

// 랜덤 수 받아오기
const RandomNum = Math.floor(Math.random()*imgList.length);

// 주소 할당하기
const bodyBackground = document.querySelector("body");
bodyBackground.style.background = `url(./img/${imgList[RandomNum]})`;
bodyBackground.style.backgroundSize = 'cover'; 

// finished DOM, 변수 작성하기 : 카운트편
const finshedCount = document.querySelector("#finished-p");
let count = 0;

// 투두리스트 만들기
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const list = document.querySelector("#list");

todoForm.addEventListener("submit", addList);

function addList(e){
    e.preventDefault();

    const li = document.createElement("li");

    // 리스트 추가하기
    if(todoInput.value == ""){
        return alert("Add the list!");
    }else{

        const listCheckbox = document.createElement("input");
        listCheckbox.type = "checkbox";
        listCheckbox.name = "todayCheck"
        const listText = document.createElement("p");
        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "X";
    
        listText.innerHTML = todoInput.value;
    
        li.appendChild(listCheckbox);
        li.appendChild(listText);
        li.appendChild(deleteBtn);
    
        list.appendChild(li);

        // 체크박스 설정하기
        listCheckbox.addEventListener("click",CheckList);
        function CheckList(){
            if(listCheckbox.checked){
                listText.style.textDecorationLine = "line-through";
                listText.style.color = "gray";
                // finished 설정하기 : 카운트편
                count++;
                finshedCount.innerHTML = `finished : ${count}`;
            }else{
                listText.style.textDecorationLine = "none";
                listText.style.color = "ivory"
                // finished 설정하기 : 카운트편
                count--;
                finshedCount.innerHTML = `finished : ${count}`;
            }
        }

        /*
        // finished 설정하기 : 배열편 (deleteBtn 적용 안 되어 미흡함)
        listCheckbox.addEventListener("click",checkTodayList);

        function checkTodayList(){
            const checkedlist = 'input[name="todayCheck"]:checked';
            const seletChecklist = document.querySelectorAll(checkedlist);
            const seletChecklistCount = seletChecklist.length;
    
            const finishedP = document.querySelector("#finished-p");
            finishedP.innerHTML = `finished : ${seletChecklistCount}`
        }
        */
        
        // 삭제버튼 설정하기
        deleteBtn.addEventListener("click",deleteList);
        
        function deleteList(e){
            // finished 설정하기 : 카운트편
            if(e.target.parentNode.firstChild.checked){
                count--;
                finshedCount.innerHTML = `finished : ${count}`;
            }
            e.target.parentNode.remove();
        }

        todoInput.value = "";
    }
}