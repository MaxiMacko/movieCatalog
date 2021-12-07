import React from 'react';
import Modal from 'react-modal';
import styled from "styled-components";

Modal.setAppElement('#root');

const Root = styled.div`
  background-color: white;
  width: 200px;
  height: 200px;
`

const StyledModal = styled(Modal)`
  & .ReactModal_Overlay {
    background-color: black;
  }
`
const AddMovie = (props: any) => {
  return (
    <div>
      <StyledModal
        isOpen={props.open}
        onRequestClose={props.closeHandler}
        // style={customStyles}
      >
        <Root>This is modal</Root>
      </StyledModal>
    </div>
  );
}

export default AddMovie