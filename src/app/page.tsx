import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md p-6">
        <CardContent>
          <h1 className="text-2xl font-bold text-center mb-4">
            Controle Financeiro
          </h1>
          <p className="text-gray-600 text-center mb-6">
            Gerencie suas finanças de forma simples e eficiente.
          </p>
          <div className="flex flex-col gap-4">
            <Link href="/auth/login">
              <Button className="w-full">Entrar</Button>
            </Link>
            <Link href="/auth/register">
              <Button variant="outline" className="w-full">
                Criar Conta
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
