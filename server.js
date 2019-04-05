const  SocketServer=require('ws').Server;
const  SS=new WebSocketServer({port:7575});

SS.on('connection',(ws)=>{
    ws.on('message',(msg)=>{
        console.log(msg);
    });
    console.log('Server is Connected');
})
