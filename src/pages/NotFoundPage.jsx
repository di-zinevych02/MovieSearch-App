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
      <Link to="/">Home</Link>
    </div>
  );
}
