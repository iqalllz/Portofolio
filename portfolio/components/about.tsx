"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Code, Database, LineChart } from "lucide-react"
import { LampHeader } from "./lamp-header"

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  }

  const interests = [
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: "Data Analysis",
      description: "Transforming raw data into actionable insights through statistical analysis and visualization.",
    },
    {
      icon: <Brain className="h-10 w-10 text-primary" />,
      title: "Machine Learning",
      description: "Building predictive models and algorithms to solve complex problems.",
    },
    {
      icon: <LineChart className="h-10 w-10 text-primary" />,
      title: "Data Visualization",
      description: "Creating compelling visual representations of data to communicate insights effectively.",
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Programming",
      description: "Developing efficient code to automate data processes and build analytical tools.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-black/30 backdrop-blur-sm">
      <div className="container px-4 mx-auto">
        <LampHeader>
          <motion.div
            initial={{ opacity: 0, y: 300 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16 mt-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-br from-white to-primary bg-clip-text text-transparent drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-white text-lg">
              I'm an Informatics student at Telkom University (class of 2022) with a passion for data science and
              analytics.
            </p>
          </motion.div>
        </LampHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">My Journey</h3>
            <p className="text-muted-foreground mb-4">
              My fascination with data began during my early university years when I discovered how data could be used
              to solve real-world problems. As an Informatics student at Telkom University, I've been developing my
              skills in programming, statistics, and data visualization.
            </p>
            <p className="text-muted-foreground mb-4">
              I'm particularly interested in how data science can be applied to various domains such as business
              intelligence, healthcare, and environmental sustainability. My goal is to become a skilled data analyst
              and eventually a data scientist who can extract meaningful insights from complex datasets.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding or analyzing data, I enjoy playing football and read, which help me maintain a
              balanced perspective and creative approach to problem-solving.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-full max-w-md h-80 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-6 bg-background/80 backdrop-blur-md rounded-xl">
                  <h4 className="text-xl font-bold mb-2">Iqal Mahendra Laksono</h4>
                  <p className="text-muted-foreground mb-4">Informatics Student at Telkom University</p>
                  <p className="text-sm">Class of 2022</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <h3 className="text-2xl font-bold text-center mb-8">My Interests</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 p-3 rounded-full bg-primary/10">{interest.icon}</div>
                    <h4 className="text-xl font-semibold mb-2">{interest.title}</h4>
                    <p className="text-muted-foreground text-sm">{interest.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
