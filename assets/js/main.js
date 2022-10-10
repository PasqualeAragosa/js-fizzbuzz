const wrapperEl = document.querySelector('.wrapper');
const ulEL = document.createElement('ul');
ulEL.style.marginBottom = 0;
wrapperEl.append(ulEL);


for (let i = 1; i <= 100; i++) {
    if((i%3 == 0) && !(i%5 == 0)) {
        let liEl = document.createElement('li');
        liEl.append(`Fizz`);
        ulEL.append(liEl);
        liEl.style.backgroundColor = "red";
        console.log("Fizz");
    } else if ((i%5 == 0) && !(i%3 == 0)) {
        let liEl = document.createElement('li');
        liEl.append(`Buzz`);
        ulEL.append(liEl);
        liEl.style.backgroundColor = "lightblue";
        console.log("Buzz");
    } else if ((i%3 == 0) && (i%5 == 0)) {
        let liEl = document.createElement('li');
        liEl.append(`FizzBuzz`);
        ulEL.append(liEl);
        liEl.style.backgroundColor = "orange";
        console.log("FizzBuzz");
    } else {
        let liEl = document.createElement('li');
        liEl.append(`${i}`);
        liEl.style.backgroundColor = "lightgreen";
        ulEL.append(liEl);
    }

}