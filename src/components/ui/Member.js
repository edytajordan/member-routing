import { PropTypes, Component } from 'react'

class Member extends Component {

    componentWillMount() {
        this.style = {
            backgroundColor: 'red'
        }
    }

    shouldComponentUpdate(nextProps) {
        return this.props.admin !== nextProps.admin
    }

    componentWillUpdate(nextProps) {
        this.style = { backgroundColor: (nextProps.admin) ? 'gold' : 'yellow' }
    }

    componentDidUpdate(prevProps) {
       console.log(`${prevProps.name} updated`, prevProps.admin, this.props.admin)
    }

    render() {
        const { admin, thumbnail, name, email, makeAdmin, removeAdmin} = this.props
        return (
            <div className="member" style={this.style}>
                {(admin) ?
                    <a onClick={() => removeAdmin(email)}>Remove Admin</a> :
                    <a onClick={() => makeAdmin(email)}>Make Admin</a>
                }
                <h1>{name}</h1>
                <img src={thumbnail} alt="profile picture"/>
                <p><a href={`mailto:${email}`}>{email}</a></p>
            </div>
        )
    }
}

Member.defaultProps = {
    admin: false,
    makeAdmin: f=>f,
    removeAdmin: f=>f
}

Member.propTypes = {
    admin: PropTypes.bool,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    thumbnail: PropTypes.string,
    makeAdmin: PropTypes.func,
    removeAdmin: PropTypes.func
}

export default Member