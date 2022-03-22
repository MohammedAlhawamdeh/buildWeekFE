import { v4 as uuidv4 } from "uuid";

export const Roles = ({ roles }) => {
  const rolesKeys = roles.map((role) => Object.keys(role));
  console.log("roles:", roles);
  return (
    <>
      {rolesKeys.map((key) => {
        return roles.map((role) => {
          let andi2;
          if (role[key]) {
            andi2 = role[key]["enrolled"].map(
              ({ name, squad, role, level, andTitle, photo }) => {
                console.log(name, role);
                return (
                  <ul key={uuidv4()}>
                    {key}
                    <li key={uuidv4()}>
                      <p>Name: {name}</p>
                      <p>Squad: {squad}</p>
                      <p>Level: {level}</p>
                      <p>And title: {andTitle}</p>
                      <img src={photo} alt='#' />
                    </li>
                  </ul>
                );
              }
            );
          }
          return andi2;
        });
      })}
    </>
  );
};
