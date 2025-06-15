import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export interface Skill {
  id: number;
  name: string;
  level: number; // 0-100
  category: string;
}

interface SkillBarProps {
  skill: Skill;
  index: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {skill.name}
        </span>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {skill.level}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <motion.div
          className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { width: 0 },
            visible: { 
              width: `${skill.level}%`,
              transition: { duration: 1, delay: index * 0.1 } 
            }
          }}
        />
      </div>
    </div>
  );
};

export default SkillBar;