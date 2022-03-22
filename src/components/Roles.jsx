import { v4 as uuidv4 } from "uuid";

export const Roles = ({ roles }) => {
  const rolesKeys = roles.map((role) => Object.keys(role));
  console.log("roles:", roles);
  return (
    <>
      {/* array with objects */}
      {
        roles.map((obj) =>
          console.log("1st map", obj).map((andi) => console.log("andi", andi))
        )
        // .map((andi, index) => {
        //   console.log("index", index);
        //   console.log("andi", andi[index]);
        // })
      }

      {/* {rolesKeys.map((role) => {
        console.log("role: ", role);
        console.log("roles[0][role]", roles[0][role]["enrolled"]);
        return (
          <>
            <ul key={uuidv4()}>{role}</ul>
            {roles.map((obj) =>
              obj[role]["enrolled"].map(
                ({ name, squad, level, andTitle, photo }) => {
                  <li key={uuidv4()}>
                    <p>{name}</p>
                    <p>{squad}</p>
                    <p>{level}</p>
                    <p>{andTitle}</p>
                    <img src={photo} alt='#' />
                  </li>;
                }
              )
            )}
          </>
        );
      })} */}
    </>
  );
};
