import "./Header.css";
import reactImage from "../../assets/react-core-concepts.png";

const reactDescription = ['Fundamental', 'Crucial', 'Core'];
function genRandomUnt(max) {
    return Math.floor(Math.random() * (max +  1));
}

export default function Header() {
    const description = reactDescription[genRandomUnt(reactDescription.length-1)];
    return (
        <header>
            <img src={reactImage} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {description} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    )
}