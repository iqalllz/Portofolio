"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDown, Database, BarChart2 } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* No additional background needed as we have the particles background */}
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-primary">Iqal Mahendra</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Informatics Student & Aspiring Data Scientist</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Passionate about transforming data into meaningful insights. Currently studying at Telkom University,
              class of 2022, with a focus on data analysis and machine learning.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="#contact">Get in Touch</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#projects">View Projects</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[400px] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl overflow-hidden">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 6,
                  ease: "easeInOut",
                }}
                className="absolute top-1/4 left-1/4 w-20 h-20 bg-primary/30 rounded-xl backdrop-blur-md flex items-center justify-center"
              >
                <Database className="text-primary-foreground h-10 w-10" />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 7,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-secondary/40 rounded-xl backdrop-blur-md flex items-center justify-center"
              >
                <BarChart2 className="text-primary h-12 w-12" />
              </motion.div>

              <div className="absolute inset-0 backdrop-blur-sm flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-background/80 backdrop-blur-md border-4 border-primary/30 flex items-center justify-center overflow-hidden">
                  <div className="text-center">
                    <h3 className="text-xl font-bold">Iqal Mahendra</h3>
                    <p className="text-sm text-muted-foreground">Data Analyst</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <p className="text-sm text-muted-foreground mb-2">Scroll to explore</p>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
            <ArrowDown className="h-6 w-6 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
