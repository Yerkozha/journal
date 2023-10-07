import styled from "styled-components"

const WrapperLeftSide = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 40px 80px;
  background-color: ${props => props.theme.colorList.brand[0]};
`
const WrapperRightSide = styled.div`
  display: flex;
  flex-direction: column;
  
`
const ListSocials = styled.ul`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
`
const FormSide = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  position: relative;
`
const InnerForm = styled.div`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 400px;
  width: 100%;
  transform: translate(-50%, -50%);
  input {
    padding: 9px 15px;
    border: none;
    outline: 1px solid #E4E9F2;
    border-radius: 6px;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    button {
      margin-top: 20px;
    }
  }
  
`

export {
    WrapperLeftSide,
    WrapperRightSide,
    ListSocials,
    FormSide,
    InnerForm
}