
let firstName = prompt('Введите ваше имя');
while (firstName <= null) {
  if (firstName <= null)
    firstName = prompt('Это поле нельзя оставить пустым, введите имя');
  else
    break
}
let surName = prompt('Введите вашу фамилию');
while (surName <= null) {
  if (surName <= null)
    surName = prompt('Это поле нельзя оставить пустым, введите фамилию');
  else
    break
}
let gender = prompt('Ваш пол М или Ж?');
if ((gender === 'М')||(gender === 'м'))  gender = 'М';
if ((gender === 'Ж')||(gender === 'ж'))  gender = 'Ж';

let userInput,
    age;
    while(!Number.isFinite(age)){
        let userInput = prompt("Сколько Вам лет?");
            age = userInput && Number(userInput);
    }
let pen;{

while (age <=-1) {
  if (age <= -1)
    age = prompt('Возраст не может быть отридцательным, попробуйте еще раз');
  else
    break
}
if (gender === 'М') {
  if (age >= 60) pen = 'да';
  else pen = 'нет';}
if (gender === 'Ж') {
  if (age >= 55) pen = 'да';
  else pen = 'нет';
}
function alertMessage() {
  alert('Полное имя:  ' +firstName+' '+surName+ " \nВаш пол:  " + gender + "\nВы на пенсии:  " + pen);
}
alertMessage()}
