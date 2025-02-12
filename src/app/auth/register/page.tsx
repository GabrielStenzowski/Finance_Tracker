'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import Link from 'next/link'
import TermsModal from '../terms/page'
import { useState } from 'react'

export default function Register() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md p-6">
        <CardContent>
          <h1 className="text-2xl font-bold text-center mb-4">Cadastro</h1>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nome
              </label>
              <Input type="text" placeholder="Digite seu nome" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                E-mail
              </label>
              <Input type="email" placeholder="Digite seu e-mail" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Telefone
              </label>
              <Input type="tel" placeholder="Digite seu telefone" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Data de Nascimento
              </label>
              <Input type="date" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tipo de Conta
              </label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione o tipo de conta" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pessoal">Pessoal</SelectItem>
                  <SelectItem value="empresarial">Empresarial</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Senha
              </label>
              <Input type="password" placeholder="Digite sua senha" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirmar Senha
              </label>
              <Input
                type="password"
                placeholder="Confirme sua senha"
                required
              />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="terms" required />
              <label htmlFor="terms" className="text-sm text-gray-700">
                Aceito os
                <button
                  type="button"
                  onClick={openModal}
                  className="text-blue-600 pl-1"
                >
                  termos e condições
                </button>
              </label>
            </div>
            <Button className="w-full">Cadastrar</Button>
          </form>
          <p className="text-sm text-center text-gray-600 mt-4">
            Já tem uma conta?
            <Link href="/auth/login" className="text-blue-600">
              Entre aqui
            </Link>
          </p>
        </CardContent>
      </Card>
      <TermsModal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  )
}
