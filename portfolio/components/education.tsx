"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

export default function Education() {
  const educationData = [
    {
      degree: "Bachelor of Informatics",
      institution: "Telkom University",
      location: "Bandung, Indonesia",
      period: "2022 - Present",
      description:
        "Focusing on data science, algorithms, and software engineering. Relevant coursework includes Data Structures, Algorithms, Database Systems, Machine Learning, and Statistics.",
    },
  ]

  const certifications = [
    {
      title: "Data Science Fundamentals",
      issuer: "Dicoding",
      date: "2024",
      description:
        "Comprehensive course covering statistical analysis, data visualization, and machine learning basics.",
    },
    {
      title: "Microsoft Certified: Azure Fundamentals",
      issuer: "Udemy",
      date: "2024",
      description: "Comprehensive course about how cloud system works",
    },
  ]

  return (
    <section id="education" className="py-20 bg-black/20 backdrop-blur-sm">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Education & Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            My academic journey and professional development in the field of data science and informatics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <GraduationCap className="mr-2 h-6 w-6 text-primary" />
              Academic Education
            </h3>

            <div className="space-y-6">
              {educationData.map((item, index) => (
                <Card key={index} className="overflow-hidden border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold mb-1">{item.degree}</h4>
                    <h5 className="text-lg font-medium text-primary mb-2">{item.institution}</h5>

                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="mr-1 h-4 w-4" />
                        {item.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="mr-1 h-4 w-4" />
                        {item.location}
                      </div>
                    </div>

                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <GraduationCap className="mr-2 h-6 w-6 text-primary" />
              Certifications & Courses
            </h3>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold mb-1">{cert.title}</h4>
                    <div className="flex justify-between mb-4">
                      <h5 className="text-primary font-medium">{cert.issuer}</h5>
                      <span className="text-sm text-muted-foreground flex items-center">
                        <Calendar className="mr-1 h-4 w-4" />
                        {cert.date}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{cert.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 p-6 bg-muted rounded-xl"
            >
              <h4 className="text-lg font-semibold mb-2">Continuous Learning</h4>
              <p className="text-muted-foreground">
                I'm constantly expanding my knowledge through online courses, workshops, and self-study in areas such as
                advanced statistics, big data technologies, and artificial intelligence.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
