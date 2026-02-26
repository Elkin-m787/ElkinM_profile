"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const interests = [
  { label: "I like watching movies and TV series", icon: "film" },
  { label: "I enjoy playing soccer", icon: "soccer" },
  { label: "I enjoy programming and learning about computers", icon: "code" },
  { label: "I like playing video games like FIFA 23", icon: "gamepad" },
  { label: "I like meeting and talking with people", icon: "people" },
]

const dislikes = [
  { label: "I don't like waking up early", icon: "moon" },
  { label: "I don't like noisy places", icon: "volume" },
]

function InterestIcon({ icon, size = 18 }: { icon: string; size?: number }) {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  }

  switch (icon) {
    case "film":
      return (
        <svg {...props} stroke="currentColor">
          <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
          <line x1="7" y1="2" x2="7" y2="22" />
          <line x1="17" y1="2" x2="17" y2="22" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <line x1="2" y1="7" x2="7" y2="7" />
          <line x1="2" y1="17" x2="7" y2="17" />
          <line x1="17" y1="17" x2="22" y2="17" />
          <line x1="17" y1="7" x2="22" y2="7" />
        </svg>
      )
    case "soccer":
      return (
        <svg {...props} stroke="currentColor">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 000 20 14.5 14.5 0 000-20" />
          <path d="M2 12h20" />
        </svg>
      )
    case "code":
      return (
        <svg {...props} stroke="currentColor">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      )
    case "gamepad":
      return (
        <svg {...props} stroke="currentColor">
          <rect x="2" y="6" width="20" height="12" rx="2" />
          <path d="M6 12h4" />
          <path d="M8 10v4" />
          <circle cx="17" cy="10" r="1" fill="currentColor" />
          <circle cx="15" cy="13" r="1" fill="currentColor" />
        </svg>
      )
    case "people":
      return (
        <svg {...props} stroke="currentColor">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 00-3-3.87" />
          <path d="M16 3.13a4 4 0 010 7.75" />
        </svg>
      )
    case "moon":
      return (
        <svg {...props} stroke="currentColor">
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      )
    case "volume":
      return (
        <svg {...props} stroke="currentColor">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <line x1="23" y1="9" x2="17" y2="15" />
          <line x1="17" y1="9" x2="23" y2="15" />
        </svg>
      )
    default:
      return null
  }
}

interface ProfileContentProps {
  onBack: () => void
}

export function ProfileContent({ onBack }: ProfileContentProps) {
  const [visible, setVisible] = useState(false)
  const [activeTab, setActiveTab] = useState<"about" | "interests" | "contact">("about")
  const [hoveredInterest, setHoveredInterest] = useState<number | null>(null)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  const tabs = [
    { key: "about" as const, label: "About" },
    { key: "interests" as const, label: "Interests" },
    { key: "contact" as const, label: "Contact" },
  ]

  return (
    <div className="min-h-[100dvh] md:min-h-0 md:h-[680px] flex flex-col" style={{ background: "#0f172a" }}>
      {/* App Header */}
      <div
        className="flex items-center justify-between px-4 py-3 shrink-0"
        style={{ background: "linear-gradient(90deg, #f97316, #fb923c, #06b6d4)" }}
      >
        <button
          onClick={onBack}
          className="flex items-center gap-1 transition-transform active:scale-90"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          <span className="text-xs font-semibold" style={{ color: "#0f172a" }}>Home</span>
        </button>
        <h1 className="text-base font-bold" style={{ color: "#0f172a" }}>
          My Online Profile
        </h1>
        <div className="w-12" />
      </div>

      {/* Profile Hero */}
      <div
        className={`relative flex flex-col items-center pt-5 pb-5 shrink-0 transition-all duration-700 ${
          visible ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
        }`}
        style={{
          background: "linear-gradient(180deg, rgba(249,115,22,0.15) 0%, #0f172a 100%)",
        }}
      >
        {/* Photo */}
        <div
          className="relative mb-3 h-24 w-24 md:h-28 md:w-28 overflow-hidden rounded-full border-4 shadow-lg"
          style={{
            borderColor: "#f97316",
            boxShadow: "0 0 30px rgba(249,115,22,0.4)",
          }}
        >
          <Image
            src="/images/elkin.png"
            alt="Profile photo of Elkin Zaith Medina Martinez"
            fill
            className="object-cover"
            priority
          />
          {/* Online indicator */}
          <div
            className="absolute right-1 bottom-1 h-4 w-4 rounded-full border-2"
            style={{
              borderColor: "#0f172a",
              background: "#10b981",
              boxShadow: "0 0 8px rgba(16,185,129,0.6)",
            }}
          />
        </div>

        <h2
          className={`text-xl md:text-2xl font-bold text-balance text-center transition-all duration-700 delay-200 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ color: "#f1f5f9" }}
        >
          {"Elkin Zaith Medina Mart\u00ednez"}
        </h2>

        <div
          className={`mt-1 flex items-center gap-1.5 transition-all duration-700 delay-300 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#f97316">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
            <circle cx="12" cy="10" r="3" fill="#0f172a" />
          </svg>
          <span className="text-xs md:text-sm font-medium" style={{ color: "#f97316" }}>
            Riohacha, La Guajira
          </span>
        </div>

        <span
          className={`mt-2 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-all duration-700 delay-500 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ background: "rgba(6,182,212,0.15)", color: "#06b6d4" }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c0 1 4 3 6 3s6-2 6-3v-5" />
          </svg>
          Universidad de La Guajira
        </span>
      </div>

      {/* Tab Navigation */}
      <div className="flex border-b px-2 shrink-0" style={{ borderColor: "#334155" }}>
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className="relative flex-1 py-2.5 text-center text-xs md:text-sm font-medium transition-all duration-300"
            style={{
              color: activeTab === tab.key ? "#f97316" : "#64748b",
            }}
          >
            {tab.label}
            {activeTab === tab.key && (
              <div
                className="absolute bottom-0 left-1/2 h-0.5 w-10 -translate-x-1/2 rounded-full transition-all"
                style={{ background: "#f97316" }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content - scrollable */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        {activeTab === "about" && (
          <div className="animate-tab-in flex flex-col gap-4">
            {/* About Card */}
            <div
              className="rounded-2xl p-4 transition-all duration-300 active:scale-[0.98]"
              style={{ background: "#1e293b", border: "1px solid #334155" }}
            >
              <div className="mb-2 flex items-center gap-2">
                <div
                  className="flex h-7 w-7 items-center justify-center rounded-lg"
                  style={{ background: "rgba(249,115,22,0.15)" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold" style={{ color: "#f97316" }}>
                  About Me
                </h3>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#cbd5e1" }}>
                {"Hi! My name is Elkin. I am from Riohacha. I am a friendly person and I like meeting and talking with new people."}
              </p>
            </div>

            {/* Info Items */}
            <div className="flex flex-col gap-2.5">
              {[
                {
                  icon: (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  ),
                  label: "Name",
                  value: "Elkin Zaith Medina Mart\u00ednez",
                  color: "#06b6d4",
                },
                {
                  icon: (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  ),
                  label: "Current City",
                  value: "Riohacha",
                  color: "#f97316",
                },
                {
                  icon: (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  ),
                  label: "Hometown",
                  value: "Riohacha",
                  color: "#10b981",
                },
                {
                  icon: (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c0 1 4 3 6 3s6-2 6-3v-5" />
                    </svg>
                  ),
                  label: "Work or Study Place",
                  value: "I study at Universidad de La Guajira",
                  color: "#8b5cf6",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 rounded-xl p-3 transition-all duration-500 active:scale-[0.98] ${
                    visible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                  }`}
                  style={{
                    background: "#1e293b",
                    border: "1px solid #334155",
                    transitionDelay: `${300 + i * 100}ms`,
                  }}
                >
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                    style={{ background: `${item.color}15` }}
                  >
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs" style={{ color: "#64748b" }}>
                      {item.label}
                    </p>
                    <p className="text-sm font-medium" style={{ color: "#f1f5f9" }}>
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "interests" && (
          <div className="animate-tab-in flex flex-col gap-5">
            {/* Likes */}
            <div>
              <h3
                className="mb-2.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider"
                style={{ color: "#10b981" }}
              >
                <span
                  className="flex h-5 w-5 items-center justify-center rounded-md"
                  style={{ background: "rgba(16,185,129,0.15)" }}
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                Interests
              </h3>
              <div className="flex flex-col gap-2">
                {interests.map((item, i) => (
                  <button
                    key={i}
                    className="flex items-center gap-3 rounded-xl p-3 text-left transition-all duration-300"
                    style={{
                      background: hoveredInterest === i ? "rgba(249,115,22,0.1)" : "#1e293b",
                      border: `1px solid ${hoveredInterest === i ? "#f97316" : "#334155"}`,
                      transform: hoveredInterest === i ? "translateX(6px)" : "translateX(0)",
                      color: hoveredInterest === i ? "#f97316" : "#94a3b8",
                    }}
                    onPointerEnter={() => setHoveredInterest(i)}
                    onPointerLeave={() => setHoveredInterest(null)}
                    onTouchStart={() => setHoveredInterest(i)}
                    onTouchEnd={() => setTimeout(() => setHoveredInterest(null), 300)}
                  >
                    <div
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors duration-300"
                      style={{
                        background: hoveredInterest === i ? "rgba(249,115,22,0.2)" : "rgba(148,163,184,0.1)",
                      }}
                    >
                      <InterestIcon icon={item.icon} size={16} />
                    </div>
                    <span className="text-sm font-medium" style={{ color: "#f1f5f9" }}>
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Dislikes */}
            <div>
              <h3
                className="mb-2.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider"
                style={{ color: "#ef4444" }}
              >
                <span
                  className="flex h-5 w-5 items-center justify-center rounded-md"
                  style={{ background: "rgba(239,68,68,0.15)" }}
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="3">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </span>
                Dislikes
              </h3>
              <div className="flex flex-col gap-2">
                {dislikes.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-xl p-3 transition-all duration-300"
                    style={{ background: "#1e293b", border: "1px solid #334155", color: "#94a3b8" }}
                  >
                    <div
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                      style={{ background: "rgba(239,68,68,0.1)" }}
                    >
                      <InterestIcon icon={item.icon} size={16} />
                    </div>
                    <span className="text-sm font-medium" style={{ color: "#f1f5f9" }}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "contact" && (
          <div className="animate-tab-in flex flex-col items-center gap-5 py-4">
            <div
              className="flex h-16 w-16 items-center justify-center rounded-2xl"
              style={{ background: "rgba(249,115,22,0.15)" }}
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="1.5">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
              </svg>
            </div>
            <div className="text-center">
              <p className="text-xs uppercase tracking-wider" style={{ color: "#64748b" }}>
                Email
              </p>
              <a
                href="mailto:elkin123456789medina@gmail.com"
                className="mt-1 block text-sm font-medium break-all transition-colors duration-300"
                style={{ color: "#06b6d4" }}
              >
                elkin123456789medina@gmail.com
              </a>
            </div>

            {/* Interactive send message button */}
            <button
              className="mt-2 flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #f97316, #fb923c)",
                color: "#0f172a",
                boxShadow: "0 4px 20px rgba(249,115,22,0.4)",
              }}
              onClick={() => window.open("mailto:elkin123456789medina@gmail.com")}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
              Send Message
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
