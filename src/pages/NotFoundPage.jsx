import { Link } from "react-router";
export default function NotFoundPage() {
  return (
    <div>
      <p
      style={{
    fontSize: "24px",
    fontWeight: "bold",
    color: "var(--text-dark)",
          textAlign: "center",
    justifyContent:"center",
          marginBottom: "20px",
    padding:"20px",
      }}>The page not found(</p>
      <Link to="/" style={{
  display: "block",
  width: "70px",
  textAlign: "center",
  marginBottom: "20px",
  padding: "10px 15px",
  background: "var(--secondary-light)",
  color: "var(--text-dark)",
  textDecoration: "none",
  fontWeight: "bold",
  borderRadius: "5px",
  transition: "background 0.3s ease",
}}>Home</Link>
    </div>
  );
}
