import { Copy, PencilLine, Search, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Separator } from "@/components/ui/separator";

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { Input } from "@/components/ui/input";

export default function RegisterSale() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            Registrar Venta
          </div>
        </header>
        <main className="grid flex-2 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
          <div className="col-span-2">
            <Card
              className="overflow-hidden"
              x-chunk="A list of products in a table with actions. Each row has an image, name, status, price, total sales, created at and actions."
            >
              <CardHeader>
                <CardTitle>Registrar venta</CardTitle>
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
                        Resma de Papel tamaño A4 Inject 500H 87gr 37x12cm color
                        blanco
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
                      <CardTitle className="text-md">Lápiz HB x12</CardTitle>
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
          <div className="col-span-1 w-full">
            <Card
              className="overflow-hidden"
              x-chunk="An order details card with order details, shipping information, customer information and payment information."
            >
              <CardHeader className="flex flex-row items-start bg-muted/50">
                <div className="grid gap-0.5">
                  <CardTitle className="group flex items-center gap-2 text-lg">
                    Detalles de venta
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      <Copy className="h-3 w-3" />
                      <span className="sr-only">Copy Order ID</span>
                    </Button>
                  </CardTitle>
                  <CardDescription>Fecha: Noviembre 23, 2023</CardDescription>
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
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>S/ 29.00</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">Descuento</span>
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
            <div className="flex flex-row justify-end ml-auto gap-4 py-3">
              <Button size="sm" variant="outline">
                Descartar
              </Button>
              <Button size="sm">Confirmar Venta</Button>
            </div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
