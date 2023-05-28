/*
If input is "Hello How Are You", the character "o" occurred 3 times.
Use indexOf() function.
*/

var str = "How Are You";
var input = "o",index=0;
  count = 0;

var find=function()
{
    if (str.indexOf("o") == -1) {
        return 0;
      } 
      else {
            while(index!=-1)
            {
                count++;
                index=str.indexOf("o",index++);
                if(index==-1)
                {
                    break;
                }
                index=++index;
            }
            return count;
        }
}

var res=find();
console.log(res);
