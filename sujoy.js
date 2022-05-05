// console.log("Hello world");
// let tomorrow="sunny";
// if(tomorrow=="rain")
// {
//     console.log("you take raincoat");
// }else{
//     console.log("you no take no raincoat");
// }

// let a=10;
// if(a==9){
//     console.log("this value is bigerthan");
// }else{
//     console.log("this value small");
// }

// let year=2020;
// if(year % 4==0){
//     if(year % 100==0){
//        if(year % 400==0){
//         console.log("this " + year + " a leap year");
//        }else{
//         console.log("this " + year + "no leap year");
//        }
//     }else{
//         console.log("this " + year + " can't leap year");
//     }
// }else{
//     console.log("this " + year + "is not leap year");
// }

// let year=2020;
// if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//     console.log(year + ' is a leap year');
// } else {
//     console.log(year + ' is not a leap year');
// }

// var year= 2020;
// if((year%4==0) && (year%100!=0) || (year%400==0)){
//     console.log(year+" "+ "is"+ " " + "leap year")
// }
// else {
//     console.log(year+" "+ "is"+ " " + "not a leap year")
// }

// function mathtable(table,n){
//     for(let i=0;i<=n;i++){
//     console.log(`${table} * ${i} is ${table * i}`);
// }
// }
// mathtable(5,10);

// const marks =[50,25,36,78,96,85,77,46,66];
// let A = 0;
// let B = 0;
// let C = 0;
// let D = 0;
// for(let i = 0; i<=marks.length;i++)
// {
//   if(marks[i] > 90)
//   {
//     A++;
//     //A=A+1;
//   }
//   else if(marks[i] <90 && marks[i]>75)
//   {
//     B++;
//   }
//   else if(marks[i] > 60 && marks[i]< 75)
//   {
//     C++;
//   }
//   else if(marks[i]<60)
//   {
//     D++;
//   }
// }

// console.log("A ==>" + A);
// console.log("B ==>" + B);
// console.log("C ==>" + C);
// console.log("D ==>" + D);

// function vowelCheck(stringInput) {
//     var newStringInput = stringInput.toLowerCase()
//     var str = newStringInput.split("")
//     var count = 0
//     var a = 0
//     var e = 0
//     var i = 0
//     var o = 0
//     var u = 0
//     for (let j = 0; j < str.length; j++) {
//         if (str[j] == 'a' || str[j] == 'e' || str[j] == 'i' || str[j] == 'o' || str[j] == 'u')
//             count++

//         if (str[j] == 'a')
//             a++
//         else if (str[j] == 'e')
//             e++
//         else if (str[j] == 'i')
//             i++
//         else if (str[j] == 'o')
//             o++
//         else if (str[j] == 'u')
//             u++

//     }
//     console.log(`Number of vowels in your given input "${stringInput}" is ${count}`)
//     console.log(`Number of "A": ${a}`)
//     console.log(`Number of "E": ${e}`)
//     console.log(`Number of "I": ${i}`)
//     console.log(`Number of "O": ${o}`)
//     console.log(`Number of "U": ${u}`)
// }

// // vowelCheck("How do you do?")
// vowelCheck("The Quick Brown fox jumps over a lazy dog")

// let hour=10;
// if(hour >=6 && hour <=12)
//  console.log("GOOD MORNING");
// else if(hour >=12 && hour <=17)
// console.log("GOOD AFTERNOON ")
// else
// console.log("GOOD EVENING");

// const marks=[55,66,77,78,65,98,99,95,85,83,87];
// let A = 0;
// let B = 0;
// let C = 0;
// let D = 0;
// for(let i=0; i<=marks.length; i++)
//  {
//      if(marks [i] > 90)
//     {
//         A++;
//     }
//     else if(marks [i] <90 && marks [i] > 75)
//     {
//         B++;
//     }
//     else if(marks [i] <75 && marks [i] >60)
//     {
//         C++;
//     }
//     else if(marks [i] <60 && marks [i]>50 )
//     {
//         D++;
//     }
//  }
//  console.log("A==>" + A);
//  console.log("B==>" + B);
//  console.log("C==>" + C);
//  console.log("D==>" + D);

// const num=[1,2,3,5,8,6,7,9];
// const even=[];
// const odd=[];
// for(let length of num)
// {
//     if(length % 2==0)
//     {
//         even.push(length);
//     }
//     else
//     {
//         odd.push(length);
//     }
// }
// console.log(even);
// console.log(odd);

// const num=[1,2,3,5,8,6,7,9];
// const even=[];
// const odd=[];
// for(let i=0;i<num.length;i++)
// {
//     if(num[i] % 2==0)
//     {
//         even.push(num[i]);
//     }
//     else
//     {
//         odd.push(num[i]);
//     }
// }
// console.log(even);
// console.log(odd);
