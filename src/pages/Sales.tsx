import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  File,
  ListFilter,
  MoreHorizontal,
  PlusCircle,
  Search,
} from "lucide-react";

export default function Sales() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            Historial de ventas
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-6 md:p-6 md:py-2 sm:py-2">
          <Tabs defaultValue="all">
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="all">Todo</TabsTrigger>
                <TabsTrigger value="ta">Tienda A</TabsTrigger>
                <TabsTrigger value="tb">Tienda B</TabsTrigger>
              </TabsList>
              <div className="ml-auto flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-8 gap-1">
                      <ListFilter className="h-3.5 w-3.5" />
                      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Filtro
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Filtrar por</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem checked>
                      Ordenar por fecha
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Ordenar por monto
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      EFECTIVO
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button size="sm" variant="outline" className="h-8 gap-1">
                  <File className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Exportar
                  </span>
                </Button>
              </div>
            </div>
            <TabsContent value="all">
              <Card x-chunk="A list of products in a table with actions. Each row has an image, name, status, price, total sales, created at and actions.">
                <CardHeader>
                  <CardTitle>Ventas</CardTitle>
                  <CardDescription>Gestiona tus ventas.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative mr-auto flex-1 md:grow-0 mb-4">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Buscar..."
                      className="w-full rounded-lg bg-background pl-8 md:max-w-[300px] lg:max-w-[436px]"
                    />
                  </div>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Tienda</TableHead>
                        <TableHead>Vendedor</TableHead>
                        <TableHead className="hidden md:table-cell">
                          Método de pago
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          Monto total (S/)
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          Fecha
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          Hora
                        </TableHead>
                        <TableHead>
                          <span className="sr-only">Acciones</span>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Tienda A</TableCell>
                        <TableCell>Juan</TableCell>
                        <TableCell className="hidden md:table-cell">
                          EFECTIVO
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          15.99
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          2024-12-23
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          10:00 AM
                        </TableCell>
                        <TableCell>
                          <AlertDialog>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button
                                  aria-haspopup="true"
                                  size="icon"
                                  variant="ghost"
                                >
                                  <MoreHorizontal className="h-4 w-4" />
                                  <span className="sr-only">Toggle menu</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                                <DropdownMenuItem>
                                  Ver detalles
                                </DropdownMenuItem>
                                <DropdownMenuItem>Editar</DropdownMenuItem>
                                <AlertDialogTrigger>
                                  <DropdownMenuItem>Eliminar</DropdownMenuItem>
                                </AlertDialogTrigger>
                              </DropdownMenuContent>
                            </DropdownMenu>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>
                                  ¿Estás seguro?
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                  Esta acción no puede deshacerse. Se eliminará
                                  permanentemente tu venta y datos.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                <AlertDialogAction>
                                  Eliminar Venta
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Tienda B</TableCell>
                        <TableCell>Lucia</TableCell>
                        <TableCell className="hidden md:table-cell">
                          EFECTIVO
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          3.49
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          2024-12-22
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          11:30 AM
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                              <DropdownMenuItem>Ver detalles</DropdownMenuItem>
                              <DropdownMenuItem>Editar</DropdownMenuItem>
                              <DropdownMenuItem>Eliminar</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Tienda A</TableCell>
                        <TableCell>Manuel</TableCell>
                        <TableCell className="hidden md:table-cell">
                          EFECTIVO
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          4.99
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          2024-12-23
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          12:00 PM
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                              <DropdownMenuItem>Ver detalles</DropdownMenuItem>
                              <DropdownMenuItem>Editar</DropdownMenuItem>
                              <DropdownMenuItem>Eliminar</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Tienda B</TableCell>
                        <TableCell>Zoila</TableCell>
                        <TableCell className="hidden md:table-cell">
                          EFECTIVO
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          7.99
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          2024-12-24
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          02:00 PM
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                              <DropdownMenuItem>Ver detalles</DropdownMenuItem>
                              <DropdownMenuItem>Editar</DropdownMenuItem>
                              <DropdownMenuItem>Eliminar</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Tienda A</TableCell>
                        <TableCell>Lucia</TableCell>
                        <TableCell className="hidden md:table-cell">
                          EFECTIVO
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          1.49
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          2024-12-25
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          03:30 PM
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                              <DropdownMenuItem>Ver detalles</DropdownMenuItem>
                              <DropdownMenuItem>Editar</DropdownMenuItem>
                              <DropdownMenuItem>Eliminar</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Tienda B</TableCell>
                        <TableCell>Juan</TableCell>
                        <TableCell className="hidden md:table-cell">
                          EFECTIVO
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          3.99
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          2024-12-26
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          04:00 PM
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                              <DropdownMenuItem>Ver detalles</DropdownMenuItem>
                              <DropdownMenuItem>Editar</DropdownMenuItem>
                              <DropdownMenuItem>Eliminar</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter>
                  <div className="text-xs text-muted-foreground">
                    Mostrando <strong>1-6</strong> de <strong>32</strong> ventas
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
