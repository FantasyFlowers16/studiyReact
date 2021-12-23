import React from 'react'
import classes from './MyModal.module.css'

const MyModal = ({children, visible, setIsVisible}) => {
    const rootClasses = [classes.myModal]
    const closeModal = (e) => {
      if (e.currentTarget === e.target) {
        setIsVisible(false)
      }
    }
    if(visible) {
      rootClasses.push(classes.active)
    }
    return (
      <div className={rootClasses.join(' ')} onClick ={closeModal}>
        <div className={classes.myModalContent}>
          {children}
        </div>
      </div>
    )
 }
 export default MyModal