import { Component } from 'react'
import MemberInfo from './MemberInfo'
import fetch from 'isomorphic-fetch'

class Members extends Component {
    constructor(props) {
        super(props);
        this.state = {
            members: [],
            loadingMembers: true,
            collapsed: false
        }
        this.viewChanger = this.viewChanger.bind(this)
    }
    shouldComponentUpdate(nextState) {
        return this.state.collapsed !== nextState.collapsed
    }
    componentWillMount() {
        console.log(`componentWillMount: Rendering 12 new members`)
    }

    componentDidMount() {
        console.log(`componentDidMount: Fetching members`)
        if(!sessionStorage.members) {
            fetch(`https://api.randomuser.me/?nat=US&results=12`)
                .then(response => response.json())
                .then(members => this.setState({members: members.results,
                    loadingMembers: false}))
        }
    }

    viewChanger(index) {
        this.setState({collapsed: !this.state.collapsed});
    }

    render() {
        const {routes, params} = this.props;
        const {members, loadingMembers, collapsed} = this.state;
        return <div>
            <h1>Society Members</h1>
            {(loadingMembers) ?
                <span>Members Loading</span> :
                <MemberInfo state={params.state}
                            gender={params.gender}
                            members={members}
                            onCollapse={this.viewChanger}
                            collapsed={collapsed} />}
        </div>
    }
}

module.exports = Members