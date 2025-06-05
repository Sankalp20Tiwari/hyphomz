"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, ToasterProps } from "sonner"
import { CheckCircle, AlertCircle, Info, XCircle } from "lucide-react"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      position="bottom-right"
      toastOptions={{
        className:
          "group pointer-events-auto flex items-center space-x-4 rounded-2xl border p-4 shadow-xl backdrop-blur-3xl bg-background text-foreground transition-all duration-300",
        duration: 4000,
        unstyled: false,
        descriptionClassName: "text-lg ",
    
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      icons={{
        success: <CheckCircle className="text-green-500 h-5 w-5" />,
        error: <XCircle className="text-red-500 h-5 w-5" />,
        info: <Info className="text-blue-500 h-5 w-5" />,
        warning: <AlertCircle className="text-yellow-500 h-5 w-5" />,
      }}
      {...props}
    />
  )
}

export { Toaster }
