import React from 'react'
import './_container.scss'


const Container = (props: any) => {
  return (
    <div className='container'>{props.children}</div>
  )
}

export default Container