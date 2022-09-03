console.log('study');

//let or const
let a;                  //최초 선언에는 let을 붙여준다.
a = 20;
a = 30;

const MAX_POINT = 20;   //const는 const로 Const는 대문자로 붙여주는것이 좋다.

//자료형

//문자형
const name1 = "Mike"
const name2 = 'Mike'
const name3 = `Mike`

const message1 = "I'm a boy"
const message2 = 'I\'m a boy'
console.log(message2)

const message3 = `My name is ${name1}`

//숫자형
const age = 30;
const PI = 3.14;
console.log(1 + 2);

const x = 1/0;
console.log(x); //Infinity

const y = name1 / 2;
console.log(y); //NaN Not a Number.. <- 숫자가 아닌 작업을 할때 필요

//Boolean
const bool1 = true;
const bool2 = false;

if(bool1 == true)
    console.log("het");

//Null
//Null : 값이 존재하지 않는다.
//Undifined : 값의 초기화가 이루어지지 않았다.

let undifinded1;
console.log(undifinded1)

let user = null;
console.log(user)

//객체형 심볼형 -> 추후에

//type of 연ㄱ산자

console.log(typeof 3)       //number
console.log(typeof name1)
console.log(typeof true)
console.log(typeof "xxx")
console.log(typeof null)      //object
console.log(typeof undefined)   //undifined

//다른 API 를 통해서 가져올경우.. typeof 필요
//숫자형 + 문자형 = 문자형

//Message box
//alert("33"); //Message Box
//const name5 = prompt("이름을 입력하세요", "default : ") //값을 입력받을 경우 사용 , 두번째 인자는 디폴트
//alert("환영합니다" + name5)
//confirm

//형변환
String(3); //문자형 변환

Number(); //숫자형 변환
console.log(Number('10'),
    Number('434ff'))

Boolean(); //불린형 변환

//false 형 Boolean
console.log(
    Boolean(0),
    Boolean(""),
    Boolean(null),
    Boolean(undefined),
    Boolean(NaN),
    )

//비교문
if(true){

}
else if(true){

}
else{

}

//반복문
for(let i = 0; i < 10; ++i){
    console.log(i);
}

let whileCount = 0;
while (whileCount < 10){
    console.log('while ' + whileCount++);
}

do{
    console.log('doWhile' + whileCount++);
}while(whileCount < 20)

let fruit = '사과2'

switch (fruit){
    case '사과':
        console.log(fruit);
        break;
    default:
        console.log('default');
}

//함수
function sayFunction(var1){ //해당 방법이 함수 선언문.
    console.log(var1);
}
sayFunction('hel');

const function2 = function (var1) { //함수 표현식
    console.log(var1);
}
function2(20);

let add2 = (var1, var2) => {
    let var3 =var1 + var2;
    console.log(var3)
}
add2(10,20);

let add3 = (var2, var3) => var2 + var3; //return 이 한줄일 경우에만 이렇게 사용 가능함.
add3(30,40);

let addTest = (val1, val2) => {
    return val1 + val2;
}

let result1 = addTest(10,100);
console.log(result1);

//let 전역, 지역변수는 중복 안된다.지역이 우선순위.

//함수 표현식
//함수 선언식

//모든 함수의 호이스팅이..된다. -> 직접 올라가진 않는다.



//객체 만들기
const people = {
    name : 'jimin',  //key , value 프로퍼티 필요함.
    age : 20,

    fly: function(){
        console.log(this.name); //내부 this 로 호출
        console.log("사랑한다");
    },

    love(){
        console.log("묭이");
    }
}

//object 접근 , 추가 ,삭제
//접근
console.log(people.name);
console.log(people['name']);

//추가
people.gender = 'male';
people['hairColor'] = 'black';
console.log(people.gender);

//삭제
delete people.gender; //삭제한다.

//객체 없는 프로퍼티 접근
people.birthDay; // undefined
console.log(people.birthDay);
//프로퍼티 존재 여부 확인 in

'birthData' in people;  //존재하면 true , 존재하지 않으면 false
console.log('birthday' in people);

//for in 을 사용하면 객체를 순환하면서 모든 프로퍼티를 가져올 수 있다.
for(let key in people){
    console.log(key)
    console.log(people[key])
}

people.fly();
people.love();
people['love']();

//javascript는 배열 안에 여러 개체를 가질 수 있다
//배열..에 계속적으로 넣을 수 있다.

//array
let day = ['mon', 'Tue', 'wed'];
day[0] = 'ttt'
day.push('ture')
day.unshift('true2')

console.log(day)

for(let index =0 ; index < day.length; ++index){
    console.log(day[index]);
}

for(let value of day){
    console.log(value);
}