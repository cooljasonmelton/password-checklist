import React from 'react';

//styling
import './SetPasswordForm.css';

const MustContainItem = props => {
    const {label} = props

    const setClass = () => {
        const classArr = ["must-line"]
        if (label[1]) classArr.push('cross-out')
        return classArr.join(' ')
      }


    return (
        <div className="MustContainItem">

            <div className="must-item">
                <p className="must-text">{label[0]}</p>
                <div className={setClass()}></div>
            </div>


        </div>
  );
}

export default MustContainItem;
