'use strict';

// fgoss-common.js 等へ統合予定
const OSNL_LS_KEY = "OwnedServantNoList";

document.getElementById("resist").addEventListener("click", () => {
  const len = servants.length;
  console.log("len : " + len);

  const list = [1];
  console.log("list : " + list);
  for(let i = 2; i <= len; i++) {
    const elementId = "servant" + i;
    const element = document.getElementById(elementId);
    if (element && element.checked) {
      list.push(i);
    }
  }
  localStorage.setItem(OSNL_LS_KEY, JSON.stringify(list));
});

servants.forEach(servant => {
  const tr = document.createElement("tr");
  const td = document.createElement("td");
  const input = document.createElement("input");
  input.type = "checkbox";
  input.id = "servant" + servant.status.no;
  const label = document.createElement("label");
  label.htmlFor = "servant" + servant.status.no;
  label.innerText = "No." + servant.status.no + " " + servant.status.name;
  td.appendChild(input);
  td.appendChild(label);
  tr.appendChild(td);

  if (servant.status.cls === "セイバー") {
    if (servant.status.rarity == 5) {
      document.getElementById("saber5").appendChild(tr);
    } else if (servant.status.rarity == 4) {
      document.getElementById("saber4").appendChild(tr);
    } else if (servant.status.rarity == 3) {
      document.getElementById("saber3").appendChild(tr);
    } else if (servant.status.rarity == 2) {
      document.getElementById("saber2").appendChild(tr);
    } else if (servant.status.rarity == 1) {
      document.getElementById("saber1").appendChild(tr);
    }
  }

  if (servant.status.cls === "アーチャー") {
    if (servant.status.rarity == 5) {
      document.getElementById("archer5").appendChild(tr);
    } else if (servant.status.rarity == 4) {
      document.getElementById("archer4").appendChild(tr);
    } else if (servant.status.rarity == 3) {
      document.getElementById("archer3").appendChild(tr);
    } else if (servant.status.rarity == 2) {
      document.getElementById("archer2").appendChild(tr);
    } else if (servant.status.rarity == 1) {
      document.getElementById("archer1").appendChild(tr);
    }
  }

  if (servant.status.cls === "ランサー") {
    if (servant.status.rarity == 5) {
      document.getElementById("lancer5").appendChild(tr);
    } else if (servant.status.rarity == 4) {
      document.getElementById("lancer4").appendChild(tr);
    } else if (servant.status.rarity == 3) {
      document.getElementById("lancer3").appendChild(tr);
    } else if (servant.status.rarity == 2) {
      document.getElementById("lancer2").appendChild(tr);
    } else if (servant.status.rarity == 1) {
      document.getElementById("lancer1").appendChild(tr);
    }
  }

  if (servant.status.cls === "ライダー") {
    if (servant.status.rarity == 5) {
      document.getElementById("rider5").appendChild(tr);
    } else if (servant.status.rarity == 4) {
      document.getElementById("rider4").appendChild(tr);
    } else if (servant.status.rarity == 3) {
      document.getElementById("rider3").appendChild(tr);
    } else if (servant.status.rarity == 2) {
      document.getElementById("rider2").appendChild(tr);
    } else if (servant.status.rarity == 1) {
      document.getElementById("rider1").appendChild(tr);
    }
  }

  if (servant.status.cls === "キャスター") {
    if (servant.status.rarity == 5) {
      document.getElementById("caster5").appendChild(tr);
    } else if (servant.status.rarity == 4) {
      document.getElementById("caster4").appendChild(tr);
    } else if (servant.status.rarity == 3) {
      document.getElementById("caster3").appendChild(tr);
    } else if (servant.status.rarity == 2) {
      document.getElementById("caster2").appendChild(tr);
    } else if (servant.status.rarity == 1) {
      document.getElementById("caster1").appendChild(tr);
    }
  }

  if (servant.status.cls === "アサシン") {
    if (servant.status.rarity == 5) {
      document.getElementById("assassin5").appendChild(tr);
    } else if (servant.status.rarity == 4) {
      document.getElementById("assassin4").appendChild(tr);
    } else if (servant.status.rarity == 3) {
      document.getElementById("assassin3").appendChild(tr);
    } else if (servant.status.rarity == 2) {
      document.getElementById("assassin2").appendChild(tr);
    } else if (servant.status.rarity == 1) {
      document.getElementById("assassin1").appendChild(tr);
    }
  }

  if (servant.status.cls === "バーサーカー") {
    if (servant.status.rarity == 5) {
      document.getElementById("berserker5").appendChild(tr);
    } else if (servant.status.rarity == 4) {
      document.getElementById("berserker4").appendChild(tr);
    } else if (servant.status.rarity == 3) {
      document.getElementById("berserker3").appendChild(tr);
    } else if (servant.status.rarity == 2) {
      document.getElementById("berserker2").appendChild(tr);
    } else if (servant.status.rarity == 1) {
      document.getElementById("berserker1").appendChild(tr);
    }
  }

  if (servant.status.cls === "ルーラー") {
    if (servant.status.rarity == 5) {
      document.getElementById("ruler5").appendChild(tr);
    } else if (servant.status.rarity == 4) {
      document.getElementById("ruler4").appendChild(tr);
    } else if (servant.status.rarity == 3) {
      document.getElementById("ruler3").appendChild(tr);
    } else if (servant.status.rarity == 2) {
      document.getElementById("ruler2").appendChild(tr);
    } else if (servant.status.rarity == 1) {
      document.getElementById("ruler1").appendChild(tr);
    }
  }

  if (servant.status.cls === "アヴェンジャー") {
    if (servant.status.rarity == 5) {
      document.getElementById("avenger5").appendChild(tr);
    } else if (servant.status.rarity == 4) {
      document.getElementById("avenger4").appendChild(tr);
    } else if (servant.status.rarity == 3) {
      document.getElementById("avenger3").appendChild(tr);
    } else if (servant.status.rarity == 2) {
      document.getElementById("avenger2").appendChild(tr);
    } else if (servant.status.rarity == 1) {
      document.getElementById("avenger1").appendChild(tr);
    } else if (servant.status.rarity == 0) {
      document.getElementById("avenger2").appendChild(tr);
    }
  }

  if (servant.status.cls === "アルターエゴ") {
    if (servant.status.rarity == 5) {
      document.getElementById("alter_ego5").appendChild(tr);
    } else if (servant.status.rarity == 4) {
      document.getElementById("alter_ego4").appendChild(tr);
    } else if (servant.status.rarity == 3) {
      document.getElementById("alter_ego3").appendChild(tr);
    } else if (servant.status.rarity == 2) {
      document.getElementById("alter_ego2").appendChild(tr);
    } else if (servant.status.rarity == 1) {
      document.getElementById("alter_ego1").appendChild(tr);
    }
  }

  if (servant.status.cls === "ムーンキャンサー") {
    if (servant.status.rarity == 5) {
      document.getElementById("moon_cancer5").appendChild(tr);
    } else if (servant.status.rarity == 4) {
      document.getElementById("moon_cancer4").appendChild(tr);
    } else if (servant.status.rarity == 3) {
      document.getElementById("moon_cancer3").appendChild(tr);
    } else if (servant.status.rarity == 2) {
      document.getElementById("moon_cancer2").appendChild(tr);
    } else if (servant.status.rarity == 1) {
      document.getElementById("moon_cancer1").appendChild(tr);
    }
  }

  if (servant.status.cls === "フォーリナー") {
    if (servant.status.rarity == 5) {
      document.getElementById("foreigner5").appendChild(tr);
    } else if (servant.status.rarity == 4) {
      document.getElementById("foreigner4").appendChild(tr);
    } else if (servant.status.rarity == 3) {
      document.getElementById("foreigner3").appendChild(tr);
    } else if (servant.status.rarity == 2) {
      document.getElementById("foreigner2").appendChild(tr);
    } else if (servant.status.rarity == 1) {
      document.getElementById("foreigner1").appendChild(tr);
    }
  }

});

JSON.parse(localStorage.getItem(OSNL_LS_KEY)).forEach(value => {
  const elementId = "servant" + value;
  const element = document.getElementById(elementId);
  if (element) {
    element.checked = true;
  }
});
