import React from 'react';
import { TypePhase, useTypedSuperpower } from '../hooks/useTypedSuperpower';
import { styles } from '../styles';

type Props = {
  superpowers: string[];
};

export const Superpowers = ({ superpowers }: Props) => {
  const { typedSuperpower, selectedSuperpower, phase, resume } =
    useTypedSuperpower(superpowers);

  return (
    <div className={`${styles.heroHeadText}`}>
      Hi, I'm{' '}
      {/* <span
        className={`text-purpleDark  
        
        ${
          phase !== TypePhase.Deleting && 'end-cursor'
        } ${phase === TypePhase.Pausing && 'blinking'}
        
        `}
        // aria-label={selectedSuperpower}
      >
        {typedSuperpower}
      </span> */}
      <span className='text-purpleDark end-cursor'>{typedSuperpower}</span>
    </div>
  );
};
