import { useState, useEffect } from 'react';
import {
  RESOLUTION_SETTINGS,
  TOP_WIDTH_THRESHOLD,
  BOTTOM_WIDTH_THRESHOLD,
} from '../../utils/utils';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function WindowWidthSettings() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  function handleResizeDeffered() {
    setWindowDimensions(getWindowDimensions());
  }

  useEffect(() => {
    let doit;
    function handleResize() {
      clearTimeout(doit);
      doit = setTimeout(handleResizeDeffered, 100);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    }, []);

  if ( windowDimensions.width >= TOP_WIDTH_THRESHOLD) {
    return RESOLUTION_SETTINGS.big;
  }
  if ( windowDimensions.width <= BOTTOM_WIDTH_THRESHOLD) {
    return RESOLUTION_SETTINGS.small;
  }
  return RESOLUTION_SETTINGS.medium;
}

