'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StartScreen } from './components/StartScreen';
import { GameScreen } from './components/GameScreen';
import { EndScreen } from './components/EndScreen';
import { GameState, POINTS_PER_QUESTION } from './types/game';
import { getRandomQuestions } from './data/questions';

export default function ShapeShifterGame() {
  const [gameState, setGameState] = useState<GameState>({
    currentQuestionIndex: 0,
    score: 0,
    totalQuestions: 15, // Increased for more gameplay
    isGameActive: false,
    gameScreen: 'start'
  });

  const [questions, setQuestions] = useState(() => getRandomQuestions(15));
  const [showFeedback, setShowFeedback] = useState(false);
  const [lastAnswerCorrect, setLastAnswerCorrect] = useState<boolean | null>(null);

  const startGame = () => {
    setQuestions(getRandomQuestions(15));
    setGameState({
      currentQuestionIndex: 0,
      score: 0,
      totalQuestions: 15,
      isGameActive: true,
      gameScreen: 'game'
    });
    setShowFeedback(false);
    setLastAnswerCorrect(null);
  };

  const handleAnswer = (isCorrect: boolean) => {
    setLastAnswerCorrect(isCorrect);
    setShowFeedback(true);
    
    if (isCorrect) {
      setGameState(prev => ({
        ...prev,
        score: prev.score + POINTS_PER_QUESTION
      }));
    }

    // Move to next question or end game after delay
    setTimeout(() => {
      setShowFeedback(false);
      setGameState(prev => {
        const nextIndex = prev.currentQuestionIndex + 1;
        if (nextIndex >= prev.totalQuestions) {
          return {
            ...prev,
            currentQuestionIndex: nextIndex,
            isGameActive: false,
            gameScreen: 'end'
          };
        } else {
          return {
            ...prev,
            currentQuestionIndex: nextIndex
          };
        }
      });
    }, 2000);
  };

  const restartGame = () => {
    startGame();
  };

  const currentQuestion = questions[gameState.currentQuestionIndex];

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background Mathematical Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-blue-200/30 font-mono text-sm select-none"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.4, 0.2],
              y: [0, -15, 0],
              rotate: [0, 180],
            }}
            transition={{
              duration: Math.random() * 4 + 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {['π', '∆', '∠', '⊥', '||', '≅', '∞', '√', '²', '³', '°'][Math.floor(Math.random() * 11)]}
          </motion.div>
        ))}
        
        {/* Geometric grid pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#3b82f6" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Main Game Container */}
      <motion.div
        className="relative z-10 flex items-center justify-center min-h-screen p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full max-w-4xl">
          <AnimatePresence mode="wait">
            {gameState.gameScreen === 'start' && (
              <motion.div
                key="start"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
              >
                <StartScreen onStart={startGame} />
              </motion.div>
            )}

            {gameState.gameScreen === 'game' && currentQuestion && (
              <motion.div
                key="game"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <GameScreen
                  question={currentQuestion}
                  questionNumber={gameState.currentQuestionIndex + 1}
                  totalQuestions={gameState.totalQuestions}
                  score={gameState.score}
                  onAnswer={handleAnswer}
                  showFeedback={showFeedback}
                  isCorrect={lastAnswerCorrect}
                />
              </motion.div>
            )}

            {gameState.gameScreen === 'end' && (
              <motion.div
                key="end"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                transition={{ duration: 0.5 }}
              >
                <EndScreen
                  score={gameState.score}
                  totalQuestions={gameState.totalQuestions}
                  onRestart={restartGame}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
