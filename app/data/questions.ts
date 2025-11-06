import { Question } from '../types/game';

export const questions: Question[] = [
  // 2D Shapes - Easy
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In mathematical terms, how many sides does a triangle have?',
    iconComponent: 'BsTriangle',
    category: 'shapes-2d',
    difficulty: 'easy',
    options: [
      { text: '2 sides', correct: false },
      { text: '3 sides', correct: true },
      { text: '4 sides', correct: false },
      { text: '5 sides', correct: false }
    ]
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which quadrilateral has 4 congruent sides and 4 right angles?',
    iconComponent: 'BsSquare',
    category: 'shapes-2d',
    difficulty: 'easy',
    options: [
      { text: 'Rectangle', correct: false },
      { text: 'Rhombus', correct: false },
      { text: 'Square', correct: true },
      { text: 'Parallelogram', correct: false }
    ]
  },
  {
    id: 3,
    type: 'true-false',
    question: 'A circle is a closed curve with no vertices or angles.',
    iconComponent: 'BsCircle',
    category: 'shapes-2d',
    difficulty: 'easy',
    answer: true
  },
  {
    id: 4,
    type: 'fill-in-blank',
    question: 'A shape with 5 sides is called a...',
    iconComponent: 'MdPentagon',
    category: 'shapes-2d',
    difficulty: 'medium',
    answer: 'pentagon'
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'How many sides does an octagon have?',
    iconComponent: 'MdHexagon',
    category: 'shapes-2d',
    difficulty: 'medium',
    options: [
      { text: '6', correct: false },
      { text: '7', correct: false },
      { text: '8', correct: true },
      { text: '9', correct: false }
    ]
  },
  {
    id: 6,
    type: 'true-false',
    question: 'A rectangle is also a parallelogram.',
    iconComponent: 'BsSquare',
    category: 'shapes-2d',
    difficulty: 'medium',
    answer: true
  },
  
  // 3D Shapes - Easy to Medium
  {
    id: 7,
    type: 'multiple-choice',
    question: 'What 3D shape has 6 identical square faces?',
    iconComponent: 'TbCube',
    category: 'shapes-3d',
    difficulty: 'easy',
    options: [
      { text: 'Triangular Pyramid', correct: false },
      { text: 'Cube', correct: true },
      { text: 'Sphere', correct: false },
      { text: 'Cylinder', correct: false }
    ]
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'How many faces does a triangular pyramid have?',
    iconComponent: 'GiPyramids',
    category: 'shapes-3d',
    difficulty: 'medium',
    options: [
      { text: '3', correct: false },
      { text: '4', correct: true },
      { text: '5', correct: false },
      { text: '6', correct: false }
    ]
  },
  {
    id: 9,
    type: 'true-false',
    question: 'A sphere has no edges or vertices.',
    iconComponent: 'GiSphere',
    category: 'shapes-3d',
    difficulty: 'easy',
    answer: true
  },
  {
    id: 10,
    type: 'fill-in-blank',
    question: 'How many vertices (corners) does a cube have?',
    iconComponent: 'TbCube',
    category: 'shapes-3d',
    difficulty: 'medium',
    answer: '8'
  },
  {
    id: 11,
    type: 'multiple-choice',
    question: 'A cylinder has how many circular faces?',
    iconComponent: 'GiCylinder',
    category: 'shapes-3d',
    difficulty: 'medium',
    options: [
      { text: '0', correct: false },
      { text: '1', correct: false },
      { text: '2', correct: true },
      { text: '3', correct: false }
    ]
  },
  {
    id: 12,
    type: 'multiple-choice',
    question: 'What 3D shape does a net made of 6 squares fold into?',
    iconComponent: 'TbCube',
    category: 'shapes-3d',
    difficulty: 'medium',
    options: [
      { text: 'Rectangular Prism', correct: false },
      { text: 'Cube', correct: true },
      { text: 'Square-based Pyramid', correct: false },
      { text: 'Triangular Prism', correct: false }
    ]
  },

  // Geometry Concepts - Medium to Hard
  {
    id: 13,
    type: 'true-false',
    question: 'A regular pentagon has 5 equal sides and 5 equal angles.',
    iconComponent: 'MdPentagon',
    category: 'geometry',
    difficulty: 'medium',
    answer: true
  },
  {
    id: 14,
    type: 'true-false',
    question: 'All rectangles are squares.',
    iconComponent: 'BsSquare',
    category: 'geometry',
    difficulty: 'medium',
    answer: false
  },
  {
    id: 15,
    type: 'multiple-choice',
    question: 'What is the sum of angles in a triangle?',
    iconComponent: 'FaPlay',
    category: 'geometry',
    difficulty: 'hard',
    options: [
      { text: '90 degrees', correct: false },
      { text: '180 degrees', correct: true },
      { text: '270 degrees', correct: false },
      { text: '360 degrees', correct: false }
    ]
  },
  {
    id: 16,
    type: 'fill-in-blank',
    question: 'A quadrilateral has how many sides?',
    iconComponent: 'BsSquare',
    category: 'geometry',
    difficulty: 'easy',
    answer: '4'
  },

  // Symmetry - Medium to Hard
  {
    id: 17,
    type: 'true-false',
    question: 'A rectangle has 2 lines of symmetry.',
    iconComponent: 'BsSquare',
    category: 'symmetry',
    difficulty: 'medium',
    answer: true
  },
  {
    id: 18,
    type: 'multiple-choice',
    question: 'How many lines of symmetry does a circle have?',
    iconComponent: 'FaCircle',
    category: 'symmetry',
    difficulty: 'hard',
    options: [
      { text: '0', correct: false },
      { text: '2', correct: false },
      { text: '4', correct: false },
      { text: 'Infinite', correct: true }
    ]
  },
  {
    id: 19,
    type: 'multiple-choice',
    question: 'How many lines of symmetry does an equilateral triangle have?',
    iconComponent: 'FaPlay',
    category: 'symmetry',
    difficulty: 'hard',
    options: [
      { text: '1', correct: false },
      { text: '2', correct: false },
      { text: '3', correct: true },
      { text: '6', correct: false }
    ]
  },
  {
    id: 20,
    type: 'true-false',
    question: 'A square has more lines of symmetry than a rectangle.',
    iconComponent: 'FaStop',
    category: 'symmetry',
    difficulty: 'hard',
    answer: true
  },

  // More Advanced 2D Shapes
  {
    id: 21,
    type: 'fill-in-blank',
    question: 'A shape with 6 sides is called a...',
    iconComponent: 'MdHexagon',
    category: 'shapes-2d',
    difficulty: 'medium',
    answer: 'hexagon'
  },
  {
    id: 22,
    type: 'multiple-choice',
    question: 'What is a rhombus?',
    iconComponent: 'GiDiamondHard',
    category: 'shapes-2d',
    difficulty: 'hard',
    options: [
      { text: 'A shape with 4 equal sides', correct: true },
      { text: 'A shape with 4 right angles', correct: false },
      { text: 'A shape with 6 sides', correct: false },
      { text: 'A 3D shape', correct: false }
    ]
  },
  {
    id: 23,
    type: 'true-false',
    question: 'A trapezoid has exactly one pair of parallel sides.',
    iconComponent: 'BsSquare',
    category: 'shapes-2d',
    difficulty: 'hard',
    answer: true
  },
  {
    id: 24,
    type: 'multiple-choice',
    question: 'Which shape is NOT a polygon?',
    iconComponent: 'FaCircle',
    category: 'shapes-2d',
    difficulty: 'medium',
    options: [
      { text: 'Triangle', correct: false },
      { text: 'Pentagon', correct: false },
      { text: 'Circle', correct: true },
      { text: 'Hexagon', correct: false }
    ]
  },

  // More 3D Shapes
  {
    id: 25,
    type: 'multiple-choice',
    question: 'A triangular prism has how many rectangular faces?',
    iconComponent: 'GiTriangularPrism',
    category: 'shapes-3d',
    difficulty: 'hard',
    options: [
      { text: '2', correct: false },
      { text: '3', correct: true },
      { text: '4', correct: false },
      { text: '5', correct: false }
    ]
  },
  {
    id: 26,
    type: 'fill-in-blank',
    question: 'A cone has how many faces?',
    iconComponent: 'GiCone',
    category: 'shapes-3d',
    difficulty: 'hard',
    answer: '2'
  },
  {
    id: 27,
    type: 'true-false',
    question: 'A rectangular prism is the same as a cuboid.',
    iconComponent: 'TbCuboid',
    category: 'shapes-3d',
    difficulty: 'medium',
    answer: true
  },
  {
    id: 28,
    type: 'multiple-choice',
    question: 'How many edges does a square pyramid have?',
    iconComponent: 'BsTriangle',
    category: 'shapes-3d',
    difficulty: 'hard',
    options: [
      { text: '6', correct: false },
      { text: '7', correct: false },
      { text: '8', correct: true },
      { text: '9', correct: false }
    ]
  },
  {
    id: 29,
    type: 'fill-in-blank',
    question: 'In a coordinate plane, how many dimensions do we work with?',
    iconComponent: 'FaCalculator',
    category: 'geometry',
    difficulty: 'easy',
    answer: '2'
  },
  {
    id: 30,
    type: 'multiple-choice',
    question: 'What is the mathematical name for the distance around a circle?',
    iconComponent: 'BsCircle',
    category: 'geometry',
    difficulty: 'medium',
    options: [
      { text: 'Diameter', correct: false },
      { text: 'Radius', correct: false },
      { text: 'Circumference', correct: true },
      { text: 'Area', correct: false }
    ]
  }
];

export const getQuestionsByDifficulty = (difficulty: 'easy' | 'medium' | 'hard') => {
  return questions.filter(q => q.difficulty === difficulty);
};

export const getQuestionsByCategory = (category: string) => {
  return questions.filter(q => q.category === category);
};

export const getRandomQuestions = (count: number = 10) => {
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};