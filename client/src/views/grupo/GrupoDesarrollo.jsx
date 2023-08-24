import './GrupoDesarrollo.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const GrupoDesarrollo = () => {
  return (
    <div className='grupo-container'>
      <p className='grupo-tittle'>Equipo de desarrollo:</p>
      <div className='team-members'>
        <div className='members1'>
          <a
            href='https://www.linkedin.com/in/mat%C3%ADas-urrutia-de-ter%C3%A1n-16695a20b/'
            target='_blank'
            rel='noopener'
            className='a-grupo'
          >
            <LinkedInIcon />
            <span>Matias Urrutia</span>
          </a>

          <a
            href='https://www.linkedin.com/in/agust%C3%ADnnazer/'
            target='_blank'
            rel='noopener'
            className='a-grupo'
          >
            <LinkedInIcon />
            <span>Agustin Nazer</span>
          </a>

          <a
            href='https://www.linkedin.com/in/matias-graneros-86605388/'
            target='_blank'
            rel='noopener'
            className='a-grupo'
          >
            <LinkedInIcon />
            <span>Matias Graneros</span>
          </a>

          <a
            href='https://www.linkedin.com/in/carolina-carvacho-elgueta-263469130/'
            target='_blank'
            rel='noopener'
            className='a-grupo'
          >
            <LinkedInIcon />
            <span>Carolina C. Elgueta</span>
          </a>
        </div>

        <div className='members2'>
          <a
            href='https://www.linkedin.com/in/juan-cruz-mambretti-a8a3a9281/'
            target='_blank'
            rel='noopener'
            className='a-grupo'
          >
            <LinkedInIcon />
            <span>Juan C. Mambretti</span>
          </a>

          <a
            href='https://www.linkedin.com/in/farith-romero-cano-7b80a5126/'
            target='_blank'
            rel='noopener'
            className='a-grupo'
          >
            <LinkedInIcon />
            <span>Farith R. Cano</span>
          </a>

          <a
            href='https://www.linkedin.com/in/ezequiel-men%C3%A9ndez-888381218/'
            target='_blank'
            rel='noopener'
            className='a-grupo'
          >
            <LinkedInIcon />
            <span>Ezequiel Menéndez</span>
          </a>

          <a
            href='https://www.linkedin.com/in/franco-c%C3%A1ceres-2731a0273/'
            target='_blank'
            rel='noopener'
            className='a-grupo'
          >
            <LinkedInIcon />
            <span>Franco Cáceres</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default GrupoDesarrollo;
