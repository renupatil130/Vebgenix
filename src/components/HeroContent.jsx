import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import './HeroContent.css';

const HeroContent = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="hero-main-content"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="hero-badge" variants={itemVariants}>
        <span className="badge-dot"></span>
        <span className="badge-text-solid">Software Development Studio</span>
      </motion.div>
      
      <motion.h1 className="hero-heading" variants={itemVariants}>
        Build Smarter<br/>
        <span className="gradient-text">Digital Systems.</span>
      </motion.h1>
      
      <motion.p className="hero-subtitle" variants={itemVariants}>
        Vebgenix engineers custom software, ERP platforms, automation workflows, and digital products for businesses that need more than off-the-shelf solutions. We deliver systems that fit exactly how your business operates — and scale as it grows.
      </motion.p>
      
      <motion.div className="hero-cta-wrapper" variants={itemVariants}>
        <Button variant="cta" href="#contact">Book a Consultation</Button>
        <Button variant="navbar" href="#services">Explore Services</Button>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
