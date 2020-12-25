# IoT Project - Electric Blanket
- 진행 기간 : 2019년 겨울
- 내용 : 약 2년동안 프로그래밍 독학 및 다양한 프로그램을 통해 IoT에 관한 관심을 높혀 갔고, 마침내 2019년 11월 스마트팩토리 아웃소싱 솔루션 기업인 CyberTechFriend에서 4개월 동안의 계약직 업무를 통해 IoT에 관한 자신감이 최대인 시점이 바로 2019년 겨울이었습니다. 프로그래밍 역량을 강화하기 위해 한 학기 휴학을 결정하고, 하루종일 프로그래밍만 해도 매우 행복했던 시기였습니다.<br>
## Project Synopsis
비교적 유연한 근무환경이었던 계약직 기간동안 점심 이후 느즈막히 기상하고, 새벽까지 깨어있는 생활패턴이 일상이었습니다. 그러한 생활패턴에서 추위를 선호하지 않는 저는 주로 방 안 침대에서 10시간 이상 지내는 일이 잦았습니다.<br>
이 과정에서 제가 사용중이던 전기장판은 최대 타이머가 9시간이었기 때문에 꼭 한, 두 시간씩 전기장판이 꺼진 채로 추위와 싸워야 했습니다. 이 불편함으로 인해 그동안의 쌓아온 능력을 활용하여 문제를 해결하고자 시도한 것이 바로 이 전기장판 IoT 프로젝트입니다.<br>
### Purpose
전기장판을 컨트롤할 수 있는 컨트롤러의 버튼을 물리적, 소프트웨어적으로 해킹하여 최종적으로 모바일 환경에서 언제, 어디서든 전기장판의 현재 상황을 체크할 수있고, 온도 및 시간을 컨트롤할 수 있게 하는 것이 목표입니다.<br>
## Tools
### Hardware
- <a href="https://www.qoo10.com/gmkt.inc/Goods/Goods.aspx?goodscode=632523807">샤오미 전기장판</a><br>
<img src=https://gd.image-gmkt.com/ai/901/931/1323931901_03.g_0-w-st_g.jpg width=300><br>
2018년 12월 08일에 구매한 샤오미 전기장판입니다. 전원 버튼, 온도 up/down, 시간 up/down 총 5개의 버튼으로 조작이 가능합니다. 컨트롤러 전면부에 시간 버튼 조작시 시간, 온도 버튼 조작시 온도 level에 해당하는 숫자가 표시됩니다. 시간 level은 최소 0시간부터 9시간까지 설정이 가능합니다.<br>
- ESP8266<br>
<img src=https://cdn.shopify.com/s/files/1/0672/9409/products/NodeMCU_ESP8266_development_board.jpg width = 300><br>
IoT에 최적화된 초소형 아두이노로써, 와이파이 연결이 가능하고 크기가 매우 작다는 점에서 수요가 있는 편입니다. 가격도 2019년 기준 10000원 이하로, 매우 저렴한 편입니다. 하지만 외부 센서와의 연결을 위한 serial pin의 개수가 다양하지 않고, 배터리를 통한 전원 공급 시 적절하지 않은 전력이 흐를 경우 회로가 타버리는 등의 내구성이 약한 점이 단점이라고 할 수 있습니다.<br>
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
<img src=https://www.codewithus.com/img/icons/arduinoicon.png width=300><br>

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
  - 전원 on/off 버튼 : 이 버튼은 최초 목표에서 제어하려고 했던 버튼 중 하나였으나, 실제 demo 실행 과정에서 다른 버튼들보다 높은 전류가 흐르는 것으로 추측합니다. 따라서 일단 다른 버튼들 제어부터 성공시킨 후, 마지막으로 전류 등을 측정하여 이 버튼에 적합한 저항을 구해 시스템을 완성시키기로 결정했습니다.<br>


## Project Details
### 1. ESP8266
- ESP8266에는 GPIO 포트가 15개가 있습니다. 이 GPIO 포트를 활용해 전기장판 컨트롤러의 버튼들을 제어했습니다.<br>
<p align=center><img src=https://i2.wp.com/play.fallows.ca/wp/wp-content/uploads/sites/4/2016/11/NodeMCU-ESP8266-12E-Limitations.jpg width=300></p><br>
ESP8266에는 와이파이 연결에 관한 CPP 예제 라이브러리가 있습니다. 해당 예제를 활용하여 먼저 ESP8266을 제 방에서 사용하고 있는 공유기 wifi에 연결시켰고, mqtt 라이브러리를 통해 임시로 server 역할을 수행하는 제 PC와의 통신에 성공했습니다. 차후 이 server는 Raspberry Pi의 Node-RED를 활용할 예정이었습니다.
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
<p align=center><img src=https://i.imgur.com/Af9Dw2S.png></p>
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

- http 통신을 통한 GPIO 제어는 최종적으로 사용하지 않는 방식입니다. 그 이유는 아래 3. Mobile에서 자세히 설명하겠습니다.
#### 3) Node-RED UI
- Node-RED의 dashboard 노드들을 활용하여 *http://localhost:1880/ui* 주소를 통해 ui를 구성할 수 있습니다.
- *up* 버튼은 온도 상승 GPIO에, *down* 버튼은 온도 하강 GPIO에 연결되어 있습니다.
- *show notification* 노드는 payload를 알림창에 띄워주는 기능을 수행합니다.
<p align=center><img src=https://i.imgur.com/OuwthqJ.png></p>


#### 4) MQTT
- *http://localhost:1883/iot* 주소를 통해 payload에 관계없이 mqtt 신호를 받게 되면 아래 플로우에서 확인할 수 있듯 위에서부터 순서대로 온도상승 &#8594; 온도 하강 &#8594; 온도 상승 3회 GPIO 신호를 전달합니다.
- 제가 직접 실생활에서 사용했을 때 전기장판의 온도 level이 4에 맞춰져있을 때 가장 적합한 온도가 유지되었습니다. 하지만, 전기장판을 처음 켰을 때 최초 온도 상승 신호가 항상 씹히는 문제가 발생했습니다. 이 문제는 처음에 온도 상승+하강 동작을 하는 것으로 해결했습니다.
- NFC tag와의 연계는 3. Mobile에서 자세히 설명하겠습니다.
<p align=center><img src=https://i.imgur.com/QOowwsL.png></p>

#### 4) Flow
```
어쩌구저쩌구
```
### 3. Mobile
#### 1) External IP
- 이 http 통신을 IoT system에 맞게 어떤 환경에서도 전기장판을 제어할 수 있도록 하기 위해 공유기 설정의 버추얼 서버 세팅에서 Node-RED port인 1880을 external port와 연결시켰습니다.
- 이 과정을 통해 action 어플에서 http request target host를 external ip 및 1880 port를 통해 Raspberry Pi Node-RED server로 접근이 가능합니다.

<p align=center><img src=https://i.imgur.com/AOuKOlq.png width=400><br>공유기 설정</p>

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
<p align=center><img src=https://i.imgur.com/pVWJgS5.jpg width=200> <img src=https://i.imgur.com/3Vj1xoM.jpg width=200><br>Action Application</p>

- 하지만 http 통신을 통한 전기장판 제어는 iPhone 펌웨어 업데이트로 SSL 보안성 강화로 인해 SSL 인증이 더이상 작동하지 않게 되었습니다.
- 이 문제는 iPhone을 이른바 '탈옥'한 후 특정 api(sslkillswitch.deb)를 설치하여 해결할 수 있었지만, 이는 정상적인 해결방법이라고 보기 힘들었기 때문에 다른 방법을 통해 전기장판을 제어했습니다.

#### 4) Node-RED UI
- *http://external_ip:1880/ui* 주소를 통해 Node-RED UI에 접속할 수 있습니다. Up 버튼 클릭시 온도 상승, down버튼 클릭시 온도 하강 GPIO에 신호를 전달합니다.
- 위 주소를 PC 및 모바일 브라우저를 통해 접속해도 같은 기능을 수행할 수 있기 때문에 언제 어디서나 external ip를 통해 전기장판의 온도를 제어할 수 있도록 했습니다.
<p align=center><img src=https://i.imgur.com/qyu2xzQ.png width=400><br>Node-RED UI</p>

#### 5) SSH with NFC Tag, iPhone Shortcut
##### NFC Tag
- NFC는 삼성페이, 교통카드 등 생활 속에서 널리 쓰이는 무선 데이터 전송 방식입니다.
- 시중에서 아주 저렴한 가격으로 판매하는 nfc tag 스티커를 활용하여 이 tag가 스마트폰에서 인식될 때 특정 행동을 취하는 방법을 사용했습니다.
<p align=center><img src=https://seritag.com/images/b/sb-main800-45.jpg width = 300><br> NFC Tag 스티커</p>

- iPhone 최신 기종에서 기본 어플리케이션으로 사용 가능한 '자동화'(shortcut)는 여러가지 특정 동작들을 하나의 sequence로 동작하게 해 주는 기능을 가지고 있습니다.
- 이 '자동화' 어플리케이션에서 특정 nfc tag를 인식했을 때, 특정 host(전기장판 IoT system의 경우 raspberry pi internal ip)로 ssh(port는 22)를 통해 입력값을 전달할 수 있도록 했습니다.
- 입력값은 localhost로 '/iot' topic으로 "hello"라는 payload를 mqtt로 publish하는 코드입니다.
<p align=center><img src=https://i.imgur.com/I4Y7EDQ.png width=200><br>자동화 앱 화면</p>

- 그 결과 상단의 *2. Raspberry Pi with Node-RED &#8594; 4) MQTT* 부분의 Node-RED 플로우에 전달되어 4에 해당하는 온도값을 자동으로 설정해주는 동작을 실행하게 됩니다.

## Review
처음으로 DIY IoT System을 전기장판을 활용하여 구축해보았는데, 생각보다 기능 그 자체도 중요하지만, 보안, 접근성등을 고려하여 sensor 제어 방식을 설정해야 한다는 것을 배웠습니다. 아쉬웠던 점으로, 처음 목표했던 전체 버튼 제어에 실패하고 전원 버튼을 제어하지 못했다는 점에서 이 프로젝트는 아직 미완성이라고 평가하고 싶습니다. 또한, 전체적으로 mobile 환경에서 sensor 제어까지의 중간 단계가 번잡하고, 데이터들이 거쳐가는 통신 프로토콜의 통일성이 부족한 점이 아쉽습니다. 반면, 만족스런 부분들은 필요에 의해 노력하여 성공적인 IoT system을 구축했고, 실생활에서 매우 편리하게 사용했다는 점입니다. 또한, 이 프로젝트에서 적은 금액(총 5만원 이하)으로 최대의 성과를 달성했다는 점이 매우 만족스러웠습니다. 진행 과정에서 ESP8266 디바이스가 플라스틱 쪼가리가 되고, 보안 관련 부분이 큰 걸림돌이 되는 등의 역경이 있었지만 이를 전부 이겨내고 프로젝트를 성공시킨 경험이 앞으로 수많은 프로젝트를 진행함에 있어서 든든한 밑거름이 될 것이라고 생각합니다.
