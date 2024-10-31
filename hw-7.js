
    // домашнее задание 
    
    // задание 1
    
   //  const people = [
   //     { name: 'Глеб', age: 29 },
   //     { name: 'Анна', age: 17 },
   //     { name: 'Олег', age: 7 },
   //     { name: 'Оксана', age: 47 }
   //  ];
    
   //  console.log(people.sort((a, b) => {
   //     return a.age - b.age
   //  }));
    
   //  // задание 2
    
   //  function filter(array, callback) {
   //     let outArr = [];
   //     for (let i = 0; i < array.length; i++) {
   //        if (callback(array[i])) {
   //           outArr.push(array[i]);
   //        }
          
   //     }
   //     return outArr
   //  }
    
   //  function isPositive(num) {
   //     return num > 0;
   //     }
       
       
   //     function isMale(gen) {
   //     return gen.gender === 'male'
   //     }
       
       
    
   //     console.log(filter([3, -4, 1, 9], isPositive));
       
       
   //     const people1 = [
   //        {name: 'Глеб', gender: 'male'},
   //        {name: 'Анна', gender: 'female'},
   //        {name: 'Олег', gender: 'male'},
   //        {name: 'Оксана', gender: 'female'}
   //     ];
       
   //     console.log(filter(people1, isMale));
    
    
   //  // задание 3
    
   //  let date = new Date;
   //  let timer30 = setInterval(() => {
   //    console.log(date.toLocaleDateString('ru-RU'))
   //  }, 3000);
    
   //  setTimeout(() => { clearInterval(timer30); alert('30 секунд прошло'); }, 30000);
    
   //  // задание 4
    
   //  function delayForSecond(callback) {
   //     setTimeout(() => {
   //      callback();
   //     }, 1000);
       
   //  }
    
   //  delayForSecond(function () {
   //    console.log('Привет, Глеб!');
   //  })
    
   //  // задание 5
    
    
   //  function delayForSecond(cb) {
   //    setTimeout(() => {
   //        console.log('Прошла одна секунда');
   //        if(cb) {  cb(); }
   //    }, 1000)
   //  }
    
   //  function sayHi (name) {
   //    console.log(`Привет, ${name}!`);
   //  }
    
   //  delayForSecond(() => sayHi('Глеб'))