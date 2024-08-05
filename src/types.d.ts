declare interface CardapioItem {
    titulo: string
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
  
declare interface Restaurant {
    foto: string
    id: number
    titulo: string
    destacado: boolean
    tipo: string
    avaliacao: number
    descricao: string
    capa: string
    cardapio: CardapioItem[]
  }
  
  declare interface ModalState {
    id: number
    preco: number
    isVisible: boolean
    type: string
    url: string
    descricao: string
    nome: string
    porcao: string
  }

  interface Checkout {
    products: Array<{ id: number; price: number }>
    delivery: {
      receiver: string
      address: {
        description: string
        city: string
        zipCode: string
        numberAddress: number
        complement: string
      }
    }
    payment: {
      card: {
        name: string
        number: string
        code: number
        expires: {
          month: number
          year: number
        }
      }
    }
  }
  