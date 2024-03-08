import style from './Switch.module.css';

export function Switch(props) {
  let num = props.num;
  const display = props.display;
  const handleClick = () => {
    // 記号の場合には一部の文字を変換
    if (props.type === "sign") {
      if (num === "×"){
        num = "*"
      }
      if (num === "÷"){
        num = "/"
      }
    }
    // クリックで数や演算子を文字列に追加
    props.setDisplay(display + num)
  };

  return (
    <button className={style.btn} onClick={handleClick}>{num}</button>
  );
}