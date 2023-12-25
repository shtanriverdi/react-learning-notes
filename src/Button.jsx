export default function Button({ count, onClick }) {
    return (
        <button onClick={onClick}>Button 1 Clicked {count} times</button>
    );
}