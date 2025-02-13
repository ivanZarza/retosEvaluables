async function insertarDocumento(documento) {
  try {
    const document = await documento.save();
    console.log(document);
  } catch (err) {
    console.log(err);
  }
}


async function obtenerFotos(usuario) {
  try {
    const fotos = await Photo.find({ userName: usuario });
    console.log(fotos);
    return fotos;
  } catch (err) {
    console.log(err);
  }
}

async function modificarFoto(titulo, nuevaDescripcion) {
  try {
    const foto = await Photo.findOneAndUpdate(
      { title: titulo },
      { description: nuevaDescripcion }
    );
    console.log(foto);
    return foto;
  } catch (err) {
    console.log(err);
  }
}

async function eliminarFoto(usuario, titulo) {
  try {
    const resultado = await Photo.findOneAndDelete({ userName: usuario, title: titulo });
    console.log(resultado);
    return resultado;
  } catch (err) {
    console.log(err);
  }
}

async function eliminarTodasLasFotos(usuario) {
  try {
    const resultado = await Photo.deleteMany({ userName: usuario });
    console.log(resultado);
    return resultado;
  } catch (err) {
    console.log(err);
  }
}

module.exports = { insertarDocumento, obtenerFotos, modificarFoto, eliminarFoto, eliminarTodasLasFotos };