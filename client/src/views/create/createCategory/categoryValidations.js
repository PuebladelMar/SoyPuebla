const categoryValidations = (createProduct) => {
    let errors = {};
  
    if (!createProduct.name) {
      errors.name = "Debes proveer un nombre al producto.";
    } else if (createProduct.name.length > 20) {
      errors.name = "Demasiados caracteres.";
    }

    return errors;
  };
  
  export default categoryValidations;