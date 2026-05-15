/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

export const Modal = ({ isOpen, title, message, onClose, type = 'success' }) => {
  if (!isOpen) return null;

  const bgColor = type === 'success' ? 'bg-green-900' : 'bg-red-900';
  const borderColor = type === 'success' ? 'border-green-500' : 'border-red-500';
  const buttonColor = type === 'success' ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700';

  return (
    <motion.div
      className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className={`${bgColor} ${borderColor} border-2 p-8 rounded-lg max-w-sm mx-4`}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className='text-white text-xl font-bold mb-4'>{title}</h2>
        <p className='text-white mb-6'>{message}</p>
        <button
          onClick={onClose}
          className={`${buttonColor} text-white px-6 py-2 rounded-lg font-semibold transition-colors`}
        >
          OK
        </button>
      </motion.div>
    </motion.div>
  );
};
