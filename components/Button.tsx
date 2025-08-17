import { motion } from 'framer-motion';
import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'outline' };
export const MotionButton = ({ variant='primary', className='', children, ...rest }: Props) => {
  const base = variant === 'primary' ? 'btn btn-primary' : 'btn btn-outline';
  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      whileHover={{ scale: 1.02 }}
      className={`${base} ${className}`}
      {...rest}
    >
      {children}
    </motion.button>
  );
};
