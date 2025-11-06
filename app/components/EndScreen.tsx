import React from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaTrophy, FaMedal, FaStar, FaBrain, FaCalculator, FaCheck } from 'react-icons/fa';
import { GiSparkles, GiRoundStar } from 'react-icons/gi';
import { POINTS_PER_QUESTION } from '../types/game';

interface EndScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

export function EndScreen({ score, totalQuestions, onRestart }: EndScreenProps) {
  const maxScore = totalQuestions * POINTS_PER_QUESTION;
  const scorePercentage = (score / maxScore) * 100;
  
  const getScoreMessage = () => {
    if (scorePercentage === 100) {
      return {
        title: "PERFECT GEOMETRY MASTER!",
        message: "Outstanding mathematical achievement! You've mastered all spatial reasoning concepts!",
        icon: <FaTrophy className="text-6xl text-yellow-500" />,
        bgColor: "from-yellow-400 to-orange-500"
      };
    } else if (scorePercentage >= 80) {
      return {
        title: "EXCELLENT MATHEMATICIAN!",
        message: "Fantastic work! You've shown strong understanding of geometric concepts and spatial thinking!",
        icon: <FaMedal className="text-6xl text-purple-500" />,
        bgColor: "from-purple-400 to-pink-500"
      };
    } else if (scorePercentage >= 60) {
      return {
        title: "SOLID PROGRESS!",
        message: "Great effort! You're developing strong mathematical reasoning skills. Keep exploring geometry!",
        icon: <FaStar className="text-6xl text-blue-500" />,
        bgColor: "from-blue-400 to-cyan-500"
      };
    } else {
      return {
        title: "KEEP LEARNING!",
        message: "Great start! Mathematics is a journey of discovery. Practice more to strengthen your geometry skills!",
        icon: <FaBrain className="text-6xl text-green-500" />,
        bgColor: "from-green-400 to-teal-500"
      };
    }
  };

  const scoreMessage = getScoreMessage();

  return (
    <motion.div 
      className="bg-white/95 backdrop-blur-lg rounded-3xl border border-blue-200 shadow-2xl shadow-blue-200/20 p-8 md:p-12 text-center max-w-4xl mx-auto"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Celebration Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
        {[FaTrophy, FaStar, FaMedal, GiSparkles, FaBrain, FaCalculator].map((IconComponent, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              color: ['#f59e0b', '#3b82f6', '#8b5cf6', '#ec4899', '#10b981', '#f97316'][i % 6],
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
              y: [0, -80],
              rotate: [0, 360],
            }}
            transition={{
              duration: 4,
              delay: Math.random() * 2,
              repeat: Infinity,
              repeatDelay: Math.random() * 4,
            }}
          >
            <IconComponent />
          </motion.div>
        ))}
      </div>

      {/* Mission Complete Header */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-blue-700 mb-4"
          animate={{
            color: [
              '#1d4ed8',
              '#3b82f6',
              '#1d4ed8',
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          GEOMETRY MASTERED!
        </motion.h1>
        
        {/* Animated Mathematical Achievement */}
        <motion.div
          className="inline-block"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FaTrophy className="text-6xl text-yellow-400" />
        </motion.div>
      </motion.div>

      {/* Score Display */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, type: "spring", bounce: 0.6 }}
      >
        <p className="text-2xl text-blue-100 mb-4">Final Score:</p>
        <motion.div
          className={`text-6xl md:text-8xl font-bold bg-linear-to-r ${scoreMessage.bgColor} bg-clip-text text-transparent mb-4`}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {score}
        </motion.div>
        <p className="text-xl text-slate-300">
          {score} out of {maxScore} points ({Math.round(scorePercentage)}%)
        </p>
      </motion.div>

      {/* Achievement Icon */}
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          delay: 0.6,
          type: "spring",
          bounce: 0.8
        }}
      >
        <motion.div
          animate={{
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {scoreMessage.icon}
        </motion.div>
      </motion.div>

      {/* Score Message */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <motion.h2 
          className="text-2xl md:text-3xl font-bold text-cyan-300 mb-4"
          animate={{
            textShadow: [
              '0 0 10px #67e8f9',
              '0 0 20px #67e8f9',
              '0 0 10px #67e8f9',
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {scoreMessage.title}
        </motion.h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
          {scoreMessage.message}
        </p>
      </motion.div>

      {/* Stats Section */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div 
          className="bg-blue-50 rounded-xl p-4 border border-blue-200"
          whileHover={{ scale: 1.05 }}
        >
          <FaTrophy className="text-2xl text-blue-500 mx-auto mb-2" />
          <div className="text-xl font-bold text-blue-600">{Math.round(scorePercentage)}%</div>
          <div className="text-sm text-gray-600">Accuracy</div>
        </motion.div>
        <motion.div 
          className="bg-purple-50 rounded-xl p-4 border border-purple-200"
          whileHover={{ scale: 1.05 }}
        >
          <FaBrain className="text-2xl text-purple-500 mx-auto mb-2" />
          <div className="text-xl font-bold text-purple-600">{totalQuestions}</div>
          <div className="text-sm text-gray-600">Questions</div>
        </motion.div>
        <motion.div 
          className="bg-green-50 rounded-xl p-4 border border-green-200"
          whileHover={{ scale: 1.05 }}
        >
          <FaCheck className="text-2xl text-green-500 mx-auto mb-2" />
          <div className="text-xl font-bold text-green-600">{score / POINTS_PER_QUESTION}</div>
          <div className="text-sm text-gray-600">Correct</div>
        </motion.div>
      </motion.div>

      {/* Play Again Button */}
      <motion.button
        onClick={onRestart}
        className="bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg shadow-blue-500/30 transition-all duration-300 flex items-center gap-3 mx-auto"
        whileHover={{ 
          scale: 1.05,
          boxShadow: '0 20px 40px rgba(16, 185, 129, 0.4)'
        }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <FaPlay className="text-xl" />
        PRACTICE MORE
        <GiSparkles className="text-xl" />
      </motion.button>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
        {scorePercentage >= 80 && (
          <>
            <motion.div
              className="absolute top-10 left-10"
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            >
              <GiRoundStar className="text-4xl text-yellow-400 opacity-30" />
            </motion.div>
            <motion.div
              className="absolute top-10 right-10"
              animate={{
                rotate: -360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: 2,
              }}
            >
              <GiRoundStar className="text-4xl text-pink-400 opacity-30" />
            </motion.div>
          </>
        )}
      </div>
    </motion.div>
  );
}