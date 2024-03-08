import style from './Switch.module.css';

export function Clear(props) {
  const handleClick = () => {
    props.setDisplay("");
    props.setAnswer("");
  };

  return (
    <button className={style.btn} onClick={handleClick}>AC</button>
  );
}