import { Component, PropTypes } from 'react'
import FaAngleDown from 'react-icons/lib/fa/angle-down'
import FaAngleUp from 'react-icons/lib/fa/angle-up'

const Expanded = ({ email, cell, picture, location, onClick, index}) => (
        <div>
            <img src={picture.thumbnail} alt="profile picture"/>
            <p>{location.city}, {location.state}</p>
            <p><a href={`mailto:${email}`}>{email}</a></p>
            <p>{cell}</p>
        </div>
)

class Member extends Component {

    render() {
        return (
            <div className={`member-${this.props.id.value}`}>
                <h1>{this.props.name.first} {this.props.name.last} <span onClick={() => this.props.onClick(this.props.index)}>
                    {(!this.props.collapsed) ? <FaAngleDown/> : <FaAngleUp/>}</span></h1>

                {(this.props.collapsed) ?
                    <Expanded onClick={() => this.props.onClick(this.props.index)}
                              collapsed={this.props.collapsed}
                              email={this.props.email}
                              cell={this.props.cell}
                              picture={this.props.picture}
                              location={this.props.location}
                              index={this.props.index}  />
                    : null}
            </div>
        )
    }
}


Member.propTypes = {
    id: PropTypes.object.isRequired,
    name: PropTypes.object.isRequired,
    email: PropTypes.string.isRequired,
    cell: PropTypes.string.isRequired,
    picture: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
}

module.exports = Member