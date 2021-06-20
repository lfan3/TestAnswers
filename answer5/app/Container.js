import React, { useState } from 'react'
import {
    DownOutlined,
    UpOutlined,
    PlusOutlined,
    HeartOutlined
  } from '@ant-design/icons';
import Tag from './Tag';

function Container(){
    let [show, setShow] = useState(false)
    
    const clickHandler = ()=>{
        setShow(prevShow => !prevShow)
    }
    return(
        <div className="wrapper">
            <div className="collapsible">
                <div className="label">标签:</div>
                <div className="folder" onClick={clickHandler}>展开<span>{show ? <UpOutlined /> : <DownOutlined /> }</span></div>
            </div>
            {show 
            && <div className="content"> 
                    <div className='content-row'>
                        <div className='content-col'>
                            <Tag  iconPosition="left" tagContent="添加">
                            <span className='tag-icon'>
                                <PlusOutlined /> 
                            </span>
                            </Tag>
                        </div>
                        <div className='content-col'>
                            <Tag iconPosition="right" tagContent="准确性高">
                            <span className='tag-icon'>
                                <HeartOutlined />
                            </span>
                            </Tag>
                        </div>
                    </div>
               </div> 
            }
        </div>
    )
}

export default Container;
