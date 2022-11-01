import { useReducer } from "react";
import styles from "../styles/Home.module.css";

const initialState = {
  count: 0,
};

function reducer(
  state: typeof initialState,
  action: "increment" | "decrement" | "reset"
) {
  if (action === "increment") {
    return {
      count: state.count + 1,
    };
  }

  if (action === "decrement") {
    return {
      count: state.count - 1,
    };
  }

  if (action === "reset") {
    return initialState;
  }
  throw new Error("Invalid action");
}

export default function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {state.count}

        <button onClick={() => dispatch("increment")}>+</button>
        <button onClick={() => dispatch("decrement")}>-</button>
        <button onClick={() => dispatch("reset")}>reset</button>
      </main>
    </div>
  );
}
