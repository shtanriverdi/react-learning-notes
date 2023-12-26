export default function Button({ count, onClick }) {
    return (
        <button onClick={onClick}>Button Clicked {count} times</button>
    );
}