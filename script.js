let inpu=document.getElementById("screen");
buttons =document.querySelectorAll("button");
let newinput="";
for(items of buttons ){
    items.addEventListener('click',(e)=>{
        buttontext=e.target.innerText;
        if(buttontext=="x")
        {
            buttontext='*';
            newinput+=buttontext;
            inpu.value=newinput;
        }
        else if(buttontext=='C')
        {
            inpu.value='';
            newinput='';

        }
        else if(buttontext=='=')
        {          
             inp.value=eval(inpu.value);
        }
        else{
            newinput+=buttontext;
            inpu.value=newinput;
        }



    })

}
