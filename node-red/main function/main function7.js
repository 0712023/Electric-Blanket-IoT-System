//http response를 위한 변수(휴대폰으로 현재상태 확인)
var status = flow.get('status') || 'off';
var temp = flow.get('temp') || 0;
var time = flow.get('time') || 'off';
//발행하는 topic은 'status', 'tempup', 'tempdown' 3가지
if (status == 'off') {
  if (msg.payload.status == 'on') {
    msg.topic = 'status' ;
    flow.set('status', 'on') ;
    flow.set('time', 'steady') ;
    return msg ;
  }
  return msg ;
} else if (msg.payload.status == 'off') {
  msg.topic = 'status' ;
  flow.set('status', 'off') ;
  flow.set('temp', 0) ;
  flow.set('time', 'off') ;
  return msg ;
} else if (msg.payload.temp > temp) {
  msg.topic = 'tempup' ;
  flow.set('temp', msg.payload.temp) ;
  msg.payload = msg.payload.temp - temp ; // 여기에다가 실제 온도와 예측 온도와의 조정값 기입
  return msg ;
} else if (msg.payload.temp < temp) {
  if (temp !== 0) {
    msg.topic = 'tempdown' ;
    flow.set('temp', msg.payload.temp) ;
    msg.payload = temp - msg.payload.temp ; // 여기에다가 실제 온도와 예측 온도와의 조정값 기입
    return msg ;
  }
} else {
  return msg ;
}
