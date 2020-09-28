import React, { Component, Fragment } from 'react';
import Users from '../data/data.json';
import Modal from '../components/edit-popup';

class Content extends Component {
  state = {
    isOpen: false
  }
  render() {
    return (
      <section className="list-content">
        <div class="container">
          <h2>Users List </h2>
          <div className="userList-wrap">
            <table>
              <thead>
                <tr>
                  <th scope="col">Sr. No.</th>
                  <th scope="col">Name</th>
                  <th scope="col">Username</th>
                  <th scope="col">Email</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {Users.map((user) => {
                  return (<tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td><a href="#" className="edit-icn" onClick={(e) => this.setState({ isOpen: true })}></a></td>
                  </tr> )
                })}
              </tbody>
            </table>
          </div>
        </div>

        <Modal isOpen= {this.state.isOpen} onClose={(e) => this.setState({isOpen: false})}/>
      </section>
    )
  }
}

export default Content;