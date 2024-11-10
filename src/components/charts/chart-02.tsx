"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

// Datos de productos vendidos por categoría (por ejemplo)
const chartData = {
  todas: [
    { category: "Escolares", sales: 275, fill: "var(--color-utiles)" },
    {
      category: "Oficina",
      sales: 200,
      fill: "var(--color-oficina)",
    },
    { category: "Juguetes", sales: 287, fill: "var(--color-juguetes)" },
    { category: "Confitería", sales: 173, fill: "var(--color-confiteria)" },
  ],
  tiendaA: [
    { category: "Escolares", sales: 120, fill: "var(--color-utiles)" },
    {
      category: "Oficina",
      sales: 80,
      fill: "var(--color-oficina)",
    },
    { category: "Juguetes", sales: 95, fill: "var(--color-juguetes)" },
    { category: "Confitería", sales: 50, fill: "var(--color-confiteria)" },
  ],
  tiendaB: [
    { category: "Escolares", sales: 155, fill: "var(--color-utiles)" },
    {
      category: "oficina",
      sales: 120,
      fill: "var(--color-oficina)",
    },
    { category: "Juguetes", sales: 192, fill: "var(--color-juguetes)" },
    { category: "Confitería", sales: 123, fill: "var(--color-confiteria)" },
  ],
};

const chartConfig = {
  sales: {
    label: "Ventas",
  },
  utiles: {
    label: "Escolares",
    color: "hsl(var(--chart-1))",
  },
  oficina: {
    label: "Oficina",
    color: "hsl(var(--chart-2))",
  },
  juguetes: {
    label: "Juguetes",
    color: "hsl(var(--chart-3))",
  },
  confiteria: {
    label: "Confitería",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;

export function Chart02() {
  const [selectedStore, setSelectedStore] = React.useState<
    "todas" | "tiendaA" | "tiendaB"
  >("todas");

  // Calcula el total de ventas de la tienda seleccionada
  const totalSales = React.useMemo(() => {
    const data = chartData[selectedStore];
    return data.reduce((acc, curr) => acc + curr.sales, 0);
  }, [selectedStore]);

  // Actualiza los datos en base a la tienda seleccionada
  const data = chartData[selectedStore];

  return (
    <Card className="flex flex-col h-[389px]">
      <CardHeader className="grid border-b items-center pb-0 xl:grid-cols-4 sm:grid-cols-3 lg:grid-cols-1 gap-2 py-6 md:mb-6 sm:mb-6 lg:mb-1">
        <div className="grid gap-1 text-center sm:text-left xl:col-span-2 sm:col-span-2 lg:col-span-1 lg:text-center xl:text-left">
          <CardTitle>Ventas por Categorías</CardTitle>
          <CardDescription>Últimos 365 días</CardDescription>
        </div>
        <div className="xl:col-span-2 sm:col-span-1 lg:col-span-1">
          <Select
            value={selectedStore}
            onValueChange={(value: "todas" | "tiendaA" | "tiendaB") =>
              setSelectedStore(value)
            }
          >
            <SelectTrigger
              className="max-w-[160px] rounded-lg m-auto"
              aria-label="Todas"
            >
              <SelectValue placeholder="Todas" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="todas" className="rounded-lg">
                Todas
              </SelectItem>
              <SelectItem value="tiendaA" className="rounded-lg">
                Tienda A
              </SelectItem>
              <SelectItem value="tiendaB" className="rounded-lg">
                Tienda B
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={data}
              dataKey="sales"
              nameKey="category"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalSales.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Productos
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
