import React, { useState } from 'react';

//styling
import './UpdatePasswordContainer.css';
import MustContainItem from './MustContainItem';

const UpdatePasswordContainer = () => {
  // form inputs
  const [passwordOne, setPasswordOne] = useState("")
  const [passwordTwo, setPasswordTwo] = useState("")

  // booleans for password validations
  const [containsUL, setContainsUL] = useState(false) // uppercase letter
  const [containsLL, setContainsLL] = useState(false) // lowercase letter
  const [containsN, setContainsN] = useState(false) // number
  const [containsSC, setContainsSC] = useState(false) // special character
  const [contains8C, setContains8C] = useState(false) // min 8 characters
  const [passwordMatch, setPasswordMatch] = useState(false) // passwords match

  // checks all validations are true
  const [allValid, setAllValid] = useState(false)

  // labels and state boolean corresponding to each validation
  const mustContainData = [
    ["An uppercase letter (a-z)", containsUL],
    ["A lowercase letter (A-Z)", containsLL],
    ["A number (0-9)", containsN],
    ["A special character (!@#$)", containsSC],
    ["At least 8 characters", contains8C],
    ["Passwords match", passwordMatch]
  ]

  const validatePassword = () => {
    // has uppercase letter
    if (passwordOne.toLowerCase() != passwordOne) setContainsUL(true)
    else setContainsUL(false)

    // has lowercase letter
    if (passwordOne.toUpperCase() != passwordOne) setContainsLL(true)
    else setContainsLL(false)

    // has number
    if (/\d/.test(passwordOne)) setContainsN(true)
    else setContainsN(false)

    // has special character
    if (/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(passwordOne)) setContainsSC(true)
    else setContainsSC(false)

    // has 8 characters
    if (passwordOne.length >= 8) setContains8C(true)
    else setContains8C(false)

    // passwords match
    if (passwordOne !== "" && passwordOne === passwordTwo) setPasswordMatch(true)
    else setPasswordMatch(false)

    // all validations passed
    if (containsUL && containsLL && containsN && containsSC && contains8C && passwordMatch) setAllValid(true)
    else setAllValid(false)
  }

  return (
    <div className="UpdatePasswordContainer cfb">
        <h1> Update Password</h1>
      
      {/* update password form */}
        <form className="password-form cfb">
          {/* password one */}
            <label> 
              new password: 
              <br/>
             <input type="password" 
              value={passwordOne} 
              onChange={e=>setPasswordOne(e.target.value)} 
              onKeyUp={validatePassword}/>
            </label>

          {/* password two */}
            <label>
              re-enter password: 
              <br/>
              <input type="password" 
                value={passwordTwo} 
                onChange={e=>setPasswordTwo(e.target.value)} 
                onKeyUp={validatePassword} />
            </label>

          {/* input button */}
            <input 
              className="submit-button"
              type="submit" 
              disabled={!allValid}/>
        </form>

        {/* create an MustContainItem for each password validation with props of label and boolean of state */}
        <h4>Must contain:</h4>
        <div className="must-container cfb">
          {mustContainData.map(data=> <MustContainItem data={data}/>)}
        </div>

    </div>
  );
}

export default UpdatePasswordContainer;
