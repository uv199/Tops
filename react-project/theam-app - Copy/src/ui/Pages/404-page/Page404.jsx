import { Navigate, useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

export default function Page404() {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center flex-column "
        style={{ height: "75vh", backgroundColor: "#3b5d50", color: "white" }}
      >
        <h1>Page Not found</h1>
        <Button
          onClick={() => navigate("/")}
          style={{
            backgroundColor: "white",
            color: "#3b5d50",
            border: "2px solid rgba(255, 255, 255, 0.55)",
          }}
        >
          Back to Home
        </Button>
      </div>
    </>
  );
}
