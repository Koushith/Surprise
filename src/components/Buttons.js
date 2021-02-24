import styled from 'styled-components';

const primaryBlue = '#030086';

// Reusable button- create a base button and make it to inherit

const Button = styled.button`
  padding: 12px 24px;
  font-size: 1rem;
  border-radius: 2px;
  cursor: pointer;
  font-family: 'Roboto Mono', monospace;
`;

// inherit from above base button
const PrimaryButton = styled(Button)`
  background-color: ${primaryBlue};
  border: none;
  color: #fff;
`;

export const SecondaryButton = styled(Button)`
  background: none;
  border: 1px solid ${primaryBlue};
  color: ${primaryBlue};
`;

export const TertiaryButton = styled(Button)`
  background: none;
  border: none;
  color: ${primaryBlue};
`;

export default PrimaryButton;
