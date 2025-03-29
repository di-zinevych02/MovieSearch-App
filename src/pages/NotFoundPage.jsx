import { Link } from "react-router";
export default function NotFoundPage() {
  return (
    <div>
      <p>The page not found(</p>
      <Link to="/">Home</Link>
    </div>
  );
}
