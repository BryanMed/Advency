import Regalo from "./Regalo";

export default function RegalosList({ regalos }) {
  const regalitos = regalos.map((regalo) => (
    <Regalo key={regalo.id} regalo={regalo} />
  ));

  return (
    <ul>
      {regalos.map((regalo) => (
        <Regalo key={regalo.id} regalo={regalo} />
      ))}
    </ul>
  );
}
