import "./AccordionList.css";
import { AccordionProjects } from "../components/AccordionProjects";
import { v4 as uuidv4 } from "uuid";

export const AccordionList = ({ accordionData, handleToggle, toggle }) => {
  return accordionData.map((value) => {
    const { clientId, clientName, description, stackTech, logo } = value;
    return (
      <div className='card' key={clientId}>
        <div
          className='card-header'
          onClick={() => handleToggle(clientId)}
          style={{ cursor: "pointer" }}
        >
          {" "}
          <b>
            {clientId === toggle ? "-" : "+"} {clientName}
          </b>
        </div>
        {clientId === toggle ? (
          <>
            <div className='card-body'>
              <img src={logo} alt='#' /> {description}
              <h5>Tech Stack</h5>
              {stackTech.map((item, index) => {
                return <li key={uuidv4()}>{item}</li>;
              })}
            </div>
            {accordionData.map((client) => {
              console.log("client", client);
              console.log("client.clientId", client.clientId);
              console.log("clientId", clientId);
              if (client.clientId === clientId) {
                return (
                  <AccordionProjects
                    key={uuidv4()}
                    projects={client["projects"]}
                  />
                );
              }
            })}
          </>
        ) : (
          ""
        )}
      </div>
    );
  });
};
