'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function ChooseUsernamePage() {
  const [username, setUsername] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) {
      alert('❌ Veuillez entrer un nom d’utilisateur.');
      return;
    }
    alert(`✅ Nom d’utilisateur choisi : ${username}`);
  };

  return (
    <div style={styles.wrapper}>
      {/* LOGO EN HAUT À GAUCHE */}
      <div style={styles.header}>
        <Image
          src="/logo.png" // Assure-toi que ce fichier existe dans /public
          alt="Logo"
          width={180}
          height={180}
        />
      </div>

      {/* CONTENU CENTRÉ */}
      <div style={styles.card}>
        <h1 style={styles.title}>Choisissez Votre Identifiant</h1>
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



const styles: { [key: string]: React.CSSProperties } = {
    pageBackground: {
        backgroundImage: "url('/images/background.jpg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh',
      },
      wrapper: {
        minHeight: '100vh',
        backgroundImage: 'url("/images/background.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '40px',
        position: 'relative',
      },
      
  header: {
    position: 'absolute',
    top: '-45px',
    left: '30px',
  },
  card: {
    maxWidth: '400px',
    margin: '80px auto 0 auto', // centrage vertical avec espace en haut
    backgroundColor: 'white',
    borderRadius: '16px',
    boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
    padding: '40px 30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: '30px',
  },
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '14px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    marginBottom: '20px',
  },
  button: {
    padding: '14px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

