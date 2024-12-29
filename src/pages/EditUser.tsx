import { ChevronLeft } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {} from "@/components/ui/tooltip";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { Separator } from "@/components/ui/separator";

export default function EditUser() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb className="hidden md:flex">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <a href="#">Usuarios</a>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Editar Usuario</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 mb-8">
          <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon" className="h-7 w-7">
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Back</span>
              </Button>
              <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                Editar Usuario
              </h1>
            </div>
            <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
              <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                <Card x-chunk="A card with a form to edit the product details">
                  <CardHeader>
                    <CardTitle>Detalles del Usuario</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="username">Nombre de Usuario</Label>
                        <Input
                          id="username"
                          type="text"
                          className="w-full"
                          defaultValue="JUAN01BC"
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="password">Contraseña actual</Label>
                        <Input
                          id="password"
                          type="password"
                          className="w-full"
                          defaultValue="JuanCdash121"
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="password">Nueva contraseña</Label>
                        <Input
                          id="password"
                          type="text"
                          className="w-full"
                          defaultValue="JuanCdash121"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                <Card x-chunk="A card with a form to edit the product category and subcategory">
                  <CardHeader>
                    <CardTitle>Rol del Usuario</CardTitle>
                  </CardHeader>
                  <div className="grid gap-6 sm:grid-cols-1"></div>
                  <CardContent>
                    <div className="grid gap-6 sm:grid-cols-1">
                      <div className="grid gap-3">
                        <Label htmlFor="state">Rol</Label>
                        <Select>
                          <SelectTrigger id="state" aria-label="Select state">
                            <SelectValue placeholder="Seleccionar rol" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="active">Vendedor</SelectItem>
                            <SelectItem value="archived">Comprador</SelectItem>
                            <SelectItem value="archived">Almacenero</SelectItem>
                            <SelectItem value="archived">
                              Administrador
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card x-chunk="A card with a form to edit the product category and subcategory">
                  <CardHeader>
                    <CardTitle>Estado del Usuario</CardTitle>
                  </CardHeader>
                  <div className="grid gap-6 sm:grid-cols-1"></div>
                  <CardContent>
                    <div className="grid gap-6 sm:grid-cols-1">
                      <div className="grid gap-3">
                        <Label htmlFor="state">Estado</Label>
                        <Select>
                          <SelectTrigger id="state" aria-label="Select state">
                            <SelectValue placeholder="Seleccionar estado" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="active">Activo</SelectItem>
                            <SelectItem value="archived">Archivado</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="hidden items-center gap-4 md:ml-auto md:flex">
                  <Button variant="outline" size="sm">
                    Descartar
                  </Button>
                  <Button size="sm">Guardar cambios</Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
