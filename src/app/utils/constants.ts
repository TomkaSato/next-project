// タイプアイコンの背景色
export const typeColor = (type: string) => {
  switch (type) {
    case "poison":
      return "#B567CE";
    case "ghost":
      return "#4C6AB2";
    case "grass":
      return "#38BF4B";
    case "dragon":
      return "#006FC9";
    case "flying":
      return "#89AAE3";
    case "fire":
      return "#FF9741";
    case "bug":
      return "#83C300";
    case "water":
      return "#3692DC";
    case "steel":
      return "#5A8EA2";
    case "rock":
      return "#C8B686";
    case "psychic":
      return "#FF6675";
    case "normal":
      return "#9FA19F";
    case "ice":
      return "#4CD1C0";
    case "ground":
      return "#E87236";
    case "fighting":
      return "#E0306A";
    case "fairy":
      return "#FB89EB";
    case "electric":
      return "#FBD100";
    default:
      return "";
  }
};
