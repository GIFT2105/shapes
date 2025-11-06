import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Question } from '../types/game';
import { ShapeIcon } from './ShapeIcon';
import { FaCheck, FaTimes, FaCalculator, FaBrain } from 'react-icons/fa';
import { GiSparkles } from 'react-icons/gi';

interface GameScreenProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  score: number;
  onAnswer: (isCorrect: boolean) => void;
  showFeedback: boolean;
  isCorrect: boolean | null;
}

export function GameScreen({
  question,
  questionNumber,
  totalQuestions,
  score,
  onAnswer,
  showFeedback,
  isCorrect
}: GameScreenProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [inputAnswer, setInputAnswer] = useState('');
  
  // Reset state when question changes
  useEffect(() => {
    setSelectedAnswer(null);
    setInputAnswer('');
  }, [question.id]);

  const progressPercentage = (questionNumber / totalQuestions) * 100;

  const handleMultipleChoice = (optionText: string, isCorrectAnswer: boolean) => {
    if (showFeedback) return;
    setSelectedAnswer(optionText);
    onAnswer(isCorrectAnswer);
  };

  const handleTrueFalse = (answer: boolean) => {
    if (showFeedback) return;
    setSelectedAnswer(answer.toString());
    onAnswer(answer === question.answer);
  };

  const handleFillInBlank = () => {
    if (showFeedback || !inputAnswer.trim()) return;
    const userAnswer = inputAnswer.trim().toLowerCase();
    const correctAnswer = (question.answer as string).toLowerCase();
    const isCorrectAnswer = userAnswer === correctAnswer;
    setSelectedAnswer(inputAnswer);
    onAnswer(isCorrectAnswer);
  };

  return (
    <motion.div 
      className="bg-white/95 backdrop-blur-lg rounded-3xl border border-blue-200 shadow-2xl shadow-blue-200/20 p-6 md:p-8 max-w-4xl mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* HUD Section */}
      <div className="mb-6">
        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">
              Question {questionNumber} of {totalQuestions}
            </span>
            <motion.div 
              className="flex items-center gap-2 text-blue-600"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FaCalculator />
              <span className="font-bold">Score: {score}</span>
            </motion.div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <motion.div 
              className="h-full bg-linear-to-r from-blue-400 to-indigo-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>

      {/* Question Section */}
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {/* Shape Icon */}
        <motion.div 
          className="mb-6 p-4 bg-blue-50 rounded-2xl border border-blue-200"
          animate={{ 
            rotate: [0, 2, -2, 0],
            scale: [1, 1.05, 1],
            boxShadow: [
              '0 0 0 rgba(59, 130, 246, 0)',
              '0 0 20px rgba(59, 130, 246, 0.2)', 
              '0 0 0 rgba(59, 130, 246, 0)'
            ]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ShapeIcon iconName={question.iconComponent} size={80} />
        </motion.div>

        {/* Question Text */}
        <motion.h2 
          className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {question.question}
        </motion.h2>

        {/* Difficulty Badge */}
        <motion.div
          className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-6 ${
            question.difficulty === 'easy' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
            question.difficulty === 'medium' ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' :
            'bg-red-500/20 text-red-300 border border-red-500/30'
          }`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          {question.difficulty?.toUpperCase()} LEVEL
        </motion.div>
      </motion.div>

      {/* Answer Options */}
      <motion.div 
        className="space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {/* Multiple Choice */}
        {question.type === 'multiple-choice' && question.options && (
          <div className="grid gap-3">
            {question.options.map((option, index) => (
              <motion.button
                key={index}
                onClick={() => handleMultipleChoice(option.text, option.correct)}
                disabled={showFeedback}
                className={`p-4 rounded-xl text-left font-semibold transition-all duration-300 border-2 ${
                  showFeedback
                    ? option.correct
                      ? 'bg-green-100 border-green-400 text-green-800'
                      : selectedAnswer === option.text
                      ? 'bg-red-100 border-red-400 text-red-800'
                      : 'bg-gray-100 border-gray-400 text-gray-600'
                    : 'bg-gray-50 border-gray-300 text-gray-800 hover:bg-blue-50 hover:border-blue-400 hover:text-blue-800'
                }`}
                whileHover={!showFeedback ? { scale: 1.02, y: -2 } : {}}
                whileTap={!showFeedback ? { scale: 0.98 } : {}}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <div className="flex items-center justify-between">
                  <span>{option.text}</span>
                  {showFeedback && option.correct && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <FaCheck className="text-green-400 text-xl" />
                    </motion.div>
                  )}
                  {showFeedback && selectedAnswer === option.text && !option.correct && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <FaTimes className="text-red-400 text-xl" />
                    </motion.div>
                  )}
                </div>
              </motion.button>
            ))}
          </div>
        )}

        {/* True/False */}
        {question.type === 'true-false' && (
          <div className="grid grid-cols-2 gap-4">
            {[true, false].map((value) => (
              <motion.button
                key={value.toString()}
                onClick={() => handleTrueFalse(value)}
                disabled={showFeedback}
                className={`p-6 rounded-xl font-bold text-xl transition-all duration-300 border-2 ${
                  showFeedback
                    ? value === question.answer
                      ? 'bg-green-100 border-green-400 text-green-800'
                      : selectedAnswer === value.toString()
                      ? 'bg-red-100 border-red-400 text-red-800'
                      : 'bg-gray-100 border-gray-400 text-gray-600'
                    : 'bg-gray-50 border-gray-300 text-gray-800 hover:bg-blue-50 hover:border-blue-400 hover:text-blue-800'
                }`}
                whileHover={!showFeedback ? { scale: 1.05 } : {}}
                whileTap={!showFeedback ? { scale: 0.95 } : {}}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + (value ? 0 : 0.1) }}
              >
                <div className="flex items-center justify-center gap-3">
                  {value ? (
                    <>
                      <FaCheck className="text-lg" />
                      TRUE
                    </>
                  ) : (
                    <>
                      <FaTimes className="text-lg" />
                      FALSE
                    </>
                  )}
                  {showFeedback && value === question.answer && (
                    <FaCheck className="text-green-600 text-xl" />
                  )}
                  {showFeedback && selectedAnswer === value.toString() && value !== question.answer && (
                    <FaTimes className="text-red-600 text-xl" />
                  )}
                </div>
              </motion.button>
            ))}
          </div>
        )}

        {/* Fill in Blank */}
        {question.type === 'fill-in-blank' && (
          <div className="text-center space-y-4">
            <motion.input
              type="text"
              value={inputAnswer}
              onChange={(e) => setInputAnswer(e.target.value)}
              disabled={showFeedback}
              placeholder="Type your answer..."
              className="w-full max-w-md mx-auto p-4 text-xl text-center bg-gray-50 border-2 border-gray-300 rounded-xl text-gray-800 placeholder-gray-500 focus:border-blue-400 focus:outline-none transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              onKeyPress={(e) => e.key === 'Enter' && handleFillInBlank()}
            />
            {!showFeedback && (
              <motion.button
                onClick={handleFillInBlank}
                disabled={!inputAnswer.trim()}
                className="bg-linear-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                Submit Answer
              </motion.button>
            )}
            {showFeedback && !isCorrect && (
              <motion.p
                className="text-yellow-300 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                The correct answer was: <strong>{question.answer as string}</strong>
              </motion.p>
            )}
          </div>
        )}
      </motion.div>

      {/* Feedback Section */}
      <AnimatePresence>
        {showFeedback && (
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            {isCorrect ? (
              <motion.div
                className="flex items-center justify-center gap-3 text-2xl font-bold text-green-600"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.6, repeat: 2 }}
              >
                <GiSparkles className="text-yellow-500" />
                Correct! Amazing work!
                <FaCheck className="text-green-600" />
              </motion.div>
            ) : (
              <motion.div
                className="flex items-center justify-center gap-3 text-2xl font-bold text-orange-600"
                animate={{ x: [-10, 10, -10, 10, 0] }}
                transition={{ duration: 0.6 }}
              >
                <FaTimes className="text-red-500" />
                Not quite! Keep learning!
                <FaBrain className="text-purple-500" />
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}