import { gql } from 'apollo-boost';

const getMerchandises = gql`
    {
        merchandises {
            name
            price
            provider{
                name
            }
        }
    }  
`



export { getMerchandises };