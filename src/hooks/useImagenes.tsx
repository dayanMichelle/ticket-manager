import React, { useState } from 'react'

export const useImagenes = () => {
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
  return {
    imagenes,
    handleImageChange
  }

}
