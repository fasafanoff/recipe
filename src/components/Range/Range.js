import React,{useState,useRef} from 'react';

const Range = ({max,min,update}) => {

    const RefFrom = useRef(null);
    const RefTo = useRef(null);
    return (
      <div>
        <input
            ref={RefFrom}
          type="number"
          min="0"
          onChange={() =>
            update({ from: RefFrom.current.value, to: RefTo.current.value })
          }
        />
            <input
                ref={RefTo}
          type="number"

          min="0"
          onChange={() =>
            update({ from: RefFrom.current.value, to: RefTo.current.value })
          } 
        />
      </div>
    );
}

export default Range;
