import { Chart01 } from "@/components/charts/chart-01";
import { Chart02 } from "@/components/charts/chart-02";
import { Chart03 } from "@/components/charts/chart-03";
import { Chart04 } from "@/components/charts/chart-04";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Boxes, DollarSign, Percent, ShoppingBasket } from "lucide-react";

export function Dashboard() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            Tablero
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-6 md:p-6 md:py-2 sm:py-2">
          <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
            <Card x-chunk="Displays total revenue in PEN and the percentage change compared to the previous month.">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Ingresos Totales
                </CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">S/ 2,231.89</div>
                <p className="text-xs text-muted-foreground">
                  +20.1% respecto al mes pasado
                </p>
              </CardContent>
            </Card>

            <Card x-chunk="Shows the gross profit margin and the percentage increase compared to last month.">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Margen Bruto de Beneficio
                </CardTitle>
                <Percent className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+30%</div>
                <p className="text-xs text-muted-foreground">
                  +80.1% respecto al mes pasado
                </p>
              </CardContent>
            </Card>

            <Card x-chunk="Displays total sales and the percentage increase compared to the previous month.">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Ventas</CardTitle>
                <ShoppingBasket className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+12,234</div>
                <p className="text-xs text-muted-foreground">
                  +19% respecto al mes pasado
                </p>
              </CardContent>
            </Card>

            <Card x-chunk="Displays low stock products and the increase in the number of items since the last hour.">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Productos con Bajo Stock
                </CardTitle>
                <Boxes className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+23</div>
                <p className="text-xs text-muted-foreground">
                  Riesgo de quedarse sin stock
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
            <div className="lg:col-span-2 xl:col-span-2">
              <Chart01 />
            </div>
            <div className="lg:col-span-1 xl:col-span-1">
              <Chart02 />
            </div>
          </div>
          <div className="grid gap-4 md:gap-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            <div className="col-span-1">
              <Chart03 />
            </div>
            <div className="col-span-1">
              <Chart04 />
            </div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
