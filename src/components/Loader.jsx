import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className="canvas-loader"></span>
      <p
        style={{
          fontSize: 14,
          color: "#915EFF",
          fontWeight: 800,
          marginTop: 40,
          letterSpacing: "1px",
          textShadow: "0 0 10px rgba(145, 94, 255, 0.5)",
        }}
      >
        {progress.toFixed(0)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;