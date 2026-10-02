import { InputContainer } from './styles';

function Input({ id, value, onChange, placeholder, disabled }) {
  return (
    <InputContainer>
      <input
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        autoComplete="off"
        required
      />
    </InputContainer>
  )
}

export default Input;