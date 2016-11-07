import { Component } from 'react'
import Member from './Member'
import fetch from 'isomorphic-fetch'

class MemberList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            members: [],
            loading: false,
            administrators: []
        }
        this.makeAdmin = this.makeAdmin.bind(this)
        this.removeAdmin = this.removeAdmin.bind(this)
    }

    componentDidMount() {
        this.setState({loading: true})
        fetch('https://api.randomuser.me/?nat=US&results=12')
            .then(response => response.json())
            .then(json => json.results)
            .then(members => this.setState({
                members,
                loading: false
            }))
    }

    componentWillUnmount() {
        console.log("Unmounting Members List")
    }

    makeAdmin(email) {
        const administrators = [
            ...this.state.administrators,
            email
        ]
        this.setState({administrators})
    }

    removeAdmin(email) {
        const administrators = this.state.administrators.filter(adminEmail => adminEmail !== email)
        this.setState({administrators})
    }

    render() {
        const { loading, members, administrators } = this.state
        return (
            <div className="member-list">
                <h1>Society Members</h1>

                {(loading) ?
                    <span>loading...</span> :
                    <span>{members.length} members</span>
                }

                {(members.length) ?
                    members.map((m, i) =>
                        <Member key={i}
                                admin={administrators.some(adminEmail => adminEmail === m.email)}
                                name={m.name.first + ' ' + m.name.last}
                                email={m.email}
                                thumbnail={m.picture.thumbnail}
                                makeAdmin={this.makeAdmin}
                                removeAdmin={this.removeAdmin}
                        />
                    ) :
                    <span>Currently 0 members.</span>
                }

            </div>
        )
    }
}

export default MemberList