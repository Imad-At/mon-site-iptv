'use client';
import { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../lib/firebase';
import Link from 'next/link';
import Image from 'next/image';




export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleReset = async () => {
    if (!email) {
      setMessage('❌ Veuillez entrer votre adresse e-mail.');
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('✅ Lien envoyé ! Vérifie ta boîte mail.');
    } catch (error) {
      setMessage(`❌ Erreur : ${error.message}`);
    }
  };

  return (
    
    <div style={styles.wrapper}>
       <div style={styles.header}>
              <Image
                src="/logo.png" // Assure-toi que ce fichier existe dans /public
                alt="Logo"
                width={180}
                height={180}
              />
            </div>
      <div style={styles.card}>
        <h1 style={styles.title}>🔐 Réinitialiser votre mot de passe</h1>

        <p style={styles.subtitle}>Entrez votre adresse e-mail pour recevoir un lien sécurisé.</p>

        <input
          type="email"
          placeholder="exemple@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <button onClick={handleReset} style={styles.button}>
          Envoyer le lien
        </button>

        <Link href="/auth" style={styles.link}>
          ⬅ Retour à la connexion
        </Link>

        {message && (
          <p
            style={{
              ...styles.message,
              backgroundColor: message.includes('❌') ? '#ffe5e5' : '#e7f9ef',
              color: message.includes('❌') ? '#d10000' : '#155724',
              border: `1px solid ${message.includes('❌') ? '#f5c6cb' : '#c3e6cb'}`,
            }}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: '100vh',
    backgroundImage: 'url("/images/background.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  padding: '40px',
  position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    position: 'absolute',
    top: '-45px',
    left: '30px',
  },

  card: {
    width: '100%',
    maxWidth: '420px',
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 0 20px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  title: {
    marginBottom: '10px',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    marginBottom: '20px',
    fontSize: '14px',
    color: '#666',
  },
  input: {
    width: '100%',
    padding: '12px',
    marginBottom: '16px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background 0.3s',
  },
  link: {
    display: 'block',
    marginTop: '20px',
    fontSize: '14px',
    textDecoration: 'underline',
    color: '#007bff',
    cursor: 'pointer',
  },
  message: {
    marginTop: '20px',
    padding: '10px',
    borderRadius: '5px',
    fontWeight: 'bold',
  },
};
