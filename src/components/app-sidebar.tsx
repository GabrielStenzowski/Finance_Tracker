'use client'

import * as React from 'react'
import { BookOpen, Command, Frame, PieChart } from 'lucide-react'

import { NavProjects } from '@/components/nav-projects'
import { NavUser } from '@/components/nav-user'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { useRouter } from 'next/navigation'
import { NavMain } from './nav-main'

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const router = useRouter()

  const data = {
    user: {
      name: 'Gabriel Stenzowski',
      email: 'gabriel.stenzowskicav@gmail.com',
    },

    projects: [
      {
        name: 'Gerenciar Categorias',
        url: '/protected-routes/dashboard/categories',
        icon: Frame,
      },
      {
        name: 'Adicionar Transação',
        url: '/protected-routes/dashboard/transactions',
        icon: PieChart,
      },
    ],
    navMain: [
      {
        title: 'Configurações de Pagamento',
        url: '#',
        icon: BookOpen,
        items: [
          {
            title: 'Cadastrar Conta Bancaria',
            url: '/protected-routes/dashboard/registerBankAccout',
          },
          {
            title: 'Cadastrar Cartão de Credito',
            url: '/protected-routes/dashboard/registerCreditCard',
          },
        ],
      },
    ],
  }

  const handleReturnToHomePage = () => {
    router.push('/protected-routes/home')
  }

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <button onClick={handleReturnToHomePage}>
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">
                    Finance Tracker
                  </span>
                </div>
              </button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={data.projects} />
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
