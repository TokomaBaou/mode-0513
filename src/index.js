import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

//論理演算子を使って一度に複数の条件を指定できます。
let color = "青";
if (color === "青" || color === "緑") {
  //colorが青または緑の場合に、trueを返します。
  console.log("進む");
} else {
  console.log("止まる");
}

const insert = "新規作成";
const update = "更新";
let click = insert | update;
click === "新規作成" ? console.log("新規作成") : console.log("更新");
