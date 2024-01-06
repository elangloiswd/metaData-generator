import React, { useRef, useState } from "react";
import { Modal, Button } from "react-bootstrap";

const CopyToClipboardModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} className="modal-md">
      <Modal.Header closeButton>
        <Modal.Title className="mx-auto">
          Content copied to clipboard
        </Modal.Title>
      </Modal.Header>
    </Modal>
  );
};

const CopyToClipboardButton = ({ onClick }) => {
  return (
    <Button className="btn btn-primary" onClick={onClick}>
      Copy to Clipboard
    </Button>
  );
};

const GenerateMetaTags = ({ metaTags }) => {
  const metaTagsRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

  const copyToClipboard = () => {
    if (metaTagsRef.current) {
      const range = document.createRange();
      range.selectNode(metaTagsRef.current);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      document.execCommand("copy");
      window.getSelection().removeAllRanges();
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
      }, 850);
    }
  };

  return (
    <div className="meta-tag-container py-4 d-flex flex-column justify-content-center mb-3">
      <div className="generatedMetaTags m-auto" ref={metaTagsRef}>
        {metaTags ? (
          <pre>
            <code>{metaTags}</code>
          </pre>
        ) : (
          <p>No meta tags generated yet.</p>
        )}
      </div>
      <div className="m-auto">
        <CopyToClipboardButton onClick={copyToClipboard} />
      </div>
      <CopyToClipboardModal
        show={showModal}
        handleClose={() => setShowModal(false)}
      />
    </div>
  );
};

export default GenerateMetaTags;
