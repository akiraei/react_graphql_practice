import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getMerchandise } from '../queries';


class Merchandise extends Component {

    displayMerchandise(){
        const { merchandise } = this.props.data;
        if(merchandise){
            return(
                <div>
                    <button onClick={e => (this.props.onPageChange("list",""))}>go back</button>
                    <h2>{ merchandise.name }</h2>
                    <p>{ merchandise.id }</p>
                    <p>{ merchandise.price }</p>
                    <p>{ merchandise.provider.name }</p>
                    <p>{ merchandise.provider.phone }</p>
                </div>
            );
        } else {
            return( <div>Loading...</div> );
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

export default graphql(getMerchandise, {
    // config.options is an object or a function that allows you to define the specific behavior your component should use in handling your GraphQL data.
    // it mean... props for graphQL process!!!! 
    // The specific options available for configuration depend on the operation you pass as the first argument to graphql(). There are options specific to queries and mutations.
    // You can define config.options as a plain object, or you can compute your options from a function that takes the component’s props as an argument.
    options: (props) => {
        return {
            variables: { //why variables?!... process like as variables 
                id:  // it is  for query book() of queries.js which is as gerBookQuery
                 props.id //props.bookId is from BookList.js 
            }
        }
    }
})(Merchandise);
