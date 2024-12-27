
const limit=document.getElementById("text");

const words=document.getElementById("char");
const max=200;

limit.addEventListener("input",
    ()=>
{
    const current=text.value.length;
 words.textContent=`${current}/${max}`;

if(current>=max)
    {
        text.style.color = "red";
    }
    else
    {
        text.style.color = "black";
    }
});


