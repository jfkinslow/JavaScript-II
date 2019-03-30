function cherryPie() {
    let slicesIHaveNow = 0;
    return function slicesIWillGetToEat() {
        slicesIHaveNow = slicesIHaveNow + 1;
        return slicesIHaveNow;
    }
}

const slicesIGetToGobbleUp = cherryPie();
console.log(slicesIGetToGobbleUp());
console.log(slicesIGetToGobbleUp());
console.log(slicesIGetToGobbleUp());
console.log(slicesIGetToGobbleUp());
console.log(slicesIGetToGobbleUp());
console.log(slicesIGetToGobbleUp());
console.log(slicesIGetToGobbleUp());
console.log(slicesIGetToGobbleUp());