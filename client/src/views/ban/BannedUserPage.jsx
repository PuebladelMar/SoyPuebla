import React from 'react';
import "./BannedUserPage.css"
import Swal from 'sweetalert2';
import { useEffect } from 'react';

function BannedUserPage() {

  useEffect(() => {
    Swal.fire({
      title: 'Usuario bloqueado',
      width: 600,
      padding: '3em',
      color: '#999999',
      confirmButtonColor: '#517f7F',
      backdrop: `
      #999999
        left top
        no-repeat
      `
    })
  }, []);
  return (
    <div className='banned-container'>
      <div className='banned-content'>
        <h2 className='banned-title '>Acceso Bloqueado</h2>
        <p className='banned-text'>Tu cuenta ha sido bloqueada y no tienes acceso a esta página.</p>
      </div>
    </div>
  );
};

export default BannedUserPage;
