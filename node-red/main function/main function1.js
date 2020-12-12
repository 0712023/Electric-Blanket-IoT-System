//http response를 위한 변수(휴대폰으로 현재상태 확인)
var status = global.get('status') || 'off';
var temp = global.get('temp') || 0;
var time = global.get('time') || 0;


if (msg.payload.status == 'on') {
  //mqtt로 아두이노로 켜라는 명령
  status = 'on' ;
  global.set('status', status) ;
  msg.payload = [status, temp, time] ;
  return msg ;
} else if (msg.payload.status == 'off') {
  //mqtt로 아두이노로 끄라는 명령
  status = 'off' ;
  global.set('status', status) ;
  temp = 0 ;
  global.set('temp', temp) ;
  time = 0 ;
  global.set('time', time) ;
}else if (msg.payload.temp == 'up') {
  //mqtt로 온도를 올리라는 명령
  temp++ ;
  global.set('temp', temp) ;
} else if (msg.payload.temp == 'down') {
  //mqtt로 온도를 내리라는 명령
  temp-- ;
  global.set('temp', temp) ;
} else if (msg.payload.time == 'up') {
  //mqtt로 시간을 올리라는 명령
  time++ ;
  global.set('time', time) ;
} else if (msg.payload.time == 'down') {
  //mqtt로 시간을 내리라는 명령
  time-- ;
  global.set('time', time) ;
}
msg.payload = [status, temp, time] ;
return msg ;
