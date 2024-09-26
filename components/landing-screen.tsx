"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileIcon, UploadIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import { useState } from "react"

export default function LandingScreen() {
  const [file, setFile] = useState<File | null>(null)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0]
    if (uploadedFile) {
      setFile(uploadedFile)
    }
  }

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
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <UploadIcon className="w-10 h-10 mb-3 text-gray-400" />
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
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
          <Button className="mt-4 w-full" disabled={!file}>
            Generate Documentation
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {['Project 1', 'Project 2', 'Project 3'].map((project, index) => (
              <li key={index}>
                <Link href={`/projects/${index}`} className="text-primary hover:underline">
                  {project}
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}