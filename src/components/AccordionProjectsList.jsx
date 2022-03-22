import { Roles } from "./Roles";

export const AccordionProjectsList = ({
  accordionData,
  handleToggle,
  toggle,
}) => {
  return accordionData.map((value) => {
    const {
      projectId,
      projectName,
      description,
      lead,
      start,
      end,
      clientContact,
      roles,
    } = value;
    return (
      <div className='card' key={projectId}>
        <div
          className='card-header'
          onClick={() => handleToggle(projectId)}
          style={{ cursor: "pointer" }}
        >
          {" "}
          <b>
            {projectId === toggle ? "-" : "+"} {projectName}
          </b>
        </div>
        {projectId === toggle ? (
          <>
            <div className='card-body'>
              <h4>{description}</h4>
              <p>{lead}</p>
              <p>{start}</p>
              <p>{end}</p>
              <p>{clientContact}</p>
              {console.log(<Roles roles={roles} />)}
              <Roles roles={roles} />
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    );
  });
};
