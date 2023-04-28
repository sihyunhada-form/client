import styled from "styled-components";

interface InputProps {
  type?: string;
  value?: any;
  onChange?: any;
  id?: string;
  width?: string;
  pointer?: string;
}

export const Input = ({
  type = "text",
  onChange,
  value = "",
  id = "",
  width = "auto",
  pointer = "auto",
}: InputProps) => {
  return (
    <StyledInput type={type} pointer={pointer} onChange={(e) => onChange(e)} value={value} id={id} width={width} />
  );
};

const StyledInput = styled.input<{ width?: string; pointer?: string }>`
  border: none;
  border-bottom: 1px solid black;
  width: ${({ width }) => width};
  font-size: 20px;
  background-color: white;
  pointer-events: ${({ pointer }) => pointer};

  &:focus {
    outline: none;
  }
`;
