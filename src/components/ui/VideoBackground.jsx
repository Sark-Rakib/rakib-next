"use client"

import { useRef, useState } from "react"

export default function VideoBackground() {
  const [loaded, setLoaded] = useState(false)
  const videoRef = useRef(null)

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        onLoadedData={() => setLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          loaded ? "opacity-15" : "opacity-0"
        }`}
      >
        <source src="/13522087-uhd_3840_2160_24fps.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/80" />
      <div className="absolute inset-0 grid-overlay" />
    </div>
  )
}
