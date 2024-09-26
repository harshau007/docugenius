"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FontBoldIcon, FontItalicIcon, HeadingIcon } from "@radix-ui/react-icons"
import { goDummyData, jsDummyData, pythonDummyData } from "@/lib/dummyData"

export default function GeneratedDocumentationScreen({ language = "js" }) {
  const [content, setContent] = useState("")
  const editorRef = useRef(null)

  useEffect(() => {
    let dummyData
    switch (language) { 
      case "go":
        dummyData = goDummyData
        break
      case "python":
        dummyData = pythonDummyData
        break
      default:
        dummyData = jsDummyData
    }
    setContent(dummyData)
    if (editorRef.current) {
      (editorRef.current as HTMLElement).innerHTML = dummyData
    }
  }, [language])

  const applyFormat = (format: string) => {
    document.execCommand(format, false, undefined)
    if (editorRef.current) {
      setContent((editorRef.current as HTMLElement).innerHTML)
    }
  }

  const handleInput = () => {
    if (editorRef.current) {
      setContent((editorRef.current as HTMLElement).innerHTML)
    }
  }

  const getTableOfContents = () => {
    const parser = new DOMParser()
    const doc = parser.parseFromString(content, 'text/html')
    const headings = doc.querySelectorAll('h1')
    return Array.from(headings).map(heading => ({
      id: heading.id,
      text: heading.textContent
    }))
  }

  const toc = getTableOfContents()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Generated Documentation for {language.toUpperCase()}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-4">
          <div className="w-1/4">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="toc">
                <AccordionTrigger>Table of Contents</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    {toc.map((item) => (
                      <li key={item.id}>
                        <a href={`#${item.id}`} className="text-primary hover:underline">
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="flex-grow">
            <div className="flex space-x-2 mb-4">
              <Button variant="outline" size="icon" onClick={() => applyFormat('bold')}>
                <FontBoldIcon className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={() => applyFormat('italic')}>
                <FontItalicIcon className="h-4 w-4" />
              </Button>
                {/* <Button variant="outline" size="icon" onClick={() => applyFormat('formatBlock')} onMouseDown={(e) => e.preventDefault()}>
                  <HeadingIcon className="h-4 w-4" />
                </Button> */}
            </div>
            <div 
              ref={editorRef}
              className="prose dark:prose-invert max-w-none border p-4 rounded-md"
              contentEditable
              onInput={handleInput}
              style={{ minHeight: '400px', overflowY: 'auto' }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}