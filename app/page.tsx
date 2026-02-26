"use client"

import { useState } from "react"
import { HomeScreen } from "@/components/lock-screen"
import { PhoneFrame } from "@/components/phone-frame"
import { ProfileContent } from "@/components/profile-content"

export default function Home() {
  const [showProfile, setShowProfile] = useState(false)

  return (
    <main
      className="flex min-h-[100dvh] items-center justify-center md:p-4"
      style={{
        background: "radial-gradient(ellipse at top, #1e293b 0%, #0f172a 60%, #020617 100%)",
      }}
    >
      {/* Ambient glow effects - desktop only */}
      <div
        className="pointer-events-none fixed top-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full blur-3xl hidden md:block"
        style={{ background: "rgba(249,115,22,0.08)" }}
      />
      <div
        className="pointer-events-none fixed right-0 bottom-0 h-72 w-72 rounded-full blur-3xl hidden md:block"
        style={{ background: "rgba(6,182,212,0.06)" }}
      />

      <PhoneFrame>
        {!showProfile ? (
          <HomeScreen onOpenProfile={() => setShowProfile(true)} />
        ) : (
          <ProfileContent onBack={() => setShowProfile(false)} />
        )}
      </PhoneFrame>

      <style jsx global>{`
        @keyframes pulse-ring {
          0% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.08); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-pulse-ring {
          animation: pulse-ring 2s ease-in-out infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        @keyframes tab-in {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-tab-in {
          animation: tab-in 0.4s ease-out;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 3px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: #334155;
          border-radius: 10px;
        }
      `}</style>
    </main>
  )
}
