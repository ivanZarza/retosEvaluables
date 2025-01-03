const carrito = []

$("#bt1").click(() => {
    let prenda = {
      nombre: "Pantalon ancho",
      precio: 22,
    }
    carrito.push(prenda)
    console.log(carrito)
})

$("#bt2").click(() => {
    let prenda = {
      nombre: "Mono overol",
      precio: 12,
    }
    carrito.push(prenda)
    console.log(carrito)
})

$("#bt3").click(() => {
    let prenda = {
      nombre: "Falda mini zebra",
      precio: 18,
    }
    carrito.push(prenda)
    console.log(carrito)
})

$("#bt4").click(() => {
    let prenda = {
      nombre: "Vestido Jersey",
      precio: 24,
    }
    carrito.push(prenda)
    console.log(carrito)
})

$("#bt5").click(() => {
    let prenda = {
      nombre: "Pantalones altos",
      precio: 20,
    }
    carrito.push(prenda)
    console.log(carrito)
})

$("#bt6").click(() => {
    let prenda = {
      nombre: "Vestido tunico",
      precio: 30,
    }
    carrito.push(prenda)
    console.log(carrito)
})

$("#bt7").click(() => {
    let prenda = {
      nombre: "Cardigan",
      precio: 16,
    }
    carrito.push(prenda)
    console.log(carrito)
})

$("#bt8").click(() => {
    let prenda = {
      nombre: "Falda print",
      precio: 14,
    }
    carrito.push(prenda)
    console.log(carrito)
})

$("#carrito").click(() => {
  let total = 0
  $("#lista").empty()
  $("#total").empty()

  carrito.forEach((prenda) => {
    total += prenda.precio
    $("#lista").append(`<li>${prenda.nombre} - ${prenda.precio}</li>`)
  })

  $("#total").append(`<p>Total: ${total}</p>`)
  $("#listaCarrito").css("display", "block")
})

$("#cruzCerrar").click(() => {
  $("#listaCarrito").css("display", "none")
})

$("#btnCerrar").click(() => {
  $("#listaCarrito").css("display", "none")
})

$("#btnGuardar").click(() => {
  $("#listaCarrito").css("display", "none")
})