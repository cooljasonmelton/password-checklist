import React from 'react';

//styling
import './SetPasswordForm.css';

const SetPasswordForm = () => {
  return (
    <div className="SetPasswordForm cfb">
        <h1> Update Password: </h1>
        <h3>Must contain:</h3>
        <p>An uppercase letter</p>
        <form>
            <input type="password" onChange={null}/>
        </form>
    </div>
  );
}

export default SetPasswordForm;
