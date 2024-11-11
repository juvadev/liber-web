"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
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

// Datos de ventas promedio por hora para los diferentes rangos de tiempo
const data3Meses = [
  { hour: "6", sales: 90 },
  { hour: "7", sales: 140 },
  { hour: "8", sales: 210 },
  { hour: "9", sales: 240 },
  { hour: "10", sales: 270 },
  { hour: "11", sales: 310 },
  { hour: "12", sales: 350 },
  { hour: "13", sales: 330 },
  { hour: "14", sales: 280 },
  { hour: "15", sales: 260 },
  { hour: "16", sales: 240 },
  { hour: "17", sales: 220 },
  { hour: "18", sales: 230 },
  { hour: "19", sales: 210 },
];

const data30Dias = [
  { hour: "6", sales: 50 },
  { hour: "7", sales: 80 },
  { hour: "8", sales: 120 },
  { hour: "9", sales: 150 },
  { hour: "10", sales: 180 },
  { hour: "11", sales: 170 },
  { hour: "12", sales: 200 },
  { hour: "13", sales: 220 },
  { hour: "14", sales: 190 },
  { hour: "15", sales: 170 },
  { hour: "16", sales: 210 },
  { hour: "17", sales: 230 },
  { hour: "18", sales: 220 },
  { hour: "19", sales: 210 },
];

const data7Dias = [
  { hour: "6", sales: 30 },
  { hour: "7", sales: 50 },
  { hour: "8", sales: 80 },
  { hour: "9", sales: 110 },
  { hour: "10", sales: 140 },
  { hour: "11", sales: 160 },
  { hour: "12", sales: 190 },
  { hour: "13", sales: 180 },
  { hour: "14", sales: 170 },
  { hour: "15", sales: 160 },
  { hour: "16", sales: 190 },
  { hour: "17", sales: 220 },
  { hour: "18", sales: 200 },
  { hour: "19", sales: 190 },
];

const chartConfig = {
  desktop: {
    label: "Ventas",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function Chart05() {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState<
    "3meses" | "30dias" | "7dias"
  >("3meses");

  // Selección de datos según el valor del select
  const chartData =
    selectedTimeFrame === "3meses"
      ? data3Meses
      : selectedTimeFrame === "30dias"
      ? data30Dias
      : data7Dias;

  return (
    <Card>
      <CardHeader className="gap-2">
        <CardTitle>Ventas por Hora</CardTitle>
        <Select
          value={selectedTimeFrame}
          onValueChange={(value: "3meses" | "30dias" | "7dias") =>
            setSelectedTimeFrame(value)
          }
        >
          <SelectTrigger
            className="max-w-[160px] rounded-lg"
            aria-label="Seleccionar periodo"
          >
            <SelectValue placeholder="Selecciona un periodo" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="3meses" className="rounded-lg">
              Últimos 3 meses
            </SelectItem>
            <SelectItem value="30dias" className="rounded-lg">
              Últimos 30 días
            </SelectItem>
            <SelectItem value="7dias" className="rounded-lg">
              Últimos 7 días
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="hour"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value + ":00"}
            />
            {/* Aquí estamos deshabilitando las etiquetas del eje Y */}
            <YAxis hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="sales"
              type="step"
              stroke="hsl(var(--chart-1))" // Define el color de la línea explícitamente
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm leading-none text-muted-foreground">
        Mostrando ventas promedio por hora para el periodo seleccionado.
      </CardFooter>
    </Card>
  );
}
