'use client'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

interface ContaBancaria {
  id: string
  nomeBanco: string
  agencia: string
  numeroConta: string
  tipoConta: 'Corrente' | 'Poupança' | 'Investimento'
  saldoInicial: number
  moeda: 'BRL' | 'USD' | 'EUR' | 'Outra'
  limiteCredito?: number
}

const tiposConta = ['Corrente', 'Poupança', 'Investimento']
const moedas = ['BRL', 'USD']

export default function CadastroContasBancarias() {
  const [contas, setContas] = useState<ContaBancaria[]>([])
  const [novaConta, setNovaConta] = useState<Omit<ContaBancaria, 'id'>>({
    nomeBanco: '',
    agencia: '',
    numeroConta: '',
    tipoConta: 'Corrente',
    saldoInicial: 0,
    moeda: 'BRL',
    limiteCredito: undefined,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNovaConta((prev) => ({
      ...prev,
      [name]:
        name === 'saldoInicial' || name === 'limiteCredito'
          ? parseFloat(value) || 0
          : value,
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setNovaConta((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const adicionarConta = () => {
    setContas((prev) => [...prev, { ...novaConta, id: uuidv4() }])
    setNovaConta({
      nomeBanco: '',
      agencia: '',
      numeroConta: '',
      tipoConta: 'Corrente',
      saldoInicial: 0,
      moeda: 'BRL',
      limiteCredito: undefined,
    })
  }

  const removerConta = (id: string) => {
    setContas((prev) => prev.filter((conta) => conta.id !== id))
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Cadastro de Contas Bancárias</h2>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Adicionar Nova Conta</CardTitle>
          <CardDescription>
            Preencha os dados da nova conta bancária.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div>
              <Label htmlFor="nomeBanco">Nome do Banco</Label>
              <Input
                id="nomeBanco"
                name="nomeBanco"
                placeholder="Nome do Banco"
                value={novaConta.nomeBanco}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="agencia">Agência</Label>
              <Input
                id="agencia"
                name="agencia"
                placeholder="Agência"
                value={novaConta.agencia}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="numeroConta">Número da Conta</Label>
              <Input
                id="numeroConta"
                name="numeroConta"
                placeholder="Número da Conta"
                value={novaConta.numeroConta}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="tipoConta">Tipo de Conta</Label>
              <Select
                onValueChange={(value: string) =>
                  handleSelectChange('tipoConta', value)
                }
                value={novaConta.tipoConta}
              >
                <SelectTrigger id="tipoConta">
                  <SelectValue placeholder="Selecione o tipo de conta" />
                </SelectTrigger>
                <SelectContent>
                  {tiposConta.map((tipo) => (
                    <SelectItem key={tipo} value={tipo}>
                      {tipo}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="saldoInicial">Saldo Inicial</Label>
              <Input
                id="saldoInicial"
                name="saldoInicial"
                type="number"
                placeholder="Saldo Inicial"
                value={novaConta.saldoInicial}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="moeda">Moeda</Label>
              <Select
                onValueChange={(value: string) =>
                  handleSelectChange('moeda', value)
                }
                value={novaConta.moeda}
              >
                <SelectTrigger id="moeda">
                  <SelectValue placeholder="Selecione a moeda" />
                </SelectTrigger>
                <SelectContent>
                  {moedas.map((moeda) => (
                    <SelectItem key={moeda} value={moeda}>
                      {moeda}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {novaConta.tipoConta === 'Corrente' && (
              <div>
                <Label htmlFor="limiteCredito">Limite de Crédito</Label>
                <Input
                  id="limiteCredito"
                  name="limiteCredito"
                  type="number"
                  placeholder="Limite de Crédito"
                  value={novaConta.limiteCredito || ''}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={adicionarConta}>Adicionar Conta</Button>
        </CardFooter>
      </Card>
      <h3 className="text-xl font-semibold mb-2">Contas Cadastradas</h3>
      <div className="space-y-4">
        {contas.map((conta) => (
          <Card key={conta.id}>
            <CardHeader>
              <CardTitle>{conta.nomeBanco}</CardTitle>
              <CardDescription>
                {conta.agencia} - {conta.numeroConta}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Tipo de Conta: {conta.tipoConta}</p>
              <p>
                Saldo Inicial:{' '}
                {conta.saldoInicial.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: conta.moeda,
                })}
              </p>
              <p>Moeda: {conta.moeda}</p>
              {conta.limiteCredito && (
                <p>
                  Limite de Crédito:{' '}
                  {conta.limiteCredito.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: conta.moeda,
                  })}
                </p>
              )}
            </CardContent>
            <CardFooter>
              <Button onClick={() => removerConta(conta.id)}>Remover</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
