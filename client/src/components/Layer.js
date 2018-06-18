import React, { Component } from 'react';
import Head from './Head'
import MerchandiseList from './MerchandiseList'
import Merchandise from './Merchandise'

class Layer extends Component {

    state = {
        page: "list",
        merchandiseId: "5b26583d3446441ce89d5554"
    }

    pageChange = (p, id) => {
        console.log(p)
        this.setState({page: p})
        if(this.state.page === "list"){
            this.setState({merchandiseId: id})
        }
    }

    render(){
            if(this.state.page === "list"){
                return (
                    <div>
                        <Head/>
                        <MerchandiseList onPageChange={this.pageChange}/>
                    </div>
                ) 
            } else {
                return ( 
                    <div>
                        <Head/>
                        <Merchandise
                         onPageChange={this.pageChange}
                         id={this.state.merchandiseId} />
                    </div>
            )
        }
    }
}

export default Layer;
