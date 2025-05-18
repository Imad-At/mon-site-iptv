// pages/auth.js
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { auth } from '../lib/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import Header from '../components/Header';

export default function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSignup = async () => {
    try {
      if (!email || !password) {
        alert("Veuillez remplir tous les champs.");
        return;
      }

      if (password.length < 6) {
        alert("Le mot de passe doit contenir au moins 6 caractères.");
        return;
      }

      await createUserWithEmailAndPassword(auth, email, password);
      setMessage('✅ Inscription réussie !');
      router.push("/choose-username"); // redirection
    } catch (error) {
      setMessage(
        error.code === 'auth/email-already-in-use'
          ? '❌ Cet e-mail est déjà utilisé.'
          : `❌ Erreur : ${error.message}`
      );
    }
  };

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMessage('✅ Connexion réussie !');
    } catch (error) {
      setMessage(`❌ Erreur : ${error.message}`);
    }
  };

  return (
    <>
      <Header />
      <div style={styles.pageBackground}>
        <div style={styles.wrapper}>
          <div style={styles.card}>
            <h2 style={styles.title}>Bienvenue sur DOK PLAYER</h2>

            <input
              type="email"
              placeholder="Adresse e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
            />
            <input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />

            <button onClick={handleLogin} style={styles.loginButton}>
              Se connecter
            </button>
            <button onClick={handleSignup} style={styles.signupButton}>
              S'inscrire
            </button>

            <Link href="/forgot-password" style={styles.link}>
              Mot de passe oublié ?
            </Link>

            {message && (
              <p
                style={{
                  ...styles.message,
                  backgroundColor: message.includes('❌') ? '#ffe5e5' : '#e7f9ef',
                  color: message.includes('❌') ? '#d10000' : '#155724',
                  border: `1px solid ${
                    message.includes('❌') ? '#f5c6cb' : '#c3e6cb'
                  }`,
                }}
              >
                {message}
              </p>
            )}
          </div>
        </div>
         {/* ✅ NOUVELLE SECTION EN BAS */}
      <div style={styles.bottomSection}>
        <h3 style={styles.bottomTitle}>Pourquoi choisir DOK PLAYER ?</h3>
        <p style={styles.bottomText}>
          Profitez d’une IPTV rapide, fluide et sécurisée, accessible partout.
        </p>
        <p style={styles.bottomText}>
          Pour toute question, consultez notre <Link href="/faq" style={styles.footerLink}>FAQ</Link> ou contactez-nous.
        </p>
      </div>

      <footer style={styles.footer}>
        <p>&copy; 2025 DOK PLAYER — Tous droits réservés</p>
        <Link href="/contact" style={styles.footerLink}>Contact</Link>
      </footer>
    </div>
  </>
  );
}


// STYLES
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
    paddingTop: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '100%',
    maxWidth: '420px',
    backgroundColor: '',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(238, 22, 22, 0.51)',
    textAlign: 'center',
  },
  title: {
    marginBottom: '20px',
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    marginBottom: '15px',
    padding: '12px',
    width: '100%',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  loginButton: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    marginBottom: '10px',
    cursor: 'pointer',
  },
  signupButton: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#2196F3',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    marginBottom: '10px',
    cursor: 'pointer',
  },
  link: {
    display: 'block',
    marginTop: '10px',
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
  footer: {
    padding: '120px',
    textAlign: 'center',
    fontSize: '14px',
    color: '#888',
  },

  bottomSection: {
    padding: '40px 20px',
    backgroundColor: 'rgba(133, 206, 248, 0.71)',
    textAlign: 'center',
    marginTop: '50px',
    borderTop: '1px solid #D5F4FF',
  },

  bottomTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },

  bottomText: {
    fontSize: '15px',
    color: '#444',
    marginBottom: '10px',
  },

  footerLink: {
    color: '#007bff',
    textDecoration: 'underline',
    marginLeft: '5px',
    marginRight: '5px',
    cursor: 'pointer',
  },

};

