import Member from './Member'
import { PropTypes } from 'react'

const MemberInfo = ({ members }) => {

    return (
        <div className="member-info">
            {members.map((data, i) => <Member key={i} {...data} />)}
        </div>
    )
}

module.exports = MemberInfo