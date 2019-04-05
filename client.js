const  cs=new WebSocket('ws://localhost:7575');
let btnClick=false;
cs.onmessage=(payload)=>{

    if(payload){
       var obj= JSON.parse(payload.data);

        if(obj&&obj.objTitle&&obj.objTitle=='Registration'&&obj.data=='1'){
           let h1=document.createElement('h1');
           h1.innerText='connected To server and sign';
           btnClick=true;
            disableSign();
           document.querySelector('div.messages').appendChild(h1);
       }
    }
 };
function disableSign() {
  var btn=  document.getElementById('sign');
 var  txtinp=document.getElementById('user');
 txtinp.disabled=true;
// txtinp.readonly=true;
 btn.disabled=true;
 //btn.readonly=true;
}
function Click(){

    console.log('clicked start')
    if(btnClick){

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