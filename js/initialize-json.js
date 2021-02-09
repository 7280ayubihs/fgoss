'use strict';

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
