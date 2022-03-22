import { v4 as uuidv4 } from "uuid";

export const Roles = ({ roles }) => {
  const rolesKeys = roles.map((role) => Object.keys(role));
  console.log("roles:", roles);
  return (
    <>
      {rolesKeys.map((key) =>
        roles.map((role) => {
          if (role[key]) {
            role[key]["enrolled"].map(
              ({ name, squad, role, level, andTitle, photo }) => {
                console.log(name, role);
                return (
                  <>
                    <li key={uuidv4()}>
                      <p>{name}</p>
                      <p>{squad}</p>
                      <p>{level}</p>
                      <p>{andTitle}</p>
                      {/* <img src={photo} alt='#' /> */}
                    </li>
                  </>
                );
              }
            );
          } else {
            return null;
          }
        })
      )}
    </>
  );
};
