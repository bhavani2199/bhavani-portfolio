export default function Header () {
    return <header className= "flex justify-between px-5 py-2 bg-primary">
        <a className="font-bold text-black" href="#">Bhavani Ambrose</a>
        <ul className="flex text-white">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </header>
}