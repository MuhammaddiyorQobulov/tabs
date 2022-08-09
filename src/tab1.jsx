import "./tab1.scss";
import getUser from "./get-users";
import User from "./user";
function Tab1() {
  const users = getUser();
  console.log(users);
  return (
    <table className="tab1">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
          <th>City</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, idx) => (
          <User key={user.id} user={user} />
        ))}
      </tbody>
    </table>
  );
}

export default Tab1;
