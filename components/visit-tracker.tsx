"use client"

import { useEffect, useRef } from "react"
import { trackVisit } from "@/app/actions"

export function VisitTracker() {
  const hasTracked = useRef(false)

  useEffect(() => {
    if (!hasTracked.current) {
      // Check if we've already tracked this session to avoid spamming on refresh
      const sessionTracked = sessionStorage.getItem("visit_tracked")

      if (!sessionTracked) {
        trackVisit()
        sessionStorage.setItem("visit_tracked", "true")
        hasTracked.current = true
      }
    }
  }, [])

  return null
}
