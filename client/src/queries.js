import { gql } from 'apollo-boost';

const getMerchandises = gql`
    {
        merchandises {
            id
            name
            price
            provider{
                name
            }
        }
    }  
`


const getMerchandise = gql`
    query ($id: ID) {
        merchandise(id: $id) {
            id
            name
            price
            provider {
                name
                phone
            }
        }
    }
`;









export { getMerchandises, getMerchandise };