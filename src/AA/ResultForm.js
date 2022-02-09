import React from 'react';
import { useCount } from './Context';

function ResultForm() {
    const {state}=useCount()
  return (
  <div>
     <div>
        <h4>The Name is <span>{state.firstName+" "+state.lastName}</span></h4>
     </div>
     <div>
         <h4>The Address is <span>{state.addressOne+" "+state.addressTwo+" "+state.addressThree}</span></h4>
     </div>
  </div>
  );
}

export default ResultForm;
