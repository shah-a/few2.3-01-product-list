import './Buttons.css';

function Buttons(props) {
  return (
    <div className="buttons">
      {props.categories.map((category) => {
        return <button>{category}</button>;
      })}
    </div>
  );
}

export default Buttons;
