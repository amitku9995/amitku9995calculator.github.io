let inp=document.getElementById("screen");
buttons =document.querySelectorAll("button");
let newinput="";
for(items of buttons ){
    items.addEventListener('click',(e)=>{
        buttontext=e.target.innerText;
        if(buttontext=="x")
        {
            buttontext='*';
            newinput+=buttontext;
            inp.value=newinput;
        }
        else if(buttontext=='C')
        {
            inp.value='';
            newinput='';

        }
        else if(buttontext=='=')
        {          
             inp.value=eval(inp.value);
        }
        else{
            newinput+=buttontext;
            inp.value=newinput;
        }



    })

}
