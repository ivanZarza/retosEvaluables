type Book= {
  id_book: number,
  id_user: number,
  title: string,
  author: string,
  photo: string,
  price: number,
  type: 'Tapa dura' | 'Tapa blanda'
}

type inputLibroProps = {
  name: string,
  type: string,
  placeholder: string,
  value: string | number | boolean
}

export type {Book, inputLibroProps};