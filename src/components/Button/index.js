import { ButtonContainer } from './styles';

function Button({ children = 'Buscar', disabled = false }) {
  return (
    <ButtonContainer type="submit" disabled={disabled}>
      {children}
    </ButtonContainer>
  )
}

export default Button;