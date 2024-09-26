"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { PlusIcon, Pencil1Icon, TrashIcon } from "@radix-ui/react-icons"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export default function ProjectManagementScreen() {
  const router = useRouter()
  const [projects, setProjects] = useState([
    { id: 1, name: "JavaScript Project", language: "js", lastModified: "2023-05-15" },
    { id: 2, name: "Python Project", language: "python", lastModified: "2023-05-14" },
    { id: 3, name: "Go Project", language: "go", lastModified: "2023-05-13" },
  ])
  const [editingProject, setEditingProject] = useState(null)
  const [newProjectName, setNewProjectName] = useState("")

  const handleRename = (id: number) => {
    const updatedProjects = projects.map((project) =>
      project.id === id ? { ...project, name: newProjectName } : project
    )
    setProjects(updatedProjects)
    setEditingProject(null)
    setNewProjectName("")
    toast.success("Project renamed successfully")
  }

  const handleDelete = (id: number) => {
    const updatedProjects = projects.filter((project) => project.id !== id)
    setProjects(updatedProjects)
    toast.success("Project deleted successfully")
  }

  const handleCreateProject = () => {
    const languages = ["js", "python", "go"]
    const newProject = {
      id: projects.length + 1,
      name: `New ${languages[projects.length % 3].toUpperCase()} Project`,
      language: languages[projects.length % 3],
      lastModified: new Date().toISOString().split('T')[0]
    }
    setProjects([...projects, newProject])
    toast.success("New project created")
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Projects</h1>
        <Button onClick={handleCreateProject}>
          <PlusIcon className="mr-2 h-4 w-4" /> Create New Project
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Your Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Language</TableHead>
                <TableHead>Last Modified</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project) => (
                <TableRow key={project.id}>
                  <TableCell>
                    <Link href={`/projects/${project.id}`} className="text-primary hover:underline">
                      {project.name}
                    </Link>
                  </TableCell>
                  <TableCell>{project.language.toUpperCase()}</TableCell>
                  <TableCell>{project.lastModified}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm">
                            <Pencil1Icon className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Rename Project</DialogTitle>
                          </DialogHeader>
                          <Input
                            value={newProjectName}
                            onChange={(e) => setNewProjectName(e.target.value)}
                            placeholder="New project name"
                          />
                          <Button onClick={() => handleRename(project.id)}>Rename</Button>
                        </DialogContent>
                      </Dialog>
                      <Button variant="outline" size="sm" onClick={() => handleDelete(project.id)}>
                        <TrashIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}