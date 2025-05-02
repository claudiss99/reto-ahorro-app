import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError(error.message);
    } else {
      alert('¡Sesión iniciada!');
      // redirige o actualiza estado global
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Correo" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit" onClick={handleLogin}>Iniciar sesión</button>
    </form>
  );
}
