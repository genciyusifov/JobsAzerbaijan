import React from "react";
import { Button, Modal } from "antd";
import { createContext } from "react";

export const MyModalContext = createContext();

export function MyModalProvider({ children }) {
  const [Component, setComponent] = React.useState(null);
  const [ComponentProps, setProps] = React.useState({
    open: false,
  });

  function setMyModal({ Component: newComponent, ...newProps }) {
    if (!newProps.width) newProps.width = 500;

    if (newProps.open === true) {
      setComponent(newComponent);
    } else {
      ComponentProps.className = ""
      setComponent(null);
    }

    setProps({
      ...ComponentProps,
      ...newProps,
    });
  }
  function handleClose() {
    if (ComponentProps.forceToStay !== true) {
      setProps({ ...ComponentProps, open: false });
    }
  }

  return (
    <MyModalContext.Provider value={{ Component, ComponentProps, setMyModal }}>
      {children}
      <Modal
        closable={false}
        footer={null}
        {...ComponentProps}
        open={ComponentProps?.open}
        width={ComponentProps.width}
        okType='default'
        onCancel={ComponentProps?.handleClose ?? handleClose}
      >
        {Component && ComponentProps?.open === true ? <>{Component}</> : <></>}
      </Modal>
    </MyModalContext.Provider>
  );
}
export default MyModalProvider;
