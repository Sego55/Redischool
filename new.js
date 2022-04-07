let str = "";
let spaces = "";
for (let index = 0; index < 6; index++)
{
    if (index == 5)
    {
        str = "";
        for (let j = 0; j < 6;j++)
        {
            str = str +"*";
        } 
        console.log(str);
    }
    else
    {
        str = str +"*";
        for(i = 0;i<(index-1);i++)
        {   
            spaces +=" ";
            str ="*"+spaces+"*";
        }
        console.log(str);
        spaces = ""; 
    }   
}