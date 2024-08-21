import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <h1 className="text-lg font-semibold">
          Welcome to Meditation Chatbot!
        </h1>
        <p className="leading-normal text-muted-foreground">
        Meditation AI {' '} is your personalized mindfulness companion, designed to help you achieve inner peace and mental clarity. Experience tailored meditation sessions that adapt to your needs, guiding you on your journey to relaxation and self-discovery 
        </p>
      </div>
    </div>
  )
}
