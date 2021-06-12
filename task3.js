// Завдання 3
// Створіть об’єкт getMath який буде реалізовувати наступний функціонал:
// getMath.PI – це властивість яка має повертати число Pi.
// getMath.pow(number, degree) – це метод який має повертати число в певній степені.
// getMath.abs(number) – це метод який має повертати модулю числа.
// getMath.max(number1, number2…) – це метод який має повернути максимальне число з переданих. Кількість чисел необмежена.
// getMath.min(number1, number2…) – це метод який має поаернути мінімальне число з переданих. Кількість чисел необмежена.
// Також ви маєте повернути наступні повідомлення при використанні методів, якщо:
// Якщо передали не число - Повинно бути числове значення.
// Якщо в функцію нічого не передали - Будь ласка, введіть число або числа(в залежності від методу)!
// При створенні цих методів використання об’єкту Math заборонене!

let getMath = {
    PI: 3.141592653589793,
    pow(num, deg) {
        let res = 1
        for( let i = 1; i <= deg; i++){
        res = res * num
    }
    return console.log(res);
    },
    abs(a) {
        if(a <= 0) {
            return console.log(Number(a - a - a));
        }else if ( a > 0) {
            return console.log(Number(a));
        }else{
            console.log(NaN);
        }
    },
    maxNumber(...arg) {
        let resul = arg[0]
        for(let i = 1; i < arg.length; i++){
            if(arg[i] > resul) {
                resul = arg[i]
            }
        }
        return console.log(resul);
    },
    minNumber(...arg) {
        let resul = arg[0]
        for(let i = 1; i < arg.length; i++){
            if(arg[i] < resul) {
                resul = arg[i]
            }
        }
        return console.log(resul);
    }
}

getMath.pow(10,4)
getMath.abs('-20')
getMath.maxNumber(10, 4, 300)
getMath.minNumber(10, 4, 300)
console.log(getMath.PI);
