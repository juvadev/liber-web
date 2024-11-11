"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardFooter,
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
import { useState } from "react";

// Datos para cada tienda con "product" en lugar de "month"
const dataAll = [
  { product: "Lapicero Azul", ventas: 13 },
  { product: "Cuaderno A4", ventas: 23 },
  { product: "Tijeras", ventas: 7 },
  { product: "Papel Bond", ventas: 12 },
  { product: "Marcadores", ventas: 20 },
  { product: "Goma de borrar", ventas: 14 },
];

const dataTiendaA = [
  { product: "Lapicero Azul", ventas: 9 },
  { product: "Cuaderno A4", ventas: 15 },
  { product: "Tijeras", ventas: 5 },
  { product: "Papel Bond", ventas: 8 },
  { product: "Marcadores", ventas: 18 },
  { product: "Goma de borrar", ventas: 11 },
];

const dataTiendaB = [
  { product: "Lapicero Azul", ventas: 6 },
  { product: "Cuaderno A4", ventas: 10 },
  { product: "Tijeras", ventas: 4 },
  { product: "Papel Bond", ventas: 7 },
  { product: "Marcadores", ventas: 14 },
  { product: "Goma de borrar", ventas: 9 },
];

const chartConfig = {
  ventas: {
    label: "Ventas",
    color: "hsl(var(--chart-1))",
  },
  label: {
    color: "hsl(var(--background))",
  },
} satisfies ChartConfig;

export function Chart04() {
  const [selectedStore, setSelectedStore] = useState<
    "todas" | "tiendaA" | "tiendaB"
  >("todas");

  const chartData =
    selectedStore === "tiendaA"
      ? dataTiendaA
      : selectedStore === "tiendaB"
      ? dataTiendaB
      : dataAll;

  return (
    <Card>
      <CardHeader className="gap-2">
        <CardTitle>Productos menos vendidos</CardTitle>
        <Select
          value={selectedStore}
          onValueChange={(value: "todas" | "tiendaA" | "tiendaB") =>
            setSelectedStore(value)
          }
        >
          <SelectTrigger
            className="max-w-[160px] rounded-lg"
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
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              right: 16,
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="product"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              hide
            />
            <XAxis dataKey="ventas" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar
              dataKey="ventas"
              layout="vertical"
              fill="var(--color-ventas)"
              radius={4}
            >
              <LabelList
                dataKey="product"
                position="insideLeft"
                offset={8}
                className="fill-[--color-label]"
                fontSize={12}
              />
              <LabelList
                dataKey="ventas"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm leading-none text-muted-foreground">
        Mostrando los productos menos vendidos el último cuatrimestre
      </CardFooter>
    </Card>
  );
}
