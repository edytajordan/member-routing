import { hashHistory } from 'react-router'

const Home = () =>
    <div id="homepage">
    <section className="home-page-menu">
        <h1 id="banner">Home</h1>
        <section onClick={() => hashHistory.push("/about")}>
            <h2>About Us</h2>
        </section>
        <section onClick={() => hashHistory.push("/members")}>
            <h2>Members</h2>
        </section>
    </section>
        <div id="homebox">
            <h1>Rock Appreciation Society</h1>
        </div>
        </div>



module.exports = Home