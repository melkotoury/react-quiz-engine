import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';

class Clients extends Component {
    render() {
        const clients = [{
            id: '3233232',
            firstName: 'Kevin',
            lastName: 'Johnson',
            email: 'kevin@gmail.com',
            phone: '555-555-5555',
            gender: 1
        },
            {
                id: '32342232',
                firstName: 'John',
                lastName: 'Snow',
                email: 'jsnow@gmail.com',
                phone: '534-255-5455',
                gender: 1
            }];

        if (clients) {
            return (
                <Fragment>
                    <div className="row">
                        <div className="col-md-6">
                            <h2>{' '}<i className="fa fa-users"></i> Clients {' '}</h2>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                    <table className="table table-striped">
                        <thead className="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {clients.map(client => (
                            <tr key={client.id}>
                                <td>{client.firstName} {client.lastName}</td>
                                <td>{client.email}</td>
                                <td>{client.gender?'Male':'Female'}</td>
                                <td>
                                    <Link to={`/client/${client.id}`} className="btn btn-secondary btn-sm">
                                        <i className="fa fa-arrow-circle-right"></i> Details
                                    </Link>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </Fragment>
            )
        }else {
            return <h1 > Loading... </h1>
        }
    }
}

export default Clients;