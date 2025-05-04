"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, LineChart, PieChart } from "lucide-react"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart as RechartsBarChart,
  Bar,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Legend,
} from "recharts"

export default function DataVisualization() {
  const [activeTab, setActiveTab] = useState("trends")

  const timeSeriesData = [
    { month: "Jan", value: 1200 },
    { month: "Feb", value: 1900 },
    { month: "Mar", value: 1500 },
    { month: "Apr", value: 2400 },
    { month: "May", value: 2800 },
    { month: "Jun", value: 1700 },
    { month: "Jul", value: 3100 },
    { month: "Aug", value: 3500 },
    { month: "Sep", value: 2900 },
    { month: "Oct", value: 3800 },
    { month: "Nov", value: 4200 },
    { month: "Dec", value: 3600 },
  ]

  const categoryData = [
    { name: "Category A", value: 35 },
    { name: "Category B", value: 25 },
    { name: "Category C", value: 20 },
    { name: "Category D", value: 15 },
    { name: "Category E", value: 5 },
  ]

  const comparisonData = [
    { name: "Group A", value1: 400, value2: 300 },
    { name: "Group B", value1: 300, value2: 450 },
    { name: "Group C", value1: 500, value2: 390 },
    { name: "Group D", value1: 280, value2: 480 },
    { name: "Group E", value1: 590, value2: 300 },
  ]

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"]

  return (
    <section id="data-viz" className="py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Data Visualization Showcase</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Interactive visualizations demonstrating my data analysis capabilities and insights extraction skills.
          </p>
        </motion.div>

        <Card className="overflow-hidden">
          <CardHeader className="pb-0">
            <CardTitle>Interactive Data Analysis</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <Tabs defaultValue="trends" onValueChange={setActiveTab}>
              <TabsList className="mb-8">
                <TabsTrigger value="trends" className="flex items-center">
                  <LineChart className="mr-2 h-4 w-4" />
                  Time Series Analysis
                </TabsTrigger>
                <TabsTrigger value="distribution" className="flex items-center">
                  <PieChart className="mr-2 h-4 w-4" />
                  Distribution Analysis
                </TabsTrigger>
                <TabsTrigger value="comparison" className="flex items-center">
                  <BarChart className="mr-2 h-4 w-4" />
                  Comparative Analysis
                </TabsTrigger>
              </TabsList>

              <TabsContent value="trends" className="mt-0">
                <div className="h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={timeSeriesData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="value"
                        stroke="hsl(var(--primary))"
                        fill="hsl(var(--primary) / 0.2)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 text-center">
                  <h4 className="font-semibold text-lg">Monthly Data Trend Analysis</h4>
                  <p className="text-muted-foreground">
                    This visualization shows the trend of data points over a 12-month period, highlighting seasonal
                    patterns and growth trends.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="distribution" className="mt-0">
                <div className="h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsPieChart>
                      <Pie
                        data={categoryData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {categoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 text-center">
                  <h4 className="font-semibold text-lg">Category Distribution Analysis</h4>
                  <p className="text-muted-foreground">
                    This chart illustrates the distribution of data across different categories, showing the relative
                    proportion of each segment.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="comparison" className="mt-0">
                <div className="h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsBarChart data={comparisonData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="value1" name="Dataset A" fill="hsl(var(--primary))" />
                      <Bar dataKey="value2" name="Dataset B" fill="hsl(var(--secondary))" />
                    </RechartsBarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 text-center">
                  <h4 className="font-semibold text-lg">Comparative Data Analysis</h4>
                  <p className="text-muted-foreground">
                    This visualization compares two datasets across multiple groups, enabling side-by-side analysis of
                    different metrics.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
