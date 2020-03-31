import { state, statusRender } from "./index.js";

function shaurma() {
    if(state.money >=100){
        state.money -= 100
        state.eat += 80
        state.water -=5
    } else {
        alert('Денег мало')
    }
    
    statusRender()
}

function drinkWater() {
    if (state.money >= 30) {
        state.money -= 30
        state.eat += 5
        state.water += 70
    } else {
        alert("Хочешь пить, дай деньгу")
    }

    statusRender()
}

function workBody(){
    if (state.eat >=15 && state.water >= 7 ) {
        state.money += 60
        state.eat -= 33
        state.water -= 25
    } else {
        alert("Нужно подкрепиться")
    }

    statusRender()
}

export {shaurma, workBody, drinkWater}