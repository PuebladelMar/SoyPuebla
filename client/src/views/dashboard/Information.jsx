import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postInformation, postQuestions } from '../../redux/Actions';
import "./Information.css";

const Information = () => {
  const dispatch = useDispatch();
  
  const [info, setInfo] = useState({
    email: '',
    phone: '',
    instagram: '',
    facebook: '',
    whatsapp: '',
    image: ""
  });
  const [questionForm, setQuestionForm] = useState({
    questions: '',
    answers: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };
  const handleQuestionChange = (event) => {
    const { name, value } = event.target;
    setQuestionForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
  const handleQuestionSubmit = async (event) => {
    event.preventDefault();
    await dispatch(postQuestions(questionForm));
    setQuestionForm({
      questions: '',
      answers: '',
    });
  };
  const saveChanges = async () => {
    await dispatch(postInformation(info));
    // console.log('Cambios guardados:', info);
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2 className="vista">Información del footer</h2>
        <label className="label">Email:</label>
        <input
          className="input"
          type="text"
          name="email"
          value={info.email}
          onChange={handleInputChange}
        />
        <label className="label">Teléfono:</label>
        <input
          className="input"
          type="text"
          name="phone"
          value={info.phone}
          onChange={handleInputChange}
        />
        <label className="label">Instagram:</label>
        <input
          className="input"
          type="text"
          name="instagram"
          value={info.instagram}
          onChange={handleInputChange}
        />
        <label className="label">Facebook:</label>
        <input
          className="input"
          type="text"
          name="facebook"
          value={info.facebook}
          onChange={handleInputChange}
        />
        <label className="label">WhatsApp:</label>
        <input
          className="input"
          type="text"
          name="whatsapp"
          value={info.whatsapp}
          onChange={handleInputChange}
        />
        <label className="label">Imagen del footer:</label>
        <input
          className="input"
          type="text"
          name="image"
          value={info.image}
          onChange={handleInputChange}
        />
        <button className="button" onClick={saveChanges}>
          Guardar Cambios
        </button>
      </div>
      <br />
      <div className="form-container">
        <h2 className="vista">Preguntas y Respuestas</h2>
        <form onSubmit={handleQuestionSubmit}>
        <label className="label">Preguntas:</label>
        <br />
          <textarea
            className="textarea"
            name="questions"
            value={questionForm.questions}
            onChange={handleQuestionChange}
            rows="3" 
          /> <br />
          <label className="label">Respuestas:</label><br />
          <textarea
            className="textarea"
            name="answers"
            value={questionForm.answers}
            onChange={handleQuestionChange}
            rows="3" 
          />
          <button className="button" type="submit">
            Enviar Pregunta y Respuesta
          </button>
        </form>
      </div>
      
    </div>
  );
};

export default Information;
