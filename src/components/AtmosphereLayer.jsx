const particles = Array.from({ length: 9 }, (_, index) => index);

export function AtmosphereLayer() {
  return (
    <div className="atmosphere-layer" aria-hidden="true">
      <span className="atmosphere-wash atmosphere-wash-one" />
      <span className="atmosphere-wash atmosphere-wash-two" />
      <span className="atmosphere-leak" />
      <div className="ambient-particles">
        {particles.map((particle) => (
          <span
            className={`ambient-particle ambient-particle-${particle + 1}`}
            key={particle}
          />
        ))}
      </div>
    </div>
  );
}
