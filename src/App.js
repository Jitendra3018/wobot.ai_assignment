import logo from "./assets/wobot-logo_blue.png";
import Content from "./components/Content";

function App() {
    return (
        <div className="container">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>

            <div className="new">
                <div className="first" />
                <div className="second" />
                <div className="third" />
            </div>

            <Content />

        </div>
    );
}

export default App;
