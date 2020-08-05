import React from 'react';

import './styles.css';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/95136?s=460&u=e5adcee574a8067fefde24fbc1e78b2eab7f9378&v=4" alt="David Fowler" />
        <div>
          <strong>David Fowler</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br /><br />Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={ whatsAppIcon } alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  )
};

export default TeacherItem;