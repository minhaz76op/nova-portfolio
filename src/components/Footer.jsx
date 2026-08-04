import { useEffect, useState } from 'react'

export default function Footer() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        })
      )
    }
    update()
    const id = setInterval(update, 1000 * 15)
    return () => clearInterval(id)
  }, [])

  return (
    <footer className="relative border-t border-red-500/10 px-6 py-8 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
        <p className="text-center sm:text-left">&copy; {new Date().getFullYear()} Minhazul Islam. All rights reserved.</p>
        <div className="flex items-center gap-2 rounded-full border border-red-500/15 bg-[#140b0d]/60 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.3em] text-red-200/80 backdrop-blur-xl">
          <span className="h-2 w-2 rounded-full bg-red-400 animate-pulse-slow" />
          <span>Bogura, Bangladesh • {time}</span>
        </div>
      </div>
    </footer>
  )
}
