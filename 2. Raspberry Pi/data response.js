var status = flow.get('status')
var temp = flow.get('temp')
var time = flow.get('time')
msg.payload = [status, temp, time]
return msg;
