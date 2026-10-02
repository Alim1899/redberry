import { useEffect } from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

const Modal = ({
  title,
  subtitle,
  onClose,
  width = 400,
  placement = "center", 
  children,
}) => {

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

 
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const backdropHandler = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return createPortal(
    <div
      className={`${classes.overlay} ${classes[placement]}`}
      onMouseDown={backdropHandler}
    >
      <div
        className={classes.card}
        style={{ width: `min(${width}px, calc(100vw - 32px))` }}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <button
          type="button"
          className={classes.close}
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        {title && <h2 className={classes.title}>{title}</h2>}
        {subtitle && <p className={classes.subtitle}>{subtitle}</p>}

        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;