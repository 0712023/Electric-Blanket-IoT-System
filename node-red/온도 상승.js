var upnum = '' ; //온도상승 버튼 눌러야 하는 횟수
if (msg.topic == 'tempup') { //처음 명령을 받았을 때, msg.payload는 온도상승 버튼 눌러야 하는 횟수
  upnum = msg.payload ;
} else { //msg.complete로 부터 받은 명령
  upnum = flow.get('upnum') || 0; //남은 온도상승 버튼 눌러야 하는 횟수
}
if (upnum !== 0) { //남은 온도상승 버튼 눌러야 하는 횟수가 0이 아닐 때
  upnum-- ; //남은 온도상승 버튼 눌러야 하는 횟수 1 빼기
  flow.set('upnum', upnum) ; //1 뺀 남은 온도상승 버튼 눌러야 하는 횟수 저장
  msg.payload = '' ;
  return msg ; // 온도상승 버튼 누르기
}
