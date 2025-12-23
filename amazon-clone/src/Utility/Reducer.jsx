// import { useReducer } from "react";
// import { Type } from "./action.type";

// export const initialState = {
//   basket: [],
// };
// export const Reducer = (state, action) => {
//   switch (action.type) {
//     case Type.ADD_TO_BASKET:
//       const existingItem = state.basket.find(
//         (item) => item.id === action.item.id
//       );
//       if (!existingItem) {
//         return {
//           ...state,
//           basket: [...state.basket, { ...action.item, value: 1 }],
//         };
//       } else {
//         const updatedBasket = state.basket.map((item) => {
//           return item.id === action.item.id
//             ? { ...item, value: item.value + 1 }
//             : item;
//         });
//         return {
//           ...state,
//           basket: updatedBasket,
//         };
//       }

//     case Type.REMOVE_FROM_BASKET:
//       const index = state.basket.findIndex((item) => item.id === action.id);
//       let newBasket = [...state.basket];

//       if (index >= 0) {
//         if (newBasket[index].value > 1) {
//           newBasket[index] = {
//             ...newBasket[index],
//             value: newBasket[index].value - 1,
//           };
//         } else {
//           newBasket.splice(index, 1);
//         }
//       }
//       return {
//         ...state,
//         basket: newBasket,
//       };

//     default:
//       return state;
//   }
// };

import { useReducer } from "react";
import { Type } from "./action.type";

export const initialState = {
  basket: [],
};

export const Reducer = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_BASKET: {
      const existingItem = state.basket.find(
        (item) => item.id === action.item.id
      );

      if (!existingItem) {
        return {
          ...state,
          basket: [{ ...action.item, value: 1 }, ...state.basket], // ✅ FIRST
        };
      } else {
        const updatedBasket = state.basket.map((item) =>
          item.id === action.item.id ? { ...item, value: item.value + 1 } : item
        );

        return {
          ...state,
          basket: updatedBasket,
        };
      }
    }

    case Type.REMOVE_FROM_BASKET: {
      const index = state.basket.findIndex((item) => item.id === action.id);

      let newBasket = [...state.basket];

      if (index >= 0) {
        if (newBasket[index].value > 1) {
          newBasket[index] = {
            ...newBasket[index],
            value: newBasket[index].value - 1,
          };
        } else {
          newBasket.splice(index, 1);
        }
      }

      return {
        ...state,
        basket: newBasket,
      };
    }

    default:
      return state;
  }
};
