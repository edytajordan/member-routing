import Member from './Member'
import { PropTypes } from 'react'

const MemberInfo = ({ members, onCollapse, collapsed }) => (
        <div className="member-info">
            {members.map((data, i) => <Member key={i}
                                              index={i}
                                              {...data}
                                              onClick={() => onCollapse(i)}
                                              collapsed={collapsed}  />)}
        </div>
)


module.exports = MemberInfo