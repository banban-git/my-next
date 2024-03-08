import style from './Switch.module.css';

export function Delete(props) {
  const handleClick = () => {
    const displayDelete = props.display.slice(0, -1);
    props.setDisplay(displayDelete);
    props.setAnswer("");
  };

  return (
    <button className={`${style.btn} ${style.delete}`} onClick={handleClick}>DELETE</button>
  );
}