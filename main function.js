//http response를 위한 변수(휴대폰으로 현재상태 확인)
var status = global.get('status') || 'off';
var temp = global.get('temp') || 0;
var time = global.get('time') || 'off';

if (status == 'off') {
  if (msg.payload.status == 'on') {
    //mqtt로 아두이노로 켜라는 명령
    msg.payload = 'on' ;
    status = 'on' ;
    global.set('status', status) ;
    return msg ;
  }
} else if (msg.payload.status == 'off') {
  //mqtt로 아두이노로 끄라는 명령
  msg.payload = 'off' ;
  status = 'off' ;
  global.set('status', status) ;
  temp = 0 ;
  global.set('temp', temp) ;
  time = 'off' ;
  global.set('time', time) ;
  return msg ;
}else if (msg.payload.temp == 'up') {
  //mqtt로 온도를 올리라는 명령
  msg.payload = 'tempup' ;
  temp++ ;
  global.set('temp', temp) ;
  return msg ;
} else if (msg.payload.temp == 'down') {
  if (temp !== 0) {
    //mqtt로 온도를 내리라는 명령
    msg.payload = 'tempdown' ;
    temp-- ;
    global.set('temp', temp) ;
    return msg ;
  }
} else if (msg.payload.time == 'steady') {
  time = 'steady' ;
  global.set('time', time) ;
  //mqtt로 시간을 주기적으로 올리는 명령
  msg.payload = 'time' ;
  return msg ;
}
