import React from 'react'
import { useTranslation } from 'react-i18next';

const Experience = ({years, label}) => {
    const { t } = useTranslation();
    return (
        <div className='experience'>
            <div className='experience__years'>+{years + ( years > 1 ? (' ' + t('landing.experience.years')) : (' ' + t('landing.experience.year')))}</div>
            <div className='experience__label'>{label}</div>
        </div>
    )
}

export default Experience