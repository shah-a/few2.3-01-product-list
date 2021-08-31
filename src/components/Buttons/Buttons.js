import './Buttons.css';

function Buttons(props) {
  return (
    <div className="buttons">
      {props.list.map((category) => {
        return <button>{category.name}</button>;
      })}
    </div>
  );
}

export default Buttons;
