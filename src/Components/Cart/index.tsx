import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

import { RootReducer } from '../store/index'
import { close, remove } from '../store/reducers/cart'
import { formataPreco } from '../ProductList'
import { usePurchaseMutation } from '../../services/api'

import { ButtonContainer } from '../Button/styles'
import * as S from './styles'



const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const [isDeliveryOpen, setIsDeliveryOpen] = useState(false)
  const [isSidebarClosed, setIsSidebarClosed] = useState(false)
  const [isPaymentOpen, setIsPaymentOpen] = useState(false)
  const [isFinish, setIsFinish] = useState(false)
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      id: 1,
      price: 1,
      receiver: '',
      description: '',
      city: '',
      zipCode: '',
      numberAddress: 1,
      number: '',
      complement: '',
      name: '',
      code: 1,
      month: '',
      year: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo nome é obrigatório'),
      receiver: Yup.string()
        .min(5, 'O nome do recebedor precisa ter pelo menos 5 caracteres')
        .required('O campo nome é obrigatório'),
      code: Yup.number()
        .min(100, 'CVV obrigatóriamente tem 3 números')
        .max(999, 'CVV obrigatóriamente tem 3 números')
        .required('O campo CVV é obrigatório'),
      month: Yup.string().required('O campo mês é obrigatório'),
      year: Yup.string().required('O campo ano é obrigatório'),
      zipCode: Yup.string().required('O campo CEP é obrigatório'),
      number: Yup.string().required('O campo número é obrigatório'),
      city: Yup.string().required('O campo cidade é obrigatório'),
    }),
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    enableReinitialize: true,
    onSubmit: (values) => {
      const orderData = {
        products: [
          {
            id: values.id,
            price: values.price,
          },
        ],
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.description,
            city: values.city,
            zipCode: values.zipCode,
            numberAddress: values.numberAddress,
            complement: values.complement,
          },
        },
        payment: {
          card: {
            name: values.name,
            number: values.number,
            code: values.code,
            expires: {
              month: Number(values.month),
              year: Number(values.year),
            },
          },
        },
      }
      console.log('Dados a serem enviados:', orderData)
      purchase(orderData)
        .unwrap()
        .then((response) => {
          console.log('Pedido realizado com sucesso:', response)
          setIsFinish(true)
        })
        .catch((error) => {
          console.error('Erro ao realizar pedido:', error)
        })
    },
  })

  const closeDisplay = () => {
    dispatch(close())
  }

  const saleEnd = () => {
    setIsDeliveryOpen(true)
    setIsSidebarClosed(true)
  }

  const sale = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setIsDeliveryOpen(false)
    setIsSidebarClosed(false)
  }

  const continueToPayment = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setIsDeliveryOpen(false)
    setIsPaymentOpen(true)
  }

  const completeSale = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setIsPaymentOpen(false)
    setIsFinish(true)
    form.handleSubmit()
  }

  const backToAddress = () => {
    setIsPaymentOpen(false)
    setIsDeliveryOpen(true)
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <>
      <S.CartContainer className={isOpen ? 'is-open' : ''}>
        <S.Overlay onClick={closeDisplay} />
        <S.SideBar className={isSidebarClosed ? 'is-close' : ''}>
          <ul>
            {items.map((item) => (
              <S.CartItem key={item.id}>
                <img src={item.foto} alt={item.nome} />
                <div>
                  <h3>{item.titulo}</h3>
                  <span>{formataPreco(item.preco)}</span>
                </div>
                <button onClick={() => removeItem(item.id)} type="button" />
              </S.CartItem>
            ))}
          </ul>
          <S.Quantity>{items.length} produto(s) no carrinho</S.Quantity>
          <S.Prices>
            Valor total <span>{formataPreco(getTotalPrice())}</span>
          </S.Prices>
          <ButtonContainer onClick={saleEnd} type="submit" title="Clique aqui para continuar com a compra">
            Continuar com a entrega
          </ButtonContainer>
        </S.SideBar>
        <S.SideBarAdress className={isDeliveryOpen ? 'is-open' : 'is-close'}>
          <S.Delivery>
            <div>
              <p>Entrega</p>
              <label>Quem irá receber</label>
              <input
                value={form.values.receiver}
                onChange={form.handleChange}
                name="receiver"
                type="text"
              />
              <label>Endereço</label>
              <input
                value={form.values.description}
                onChange={form.handleChange}
                name="description"
                type="text"
              />
              <label>Cidade</label>
              <input
                value={form.values.city}
                onChange={form.handleChange}
                name="city"
                type="text"
              />
              <div>
                <S.LabelItem>
                  <label>CEP</label>
                  <label>Número</label>
                </S.LabelItem>
                <S.InputItem>
                  <InputMask
                    value={form.values.zipCode}
                    onChange={form.handleChange}
                    name="zipCode"
                    type="text"
                    mask='99999-999'
                  />
                  <input
                    value={form.values.numberAddress}
                    onChange={form.handleChange}
                    name="number"
                    className="space"
                    type="text"
                  />
                </S.InputItem>
              </div>
              <span>Complemento (opcional)</span>
              <input
                value={form.values.complement}
                onChange={form.handleChange}
                name="complement"
                type="text"
              />
              <ButtonContainer type='submit' onClick={continueToPayment}>Continuar com o pagamento</ButtonContainer>
              <ButtonContainer type='submit' onClick={sale}>
                Voltar para o carrinho
              </ButtonContainer>
            </div>
          </S.Delivery>
        </S.SideBarAdress>
        <S.SideBarInfo className={isPaymentOpen ? 'is-open' : 'is-close'}>
          <S.Delivery>
            <div>
              <p>Pagamento - Valor a pagar {formataPreco(getTotalPrice())}</p>
              <label>Nome no cartão</label>
              <input
                value={form.values.name}
                onChange={form.handleChange}
                name="name"
                type="text"
              />
              <div>
                <S.LabelItem>
                  <label>Número do cartão</label>
                  <label>CVV</label>
                </S.LabelItem>
                <S.InputItem className="edit">
                  <InputMask
                    value={form.values.number}
                    onChange={form.handleChange}
                    name="number"
                    className="spaceCard"
                    type="text"
                    mask='9999-9999-9999-9999'
                  />
                  <InputMask
                    value={form.values.code}
                    onChange={form.handleChange}
                    name="code"
                    className="spaceCode"
                    type="text"
                    mask='999'
                  />
                </S.InputItem>
              </div>
              <div>
                <S.LabelItem>
                  <label>Mês do vencimento</label>
                  <label>Ano do vencimento</label>
                </S.LabelItem>
                <S.InputItemVencimento>
                  <InputMask
                    value={form.values.month}
                    onChange={form.handleChange}
                    name="month"
                    type="text"
                    mask='99'
                  />
                  <InputMask
                    value={form.values.year}
                    onChange={form.handleChange}
                    name="year"
                    className="space"
                    type="text"
                    mask='9999'
                  />
                </S.InputItemVencimento>
                <ButtonContainer type='submit' onClick={completeSale}>Finalizar pagamento</ButtonContainer>
                <ButtonContainer type='submit' onClick={backToAddress}>Voltar para o endereço</ButtonContainer>
              </div>
            </div>
          </S.Delivery>
        </S.SideBarInfo>
        <S.SideBarFinish className={isFinish ? 'is-open' : 'is-close'}>
          <S.Delivery>
            <div>
              <span>Pedido realizado - {data?.orderId}</span>
              <S.Style>
                Estamos felizes em informar que seu pedido já está <br />
                em processo de preparação e, em breve, será entregue <br />
                no endereço fornecido.
              </S.Style>
              <S.Style>
                Gostaríamos de ressaltar que nossos entregadores <br />
                não estão autorizados a realizar cobranças extras. <br />
              </S.Style>
              <S.Style>
                Lembre-se da importância de higienizar as mãos após <br />
                o recebimento do pedido, garantindo assim sua <br />
                segurança e bem-estar durante a refeição.
              </S.Style>
              <S.Style>
                Esperamos que desfrute de uma deliciosa e agradável <br />
                experiência gastronômica. Bom apetite!
              </S.Style>
            </div>
            <ButtonContainer type='submit'>Concluir</ButtonContainer>
          </S.Delivery>
        </S.SideBarFinish>
      </S.CartContainer>
    </>
  )
}

export default Cart