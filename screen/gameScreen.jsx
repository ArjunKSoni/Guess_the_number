import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, Alert, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Gamescreen({ screen, setScreen, Setgameover, setLogs, setNumber }) {
    const [min, setmin] = useState(1)
    const [max, setmax] = useState(100)
    const [attempt, setAtt] = useState(0);
    const [logs, setlogs] = useState([])
    const [guessed, setGuess] = useState(Math.floor((Math.random() * (max - min)) + min))
    useEffect(() => {
        setAtt(attempt + 1);
        setlogs(logs.concat(guessed))
        if (guessed == screen) { setNumber(screen); Setgameover(attempt); setScreen(""); setLogs(logs.concat(guessed)) }
    }, [guessed])
    return (
        <View>
            <Text className="text-green-500 font-extrabold text-4xl mt-4 text-center">Guess the number!!</Text>
            <Text className="text-white mt-4 font-bold text-center">Your number</Text>
            <View className=" rounded-xl p-3">
                <Text className="text-yellow-500 text-center font-bold text-5xl">{screen}</Text>
            </View>
            <View className="p-5 rounded-xl" style={{ backgroundColor: "#72063c50" }}>
                <Text className="text-center text-2xl text-white font-bold">Opponent's Guess</Text>
                <Text className="text-green-500 text-2xl text-center font-extrabold">{guessed}</Text>
                <Text className="text-center text-white mt-10">Gussed number is Higher or Lower?</Text>
                <View className="flex items-center justify-around mt-4 flex-row">
                    <AntDesign onPress={() => { if (screen < guessed) { setmax(parseInt(guessed)); setGuess(Math.floor((Math.random() * (parseInt(guessed) - min)) + min)) } }} name="pluscircle" size={40} color="black" />
                    <AntDesign onPress={() => { if (screen > guessed) { setmin(parseInt(guessed)); setGuess(Math.floor((Math.random() * (max - parseInt(guessed))) + parseInt(guessed))) } }} name="minuscircle" size={40} color="black" />
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} className="mb-16 overflow-scroll">
                {logs.map((e, i) => {
                    return <Text style={{ backgroundColor: "#72063c50" }} key={attempt - i} className="text-center rounded m-2 p-2 text-white font-bold text-lg">{i + 1}) opponent gussed {e}</Text>
                })}
            </ScrollView>
        </View>
    );
}
