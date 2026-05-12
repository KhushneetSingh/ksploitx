import { ImageResponse } from 'next/og';

// Image metadata
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

// Image generation
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#131313',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'monospace',
          fontSize: 48,
          fontWeight: 700,
          color: '#00ff88',
          letterSpacing: '-1px',
        }}
      >
        KX
      </div>
    ),
    { ...size }
  );
}
