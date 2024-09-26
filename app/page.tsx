"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileIcon, UploadIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"

export default function LandingScreen() {
  const [file, setFile] = useState<File | null>(null)
  const [useAI, setUseAI] = useState(false)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0]
    if (uploadedFile) {
      setFile(uploadedFile)
      toast.success("File uploaded successfully")
    }
  }

  const handleGenerateDocumentation = () => {
    if (file) {
      toast.success(`Generating documentation for ${file.name}`)
      // Add your documentation generation logic here
    } else {
      toast.error("Please upload a file first")
    }
  }

  const recentProjects = [
    { id: 1, name: "Project 1", language: "JavaScript", lastModified: new Date().toISOString().slice(0, 10) },
    { id: 2, name: "Project 2", language: "Python", lastModified: new Date().toISOString().slice(0, 10) },
    { id: 3, name: "Project 3", language: "Go", lastModified: new Date().toISOString().slice(0, 10) },
  ]

  return (
    <div className="space-y-8">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Upload Your Code</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-muted hover:bg-muted/50"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <UploadIcon className="w-10 h-10 mb-3 text-muted-foreground" />
                <p className="mb-2 text-sm text-muted-foreground">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-muted-foreground">
                  Supported file types: .go, .js, .py
                </p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" onChange={handleFileUpload} accept=".go,.js,.py" />
            </label>
          </div>
          {file && (
            <div className="mt-4 flex items-center space-x-2">
              <FileIcon className="w-5 h-5 text-primary" />
              <span>{file.name}</span>
            </div>
          )}
          <div className="flex items-center space-x-2 mt-4">
            <Switch
              id="use-ai"
              checked={useAI}
              onCheckedChange={setUseAI}
            />
            <Label htmlFor="use-ai">Use AI for documentation generation</Label>
          </div>
          <Button className="mt-4 w-full" disabled={!file} onClick={handleGenerateDocumentation}>
            Generate Documentation
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {recentProjects.map((project) => (
              <Link href={`/projects/${project.id}`} key={project.id}>
                <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
                  <CardHeader>
                    <CardTitle>{project.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p><strong>Language:</strong> {project.language}</p>
                    <p><strong>Last Modified:</strong> {project.lastModified}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}