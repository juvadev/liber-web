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

import { Textarea } from "@/components/ui/textarea";
import {} from "@/components/ui/tooltip";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { Separator } from "@/components/ui/separator";

export default function CreateInventoryItem() {
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
                    <a href="#">Inventory</a>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Agregar Item</BreadcrumbPage>
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
                Agregar Item
              </h1>
            </div>
            <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
              <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                <Card x-chunk="A card with a form to edit the product details">
                  <CardHeader>
                    <CardTitle>Producto</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="product">Producto</Label>
                        <Input
                          type="search"
                          placeholder="Buscar producto..."
                          className="w-full rounded-lg bg-background pl-8 md:max-w-full lg:max-w-full"
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="stock">Stock</Label>
                        <Input
                          id="description"
                          type="number"
                          defaultValue="37"
                          className="w-full"
                        />
                      </div>
                      <div className="grid gap-6">
                        <div className="grid gap-3 ">
                          <Label htmlFor="price">Stock minimo</Label>
                          <Input
                            id="min"
                            type="number"
                            className="w-full"
                            defaultValue="75"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card x-chunk="A card with a form to edit the product details">
                  <CardHeader>
                    <CardTitle>Ubicación del Producto</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="area">Area</Label>
                        <Input
                          id="area"
                          type="text"
                          className="w-full"
                          defaultValue="Porton"
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="aditional">Información adicional</Label>
                        <Textarea
                          id="aditional"
                          defaultValue="Estante 4, fila 2 - Al lado de la caja de plumones azul"
                          className="min-h-20"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                <Card x-chunk="A card with a form to edit the product category and subcategory">
                  <CardHeader>
                    <CardTitle>Establecimiento</CardTitle>
                  </CardHeader>
                  <div className="grid gap-6 sm:grid-cols-1"></div>
                  <CardContent>
                    <div className="grid gap-6 sm:grid-cols-1">
                      <div className="grid gap-3">
                        <Label htmlFor="category">Establecimiento</Label>
                        <Select>
                          <SelectTrigger
                            id="category"
                            aria-label="Select category"
                          >
                            <SelectValue placeholder="Seleccionar establecimiento" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="eA">
                              Establecimiento A
                            </SelectItem>
                            <SelectItem value="eB">
                              Establecimiento B
                            </SelectItem>
                            <SelectItem value="eC">
                              Establecimiento C
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="hidden items-center gap-4 md:ml-auto md:flex mt-8">
                  <Button variant="outline" size="sm">
                    Cancelar
                  </Button>
                  <Button size="sm">Agregar Item de inventario</Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
