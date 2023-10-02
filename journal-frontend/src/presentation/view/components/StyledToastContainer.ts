import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';

const StyledToastContainer = styled(ToastContainer)`
 

  .Toastify__toast {
    padding: 12px 16px;
    border-radius: ${(props) => `1px solid ${props.theme.borderRadius.xxs}`};
    box-shadow: none;
  }

  .Toastify__toast--error {
    background-color: ${(props) => `${props.theme.colorList.system[1]}`};
  }

  .Toastify__toast--success {
    background-color: ${(props) => `${props.theme.colorList.system[3]}`};
  }

  .Toastify__toast--warning {
    background-color: ${(props) => `${props.theme.colorList.system[5]}`};
  }
`;

export default StyledToastContainer;
