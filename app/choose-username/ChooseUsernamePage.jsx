// app/choose-username/page.tsx
'use client'; // ✅ OBLIGATOIRE pour utiliser les hooks comme useState

import { useState } from 'react';
export default function ChooseUsernamePage() {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === '') return alert('Choisissez un nom d’utilisateur.');
    // Ajoute ici ta logique d'enregistrement du pseudo
    alert(`Pseudo choisi : ${username}`);
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h1 style={styles.title}>Choisissez un nom d'utilisateur</h1>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            placeholder="ex: utilisateur123"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            ✅ Valider
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
 pageBackground: {
    backgroundImage: "url('/images/background.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
  },

    
  wrapper: {
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #f1f5f9, #e0f7fa)',
    padding: '20px',
  },
  card: {
    width: '100%',
    maxWidth: '400px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
    padding: '40px 30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: '22px',
    fontWeight: '600',
    color: '#333',
    marginBottom: '25px',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  input: {
    padding: '12px 15px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
    outlineColor: '#007bff',
  },
  button: {
    padding: '12px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  },
};
