import React, { useState } from 'react';

//styling
import './SetPasswordForm.css';
import MustContainItem from './MustContainItem';

const SetPasswordForm = () => {
  // form inputs
  const [passwordOne, setPasswordOne] = useState("")
  const [passwordTwo, setPasswordTwo] = useState("")

  // booleans for password validations
  const [containsUL, setContainsUL] = useState(false)
  const [containsLL, setContainsLL] = useState(false)
  const [containsN, setContainsN] = useState(false)
  const [containsSC, setContainsSC] = useState(false)
  const [contains8C, setContains8C] = useState(false)
  const [passwordMatch, setPasswordMatch] = useState(false)
  const [allValid, setAllValid] = useState(false)



  const mustContainLabels = [
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
    <div className="SetPasswordForm cfb">
        <h1> Update Password: </h1>
        <h3>Must contain:</h3>

        {mustContainLabels.map(label=> <MustContainItem label={label}/>)}

        <form className="password-form">
            <input type="password" value={passwordOne} onChange={e=>setPasswordOne(e.target.value)} onKeyUp={validatePassword}/>
            <input type="password" value={passwordTwo} onChange={e=>setPasswordTwo(e.target.value)} onKeyUp={validatePassword} />
            <input type="submit" disabled={!allValid}/>
        </form>
    </div>
  );
}

export default SetPasswordForm;
