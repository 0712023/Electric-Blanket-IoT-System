//http response를 위한 변수(휴대폰으로 현재상태 확인)
var status = global.get('status') || 'off';
var temp = global.get('temp') || 0;
var time = global.get('time') || 'off';

if (status == 'off') {
  if (msg.payload.status == 'on') {
    //gpio 스위치 1회 누름
    status = 'on' ;
    global.set('status', status) ;
    return msg ;
  }
} else if (msg.payload.status == 'off') {
  //gpio 스위치 1회 누름
  status = 'off' ;
  global.set('status', status) ;
  temp = 0 ;
  global.set('temp', temp) ;
  time = 'off' ;
  global.set('time', time) ;
  return msg ;
} else if (msg.payload.temp == 'up') {
  //gpio 온도 상승 스위치 1회 누름
  msg.topic = 'tempup' ;
  global.set('temp', msg.payload.temp) ;
  msg.payload = msg.payload.temp - temp - 2 ;
  return msg ;
} else if (msg.payload.temp == 'down') {
  if (temp !== 0) {
    //gpio 온도 하강 스위치 1회 누름
    temp-- ;
    global.set('temp', temp) ;
    return msg ;
  }
} else if (msg.payload.time == 'steady') {
  time = 'steady' ;
  global.set('time', time) ;
}
