import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import Header from "./header.component";

const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
  }
`;
/*
Query components in order to fetch GraphQL data and attach the
 result to your UI. You'll also learn how Apollo Client simplifies
  your data management code by tracking error and loading states for you.


The Query component is one of the most important building blocks 
of your Apollo application. To create a Query component, 
just pass a GraphQL query string wrapped with the gql function to
 this.props.query and provide a function to this.props.children 
 that tells React what to render. The Query component is an example of
  a React component that uses the render prop pattern.
   React will call the render prop function you provide with 
   an object from Apollo Client containing loading, error,
    and data properties that you can use to render your UI. Let's 
    look at an example:
*/
const HeaderContainer = () => {
  return (
    <Query query={GET_CART_HIDDEN}>
      {({ data: { cartHidden } }) => <Header hidden={cartHidden} />}
    </Query>
  );
};
export default HeaderContainer;
