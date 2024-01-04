import React, { useEffect, useRef } from 'react';
import lottie, { AnimationItem } from 'lottie-web';
import style from './style.module.css'
interface LottieAnimationProps {
  animationData: any; 
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({ animationData }) => {
  const animationContainer = useRef<HTMLDivElement>(null);
  const animationInstance = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (animationContainer.current) {
      animationInstance.current = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData,
      });
      return () => {
        if (animationInstance.current) {
          animationInstance.current.destroy();
        }
      };
    }
  }, []);

  return <div className={style.AnimationImage} ref={animationContainer}></div>;
};

export default LottieAnimation;
