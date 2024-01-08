function Profile(props) {
  return (
    // <div className="card">
    //   <Avatar
    //     person={person}
    //     size={size}
    //     isSepia={isSepia}
    //     thickBorder={thickBorder}
    //   />
    // </div>
    <div className="card">
      {/* Forwarding props with the JSX spread syntax */}
      <Avatar {...props} />
    </div>
  );
}

function Avatar({ person, size = 100 }) {
  return (
    <img
      src={"https://i.imgur.com/" + person.imageId + ".jpg"}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function PassProps() {
  return (
    <>
      <Avatar
        size={100}
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
      />
      <Avatar
        size={80}
        person={{
          name: "Aklilu Lemma",
          imageId: "OKS67lh",
        }}
      />
      <Avatar
        size={50}
        person={{
          name: "Lin Lanying",
          imageId: "1bX5QH6",
        }}
      />
    </>
  );
}
