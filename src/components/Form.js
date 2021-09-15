import React, { useEffect, useState, useRef} from 'react';
import useInput from '../hooks/useInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import 


function Form() {

    const [options, setOptions] = useState([
        {
            label:  'I would describe my user type as',
            value: 'I would describe my user type as',
        },
        {
            label: 'Introverted',
            value:'Introverted',
        },
        {
            label:   'Extroverted',
            value:  'Extroverted',
        },
        {
            label:   'Ambiverted',
            value:  'Ambiverted',
        },
    ])

    const [name, bindName, resetName] = useInput('');
    const [email, bindEmail, resetEmail] = useInput('')
    const [password, bindPassword, resetPassword] = useInput('')
    const [select, bindSelect, resetSelect] = useInput('')

    const nameRef = useRef(null);
    const nameLabelRef = useRef(null);
    const emailRef = useRef(null);
    const emailLabelRef = useRef(null);
    const passwordRef = useRef(null);
    const eyeRef = useRef(null);
    const eyeSlashRef = useRef(null);
    const emailEyeRef = useRef(null);
    const emailEyeSlashRef = useRef(null);

    const submitHandler = (e) => {
        e.preventDefault();
        resetName();
        resetEmail();
        resetSelect();
        resetPassword();
    }

    const toggleHandler = (event, id, icon) => {
        event.current.style.display = 'none'
        const type = id.current.getAttribute('type') === 'password' ? 'text' : 'password'
        id.current.setAttribute('type', type);
        icon.current.style.display = 'grid';
    } 

    const toggleEmail = (event, id, icon) => {
        event.current.style.display = 'none'
        // const type = id.current.getAttribute('type') === 'email' ? 'hidden' : 'email'
        // const colorCode = id.current.style.color
        const  color = id.current.style.color === 'black' ? 'transparent' : 'black'
        // id.current.style.color = color
        // id.current.setAttribute('type', type);
        id.current.setAttribute('style', `color: ${color}`);
        icon.current.style.display = 'grid';
    }

    useEffect( () => {
        nameRef.current.addEventListener('focus', function () {
            nameLabelRef.current.style.display = 'grid'
        })
    }, [name])

    useEffect( () => {
        emailRef.current.addEventListener('focus', function () {
            emailLabelRef.current.style.display = 'grid'
            emailEyeRef.current.style.display = 'grid'
        })
    }, [email])

    useEffect( () => {
        // Validate name
        if(name) {
            nameRef.current.style.borderColor = 'green'
        }
        // nameRef.current.style.borderColor = 'red'
    }, [name])

    useEffect( () => {

        //Validate email address

        emailRef.current.addEventListener('keyup', function () {
            let pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(pattern.test(email)){
                emailRef.current.style.borderColor =`green`; 
                return true;
            }
            else {
                emailRef.current.style.borderColor = `#e35152`;
                return false;
            }
        })
        
        
        emailRef.current.addEventListener('blur', () => {
            let pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(pattern.test(email)){
                emailRef.current.style.borderColor = `#green` ; 
                return true;
            }
            else {
                emailRef.current.style.borderColor = `#e35152`;
                return false;
            }
        })
    }, [email])

    useEffect( () => {
        // Validate password

        passwordRef.current.addEventListener('keyup', () => {
            let pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
            if(pattern.test(password)){  
                passwordRef.current.style.borderColor = `#green` ;
                return true;
            }
            else {
                passwordRef.current.style.borderColor = `#e35152`;
                return false;
            }
        })
        
        passwordRef.current.addEventListener('blur',  () => {
            let pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
            if(pattern.test(password)){  
                passwordRef.current.style.borderColor = `#green` ;
                return true;  
                }else{  
                passwordRef.current.style.borderColor = `#e35152`;
                return false;  
                }  
            }) 
    })

    return (
        <div className='form-page' >
            <div className='form-div'>
                <div><p><b>Step 1 of 3  . </b><b style={{color: 'rgba(237,237,237)'}}> . .</b></p></div>
                <div>
                    <h4>Let's setup your account</h4>
                    <div>
                        <p>Already have an account ?  <span><a>Sign in</a></span></p>
                        
                    </div>
                    <form>
                        <div>
                            <label ref={nameLabelRef} id='name'>Name</label>
                            <input {...bindName} ref={nameRef} name='name' type='text' placeholder='Name' />
                        </div>
                        <div>
                            <label ref={emailLabelRef}>Email address</label>
                            <input {...bindEmail} ref={emailRef} type='email' placeholder='alat@gmail.com' />
                            <div onClick={ (e) => {toggleEmail(emailEyeRef, emailRef, emailEyeSlashRef)}} ref={emailEyeRef} className='eye email-eye' ><FontAwesomeIcon icon={["far", "eye"]} /></div>
                            <div onClick={ (e) => {toggleEmail(emailEyeSlashRef, emailRef, emailEyeRef)}} ref={emailEyeSlashRef} className='eye eye-slash email-eye' ><FontAwesomeIcon icon={["far", "eye-slash"]} /></div>
                        </div>
                        <div>
                            <select {...bindSelect} required >
                                {options.map((option, i) => {
                                    if(i === 0) {
                                        return <option disabled value={option.value}>{option.label}</option>
                                    }
                                    return <option value={option.value}>{option.label}</option>
                                })}
                            </select>
                        </div>
                        <div>
                            <input {...bindPassword}  ref={passwordRef} type='password' placeholder='Password' />
                            <span>Minimum of 8 characters (sercth3?) </span>
                            <div ref={eyeRef} className='eye' onClick={ (e) => {toggleHandler(eyeRef, passwordRef, eyeSlashRef)}} ><FontAwesomeIcon icon={["far", "eye"]} /></div>
                            <div ref={eyeSlashRef} onClick={ (e) => {toggleHandler(eyeSlashRef, passwordRef, eyeRef)}} className='eye eye-slash' ><FontAwesomeIcon icon={["far", "eye-slash"]} /></div>
                        </div>
                        <div className='btn-div'>
                            <button onClick={submitHandler} className='btn'>Next</button>
                        </div>
                    </form>
                    <div>
                        <p>By clicking the 'Next' button, you are agree to creating account a free account, and to <b><a>Terms of Service</a></b> and <b><a>Privacy Policy.</a></b></p>
                    </div>
                </div>
            </div>
            
            <div>
                <div>
                    <h5>NADECO.CO</h5>
                    <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
                    </p>
                </div>
                
            </div>
        </div>
    )
}

export default React.memo(Form)