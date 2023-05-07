import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import ReactGA from 'react-ga4';

const Contact = () => {
    const { t } = useTranslation();
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
            message: t('contact.form.title')
        }
    });
    const form = useRef();

    const [enabled, setEnabled] = useState(false);
    const [escape, setEscape] = useState(false);
    const [loading, setLoading] = useState(false);

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
        if (enabled && !loading) {
            setLoading(true);
            await emailjs.sendForm("service_h89dzqd", "template_uaoles8", form.current, "-bEximWOIrr-T5TTo")
            .then((resp) => {
                if(resp.text === "OK") {
                    setFormData({
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
                            message: t('contact.form.success')
                        }
                    });
                    ReactGA.event({
                        category: "contact",
                        action: "send message"
                    });
                }
            }).catch((err) => {
                setFormData(prev => ({
                    ...prev,
                    valid: {
                        isValid: false,
                        message: t('contact.form.failed')
                    }
                }));
            });
            setLoading(false);
            
        } else {
            let data = formData;
            data.valid = {
                isValid: false,
                message: t('contact.form.errTitle')
            }
            setFormData(data);
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
                    validationMessage: t('contact.form.validation.name')
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
                    validationMessage: t('contact.form.validation.email')
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
                    validationMessage: t('contact.form.validation.message')
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
            setFormData(prev => (
                {
                    ...prev,
                    valid: {
                        isValid: true,
                        message: t('contact.form.title')
                    }
                }
            ));
        } else {
            setEnabled(false);
        }
    }

    useEffect(() => {
        validateForm();
    }, [formData.name.value, formData.email.value, formData.message.value]);

    const handleSubmitHover = () => {
        if (!enabled) {
            setEscape(prev => !prev)
        }
    }

    return (
        <form ref={form} onSubmit={handleSubmit} className='contact-form' data-aos="slide-left">
            <div className='form-validation' valid={formData.valid.isValid.toString()}>
                {formData.valid.message}
            </div>

            <div className='form-group'>
                <label> {t('contact.form.name')} </label>
                <input
                    name='name'
                    type='text'
                    placeholder={t('contact.form.name')}
                    className='form-control'
                    value={formData.name.value}
                    is-valid={formData.name.isValid.toString()}
                    onChange={handleInputChange} onBlur={validateForm}
                />
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
                    onMouseEnter={handleSubmitHover}
                    disabled={loading}
                >
                    {loading ? 
                        <div className='loading'>&nbsp;</div>
                    :
                    t('contact.form.send')}
                </button>
            </div>
        </form>
    )
}

export default Contact