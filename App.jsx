import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ImageBackground, SafeAreaView } from 'react-native';
import Start from './screen/startScreen';
import { useState } from 'react';
import Gamescreen from './screen/gameScreen';
import Endscreen from './screen/endScreen';


export default function App() {
  const [screen, setScreen] = useState("")
  const [gameOver, Setgameover] = useState("")
  const [number, setNumber] = useState("")
  const [logs, setLogs] = useState([])
  let Screen = <Start setScreen={setScreen} />
  if (screen) { Screen = <Gamescreen screen={screen} setNumber={setNumber} setLogs={setLogs} Setgameover={Setgameover} setScreen={setScreen} /> }
  else if (gameOver) { Screen = <Endscreen Setgameover={Setgameover} logs={logs} number={number} setScreen={setScreen} gameOver={gameOver} /> }
  else Screen = <Start setScreen={setScreen} />
  return (
    <>
      <SafeAreaView style={{ backgroundColor: "#4B4453" }} className="flex-1">
        <StatusBar style="light" />
        <ImageBackground resizeMethod="scale" style={{ height: "100%", width: "100%", position: "absolute" }} source={{ uri: "https://cdn.pixabay.com/photo/2019/08/14/20/54/mobile-video-game-vector-background-4406706_1280.png" }} />
        <View className="flex-1 items-center pt-8 justify-start">
          {Screen}
        </View>
      </SafeAreaView >
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
