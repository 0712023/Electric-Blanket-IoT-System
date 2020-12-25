# IoT Project - Electric Blanket
- 진행 기간 : 2019년 겨울
- 내용 : 약 2년동안 프로그래밍 독학 및 다양한 프로그램을 통해 IoT에 관한 관심을 높혀 갔고, 마침내 2019년 11월 스마트팩토리 아웃소싱 솔루션 기업인 CyberTechFriend에서 4개월 동안의 계약직 업무를 통해 IoT에 관한 자신감이 최대인 시점이 바로 2019년 겨울이었습니다. 프로그래밍 역량을 강화하기 위해 한 학기 휴학을 결정하고, 하루종일 프로그래밍만 해도 매우 행복했던 시기였습니다.<br>
## Project Synopsis
비교적 유연한 근무환경이었던 계약직 기간동안 점심 이후 느즈막히 기상하고, 새벽까지 깨어있는 생활패턴이 일상이었습니다. 그러한 생활패턴에서 추위를 선호하지 않는 저는 주로 방 안 침대에서 10시간 이상 지내는 일이 잦았습니다.<br>
이 과정에서 제가 사용중이던 전기장판은 최대 타이머가 9시간이었기 때문에 꼭 한, 두 시간씩 전기장판이 꺼진 채로 추위와 싸워야 했습니다. 이 불편함으로 인해 그동안의 쌓아온 능력을 활용하여 문제를 해결하고자 시도한 것이 바로 이 전기장판 IoT 프로젝트입니다.<br>
### Purpose
전기장판을 컨트롤할 수 있는 리모컨의 버튼을 물리적, 소프트웨어적으로 해킹하여 최종적으로 모바일 환경에서 언제, 어디서든 전기장판의 현재 상황을 체크할 수있고, 온도 및 시간을 컨트롤할 수 있게 하는 것이 목표입니다.<br>
### Tools
#### Hardware
- <a href="https://www.qoo10.com/gmkt.inc/Goods/Goods.aspx?goodscode=632523807">샤오미 전기장판</a><br>
<img src=https://gd.image-gmkt.com/ai/901/931/1323931901_03.g_0-w-st_g.jpg width=300><br>
2018년 12월 08일에 구매한 샤오미 전기장판입니다. 전원 버튼, 온도 up/down, 시간 up/down 총 5개의 버튼으로 조작이 가능합니다. 리모컨 전면부에 시간 버튼 조작시 시간, 온도 버튼 조작시 온도 level에 해당하는 숫자가 표시됩니다. 시간 level은 최소 0시간부터 9시간까지 설정이 가능합니다.<br>
- ESP8266<br>
<img src=https://cdn.shopify.com/s/files/1/0672/9409/products/NodeMCU_ESP8266_development_board.jpg width = 300><br>
IoT에 최적화된 초소형 아두이노로써, 와이파이 연결이 가능하고 크기가 매우 작다는 점에서 수요가 있는 편입니다. 가격도 2019년 기준 10000원 이하로, 매우 저렴한 편입니다. 하지만 외부 센서와의 연결을 위한 serial pin의 개수가 다양하지 않고, 배터리를 통한 전원 공급 시 적절하지 않은 전력이 흐를 경우 회로가 타버리는 등의 내구성이 약한 점이 단점이라고 할 수 있습니다.<br>
- Raspberry Pi 3B+<br>
<img src=https://images-na.ssl-images-amazon.com/images/I/71EPckcD8ZL._AC_SL1244_.jpg width = 300><br>
전 세계에서 가장 많이 쓰이는 IoT hardware platform들 중 하나라고 할 수있는 라즈베리파이는 하나의 초소형 컴퓨터라고 볼 수 있습니다. Linux 기반의 Rasbian OS를 탑재하여 desktop 화면을 지원하며, 다양한 GPIO pin및 HDMI 포트, PiCamera 등 확장성이 매우 우수하다는 장점이 있습니다. 하지만 크기가 실제 컴퓨터에 비해 매우 작은 편이지만 다른 IoT hardware platform들에 비해 크기가 큰 편이기 때문에 휴대성이 좋지 않다는 단점이 있습니다.<br>
- Soldering
#### Software
- <a href=https://nodered.org/>Node-RED</a><br>
<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Node-red-icon.png/200px-Node-red-icon.png>
- <a href=https://www.arduino.cc/>Arduino IDE</a><br>
<img src=https://www.codewithus.com/img/icons/arduinoicon.png width=300><br>

## Project Details
### 1. Electric blanket
- 이번 프로젝트에 사용된 전기장판을 컨트롤할 수 있는 리모컨에 존재하는 5개의 버튼을 물리적으로 해킹하기 위해 리모컨의 나사를 풀고 기판을 드러냈습니다. 이후, 각 버튼의 양쪽을 납땜을 통해 전선과 연결시켰습니다.<br>
<img src=https://i.imgur.com/UjnasBw.jpg width=400><img src=https://i.imgur.com/7LebJNJ.jpg width=400><br>
- 위 사진에서 확인할 수 있듯, 실제로 연결된 버튼 쌍(GPIO out, GND)은 3개입니다. 각각 온도 up, 온도 down, 시간 up입니다. 시간 down과 전원on/off 버튼은 납땜을 하지 않았는데 그 이유는 다음과 같습니다.<br>
  -  시간 down 버튼 : 이 프로젝트 목표는 꺼지지 않는 전기장판이기 때문에 굳이 시간 down 버튼을 제어할 일이 없다고 판단했습니다. 최종 목표를 달성하기 위해 자동으로 1시간마다 시간 up 버튼을 눌러주는 기능만을 계획했기 때문입니다.
  - 전원 on/off 버튼 : 이 버튼은 최초 목표에서 제어하려고 했던 버튼 중 하나였으나, 실제 demo 실행 과정에서 다른 버튼들보다 높은 전류가 흐르는 것으로 추측합니다. 따라서 일단 다른 버튼들 제어부터 성공시킨 후, 마지막으로 전류 등을 측정하여 이 버튼에 적합한 저항을 구해 시스템을 완성시키기로 결정했습니다.
### 2. ESP8266
- ESP8266에는 GPIO 포트가 15개가 있습니다. 이 GPIO 포트를 활용해 전기장판 리모컨의 다양한 버튼들을 제어했습니다.<br>
<img src=https://community.blynk.cc/uploads/default/optimized/2X/8/84533f57f9dbed3b757a73ef018fc0a981dac268_2_690x358.jpg width=500><br>
ESP8266에는 와이파이 연결에 관한 CPP 예제 라이브러리가 있었습니다. 해당 예제를 활용하여 먼저 ESP8266을 제 방에서 사용하고 있는 wifi에 연결시켜주었고, 해당 예제를 참고하여 mqtt 라이브러리를 통해 server 역할을 수행하는 제 PC와 통신에 성공했습니다.
- 데이터 전달 알고리즘은 mqtt를 통해 ESP8266로 전달받은 데이터(payload)의 문자열에 따라 구분했습니다.
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
- 이후, GPIO 예제를 통해 
실제로 아래 ESP8266을 활용하여 이 전원 on/off 버튼을 제어하는 데 시도했지만 실패했고, 그 이후 arduino IDE와도 통신이 되지 않거나 이미 upload되었있던 wifi 통신 test 신호도 잡히지 않는 등, 높은 전류로 인해 ESP8266 디바이스까지 과전류로 회로가 타버린 것으로 추측합니다.
### 3. Raspberry Pi
## Review
