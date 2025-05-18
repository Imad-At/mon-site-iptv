'use client';
import Link from "next/link";
import Image from "next/image";



export default function Home() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
      <div style={styles.logoTopLeft}>
  <Image
    src="/logo.png"
    alt="Logo"
    width={80}
    height={80}
  />
</div>


        <h1 style={styles.title}>Bienvenue sur DOK PLAYER</h1>
        <p style={styles.subtitle}>
          Votre plateforme IPTV sécurisée, rapide et fiable.
        </p>

        <Link href="/auth" style={styles.button}>
          Entrer dans l'application
        </Link>

        {/* Animation CSS */}
        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    minHeight: "100vh",
    background: "linear-gradient(to bottom, #e0f7fa, #f0f8ff)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  card: {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    textAlign: "center",
    maxWidth: "400px",
    width: "100%",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#333",
  },
  subtitle: {
    fontSize: "16px",
    color: "#666",
    marginBottom: "30px",
  },
  button: {
    display: "inline-block",
    padding: "12px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
  },
};






     