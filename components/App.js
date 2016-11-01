import { MainMenu } from './ui'

const App = ({location, children}) => (
    <div className="app">
        {(location.pathname !== '/') ? <MainMenu /> : ""}
        {children}
    </div>
)

module.exports = App