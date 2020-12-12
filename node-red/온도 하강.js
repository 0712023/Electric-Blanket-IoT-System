var downnum = '' ; //온도하강 버튼 눌러야 하는 횟수
if (msg.topic == 'tempdown') { //처음 명령을 받았을 때, msg.payload는 온도하강 버튼 눌러야 하는 횟수
  downnum = msg.payload ;
} else { //msg.complete로 부터 받은 명령
  downnum = flow.get('downnum') || 0; //남은 온도하강 버튼 눌러야 하는 횟수
}
if (downnum !== 0) { //남은 온도하강 버튼 눌러야 하는 횟수가 0이 아닐 때
  downnum-- ; //남은 온도하강 버튼 눌러야 하는 횟수 1 빼기
  flow.set('downnum', downnum) ; //1 뺀 남은 온도하강 버튼 눌러야 하는 횟수 저장
  msg.payload = '' ;
  return msg ; // 온도하강 버튼 누르기
}
