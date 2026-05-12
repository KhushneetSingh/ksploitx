import { ImageResponse } from 'next/og';

// Image metadata
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

// Image generation
export default function Icon() {
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
          fontSize: 13,
          fontWeight: 700,
          color: '#00ff88',
          letterSpacing: '-0.5px',
        }}
      >
        KX
      </div>
    ),
    { ...size }
  );
}
