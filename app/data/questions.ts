import { Question } from '../types/game';

export const questions: Question[] = [
  // 2D Shapes - Easy (Grade 5 CAPS: Properties of 2D shapes)
  {
    id: 1,
    type: 'multiple-choice',
    question: 'How many sides does a triangle have?',
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
    question: 'Which shape has 4 equal sides and 4 right angles?',
    iconComponent: 'BsSquare',
    category: 'shapes-2d',
    difficulty: 'easy',
    options: [
      { text: 'Rectangle', correct: false },
      { text: 'Triangle', correct: false },
      { text: 'Square', correct: true },
      { text: 'Circle', correct: false }
    ]
  },
  {
    id: 3,
    type: 'true-false',
    question: 'A circle has no corners.',
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
    question: 'How many sides does a hexagon have?',
    iconComponent: 'MdHexagon',
    category: 'shapes-2d',
    difficulty: 'medium',
    options: [
      { text: '5', correct: false },
      { text: '6', correct: true },
      { text: '7', correct: false },
      { text: '8', correct: false }
    ]
  },
  {
    id: 6,
    type: 'true-false',
    question: 'All squares are rectangles.',
    iconComponent: 'BsSquare',
    category: 'shapes-2d',
    difficulty: 'medium',
    answer: true
  },
  
  // 3D Objects - Easy to Medium (Grade 5 CAPS: 3D objects - faces, vertices, edges)
  {
    id: 7,
    type: 'multiple-choice',
    question: 'How many faces does a cube have?',
    iconComponent: 'TbCube',
    category: 'shapes-3d',
    difficulty: 'easy',
    options: [
      { text: '4 faces', correct: false },
      { text: '6 faces', correct: true },
      { text: '8 faces', correct: false },
      { text: '12 faces', correct: false }
    ]
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'How many edges does a cube have?',
    iconComponent: 'TbCube',
    category: 'shapes-3d',
    difficulty: 'medium',
    options: [
      { text: '6', correct: false },
      { text: '8', correct: false },
      { text: '12', correct: true },
      { text: '16', correct: false }
    ]
  },
  {
    id: 9,
    type: 'true-false',
    question: 'A sphere has flat faces.',
    iconComponent: 'GiSphere',
    category: 'shapes-3d',
    difficulty: 'easy',
    answer: false
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
    question: 'Which 3D object has 2 circular faces and 1 curved surface?',
    iconComponent: 'GiCylinder',
    category: 'shapes-3d',
    difficulty: 'medium',
    options: [
      { text: 'Cone', correct: false },
      { text: 'Sphere', correct: false },
      { text: 'Cylinder', correct: true },
      { text: 'Cube', correct: false }
    ]
  },
  {
    id: 12,
    type: 'multiple-choice',
    question: 'A rectangular prism has how many faces?',
    iconComponent: 'TbCuboid',
    category: 'shapes-3d',
    difficulty: 'medium',
    options: [
      { text: '4', correct: false },
      { text: '6', correct: true },
      { text: '8', correct: false },
      { text: '10', correct: false }
    ]
  },

  // Properties of 2D Shapes - Medium (Grade 5 CAPS)
  {
    id: 13,
    type: 'true-false',
    question: 'A rectangle has 4 right angles.',
    iconComponent: 'BsSquare',
    category: 'geometry',
    difficulty: 'easy',
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
    question: 'How many corners (vertices) does a pentagon have?',
    iconComponent: 'MdPentagon',
    category: 'shapes-2d',
    difficulty: 'medium',
    options: [
      { text: '4', correct: false },
      { text: '5', correct: true },
      { text: '6', correct: false },
      { text: '7', correct: false }
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

  // Symmetry - Medium (Grade 5 CAPS: Lines of symmetry)
  {
    id: 17,
    type: 'true-false',
    question: 'A square has 4 lines of symmetry.',
    iconComponent: 'BsSquare',
    category: 'symmetry',
    difficulty: 'medium',
    answer: true
  },
  {
    id: 18,
    type: 'multiple-choice',
    question: 'How many lines of symmetry does a rectangle have?',
    iconComponent: 'BsSquare',
    category: 'symmetry',
    difficulty: 'medium',
    options: [
      { text: '1', correct: false },
      { text: '2', correct: true },
      { text: '3', correct: false },
      { text: '4', correct: false }
    ]
  },
  {
    id: 19,
    type: 'multiple-choice',
    question: 'How many lines of symmetry does an equilateral triangle have?',
    iconComponent: 'FaPlay',
    category: 'symmetry',
    difficulty: 'medium',
    options: [
      { text: '1', correct: false },
      { text: '2', correct: false },
      { text: '3', correct: true },
      { text: '4', correct: false }
    ]
  },
  {
    id: 20,
    type: 'true-false',
    question: 'A circle has many lines of symmetry.',
    iconComponent: 'FaCircle',
    category: 'symmetry',
    difficulty: 'easy',
    answer: true
  },

  // More 2D Shape Properties
  {
    id: 21,
    type: 'fill-in-blank',
    question: 'A shape with 8 sides is called an...',
    iconComponent: 'MdHexagon',
    category: 'shapes-2d',
    difficulty: 'medium',
    answer: 'octagon'
  },
  {
    id: 22,
    type: 'multiple-choice',
    question: 'Which shape has 4 equal sides but no right angles?',
    iconComponent: 'GiDiamondHard',
    category: 'shapes-2d',
    difficulty: 'medium',
    options: [
      { text: 'Square', correct: false },
      { text: 'Rectangle', correct: false },
      { text: 'Rhombus', correct: true },
      { text: 'Triangle', correct: false }
    ]
  },
  {
    id: 23,
    type: 'true-false',
    question: 'A triangle can have 3 equal sides.',
    iconComponent: 'BsTriangle',
    category: 'shapes-2d',
    difficulty: 'easy',
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
      { text: 'Square', correct: false },
      { text: 'Circle', correct: true },
      { text: 'Hexagon', correct: false }
    ]
  },

  // More 3D Objects (Grade 5 CAPS)
  {
    id: 25,
    type: 'multiple-choice',
    question: 'How many faces does a triangular prism have?',
    iconComponent: 'GiTriangularPrism',
    category: 'shapes-3d',
    difficulty: 'medium',
    options: [
      { text: '3', correct: false },
      { text: '4', correct: false },
      { text: '5', correct: true },
      { text: '6', correct: false }
    ]
  },
  {
    id: 26,
    type: 'fill-in-blank',
    question: 'A cone has how many vertices?',
    iconComponent: 'GiCone',
    category: 'shapes-3d',
    difficulty: 'medium',
    answer: '1'
  },
  {
    id: 27,
    type: 'true-false',
    question: 'A pyramid has a square base and triangular faces.',
    iconComponent: 'GiPyramids',
    category: 'shapes-3d',
    difficulty: 'easy',
    answer: true
  },
  {
    id: 28,
    type: 'multiple-choice',
    question: 'How many vertices does a square pyramid have?',
    iconComponent: 'BsTriangle',
    category: 'shapes-3d',
    difficulty: 'medium',
    options: [
      { text: '4', correct: false },
      { text: '5', correct: true },
      { text: '6', correct: false },
      { text: '8', correct: false }
    ]
  },
  {
    id: 29,
    type: 'fill-in-blank',
    question: 'How many straight sides does a circle have?',
    iconComponent: 'BsCircle',
    category: 'shapes-2d',
    difficulty: 'easy',
    answer: '0'
  },
  {
    id: 30,
    type: 'multiple-choice',
    question: 'A cylinder has how many curved surfaces?',
    iconComponent: 'GiCylinder',
    category: 'shapes-3d',
    difficulty: 'medium',
    options: [
      { text: '0', correct: false },
      { text: '1', correct: true },
      { text: '2', correct: false },
      { text: '3', correct: false }
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