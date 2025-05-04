"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      title: "Sales Data Analysis Dashboard",
      description:
        "Interactive dashboard for analyzing sales data, featuring trend analysis, regional comparisons, and product performance metrics. Built with Python and Streamlit to visualize business metrics and KPIs.",
      image: "/images/business-dashboard.png",
      tags: ["Python", "Pandas", "Plotly", "Streamlit"],
      github: "https://github.com/iqalllz/Amazon-Sales-Data-Analysis",
      demo: "#",
    },
    {
      title: "Image Classification Project",
      description:
        "This project explores the impact of different Convolutional Neural Network (CNN) architectures on object classification tasks using the CIFAR-10 dataset. Through experiments with VGG16, ResNet50, and MobileNetV2.",
      image: "/images/image-classification.png",
      tags: ["Python", "ipynb", "Tensorflow"],
      github: "https://github.com/iqalllz/ImageClassifiacation",
      demo: "#",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            A showcase of my data analysis and visualization projects that demonstrate my technical skills and
            problem-solving abilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
                <div className="overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-4">
                  <Button asChild variant="outline" size="sm">
                    <Link href={project.github}>
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  <Button asChild size="sm">
                    <Link href={project.demo}>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
