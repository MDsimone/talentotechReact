import React from "react";
import '../../styles/styles.css';

function Contacto() {  
    return (
     <section className="form-container">
        <h2>Contactarnos</h2>
      <form action="https://formspree.io/f/mzzrpokr" method="POST" className="form-container">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" required maxLength={15}/>
        
            <label htmlFor="email">Correo electrónico:</label>
            <input type="email" id="email" name="email" placeholder="Tu correo electrónico" required maxLength={50}/>
        
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea id="mensaje" name="mensaje" rows={4} cols={50} placeholder="Escribe tu mensaje aquí..." required></textarea>
        
            <button type="submit">Enviar</button>
        </form>
     </section>
    );
}
export default Contacto;