import { SplashCursor } from "@/components/ui/splash-cursor"

export function SplashCursorDemo() {
  return (
    <>
      <SplashCursor />
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Move your cursor around!</h1>
      </div>
    </>
  )
}
