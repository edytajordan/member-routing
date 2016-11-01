import { Component } from 'react'
import MemberInfo from './MemberInfo'
import fetch from 'isomorphic-fetch'
import { hashHistory } from 'react-router'

class Members extends Component {
    constructor(props) {
        super(props);
        this.state = {
            members: (sessionStorage.members) ? JSON.parse(sessionStorage.members) : [],
            loadingMembers: (sessionStorage.members) ? false : true
        }
        this.getMoreMembers = this.getMoreMembers.bind(this);
    }

    componentDidMount() {
        if(!sessionStorage.members) {
            fetch(`https://api.randomuser.me/?nat=US&results=12`)
                .then(response => response.json())
                .then(members => this.setState({members: members.results,
                                                loadingMembers: false}))
        }
    }

    getMoreMembers() {
        fetch(`https://api.randomuser.me/?nat=US&results=12`)
            .then(response => response.json())
            .then(members => this.setState({members: members.results,
                                            loadingMembers: false}))
    }

    componentWillUpdate() {
        alert('new 12 members')
    }

    render() {
        const {routes, params} = this.props;
        const {members, loadingMembers} = this.state;
        return <div>
            <h1>Society Members</h1>
            {(loadingMembers) ?
                <span>Members Loading</span> :
                <MemberInfo state={params.state}
                            gender={params.gender}
                            members={members}
                />}
            <button onClick={this.getMoreMembers}>Get Next Members</button>
        </div>
    }
}




module.exports = Members