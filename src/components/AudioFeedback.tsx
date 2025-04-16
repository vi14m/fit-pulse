
import React, { useState, useEffect, useRef } from 'react';

interface AudioFeedbackProps {
  enable: boolean;
}

type SoundType = 'complete' | 'level-up' | 'streak' | 'fail' | 'click';

const AudioFeedback = ({ enable }: AudioFeedbackProps) => {
  const audioRefs = useRef<Record<SoundType, HTMLAudioElement | null>>({
    complete: null,
    'level-up': null,
    streak: null,
    fail: null,
    click: null,
  });
  
  // Simulate loading the audio files
  useEffect(() => {
    if (!enable) return;
    
    // In a real implementation, we would load actual audio files
    // For demo purposes, we're just creating the audio elements
    const sounds: SoundType[] = ['complete', 'level-up', 'streak', 'fail', 'click'];
    
    sounds.forEach((sound) => {
      const audio = new Audio();
      // audio.src = `/sounds/${sound}.mp3`; // In a real app, these sound files would exist
      audio.preload = 'auto';
      audioRefs.current[sound] = audio;
    });
    
    return () => {
      // Cleanup
      Object.values(audioRefs.current).forEach((audio) => {
        if (audio) {
          audio.pause();
          audio.src = '';
        }
      });
    };
  }, [enable]);
  
  // Expose play function to window for easy access from other components
  useEffect(() => {
    if (!enable) return;
    
    const playSound = (sound: SoundType) => {
      const audio = audioRefs.current[sound];
      if (audio) {
        audio.currentTime = 0;
        audio.play().catch(e => console.error('Error playing sound:', e));
      }
    };
    
    // Add to window for global access
    window.playFitPulseSound = playSound;
    
    return () => {
      // Cleanup
      delete window.playFitPulseSound;
    };
  }, [enable]);

  // Empty render, this is just a controller component
  return null;
};

// Add type declaration for the global window object
declare global {
  interface Window {
    playFitPulseSound?: (sound: SoundType) => void;
  }
}

export default AudioFeedback;
