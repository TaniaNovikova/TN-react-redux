import styled from "@emotion/styled";

export const GoogleLoaderWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const DotSpan = styled.span<{ color: string; delay: number }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  background-color: ${({ color }) => color};
  animation: animate 1s ease-in-out infinite alternate;
  animation-delay: ${({ delay }) => delay}s;

  @keyframes animate {
    0% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(5px);
    }
  }
`;
