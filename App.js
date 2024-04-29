import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const quizData = [
    {
      question: "What is the capital of India?",
      options: ['Chandigarh', 'Goa', 'Delhi', 'Shimla'],
      answer: 'Delhi'
    },
    {
      question: "Largest animal in the world?",
      options: ['Elephant', 'Blue Whale', 'Hippopotamus', 'Giraffe'],
      answer: 'Blue Whale'
    },
    {
      question: "who is vaibhav s ladhi",
      options: ['student', 'Buisnessman', 'Engineer', 'Doctor'],
      answer: 'Buisnessman'
    }
  ];

  const handleAnswer = (selectedAnswer) => {
    const answer = quizData[currentQuestion]?.answer;
    if (answer === selectedAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  const handlerestart = () =>{
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  }

  return (
    <View style={styles.container}>
      <Text style = {styles.heading}>Quize App</Text>
      {showScore ? (
        <View>
          <Text key={styles.optionStyle }>{ " Score : "+ score}</Text>
          <TouchableOpacity  style ={styles.optionContainer} onPress={handlerestart}>
            <Text style = {styles.resetBtnText}>Reset</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <View style={styles.questionContainer}>
            <Text style={styles.questionText}>{quizData[currentQuestion]?.question}</Text>
            {quizData[currentQuestion]?.options.map((item, index) => (
              <TouchableOpacity key={index} onPress={() => handleAnswer(item)} style={styles.optionContainer}>
                <Text style={styles.optionStyle}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionContainer: {
    backgroundColor: '#DDDDDD', // Corrected color format
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  optionStyle: {
    color: 'green',
    padding: 5,
    alignItems: 'center',
    fontSize: 16 // Increased font size for better visibility
  },
  optionContainer: {
    borderColor: 'black',
    borderWidth: 2,
    margin: 10,
    borderRadius: 5 // Added borderRadius for option container
  },
  questionText: {
    fontSize: 24,
    textAlign: 'center' // Center align the question text
  },
resetBtnText:{
fontSize : 18,
padding : 'horizontal',
margin : 5,

  },
 heading:{
  fontSize : 18,
  marginBottom : 30,
  fontWeight : 'bold'
 } 

});
