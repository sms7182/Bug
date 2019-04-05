const  SocketServer=require('ws').Server;
const  SS=new SocketServer({port:7575});
var connectToDb=false;

webSockets = {};
SS.on('connection',(ws)=>{
    var userID = ws._socket.remotePort;
    console.log(userID);
    webSockets[userID] = ws;
    ws.on('message',(msg)=>{
    var parsedObj=JSON.parse(msg);
        if(parsedObj.objTitle=='userName'){
            console.log(parsedObj.data);
            registerd(parsedObj.data);
            ws.send(JSON.stringify({objTitle:'Registration', data:'1'}));
        }

    });
    console.log('Server is Connected');
});
function registerd(user) {

}
