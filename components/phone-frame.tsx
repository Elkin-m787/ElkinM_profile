"use client"

import type { ReactNode } from "react"

interface PhoneFrameProps {
  children: ReactNode
}

export function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <>
      {/* Mobile: edge-to-edge, no frame */}
      <div className="block md:hidden w-full">
        {children}
      </div>

      {/* Desktop: phone frame */}
      <div className="hidden md:block relative mx-auto" style={{ width: "390px" }}>
        <div
          className="relative overflow-hidden rounded-[3rem] border-[3px] shadow-2xl"
          style={{
            borderColor: "#334155",
            background: "#0f172a",
            boxShadow: "0 0 60px rgba(249,115,22,0.15), 0 25px 50px rgba(0,0,0,0.5)",
          }}
        >
          {/* Notch */}
          <div className="absolute top-0 left-1/2 z-30 -translate-x-1/2">
            <div className="h-7 w-36 rounded-b-2xl" style={{ background: "#0f172a" }}>
              <div className="flex items-center justify-center gap-2 pt-1.5">
                <div className="h-2 w-2 rounded-full" style={{ background: "#334155" }} />
                <div className="h-1.5 w-12 rounded-full" style={{ background: "#334155" }} />
              </div>
            </div>
          </div>

          {/* Status bar */}
          <div className="relative z-20 flex items-center justify-between px-8 pt-3 pb-1">
            <span className="text-xs font-semibold" style={{ color: "#f1f5f9" }}>
              {new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true })}
            </span>
            <div className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#f1f5f9">
                <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
              </svg>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#10b981">
                <rect x="2" y="6" width="18" height="12" rx="2" stroke="#10b981" fill="none" strokeWidth="2" />
                <rect x="4" y="8" width="12" height="8" rx="1" fill="#10b981" />
                <rect x="21" y="10" width="2" height="4" rx="1" fill="#10b981" />
              </svg>
            </div>
          </div>

          {/* Content area */}
          <div className="relative overflow-hidden" style={{ height: "680px" }}>
            {children}
          </div>

          {/* Home indicator */}
          <div className="flex justify-center pb-2 pt-1">
            <div className="h-1 w-32 rounded-full" style={{ background: "#475569" }} />
          </div>
        </div>
      </div>
    </>
  )
}
