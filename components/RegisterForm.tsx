import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function RegisterForm() {
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
  
    if (error) {
      setError(error.message);
      return;
    }
  
    const user = data.user;
  
    if (!user) {
      setError('No se pudo obtener el ID del usuario.');
      return;
    }
  
    const { error: insertError } = await supabase.from('usuario').insert({
      id: user.id,
      nombre,
      apellidos,
      nickname,
      fecha_registro: new Date().toISOString(),
    });
  
    if (insertError) {
      setError(insertError.message);
    } else {
      alert('Registro completo');
    }
  };



  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="text"
        placeholder="Apellidos"
        value={apellidos}
        onChange={(e) => setApellidos(e.target.value)}
      />
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button type="submit" onClick={handleRegister}>
        Registrarse
      </button>
    </form>
  );
}
