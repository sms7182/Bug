const  cs=new WebSocket('ws://localhost:7575');

document.forms[0].onsubmit=()=>{
    let  msg=document.getElementById('message');
    cs.send(msg.value);
}