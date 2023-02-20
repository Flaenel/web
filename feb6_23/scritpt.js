"use strict";


//Установка элементов 
let content = document.querySelector(".content")
let log_form = document.querySelector(".log_form");
let reg_form = document.querySelector(".reg_form");

let slform = document.querySelector(".sl_form");
let userInfo = document.querySelector(".userinfo");

let btnlog = document.querySelector(".btnlog");
btnlog.addEventListener("click", logFormWrap);

let btnreg = document.querySelector(".btnreg");
btnreg.addEventListener("click", regFormWrap);

let btnout = document.querySelector(".logout_btn");
btnout.addEventListener("click", globalLogout)
//Установка элементов 

let session = false
//заполнение контента
contentFiller()
console.log(session)
//Data
let Users =[
    {
        "login": "admin",
        "password": "admin",
        "id": 1,
        "role": "admin"
    },
    {
        "login": "user",
        "password": "user",
        "id": 2,
        "role": "user"
    }
];

let ads = [
    {
        "ad_src": "img/bigsale.png",
        "id": 1
    },
    {
        "ad_src": "https://reklama40.com/wp-content/uploads/2020/05/Bezymyannyy-1-768x463.png",
        "id": 2
    },
    {
        "ad_src": "https://www.vsrok.com/upload/resize_cache/iblock/f05/1200_1200_1/f05167a767714fa16a84bc7d65a2a5dc.jpg",
        "id": 3
    }
];
//Data

function ad(){
for (const ad of ads) {
    adSliderFill(ad.ad_src, ad.id)
}
}

//Проверка совпадений данных
function logreader(login,password){
    for (const user of Users) {
        console.log(user);
        if(user.login == login){
            if(user.password == password){
                console.log(login, password)

                globalLogin(login)
                contentFiller(user.role)

                break;
            }
            else if(user.password == ""){
                console.log("Введите пароль");
                break;
            }
            else{
                console.log("Неверный пароль");
                break;
            }
        }
        else if (user.id == Users.length){
           if(user.login != login){
            console.log("Пользователь не найден");
            break;
           }
        }
    }
}
//Проверка совпадений данных

//Формы "Входа/Регистрации"
function logFormWrap(){
    let cch = document.querySelector(".cch")
    cch.style.display = "none"

    reg_form.style.display = "none";
    log_form.style.display = "flex";
    let loginBtn = document.querySelector(".log_frmbut");
    loginBtn.addEventListener("click", getData);
}
function regFormWrap(){
    let cch = document.querySelector(".cch")
    cch.style.display = "none"

    log_form.style.display = "none";
    reg_form.style.display = "flex";
    let regBtn = document.querySelector(".reg_frmbut");
    regBtn.addEventListener("click", setData);
}
//Формы "Входа/Регистрации"

//Data setters
function setData(){
    let login = document.querySelector("#inreg").value;
    let password = document.querySelector("#inregpass").value
    console.log(login, password)
}

function getData(){
    let login = document.querySelector("#inlog").value;
    let password = document.querySelector("#inpass").value; 

    logreader(login,password)
}
//Data setters



//Функции глобальных изменений
function globalLogin(login){
    slform.style.display = "none";
    userInfo.style.display = "flex";

    let userName = document.querySelector(".userName");
    userName.textContent = login;

    log_form.style.display = "none";

    session = true;
    console.log(session)
}

function globalLogout(){
    slform.style.display = "block";
    userInfo.style.display = "none";

    session = false;
    console.log(session)
    contentFiller()
}
//Global change func

//Заполнение div content
function contentFiller(role){
    if(session == true){
        adSliderAdd()
        ad()
        if(role == "admin"){
            content.innerHTML += `
            <div class="chh">
                <span>
                    Что-то на админском
                </span>
            </div>
            `;
        }
        else{
            content.innerHTML += `
            <div class="cch">
                <span>
                    Что-то на пользовательском
                </span>
            </div>
            `;
        }
    }
    else{
        content.innerHTML = `<span class="cch">
                            Ага, тут что-то есть
                            </span>`;
        content.style = 'display: flex; align-items: center; justify-content: center;'
    }
}
//

//Логика рекламы?
function adSliderAdd(){
    content.innerHTML += `
        <div class="adSlider"></div>
    `;
}

function adSliderFill(img, id){
    let slider = document.querySelector(".adSlider");
    slider.innerHTML += `
    <img class="autoslide ad${id}" style="width: inherit;" src="${img}" alt="">
    `;
}
//Логика рекламы?