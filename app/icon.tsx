import { ImageResponse } from "next/og"

export const size = { width: 32, height: 32 }
export const contentType = "image/png"

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: 32,
                    height: 32,
                    background: "linear-gradient(135deg, #0a0a1a 0%, #0f0f2e 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 4,
                    position: "relative",
                }}
            >
                {/* Gold outer glow ring */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: 4,
                        border: "1px solid rgba(212, 175, 55, 0.35)",
                    }}
                />
                {/* Gold sparkle ✦ */}
                <div
                    style={{
                        fontSize: 18,
                        lineHeight: 1,
                        background: "linear-gradient(135deg, #F5D78E 0%, #D4AF37 50%, #B8860B 100%)",
                        WebkitBackgroundClip: "text",
                        color: "#D4AF37",
                        fontWeight: 700,
                        display: "flex",
                    }}
                >
                    ✦
                </div>
            </div>
        ),
        { ...size }
    )
}
