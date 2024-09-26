"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { PlusIcon, Pencil1Icon, TrashIcon } from "@radix-ui/react-icons"
import Link from "next/link"

export default function ProjectManagementScreen() {
  const projects = [
    { id: 1, name: "Project 1", language: "JavaScript", lastModified: "2023-05-15" },
    { id: 2, name: "Project 2", language: "Python", lastModified: "2023-05-14" },
    { id: 3, name: "Project 3", language: "Go", lastModified: "2023-05-13" },
  ]

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Projects</h1>
        <Button>
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
                  <TableCell>{project.name}</TableCell>
                  <TableCell>{project.language}</TableCell>
                  <TableCell>{project.lastModified}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Pencil1Icon className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
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