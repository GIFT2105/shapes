import React from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaCalculator, FaBrain } from 'react-icons/fa';
import { MdOutlineApps, MdSchool } from 'react-icons/md';
import { 
  BsTriangle, BsSquare, BsCircle, BsHexagon, BsPentagon 
} from 'react-icons/bs';
import { TbCube } from 'react-icons/tb';

interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <motion.div 
      className="bg-white/95 backdrop-blur-lg rounded-3xl border border-blue-200 shadow-2xl shadow-blue-200/20 p-8 md:p-12 text-center max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {/* Animated Title */}
      <motion.div
        className="mb-8"
        animate={{
          color: [
            '#1d4ed8',
            '#3b82f6',
            '#1d4ed8',
          ],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-blue-700 mb-4 leading-tight">
          Geometry
          <br />
          <span className="text-indigo-600">Master Quest</span>
          <span className="inline-block text-purple-500 ml-2 text-xl md:text-2xl">With Tiisetso Motsumi</span>
        </h1>
        
        {/* Animated Math Shapes */}
        <motion.div
          className="flex justify-center items-center gap-4 text-4xl md:text-5xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <BsTriangle className="text-orange-500" />
          </motion.div>
          <motion.div
            animate={{
              rotate: [0, -360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            <BsSquare className="text-blue-500" />
          </motion.div>
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <BsCircle className="text-purple-500" />
          </motion.div>
          <motion.div
            animate={{
              rotate: [0, 180, 360],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          >
            <BsHexagon className="text-pink-500" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Instructions */}
      <motion.div
        className="mb-8 space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-xl text-gray-700 leading-relaxed">
          Welcome, Math Explorer! Dive into the fascinating world of shapes and spatial reasoning! 
        </p>
        <p className="text-lg text-gray-600">
          Test your geometry knowledge and sharpen your mathematical thinking. 
          <br />
          Perfect for individual practice or collaborative learning!
        </p>
        <p className="text-base text-blue-600 font-semibold">
          Designed for 5th Grade Mathematical Excellence 
        </p>
        
        {/* Feature Icons */}
        <motion.div 
          className="flex justify-center gap-6 mt-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
        >
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.1 }}
          >
            <FaBrain className="text-3xl text-purple-600 mx-auto mb-2" />
            <p className="text-sm text-gray-600">Critical Thinking</p>
          </motion.div>
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.1 }}
          >
            <MdOutlineApps className="text-3xl text-blue-600 mx-auto mb-2" />
            <p className="text-sm text-gray-600">Spatial Reasoning</p>
          </motion.div>
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.1 }}
          >
            <FaCalculator className="text-3xl text-emerald-600 mx-auto mb-2" />
            <p className="text-sm text-gray-600">15 Questions</p>
          </motion.div>
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.1 }}
          >
            <MdSchool className="text-3xl text-orange-600 mx-auto mb-2" />
            <p className="text-sm text-gray-600">Learn & Grow</p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Start Button */}
      <motion.button
        onClick={onStart}
        className="bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg shadow-blue-500/30 transition-all duration-300 flex items-center gap-3 mx-auto"
        whileHover={{ 
          scale: 1.05,
          boxShadow: '0 20px 40px rgba(16, 185, 129, 0.4)'
        }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <FaPlay className="text-xl" />
        BEGIN LEARNING
      </motion.button>

      {/* Floating Mathematical Shapes Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
        {[BsTriangle, BsSquare, BsCircle, BsHexagon, TbCube].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl opacity-15"
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
              color: ['#f97316', '#3b82f6', '#8b5cf6', '#ec4899', '#10b981'][i % 5],
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              opacity: [0.1, 0.25, 0.1],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          >
            <Icon />
          </motion.div>
        ))}
        
        {/* Additional floating shapes */}
        {[BsPentagon, MdOutlineApps, FaBrain, FaCalculator].map((IconComponent, i) => (
          <motion.div
            key={`extra-${i}`}
            className="absolute text-lg opacity-10"
            style={{
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 90 + 5}%`,
              color: ['#3b82f6', '#6366f1', '#8b5cf6', '#ec4899'][i % 4],
            }}
            animate={{
              y: [0, -25, 0],
              rotate: [0, 180, 360],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 6 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            <IconComponent />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}