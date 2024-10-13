import React, { useState } from 'react';
import { ArrowUp, RotateCcw, RotateCw } from 'lucide-react';
import Button from '../../components/Button';
import { moveForward, rotate } from './RobotService';
import RobotGrid from './RobotGrid';

const RobotControl = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [direction, setDirection] = useState(0); // 0: N, 1: E, 2: S, 3: W

    const handleMoveForward = () => {
        setPosition(prev => moveForward(prev, direction));
    };

    const handleRotate = clockwise => {
        setDirection(prev => rotate(prev, clockwise));
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="p-6 bg-white shadow-lg rounded-lg">
                <h1 className="text-2xl font-bold mb-4 text-center">
                    Robot Control
                </h1>
                <RobotGrid position={position} direction={direction} />
                <div className="flex justify-center space-x-2 mb-4">
                    <Button
                        onClick={() => handleRotate(false)}
                        variant="outline"
                    >
                        <RotateCcw className="w-6 h-6" />
                    </Button>
                    <Button onClick={handleMoveForward} variant="outline">
                        <ArrowUp className="w-6 h-6" />
                    </Button>
                    <Button
                        onClick={() => handleRotate(true)}
                        variant="outline"
                    >
                        <RotateCw className="w-6 h-6" />
                    </Button>
                </div>
                <p className="text-center">
                    Position: ({position.x}, {position.y}) | Direction:{' '}
                    {['N', 'E', 'S', 'W'][direction]}
                </p>
            </div>
        </div>
    );
};

export default RobotControl;
