"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { fetchJobData } from "@/lib/data"
import type { JobData } from "@/types/job"

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("")
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [jobData, setJobData] = useState<JobData[]>([])
  const router = useRouter()

  useEffect(() => {
    const loadJobData = async () => {
      const data = await fetchJobData()
      setJobData(data)
    }

    loadJobData()
  }, [])

  useEffect(() => {
    if (searchQuery.length > 1 && jobData.length > 0) {
      const filteredSuggestions = jobData
        .filter((job) => job["Job Role"].toLowerCase().includes(searchQuery.toLowerCase()))
        .map((job) => job["Job Role"])
        .slice(0, 5)

      setSuggestions(filteredSuggestions)
      setShowSuggestions(filteredSuggestions.length > 0)
    } else {
      setSuggestions([])
      setShowSuggestions(false)
    }
  }, [searchQuery, jobData])

  const handleSearch = (query: string = searchQuery) => {
    if (query.trim()) {
      router.push(`/jobs/search?q=${encodeURIComponent(query.trim())}`)
      setShowSuggestions(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion)
    handleSearch(suggestion)
  }

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="flex">
        <Input
          type="text"
          placeholder="Search for jobs, courses, or skills..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => searchQuery.length > 1 && setSuggestions.length > 0 && setShowSuggestions(true)}
          className="rounded-r-none h-12 text-base"
        />
        <Button onClick={() => handleSearch()} className="rounded-l-none h-12 bg-green-600 hover:bg-green-700">
          <Search className="h-5 w-5" />
          <span className="ml-2 hidden sm:inline">Search</span>
        </Button>
      </div>

      {showSuggestions && (
        <Card className="absolute z-10 w-full mt-1 p-2 max-h-60 overflow-auto">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="p-2 hover:bg-gray-100 cursor-pointer rounded"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </div>
          ))}
        </Card>
      )}
    </div>
  )
}

