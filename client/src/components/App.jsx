import React from 'react';
import axios from 'axios';
import Reviews from './Reviews.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
    this.getUsers = this.getUsers.bind(this);
  }

  componentDidMount() {
    this.getUsers();
    // const { reviews } = this.state;
    // this.setState({
    //   review: reviews[0],
    // });
  }

  getUsers() {
    axios.get('/users/all')
      .then((results) => {
        this.setState({
          users: results.data,
        }, () => console.log(this.state));
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    const { users } = this.state;
    return (
      <div className="reviews">
        <Reviews users={users} />
      </div>
    );
  }
}
