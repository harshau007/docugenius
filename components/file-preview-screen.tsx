"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeftIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function FilePreviewScreen() {
  const code = `
function helloWorld() {
  console.log("Hello, World!");
}
`

  return (
    <div className="space-y-4">
      <Link href="/" className="flex items-center text-primary hover:underline">
        <ArrowLeftIcon className="mr-2" /> Back to Upload
      </Link>
      <Card>
        <CardHeader>
          <CardTitle>File Preview</CardTitle>
        </CardHeader>
        <CardContent>
          <SyntaxHighlighter language="javascript" style={tomorrow}>
            {code}
          </SyntaxHighlighter>
          <div className="mt-4 flex space-x-4">
            <Button>Generate Documentation</Button>
            <Button variant="outline">Upload Different File</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}