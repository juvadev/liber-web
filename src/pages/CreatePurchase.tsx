import { ChevronLeft, PencilLine, Search, X } from "lucide-react";

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

import {} from "@/components/ui/tooltip";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { Separator } from "@/components/ui/separator";

export default function CreatePurchase() {
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
                    <a href="#">Compras</a>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Nueva compra</BreadcrumbPage>
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
                Nueva Compra
              </h1>
            </div>
            <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
              <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
                  <Card
                    x-chunk="A card with a form to edit the product category and subcategory"
                    className="col-span-1"
                  >
                    <CardHeader>
                      <CardTitle>Proveedor</CardTitle>
                    </CardHeader>
                    <div className="grid gap-6 sm:grid-cols-1"></div>
                    <CardContent>
                      <div className="grid gap-6 sm:grid-cols-1">
                        <div className="grid gap-3">
                          <Label htmlFor="category">Proveedor</Label>
                          <Select>
                            <SelectTrigger
                              id="category"
                              aria-label="Select category"
                            >
                              <SelectValue placeholder="Seleccionar proveedor" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="proveedorA">
                                Proveedor A
                              </SelectItem>
                              <SelectItem value="proveedorB">
                                Proveedor B
                              </SelectItem>
                              <SelectItem value="proveedorC">
                                Proveedor C
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card
                    x-chunk="A card with a form to edit the product status"
                    className="col-span-1"
                  >
                    <CardHeader>
                      <CardTitle>Comprador</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-6">
                        <div className="grid gap-3">
                          <Label htmlFor="status">Empleado</Label>
                          <Select>
                            <SelectTrigger
                              id="status"
                              aria-label="Select status"
                            >
                              <SelectValue placeholder="Seleccionar empleado" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="empleado1">Juan</SelectItem>
                              <SelectItem value="empleado2">Lucia</SelectItem>
                              <SelectItem value="empleado3">Manuel</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <Card
                  className="overflow-hidden"
                  x-chunk="A list of products in a table with actions. Each row has an image, name, status, price, total sales, created at and actions."
                >
                  <CardHeader>
                    <CardTitle>Productos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="relative mr-auto flex-1 md:grow-0 mb-4">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Buscar producto..."
                        className="w-full rounded-lg bg-background pl-8 md:max-w-full lg:max-w-full"
                      />
                    </div>

                    <div className="grid grid-col-1 lg:grid-cols-2 gap-4">
                      <Card className="grid grid-cols-4 gap-2 p-3 items-center">
                        <img
                          alt="Product image"
                          className="aspect-square rounded-md object-cover col-span-1"
                          height="full"
                          src="https://www.beulaarkitec.com/images/product/54/5468/5468_400_1.jpg"
                          width="full"
                        />
                        <div className="grid col-span-3 gap-2 flex flex-col h-full">
                          <CardTitle className="text-md">
                            Lapicero Pilot BP-S Fine Azul
                          </CardTitle>
                          <CardDescription>
                            <b>S/ 10.50</b> /unidad
                          </CardDescription>
                          <Button className="w-full mt-auto" size="sm">
                            Añadir
                          </Button>
                        </div>
                      </Card>
                      <Card className="grid grid-cols-4 gap-2 p-3 items-center">
                        <img
                          alt="Product image"
                          className="aspect-square rounded-md object-cover col-span-1"
                          height="full"
                          src="https://www.beulaarkitec.com/images/product/54/5468/5468_400_1.jpg"
                          width="full"
                        />
                        <div className="grid col-span-3 gap-2 flex flex-col h-full">
                          <CardTitle className="text-md">
                            Cuaderno Universitario 100 hojas Justus Deluxe
                          </CardTitle>
                          <CardDescription>
                            <b>S/ 5.00</b> /unidad
                          </CardDescription>
                          <div className="flex-grow"></div>{" "}
                          {/* Esto empuja el botón hacia abajo */}
                          <Button className="w-full mt-auto" size="sm">
                            Añadir
                          </Button>
                        </div>
                      </Card>

                      <Card className="grid grid-cols-4 gap-2 p-3 items-center">
                        <img
                          alt="Product image"
                          className="aspect-square rounded-md object-cover col-span-1"
                          height="full"
                          src="https://productos.nstecnoutiles.com.pe/wp-content/uploads/2024/09/INKJET3.jpg"
                          width="full"
                        />
                        <div className="grid col-span-3 gap-2 flex flex-col h-full">
                          <CardTitle className="text-md">
                            Resma de Papel tamaño A4 Inject 500H 87gr 37x12cm
                            color blanco
                          </CardTitle>
                          <CardDescription>
                            <b>S/ 10.00</b> /unidad
                          </CardDescription>
                          <Button className="w-full mt-auto" size="sm">
                            Añadir
                          </Button>
                        </div>
                      </Card>

                      <Card className="grid grid-cols-4 gap-2 p-3 items-center min-h-[154px]">
                        <img
                          alt="Product image"
                          className="aspect-square rounded-md object-cover col-span-1"
                          height="full"
                          src="https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/872x872/productos/i/p/e/perforador-artesco-11h-escolar-m-01-negro-28700002-default-1.jpg"
                          width="full"
                        />
                        <div className="grid col-span-3 gap-2 flex flex-col h-full">
                          <CardTitle className="text-md">
                            Carpeta de 2 anillos
                          </CardTitle>
                          <CardDescription>
                            <b>S/ 15.00</b> /unidad
                          </CardDescription>
                          <Button className="w-full mt-auto" size="sm">
                            Añadir
                          </Button>
                        </div>
                      </Card>

                      <Card className="grid grid-cols-4 gap-2 p-3 items-center">
                        <img
                          alt="Product image"
                          className="aspect-square rounded-md object-cover col-span-1"
                          height="full"
                          src="https://erp.panita.pe//static/media/imagenes/producto/R0TbPJn3cT3U3rIc-zoom.jpg"
                          width="full"
                        />
                        <div className="grid col-span-3 gap-2 flex flex-col h-full">
                          <CardTitle className="text-md">
                            Lápiz HB x12
                          </CardTitle>
                          <CardDescription>
                            <b>S/ 3.00</b> /caja
                          </CardDescription>
                          <Button className="w-full mt-auto" size="sm">
                            Añadir
                          </Button>
                        </div>
                      </Card>

                      {/* Card Producto 6 */}
                      <Card className="grid grid-cols-4 gap-2 py-3 items-center">
                        <img
                          alt="Product image"
                          className="aspect-square rounded-md object-cover col-span-1"
                          height="full"
                          src="https://www.beulaarkitec.com/images/product/54/5468/5468_400_1.jpg"
                          width="full"
                        />
                        <div className="grid col-span-3 gap-2 flex flex-col h-full">
                          <CardTitle className="text-md">
                            Marcadores de Pizarra x6
                          </CardTitle>
                          <CardDescription>
                            <b>S/ 12.00</b> /caja
                          </CardDescription>
                          <Button className="w-full mt-auto" size="sm">
                            Añadir
                          </Button>
                        </div>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                <Card
                  x-chunk="A card with a form to edit the product status"
                  className="col-span-1"
                >
                  <CardHeader>
                    <CardTitle>Trasporte</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="status">Costo de trasporte (S/)</Label>
                        <Input
                          id="trasportCost"
                          type="number"
                          placeholder="0.00"
                        ></Input>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card
                  className="overflow-hidden"
                  x-chunk="An order details card with order details, shipping information, customer information and payment information."
                >
                  <CardHeader className="flex flex-row items-start bg-muted/50">
                    <div className="grid gap-0.5">
                      <CardTitle className="group flex items-center gap-2 text-lg">
                        Detalles de compra
                      </CardTitle>
                      <CardDescription>
                        Fecha: Noviembre 23, 2023
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 text-sm">
                    <div className="grid gap-3">
                      <ul className="grid gap-3">
                        <li className="flex items-center justify-between">
                          <Card className="grid grid-cols-7 gap-1 p-2 items-center relative">
                            <img
                              alt="Product image"
                              className="aspect-square rounded-md object-cover col-span-1"
                              height="full"
                              src="https://comercial-li.com.pe/cdn/shop/products/121141_1024x1024.jpg"
                              width="full"
                            />
                            <div className="grid col-span-5 flex flex-col h-full">
                              <CardTitle className="text-sm">
                                Marcador de Pizarra Faber Castell Verde
                              </CardTitle>
                              <CardDescription className="text-sm">
                                <span>S/ 9.00</span>
                              </CardDescription>
                            </div>
                            <div className="col-span-1 flex flex-col items-end space-y-2">
                              <Button
                                size="icon"
                                variant="ghost"
                                className="h-5 w-5 absolute top-1 right-1"
                              >
                                <X className="h-1 w-1" />
                                <span className="sr-only">More</span>
                              </Button>
                              <div className="flex absolute bottom-2 gap-2">
                                <span className="flex items-center justify-center">
                                  x2
                                </span>
                                <Button
                                  size="icon"
                                  variant="outline"
                                  className="h-7 w-7"
                                >
                                  <PencilLine className="h-3.5 w-3.5" />
                                  <span className="sr-only">Delete</span>
                                </Button>
                              </div>
                            </div>
                          </Card>
                        </li>

                        <li className="flex items-center justify-between">
                          <Card className="grid grid-cols-7 gap-1 p-2 items-center relative">
                            <img
                              alt="Product image"
                              className="aspect-square rounded-md object-cover col-span-1"
                              height="full"
                              src="https://www.beulaarkitec.com/images/product/54/5468/5468_400_1.jpg"
                              width="full"
                            />
                            <div className="grid col-span-5 flex flex-col h-full">
                              <CardTitle className="text-sm">
                                Marcadores de Pizarra Coloridos
                              </CardTitle>
                              <CardDescription className="text-sm">
                                <span>S/ 12.00</span>
                              </CardDescription>
                            </div>
                            <div className="col-span-1 flex flex-col items-end space-y-2">
                              <Button
                                size="icon"
                                variant="ghost"
                                className="h-5 w-5 absolute top-1 right-1"
                              >
                                <X className="h-1 w-1" />
                                <span className="sr-only">Delete</span>
                              </Button>
                              <div className="flex absolute bottom-2 gap-2">
                                <span className="flex items-center justify-center">
                                  x1
                                </span>
                                <Button
                                  size="icon"
                                  variant="outline"
                                  className="h-7 w-7"
                                >
                                  <PencilLine className="h-3.5 w-3.5" />
                                  <span className="sr-only">More</span>
                                </Button>
                              </div>
                            </div>
                          </Card>
                        </li>

                        <li className="flex items-center justify-between">
                          <Card className="grid grid-cols-7 gap-1 p-2 items-center relative">
                            <img
                              alt="Product image"
                              className="aspect-square rounded-md object-cover col-span-1"
                              height="full"
                              src="https://www.ofimarket.pe/cdn/shop/products/PR472150.jpg"
                              width="full"
                            />
                            <div className="grid col-span-5 flex flex-col h-full">
                              <CardTitle className="text-sm">
                                Marcador Rojo
                              </CardTitle>
                              <CardDescription className="text-sm">
                                <span>S/ 8.00</span>
                              </CardDescription>
                            </div>
                            <div className="col-span-1 flex flex-col items-end space-y-2">
                              <Button
                                size="icon"
                                variant="ghost"
                                className="h-5 w-5 absolute top-1 right-1"
                              >
                                <X className="h-1 w-1" />
                                <span className="sr-only">More</span>
                              </Button>
                              <div className="flex absolute bottom-2 gap-2">
                                <span className="flex items-center justify-center">
                                  x3
                                </span>
                                <Button
                                  size="icon"
                                  variant="outline"
                                  className="h-7 w-7"
                                >
                                  <PencilLine className="h-3.5 w-3.5" />
                                  <span className="sr-only">More</span>
                                </Button>
                              </div>
                            </div>
                          </Card>
                        </li>
                      </ul>
                      <Separator className="my-2" />
                      <ul className="grid gap-3">
                        <li className="flex items-center justify-between">
                          <span className="text-muted-foreground">
                            Subtotal
                          </span>
                          <span>S/ 29.00</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span className="text-muted-foreground">
                            Descuento
                          </span>
                          <span>S/ 0.00</span>
                        </li>
                        <li className="flex items-center justify-between font-semibold">
                          <span className="text-muted-foreground">Total</span>
                          <span>S/ 29.00</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                <div className="hidden items-center gap-4 md:ml-auto md:flex">
                  <Button variant="outline" size="sm">
                    Cancelar
                  </Button>
                  <Button size="sm">Registrar Compra</Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
