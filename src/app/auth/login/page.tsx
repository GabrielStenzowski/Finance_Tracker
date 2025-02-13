'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md p-6">
        <CardContent>
          <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                E-mail
              </label>
              <Input type="email" placeholder="Digite seu e-mail" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Senha
              </label>
              <Input type="password" placeholder="Digite sua senha" required />
            </div>
            <div>
              <Link href="/protected-routes/home">
                <Button className="w-full">Entrar</Button>
              </Link>
            </div>
          </form>
          <p className="text-sm text-center text-gray-600 mt-4">
            Não tem uma conta?
            <Link href="/auth/register" className="text-blue-600">
              Cadastre-se
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
