import React from 'react'

const Experience = ({years, label}) => {
    return (
        <div className='experience'>
            <div className='experience__years'>+{years + ( years > 1 ? ' years' : ' year')}</div>
            <div className='experience__label'>{label} experience</div>
        </div>
    )
}

export default Experience