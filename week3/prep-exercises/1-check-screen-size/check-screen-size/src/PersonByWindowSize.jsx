import React, { useDebugValue } from 'react';
import { MdTabletMac, MdLaptopMac, MdDesktopMac } from 'react-icons/md';
import { useWindowSize } from './useWindowSize';


const POSSIBLE_STATES = {
    small: { name: "Tablet", size: "small", icon: <MdTabletMac /> },
    medium: { name: "Laptop", size: "medium", icon: <MdLaptopMac /> },
    big: { name: "Desktop", size: "big", icon: <MdDesktopMac /> },
  }
  
   const PersonByWindowSize = () => {
    const { width } = useWindowSize();

    const isBig = width >= 1000;
    const isMedium = width >= 700 && width < 1000;
    const isSmall = width < 700;
  
    let state = null
    if (isBig) {
        state = POSSIBLE_STATES.big
    } else if (isMedium) {
        state = POSSIBLE_STATES.medium
    } else if (isSmall) {
        state = POSSIBLE_STATES.small
    }

    useDebugValue(`now is ${state?.name}`)
  
    function PersonMessage ({state}) {
        return (
            <div>
                <h1>{state.name}</h1> 
                {state.icon}
            </ div>)
    };

    return (
        <div>
            <PersonMessage 
             state={state || { name: "Unknown", size: "unknown", icon: <MdTabletMac /> }} />
        </div>
    )
  }

  export default PersonByWindowSize;