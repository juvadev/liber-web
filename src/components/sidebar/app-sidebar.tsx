import * as React from "react";
import {
  Building2,
  LayoutDashboard,
  Package,
  ShoppingBag,
  UsersRound,
} from "lucide-react";

import { NavMain } from "@/components/sidebar/nav-main";
import { NavUser } from "@/components/sidebar/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "juva",
    email: "email@example.com",
    avatar: "https://i.blogs.es/2a842a/lallama/500_333.webp",
  },
  navMain: [
    {
      title: "Tablero",
      url: "#",
      icon: LayoutDashboard,
      items: [],
    },
    {
      title: "Ventas",
      url: "#",
      icon: ShoppingBag,
      items: [
        {
          title: "Registrar venta",
          url: "#",
        },
        {
          title: "Historial de ventas",
          url: "#",
        },
      ],
    },
    {
      title: "Logística",
      url: "#",
      icon: Package,
      items: [
        {
          title: "Registrar compra",
          url: "#",
        },
        {
          title: "Transferencias",
          url: "#",
        },
        {
          title: "Productos",
          url: "#",
        },
        {
          title: "Establecimientos",
          url: "#",
        },
        {
          title: "Proveedores",
          url: "#",
        },
      ],
    },
    {
      title: "Recursos Humanos",
      url: "#",
      icon: UsersRound,
      items: [
        {
          title: "Empleados",
          url: "#",
        },
        {
          title: "Usuarios",
          url: "#",
        },
        {
          title: "Roles",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Building2 className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Liber</span>
                  <span className="truncate text-xs">Bazar librería</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
