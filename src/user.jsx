import React from "react";
import classes from "./user.module.scss";
import cx from "classnames";

const User = ({ user }) => {
  const { id, name, city, age, color, pointer, hover } = user;
  return (
    <tr
      className={cx(
        classes.tr,
        classes[`tr--${color}`],
        pointer && classes.pointer,
        hover && classes.hover
      )}
    >
      <td>#{id}</td>
      <td>{name}</td>
      <td>{age}</td>
      <td>{city}</td>
      <td>Action</td>
    </tr>
  );
};

export default User;
