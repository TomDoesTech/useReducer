import { useReducer } from "react";
import products from "../products.json";

const initialState = products.reduce((acc, curr) => {
  acc[String(curr.id)] = 0;

  return acc;
}, {} as Record<string, number>);

function reducer(
  state: typeof initialState,
  action: {
    type: "add" | "subtract";
    payload: {
      productId: string;
    };
  }
) {
  if (action.type === "add") {
    return {
      ...state,
      [action.payload.productId]: state[action.payload.productId] + 1,
    };
  }

  if (action.type === "subtract") {
    return {
      ...state,
      [action.payload.productId]: Math.max(
        state[action.payload.productId] - 1,
        0
      ),
    };
  }

  throw new Error("Invalid action");
}

export default function Shop() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Shop</h1>

      {products.map((product) => {
        return (
          <li key={product.id}>
            {product.title}

            <button
              onClick={() => {
                return dispatch({
                  type: "add",
                  payload: {
                    productId: String(product.id),
                  },
                });
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                return dispatch({
                  type: "subtract",
                  payload: {
                    productId: String(product.id),
                  },
                });
              }}
            >
              -
            </button>
            {state[product.id]}
          </li>
        );
      })}
    </div>
  );
}
