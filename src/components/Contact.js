import React, { useEffect, useRef, useState } from 'react'

const Contact = () => {
    const submitBtn = useRef(null);
    const [formData, setFormData] = useState({
        name: {
            value: '',
            isTouched: false,
            isValid: true,
            validationMessage: ''
        },
        email: {
            value: '',
            isTouched: false,
            isValid: true,
            validationMessage: ''
        },
        message: {
            value: '',
            isTouched: false,
            isValid: true,
            validationMessage: ''
        },
        valid: {
            isValid: true,
            message: 'Contact form'
        }
    });

    const [enabled, setEnabled] = useState(false);
    const [escape, setEscape] = useState(false);

    const handleInputChange = e => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: {
                ...prevState[name],
                isTouched: true,
                value: value
            }
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(enabled) {

        } else {
            setFormData(prev => ({
                ...prev,
                valid: {
                    isValid: false,
                    message: 'Form invalid'
                }
            }));
        }
    }

    const validateForm = () => {
        /* Validate name */
        if (formData.name.isTouched && (formData.name.value.length < 3)) {
            setFormData(prev => ({
                ...prev,
                name: {
                    ...prev.name,
                    isValid: false,
                    validationMessage: 'enter a valid name'
                }
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                name: {
                    ...prev.name,
                    isValid: true,
                    validationMessage: ''
                }
            }));
        }
        /* Validate email */
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (formData.email.isTouched && !formData.email.value.match(validRegex)) {
            setFormData(prev => ({
                ...prev,
                email: {
                    ...prev.email,
                    isValid: false,
                    validationMessage: 'enter a valid email'
                }
            }));

        } else {
            setFormData(prev => ({
                ...prev,
                email: {
                    ...prev.email,
                    isValid: true,
                    validationMessage: ''
                }
            }));
        }
        /* Validate message */
        if (formData.message.isTouched && (formData.message.value.length < 20)) {
            setFormData(prev => ({
                ...prev,
                message: {
                    ...prev.message,
                    isValid: false,
                    validationMessage: 'min. 20 character'
                }
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                message: {
                    ...prev.message,
                    isValid: true,
                    validationMessage: ''
                }
            }));
        }
        /* Enable button */
        if (formData.name.isTouched && formData.name.isValid
            && formData.email.isTouched && formData.email.isValid
            && formData.message.isTouched && formData.message.isValid) {
            setEnabled(true);
        } else {
            setEnabled(false);
        }
    }

    useEffect(() => {
        validateForm();
    }, [formData.name.value, formData.email.value, formData.message.value]);

    const handleSubmitHover = () => {
        if(!enabled) {
            setEscape(prev => !prev)
        }
    }

    return (
        <form onSubmit={handleSubmit} className='contact-form'>
            <div className='form-validation' valid={formData.valid.isValid.toString()}>
                {formData.valid.message}
            </div>

            <div className='form-group'>
                <label>Name</label>
                <input name='name' type='text' placeholder='Name' className='form-control' value={formData.name.value} is-valid={formData.name.isValid.toString()} onChange={handleInputChange} onBlur={validateForm} />
                <span className='validation-message'> {formData.name.validationMessage} </span>
            </div>
            <div className='form-group'>
                <label>Email</label>
                <input name='email' type='text' placeholder='Email' className='form-control' value={formData.email.value} is-valid={formData.email.isValid.toString()} onChange={handleInputChange} onBlur={validateForm} />
                <span className='validation-message'> {formData.email.validationMessage} </span>
            </div>
            <div className='form-group'>
                <label>Message</label>
                <textarea name='message' className='form-control' placeholder='Message' rows={4} value={formData.message.value} is-valid={formData.message.isValid.toString()} onChange={handleInputChange} onBlur={validateForm}></textarea>
                <span className='validation-message'> {formData.message.validationMessage} </span>
            </div>
            <div className='form-group'>
                <button
                    type='submit'
                    name='submit'
                    className={escape ? 'submit-btn escape' : 'submit-btn'}
                    ref={submitBtn}
                    onMouseEnter={handleSubmitHover}
                >
                    Send message
                </button>
            </div>
        </form>
    )
}

export default Contact