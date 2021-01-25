import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Item: React.FC = () => {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <motion.li 
         layout 
         onClick={() => setIsOpen(!isOpen)} 
         initial={{ borderRadius: 10 }}
      >
         <motion.div className="avatar" layout />
         <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
      </motion.li>
   );
}

const Content: React.FC = () => {
   return (
      <motion.div
         layout
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
      >
         <div className="row" />
         <div className="row" />
         <div className="row" />
      </motion.div>
   )
}

export default Item;