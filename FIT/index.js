import {shaurma, workBody, drinkWater} from './capabilitis.js'

//Доступ к Статус панели
var money = document.getElementById('money')
var xp = document.getElementById("xp")
var eat = document.getElementById("eat")
var water = document.getElementById("water")

//Доступ к Кнопкам
const buttons = document.getElementById('buttonMarker')
const parentButton = buttons.parentNode

//Создание кнопок
function creatButton(value, fun) {
    var newButton = document.createElement("input")
    newButton.type = "button"
    newButton.value = value
    newButton.id = "panel_button"
    newButton.onclick = fun  //Функция consL

    parentButton.insertBefore(newButton, buttons.nextSibling)
}

//Статус
export const state = {
    money : 150,
    xp : 100,
    eat : 100,
    water : 100
}




console.log(money.innerText)
console.log(money.innerHTML)





//Вывод Статука в HTML
export function statusRender() {
    money.innerText = state.money
    xp.innerText = state.xp
    eat.innerText = state.eat
    water.innerText = state.water
}

creatButton("Купить шаурму", shaurma)
creatButton("Пойти на работу", workBody)
creatButton("Купить воды", drinkWater)

statusRender()


