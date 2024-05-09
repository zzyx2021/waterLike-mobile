import { gql } from "@apollo/client";

export const FIND = gql`
  query find($id: String!) {
    Find(id: $id) {
      name,
      desc,
      id
    }
  }
`