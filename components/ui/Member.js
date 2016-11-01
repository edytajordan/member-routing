import { PropTypes } from 'react'

const Member = ({id, name, email, cell, picture, location}) => (
    <div className={`member-${id.value}`}>
        <h1>{name.first} {name.last}</h1>
        <img src={picture.thumbnail} alt="profile picture" />
        <p>{location.city}, {location.state}</p>
        <p><a href={`mailto:${email}`}>{email}</a></p>
        <p>{cell}</p>
    </div>
)


Member.propTypes = {
    id: PropTypes.object.isRequired,
    name: PropTypes.object.isRequired,
    email: PropTypes.string.isRequired,
    cell: PropTypes.string.isRequired,
    picture: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
}

module.exports = Member