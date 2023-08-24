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
    <section className="information-section-admin">
    <div className="containerInfo">
      <div className="form-containerInfo">
        <h2 className="vistaInfo">Información del footer</h2>
        <label className="labelInfo">Email:</label>
        <input
          className="inputInfo"
          type="text"
          name="email"
          value={info.email}
          onChange={handleInputChange}
        />
        <label className="labelInfo">Teléfono:</label>
        <input
          className="inputInfo"
          type="text"
          name="phone"
          value={info.phone}
          onChange={handleInputChange}
        />
        <label className="labelInfo">Instagram:</label>
        <input
          className="inputInfo"
          type="text"
          name="instagram"
          value={info.instagram}
          onChange={handleInputChange}
        />
        <label className="labelInfo">Facebook:</label>
        <input
          className="inputInfo"
          type="text"
          name="facebook"
          value={info.facebook}
          onChange={handleInputChange}
        />
        <label className="labelInfo">WhatsApp:</label>
        <input
          className="inputInfo"
          type="text"
          name="whatsapp"
          value={info.whatsapp}
          onChange={handleInputChange}
        />
        <label className="labelInfo">Imagen del footer:</label>
        <input
          className="inputInfo"
          type="text"
          name="image"
          value={info.image}
          onChange={handleInputChange}
        />
        <button className="buttonInfo" onClick={saveChanges}>
          Guardar Cambios
        </button>
      </div>
      
      <div className="form-containerInfo">
        <h2 className="vistaInfo">Preguntas y Respuestas</h2>
        <form onSubmit={handleQuestionSubmit}>
        <label className="labelInfo">Preguntas:</label>
        <br />
          <textarea
            className="textarea"
            name="questions"
            value={questionForm.questions}
            onChange={handleQuestionChange}
            rows="3" 
          /> <br />
          <label className="labelInfo">Respuestas:</label><br />
          <textarea
            className="textarea"
            name="answers"
            value={questionForm.answers}
            onChange={handleQuestionChange}
            rows="3" 
          />
          <button className="buttonInfo" type="submit">
            Enviar Pregunta y Respuesta
          </button>
        </form>
      </div>
      
    </div>
    </section>
  );
};

export default Information;
