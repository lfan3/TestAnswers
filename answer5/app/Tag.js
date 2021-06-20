import React from 'react'


function Tag({children, iconPosition, tagContent}){
    return(
        <div className='tag-wrapper'>
            {iconPosition === 'left' && children}
            <div className='tag-content'>{tagContent}</div>
            {iconPosition === 'right' && children}
        </div>
    )
}

export default Tag;