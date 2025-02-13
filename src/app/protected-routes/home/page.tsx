'use client'
import { Card, CardContent } from '@/components/ui/card'

export default function HomePageResumeFinancial() {
  return (
    <div className="flex bg-gray-0">
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Resumo Financeiro</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent>
              <h3 className="text-lg font-semibold">Saldo Atual</h3>
              <p className="text-2xl font-bold text-green-600">R$ 5.000,00</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h3 className="text-lg font-semibold">Receitas</h3>
              <p className="text-2xl font-bold text-blue-600">R$ 8.000,00</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h3 className="text-lg font-semibold">Despesas</h3>
              <p className="text-2xl font-bold text-red-600">R$ 3.000,00</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
