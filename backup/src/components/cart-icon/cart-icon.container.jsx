import React from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";

import CartIcon from "./cart-icon.component";

/*
https://www.apollographql.com/docs/react/data/local-state/


*/
const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;

/*
Mutations update that data  with mutations.
 This article demonstrates how to send updates to your GraphQL server 
 with the useMutation hook. You'll also learn how to update the Apollo
  Client cache after executing a mutation, and how to track loading and 
  error states for a mutation.



The Mutation component is what you'll use to trigger mutations
 from your UI. To create a Mutation component, just pass a GraphQL 
 mutation string wrapped with the gql function to this.props.mutation 
 and provide a function to this.props.children that tells React what to render.
  The Mutation component is an example of a React component that uses
   the render prop pattern. React will call the render prop function 
   you provide with a mutate function and an object with your mutation 
   result containing loading, error, called, and data properties. 
   Let's look at an example:
*/
const CartIconContainer = () => {
  return (
    <Mutation mutation={TOGGLE_CART_HIDDEN}>
      {toggleCartHidden => <CartIcon toggleCartHidden={toggleCartHidden} />}
    </Mutation>
  );
};

export default CartIconContainer;
