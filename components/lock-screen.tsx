"use client"

import { useState, useEffect } from "react"

interface HomeScreenProps {
  onOpenProfile: () => void
}

const apps = [
  {
    name: "MyProfile",
    color: "#f97316",
    isProfile: true,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    name: "Messages",
    color: "#10b981",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    name: "Camera",
    color: "#6366f1",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
  },
  {
    name: "Music",
    color: "#ec4899",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
  },
  {
    name: "Games",
    color: "#f43f5e",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <path d="M6 12h4" />
        <path d="M8 10v4" />
        <circle cx="17" cy="10" r="1" fill="#fff" />
        <circle cx="15" cy="13" r="1" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "Settings",
    color: "#64748b",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    ),
  },
  {
    name: "Gallery",
    color: "#06b6d4",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
  },
  {
    name: "Mail",
    color: "#f59e0b",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
      </svg>
    ),
  },
]

export function HomeScreen({ onOpenProfile }: HomeScreenProps) {
  const [time, setTime] = useState(new Date())
  const [tappedIndex, setTappedIndex] = useState<number | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  const formatTime = (date: Date) =>
    date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true })

  const formatDate = (date: Date) =>
    date.toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" })

  const handleTap = (index: number, isProfile: boolean | undefined) => {
    setTappedIndex(index)
    if (isProfile) {
      setTimeout(() => {
        onOpenProfile()
      }, 400)
    } else {
      setTimeout(() => setTappedIndex(null), 400)
    }
  }

  return (
    <div
      className="flex min-h-[100dvh] md:min-h-0 md:h-[680px] flex-col"
      style={{
        background: "linear-gradient(160deg, #0f172a 0%, #1e3a5f 40%, #164e63 70%, #0f172a 100%)",
      }}
    >
      {/* Time & Date Header */}
      <div
        className={`flex flex-col items-center pt-14 md:pt-10 pb-4 transition-all duration-700 ${
          visible ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"
        }`}
      >
        <p className="text-4xl md:text-5xl font-extralight tracking-wide" style={{ color: "#f1f5f9" }}>
          {formatTime(time)}
        </p>
        <p className="mt-1 text-sm capitalize" style={{ color: "#94a3b8" }}>
          {formatDate(time)}
        </p>
      </div>

      {/* App Grid */}
      <div className="flex-1 flex items-start justify-center px-6 md:px-5 pt-6 md:pt-4">
        <div className="grid grid-cols-4 gap-y-6 gap-x-5 md:gap-x-4 md:gap-y-5">
          {apps.map((app, i) => (
            <button
              key={app.name}
              onClick={() => handleTap(i, app.isProfile)}
              className={`flex flex-col items-center gap-1.5 transition-all duration-300 ${
                visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{
                transitionDelay: `${150 + i * 60}ms`,
                transform: tappedIndex === i ? "scale(0.85)" : undefined,
              }}
            >
              <div
                className="relative flex h-14 w-14 md:h-[58px] md:w-[58px] items-center justify-center rounded-2xl shadow-lg transition-transform duration-200 active:scale-90"
                style={{
                  background: app.isProfile
                    ? "linear-gradient(135deg, #f97316, #fb923c)"
                    : app.color,
                  boxShadow: app.isProfile
                    ? "0 4px 20px rgba(249,115,22,0.5)"
                    : `0 4px 12px ${app.color}40`,
                }}
              >
                {app.icon}
                {/* Pulse ring on profile app */}
                {app.isProfile && (
                  <div
                    className="absolute inset-0 rounded-2xl animate-pulse-ring"
                    style={{
                      border: "2px solid rgba(249,115,22,0.4)",
                    }}
                  />
                )}
              </div>
              <span
                className="text-[10px] md:text-[11px] font-medium leading-tight text-center"
                style={{
                  color: app.isProfile ? "#f97316" : "#cbd5e1",
                  textShadow: "0 1px 4px rgba(0,0,0,0.5)",
                }}
              >
                {app.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Dock */}
      <div className="shrink-0 px-5 pb-6 md:pb-4">
        <div
          className="flex items-center justify-around rounded-3xl px-4 py-3"
          style={{
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {/* Phone */}
          <button className="flex h-11 w-11 items-center justify-center rounded-xl transition-transform active:scale-90" style={{ background: "#10b981" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
          </button>
          {/* Browser */}
          <button className="flex h-11 w-11 items-center justify-center rounded-xl transition-transform active:scale-90" style={{ background: "#3b82f6" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
            </svg>
          </button>
          {/* Chat */}
          <button className="flex h-11 w-11 items-center justify-center rounded-xl transition-transform active:scale-90" style={{ background: "#8b5cf6" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
            </svg>
          </button>
          {/* Camera */}
          <button className="flex h-11 w-11 items-center justify-center rounded-xl transition-transform active:scale-90" style={{ background: "#f43f5e" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
