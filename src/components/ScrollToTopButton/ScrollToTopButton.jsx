import React, { useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineArrowUp } from "react-icons/ai";
import "./style.css";

const ScrollToTop = () => {
  let toTopButtonObj = useRef(null);
  useEffect(() => {
    toTopButtonObj.current = document.querySelector(".to-top-button");
    scrollFunction();
  });
  window.onscroll = () => {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      toTopButtonObj.current.style.display = "block";
    } else {
      toTopButtonObj.current.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <Button className="to-top-button" variant="light" onClick={() => topFunction()} aria-label="Scroll to Top">
      <AiOutlineArrowUp />
    </Button>
  );
};

export default ScrollToTop;
