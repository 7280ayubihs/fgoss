'use strict';

// グローバル変数
let servantList = [];

// 
// クラスフィルター関数
// 
function filterClass() {
  // １つも選択されていない場合はなにもしない
  if (!(document.getElementById("class_saber").checked || document.getElementById("class_archer").checked || document.getElementById("class_lancer").checked || document.getElementById("class_rider").checked || document.getElementById("class_caster").checked || document.getElementById("class_assassin").checked || document.getElementById("class_berserker").checked || document.getElementById("class_shielder").checked || document.getElementById("class_ruler").checked || document.getElementById("class_avenger").checked || document.getElementById("class_alter_ego").checked || document.getElementById("class_moon_cancer").checked || document.getElementById("class_foreigner").checked)) {
    return;
  }

  // クラスフィルター
  servantList = servantList.filter(servant => {
    if (servant.status.cls === "セイバー") { return document.getElementById("class_saber").checked; }
    if (servant.status.cls === "アーチャー") { return document.getElementById("class_archer").checked; }
    if (servant.status.cls === "ランサー") { return document.getElementById("class_lancer").checked; }
    if (servant.status.cls === "ライダー") { return document.getElementById("class_rider").checked; }
    if (servant.status.cls === "キャスター") { return document.getElementById("class_caster").checked; }
    if (servant.status.cls === "アサシン") { return document.getElementById("class_assassin").checked; }
    if (servant.status.cls === "バーサーカー") { return document.getElementById("class_berserker").checked; }
    if (servant.status.cls === "シールダー") { return document.getElementById("class_shielder").checked; }
    if (servant.status.cls === "ルーラー") { return document.getElementById("class_ruler").checked; }
    if (servant.status.cls === "アヴェンジャー") { return document.getElementById("class_avenger").checked; }
    if (servant.status.cls === "アルターエゴ") { return document.getElementById("class_alter_ego").checked; }
    if (servant.status.cls === "ムーンキャンサー") { return document.getElementById("class_moon_cancer").checked; }
    if (servant.status.cls === "フォーリナー") { return document.getElementById("class_foreigner").checked; }
  });
}

// 
// レアリティフィルター関数
// 
function filterRarity() {
  // １つも選択されていない場合はなにもしない
  if (!(document.getElementById("rarity5").checked || document.getElementById("rarity4").checked || document.getElementById("rarity3").checked || document.getElementById("rarity2").checked || document.getElementById("rarity1").checked || document.getElementById("rarity0").checked)) {
    return;
  }

  // レアリティフィルター
  servantList = servantList.filter(servant => {
    if (servant.status.rarity == 5) { return document.getElementById("rarity5").checked; }
    if (servant.status.rarity == 4) { return document.getElementById("rarity4").checked; }
    if (servant.status.rarity == 3) { return document.getElementById("rarity3").checked; }
    if (servant.status.rarity == 2) { return document.getElementById("rarity2").checked; }
    if (servant.status.rarity == 1) { return document.getElementById("rarity1").checked; }
    if (servant.status.rarity == 0) { return document.getElementById("rarity0").checked; }
  });
}

// 
// 宝具タイプフィルター関数
// 
function filterNpType() {
  // １つも選択されていない場合はなにもしない
  if (!(document.getElementById("np_type_quick").checked || document.getElementById("np_type_arts").checked || document.getElementById("np_type_buster").checked)) {
    return;
  }
  // 宝具タイプフィルター
  servantList = servantList.filter(servant => {
    if (servant.np.type === "Quick") { return document.getElementById("np_type_quick").checked; }
    if (servant.np.type === "Arts") { return document.getElementById("np_type_arts").checked; }
    if (servant.np.type === "Buster") { return document.getElementById("np_type_buster").checked; }
  });
}

// 
// 宝具種別フィルター関数
//
function filterNpEffect() {
  // １つも洗濯されていない場合はなにもしない
  if (!(document.getElementById("np_effect_whole_attack").checked || document.getElementById("np_effect_single_attack").checked || document.getElementById("np_effect_support").checked)) {
    return;
  }
  // 宝具種別フィルター
  servantList = servantList.filter(servant => {
    if (servant.np.effect === "全体攻撃") { return document.getElementById("np_effect_whole_attack").checked; }
    if (servant.np.effect === "単体攻撃") { return document.getElementById("np_effect_single_attack").checked; }
    if (servant.np.effect === "補助") { return document.getElementById("np_effect_support").checked; }
  });
}

// 
// 検索結果表のアップデート関数
// 
function updateSearchResult() {
  // 初期化
  const tbody = document.getElementById("search-result-tbody");
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }

  // 再描画
  servantList.forEach(servant => {
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
}

// 
// クリックイベント
// 
document.getElementById("btn").addEventListener("click", () => {
  console.info("=== btn ckick ===");

  servantList = servants.map(servants => ({...servants}));
  console.info(servantList.length);

  filterClass();
  console.info(servantList.length);
  
  filterRarity();
  console.info(servantList.length);
  
  filterNpType();
  console.info(servantList.length);
  
  filterNpEffect();
  console.info(servantList.length);

  updateSearchResult();
});