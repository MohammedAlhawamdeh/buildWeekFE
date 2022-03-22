import React from "react";
import { useState } from "react";
import { clients } from "../data/clients";
import { AccordionList } from "./AccordionList";

export const Accordion = () => {
  const [toggle, setToggle] = useState(null);
  let handleToggle = (id) => {
    if (toggle === id) {
      setToggle(null);
      return false;
    }
    setToggle(id);
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-4'>
          <h3>React Accordion</h3>
          <AccordionList
            accordionData={clients}
            handleToggle={handleToggle}
            toggle={toggle}
          />
        </div>
      </div>
    </div>
  );
};
