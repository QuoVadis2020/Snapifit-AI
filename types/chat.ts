import type { LucideIcon } from "lucide-react"

export interface ImagePreview {
  file: File
  url: string
  compressedFile?: File
}

export interface ExpertRole {
  id: string
  name: string
  title: string
  description: string
  icon: LucideIcon
  color: string
  systemPrompt: string
}

export type ChatMessageRole = "user" | "assistant" | "system"

export interface ChatMessage {
  id: string
  role: ChatMessageRole
  content: string
  images?: string[]
}

export interface ExpertDisplayInfo {
  name: string
  title: string
  description: string
}
