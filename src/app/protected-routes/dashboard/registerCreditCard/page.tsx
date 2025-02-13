'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'

interface CreditCardFormData {
  holderName: string
  cardNumber: string
  expirationDate: string
  creditLimit: number
  category: string
  cardBrand: string
}

export default function CreditCardForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreditCardFormData>()
  const [cardBrand, setCardBrand] = useState('')
  const onSubmit = (data: CreditCardFormData) => {
    console.log('Dados do cartão:', data)
    // Aqui você pode integrar com a API para salvar os dados
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-md">
      <h2 className="text-xl font-semibold mb-4">
        Cadastrar Cartão de Crédito
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label htmlFor="holderName">Nome do Titular</Label>
          <Input
            id="holderName"
            {...register('holderName', {
              required: 'Nome do titular é obrigatório',
            })}
            placeholder="Nome do titular"
          />
          {errors.holderName && (
            <p className="text-red-500 text-sm">{errors.holderName.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="cardNumber">Número do Cartão</Label>
          <Input
            id="cardNumber"
            {...register('cardNumber', {
              required: 'Número do cartão é obrigatório',
            })}
            placeholder="Número do cartão"
            type="text"
          />
          {errors.cardNumber && (
            <p className="text-red-500 text-sm">{errors.cardNumber.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="expirationDate">Data de Vencimento</Label>
          <Input
            id="expirationDate"
            {...register('expirationDate', {
              required: 'Data de vencimento é obrigatória',
            })}
            type="date"
          />
          {errors.expirationDate && (
            <p className="text-red-500 text-sm">
              {errors.expirationDate.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="creditLimit">Limite de Crédito</Label>
          <Input
            id="creditLimit"
            {...register('creditLimit', {
              required: 'Limite de crédito é obrigatório',
              valueAsNumber: true,
            })}
            placeholder="Limite de crédito"
            type="number"
          />
          {errors.creditLimit && (
            <p className="text-red-500 text-sm">{errors.creditLimit.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="cardBrand">Bandeira do Cartão</Label>
          <Select value={cardBrand} onValueChange={setCardBrand}>
            <SelectTrigger id="cardBrand">
              <span>Bandeira</span>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Visa">Visa</SelectItem>
              <SelectItem value="MasterCard">MasterCard</SelectItem>
              <SelectItem value="Elo">Elo</SelectItem>
              <SelectItem value="AmericanExpress">American Express</SelectItem>
              <SelectItem value="Hipercard">Hipercard</SelectItem>
            </SelectContent>
          </Select>
          {errors.cardBrand && (
            <p className="text-red-500 text-sm">{errors.cardBrand.message}</p>
          )}
        </div>
        <div className="mt-4">
          <Button type="submit">Cadastrar Cartão</Button>
        </div>
      </form>
    </div>
  )
}
