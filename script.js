
    

    const car = [
      { name: 'Chevy Nova', year: 1969 },
      { name: 'Buick Grand National', year: 1986 },
      { name: 'Pontiac GTO', year: 1970 },
      { name: 'Ford Mustang', year: 1964 },
      { name: 'Ford Rustang', year: 2015 },
      { name: 'Ford GT500', year: 1967 },
      { name: 'Ford Spareparts GT500', year: 2025 },
      { name: 'Dodge Challanger', year: 1968 },
      { name: 'Dodge Challanger Hell Cat', year: 2020 },
      { name: 'Ford Pinto', year: 1978 },
      { name: 'Volkswagon Bug', year: 1965 },
      
    ];

    const comments = [
      { text: 'I was considered to be a mid sided car in the 60s and 70s', id: 111111 },
      { text: 'One of the fastest production cars in my day', id: 222222 },
      { text: 'GOAT', id: 333333 },
      { text: 'I orginally came with a straight 6 engine and wasnt very preformance', id: 444444 },
      { text: 'This car is over priced and comes with a v6 engine LOL', id: 555555 },
      { text: 'Star in a movie known as Gone in 60 Seconds', id: 666666 },
      { text: 'Just like a rustang im even more over priced and the GT500 Badge is just for show', id: 777777 },
      { text: 'I was in the movie Bullitt', id: 888888 },
      { text: 'This car is number 1 for being stolen, has ruined many lives costing more than 100k with 30% interest', id: 999999 },
      { text: 'I blow up when a rear ending accident happens often', id: 123456 },
      
      { text: 'My blue book value is $400 and use a rubber band for alternater belt!', id: 789012 }
    ];

    // Some and Every Checks
    // Array.prototype.some() // is at least one person 19?
    // const isAdult = people.some(function(person) {
    //   const currentYear = (new Date()).getFullYear();
    //   if(currentYear - person.year >= 19) {
    //     return true;
    //   }
    // });

    const isClassicCar = car.some(car => ((new Date()).getFullYear()) - car.year >= 35);

    console.log({isClassicCar});
    // Array.prototype.every() // is everyone 19?

    const allCars = car.every(car => ((new Date()).getFullYear()) - car.year <= 35);
    console.log({allCars});

    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423


    const commentFirst = comments.find(comment => comment.id === 111111);
    console.log(commentFirst);
    const commentOne = comments.find(comment => comment.id === 222222);
    console.log(commentOne);
    const commentTwo = comments.find(comment => comment.id === 333333);
    console.log(commentTwo);
    const commentThree = comments.find(comment => comment.id === 444444);
    console.log(commentThree);
    const commentFour = comments.find(comment => comment.id === 555555);
    console.log(commentFour);
    const commentFive = comments.find(comment => comment.id === 666666);
    console.log(commentFive);
    const commentSix = comments.find(comment => comment.id === 777777);
    console.log(commentSix);
    const commentSeven = comments.find(comment => comment.id === 888888);
    console.log(commentSeven);
    const commentEight = comments.find(comment => comment.id === 999999);
    console.log(commentEight);
    const commentNine = comments.find(comment => comment.id === 123456);
    console.log(commentNine);
    const commentTen = comments.find(comment => comment.id === 789012);
    console.log(commentTen);
    // Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423
    //const index = comments.findIndex(commentNine => comment.id === 123465);
    //console.log(index);

    // comments.splice(index, 1);

    //const newComments = [
      //...comments.slice(0, index),
      //...comments.slice(index + 1)
    //];

