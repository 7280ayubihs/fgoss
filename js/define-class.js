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
