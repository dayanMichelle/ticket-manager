import React, { useState } from 'react'
import styles from './addTicket.module.css';
import { Imagenes } from '../Imagenes/Imagenes';
import { useImagenes } from '../../hooks/useImagenes';


export const AddTicket = () => {
  const { imagenes, handleImageChange } = useImagenes()


  const handleClick = () => {
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.click();
    }
  }
  return (
    <section className={styles.container}>
      <div className={styles.form}>
        <p>Agregar nuevo ticket 🧾</p>
        <button onClick={handleClick}>
          <i className="fa-solid fa-plus"></i>
        </button>
        <input type="file" id='fileInput' style={{ display: 'none' }} onChange={handleImageChange}
        />
      </div>


      {
        imagenes && <Imagenes imagenes={imagenes} />
      }


    </section>
  )
}
