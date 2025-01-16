import { DotSpan, GoogleLoaderWrapper } from "./styles";

function GoogleLoader() {
  const colors = ["#ffcc00", "#008800", "#008ae6", "#e60000"];
  

  return (
    <GoogleLoaderWrapper>
      {colors.map((color, index) => (
        <DotSpan key={index} color={color} delay={index * 0.2} />
      ))}
    </GoogleLoaderWrapper>
  );
}

export default GoogleLoader;
