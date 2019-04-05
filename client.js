const  cs=new WebSocket('ws://localhost:7575');
 cs.onmessage=(payload)=>{

    if(payload){
       var obj= JSON.parse(payload.data);

        if(obj&&obj.objTitle&&obj.objTitle=='Registration'&&obj.data=='1'){
           let h1=document.createElement('h1');
           h1.innerText='connected To server and sign';

           document.querySelector('div.messages').appendChild(h1);
       }
    }
 };
function Click(){
    var btnClick=false;
    console.log('clicked start')
    if(btnClick){


        console.log('clicked');
        return;
    }
    else{
        let usr= document.getElementById('user');
        var parsd=JSON.stringify({objTitle:'userName', data:usr.value});
        cs.send(parsd);


    }
}

/*document.forms[0].onsubmit=()=>{
    let  msg=document.getElementById('message');
    cs.send(msg.value);
}*/