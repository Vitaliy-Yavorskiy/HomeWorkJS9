// Завдання 2
// Напишіть функцію getSqrt(number), яка вираховує корінь квадратний. Для визначення кореня використовуйте Math. В залежності від того що передали в функцію має виводити наступні повідомлення:
// Якщо передане число повертати - Квадратний корінь з стільки то дорівнює стільки то.
// Якщо передали не число - Повинно бути числове значення.
// Якщо число менше 0 - Введіть додатнє число.
// Якщо в функцію нічого не передали - Будь ласка, введіть число!
// ------------------------------------------------------------------------------------------

let re = prompt('Вкажіть число');
function getSqrt (number) {
    if(number === null || number === ' '){
        console.log('Будь ласка введіть число');
    }else if(isNaN(+number)) {
        console.log('Повинно бути числове значення');
    }else if(number < 0){
        console.log('Введіть додатнє число');
    }else if(!isNaN(+number)){
        console.log('Квадратний корінь дорівнює ' + (number));
    }
}