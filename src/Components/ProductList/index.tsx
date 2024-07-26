import { useState } from 'react'
import { ButtonContainer } from '../Button/styles'
import { CardapioItem } from '../pages/Categories'
import * as S from './styles'
import close from '../../assets/close 1.png'

type ProductListProps = {
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

interface ModalState {
  preco: number
  isVisible: boolean
  type: string
  url: string
  descricao: string
  nome: string
  porcao: string
}

const ProductList = ({ foods }: ProductListProps) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: '',
    descricao: '',
    nome: '',
    porcao: '',
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
      preco: food.preco
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
      preco: 0
    })
  }

  return (
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
            <ButtonContainer className='text'>{`Adicionar ao carrinho - ${formataPreco((modal.preco))}`}</ButtonContainer>
            </S.Descricao>
          </S.ModalContent>
        </S.Modal>
      )}
    </S.Container>
  )
}

export default ProductList
