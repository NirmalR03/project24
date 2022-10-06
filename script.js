let count=0,total=0;
while(count<5)
{
    let a=prompt("Enter MARKS : ")
    total+=parseInt(a);
    document.write("<br>",a,"<br>");
    count++;
}
document.write("<br>Total Marks : ",total)