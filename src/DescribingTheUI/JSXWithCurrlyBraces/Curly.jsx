const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}

export default function CurlyBraces() {
  const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
  const description = "Someone";
  const name = "Genesis";
  return (
    <>
      <h1>Today is {formatDate(today)}</h1>
      <h2>Melo {name}</h2>
      <img className="avatar" src={avatar} alt={description} />
    </>
  );
}
