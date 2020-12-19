'use strict';

// 宝具効果、スキル効果
class Details {
  constructor(atk_up, damage_plus, quick_up, arts_up, buster_up, no_power_up, critical_power_up, star_generation_rate_up, star_concentration_up, star_get, star_every_turn_get, np_get, np_every_turn_get, np_generation_rate_up, hitting_target, invincible_penetration, ignore_def, def_up, damage_cut, hp_heal, hp_every_turn_heal, hp_healing_rate_up, avoidance, invincible, guts, target_concentration) {
    this.atk_up = atk_up;
    this.damage_plus = damage_plus;
    this.quick_up = quick_up;
    this.arts_up = arts_up;
    this.buster_up = buster_up;
    this.no_power_up = no_power_up;
    this.critical_power_up = critical_power_up;
    this.star_generation_rate_up = star_generation_rate_up;
    this.star_concentration_up = star_concentration_up;
    this.star_get = star_get;
    this.star_every_turn_get = star_every_turn_get;
    this.np_get = np_get;
    this.np_every_turn_get = np_every_turn_get;
    this.np_generation_rate_up = np_generation_rate_up;
    this.hitting_target = hitting_target;
    this.invincible_penetration = invincible_penetration;
    this.ignore_def = ignore_def;
    this.def_up = def_up;
    this.damage_cut = damage_cut;
    this.hp_heal = hp_heal;
    this.hp_every_turn_heal = hp_every_turn_heal;
    this.hp_healing_rate_up = hp_healing_rate_up;
    this.avoidance = avoidance;
    this.invincible = invincible;
    this.guts = guts;
    this.target_concentration = target_concentration;
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
      // ステータス
      const status = new Status(data.no, data.name, data.class, data.rarity, data.hp, data.atk, data.cost);
      // 保有スキル効果
      const activeSkillDetails = new Details(data.skill.details.atk_up, data.skill.details.damage_plus, data.skill.details.quick_up, data.skill.details.arts_up, data.skill.details.buster_up, data.skill.details.no_power_up, data.skill.details.critical_power_up, data.skill.details.star_generation_rate_up, data.skill.details.star_concentration_up, data.skill.details.star_get, data.skill.details.star_every_turn_get, data.skill.details.np_get, data.skill.details.np_every_turn_get, data.skill.details.np_generation_rate_up, data.skill.details.hitting_target, data.skill.details.invincible_penetration, data.skill.details.ignore_def, data.skill.details.def_up, data.skill.details.damage_cut, data.skill.details.hp_heal, data.skill.details.hp_every_turn_heal, data.skill.details.hp_healing_rate_up, data.skill.details.avoidance, data.skill.details.invincible, data.skill.details.guts, data.skill.details.target_concentration);
      // 保有スキル
      const activeSkills = new ActiveSkills(data.skill.name1, data.skill.info1, data.skill.name2, data.skill.info2, data.skill.name3, data.skill.info3, activeSkillDetails);
      // 宝具効果
      const noblePhantasmDetails = new Details(data.np.details.atk_up, data.np.details.damage_plus, data.np.details.quick_up, data.np.details.arts_up, data.np.details.buster_up, data.np.details.no_power_up, data.np.details.critical_power_up, data.np.details.star_generation_rate_up, data.np.details.star_concentration_up, data.np.details.star_get, data.np.details.star_every_turn_get, data.np.details.np_get, data.np.details.np_every_turn_get, data.np.details.np_generation_rate_up, data.np.details.hitting_target, data.np.details.invincible_penetration, data.np.details.ignore_def, data.np.details.def_up, data.np.details.damage_cut, data.np.details.hp_heal, data.np.details.hp_every_turn_heal, data.np.details.hp_healing_rate_up, data.np.details.avoidance, data.np.details.invincible, data.np.details.guts, data.np.details.target_concentration);
      // 宝具
      const noblePhantasm = new NoblePhantasm(data.np.name, data.np.info, data.np.type, data.np.effect, noblePhantasmDetails);
      // サーヴァント
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
