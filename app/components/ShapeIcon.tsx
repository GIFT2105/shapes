import React from 'react';
import { 
  FaPlay, FaStop, FaCircle, FaCube, FaShapes
} from 'react-icons/fa';
import { 
  MdPentagon, MdHexagon 
} from 'react-icons/md';
import { 
  BsSquare, BsTriangle, BsCircle, BsHexagon, BsPentagon 
} from 'react-icons/bs';
import { 
  TbCube, TbSphere 
} from 'react-icons/tb';
import { 
  GiDiamondHard, GiTriangleTarget, GiRoundStar, GiCube 
} from 'react-icons/gi';

interface ShapeIconProps {
  iconName?: string;
  size?: number;
  className?: string;
}

export function ShapeIcon({ iconName = 'FaCircle', size = 64, className = '' }: ShapeIconProps) {
  const iconProps = {
    size,
    className: `text-blue-600 ${className}`,
  };

  const iconComponents: Record<string, React.ReactNode> = {
    // 2D Shapes - Triangles
    'FaPlay': <BsTriangle {...iconProps} />,
    'BsTriangle': <BsTriangle {...iconProps} />,
    'GiTriangleTarget': <GiTriangleTarget {...iconProps} />,
    
    // 2D Shapes - Squares & Rectangles
    'FaStop': <BsSquare {...iconProps} />,
    'BsSquare': <BsSquare {...iconProps} />,
    
    // 2D Shapes - Circles
    'FaCircle': <FaCircle {...iconProps} />,
    'BsCircle': <BsCircle {...iconProps} />,
    
    // 2D Shapes - Polygons
    'MdPentagon': <BsPentagon {...iconProps} />,
    'BsPentagon': <BsPentagon {...iconProps} />,
    'MdHexagon': <BsHexagon {...iconProps} />,
    'BsHexagon': <BsHexagon {...iconProps} />,
    'GiDiamondHard': <GiDiamondHard {...iconProps} />,
    
    // 3D Shapes
    'TbCube': <TbCube {...iconProps} />,
    'FaCube': <FaCube {...iconProps} />,
    'GiCube': <GiCube {...iconProps} />,
    'TbSphere': <TbSphere {...iconProps} />,
    'GiPyramids': <GiTriangleTarget {...iconProps} />, // Using triangle as pyramid substitute
    'GiSphere': <TbSphere {...iconProps} />,
    'GiCylinder': <FaShapes {...iconProps} />, // Generic shape icon
    'GiCone': <GiTriangleTarget {...iconProps} />, // Using triangle as cone substitute
    'GiTriangularPrism': <BsTriangle {...iconProps} />,
    
    // Fallback
    'default': <FaCircle {...iconProps} />,
  };

  return (
    <div className="inline-block">
      {iconComponents[iconName] || iconComponents['default']}
    </div>
  );
}