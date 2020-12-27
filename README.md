# Electric Blanket IoT System
## Project Synopsis
- 진행 기간 : 2019년 겨울
- 내용
  - 약 2년동안의 프로그래밍 독학 및 다양한 프로그램을 통해 IoT에 꾸준한 관심을 가져왔습니다. 마침내 2019년 11월, 스마트팩토리 아웃소싱 솔루션 기업인 CyberTechFriend에서 4개월 동안의 계약직 업무를 통해 프로그래밍에 관한 자신감이 최대로 폭발했던 2019년 겨울이었습니다. 더 나아가 프로그래밍 역량을 강화하기 위해 한 학기 휴학을 결정하고, 매일 하루종일 프로그래밍만 하더라도 그저 행복했던 시기였습니다.<br>
  - 비교적 유연한 근무환경이었던 계약직 기간동안 오후에 느즈막히 기상, 새벽 늦게 다시 자던 생활패턴이 일상이었습니다. 이러한 생활패턴에서 추위를 선호하지 않는 저는 주로 방 안 침대에서 10시간 이상 지내는 일이 일상이었습니다.<br>
  - 이 생활 환경에서 필수라고 할 수 있는 전기장판은 최대 타이머가 9시간이었기 때문에 기상 전 한, 두 시간씩 전기장판이 꺼진 채로 추위와 싸워야 했습니다. 이 상당한 불편함으로 인해 그동안의 쌓아온 능력을 활용하여 문제를 해결하고자 시도한 것이 바로 이 전기장판 IoT 프로젝트입니다.<br>
### Purpose
전기장판을 컨트롤할 수 있는 컨트롤러의 버튼을 물리적, 소프트웨어적으로 해킹하여 최종적으로 모바일 환경에서 언제, 어디서든 전기장판의 현재 상황을 체크할 수있고, 온도 및 시간을 컨트롤할 수 있게 하는 것이 목표입니다.<br>
## Tools
### Hardware
- <a href="https://www.qoo10.com/gmkt.inc/Goods/Goods.aspx?goodscode=632523807">샤오미 전기장판</a><br>
<img src=https://gd.image-gmkt.com/ai/901/931/1323931901_03.g_0-w-st_g.jpg width=300><br>
2018년 12월 8일에 구매한 샤오미 전기장판입니다. 전원 버튼, 온도 up/down, 시간 up/down 총 5개의 버튼으로 조작이 가능합니다. 컨트롤러 전면부에 시간 버튼 조작시 시간, 온도 버튼 조작시 온도 level에 해당하는 숫자가 표시됩니다. 시간 level은 최소 0시간부터 9시간까지, 온도 level또한 0부터 9까지 설정이 가능합니다.<br>
- ESP8266<br>
<img src=https://cdn.shopify.com/s/files/1/0672/9409/products/NodeMCU_ESP8266_development_board.jpg width = 300><br>
IoT에 최적화된 초소형 아두이노로써, 와이파이 연결이 가능하고 크기가 매우 작다는 점에서 강점이 있습니다. 가격도 2019년 기준 10000원 이하로, 매우 저렴한 편입니다. 하지만 외부 센서와의 연결을 위한 serial pin의 개수가 다양하지 않고, 배터리를 통한 전원 공급 시 적절하지 않은 전력이 흐를 경우 회로가 타버리는 등의 내구성이 약한 점이 단점이라고 할 수 있습니다.<br>
- Raspberry Pi 3B+<br>
<img src=https://images-na.ssl-images-amazon.com/images/I/71EPckcD8ZL._AC_SL1244_.jpg width = 300><br>
전 세계에서 가장 많이 쓰이는 IoT hardware platform들 중 하나라고 할 수있는 라즈베리파이는 하나의 초소형 컴퓨터라고 볼 수 있습니다. Linux 기반의 Rasbian OS를 탑재하여 desktop 화면을 지원하며, 다양한 GPIO pin및 HDMI 포트, PiCamera 등 확장성이 매우 우수하다는 장점이 있습니다. 하지만 크기가 실제 컴퓨터에 비해 매우 작은 편이지만 다른 IoT hardware platform들에 비해 크기가 큰 편이기 때문에 휴대성이 좋지 않다는 단점이 있습니다.<br>
- 2N 5551 Transistor<br>
<img src=https://i.imgur.com/qhPMeZ4.png width=300><br>
- 1k&#8486; Resistance<br>
<img src=https://i.imgur.com/cwaNmAm.png width=300><br>
### Software
- <a href=https://nodered.org/>Node-RED</a><br>
<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Node-red-icon.png/200px-Node-red-icon.png>

- <a href=https://www.arduino.cc/>Arduino IDE</a><br>
<img src=https://www.codewithus.com/img/icons/arduinoicon.png width=200><br>

## Big Picture
### 1. System Circuit Plan
아이디어 구상 단계에서 제작한 그림들입니다.
- Blueprint<br>
  - 아두이노 : 전기장판 컨트롤러와의 직접적인 통신<br>
  - 라즈베리파이 : Node-RED를 활용한 server 역할<br>
  - 모바일 : server에 명령 입력<br>
<p align=center><img src=https://i.imgur.com/AtKA24j.jpg width=500></p><br>

- Transistor as a Switch<br>
  - Emitter와 collecter를 버튼 스위치에 연결
  - Emitter는 GND에도 연결
  - Base를 GPIO port와 1k&#8486; 저항을 통해 연결
  - 버튼 각각에 동일한 방식으로 적용
<p align=center><img src=https://i.imgur.com/bPii7f6.png width=600></p>

### 2. Electric Blanket
- 이번 프로젝트에 사용된 전기장판을 컨트롤할 수 있는 컨트롤러에 존재하는 5개의 버튼을 물리적으로 해킹하기 위해 컨트롤러의 나사를 풀고 기판을 드러냈습니다. 이후, 각 버튼의 양쪽을 납땜을 통해 전선과 연결시켰습니다.<br>
<p align=center><img src=https://i.imgur.com/UjnasBw.jpg width=300> <img src=https://i.imgur.com/7LebJNJ.jpg width=300></p>

- 위 사진에서 확인할 수 있듯, 실제로 연결된 버튼 쌍(GPIO out, GND)은 3개입니다. 각각 온도 up, 온도 down, 시간 up입니다. 시간 down과 전원on/off 버튼은 납땜을 하지 않았는데 그 이유는 다음과 같습니다.<br>
  - 시간 down 버튼 : 이 프로젝트 목표는 꺼지지 않는 전기장판이기 때문에 굳이 시간 down 버튼을 제어할 일이 없다고 판단했습니다. 최종 목표를 달성하기 위해 자동으로 1시간마다 시간 up 버튼을 눌러주는 기능만을 계획했기 때문입니다.
  - 전원 on/off 버튼 : 이 버튼은 최초 목표에서 제어하려고 했던 버튼 중 하나였으나, 테스트 과정에서 제대로 동작하지 않았습니다. 그 원인으로 전원 버튼은 다른 버튼들보다 높은 전류가 흐르는 것이라고 추측합니다. 따라서 일단 다른 버튼들 제어부터 성공시킨 후, 마지막으로 전류 등을 측정하여 이 버튼에 적합한 저항을 구해 시스템을 완성시키기로 결정했습니다.<br>

## Project Details
### 1. ESP8266
- ESP8266에는 GPIO 포트가 15개가 있습니다. 이 GPIO 포트를 활용해 전기장판 컨트롤러의 버튼들을 제어했습니다.<br>
<p align=center><img src=https://i2.wp.com/play.fallows.ca/wp/wp-content/uploads/sites/4/2016/11/NodeMCU-ESP8266-12E-Limitations.jpg width=400></p><br>

- ESP8266에는 와이파이 연결에 관한 CPP 예제 라이브러리가 있습니다. 해당 예제를 활용하여 먼저 ESP8266을 제 방에서 사용하고 있는 공유기 wifi에 연결시켰고, mqtt 라이브러리를 통해 임시로 server 역할을 수행하는 제 PC와의 통신에 성공했습니다. 차후 이 server는 Raspberry Pi의 Node-RED를 활용할 예정이었습니다.
- 데이터 전달 알고리즘은 mqtt를 통해 ESP8266로 전달받은 데이터(payload)의 문자열에 따라 구분했습니다. 해당 부분의 C++ 코드는 아래와 같습니다.<br>

  ```cpp
  void callback(char* topic, byte* payload, unsigned int length) {
    Serial.print("Message arrived [");

    String command ;
    for (int i = 0; i < length; i++) {
      command += (char)payload[i];
    }

    Serial.print(command);
    Serial.println("] ");
  //---------------------------Input function start--------------------------------
    if(command == "on") {
      //전원 켜기
      Serial.println("blanket on") ;
    } else if (command == "off") {
      //전원 끄기
      Serial.println("blanket off") ;
    } else if (command == "tempup"){
      //온도 올리기
      Serial.println("temperature up") ;
    } else if (command == "tempdown"){
      //온도 내리기
      Serial.println("temperature down") ;
    } else if (command == "time"){
      //시간 올리기
      Serial.println("time up") ;
    }
  }
  ```

- 이후, GPIO를 제어하기 위해 pinMode() 및 digitalWrite()를 사용했습니다. 위 코드에서 command의 종류에 따라 명령을 구분하여 각각 다른 GPIO port로 신호를 보냈습니다.
- 온도 up, down 및 시간 up 버튼은 정상적으로 제어가 되었지만, 전원 on/off 버튼을 제어하는 데 실패했습니다. 설상가상 그 이후 arduino IDE와도 통신이 되지 않거나 이미 upload되었있던 wifi 통신 test 신호도 잡히지 않는 등의 증상이 나타났습니다. 이 원인으로 예상보다 높은 전원 on/off 버튼 사이의 전류로 인해 ESP8266 디바이스까지 과전류로 회로가 타버린 것으로 추측합니다.
- 예상치 못한 실패로 인해 ESP8266을 활용한 IoT 시스템 구축에 차질이 생겼고, 죽어버린 ESP8266의 대안으로 좀 더 안정적이고 성능이 우수한 Raspberry Pi를 활용하여 프로젝트를 진행하기로 결정했습니다.
### 2. Raspberry Pi with Node-RED
#### 1) GPIO
- Node-RED에는 Raspberry Pi를 위한 다양한 노드가 존재하는데, 저는 스위치 역할을 하는 2N 5551 transistor의 base에 high 신호를 보내줄 GPIO 노드를 사용했습니다. GPIO 노드는 payload로 1을 전달할 시 high신호를, 0을 전달 시 low신호를 GPIO Out하게 됩니다.
<p align=center><img src=https://i.imgur.com/Af9Dw2S.png width=400></p>
<p align=center>GPIO Mapping</p>

- 물리적인 클릭 동작은 일반적으로 버튼을 눌렀다 짧은 시간 후 떼는 두 가지 동작으로 이루어집니다. 이 동작을 코드로 구현하기 위해 delay 노드를 활용하여 버튼 1회 클릭 명령이 들어오면, 해당 GPIO pin으로 1신호를 주고, 0.5초 지연 후 0 신호를 주는 방식으로 구현했습니다.
<p align=center><img src=https://i.imgur.com/ftGmpzR.png></p><br>
전원버튼은 0초/0.5초인 반면 나머지 버튼이 0.5초/1초인 이유는 동시에 여러개의 동작을 수행하는 command가 입력될 경우 전원버튼이 가장 먼저 실행되고, 이후 온도상승, 하강, 시간상승 버튼이 동작하도록 하기 위해서입니다.

#### 2) HTTP
- Post를 통해 *http://localhost:1880/iot/blanket* 로 command를 받습니다. Command는 json의 형식으로, 다음과 같습니다.
```json
{"status" : "on"}
{"status" : "off"}
{"temp" : "up"}
{"temp" : "down"}
{"time" : "up"}
{"time" : "down"}
```
- *Main function* 노드에서 http 통신을 통해 전달받은 command에 따라 topic을 설정합니다. 또한, 현재 상태(전원 on/off), 현재온도, 현재 시간 값을 전역변수 'status', 'temp', 'time'에 저장합니다.
- *data for response*에 현재 상태(전원 on/off), 현재온도, 현재 시간 값을 담아 http response합니다.
- *전원*, *온도 상승*, *온도 하강* 노드에서 전달받은 topic에 따라 payload GPIO 노드로 전달합니다.
- *push if time steady* 노드에서 1시간마다 시간 상승 GPIO를 push합니다.
- *complete* 노드는 해당 노드 위치의 GPIO가 1회 클릭이 완료되면 다시 push합니다. *온도 상승*과 *온도 하강* 노드에서 각각 전역변수 'upnum'과 'downnum'을 통해 자동으로 명령한 횟수만큼 GPIO를 푸쉬하는 기능을 수행합니다.
<p align=center><img src=https://i.imgur.com/a4H0A5X.png></p>

- http 통신을 통한 GPIO 제어는 최종적으로 사용하지 않는 방식입니다. 그 이유는 아래 *3. Mobile &#8594; 3) Http Communication*에서 자세히 설명하겠습니다.
#### 3) Node-RED UI
- Node-RED의 dashboard 노드들을 활용하여 *http://localhost:1880/ui* 주소를 통해 ui를 구성할 수 있습니다.
- *up* 버튼은 온도 상승 GPIO에, *down* 버튼은 온도 하강 GPIO에 연결되어 있습니다.
- *show notification* 노드는 payload를 알림창에 띄워주는 기능을 수행합니다.
<p align=center><img src=https://i.imgur.com/OuwthqJ.png></p>


#### 4) MQTT
- *http://localhost:1883/iot* 주소를 통해 payload에 관계없이 mqtt 신호를 받게 되면 아래 플로우에서 확인할 수 있듯 위에서부터 순서대로 온도상승 &#8594; 온도 하강 &#8594; 온도 상승 3회 GPIO 신호를 전달합니다.
- 제가 직접 실생활에서 사용했을 때 전기장판의 온도 level이 4에 맞춰져있을 때 가장 적합한 온도가 유지되었습니다. 하지만, 전기장판을 처음 켰을 때 최초 온도 상승 신호가 항상 씹히는 문제가 발생했습니다. 이 문제는 처음에 온도 상승+하강 동작을 하는 것으로 해결했습니다.
- NFC tag와의 연계는 *3. Mobile &#8594; 5) SSH with NFC Tag, iPhone Shortcut*에서 자세히 설명하겠습니다.
<p align=center><img src=https://i.imgur.com/QOowwsL.png></p>

#### 5) Flow
```
[{"id":"c5da80cc.32145","type":"tab","label":"blanket","disabled":false,"info":""},{"id":"d8de6b09.fa4b48","type":"http in","z":"c5da80cc.32145","name":"","url":"/iot/blanket","method":"post","upload":false,"swaggerDoc":"","x":120,"y":80,"wires":[["4b25495c.095438"]]},{"id":"1f28e4e3.a5d01b","type":"http response","z":"c5da80cc.32145","name":"","statusCode":"","headers":{},"x":690,"y":40,"wires":[]},{"id":"4b25495c.095438","type":"function","z":"c5da80cc.32145","name":"Main Function","func":"//http response를 위한 변수(휴대폰으로 현재상태 확인)\nvar status = flow.get('status') || 'off';\nvar temp = flow.get('temp') || 1;\nvar time = flow.get('time') || 'off';\n//발행하는 topic은 'status', 'tempup', 'tempdown' 3가지\nif (status == 'off') {\n  if (msg.payload.status == 'on') {\n    msg.topic = 'status' ;\n    flow.set('status', 'on') ;\n    flow.set('time', 'steady') ;\n    return msg ;\n  }\n  return msg ;\n} else if (msg.payload.status == 'off') {\n  msg.topic = 'status' ;\n  flow.set('status', 'off') ;\n  flow.set('temp', 1) ;\n  flow.set('time', 'off') ;\n  return msg ;\n} else if (msg.payload.temp > temp) {\n  msg.topic = 'tempup' ;\n  flow.set('temp', msg.payload.temp) ;\n  msg.payload = msg.payload.temp - temp ; // 여기에다가 실제 온도와 예측 온도와의 조정값 기입\n  return msg ;\n} else if (msg.payload.temp < temp) {\n  if (temp !== 1) {\n    msg.topic = 'tempdown' ;\n    flow.set('temp', msg.payload.temp) ;\n    msg.payload = temp - msg.payload.temp ; // 여기에다가 실제 온도와 예측 온도와의 조정값 기입\n    return msg ;\n  }\n} else {\n  return msg ;\n}\n","outputs":1,"noerr":0,"x":320,"y":80,"wires":[["ead9c31d.dee26","fb6b3f6f.d2189","73e733a5.b8d13c","cbf34895.c20e58"]]},{"id":"bd0e996f.1dd7b8","type":"inject","z":"c5da80cc.32145","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":true,"onceDelay":0.1,"x":110,"y":200,"wires":[["7fb8708e.a7f4c"]]},{"id":"7fb8708e.a7f4c","type":"function","z":"c5da80cc.32145","name":"push if time steady","func":"setInterval(()=> {\n    // var time = global.get('time');\n    // if (time == 'steady'){\n    //     node.send(msg); //gpio 시간 상승 스위치 1회 누름\n    // }\n    node.send(msg);\n},1000*60*60)","outputs":1,"noerr":0,"x":530,"y":200,"wires":[["b11de662.2f7f18"]]},{"id":"ead9c31d.dee26","type":"function","z":"c5da80cc.32145","name":"data for response","func":"var status = flow.get('status')\nvar temp = flow.get('temp')\nvar time = flow.get('time')\nmsg.payload = [status, temp, time]\nreturn msg;\n","outputs":1,"noerr":0,"x":530,"y":40,"wires":[["1f28e4e3.a5d01b"]]},{"id":"fb6b3f6f.d2189","type":"function","z":"c5da80cc.32145","name":"전원","func":"if (msg.topic == 'status') {\n  return msg ;\n}","outputs":1,"noerr":0,"x":490,"y":80,"wires":[["bacb5198.afb12"]]},{"id":"23580e4f.cb9d52","type":"delay","z":"c5da80cc.32145","name":"","pauseType":"delay","timeout":"0.5","timeoutUnits":"seconds","rate":"1","nbRateUnits":"1","rateUnits":"second","randomFirst":"1","randomLast":"5","randomUnits":"seconds","drop":false,"x":890,"y":460,"wires":[["fd67e281.a8428"]]},{"id":"fd67e281.a8428","type":"function","z":"c5da80cc.32145","name":"0","func":"msg.payload = 0\nreturn msg;","outputs":1,"noerr":0,"x":1030,"y":460,"wires":[["6bea1b59.69f994"]]},{"id":"3ae76bca.76e8d4","type":"function","z":"c5da80cc.32145","name":"1","func":"msg.payload = 1\nreturn msg;","outputs":1,"noerr":0,"x":1030,"y":420,"wires":[["6bea1b59.69f994"]]},{"id":"6bea1b59.69f994","type":"rpi-gpio out","z":"c5da80cc.32145","name":"","pin":"3","set":false,"level":"0","freq":"","out":"out","x":1170,"y":420,"wires":[]},{"id":"73e733a5.b8d13c","type":"function","z":"c5da80cc.32145","name":"온도 상승","func":"var upnum = '' ; //온도상승 버튼 눌러야 하는 횟수\nif (msg.topic == 'tempup') { //처음 명령을 받았을 때, msg.payload는 온도상승 버튼 눌러야 하는 횟수\n  upnum = msg.payload ;\n} else { //msg.complete로 부터 받은 명령\n  upnum = flow.get('upnum') || 0; //남은 온도상승 버튼 눌러야 하는 횟수\n}\nif (upnum !== 0) { //남은 온도상승 버튼 눌러야 하는 횟수가 0이 아닐 때\n  upnum-- ; //남은 온도상승 버튼 눌러야 하는 횟수 1 빼기\n  flow.set('upnum', upnum) ; //1 뺀 남은 온도상승 버튼 눌러야 하는 횟수 저장\n  msg.payload = '' ;\n  return msg ; // 온도상승 버튼 누르기\n}\n","outputs":1,"noerr":0,"x":500,"y":120,"wires":[["8639de3b.9175"]]},{"id":"47b2cf5d.cc24c","type":"complete","z":"c5da80cc.32145","name":"","scope":["5ce03b75.82fa64"],"uncaught":false,"x":110,"y":120,"wires":[["c0791904.66f178"]]},{"id":"d3b38e9.6bab17","type":"delay","z":"c5da80cc.32145","name":"","pauseType":"delay","timeout":"0.5","timeoutUnits":"seconds","rate":"1","nbRateUnits":"1","rateUnits":"second","randomFirst":"1","randomLast":"5","randomUnits":"seconds","drop":false,"x":890,"y":500,"wires":[["6d4e0db4.c89384"]]},{"id":"ebb49db0.88547","type":"delay","z":"c5da80cc.32145","name":"","pauseType":"delay","timeout":"1","timeoutUnits":"seconds","rate":"1","nbRateUnits":"1","rateUnits":"second","randomFirst":"1","randomLast":"5","randomUnits":"seconds","drop":false,"x":880,"y":540,"wires":[["5ce03b75.82fa64"]]},{"id":"5ce03b75.82fa64","type":"function","z":"c5da80cc.32145","name":"0","func":"msg.payload = 0\nreturn msg;","outputs":1,"noerr":0,"x":1030,"y":540,"wires":[["b76b310d.d2d2d"]]},{"id":"6d4e0db4.c89384","type":"function","z":"c5da80cc.32145","name":"1","func":"msg.payload = 1\nreturn msg;","outputs":1,"noerr":0,"x":1030,"y":500,"wires":[["b76b310d.d2d2d"]]},{"id":"b76b310d.d2d2d","type":"rpi-gpio out","z":"c5da80cc.32145","name":"","pin":"5","set":false,"level":"0","freq":"","out":"out","x":1170,"y":500,"wires":[]},{"id":"cbf34895.c20e58","type":"function","z":"c5da80cc.32145","name":"온도 하강","func":"var downnum = '' ; //온도하강 버튼 눌러야 하는 횟수\nif (msg.topic == 'tempdown') { //처음 명령을 받았을 때, msg.payload는 온도하강 버튼 눌러야 하는 횟수\n  downnum = msg.payload ;\n} else { //msg.complete로 부터 받은 명령\n  downnum = flow.get('downnum') || 0; //남은 온도하강 버튼 눌러야 하는 횟수\n}\nif (downnum !== 0) { //남은 온도하강 버튼 눌러야 하는 횟수가 0이 아닐 때\n  downnum-- ; //남은 온도하강 버튼 눌러야 하는 횟수 1 빼기\n  flow.set('downnum', downnum) ; //1 뺀 남은 온도하강 버튼 눌러야 하는 횟수 저장\n  msg.payload = '' ;\n  return msg ; // 온도하강 버튼 누르기\n}\n","outputs":1,"noerr":0,"x":500,"y":160,"wires":[["77346de9.44c104"]]},{"id":"d4b3e452.6b2408","type":"complete","z":"c5da80cc.32145","name":"","scope":["f3123476.1bcf98"],"uncaught":false,"x":110,"y":160,"wires":[["2f069ea8.fc4192"]]},{"id":"4578395a.fc1a98","type":"delay","z":"c5da80cc.32145","name":"","pauseType":"delay","timeout":"0.5","timeoutUnits":"seconds","rate":"1","nbRateUnits":"1","rateUnits":"second","randomFirst":"1","randomLast":"5","randomUnits":"seconds","drop":false,"x":890,"y":580,"wires":[["809d3ffe.43bd8"]]},{"id":"8d6d19ea.6f8b38","type":"delay","z":"c5da80cc.32145","name":"","pauseType":"delay","timeout":"1","timeoutUnits":"seconds","rate":"1","nbRateUnits":"1","rateUnits":"second","randomFirst":"1","randomLast":"5","randomUnits":"seconds","drop":false,"x":880,"y":620,"wires":[["f3123476.1bcf98"]]},{"id":"f3123476.1bcf98","type":"function","z":"c5da80cc.32145","name":"0","func":"msg.payload = 0\nreturn msg;","outputs":1,"noerr":0,"x":1030,"y":620,"wires":[["f269d303.db59"]]},{"id":"809d3ffe.43bd8","type":"function","z":"c5da80cc.32145","name":"1","func":"msg.payload = 1\nreturn msg;","outputs":1,"noerr":0,"x":1030,"y":580,"wires":[["f269d303.db59"]]},{"id":"f269d303.db59","type":"rpi-gpio out","z":"c5da80cc.32145","name":"","pin":"7","set":false,"level":"0","freq":"","out":"out","x":1170,"y":580,"wires":[]},{"id":"4e6a0583.c8c94c","type":"delay","z":"c5da80cc.32145","name":"","pauseType":"delay","timeout":"1","timeoutUnits":"seconds","rate":"1","nbRateUnits":"1","rateUnits":"second","randomFirst":"1","randomLast":"5","randomUnits":"seconds","drop":false,"x":880,"y":700,"wires":[["9c6c172e.607c58"]]},{"id":"9c6c172e.607c58","type":"function","z":"c5da80cc.32145","name":"0","func":"msg.payload = 0\nreturn msg;","outputs":1,"noerr":0,"x":1030,"y":700,"wires":[["70a13a31.473ce4"]]},{"id":"f496f64d.2c8488","type":"function","z":"c5da80cc.32145","name":"1","func":"msg.payload = 1\nreturn msg;","outputs":1,"noerr":0,"x":1030,"y":660,"wires":[["70a13a31.473ce4"]]},{"id":"70a13a31.473ce4","type":"rpi-gpio out","z":"c5da80cc.32145","name":"","pin":"11","set":false,"level":"0","freq":"","out":"out","x":1180,"y":660,"wires":[]},{"id":"c0791904.66f178","type":"change","z":"c5da80cc.32145","name":"토픽 제거","rules":[{"t":"delete","p":"topic","pt":"msg"}],"action":"","property":"","from":"","to":"","reg":false,"x":300,"y":120,"wires":[["73e733a5.b8d13c"]]},{"id":"2f069ea8.fc4192","type":"change","z":"c5da80cc.32145","name":"토픽 제거","rules":[{"t":"delete","p":"topic","pt":"msg"}],"action":"","property":"","from":"","to":"","reg":false,"x":300,"y":160,"wires":[["cbf34895.c20e58"]]},{"id":"69cde2c9.20633c","type":"delay","z":"c5da80cc.32145","name":"","pauseType":"delay","timeout":"0.5","timeoutUnits":"seconds","rate":"1","nbRateUnits":"1","rateUnits":"second","randomFirst":"1","randomLast":"5","randomUnits":"seconds","drop":false,"x":890,"y":660,"wires":[["f496f64d.2c8488"]]},{"id":"5ea14e3f.c98df","type":"comment","z":"c5da80cc.32145","name":"nfc 태그","info":"","x":100,"y":300,"wires":[]},{"id":"43fd19.6ed3e2e8","type":"delay","z":"c5da80cc.32145","name":"","pauseType":"delay","timeout":"0","timeoutUnits":"seconds","rate":"1","nbRateUnits":"1","rateUnits":"second","randomFirst":"1","randomLast":"5","randomUnits":"seconds","drop":false,"x":220,"y":340,"wires":[["c33d2ce5.37e16"]]},{"id":"ae44550c.5e5fd8","type":"delay","z":"c5da80cc.32145","name":"","pauseType":"delay","timeout":"1","timeoutUnits":"seconds","rate":"1","nbRateUnits":"1","rateUnits":"second","randomFirst":"1","randomLast":"5","randomUnits":"seconds","drop":false,"x":220,"y":380,"wires":[["aabcf1b1.36a73"]]},{"id":"179ae374.229dad","type":"delay","z":"c5da80cc.32145","name":"","pauseType":"delay","timeout":"2","timeoutUnits":"seconds","rate":"1","nbRateUnits":"1","rateUnits":"second","randomFirst":"1","randomLast":"5","randomUnits":"seconds","drop":false,"x":220,"y":420,"wires":[["f1dc39fa.ab0468"]]},{"id":"592c9dc2.8bc204","type":"delay","z":"c5da80cc.32145","name":"","pauseType":"delay","timeout":"3","timeoutUnits":"seconds","rate":"1","nbRateUnits":"1","rateUnits":"second","randomFirst":"1","randomLast":"5","randomUnits":"seconds","drop":false,"x":220,"y":460,"wires":[["f951755d.4e60b8"]]},{"id":"17ee1eb3.98a071","type":"delay","z":"c5da80cc.32145","name":"","pauseType":"delay","timeout":"4","timeoutUnits":"seconds","rate":"1","nbRateUnits":"1","rateUnits":"second","randomFirst":"1","randomLast":"5","randomUnits":"seconds","drop":false,"x":220,"y":500,"wires":[["73b4f8f6.ffab58"]]},{"id":"78291803.3a54a8","type":"ui_button","z":"c5da80cc.32145","name":"up","group":"c3990356.67113","order":4,"width":0,"height":0,"passthru":false,"label":"up","tooltip":"","color":"","bgcolor":"","icon":"","payload":"up","payloadType":"str","topic":"","x":90,"y":660,"wires":[["f097b786.fddb78","d96be1e1.c599"]]},{"id":"dd08a6ae.2bbb38","type":"ui_button","z":"c5da80cc.32145","name":"down","group":"c3990356.67113","order":4,"width":0,"height":0,"passthru":false,"label":"down","tooltip":"","color":"","bgcolor":"","icon":"","payload":"down","payloadType":"str","topic":"","x":90,"y":700,"wires":[["f097b786.fddb78","849e6410.45f918"]]},{"id":"f097b786.fddb78","type":"ui_toast","z":"c5da80cc.32145","position":"top right","displayTime":"1","highlight":"","sendall":true,"outputs":0,"ok":"OK","cancel":"","raw":false,"topic":"","name":"","x":310,"y":660,"wires":[]},{"id":"21620e1e.d94e82","type":"mqtt in","z":"c5da80cc.32145","name":"","topic":"iot","qos":"2","datatype":"auto","broker":"acec4439.777528","x":90,"y":340,"wires":[["43fd19.6ed3e2e8","ae44550c.5e5fd8","179ae374.229dad","592c9dc2.8bc204","17ee1eb3.98a071"]]},{"id":"6ba3e4cc.59bb2c","type":"function","z":"c5da80cc.32145","name":"0","func":"msg.payload = 0\nreturn msg;","outputs":1,"noerr":0,"x":470,"y":1540,"wires":[["41eeb05e.cfc5a"]]},{"id":"545b9cd.eb79d64","type":"function","z":"c5da80cc.32145","name":"1","func":"msg.payload = 1\nreturn msg;","outputs":1,"noerr":0,"x":470,"y":1500,"wires":[["41eeb05e.cfc5a"]]},{"id":"41eeb05e.cfc5a","type":"rpi-gpio out","z":"c5da80cc.32145","name":"","pin":"3","set":false,"level":"0","freq":"","out":"out","x":610,"y":1500,"wires":[]},{"id":"bb784dff.eb54","type":"function","z":"c5da80cc.32145","name":"0","func":"msg.payload = 0\nreturn msg;","outputs":1,"noerr":0,"x":470,"y":1620,"wires":[["63409237.c78f2c"]]},{"id":"c3ad8472.b25bd8","type":"function","z":"c5da80cc.32145","name":"1","func":"msg.payload = 1\nreturn msg;","outputs":1,"noerr":0,"x":470,"y":1580,"wires":[["63409237.c78f2c"]]},{"id":"63409237.c78f2c","type":"rpi-gpio out","z":"c5da80cc.32145","name":"","pin":"5","set":false,"level":"0","freq":"","out":"out","x":610,"y":1580,"wires":[]},{"id":"58acbdf1.2b4af4","type":"function","z":"c5da80cc.32145","name":"0","func":"msg.payload = 0\nreturn msg;","outputs":1,"noerr":0,"x":470,"y":1700,"wires":[["29b20ed2.bf1572"]]},{"id":"19eaf044.f399d","type":"function","z":"c5da80cc.32145","name":"1","func":"msg.payload = 1\nreturn msg;","outputs":1,"noerr":0,"x":470,"y":1660,"wires":[["29b20ed2.bf1572"]]},{"id":"29b20ed2.bf1572","type":"rpi-gpio out","z":"c5da80cc.32145","name":"","pin":"7","set":false,"level":"0","freq":"","out":"out","x":610,"y":1660,"wires":[]},{"id":"2a362a35.b362d6","type":"function","z":"c5da80cc.32145","name":"0","func":"msg.payload = 0\nreturn msg;","outputs":1,"noerr":0,"x":470,"y":1780,"wires":[["32af8c71.651f64"]]},{"id":"20d24447.8bf08c","type":"function","z":"c5da80cc.32145","name":"1","func":"msg.payload = 1\nreturn msg;","outputs":1,"noerr":0,"x":470,"y":1740,"wires":[["32af8c71.651f64"]]},{"id":"32af8c71.651f64","type":"rpi-gpio out","z":"c5da80cc.32145","name":"","pin":"11","set":false,"level":"0","freq":"","out":"out","x":620,"y":1740,"wires":[]},{"id":"f8635482.870878","type":"delay","z":"c5da80cc.32145","name":"","pauseType":"delay","timeout":"1","timeoutUnits":"seconds","rate":"1","nbRateUnits":"1","rateUnits":"second","randomFirst":"1","randomLast":"5","randomUnits":"seconds","drop":false,"x":320,"y":1540,"wires":[["6ba3e4cc.59bb2c"]]},{"id":"ca9a3f19.a062f","type":"delay","z":"c5da80cc.32145","name":"","pauseType":"delay","timeout":"0.5","timeoutUnits":"seconds","rate":"1","nbRateUnits":"1","rateUnits":"second","randomFirst":"1","randomLast":"5","randomUnits":"seconds","drop":false,"x":330,"y":1580,"wires":[["c3ad8472.b25bd8"]]},{"id":"b3fc0b02.56f798","type":"delay","z":"c5da80cc.32145","name":"","pauseType":"delay","timeout":"1","timeoutUnits":"seconds","rate":"1","nbRateUnits":"1","rateUnits":"second","randomFirst":"1","randomLast":"5","randomUnits":"seconds","drop":false,"x":320,"y":1620,"wires":[["bb784dff.eb54"]]},{"id":"be2eef8e.d39f2","type":"delay","z":"c5da80cc.32145","name":"","pauseType":"delay","timeout":"0.5","timeoutUnits":"seconds","rate":"1","nbRateUnits":"1","rateUnits":"second","randomFirst":"1","randomLast":"5","randomUnits":"seconds","drop":false,"x":330,"y":1660,"wires":[["19eaf044.f399d"]]},{"id":"f2ba73fe.de68f","type":"delay","z":"c5da80cc.32145","name":"","pauseType":"delay","timeout":"1","timeoutUnits":"seconds","rate":"1","nbRateUnits":"1","rateUnits":"second","randomFirst":"1","randomLast":"5","randomUnits":"seconds","drop":false,"x":320,"y":1700,"wires":[["58acbdf1.2b4af4"]]},{"id":"f913436b.16df9","type":"delay","z":"c5da80cc.32145","name":"","pauseType":"delay","timeout":"1","timeoutUnits":"seconds","rate":"1","nbRateUnits":"1","rateUnits":"second","randomFirst":"1","randomLast":"5","randomUnits":"seconds","drop":false,"x":320,"y":1780,"wires":[["2a362a35.b362d6"]]},{"id":"e086a0c.34b676","type":"inject","z":"c5da80cc.32145","name":"전원","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":150,"y":1500,"wires":[["f8635482.870878","91d751fc.5b25b"]]},{"id":"e0a7022f.97fa8","type":"inject","z":"c5da80cc.32145","name":"온도상승","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":160,"y":1580,"wires":[["ca9a3f19.a062f","b3fc0b02.56f798"]]},{"id":"c0b7a25c.70c28","type":"inject","z":"c5da80cc.32145","name":"온도 하강","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":160,"y":1660,"wires":[["be2eef8e.d39f2","f2ba73fe.de68f"]]},{"id":"ac96bb19.5f7fe8","type":"inject","z":"c5da80cc.32145","name":"시간 상승","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":160,"y":1740,"wires":[["f913436b.16df9","3780f216.4a8bee"]]},{"id":"91d751fc.5b25b","type":"delay","z":"c5da80cc.32145","name":"","pauseType":"delay","timeout":"0.5","timeoutUnits":"seconds","rate":"1","nbRateUnits":"1","rateUnits":"second","randomFirst":"1","randomLast":"5","randomUnits":"seconds","drop":false,"x":330,"y":1500,"wires":[["545b9cd.eb79d64"]]},{"id":"3780f216.4a8bee","type":"delay","z":"c5da80cc.32145","name":"","pauseType":"delay","timeout":"0.5","timeoutUnits":"seconds","rate":"1","nbRateUnits":"1","rateUnits":"second","randomFirst":"1","randomLast":"5","randomUnits":"seconds","drop":false,"x":330,"y":1740,"wires":[["20d24447.8bf08c"]]},{"id":"543a60ea.119f3","type":"comment","z":"c5da80cc.32145","name":"UI","info":"","x":90,"y":620,"wires":[]},{"id":"a55c27b6.785558","type":"link in","z":"c5da80cc.32145","name":"","links":["c33d2ce5.37e16","f1dc39fa.ab0468","f951755d.4e60b8","73b4f8f6.ffab58","d96be1e1.c599","8639de3b.9175"],"x":775,"y":520,"wires":[["d3b38e9.6bab17","ebb49db0.88547"]]},{"id":"f5c3c813.d1b288","type":"link in","z":"c5da80cc.32145","name":"","links":["aabcf1b1.36a73","849e6410.45f918","77346de9.44c104"],"x":775,"y":600,"wires":[["4578395a.fc1a98","8d6d19ea.6f8b38"]]},{"id":"c33d2ce5.37e16","type":"link out","z":"c5da80cc.32145","name":"","links":["a55c27b6.785558"],"x":315,"y":340,"wires":[]},{"id":"aabcf1b1.36a73","type":"link out","z":"c5da80cc.32145","name":"","links":["f5c3c813.d1b288"],"x":315,"y":380,"wires":[]},{"id":"f1dc39fa.ab0468","type":"link out","z":"c5da80cc.32145","name":"","links":["a55c27b6.785558"],"x":315,"y":420,"wires":[]},{"id":"f951755d.4e60b8","type":"link out","z":"c5da80cc.32145","name":"","links":["a55c27b6.785558"],"x":315,"y":460,"wires":[]},{"id":"73b4f8f6.ffab58","type":"link out","z":"c5da80cc.32145","name":"","links":["a55c27b6.785558"],"x":315,"y":500,"wires":[]},{"id":"d96be1e1.c599","type":"link out","z":"c5da80cc.32145","name":"","links":["a55c27b6.785558"],"x":175,"y":660,"wires":[]},{"id":"849e6410.45f918","type":"link out","z":"c5da80cc.32145","name":"","links":["f5c3c813.d1b288"],"x":175,"y":700,"wires":[]},{"id":"de1631b5.e85aa","type":"comment","z":"c5da80cc.32145","name":"HTTP","info":"","x":90,"y":40,"wires":[]},{"id":"8639de3b.9175","type":"link out","z":"c5da80cc.32145","name":"","links":["a55c27b6.785558"],"x":655,"y":120,"wires":[]},{"id":"77346de9.44c104","type":"link out","z":"c5da80cc.32145","name":"","links":["f5c3c813.d1b288"],"x":655,"y":160,"wires":[]},{"id":"bacb5198.afb12","type":"link out","z":"c5da80cc.32145","name":"","links":["eff1ac98.e09cf"],"x":655,"y":80,"wires":[]},{"id":"eff1ac98.e09cf","type":"link in","z":"c5da80cc.32145","name":"","links":["bacb5198.afb12"],"x":775,"y":420,"wires":[["23580e4f.cb9d52","3ae76bca.76e8d4"]]},{"id":"a288df1f.ef98f","type":"inject","z":"c5da80cc.32145","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":900,"y":1580,"wires":[["99a6a2d5.9e8f7"]]},{"id":"c87210f0.bc06a","type":"function","z":"c5da80cc.32145","name":"temp 0","func":"flow.set('temp', 0) ;","outputs":1,"noerr":0,"x":1050,"y":1500,"wires":[[]]},{"id":"63c7bc13.16c5a4","type":"function","z":"c5da80cc.32145","name":"upnum 0","func":"flow.set('upnum', 0) ;","outputs":1,"noerr":0,"x":1060,"y":1660,"wires":[[]]},{"id":"90fd7c77.000d2","type":"function","z":"c5da80cc.32145","name":"status off","func":"flow.set('status', 'off') ;","outputs":1,"noerr":0,"x":1060,"y":1540,"wires":[[]]},{"id":"99a6a2d5.9e8f7","type":"function","z":"c5da80cc.32145","name":"time off","func":"flow.set('time', 'off') ;","outputs":1,"noerr":0,"x":1060,"y":1580,"wires":[[]]},{"id":"1ac7da28.1d3836","type":"inject","z":"c5da80cc.32145","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":900,"y":1540,"wires":[["90fd7c77.000d2"]]},{"id":"857a880c.b1e808","type":"inject","z":"c5da80cc.32145","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":900,"y":1660,"wires":[["63c7bc13.16c5a4"]]},{"id":"cd7348a5.cf3798","type":"inject","z":"c5da80cc.32145","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":900,"y":1500,"wires":[["c87210f0.bc06a"]]},{"id":"5154ce33.69008","type":"inject","z":"c5da80cc.32145","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":900,"y":1620,"wires":[["cb494aaf.11bb28"]]},{"id":"cb494aaf.11bb28","type":"function","z":"c5da80cc.32145","name":"status off","func":"flow.set('status', 'on') ;","outputs":1,"noerr":0,"x":1060,"y":1620,"wires":[[]]},{"id":"a3986073.67bb4","type":"inject","z":"c5da80cc.32145","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":900,"y":1700,"wires":[["60561e11.adaaf"]]},{"id":"60561e11.adaaf","type":"function","z":"c5da80cc.32145","name":"downnum 0","func":"flow.set('downnum', 0) ;","outputs":1,"noerr":0,"x":1070,"y":1700,"wires":[[]]},{"id":"e510e2ca.1dcc7","type":"link in","z":"c5da80cc.32145","name":"","links":["b11de662.2f7f18"],"x":775,"y":680,"wires":[["69cde2c9.20633c","4e6a0583.c8c94c"]]},{"id":"b11de662.2f7f18","type":"link out","z":"c5da80cc.32145","name":"","links":["e510e2ca.1dcc7"],"x":655,"y":200,"wires":[]},{"id":"207e332f.a6297c","type":"comment","z":"c5da80cc.32145","name":"전원버튼","info":"","x":660,"y":420,"wires":[]},{"id":"20485729.62c0b8","type":"comment","z":"c5da80cc.32145","name":"온도상승버튼","info":"","x":670,"y":520,"wires":[]},{"id":"2d5d9d5b.efcac2","type":"comment","z":"c5da80cc.32145","name":"온도하강버튼","info":"","x":670,"y":600,"wires":[]},{"id":"b9311368.908e2","type":"comment","z":"c5da80cc.32145","name":"시간상승버튼","info":"","x":670,"y":680,"wires":[]},{"id":"b9ec8b56.fddcf8","type":"comment","z":"c5da80cc.32145","name":"GPIO","info":"","x":810,"y":380,"wires":[]},{"id":"c3990356.67113","type":"ui_group","z":"","name":"gauge1","tab":"bae91927.0d7978","order":1,"disp":false,"width":"6","collapse":false},{"id":"acec4439.777528","type":"mqtt-broker","z":"","name":"","broker":"localhost","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"birthTopic":"","birthQos":"0","birthPayload":"","closeTopic":"","closePayload":"","willTopic":"","willQos":"0","willPayload":""},{"id":"bae91927.0d7978","type":"ui_tab","z":"","name":"tab1","icon":"dashboard","disabled":false,"hidden":false}]
```
### 3. Mobile
#### 1) External IP
- 이 http 통신을 IoT system에 맞게 어떤 환경에서도 전기장판을 제어할 수 있도록 하기 위해 공유기 설정의 버추얼 서버 세팅에서 Node-RED port인 1880을 external port와 연결시켰습니다.
- 이 과정을 통해 action 어플에서 http request target host를 external ip 및 1880 port를 통해 Raspberry Pi Node-RED server로 접근이 가능합니다.

<p align=center><img src=https://i.imgur.com/AOuKOlq.png width=600><br>공유기 설정</p>

#### 2) SSL Authentication
- 하지만 Action 어플에서 external ip를 통해 접근하는 것은 보안에 상당히 심각한 상황을 초래할 수 있습니다.
- 취약한 보안 환경에 처한 Raspberry Pi의 Node-RED를 SSL을 통해 보안성을 보완했고 그 방법은 다음과 같습니다.
```bash
openssl genrsa -out node-key.pem 2048
openssl req -new -sha256 -key node-key.pem -out node-csr.pem
openssl x509 -req -in node-csr.pem -signkey node-key.pem -out node-cert.pem
```
Node-RED의 설정환경인 settings.js에서 아래 코드를 입력해줍니다.
```js
https: {
    key: fs.readFileSync('node-key.pem'),
    cert: fs.readFileSync('node-cert.pem')
},
```
requireHttps의 value가 true인지 확인해줍니다.
```js
requireHttps: true
```
- SSL을 통해 Node-RED로 접근하는 통신을 암호화함으로써, 인증을 받은 사용자만이 server에 접근할 수 있도록 해주었습니다.
#### 3) Http Communication
##### Action - iPhone Application
- 아이폰 어플리케이션 'Action'은 특정 host로의 http 통신을 할 수 있습니다.
- on, off는 'status' key값에 'on', 'off'를 post합니다.
- 3, 4, 5, 6은 'temp' key값에 '3', '4', '5', '6'을 post합니다.
- status는 'status' key값에 '0'을 post합니다.
- Action 어플에서 http request target host는 자기 자신의 경우 127.0.0.1 또는 localhost이고, 같은 공유기 망 내의 경우 internal IP를 통해 접속이 가능합니다. 하지만 언제 어디서나 전기장판을 제어하기 위해 external ip를 통해 http 통신을 구현했습니다.
<p align=center><img src=https://i.imgur.com/pVWJgS5.jpg width=300> <img src=https://i.imgur.com/3Vj1xoM.jpg width=300><br>Action Application</p>

- 하지만 http 통신을 통한 전기장판 제어는 iPhone 펌웨어 업데이트로 SSL 보안성 강화로 인해 SSL 인증이 더이상 작동하지 않게 되었습니다.
- 이 문제는 iPhone을 이른바 '탈옥'한 후 특정 api(sslkillswitch.deb)를 설치하여 해결할 수 있었지만, 이는 정상적인 해결방법이라고 보기 힘들었기 때문에 다른 방법을 통해 전기장판을 제어했습니다.

#### 4) Node-RED UI
- *http://external_ip:1880/ui* 주소를 통해 Node-RED UI에 접속할 수 있습니다. Up 버튼 클릭시 온도 상승, down버튼 클릭시 온도 하강 GPIO에 신호를 전달합니다.
- 위 주소를 PC 및 모바일 브라우저를 통해 접속해도 같은 기능을 수행할 수 있기 때문에 언제 어디서나 external ip를 통해 전기장판의 온도를 제어할 수 있도록 했습니다.
<p align=center><img src=https://i.imgur.com/qyu2xzQ.png width=700><br>Node-RED UI</p>

#### 5) SSH with NFC Tag, iPhone Shortcut
##### NFC Tag
- NFC는 삼성페이, 교통카드 등 생활 속에서 널리 쓰이는 무선 데이터 전송 방식입니다.
- 시중에서 아주 저렴한 가격으로 판매하는 nfc tag 스티커를 활용하여 이 tag가 스마트폰에서 인식될 때 특정 행동을 취하는 방법을 사용했습니다.
<p align=center><img src=https://seritag.com/images/b/sb-main800-45.jpg width = 300><br> NFC Tag 스티커</p>

- iPhone 최신 기종에서 기본 어플리케이션으로 사용 가능한 '자동화'(shortcut)는 여러가지 특정 동작들을 하나의 sequence로 동작하게 해 주는 기능을 가지고 있습니다.
- 이 '자동화' 어플리케이션에서 특정 nfc tag를 인식했을 때, 특정 host(전기장판 IoT system의 경우 raspberry pi internal ip)로 ssh(port는 22)를 통해 입력값을 전달할 수 있도록 했습니다.
- 입력값은 localhost로 '/iot' topic으로 "hello"라는 payload를 mqtt로 publish하는 코드입니다.
<p align=center><img src=https://i.imgur.com/I4Y7EDQ.png width=400><br>자동화 앱 화면</p>

- 그 결과 상단의 *2. Raspberry Pi with Node-RED &#8594; 4) MQTT* 부분의 Node-RED 플로우에 전달되어 4에 해당하는 온도값을 자동으로 설정해주는 동작을 실행하게 됩니다.

## Review
처음으로 DIY IoT System을 전기장판을 활용하여 구축해보았는데, 생각보다 기능 그 자체도 중요하지만, 보안, 접근성등을 고려하여 sensor 제어 방식을 설정해야 한다는 것을 배웠습니다. 아쉬웠던 점으로, 처음 목표했던 전체 버튼 제어에 실패하고 전원 버튼을 제어하지 못했다는 점에서 이 프로젝트는 아직 미완성이라고 평가하고 싶습니다. 또한, 전체적으로 mobile 환경에서 sensor 제어까지의 중간 단계가 번잡하고, 데이터들이 거쳐가는 통신 프로토콜의 통일성이 부족한 점이 아쉽습니다. 반면, 만족스런 부분들은 필요에 의해 노력하여 성공적인 IoT system을 구축했고, 실생활에서 매우 편리하게 사용했다는 점입니다. 또한, 이 프로젝트에서 적은 금액(총 5만원 이하)으로 최대의 성과를 달성했다는 점이 매우 만족스러웠습니다. 진행 과정에서 ESP8266 디바이스가 플라스틱 쪼가리가 되고, 보안 관련 부분이 큰 걸림돌이 되는 등의 역경이 있었지만 이를 전부 이겨내고 프로젝트를 성공시킨 경험이 앞으로 수많은 프로젝트를 진행함에 있어서 든든한 밑거름이 될 것이라고 생각합니다.
