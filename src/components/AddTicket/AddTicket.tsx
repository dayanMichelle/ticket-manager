import React, { useState } from 'react'
import styles from './addTicket.module.css';
import { Imagenes } from '../Imagenes/Imagenes';
export const AddTicket = () => {

  const [imagen, setImage] = useState(null);
  const [imagenes, setImagenes] = useState([]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
        setImagenes([...imagenes, e.target.result]);
      };
      reader.readAsDataURL(file);

    }
  };



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
        imagenes && <Imagenes imagenes={imagenes}/>
      }


    </section>
  )
}
