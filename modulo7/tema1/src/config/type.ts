type Book= {
  id_book: number,
  id_user: number,
  title: string,
  author: string,
  photo: string,
  price: number,
  type: 'Tapa dura' | 'Tapa blanda'
}

export type {Book};