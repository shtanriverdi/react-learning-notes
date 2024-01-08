// function Card(props) {
//   return (
//   <>
//     {props.children}
//   </>
//   );
// }

function Card({ children }) {
  return (
  <>
    {children}
  </>
  );
}

export default function NestingComponents() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
      <Avatar
        size={80}
        person={{ 
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp4'
        }}
      />
      <h1>Deneme</h1>
    </Card>
  );
}

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={"https://i.imgur.com/" + person.imageId + ".jpg"}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
