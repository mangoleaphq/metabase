/* eslint-disable react/prop-types */
import React from "react";

import { t } from "ttag";
import ModalContent from "metabase/components/ModalContent";

import Button from "metabase/core/components/Button";

const nop = () => {};

const ConfirmContent = ({
  title,
  content,
  message = t`Are you sure you want to do this?`,
  onClose = nop,
  onAction = nop,
  onCancel = nop,
  confirmButtonText = t`Yes`,
  cancelButtonText = t`Cancel`,
}) => (
  <ModalContent
    title={title}
    formModal
    onClose={() => {
      onCancel();
      onClose();
    }}
  >
    <div>{content}</div>

    <p className="mb4">{message}</p>

    <div className="ml-auto">
      <Button
        onClick={() => {
          onCancel();
          onClose();
        }}
      >
        {cancelButtonText}
      </Button>
      <Button
        danger
        ml={2}
        onClick={() => {
          onAction();
          onClose();
        }}
      >
        {confirmButtonText}
      </Button>
    </div>
  </ModalContent>
);

export default ConfirmContent;
