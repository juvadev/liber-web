import { ChevronLeft, PlusCircle, Upload } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {} from "@/components/ui/tooltip";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { Separator } from "@/components/ui/separator";

export default function EditProduct() {
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
                    <a href="#">Productos</a>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Editar Producto</BreadcrumbPage>
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
                Editar Producto
              </h1>
            </div>
            <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
              <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                <Card x-chunk="A card with a form to edit the product details">
                  <CardHeader>
                    <CardTitle>Detalles del Producto</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="name">Nombre</Label>
                        <Input
                          id="name"
                          type="text"
                          className="w-full"
                          defaultValue="Cola Sintetica Layconsa Pote 250G"
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="description">Descripción</Label>
                        <Textarea
                          id="description"
                          defaultValue="Cola Sintética Layconsa 250g, adhesivo de secado rápido, transparente y duradero, ideal para manualidades."
                          className="min-h-28"
                        />
                      </div>
                      <div className="grid gap-6">
                        <div className="grid gap-3 ">
                          <Label htmlFor="price">Precio (S/)</Label>
                          <Input
                            id="price"
                            type="number"
                            className="w-full"
                            defaultValue="3.5"
                          />
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="sku">SKU</Label>
                          <Input
                            id="sku"
                            type="text"
                            className="w-full"
                            defaultValue="ES-003-BL"
                          />
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="barcode">Código de barras</Label>
                          <Input
                            id="barcode"
                            type="text"
                            className="w-auto"
                            defaultValue="8446736833201"
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
                    <CardTitle>Categoría del Producto</CardTitle>
                  </CardHeader>
                  <div className="grid gap-6 sm:grid-cols-1"></div>
                  <CardContent>
                    <div className="grid gap-6 sm:grid-cols-1">
                      <div className="grid gap-3">
                        <Label htmlFor="category">Categoría</Label>
                        <Select>
                          <SelectTrigger
                            id="category"
                            aria-label="Select category"
                          >
                            <SelectValue placeholder="Seleccionar categoría" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="escolar">Escolar</SelectItem>
                            <SelectItem value="descartables">
                              Descartables
                            </SelectItem>
                            <SelectItem value="Oficina">Oficina</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card
                  className="overflow-hidden"
                  x-chunk="A card with a form to upload product images"
                >
                  <CardHeader>
                    <CardTitle>Imagen del Producto</CardTitle>
                    <CardDescription>
                      Imagen frontal del producto
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-2">
                      <img
                        alt="Product image"
                        className="aspect-square w-full rounded-md object-cover"
                        height="300"
                        src="https://erp.panita.pe//static/media/imagenes/producto/R0TbPJn3cT3U3rIc-zoom.jpg"
                        width="300"
                      />
                      <button className="h-12 flex aspect-square gap-2 w-full items-center justify-center rounded-md border-2 border-dashed">
                        <Upload className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">
                          Subir imagen
                        </span>
                      </button>
                    </div>
                  </CardContent>
                </Card>
                <Card x-chunk="A card with a form to edit the product status">
                  <CardHeader>
                    <CardTitle>Estado del Producto </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="status">Estado</Label>
                        <Select>
                          <SelectTrigger id="status" aria-label="Select status">
                            <SelectValue placeholder="Seleccionar estado" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="draft">Borrador</SelectItem>
                            <SelectItem value="published">Activo</SelectItem>
                            <SelectItem value="archived">Archivado</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="hidden items-center gap-4 md:ml-auto md:flex mt-8">
                  <Button variant="outline" size="sm">
                    Descartar
                  </Button>
                  <Button size="sm">Guardar cambios</Button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 md:hidden">
              <Button variant="outline" size="sm">
                Discard
              </Button>
              <Button size="sm">Save Product</Button>
            </div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
