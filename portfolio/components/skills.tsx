"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function Skills() {
  const technicalSkills = [
    { name: "Python", level: 75 },
    { name: "SQL", level: 85 },
    { name: "Data Analysis", level: 85 },
    { name: "Data Visualization", level: 75 },
    { name: "Machine Learning", level: 70 },
    { name: "Statistical Analysis", level: 80 },
    { name: "R Programming", level: 65 },
    { name: "Excel/Spreadsheets", level: 80 },
  ]

  const toolsFrameworks = [
    { name: "Pandas", category: "Data Manipulation" },
    { name: "NumPy", category: "Scientific Computing" },
    { name: "Scikit-learn", category: "Machine Learning" },
    { name: "TensorFlow", category: "Deep Learning" },
    { name: "Matplotlib", category: "Visualization" },
    { name: "Seaborn", category: "Visualization" },
    { name: "Tableau", category: "Business Intelligence" },
    { name: "Jupyter Notebook", category: "Development" },
    { name: "Git", category: "Version Control" },
    { name: "MySQL", category: "Database" },
  ]

  return (
    <section id="skills" className="py-20 bg-black/30 backdrop-blur-sm">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            My technical skills and proficiency in various data science tools and technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Tools & Frameworks</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {toolsFrameworks.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-4">
                      <h4 className="font-semibold">{tool.name}</h4>
                      <p className="text-xs text-muted-foreground">{tool.category}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
