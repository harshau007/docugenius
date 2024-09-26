"use client"

import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeftIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import GeneratedDocumentationScreen from "@/components/generated-documentation-screen"

export default function ProjectScreen() {
  const params = useParams()
  const projectId = params.id
  
  const project = {
    id: projectId,
    name: `Project ${projectId}`,
    language: ["go", "js", "python"][Number(projectId) % 3],
    lastModified: new Date().toISOString().slice(0, 10),
  }

  let projectContent = ""
  switch (project.language) {
    case "go":
      projectContent = `package main

import "fmt"

func main() {
    fmt.Println("Hello, Go!")
    result := calculateFactorial(5)
    fmt.Printf("Factorial of 5 is: %d\\n", result)
}

func calculateFactorial(n int) int {
    if n == 0 || n == 1 {
        return 1
    }
    return n * calculateFactorial(n-1)
}
`
      break
    case "js":
      projectContent = `function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

const debouncedSearch = debounce((query) => {
  console.log('Searching for:', query);
  // Perform search operation here
}, 300);

// Usage
debouncedSearch('hello'); // Will only log after 300ms of inactivity
`
      break
    case "python":
      projectContent = `def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)

# Usage
numbers = [3, 6, 8, 10, 1, 2, 1]
sorted_numbers = quick_sort(numbers)
print("Sorted array:", sorted_numbers)
`
      break
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-4">
        <Link href="/projects">
          <Button variant="outline" size="sm">
            <ArrowLeftIcon className="mr-2 h-4 w-4" /> Back to Projects
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">{project.name}</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Project Details</CardTitle>
        </CardHeader>
        <CardContent>
          <p><strong>Language:</strong> {project.language.toUpperCase()}</p>
          <p><strong>Last Modified:</strong> {project.lastModified}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Project Content</CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="bg-muted p-4 rounded-md overflow-x-auto">
            <code>{projectContent}</code>
          </pre>
        </CardContent>
      </Card>
      <GeneratedDocumentationScreen language={project.language} />
    </div>
  )
}