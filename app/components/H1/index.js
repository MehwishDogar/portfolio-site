import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 2em;
  margin-bottom: 0.25em;
  animation: slide 1s ease-out 1 both;
  @keyframes slide {
    from {
      opacity: 0;
      transform: perspective(500px) translate3d(-35px, -40px, -150px)
        rotate3d(1, -1, 0, 35deg);
    }
    to {
      opacity: 1;
      transform: perspective(500px) translate3d(0, 0, 0);
    }
  }
`;

export default H1;
