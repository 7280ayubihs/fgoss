'use strict';

// 宝具効果、スキル効果
class Details {
  constructor() {
    this.atk_up = 0;
    this.damage_plus = 0;
    this.quick_up = 0;
    this.arts_up = 0;
    this.buster_up = 0;
    this.no_power_up = 0;
    this.critical_power_up = 0;
    this.star_generation_rate_up = 0;
    this.star_concentration_up = 0;
    this.star_get = 0;
    this.star_every_turn_get = 0;
    this.np_get = 0;
    this.np_every_turn_get = 0;
    this.np_generation_rate_up = 0;
    this.hitting_target = 0;
    this.invincible_penetration = 0;
    this.ignore_def = 0;
    this.def_up = 0;
    this.damage_cut = 0;
    this.hp_heal = 0;
    this.hp_every_turn_heal = 0;
    this.hp_healing_rate_up = 0;
    this.avoidance = 0;
    this.invincible = 0;
    this.guts = 0;
    this.target_concentration = 0;
  }
}

// ステータス
class Status {
  constructor(no, name, cls, rarity, hp, atk, cost) {
    this.no = no;
    this.name = name;
    this.cls = cls;
    this.rarity = rarity;
    this.hp = hp;
    this.atk = atk;
    this.cost = cost;
  }
}

// 保有スキル
class ActiveSkills {
  constructor(name1, info1, name2, info2, name3, info3, details) {
    this.name1 = name1;
    this.info1 = info1;
    this.name2 = name2;
    this.info2 = info2;
    this.name3 = name3;
    this.info3 = info3;
    this.details = details;
  }
}

// // クラススキル
// class PassiveSkills {
// 
// }

// 宝具
class NoblePhantasm {
  constructor(name, info, type, effect, details) {
    this.name = name;
    this.info = info;
    this.type = type;
    this.effect = effect;
    this.details = details;
  }
}

// サーヴァント
class Servant {
  constructor(status, activeSkills, /*passiveSkills,*/ noblePhantasm) {
    this.status = status;
    this.skills = activeSkills;
    this.np = noblePhantasm;
  }
}

// サーヴァントリスト
const servants = [];

// jsonデータを読み込み
const request = new XMLHttpRequest();
request.onreadystatechange = function() {
  if (request.readyState === 4 && request.status === 200) {
    const json = JSON.parse(request.responseText);
    json.forEach(data => {
      const status = new Status(data.no, data.name, data.class, data.rarity, data.hp, data.atk, data.cost);
      const activeSkills = new ActiveSkills(data.skill.name1, data.skill.info1, data.skill.name2, data.skill.info2, data.skill.name3, data.skill.info3, null);
      const noblePhantasm = new NoblePhantasm(data.np.name, data.np.info, data.np.type, data.np.effect, null);
      servants.push(new Servant(status, activeSkills, noblePhantasm));
    });
  }
}
request.open("GET", "json/fgo-search.json", false);
request.send();

// 初期化
const tbody = document.getElementById("search-result-tbody");
servants.forEach(servant => {
  const tr = document.createElement("tr");

  // no
  const tdNo = document.createElement("td");
  tdNo.innerText = servant.status.no;
  tdNo.classList.add("td-integer");
  tr.appendChild(tdNo);
  
  // name 
  const tdName = document.createElement("td");
  tdName.innerText = servant.status.name;
  tr.appendChild(tdName);
  
  // クラス（レアリティ）
  const tdClass = document.createElement("td");
  tdClass.innerText = servant.status.cls + "\n（★" + servant.status.rarity + "）";
  tdClass.classList.add("text-align-center");
  tr.appendChild(tdClass);
  
  // HP
  const tdHp = document.createElement("td");
  tdHp.innerText = servant.status.hp;
  tdHp.classList.add("td-integer");
  tr.appendChild(tdHp);
  
  // ATK
  const tdAtk = document.createElement("td");
  tdAtk.innerText = servant.status.atk;
  tdAtk.classList.add("td-integer");
  tr.appendChild(tdAtk);
  
  // COST
  const tdCost = document.createElement("td");
  tdCost.innerText = servant.status.cost;
  tdCost.classList.add("td-integer");
  tr.appendChild(tdCost);
  
  // 宝具
  const tdNp = document.createElement("td");
  const pName = document.createElement("p");
  pName.innerText = servant.np.name;
  tdNp.appendChild(pName);
  const pInfo = document.createElement("p");
  pInfo.innerText = servant.np.info;
  pInfo.classList.add("np-info");
  tdNp.appendChild(pInfo);
  tr.appendChild(tdNp);
  
  // スキル1
  const tdSkill1 = document.createElement("td");
  const pName1 = document.createElement("p");
  pName1.innerText = servant.skills.name1;
  tdSkill1.appendChild(pName1);
  const pInfo1 = document.createElement("p");
  pInfo1.innerText = servant.skills.info1;
  pInfo1.classList.add("skill-info");
  tdSkill1.appendChild(pInfo1);
  tr.appendChild(tdSkill1);
  
  // スキル2
  const tdSkill2 = document.createElement("td");
  const pName2 = document.createElement("p");
  pName2.innerText = servant.skills.name2;
  tdSkill2.appendChild(pName2);
  const pInfo2 = document.createElement("p");
  pInfo2.innerText = servant.skills.info2;
  pInfo2.classList.add("skill-info");
  tdSkill2.appendChild(pInfo2);
  tr.appendChild(tdSkill2);
  
  // スキル3
  const tdSkill3 = document.createElement("td");
  const pName3 = document.createElement("p");
  pName3.innerText = servant.skills.name3;
  tdSkill3.appendChild(pName3);
  const pInfo3 = document.createElement("p");
  pInfo3.innerText = servant.skills.info3;
  pInfo3.classList.add("skill-info");
  tdSkill3.appendChild(pInfo3);
  tr.appendChild(tdSkill3);
  
  tbody.appendChild(tr);
});
