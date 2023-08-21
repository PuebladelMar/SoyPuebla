const validations = (createProduct) => {
  let errors = {};

  if (!createProduct?.name) {
    errors.name = "Debes proveer un nombre al producto.";
  } else if (createProduct?.name.length > 30) {
    errors.name = "Demasiados caracteres.";
  }

  if (!createProduct?.description) {
    errors.description = "Descripcion vacia.";
  } else if (createProduct?.description.length > 300) {
    errors.description = "Demasiados caracteres.";
  }

  if (!createProduct?.price) {
    errors.price = "Sin precio";
  } else if (!/^\d+(\.\d+)?$/.test(createProduct?.price)) {
    errors.price = "Debe ser un número válido";
  } else if (parseFloat(createProduct?.price) < 0) {
    errors.price = "No puede ser un número negativo";
  }

  if (createProduct?.colorImage.length === 0) {
    errors.color = "Selecciona por lo menos un color";
  } else {
    const hasEmptyStocks = createProduct.colorImage.some(
      item => item.stocks.length === 0
    );
  
    const hasEmptyImages = createProduct.colorImage.some(
      item => item.images.length === 0
    );
  
    if (hasEmptyStocks) {
      errors.size = "Selecciona por lo menos una talla para cada color";
    }
  
    if (hasEmptyImages) {
      errors.images = "Selecciona por lo menos una imagen para cada color";
    }
  }

  if(createProduct?.colorImage.length > 6){
    errors.color = "no puedes seleccionar mas de 6 colores";
  }

  if (createProduct?.category.length === 0) {
    errors.category = "Seleccione una categoría";
  }

  if (createProduct?.series.length === 0) {
    errors.series = "Seleccione una coleccion";
  }

  return errors;
};

export default validations;
