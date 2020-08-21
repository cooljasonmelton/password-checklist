import React, { useState } from 'react';

//styling
import './SetPasswordForm.css';

const SetPasswordForm = () => {
  const [upperCase, setUpperCase] = useState(false)

  const setClass = () => {
    const classArr = ["must-line"]
    if (upperCase) classArr.push('cross-out')
    return classArr.join(' ')
  }

  return (
    <div className="SetPasswordForm cfb">
        <h1> Update Password: </h1>
        <h3>Must contain:</h3>
        <button onClick={()=>setUpperCase(!upperCase)}> test </button>

        <div className="must-item">
          <p className="must-text">An uppercase letter</p>
          <div className={setClass()}></div>
        </div>

        <form>
            <input type="password" onChange={null}/>
        </form>
    </div>
  );
}

export default SetPasswordForm;
