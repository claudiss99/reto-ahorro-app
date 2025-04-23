import React from 'react';

const isLoggedIn = false;

const retos = [
  { id: 1, nombre: 'Reto 30 días', color: '#983496' },
  { id: 2, nombre: 'Reto 52 semanas', color: '#5F926D' },
  { id: 3, nombre: 'Reto Personalizado', color: '#FFF5C0', textColor: '#2C2832' },
];

export default function Home() {
  return (
    <div>
      {/* Sección de Bienvenida */}
      <section id="bienvenida">
        <h1>Bienvenido a RetoAhorro 👋</h1>
        <p>Tu app para ahorrar de forma divertida, organizada y personalizada.</p>
        <img src="/logo-grande.png" alt="Logo RetoAhorro" style={{ maxWidth: '200px' }} />
      </section>

      {!isLoggedIn && (
        <section id="explicacion">
          <h2>¿Cómo funciona?</h2>
          <p>
            Elige un reto de ahorro, define tu meta y sigue tu progreso día a día. También puedes
            compartir retos con amigos para motivarte aún más.
          </p>
          <p>
            Guarda consejos útiles, revisa estadísticas y recibe notificaciones que te ayudan a mantener el hábito.
          </p>
        </section>
      )}

      <section id="tips">
        <h2>Consejos de ahorro</h2>
        <ul>
          <li>Evita gastos hormiga.</li>
          <li>Define una meta y hazla visible.</li>
          <li>Usa efectivo para tener más control.</li>
        </ul>
      </section>

      <section id="retos">
        <h2>Retos disponibles</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {retos.map((reto) => (
            <button
              key={reto.id}
              onClick={() => alert(`Ir a detalles de: ${reto.nombre}`)}
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '60px',
                backgroundColor: reto.color,
                color: reto.textColor || 'white',
                border: 'none',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              {reto.nombre}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
