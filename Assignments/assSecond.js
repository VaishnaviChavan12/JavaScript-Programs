/*
Write a JavaScipt function that receives a string as argument, counts how many times the 
character occurred in the given string and returns the count.
Ex:  If input is "Hello How Are You", the character "o" occurred 3 times.
Use indexOf() function.
*/

var str = "hey buddy if your are skilled no one can replace you!";
  total = "";

var input = "y",
  count = 0;

for (i = 0; i < str.length; i++) {
  input = str[i];
  if(str[i]==" ")
  {
    continue;
  }
  for (j = 0; j < str.length; j++) {
    if (str[j] == input) {
      count++;
    }
  }
  console.log("The count for "+str[i]+" is "+count);
  count=0;
}

//console.log("The total count is:", count);
