import GrandChild from "./GrandChild"

export default function Child() {
    console.log("[ ]   [ ]   [🧒🏻]   [ ] rendered")
    return (
        <div>
            <p>I'm a Child Component</p>
            <GrandChild />
            <GrandChild />
        </div>
    )
}