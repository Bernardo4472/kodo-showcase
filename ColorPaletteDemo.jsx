import React from 'react';

// Color Palette Component Demo
const ColorPaletteDemo = () => {
  const colors = {
    darkCharcoal: '#1a1f1e',
    deepForest: '#2a3830',
    forestGreen: '#3d5545',
    mossGreen: '#4a6b52',
    sageGreen: '#5a8062',
    mintCream: '#d4d9c8',
    warmBeige: '#e8e4c8',
    paleCream: '#f2efd8',
  };

  const gradientStops = [
    '#0d0f0e',
    '#1a1f1e',
    '#2a3830',
    '#3d5545',
    '#5a8062',
    '#a5b898',
    '#d4d9c8',
    '#e8e4c8',
  ];

  return (
    <div style={{ padding: '40px', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ marginBottom: '40px', color: colors.darkCharcoal }}>
        Forest Gradient Color Palette
      </h1>

      {/* Main Gradient Display */}
      <div
        style={{
          width: '100%',
          height: '300px',
          background: `linear-gradient(135deg, ${gradientStops.join(', ')})`,
          borderRadius: '16px',
          marginBottom: '40px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
        }}
      />

      {/* Color Swatches */}
      <h2 style={{ marginBottom: '20px', color: colors.darkCharcoal }}>
        Primary Colors
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' }}>
        {Object.entries(colors).map(([name, hex]) => (
          <div
            key={name}
            style={{
              border: `1px solid ${colors.darkCharcoal}20`,
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}
          >
            <div
              style={{
                height: '120px',
                backgroundColor: hex,
              }}
            />
            <div style={{ padding: '16px', backgroundColor: 'white' }}>
              <div style={{ fontWeight: '600', marginBottom: '4px', textTransform: 'capitalize' }}>
                {name.replace(/([A-Z])/g, ' $1').trim()}
              </div>
              <div style={{ fontFamily: 'monospace', fontSize: '14px', color: '#666' }}>
                {hex.toUpperCase()}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Gradient Variations */}
      <h2 style={{ marginBottom: '20px', color: colors.darkCharcoal }}>
        Gradient Variations
      </h2>
      <div style={{ display: 'grid', gap: '20px', marginBottom: '40px' }}>
        {/* Diagonal Gradient */}
        <div style={{ height: '150px', background: `linear-gradient(135deg, ${gradientStops.join(', ')})`, borderRadius: '12px' }}>
          <div style={{ padding: '20px', color: 'white', fontWeight: '600' }}>
            135° Diagonal Gradient
          </div>
        </div>

        {/* Horizontal Gradient */}
        <div style={{ height: '150px', background: `linear-gradient(to right, ${gradientStops.join(', ')})`, borderRadius: '12px' }}>
          <div style={{ padding: '20px', color: 'white', fontWeight: '600' }}>
            Horizontal Gradient
          </div>
        </div>

        {/* Vertical Gradient */}
        <div style={{ height: '150px', background: `linear-gradient(to bottom, ${gradientStops.join(', ')})`, borderRadius: '12px' }}>
          <div style={{ padding: '20px', color: 'white', fontWeight: '600' }}>
            Vertical Gradient
          </div>
        </div>

        {/* Radial Gradient */}
        <div style={{ height: '150px', background: `radial-gradient(circle, ${gradientStops.join(', ')})`, borderRadius: '12px' }}>
          <div style={{ padding: '20px', color: 'white', fontWeight: '600' }}>
            Radial Gradient
          </div>
        </div>
      </div>

      {/* Usage Examples */}
      <h2 style={{ marginBottom: '20px', color: colors.darkCharcoal }}>
        Usage Examples
      </h2>
      <div style={{ display: 'grid', gap: '20px' }}>
        {/* Card Example */}
        <div
          style={{
            background: `linear-gradient(135deg, ${colors.darkCharcoal}, ${colors.deepForest})`,
            padding: '40px',
            borderRadius: '16px',
            color: colors.paleCream,
          }}
        >
          <h3 style={{ marginBottom: '16px', color: colors.warmBeige }}>
            Dark Card with Gradient Background
          </h3>
          <p style={{ lineHeight: '1.6', color: colors.mintCream }}>
            Perfect for hero sections, featured content, or call-to-action areas.
            The dark forest tones create depth and sophistication.
          </p>
        </div>

        {/* Light Card Example */}
        <div
          style={{
            background: `linear-gradient(135deg, ${colors.mintCream}, ${colors.paleCream})`,
            padding: '40px',
            borderRadius: '16px',
            color: colors.darkCharcoal,
          }}
        >
          <h3 style={{ marginBottom: '16px', color: colors.forestGreen }}>
            Light Card with Soft Gradient
          </h3>
          <p style={{ lineHeight: '1.6', color: colors.deepForest }}>
            Ideal for content sections, testimonials, or secondary information.
            The soft cream tones feel welcoming and organic.
          </p>
        </div>

        {/* Button Examples */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <button
            style={{
              background: `linear-gradient(135deg, ${colors.forestGreen}, ${colors.sageGreen})`,
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer',
            }}
          >
            Primary Button
          </button>
          <button
            style={{
              background: 'transparent',
              color: colors.forestGreen,
              border: `2px solid ${colors.forestGreen}`,
              padding: '12px 24px',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer',
            }}
          >
            Secondary Button
          </button>
          <button
            style={{
              background: `linear-gradient(135deg, ${colors.mintCream}, ${colors.warmBeige})`,
              color: colors.darkCharcoal,
              border: 'none',
              padding: '12px 24px',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer',
            }}
          >
            Tertiary Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColorPaletteDemo;