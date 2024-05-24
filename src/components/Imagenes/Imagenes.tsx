import React from 'react'
import styles from './imagenes.module.css'



export const Imagenes = ({ imagenes }) => {
  return (
    <div className={styles.gridContainer}>
      {imagenes?.map((image: any, index: number) => (
        <a className={styles.gridItem}>
          <img
            key={index}
            src={image}
            alt="Vista previa de la imagen"
            className={styles.imgTicket}
          />
        </a>
      ))}
    </div>
  )
}
