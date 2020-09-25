import React from 'react';
import axios from 'axios';

export default class Reviews extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            reviews: [],
        }
        this.getReviews= this.getReviews.bind(this);
    }
    componentDidMount(){
        this.getReviews();
    }

    getReviews(){
        axios.get('/api/reviews/all')
            .then((results) => {
                this.setState({
                    reviews: results.data
                })
            })
            .catch((err) => {
                console.error(err);
            })
    }
    render(){
        return(
            <div>
                
            </div>
        )
    }
}