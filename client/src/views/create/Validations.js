const validations = (createProduct) => {
  let errors = {};

  if (!createProduct.name) {
    errors.name = "Debes proveer un nombre al producto.";
  } else if (createProduct.name.length > 30) {
    errors.name = "Demasiados caracteres.";
  }

  if (!createProduct.description) {
    errors.description = "Descripcion vacia.";
  } else if (createProduct.description.length > 300) {
    errors.description = "Demasiados caracteres.";
  }

  if (!createProduct.price) {
    errors.price = "Sin precio";
  } else if (createProduct.price < 0) {
    errors.price = "No puede ser un numero negativo";
  }

  if (createProduct.color.length === 0) {
    errors.color = "Selecciona por lo menos un color";
  }

  if (
    !createProduct.mainImage ||
    !createProduct.mainImage.match(
      /^https?:\/\/[^ ]+\.(?:png|jpg|jpeg|gif|svg)(\?[^ ]*)?$/i
      // /(http[s]*:\/\/)([a-z\-_0-9/.]+)\.([a-z.]{2,3})\/([a-z0-9\-_/._~:?#[\]@!$&'()*+,;=%]*)([a-z0-9]+\.)(jpg|jpeg|png|gif)/i
    )
  ) {
    errors.mainImage = "Invalid image, must be a URL";
  }

  if (createProduct.size.length === 0) {
    errors.size = "Selecciona por lo menos un talle";
  }

  if (createProduct.category.length === 0) {
    errors.category = "Seleccione una categoría";
  }

  if (createProduct.series.length === 0) {
    errors.series = "Seleccione una coleccion";
  }

  return errors;
};

export default validations;
