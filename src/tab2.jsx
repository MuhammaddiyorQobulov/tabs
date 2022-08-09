import { useState } from "react";
import getUser from "./get-users";

function Tab2() {
  const [state, setState] = useState(undefined);
  return (
    <div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      {state ? (
        <button
          onClick={() => {
            setState(undefined);
          }}
        >
          Clear Users
        </button>
      ) : (
        <button
          onClick={() => {
            const state = getUser(5);
            setState(state);
          }}
        >
          GetUser
        </button>
      )}
    </div>
  );
}

export default Tab2;
