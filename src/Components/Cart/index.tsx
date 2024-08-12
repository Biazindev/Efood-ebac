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
      numberAddress: '',
      number: '',
      complement: '',
      name: '',
      code: '',
      month: '',
      year: '',
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo nome é obrigatório'),
      name: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo nome é obrigatório'),
      code: Yup.string()
        .matches(/^\d{3}$/, 'CVV obrigatoriamente tem 3 números')
        .required('O campo CVV é obrigatório'),
      month: Yup.string()
        .matches(/^\d{2}$/, 'Digite mês com 2 dígitos')
        .required('O campo mês é obrigatório'),
      year: Yup.string()
        .matches(/^\d{4}$/, 'Digite ano com 4 dígitos')
        .required('O campo ano é obrigatório'),
      zipCode: Yup.string()
        .matches(/^\d{5}-\d{3}$/, 'CEP inválido')
        .required('O campo CEP é obrigatório'),
      number: Yup.string()
        .matches(/^\d{4}-\d{4}-\d{4}-\d{4}$/, 'Número do cartão inválido')
        .required('O campo número é obrigatório'),
      city: Yup.string().required('O campo cidade é obrigatório'),
      description: Yup.string().required('O campo endereço é obrigatório'),
      numberAddress: Yup.string().required('O campo número é obrigatório')
    }),
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
            numberAddress: Number(values.numberAddress),
            complement: values.complement,
          },
        },
        payment: {
          card: {
            name: values.name,
            number: values.number,
            code: Number(values.code),
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

  const checkInputAsError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const asError = isTouched && isInvalid
    return asError
}

const isButtonDisabled = () => {
  return !form.isValid || !form.values.receiver || !form.values.description || !form.values.city || !form.values.zipCode || !form.values.numberAddress 
}

const isButtonDisabledEnd = () => {
  return !form.isValid || !form.dirty || form.isSubmitting || !form.values.name || !form.values.number || !form.values.code || !form.values.month || !form.values.year
 
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
            <form onSubmit={form.handleSubmit}>
              <p>Entrega</p>
              <label>Quem irá receber</label>
              <input
                className={checkInputAsError("receiver") ? 'error' : '' }
                value={form.values.receiver}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                name="receiver"
                type="text"
              />
              <label>Endereço</label>
              <input
                value={form.values.description}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                name="description"
                type="text"
                className={checkInputAsError("description") ? 'error' : '' }
              />
              <label>Cidade</label>
              <input
                value={form.values.city}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                name="city"
                type="text"
                className={checkInputAsError("city") ? 'error' : '' }
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
                    onBlur={form.handleBlur}
                    name="zipCode"
                    type="text"
                    mask='99999-999'
                    className={checkInputAsError("zipCode") ? 'error' : '' }
                  />
                  <input
                    value={form.values.numberAddress}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    name='numberAddress'
                    type='text'
                    className={checkInputAsError("numberAddress") ? 'error' : 'space' }
                  />
                </S.InputItem>
              </div>
              <span>Complemento (opcional)</span>
              <input
                value={form.values.complement}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                name="complement"
                type="text"
                className={checkInputAsError("complement") ? 'error' : '' }
              />
              <ButtonContainer type='submit' onClick={continueToPayment}>Continuar com o pagamento</ButtonContainer>
              <ButtonContainer  type='submit' onClick={sale}>
                Voltar para o carrinho
              </ButtonContainer>
            </form>
          </S.Delivery>
        </S.SideBarAdress>
        <S.SideBarInfo className={isPaymentOpen ? 'is-open' : 'is-close'}>
          <S.Delivery>
            <form>
              <p>Pagamento - Valor a pagar {formataPreco(getTotalPrice())}</p>
              <label>Nome no cartão</label>
              <input
                value={form.values.name}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                name="name"
                type="text"
                className={checkInputAsError("name") ? 'error' : '' }
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
                    onBlur={form.handleBlur}
                    name="number"
                    type="text"
                    mask='9999-9999-9999-9999'
                    className={checkInputAsError("number") ? 'error' : 'spaceCard' }
                  />
                  <InputMask
                    value={form.values.code}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    name="code"
                    type="text"
                    mask='999'
                    className={checkInputAsError("code") ? 'error' : 'spaceCode' }
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
                    onBlur={form.handleBlur}
                    name="month"
                    type="text"
                    mask='99'
                    className={checkInputAsError("month") ? 'error' : '' }
                  />
                  <InputMask
                    value={form.values.year}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    name="year"
                    type="text"
                    mask='9999'
                    className={checkInputAsError("year") ? 'error' : 'space' }
                  />
                </S.InputItemVencimento>
                <ButtonContainer type='submit' onClick={completeSale} disabled={isButtonDisabledEnd()} >Finalizar pagamento</ButtonContainer>
                <ButtonContainer type='submit' onClick={backToAddress}>Voltar para o endereço</ButtonContainer>
              </div>
            </form>
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