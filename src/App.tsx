import React from 'react';
import { animate, AnimatePresence, AnimateSharedLayout, motion, useAnimation } from 'framer-motion';
import './App.css';
import Item from './components/Item';

function App() {
  const controls = useAnimation();
  const items = [0, 1, 2];

  function startAnimation() {
    const controls = animate(0, 100, {
      type: "spring",
      stiffness: 2000,
      onComplete: () => {}
    })
  
    return controls.stop
  }

  return (
    <main>
      <div className="grid">
        <div className="animation">
          <motion.div
              style={{ backgroundColor:  '#f0f', width: 100, height: 100 }}
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%"
              }}
          />
        </div>
        <div className="animation">
          <AnimateSharedLayout>
            <motion.ul layout initial={{ borderRadius: 25 }}>
              {items.map(item => (
                <Item key={item} />
              ))}
            </motion.ul>
          </AnimateSharedLayout>
        </div>
        <div className="animation">
          <motion.div
            style={{ backgroundColor: '#f0f', width: 100, height: 100 }}
            animate={controls}
            onTap={startAnimation}
          />
        </div>
        <div className="animation">
          <motion.div
            style={{ backgroundColor: '#f0f', width: 100, height: 100 }}
            animate={controls}
            onTap={startAnimation}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
