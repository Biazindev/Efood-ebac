import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { add, open } from '../store/reducers/cart'
import close from '../../assets/close 1.png'

import { ButtonContainer } from '../Button/styles'
import * as S from './styles'
import Cart from '../Cart'


type Props = {
  foods: CardapioItem[]
}

const getDescricao = (descricao: string) => {
  if (descricao.length > 150) {
    return descricao.slice(0, 147) + '...'
  }
  return descricao
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
      style: "currency",
      currency: 'BRL'
  }).format(preco)
}

const ProductList = ({ foods }: Props) => {
  const dispatch = useDispatch()
  const openCart = () => {
    dispatch(open())
  }

  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: '',
    descricao: '',
    nome: '',
    porcao: '',
    id: 0,
    preco: 0
  })

  const openModal = (food: CardapioItem) => {
    setModal({
      isVisible: true,
      type: 'image',
      url: food.foto,
      descricao: food.descricao,
      nome: food.nome,
      porcao: food.porcao,
      preco: food.preco,
      id: food.id
    })
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: '',
      descricao: '',
      nome: '',
      porcao: '',
      id: 0,
      preco: 0
    })
  }

  const addToCart = () => {
    const itemToAdd: CardapioItem = {
      id: modal.id,
      titulo: modal.nome,
      foto: modal.url,
      descricao: modal.descricao,
      porcao: modal.porcao,
      preco: modal.preco,
      nome: ''
    }
    dispatch(add(itemToAdd))
    dispatch(open())
  }

  const carrinhoVenda = () => {
    addToCart()
    openCart()
  }

  return (
    <div>
      <S.Container>
      {foods.map((food) => (
        <S.List key={food.id} onClick={() => openModal(food)}>
          <S.Card>
            <img src={food.foto} alt={food.nome} />
            <h3>{food.nome}</h3>
            <p>{getDescricao(food.descricao)}</p>
            <ButtonContainer>Adicionar ao carrinho</ButtonContainer>
          </S.Card>
        </S.List>
      ))}
      {modal.isVisible && (
        <S.Modal onClick={closeModal}>
          <S.ModalContent onClick={(e) => e.stopPropagation()}>
            <S.ModalHeader>
              <S.CloseButton 
                src={close}
                alt="Ícone de fechar" 
                onClick={closeModal} 
              />
            </S.ModalHeader>
            <div className="image-container">
              {modal.type === 'image' ? (
                <img src={modal.url} alt="Imagem" />
              ) : (
                <iframe frameBorder={0} src={modal.url} title="Video Player" />
              )}
            </div>
            <S.Descricao>
              <p className='titulo'>{modal.nome}</p>
              <p>{modal.descricao}</p>
              <p>{`Serve: de ${modal.porcao}`}</p>
              <ButtonContainer 
                onClick={carrinhoVenda}
                className='text'
              >{`Adicionar ao carrinho - ${formataPreco((modal.preco))}`}</ButtonContainer>
            </S.Descricao>
          </S.ModalContent>
        </S.Modal>
      )}
    </S.Container>
    <Cart />
    </div>
  )
}

export default ProductList
