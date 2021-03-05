//Write a function that takes an array as an argument
//And uses a while lopp to print each item in the parameter to the console
//After you define the function, call that pass in the artiste array

const artists = [
    {
      first: 'René',
      last: 'Magritte'
    },
    {
      first: 'Chaim',
      last: 'Soutine'
    },
    {
      first: 'Henri',
      last: 'Matisse'
    }
  ];

  function printFromArray(inputArray){
      i=0;
      while(i < inputArray.length){
          console.log(inputArray[i].first + " " + inputArray[i].last);
          i++;
      }
  }

  printFromArray(artists);