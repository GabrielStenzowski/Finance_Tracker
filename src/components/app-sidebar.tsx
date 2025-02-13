'use client'

import * as React from 'react'
import { Command, Frame, Map, PieChart } from 'lucide-react'

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
        name: 'Cadastrar Transação',
        url: '/protected-routes/dashboard/transactions',
        icon: PieChart,
      },
      {
        name: 'Travel',
        url: '#',
        icon: Map,
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
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
