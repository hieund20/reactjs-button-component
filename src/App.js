import "./App.scss";
import Button from "./lib/components/Button";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "center",
        gap: "1.5rem",
        padding: "5rem",
      }}
    >
      <p>Wow, look at this component library.</p>
      <h5>A notification badge:</h5>
      <br />
      <h5>A button:</h5>
      <Button
        text="Hello World"
        variant="text"
        textColor="#0292bf"
        size="large"
        startIcon={
          <img
            src="https://res.cloudinary.com/dna6tju5f/image/upload/v1684659025/image-uploader-master/con-meo-tieng-trung-la-gi_vr27kl.png"
            width={20}
            height={20}
          />
        }
      />
    </div>
  );
}

export default App;
