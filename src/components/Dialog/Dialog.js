import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Dialog as DialogBase, Pop } from "wowjoy-component";
const Wrap = styled.div`
  ${props => props.defaultStyles};
`;
const DialogBox = styled(DialogBase)`
`
class Dialog extends PureComponent {
  closeHandle = e => {
    const { onClose } = this.props;
    onClose && onClose(e);
  };

  render() {
    const {
      className,
      defaultStyles,
      children,
      getContainer,
      autoClose,
      translate,
      visible,
      layer,
      header,
      title,
      btns,
      btnsText,
      onBtnsClick,
      showCloseBtn
    } = this.props;
    return (
      <Pop
        visible={visible}
        defaultStyles={defaultStyles}
        className={className}
        getContainer={getContainer}
        layer={layer}
        onClose={this.closeHandle}
        autoClose={autoClose}
        translate={translate}
      >
        <DialogBox
          className={"wj-dialog-box"}
          header={header}
          headerText={title}
          btns={btns}
          btnsText={btnsText}
          onClick={onBtnsClick}
          onClose={this.closeHandle}
          showCloseBtn={showCloseBtn}
        >
          {children}
        </DialogBox>
      </Pop>
    );
  }
}

Dialog.propTypes = {
  className: PropTypes.string,
  defaultStyles: PropTypes.string
};
export default Dialog;