import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getMerchandises } from '../queries';


class MerchandiseList extends Component {

    displayMerchandise(){
        var data = this.props.data;

        console.log(this.props)
        console.log("2", data)



        if(data.loading){
            return( <div>Loading books...</div> );
        } else {
            return data.merchandises.map(merchandise => {
                return(
                    <li key={ merchandise.id } >
                    <p>{ merchandise.name }</p>
                    <p>{ merchandise.price }</p>
                    <p>{ merchandise.provider.name }</p>
                    </li>
                );
            })
        }
    }

    render(){
        return(
            <div>
                <ul>
                    { this.displayMerchandise() }
                </ul>
            </div>
        );
    }

}

export default graphql(getMerchandises)(MerchandiseList);
