import { gql } from 'apollo-boost'

const getGhanaData = gql`
   query{
       country(name:"Ghana"){
           country
           result{
               cases
               recovered
               deaths
               updated
           }
       }
   }
`

export {
    getGhanaData
}