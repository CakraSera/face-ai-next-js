type Props = {};
export default function NavHeader({}: Props) {
  return (
    <header className="text-center pb-16">
      <h1
        className="text-4xl font-extrabold bg-gradient-to-r from-blue-300 via-green-400 to-green-500 text-transparent bg-clip-text shadow-lg inline-block"
        style={{ filter: "drop-shadow(0 0 10px rgba(235, 70, 150, 0.7))" }}>
        Predict Face AI
      </h1>
      <p>Predict based on your picture</p>
    </header>
  );
}
