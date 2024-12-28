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
import {} from "@/components/ui/table";
import {} from "@/components/ui/tooltip";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { Separator } from "@/components/ui/separator";

export default function CreateEmployee() {
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
                    <a href="#">Empleados</a>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Crear Empleado</BreadcrumbPage>
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
                Crear Empleado
              </h1>
            </div>
            <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
              <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                <Card x-chunk="A card with a form to edit the product details">
                  <CardHeader>
                    <CardTitle>Detalles del Empleado</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="name">Nombre</Label>
                        <Input
                          id="name"
                          type="text"
                          className="w-full"
                          defaultValue="Juan"
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="lastname">Apellido</Label>
                        <Input
                          id="lastname"
                          type="text"
                          className="w-full"
                          defaultValue="Perez"
                        />
                      </div>
                      <div className="grid gap-6">
                        <div className="grid gap-3 ">
                          <Label htmlFor="dni">DNI</Label>
                          <Input
                            id="address"
                            type="dni"
                            className="w-full"
                            defaultValue="73219811"
                          />
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="phone">Telefono</Label>
                          <Input
                            id="phone"
                            type="text"
                            className="w-full"
                            defaultValue="976512341"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                <Card x-chunk="A card with a form to edit the product category and subcategory">
                  <CardHeader>
                    <CardTitle>Cargo del empleado</CardTitle>
                  </CardHeader>
                  <div className="grid gap-6 sm:grid-cols-1"></div>
                  <CardContent>
                    <div className="grid gap-6 sm:grid-cols-1">
                      <div className="grid gap-3">
                        <Label htmlFor="cargo">Cargo</Label>
                        <Select>
                          <SelectTrigger id="cargo" aria-label="Select">
                            <SelectValue placeholder="Seleccionar cargo" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="active">VENDEDOR</SelectItem>
                            <SelectItem value="archived">ALMACENERO</SelectItem>
                            <SelectItem value="archived">
                              ADMINISTRATIVO
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card x-chunk="A card with a form to edit the product category and subcategory">
                  <CardHeader>
                    <CardTitle>Estado del Empleaod</CardTitle>
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
                    Cancelar
                  </Button>
                  <Button size="sm">Crear Empleado</Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
