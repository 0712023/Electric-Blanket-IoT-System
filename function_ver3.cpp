/*
  Simple wemos D1 mini  MQTT example
  This sketch demonstrates the capabilities of the pubsub library in combination
  with the ESP8266 board/library.
  It connects to the provided access point using dhcp, using ssid and pswd
  It connects to an MQTT server ( using mqtt_server ) then:
  - publishes "connected"+uniqueID to the [root topic] ( using topic )
  - subscribes to the topic "[root topic]/in"  with a callback to handle
  - If the first character of the topic "[root topic]/in" is an 1,
    switch ON the ESP Led, else switch it off
  - after a delay of "[root topic]/in" minimum, it will publish
    a composed payload to
  It will reconnect to the server if the connection is lost using a blocking
  reconnect function.

*/

#include <ESP8266WiFi.h>
#include <PubSubClient.h>
#include <string.h>

// Update these with values suitable for your network.

const char* ssid = "0712023";
const char* pswd = "omin6743";
const char* mqtt_server = "192.168.168.202";
const char* topic = "blanket";    // rhis is the [root topic]


WiFiClient espClient;
PubSubClient client(espClient);
int count = 0;

int status = WL_IDLE_STATUS;     // the starting Wifi radio's status

void setup_wifi() {
  delay(10);
  // We start by connecting to a WiFi network
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);
  WiFi.begin(ssid, pswd);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
}

void callback(char* topic, byte* payload, unsigned int length) {
  Serial.print("Message arrived [");
  Serial.print(topic);
  Serial.print("] ");

  for (int i = 0; i < length; i++) {
    Serial.print((char)payload[i]);
  }

  char* str[5] = (char*) payload;
	char command;
	strcpy( command, str );
	Serial.print(command) ;

	Serial.print((char*) payload) ;

  Serial.println();
}

String macToStr(const uint8_t* mac)
{
  String result;
  for (int i = 0; i < 6; ++i) {
    result += String(mac[i], 16);
    if (i < 5)
      result += ':';
  }
  return result;
}

String composeClientID() {
  uint8_t mac[6];
  WiFi.macAddress(mac);
  String clientId;
  clientId += "esp-";
  clientId += macToStr(mac);
  return clientId;
}

void reconnect() {
  // Loop until we're reconnected
  while (!client.connected()) {
    Serial.print("Attempting MQTT connection...");

		String clientID = composeClientID() ;
    // Attempt to connect
    if (client.connect(clientID.c_str())) {
      Serial.println("connected");
      // Once connected, publish an announcement...
      client.publish(topic, "connected " , true );
      // ... and resubscribe
      // topic + clientID + in
      String subscription;
      subscription += topic;
      subscription += "/in";
      client.subscribe(subscription.c_str() );
      Serial.print("subscribed to : ");
      Serial.println(subscription);
    } else {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.print(" wifi=");
      Serial.print(WiFi.status());
      Serial.println(" try again in 5 seconds");
      // Wait 5 seconds before retrying
      delay(5000);
    }
  }
}

void setup() {
  pinMode(BUILTIN_LED, OUTPUT);     // Initialize the BUILTIN_LED pin as an output
  Serial.begin(115200);
  setup_wifi();
  client.setServer(mqtt_server, 1883);
  client.setCallback(callback);
}

void loop() {
  // confirm still connected to mqtt server
  if (!client.connected()) {
    reconnect();
  }
  client.loop();
  //--------------------------------Function start--------------------------------
	String payload = "I'm happy! " ;
	payload += count ;
	++count ;
	//publish
	String pubTopic;
	pubTopic += topic ;
	pubTopic += "/out";
	client.publish( (char*) pubTopic.c_str() , (char*) payload.c_str(), true );
	delay(1000);
	//--------------------------------Function end--------------------------------
}
