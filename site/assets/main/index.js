System.register("chunks:///_virtual/BattleMotion.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "64e01yiOGhCRqNl771/UV3F", "BattleMotion", undefined);
      var BattleMotion = exports('BattleMotion', /*#__PURE__*/function () {
        function BattleMotion() {
          this.pending = new Map();
          this.paused = false;
          this.cancelled = false;
          this.reduced = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
        }
        var _proto = BattleMotion.prototype;
        _proto.duration = function duration(seconds) {
          return this.reduced ? Math.min(seconds, .001) : seconds;
        };
        _proto.play = function play(motion) {
          var _this = this;
          if (this.cancelled) return Promise.resolve(false);
          return new Promise(function (resolve) {
            _this.pending.set(motion, resolve);
            motion.call(function () {
              _this.pending["delete"](motion);
              resolve(true);
            }).start();
            if (_this.paused) motion.pause();
          });
        };
        _proto.pause = function pause() {
          this.paused = true;
          for (var _iterator = _createForOfIteratorHelperLoose(this.pending.keys()), _step; !(_step = _iterator()).done;) {
            var motion = _step.value;
            motion.pause();
          }
        };
        _proto.resume = function resume() {
          this.paused = false;
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.pending.keys()), _step2; !(_step2 = _iterator2()).done;) {
            var motion = _step2.value;
            motion.resume();
          }
        };
        _proto.cancel = function cancel() {
          this.cancelled = true;
          for (var _iterator3 = _createForOfIteratorHelperLoose(this.pending), _step3; !(_step3 = _iterator3()).done;) {
            var _step3$value = _step3.value,
              motion = _step3$value[0],
              resolve = _step3$value[1];
            motion.stop();
            resolve(false);
          }
          this.pending.clear();
        };
        return BattleMotion;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BattleRules.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports({
        planSkill: planSkill,
        selectTargets: selectTargets,
        skillOwner: skillOwner
      });
      cclegacy._RF.push({}, "8c7c2bK1MtN6bwcbFVUIAg1", "BattleRules", undefined);
      var teachingSkills = {
        s: [{
          name: '斩击',
          ratio: 1
        }, {
          name: '破阵斩',
          ratio: 1.85
        }],
        stone: [{
          name: '投石',
          ratio: .55
        }, {
          name: '碎石雨',
          ratio: .45,
          hits: 2,
          target: 'all'
        }],
        fist: [{
          name: '直拳',
          ratio: .7
        }, {
          name: '震击',
          ratio: 1.6,
          stun: true
        }],
        staff: [{
          name: '神圣杖击',
          ratio: 1
        }, {
          name: '圣光杖击',
          ratio: 1.6
        }]
      };
      function skillOwner(type) {
        return type === 'staff' ? 'h' : type === 'd' || type === 'm' || type === 'h' ? type : 's';
      }
      function selectTargets(hp, tags, preference) {
        var _living$find;
        if (preference === void 0) {
          preference = 'front';
        }
        var living = hp.flatMap(function (value, index) {
          return value > 0 ? [index] : [];
        });
        if (!living.length || preference === 'all') return living;
        if (preference === 'rear') return living.slice(-1);
        return [(_living$find = living.find(function (index) {
          var _tags$index;
          return (_tags$index = tags[index]) == null ? void 0 : _tags$index.includes(preference);
        })) != null ? _living$find : living[0]];
      }
      function planSkill(type, length, chain, charged, tutorial, attack, fullGuard, rally, hasCore, buff) {
        var _teachingSkills$type, _s$d$m$type;
        if (buff === void 0) {
          buff = function buff() {
            return 0;
          };
        }
        var multiplier = (length >= 5 ? 2.1 : length >= 4 ? 1.55 : 1) * (1 + (chain - 1) * (.16 + .12 * buff('chain')));
        if (type === 'cry') return {
          kind: 'rally',
          name: '战吼'
        };
        if (type === 'h') return {
          kind: 'heal',
          name: '牧师治疗',
          amount: Math.round(24 * (tutorial ? 1 : multiplier * (1 + .35 * buff('heal'))))
        };
        if (type === 'd' && !fullGuard) return {
          kind: 'guard',
          name: '骑士守护',
          amount: Math.round(20 * multiplier * (1 + .35 * buff('def')))
        };
        var teaching = (tutorial || ['stone', 'fist', 'staff'].includes(type)) && ((_teachingSkills$type = teachingSkills[type]) == null ? void 0 : _teachingSkills$type[charged ? 1 : 0]);
        if (teaching) {
          var _teaching$hits, _teaching$target;
          return {
            kind: 'attack',
            name: teaching.name,
            damage: Math.round(attack * teaching.ratio * (rally ? 1.4 : 1)),
            hits: (_teaching$hits = teaching.hits) != null ? _teaching$hits : 1,
            target: (_teaching$target = teaching.target) != null ? _teaching$target : 'front',
            stun: !!teaching.stun
          };
        }
        var power = type === 's' ? 1 + .25 * buff('atk') : type === 'm' ? 1 + .25 * buff('mag') : type === 'd' ? 1 + (hasCore('guardcore') ? .45 : 0) + .4 * buff('counter') : 1;
        var damage = Math.round(attack * multiplier * (rally ? 1.4 : 1) * power);
        if (type === 's' && length >= 4 && hasCore('swordcore')) damage += Math.round(attack * (.5 + .45 * buff('sword4')));
        if (type === 'm' && chain > 1 && hasCore('magiccore')) damage += Math.round(attack * (.3 + .25 * buff('echo')));
        return {
          kind: 'attack',
          name: (_s$d$m$type = {
            s: '剑气',
            d: '骑士反击',
            m: '奥术弹'
          }[type]) != null ? _s$d$m$type : '攻击',
          damage: damage,
          hits: 1,
          target: 'front',
          stun: false
        };
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Board.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports({
        adjacent: adjacent,
        legalMove: legalMove,
        matches: matches,
        newBoard: newBoard,
        opening: opening,
        planRefill: planRefill,
        planWave: planWave,
        refill: refill
      });
      cclegacy._RF.push({}, "58ca6Qen5pOx5uPQaJG5VXD", "Board", undefined);
      var cols = exports('cols', 7);
      var rows = exports('rows', 8);

      // Each route lists the cells from its supply edge to its far end.

      var verticalRoutes = function verticalRoutes(height) {
        return Array.from({
          length: cols
        }, function (_, col) {
          return Array.from({
            length: height
          }, function (_, row) {
            return row * cols + col;
          });
        });
      };
      var verticalGravity = verticalRoutes(rows);
      var mineGravity = exports('mineGravity', [].concat(verticalRoutes(rows - 2), [Array.from({
        length: cols
      }, function (_, col) {
        return (rows - 2) * cols + col;
      }), Array.from({
        length: cols
      }, function (_, col) {
        return rows * cols - 1 - col;
      })]));
      function matches(board) {
        var groups = [];
        for (var _i = 0, _arr = [1, cols]; _i < _arr.length; _i++) {
          var stride = _arr[_i];
          for (var i = 0; i < board.length; i++) {
            var length = stride === 1 ? cols - i % cols : rows - Math.floor(i / cols);
            var group = [i];
            for (var k = 1; k < length && board[i + k * stride] === board[i]; k++) group.push(i + k * stride);
            if (group.length >= 3) groups.push(group);
          }
        }
        return groups.filter(function (group) {
          return !groups.some(function (other) {
            return other.length > group.length && group.every(function (i) {
              return other.includes(i);
            });
          });
        });
      }
      function adjacent(a, b) {
        return Math.abs(a % cols - b % cols) + Math.abs(Math.floor(a / cols) - Math.floor(b / cols)) === 1;
      }
      function opening(types) {
        // Fixed tutorial board: cells 1 and 8 produce one sword match without
        // repeating the same diagonal cycle in each row.
        var layout = ['0201332', '2031311', '0023101', '1130332', '0230201', '0012123', '2113031', '0100133'];
        return Array.from(layout.join(''), function (color) {
          return types[Number(color) % types.length];
        });
      }
      function planRefill(board, removed, types, random, routes) {
        if (random === void 0) {
          random = Math.random;
        }
        if (routes === void 0) {
          routes = verticalGravity;
        }
        var plan = {
          board: Array(board.length),
          moves: [],
          spawns: []
        };
        var covered = new Set();
        var _loop = function _loop() {
          var route = _step.value;
          if (!route.length) throw new Error('Gravity routes need an entry cell');
          route.forEach(function (cell, i) {
            if (!Number.isInteger(cell) || cell < 0 || cell >= board.length || covered.has(cell) || i > 0 && !adjacent(route[i - 1], cell)) {
              throw new Error("Invalid gravity route at cell " + cell);
            }
            covered.add(cell);
          });
        };
        for (var _iterator = _createForOfIteratorHelperLoose(routes), _step; !(_step = _iterator()).done;) {
          _loop();
        }
        if (covered.size !== board.length) throw new Error('Gravity routes must cover every cell');
        for (var _iterator2 = _createForOfIteratorHelperLoose(routes), _step2; !(_step2 = _iterator2()).done;) {
          var route = _step2.value;
          // Compact from the far end so surviving pieces never pass one another.
          var target = route.length - 1;
          for (var source = target; source >= 0; source--) {
            var from = route[source];
            if (removed.has(from)) continue;
            var to = route[target];
            plan.board[to] = board[from];
            if (source !== target) plan.moves.push({
              from: from,
              to: to,
              path: route.slice(source, target + 1)
            });
            target--;
          }
          if (target < 0) continue;

          // All replacement pieces on this route enter at the same edge.
          var entry = route[0],
            second = route[1];
          var direction = route.length > 1 ? {
            x: second % cols - entry % cols,
            y: Math.floor(second / cols) - Math.floor(entry / cols)
          } : {
            x: 0,
            y: 1
          };
          var farthest = target;
          for (; target >= 0; target--) {
            var _to = route[target];
            plan.board[_to] = types[Math.floor(random() * types.length)];
            plan.spawns.push({
              to: _to,
              path: route.slice(0, target + 1),
              direction: direction,
              distance: farthest - target + 1
            });
          }
        }
        return plan;
      }
      function refill(board, removed, types, random) {
        if (random === void 0) {
          random = Math.random;
        }
        return planRefill(board, removed, types, random).board;
      }
      function skillAnchor(part, crossings, charged, preferred) {
        var swapped = preferred.find(function (index) {
          return part.has(index) && !charged.has(index);
        });
        if (swapped !== undefined) return swapped;
        var ordinary = Array.from(part).filter(function (index) {
          return !charged.has(index);
        });
        var junctions = ordinary.filter(function (index) {
          return crossings.has(index);
        });
        // A cascade has no swap target. Use a junction or the closest ordinary cell
        // to the shape's centre, with the lower/right cell winning equal distances.
        var columnSum = 0;
        var rowSum = 0;
        for (var _iterator3 = _createForOfIteratorHelperLoose(part), _step3; !(_step3 = _iterator3()).done;) {
          var _index = _step3.value;
          columnSum += _index % cols;
          rowSum += Math.floor(_index / cols);
        }
        var anchor;
        var closest = Infinity;
        for (var _iterator4 = _createForOfIteratorHelperLoose(junctions.length ? junctions : ordinary), _step4; !(_step4 = _iterator4()).done;) {
          var _index2 = _step4.value;
          var dx = _index2 % cols * part.size - columnSum;
          var dy = Math.floor(_index2 / cols) * part.size - rowSum;
          var distance = dx * dx + dy * dy;
          if (anchor === undefined || distance < closest || distance === closest && _index2 > anchor) {
            anchor = _index2;
            closest = distance;
          }
        }
        return anchor;
      }

      // Retain the propagation planner for fixtures; campaign play freezes line clear.
      var lineClearEnabled = exports('lineClearEnabled', false);
      function planWave(groups, tierAt, preferred, lineClear) {
        if (lineClear === void 0) {
          lineClear = lineClearEnabled;
        }
        var matched = new Set();
        var crossings = new Set();
        for (var _iterator5 = _createForOfIteratorHelperLoose(groups), _step5; !(_step5 = _iterator5()).done;) {
          var group = _step5.value;
          for (var _iterator9 = _createForOfIteratorHelperLoose(group), _step9; !(_step9 = _iterator9()).done;) {
            var _index3 = _step9.value;
            if (matched.has(_index3)) crossings.add(_index3);
            matched.add(_index3);
          }
        }
        var charged = new Set();
        var columns = new Set();
        var removed = new Set(matched);
        for (var _iterator6 = _createForOfIteratorHelperLoose(removed), _step6; !(_step6 = _iterator6()).done;) {
          var _index4 = _step6.value;
          var tier = tierAt(_index4);
          if (!tier) continue;
          charged.add(_index4);
          if (lineClear && tier !== 'skill') {
            columns.add(_index4 % cols);
            for (var row = 0; row < rows; row++) removed.add(row * cols + _index4 % cols);
          }
        }
        var components = [];
        var _loop2 = function _loop2() {
          var group = _step7.value;
          var connected = components.filter(function (part) {
            return group.some(function (index) {
              return part.has(index);
            });
          });
          var merged = new Set(group);
          for (var _iterator10 = _createForOfIteratorHelperLoose(connected), _step10; !(_step10 = _iterator10()).done;) {
            var _part = _step10.value;
            _part.forEach(function (index) {
              return merged.add(index);
            });
            components.splice(components.indexOf(_part), 1);
          }
          components.push(merged);
        };
        for (var _iterator7 = _createForOfIteratorHelperLoose(groups), _step7; !(_step7 = _iterator7()).done;) {
          _loop2();
        }
        var anchors = new Set();
        var created = new Map();
        for (var _i2 = 0, _components = components; _i2 < _components.length; _i2++) {
          var part = _components[_i2];
          if (part.size < 4) continue;
          var anchor = skillAnchor(part, crossings, charged, preferred);
          if (anchor !== undefined) {
            anchors.add(anchor);
            created.set(anchor, part.size >= 5 ? 'advanced' : 'skill');
          }
        }
        for (var _iterator8 = _createForOfIteratorHelperLoose(anchors), _step8; !(_step8 = _iterator8()).done;) {
          var _anchor = _step8.value;
          removed["delete"](_anchor);
        }
        return {
          charged: charged,
          columns: columns,
          anchors: anchors,
          created: created,
          removed: removed,
          matched: matched,
          components: components.map(function (part) {
            return Array.from(part);
          }),
          propagated: Array.from(removed).filter(function (index) {
            return !matched.has(index);
          })
        };
      }
      function legalMove(board) {
        for (var a = 0; a < board.length; a++) for (var _i3 = 0, _arr2 = [a + 1, a + cols]; _i3 < _arr2.length; _i3++) {
          var b = _arr2[_i3];
          if (b >= board.length || !adjacent(a, b)) continue;
          var probe = [].concat(board);
          var _ref = [probe[b], probe[a]];
          probe[a] = _ref[0];
          probe[b] = _ref[1];
          if (matches(probe).length) return [a, b];
        }
      }
      function newBoard(types, random) {
        if (random === void 0) {
          random = Math.random;
        }
        var board = Array(cols * rows);
        for (var attempt = 0; attempt < 24; attempt++) {
          var _loop3 = function _loop3(i) {
            var row = Math.floor(i / cols),
              column = i % cols;
            var allowed = types.filter(function (type) {
              return !(column >= 2 && board[i - 1] === type && board[i - 2] === type) && !(row >= 2 && board[i - cols] === type && board[i - 2 * cols] === type);
            });
            board[i] = allowed[Math.floor(random() * allowed.length)];
          };
          for (var i = 0; i < board.length; i++) {
            _loop3(i);
          }
          if (legalMove(board)) return board;
        }
        return opening(types);
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Chapter.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createForOfIteratorHelperLoose, _extends, cclegacy;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports({
        battleCoinReward: battleCoinReward,
        drawUpgrades: drawUpgrades,
        encounter: encounter,
        enemy: enemy,
        makeRoute: makeRoute,
        tutorialRoute: tutorialRoute,
        unlocked: unlocked,
        worldRoute: worldRoute,
        worldTrack: worldTrack
      });
      cclegacy._RF.push({}, "0a574osDJlBN7cpwuJzJt/d", "Chapter", undefined);
      var upgrades = exports('upgrades', [{
        id: 'atk',
        name: '锋利剑刃',
        description: '剑士伤害 +25%'
      }, {
        id: 'mag',
        name: '奥术增幅',
        description: '法术伤害 +25%'
      }, {
        id: 'def',
        name: '坚固盾牌',
        description: '盾纹章 DP 恢复 +35%'
      }, {
        id: 'heal',
        name: '温柔祷言',
        description: '治疗量 +35%'
      }, {
        id: 'chain',
        name: '连锁风暴',
        description: '连锁伤害提高'
      }, {
        id: 'vital',
        name: '冒险活力',
        description: '恢复 30 HP，局内最大 HP +15'
      }, {
        id: 'sword4',
        name: '剑气分裂',
        description: '剑士四消追加攻击',
        need: 'swordcore'
      }, {
        id: 'counter',
        name: '坚壁反击',
        description: '满 DP 反击伤害提高',
        need: 'guardcore'
      }, {
        id: 'echo',
        name: '奥术回响',
        description: '法术连锁追加伤害',
        need: 'magiccore'
      }, {
        id: 'overflow',
        name: '生命护盾',
        description: '治疗溢出转化更多 DP',
        need: 'healcore'
      }]);
      function drawUpgrades(stacks, equipped, random) {
        if (random === void 0) {
          random = Math.random;
        }
        var pool = upgrades.filter(function (upgrade) {
          var _stacks$upgrade$id;
          return (!upgrade.need || equipped(upgrade.need)) && ((_stacks$upgrade$id = stacks[upgrade.id]) != null ? _stacks$upgrade$id : 0) < 3;
        });
        var options = [];
        while (options.length < 3 && pool.length) options.push(pool.splice(Math.floor(random() * pool.length), 1)[0]);
        return options;
      }
      var enemyTags = {
        wolf: ['living', 'beast', 'melee'],
        boss: ['living', 'beast', 'melee', 'giant', 'boss'],
        boar: ['living', 'beast', 'melee'],
        vine: ['living', 'plant', 'ranged'],
        bear: ['living', 'beast', 'melee', 'giant'],
        bat: ['living', 'beast', 'ranged', 'flying'],
        beetle: ['living', 'beast', 'melee', 'armor'],
        golem: ['elemental', 'humanoid', 'giant', 'melee', 'armor'],
        ghost: ['undead', 'ranged'],
        frog: ['living', 'beast', 'melee'],
        lich: ['undead', 'humanoid', 'ranged', 'mage'],
        knight: ['undead', 'humanoid', 'melee', 'armor'],
        wizard: ['undead', 'humanoid', 'ranged', 'mage'],
        dragon: ['undead', 'beast', 'giant', 'ranged']
      };
      function enemy(name, art, hp, atk, extraTags) {
        var _enemyTags$art;
        if (extraTags === void 0) {
          extraTags = [];
        }
        var tags = Array.from(new Set([].concat((_enemyTags$art = enemyTags[art]) != null ? _enemyTags$art : [], extraTags)));
        return {
          name: name,
          art: art,
          hp: hp,
          atk: atk,
          tags: tags
        };
      }
      var locations = exports('locations', ['forest', 'village', 'tower', 'mine', 'swamp']);
      var locationNames = exports('locationNames', {
        village: '溪桥村',
        forest: '苔石森林',
        mine: '废弃矿坑',
        swamp: '迷雾沼泽',
        tower: '迷雾高塔'
      });
      var dungeonIds = exports('dungeonIds', ['forest', 'mine', 'swamp', 'tower']);
      var dungeons = exports('dungeons', {
        forest: {
          depth: 4,
          loot: {
            gold: 7,
            herb: 2
          },
          enemies: [enemy('林间野猪', 'boar', 110, 13), enemy('藤蔓怪', 'vine', 125, 12)],
          boss: enemy('森林巨兽', 'bear', 220, 19, ['boss'])
        },
        mine: {
          depth: 5,
          loot: {
            gold: 9,
            ore: 2
          },
          enemies: [enemy('矿洞蝙蝠', 'bat', 145, 16), enemy('石甲虫', 'beetle', 170, 16, ['armor'])],
          boss: enemy('晶岩守卫', 'golem', 290, 23, ['boss', 'armor'])
        },
        swamp: {
          depth: 5,
          loot: {
            gold: 10,
            essence: 2
          },
          enemies: [enemy('雾中幽灵', 'ghost', 170, 18), enemy('毒蛙', 'frog', 190, 18)],
          boss: enemy('沼泽巫妖', 'lich', 340, 26, ['boss'])
        },
        tower: {
          depth: 7,
          loot: {
            gold: 15,
            crystal: 2
          },
          enemies: [enemy('雾影骑士', 'knight', 225, 23, ['armor']), enemy('深渊法师', 'wizard', 230, 25)],
          boss: enemy('迷雾守护者', 'dragon', 510, 33, ['boss'])
        }
      });
      var battlePurse = {
        battle: 4,
        elite: 6,
        boss: 8
      };
      var dungeonRewardMultiplier = exports('dungeonRewardMultiplier', function dungeonRewardMultiplier(kind) {
        return kind === 'boss' ? 2 : kind === 'elite' ? 1.5 : 1;
      });
      function battleCoinReward(room, dungeon) {
        var _dungeons$dungeon$loo, _room$type;
        if (room.coinReward !== undefined) return room.coinReward;
        if (!dungeon) return 0;
        var reward = (_dungeons$dungeon$loo = dungeons[dungeon].loot.gold) != null ? _dungeons$dungeon$loo : 0;
        return battlePurse[(_room$type = room.type) != null ? _room$type : 'battle'] + Math.ceil(reward * dungeonRewardMultiplier(room.type));
      }
      var roomRewards = exports('roomRewards', {
        travelerGold: 7,
        chestGold: 9,
        chestOre: 1
      });
      function unlocked(id, cleared) {
        if (id === 'village' || id === 'forest') return true;
        return cleared.has(dungeonIds[dungeonIds.indexOf(id) - 1]);
      }
      var worldPoints = exports('worldPoints', {
        village: [47, 67.7],
        forest: [27, 55.5],
        ford: [47.5, 53.7],
        mine: [48.1, 31.8],
        ridge: [62.5, 43.4],
        swamp: [83.2, 68.8],
        east: [82.3, 49.8],
        tower: [89.2, 32.2]
      });
      var worldRoads = [['village', 'ford', [[47, 63], [47.5, 58]]], ['forest', 'ford', [[32, 55.1], [35.8, 53.2], [39.2, 51.9], [43.5, 52.7]]], ['ford', 'ridge', [[51.5, 51.6], [55.5, 47.1], [58.7, 44.5]]], ['mine', 'ridge', [[48.2, 34.8], [49.8, 36.3], [54.5, 37.6], [59.4, 39.2], [61.5, 40.8]]], ['ridge', 'east', [[66.5, 44], [70.2, 46.2], [74.4, 48.8], [78.5, 49.9]]], ['east', 'swamp', [[81.1, 53.6], [80.4, 57.7], [80.7, 60.3], [82.9, 64.9]]], ['east', 'tower', [[83.7, 45.5], [83.7, 42], [83.8, 37.5], [86.5, 34.2]]]];

      /** Includes the destination and each centerline waypoint after the starting point. */
      function worldTrack(path) {
        return path.slice(1).flatMap(function (point, index) {
          var previous = path[index];
          var road = worldRoads.find(function (_ref) {
            var a = _ref[0],
              b = _ref[1];
            return a === previous && b === point || b === previous && a === point;
          });
          var waypoints = road ? road[0] === previous ? road[2] : road[2].slice().reverse() : [];
          return [].concat(waypoints, [worldPoints[point]]);
        });
      }
      function worldRoute(from, to, canVisit) {
        var paths = [[from]];
        var visited = new Set([from]);
        for (var _i = 0, _paths = paths; _i < _paths.length; _i++) {
          var path = _paths[_i];
          var last = path[path.length - 1];
          if (last === to) return path;
          for (var _iterator = _createForOfIteratorHelperLoose(worldRoads), _step; !(_step = _iterator()).done;) {
            var _step$value = _step.value,
              a = _step$value[0],
              b = _step$value[1];
            var next = a === last ? b : b === last ? a : undefined;
            if (!next || visited.has(next) || !canVisit(next)) continue;
            visited.add(next);
            paths.push([].concat(path, [next]));
          }
        }
        return [];
      }
      function encounter(id, depth, type, random) {
        if (random === void 0) {
          random = Math.random;
        }
        var config = dungeons[id];
        var source = type === 'boss' ? config.boss : config.enemies[Math.floor(random() * config.enemies.length)];
        var factor = type === 'elite' ? 1.45 : 1;
        var spec = _extends({}, source, {
          hp: Math.round(source.hp * factor * 1.65 * (1 + depth * .07)),
          atk: Math.round(source.atk * factor)
        });
        return {
          kind: 'battle',
          type: type,
          enemies: [spec.hp],
          encounters: [spec]
        };
      }
      function makeRoute(id, random) {
        if (random === void 0) {
          random = Math.random;
        }
        if (id === 'mine') {
          var rescue = encounter(id, 2, 'battle', function () {
            return .8;
          });
          return [encounter(id, 0, 'battle', function () {
            return 0;
          }), {
            kind: 'rest'
          }, _extends({}, rescue, {
            rescueCells: [23, 30]
          }), {
            kind: 'chest'
          }, encounter(id, 4, 'boss', random)];
        }
        if (id === 'swamp') {
          var front = encounter(id, 2, 'battle', function () {
            return .8;
          }).encounters[0];
          var rear = encounter(id, 2, 'battle', function () {
            return 0;
          }).encounters[0];
          var ambush = [_extends({}, front, {
            hp: Math.round(front.hp * .59),
            atk: 9
          }), _extends({}, rear, {
            hp: Math.round(rear.hp * .59),
            atk: 8
          })];
          return [encounter(id, 0, 'battle', function () {
            return 0;
          }), {
            kind: 'event'
          }, {
            kind: 'battle',
            type: 'battle',
            encounters: ambush,
            enemies: ambush.map(function (foe) {
              return foe.hp;
            })
          }, {
            kind: 'rest'
          }, encounter(id, 4, 'boss', random)];
        }
        var depth = dungeons[id].depth;
        if (id === 'tower') {
          return [encounter(id, 0, 'battle', function () {
            return 0;
          }), {
            kind: 'merchant'
          }, encounter(id, 2, 'battle', function () {
            return .8;
          }), {
            kind: 'rest'
          }, encounter(id, 4, 'elite', function () {
            return 0;
          }), {
            kind: 'chest'
          }, encounter(id, 6, 'boss', random)];
        }
        return Array.from({
          length: depth
        }, function (_, floor) {
          if (floor === 0) return encounter(id, floor, 'battle', random);
          if (floor === depth - 1) return encounter(id, floor, 'boss', random);
          if (floor === depth - 2 && depth > 4) return encounter(id, floor, random() < .65 ? 'elite' : 'battle', random);
          var options = ['battle', 'battle', 'battle', 'battle', 'merchant', 'event', 'rest', 'chest'];
          if (floor < depth - 2) options.push('fork');
          var kind = options[Math.floor(random() * options.length)];
          return kind === 'battle' ? encounter(id, floor, 'battle', random) : {
            kind: kind
          };
        });
      }
      function tutorialRoute() {
        return [{
          kind: 'battle',
          coinReward: 4,
          enemies: [72, 72],
          encounters: [enemy('灰狼', 'wolf', 72, 3), enemy('林狼', 'wolf', 72, 3)]
        }, {
          kind: 'rescue'
        }, {
          kind: 'recruit'
        }, {
          kind: 'battle',
          type: 'boss',
          coinReward: 8,
          enemies: [100],
          encounters: [enemy('裂印巨狼', 'boss', 100, 7, ['boss'])]
        }];
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CombatTags.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _extends, cclegacy;
  return {
    setters: [function (module) {
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('partyFormation', partyFormation);
      cclegacy._RF.push({}, "f54e6IZKpBMi4Jxo1kfNp5v", "CombatTags", undefined);
      var combatTagNames = exports('combatTagNames', {
        melee: '近战',
        ranged: '远程',
        healer: '治疗者',
        mage: '法师',
        living: '生物',
        human: '人类',
        humanoid: '人形',
        beast: '野兽',
        plant: '植物',
        elemental: '元素生物',
        undead: '亡灵生物',
        giant: '巨型',
        armor: '重甲',
        boss: '首领',
        'stun-immune': '免疫眩晕',
        flying: '飞行单位'
      });
      var compactSlots = [{
        x: -156,
        front: true
      }, {
        x: -192,
        front: false
      }];
      var meleeSlots = [{
        x: -48,
        front: true
      }, {
        x: -102,
        front: false
      }];
      var rangedSlots = [{
        x: -133,
        front: true
      }, {
        x: -192,
        front: false
      }];
      function partyFormation(party, tagsFor) {
        if (party.length <= 2) return party.map(function (id, index) {
          return _extends({
            id: id
          }, compactSlots[index]);
        });
        var melee = party.filter(function (id) {
          return tagsFor(id).includes('melee');
        });
        var ranged = party.filter(function (id) {
          return !tagsFor(id).includes('melee');
        });
        var available = [].concat(meleeSlots.slice(Math.min(melee.length, 2)), rangedSlots.slice(Math.min(ranged.length, 2)));
        return [].concat(melee.map(function (id, index) {
          var _meleeSlots$index;
          return _extends({
            id: id
          }, (_meleeSlots$index = meleeSlots[index]) != null ? _meleeSlots$index : available.shift());
        }), ranged.map(function (id, index) {
          var _rangedSlots$index;
          return _extends({
            id: id
          }, (_rangedSlots$index = rangedSlots[index]) != null ? _rangedSlots$index : available.shift());
        }));
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DungeonDirector.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5f2fd6RWPlBbaRGIWxzlwZ6", "DungeonDirector", undefined);
      var DungeonDirector = exports('DungeonDirector', /*#__PURE__*/function () {
        function DungeonDirector(route) {
          this.position = 0;
          this.route = route;
        }
        var _proto = DungeonDirector.prototype;
        _proto.advance = function advance(expected) {
          if (!expected || this.room !== expected) return false;
          this.position++;
          return true;
        };
        _proto.choose = function choose(expected, room) {
          if (this.room !== expected || expected.kind !== 'fork') return false;
          var next = this.route[this.position + 1];
          if (!next || next.kind === 'battle' && next.type === 'boss') return false;
          this.route[this.position + 1] = room;
          return this.advance(expected);
        };
        _createClass(DungeonDirector, [{
          key: "room",
          get: function get() {
            return this.route[this.position];
          }
        }, {
          key: "depth",
          get: function get() {
            return this.position;
          }
        }, {
          key: "rooms",
          get: function get() {
            return this.route;
          }
        }]);
        return DungeonDirector;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Game.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Inventory.ts', './GameAudio.ts', './DungeonDirector.ts', './Chapter.ts', './CombatTags.ts', './Board.ts', './BattleMotion.ts', './BattleRules.ts', './MineTrial.ts', './TemplateBoardFx.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _extends, _asyncToGenerator, _createClass, _regeneratorRuntime, cclegacy, _decorator, Node, UITransform, Graphics, Color, Label, Sprite, SpriteFrame, Rect, Size, sys, Mask, Vec3, tween, UIOpacity, Component, profiler, resources, EffectAsset, Material, Texture2D, Inventory, heroes, equipment, resourceNames, GameAudio, DungeonDirector, locations, dungeonIds, enemy, tutorialRoute, dungeonRewardMultiplier, dungeons, unlocked, locationNames, makeRoute, drawUpgrades, encounter, worldPoints, roomRewards, battleCoinReward, worldRoute, worldTrack, partyFormation, opening, newBoard, cols, legalMove, adjacent, matches, planRefill, mineGravity, planWave, BattleMotion, selectTargets, planSkill, skillOwner, mineTrialTitle, mineTrialRandom, makeMineTrial, TemplateBoardFx;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _extends = module.extends;
      _asyncToGenerator = module.asyncToGenerator;
      _createClass = module.createClass;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      UITransform = module.UITransform;
      Graphics = module.Graphics;
      Color = module.Color;
      Label = module.Label;
      Sprite = module.Sprite;
      SpriteFrame = module.SpriteFrame;
      Rect = module.Rect;
      Size = module.Size;
      sys = module.sys;
      Mask = module.Mask;
      Vec3 = module.Vec3;
      tween = module.tween;
      UIOpacity = module.UIOpacity;
      Component = module.Component;
      profiler = module.profiler;
      resources = module.resources;
      EffectAsset = module.EffectAsset;
      Material = module.Material;
      Texture2D = module.Texture2D;
    }, function (module) {
      Inventory = module.Inventory;
      heroes = module.heroes;
      equipment = module.equipment;
      resourceNames = module.resourceNames;
    }, function (module) {
      GameAudio = module.GameAudio;
    }, function (module) {
      DungeonDirector = module.DungeonDirector;
    }, function (module) {
      locations = module.locations;
      dungeonIds = module.dungeonIds;
      enemy = module.enemy;
      tutorialRoute = module.tutorialRoute;
      dungeonRewardMultiplier = module.dungeonRewardMultiplier;
      dungeons = module.dungeons;
      unlocked = module.unlocked;
      locationNames = module.locationNames;
      makeRoute = module.makeRoute;
      drawUpgrades = module.drawUpgrades;
      encounter = module.encounter;
      worldPoints = module.worldPoints;
      roomRewards = module.roomRewards;
      battleCoinReward = module.battleCoinReward;
      worldRoute = module.worldRoute;
      worldTrack = module.worldTrack;
    }, function (module) {
      partyFormation = module.partyFormation;
    }, function (module) {
      opening = module.opening;
      newBoard = module.newBoard;
      cols = module.cols;
      legalMove = module.legalMove;
      adjacent = module.adjacent;
      matches = module.matches;
      planRefill = module.planRefill;
      mineGravity = module.mineGravity;
      planWave = module.planWave;
    }, function (module) {
      BattleMotion = module.BattleMotion;
    }, function (module) {
      selectTargets = module.selectTargets;
      planSkill = module.planSkill;
      skillOwner = module.skillOwner;
    }, function (module) {
      mineTrialTitle = module.mineTrialTitle;
      mineTrialRandom = module.mineTrialRandom;
      makeMineTrial = module.makeMineTrial;
    }, function (module) {
      TemplateBoardFx = module.TemplateBoardFx;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "293c0LpkiNDzKcsh+fuvggE", "Game", undefined);
      var ccclass = _decorator.ccclass;
      var stageGrid = {
        width: 470,
        height: 270,
        centerY: 280,
        titleY: 395,
        meterX: 132,
        hpY: 342,
        secondaryY: 318,
        groundY: 179,
        rearGroundY: 199
      };
      // The reel's vertical aperture and stop list are in source-image coordinates.
      // Static rooms and moving views sample the same aperture at a uniform scale.
      var dungeonReels = {
        forest: {
          top: 0,
          bottom: .92,
          stops: [0, .27, .51, .73, 1]
        },
        mine: {
          top: 0,
          bottom: .93,
          stops: [0, .25, .50, .75, 1]
        },
        swamp: {
          top: 0,
          bottom: .93,
          stops: [0, .25, .50, .75, 1]
        },
        tower: {
          top: 0,
          bottom: 1,
          stops: [0, 1 / 6, 2 / 6, 3 / 6, 4 / 6, 5 / 6, 1]
        }
      };
      var battleToolbar = {
        x: -162,
        gap: 108,
        y: -394,
        width: 102
      };
      var portraitBottomPadding = {
        'hero-s': 14 / 192,
        'hero-d': 17 / 192,
        'hero-h': 11 / 192,
        'hero-m': 20 / 192,
        wolf: 41 / 320,
        boss: 42 / 320,
        boar: 47 / 320,
        vine: 30 / 300,
        bear: 31 / 300,
        bat: 47 / 300,
        beetle: 54 / 300,
        golem: 42 / 300,
        ghost: 46 / 300,
        frog: 38 / 300,
        lich: 32 / 300,
        dragon: 26 / 300,
        knight: 8 / 300,
        wizard: 8 / 300,
        'npc-chief': 5 / 272,
        'npc-innkeeper': 5 / 272,
        'npc-shop': 5 / 272,
        'npc-smith': 5 / 272,
        'dungeon-traveler': 4 / 288,
        'dungeon-chest': 22 / 263,
        'dungeon-merchant': 3 / 1199
      };
      // Lower-silhouette bounds keep the ellipse under the feet even when the
      // portrait canvas is offset or its upper body is much wider than its stance.
      var portraitFootprint = {
        'hero-s': [.073, .740],
        'hero-d': [.109, .849],
        'hero-h': [.193, .729],
        'hero-m': [.109, .693],
        wolf: [.191, .822],
        boss: [.097, .778],
        boar: [.191, .900],
        vine: [.140, .917],
        bear: [.103, .920],
        bat: [.337, .627],
        beetle: [.150, .893],
        golem: [.167, .790],
        ghost: [.337, .633],
        frog: [.070, .897],
        lich: [.167, .907],
        dragon: [.060, .943],
        knight: [.283, .717],
        wizard: [.430, .853],
        'npc-chief': [.326, .634],
        'npc-innkeeper': [.259, .607],
        'npc-shop': [.214, .536],
        'npc-smith': [.326, .795],
        'dungeon-traveler': [.289, .620],
        'dungeon-chest': [.097, .865],
        'dungeon-merchant': [.060, .537]
      };
      var enemyPortraitSize = {
        boss: 142,
        knight: 188,
        wizard: 188,
        dragon: 176,
        bear: 162,
        golem: 164,
        lich: 148
      };
      var uiSlices = {
        'trial-ui-button': {
          left: 100,
          right: 77,
          top: 71,
          bottom: 61,
          scale: .23
        },
        'trial-ui-button-off': {
          left: 74,
          right: 66,
          top: 58,
          bottom: 53,
          scale: .32
        },
        'trial-ui-banner': {
          left: 31,
          right: 31,
          top: 30,
          bottom: 30,
          scale: .24
        },
        'map-parchment': {
          left: 49,
          right: 49,
          top: 24,
          bottom: 24,
          scale: .34
        }
      };
      var FourEmblemsGame = exports('FourEmblemsGame', (_dec = ccclass('FourEmblemsGame'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FourEmblemsGame, _Component);
        function FourEmblemsGame() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.ui = void 0;
          _this.inventory = new Inventory();
          _this.audio = void 0;
          _this.textures = new Map();
          _this.stageFrames = new Map();
          _this.stageReels = new Map();
          _this.skillSweep = void 0;
          _this.tintedFrame = void 0;
          _this.hintIdle = 0;
          _this.stopHint = void 0;
          _this.templateFxFrames = void 0;
          _this.boardFx = void 0;
          _this.trialFxViewport = void 0;
          _this.tileLayer = void 0;
          _this.trial = void 0;
          _this.types = ['s', 'stone', 'fist', 'cry'];
          _this.board = [];
          _this.cells = [];
          _this.selected = -1;
          _this.guideMode = void 0;
          _this.guideLayer = void 0;
          _this.guideHand = void 0;
          _this.battleModal = void 0;
          _this.motion = void 0;
          _this.battlePhase = void 0;
          _this.turn = 1;
          _this.autoRequest = 0;
          _this.battleLogs = [];
          _this.rally = false;
          _this.stunned = new Set();
          _this.foes = [];
          _this.healthBar = void 0;
          _this.guardBar = void 0;
          _this.enemyMeters = [];
          _this.coinText = void 0;
          _this.lockText = void 0;
          _this.lastFallen = void 0;
          _this.particlePool = [];
          _this.stageContent = void 0;
          _this.firstSwap = true;
          _this.tiles = [];
          _this.chargedTiles = new WeakMap();
          _this.carriedBoard = void 0;
          _this.rescueCells = new Set();
          _this.automatic = false;
          _this.battleRoot = void 0;
          _this.saveKey = 'four-emblems-cocos-chapter-one-v1';
          _this.busy = false;
          _this.party = ['s'];
          _this.phase = 'wolves';
          _this.taught = false;
          _this.reported = false;
          _this.villageGuidePending = false;
          _this.location = 0;
          _this.gold = 20;
          _this.exp = 0;
          _this.dp = 0;
          _this.dungeon = void 0;
          _this.cleared = new Set();
          _this.hunt = void 0;
          _this.adventure = void 0;
          _this.tutorialXP = 0;
          _this.rewardedRooms = new WeakSet();
          _this.enemyNodes = [];
          _this.lock = void 0;
          _this.heroes = new Map();
          _this.enemyMax = [];
          _this.hp = 45;
          _this.enemies = [72, 72];
          _this.potion = 1;
          _this.status = void 0;
          return _this;
        }
        var _proto = FourEmblemsGame.prototype;
        _proto.heroAttack = function heroAttack(id) {
          return this.inventory.stats(id).attack;
        };
        _proto.gainXP = function gainXP(amount) {
          this.exp += amount;
          for (var _iterator = _createForOfIteratorHelperLoose(this.party), _step; !(_step = _iterator()).done;) {
            var id = _step.value;
            this.inventory.experience[id] += amount;
          }
        };
        _proto.addMaterials = function addMaterials(gains) {
          var _gains$gold;
          this.gold += (_gains$gold = gains.gold) != null ? _gains$gold : 0;
          for (var _i = 0, _Object$keys = Object.keys(this.inventory.materials); _i < _Object$keys.length; _i++) {
            var _gains$key;
            var key = _Object$keys[_i];
            this.inventory.materials[key] += (_gains$key = gains[key]) != null ? _gains$key : 0;
          }
        };
        _proto.receiveGold = function receiveGold(amount) {
          if (this.adventure) this.adventure.coins += amount;else this.gold += amount;
        };
        _proto.spendGold = function spendGold(amount) {
          var _this$adventure$coins, _this$adventure;
          if (this.walletGold < amount) return false;
          var found = Math.min(amount, (_this$adventure$coins = (_this$adventure = this.adventure) == null ? void 0 : _this$adventure.coins) != null ? _this$adventure$coins : 0);
          if (this.adventure) this.adventure.coins -= found;
          this.gold -= amount - found;
          return true;
        };
        _proto.start = /*#__PURE__*/function () {
          var _start = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this2 = this;
            var fx, sweep, sceneArt, skillArt;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  profiler.hideStats();
                  this.audio = new GameAudio(this.node);
                  fx = TemplateBoardFx.load().then(function (frames) {
                    _this2.templateFxFrames = frames;
                  });
                  sweep = new Promise(function (resolve) {
                    return resources.load('effects/skill-sweep', EffectAsset, function (error, effect) {
                      if (!error) {
                        _this2.skillSweep = new Material();
                        _this2.skillSweep.initialize({
                          effectAsset: effect,
                          defines: {
                            USE_TEXTURE: true
                          }
                        });
                        _this2.tintedFrame = new Material();
                        _this2.tintedFrame.initialize({
                          effectAsset: effect,
                          defines: {
                            USE_TEXTURE: true,
                            TINTED_FRAME: true
                          }
                        });
                      }
                      resolve();
                    });
                  });
                  sceneArt = ['hurt-cracks', 'map-parchment', 'world-travel', 'world-village-cut', 'gear-stage', 'village-chief-stage', 'village-shop-stage', 'village-tavern-stage', 'village-smith-stage', 'npc-chief', 'npc-shop', 'npc-innkeeper', 'npc-smith', 'village-ground', 'dungeon-traveler', 'dungeon-chest', 'dungeon-merchant'].concat(['chief', 'shop', 'tavern', 'smith', 'gate'].map(function (name) {
                    return 'village-building-' + name;
                  }), ['slot-main', 'slot-off', 'slot-armor', 'slot-accessory', 'gear-arrow', 'travel-plains', 'travel-village-edge', 'travel-mine-edge'], dungeonIds.map(function (id) {
                    return id + '-reel';
                  }), ['village', 'mine', 'forest', 'swamp', 'tower'].map(function (name) {
                    return 'travel-' + name + '-plains';
                  }));
                  skillArt = ['skill-frame', 'advanced-frame'].concat(['hero-s', 'hero-d', 'hero-m', 'hero-h', 'wolf', 'boss', 'boar', 'vine', 'bear', 'bat', 'beetle', 'golem', 'ghost', 'frog', 'lich', 'dragon', 'knight', 'wizard'].map(function (name) {
                    return 'hit-white-' + name;
                  }));
                  _context.next = 8;
                  return Promise.all([fx, sweep].concat([].concat(sceneArt, skillArt, ['world', 'village', 'village-stage', 'wolf', 'boss', 'boar', 'vine', 'bear', 'bat', 'beetle', 'golem', 'ghost', 'frog', 'lich', 'dragon', 'knight', 'wizard', 's', 'd', 'm', 'h', 'stone', 'fist', 'cry', 'staff', 'hero-s', 'hero-d', 'hero-m', 'hero-h', 'enemy-soul', 'combat-impact', 'trial-ui-banner', 'trial-ui-button', 'trial-ui-button-off', 'trial-ui-clear', 'trial-ui-back']).map(function (name) {
                    return new Promise(function (resolve) {
                      return resources.load('art/' + name + '/texture', Texture2D, function (error, texture) {
                        if (!error) {
                          var frame = new SpriteFrame();
                          frame.texture = texture;
                          _this2.textures.set(name, frame);
                        }
                        resolve();
                      });
                    });
                  })));
                case 8:
                  if (this.isValid) {
                    this.prepareStageReels();
                    this.menu();
                  }
                case 9:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function start() {
            return _start.apply(this, arguments);
          }
          return start;
        }();
        _proto.box = function box(name, x, y, w, h, color, parent) {
          if (parent === void 0) {
            parent = this.ui;
          }
          var node = new Node(name);
          node.layer = this.node.layer;
          parent.addChild(node);
          node.setPosition(x, y);
          node.addComponent(UITransform).setContentSize(w, h);
          if (color) {
            var g = node.addComponent(Graphics);
            g.fillColor = Color.fromHEX(new Color(), color);
            g.roundRect(-w / 2, -h / 2, w, h, 10);
            g.fill();
          }
          return node;
        };
        _proto.label = function label(value, x, y, w, size, parent) {
          if (w === void 0) {
            w = 440;
          }
          if (size === void 0) {
            size = 23;
          }
          if (parent === void 0) {
            parent = this.ui;
          }
          var node = this.box(value, x, y, w, size * 2, undefined, parent);
          var label = node.addComponent(Label);
          label.string = value;
          label.fontSize = size;
          label.fontFamily = 'Microsoft YaHei';
          label.lineHeight = size + 5;
          label.color = Color.fromHEX(new Color(), '#fff3d2');
          label.overflow = Label.Overflow.SHRINK;
          return label;
        };
        _proto.art = function art(name, x, y, w, h, parent) {
          if (parent === void 0) {
            parent = this.ui;
          }
          var frame = this.textures.get(name);
          if (!frame) return;
          return this.paintFrame(name, frame, x, y, w, h, parent);
        };
        _proto.paintFrame = function paintFrame(name, frame, x, y, w, h, parent) {
          var node = this.box(name, x, y, w, h, undefined, parent);
          var sprite = node.addComponent(Sprite);
          sprite.sizeMode = Sprite.SizeMode.CUSTOM;
          sprite.spriteFrame = frame;
          return node;
        };
        _proto.frameCrop = function frameCrop(source, x, y, w, h) {
          var frame = new SpriteFrame();
          frame.reset({
            texture: source.texture,
            rect: new Rect(x, y, w, h),
            originalSize: new Size(w, h)
          });
          // The same source texture is shared by the still camera and the moving reel.
          frame.packable = false;
          return frame;
        };
        _proto.prepareStageReels = function prepareStageReels() {
          var _this3 = this;
          var width = stageGrid.width,
            height = stageGrid.height;
          var _loop = function _loop() {
            var id = _step2.value;
            var source = _this3.textures.get(id + '-reel');
            if (!source) return 1; // continue
            var _source$rect = source.rect,
              w = _source$rect.width,
              h = _source$rect.height;
            var _dungeonReels$id = dungeonReels[id],
              top = _dungeonReels$id.top,
              bottom = _dungeonReels$id.bottom,
              stops = _dungeonReels$id.stops;
            var aperture = Math.min(h * (bottom - top), w * height / width);
            var window = aperture * width / height;
            var y = Math.min(h - aperture, h * top);
            var cropped = _this3.frameCrop(source, 0, y, w, aperture);
            _this3.stageFrames.set(id + '-reel', cropped);
            _this3.stageReels.set(id, {
              width: w * height / aperture,
              stops: stops
            });
            stops.forEach(function (stop, i) {
              return _this3.stageFrames.set('stage-' + id + '-' + i, _this3.frameCrop(source, stop * (w - window), y, window, aperture));
            });
          };
          for (var _iterator2 = _createForOfIteratorHelperLoose(dungeonIds), _step2; !(_step2 = _iterator2()).done;) {
            if (_loop()) continue;
          }
        };
        _proto.stageBackdrop = function stageBackdrop(name, x, y, parent) {
          var _frame;
          if (x === void 0) {
            x = 0;
          }
          if (y === void 0) {
            y = stageGrid.centerY;
          }
          if (parent === void 0) {
            parent = this.ui;
          }
          var width = stageGrid.width,
            height = stageGrid.height;
          var frame = this.stageFrames.get(name);
          if (!frame) {
            var source = this.textures.get(name);
            if (source) {
              var _source$rect2 = source.rect,
                w = _source$rect2.width,
                h = _source$rect2.height;
              var scale = Math.max(width / w, height / h);
              var cropW = width / scale,
                cropH = height / scale;
              // Anchor the bottom so framing can trim scenery but keeps the walking surface.
              frame = this.frameCrop(source, (w - cropW) / 2, h - cropH, cropW, cropH);
              this.stageFrames.set(name, frame);
            }
          }
          (_frame = frame) != null ? _frame : frame = this.stageFrames.get('stage-forest-0');
          if (frame) return this.paintFrame(name, frame, x, y, width, height, parent);
          return this.box(name, x, y, width, height, '#24342b', parent);
        };
        _proto.slicedArt = function slicedArt(name, x, y, w, h, parent) {
          if (parent === void 0) {
            parent = this.ui;
          }
          var _uiSlices$name = uiSlices[name],
            left = _uiSlices$name.left,
            right = _uiSlices$name.right,
            top = _uiSlices$name.top,
            bottom = _uiSlices$name.bottom,
            scale = _uiSlices$name.scale;
          // Slice in source pixels, then scale the fixed-size corners into stage units.
          var node = this.art(name, x, y, w / scale, h / scale, parent);
          if (!node) return;
          var sprite = node.getComponent(Sprite);
          var frame = sprite.spriteFrame;
          frame.insetLeft = left;
          frame.insetRight = right;
          frame.insetTop = top;
          frame.insetBottom = bottom;
          sprite.type = Sprite.Type.SLICED;
          node.setScale(scale, scale, 1);
          return node;
        };
        _proto.portraitY = function portraitY(name, ground, height) {
          var _portraitBottomPaddin;
          return ground + height * (.5 - ((_portraitBottomPaddin = portraitBottomPadding[name]) != null ? _portraitBottomPaddin : 0));
        };
        _proto.reset = function reset(background) {
          var _this$boardFx, _this$ui, _this$ui2;
          if (background === void 0) {
            background = 'travel-forest-plains';
          }
          this.clearIdleHint();
          (_this$boardFx = this.boardFx) == null || _this$boardFx.dispose();
          this.boardFx = undefined;
          this.trialFxViewport = undefined;
          (_this$ui = this.ui) == null || _this$ui.removeFromParent();
          (_this$ui2 = this.ui) == null || _this$ui2.destroy();
          this.ui = this.box('Game', 0, 0, 480, 854, '#26352e', this.node);
          this.box('Interaction panel', 0, -141, 470, 559, '#314339');
          this.stageBackdrop(background);
        };
        _proto.button = function button(text, y, action, x, w, selected) {
          var _this4 = this;
          if (x === void 0) {
            x = 0;
          }
          if (w === void 0) {
            w = 360;
          }
          if (selected === void 0) {
            selected = false;
          }
          var button = this.box(text, x, y, w, 48, '#21362e');
          this.box('Button edge', 0, 2, w - 2, 45, '#b5905d', button);
          this.box('Button face', 0, 3, w - 6, 41, selected ? '#f1bf69' : '#f1deaf', button);
          var title = this.label(text, 0, 3, w - 16, 19, button);
          title.color = Color.fromHEX(new Color(), '#2a382d');
          button.on(Node.EventType.TOUCH_END, function () {
            _this4.audio.play('click');
            action();
          });
          return button;
        };
        _proto.trialButton = function trialButton(text, y, action, x, w, icon, muted) {
          var _this5 = this;
          if (x === void 0) {
            x = 0;
          }
          if (w === void 0) {
            w = 310;
          }
          if (muted === void 0) {
            muted = false;
          }
          var button = this.box(text, x, y, w, 48, '#234257');
          this.slicedArt(muted ? 'trial-ui-button-off' : 'trial-ui-button', 0, 0, w, 48, button);
          if (icon) this.art(icon, -w / 2 + 26, 1, 20, 20, button);
          var label = this.outline(this.label(text, icon ? 9 : 0, 1, w - (icon ? 46 : 12), 19, button));
          button.on(Node.EventType.TOUCH_END, function () {
            _this5.audio.playTrial('click');
            action();
          });
          return {
            button: button,
            label: label
          };
        };
        _proto.save = function save() {
          if (!this.taught || this.trial) return;
          var party = this.party,
            reported = this.reported,
            location = this.location,
            gold = this.gold,
            exp = this.exp,
            dp = this.dp,
            hp = this.hp,
            potion = this.potion,
            inventory = this.inventory;
          sys.localStorage.setItem(this.saveKey, JSON.stringify({
            party: party,
            reported: reported,
            location: location,
            gold: gold,
            exp: exp,
            dp: dp,
            hp: hp,
            potion: potion,
            inventory: inventory,
            cleared: Array.from(this.cleared),
            hunt: this.hunt,
            villageGuidePending: this.villageGuidePending
          }));
        };
        _proto.resume = function resume() {
          try {
            var _state$hunt, _state$hunt2, _state$hunt3;
            var state = JSON.parse(sys.localStorage.getItem(this.saveKey) || 'null');
            if (!state || !Array.isArray(state.party) || state.party[0] !== 's' || new Set(state.party).size !== state.party.length || state.party.some(function (id) {
              return !['s', 'h', 'd', 'm'].includes(id);
            })) return false;
            var safe = function safe(n, max, fallback) {
              return Number.isFinite(n) ? Math.max(0, Math.min(max, Math.floor(n))) : fallback;
            };
            this.party = state.party;
            this.inventory = new Inventory();
            this.inventory.restore(state.inventory);
            this.reported = state.reported === true;
            this.villageGuidePending = state.villageGuidePending === true && !this.reported;
            this.location = safe(state.location, locations.length - 1, 0);
            this.cleared = new Set(Array.isArray(state.cleared) ? dungeonIds.filter(function (id) {
              return state.cleared.includes(id);
            }) : []);
            // Old Cocos saves permitted a direct tower visit after the village report.
            if (!Array.isArray(state.cleared) && (state.location === 2 || this.party.includes('m'))) {
              this.cleared = new Set(this.party.includes('m') ? dungeonIds : dungeonIds.slice(0, -1));
            }
            this.hunt = undefined;
            if (((_state$hunt = state.hunt) == null ? void 0 : _state$hunt.state) === 'cooldown' && Number.isFinite(state.hunt.until)) {
              this.hunt = {
                state: 'cooldown',
                until: state.hunt.until
              };
            } else if ((((_state$hunt2 = state.hunt) == null ? void 0 : _state$hunt2.state) === 'active' || ((_state$hunt3 = state.hunt) == null ? void 0 : _state$hunt3.state) === 'ready') && dungeonIds.includes(state.hunt.target)) {
              this.hunt = {
                state: state.hunt.state,
                target: state.hunt.target
              };
            }
            this.gold = safe(state.gold, 1e9, 0);
            this.exp = safe(state.exp, 1e9, 0);
            this.hp = Math.max(1, safe(state.hp, this.maxHP, this.maxHP));
            this.dp = safe(state.dp, this.maxDP, 0);
            this.potion = typeof state.potion === 'boolean' ? Number(state.potion) : safe(state.potion, 99, 0);
            this.taught = true;
            return true;
          } catch (_unused) {
            return false;
          }
        };
        _proto.menu = function menu() {
          var _this6 = this;
          this.reset();
          this.button('冒险手册', -213, function () {
            return _this6.showRules(0, function () {
              return _this6.menu();
            });
          }, 0, 360);
          this.box('Title frame', 0, 65, 420, 135, '#23372f');
          this.box('Title rule', 0, 29, 164, 2, '#cfac6e');
          var title = this.label('四纹章地牢', 0, 82, 420, 42);
          title.isBold = true;
          this.label('结界逆转，队伍在苔石森林失散。', 0, -11, 440, 19);
          this.art('hero-s', 0, 263, 104, 104);
          if (sys.localStorage.getItem(this.saveKey)) this.button('继续冒险', -144, function () {
            if (_this6.resume()) _this6.map();
          });
          this.trialButton('矿坑轨道试玩', -302, function () {
            return _this6.startMineTrial();
          });
          this.button('在林中醒来', -80, function () {
            _this6.taught = false;
            _this6.reported = false;
            _this6.villageGuidePending = false;
            _this6.cleared.clear();
            _this6.hunt = undefined;
            _this6.adventure = undefined;
            _this6.inventory = new Inventory();
            _this6.party = ['s'];
            _this6.types = ['s', 'stone', 'fist', 'cry'];
            _this6.location = 0;
            _this6.gold = 20;
            _this6.exp = 0;
            _this6.dp = 0;
            _this6.phase = 'wolves';
            _this6.firstSwap = true;
            _this6.hp = 45;
            _this6.potion = 1;
            _this6.enemies = [72, 72];
            _this6.startTutorial();
          });
        };
        _proto.beginBattle = function beginBattle(reveal) {
          var _this$motion,
            _this$carriedBoard,
            _this$carriedBoard2,
            _this$dungeon,
            _activeRoom$rescueCel,
            _carried$board$slice,
            _this$trial,
            _this$ui$getChildByNa,
            _this$dungeon2,
            _this7 = this;
          (_this$motion = this.motion) == null || _this$motion.cancel();
          this.motion = new BattleMotion();
          this.lastFallen = undefined;
          this.enemyMax = [].concat(this.enemies);
          var carried = ((_this$carriedBoard = this.carriedBoard) == null ? void 0 : _this$carriedBoard.director) === this.dungeon && ((_this$carriedBoard2 = this.carriedBoard) == null ? void 0 : _this$carriedBoard2.types) === this.types.join(',') ? this.carriedBoard : undefined;
          var activeRoom = (_this$dungeon = this.dungeon) == null ? void 0 : _this$dungeon.room;
          this.rescueCells = new Set((activeRoom == null ? void 0 : activeRoom.kind) === 'battle' ? (_activeRoom$rescueCel = activeRoom.rescueCells) != null ? _activeRoom$rescueCel : [] : []);
          this.board = (_carried$board$slice = carried == null ? void 0 : carried.board.slice()) != null ? _carried$board$slice : this.phase === 'wolves' && this.firstSwap ? opening(this.types) : newBoard(this.types, (_this$trial = this.trial) == null ? void 0 : _this$trial.random);
          this.selected = -1;
          this.busy = true;
          this.battlePhase = 'entering';
          this.automatic = false;
          this.turn = 1;
          this.battleLogs = [];
          this.stunned.clear();
          this.rally = false;
          var background = this.dungeonBackdrop();
          this.reset(background);
          var centerY = stageGrid.centerY,
            width = stageGrid.width,
            height = stageGrid.height;
          var stage = this.box('战斗舞台', 0, centerY, width, height);
          stage.addComponent(Mask).type = Mask.Type.GRAPHICS_RECT;
          this.stageContent = this.box('舞台内容', 0, -centerY, width, height, undefined, stage);
          (_this$ui$getChildByNa = this.ui.getChildByName(background)) == null || _this$ui$getChildByNa.setParent(this.stageContent, true);
          this.battleRoot = this.ui;
          this.tiles = [];
          this.particlePool = [];
          this.guideMode = undefined;
          this.guideLayer = undefined;
          this.guideHand = undefined;
          this.battleModal = undefined;
          var room = (_this$dungeon2 = this.dungeon) == null ? void 0 : _this$dungeon2.room;
          var encounters = (room == null ? void 0 : room.kind) === 'battle' ? room.encounters : undefined;
          var defaults = this.phase === 'wolves' ? [enemy('灰狼', 'wolf', 72, 3), enemy('林狼', 'wolf', 72, 3)] : [enemy('裂印巨狼', 'boss', 100, 7)];
          this.foes = this.enemies.map(function (hp, i) {
            var _ref, _encounters$i;
            return (_ref = (_encounters$i = encounters == null ? void 0 : encounters[i]) != null ? _encounters$i : defaults[i]) != null ? _ref : enemy('裂印兽', 'boar', hp, 10);
          });
          var stageTitle = this.trial ? mineTrialTitle : this.phase === 'wolves' || this.phase === 'lessonBoss' ? '苔石森林 · 序章' : {
            forest: '苔石森林',
            mine: '废弃矿坑',
            swamp: '迷雾沼泽',
            tower: '迷雾高塔'
          }[this.phase];
          this.outline(this.label(stageTitle, 0, stageGrid.titleY, 280, 21));
          this.healthBar = this.makeMeter(-stageGrid.meterX, stageGrid.hpY, 121, '#7ecb82');
          this.guardBar = this.makeMeter(-stageGrid.meterX, stageGrid.secondaryY, 121, '#63b5df');
          this.guardBar.root.active = this.showsGuard;
          this.coinText = this.makeCoinDisplay();
          this.status = this.outline(this.label('', 0, 157, 450, 17));
          this.setBattleStatus(this.trial ? '敌人入场 · 棋盘底部沿轨道滑动' : '敌人正在入场');
          this.showParty();
          for (var _iterator3 = _createForOfIteratorHelperLoose(this.heroes.values()), _step3; !(_step3 = _iterator3()).done;) {
            var hero = _step3.value;
            hero.setParent(this.stageContent, true);
          }
          this.enemyMeters = [];
          this.enemyNodes = this.enemies.map(function (_, i) {
            var _enemyPortraitSize$fo, _enemyPortraitSize$fo2, _this7$art;
            var foe = _this7.foes[i];
            var hasPair = _this7.enemies.length > 1;
            var x = hasPair ? 93 + i * 87 : stageGrid.meterX;
            var ground = hasPair && i === 0 ? stageGrid.rearGroundY : stageGrid.groundY;
            var size = hasPair ? Math.min((_enemyPortraitSize$fo = enemyPortraitSize[foe.art]) != null ? _enemyPortraitSize$fo : 94, 112) : (_enemyPortraitSize$fo2 = enemyPortraitSize[foe.art]) != null ? _enemyPortraitSize$fo2 : 94;
            // Ghosts visibly hover; grounded enemies use the actual opaque foot silhouette.
            var hover = foe.tags.includes('flying') ? size / 2 : foe.art === 'ghost' ? 7 : 0;
            var n = _this7.box('Enemy ' + i, x, _this7.portraitY(foe.art, ground + hover, size), size, size, undefined, _this7.stageContent);
            _this7.groundShadow(n, ground - n.position.y, foe.art, size);
            (_this7$art = _this7.art(foe.art, 0, 0, size, size, n)) != null ? _this7$art : _this7.label(foe.name, 0, 0, size, 16, n);
            var meterY = size >= 148 ? 371 : stageGrid.hpY;
            var stats = _this7.box('敌方状态 ' + i, x, meterY, 84, 48);
            var meter = _this7.makeMeter(0, 0, hasPair ? 81 : 109, '#c34e61', stats);
            _this7.enemyMeters.push(_extends({}, meter, {
              root: stats
            }));
            _this7.outline(_this7.label(foe.name, 0, stageGrid.secondaryY - stageGrid.hpY, hasPair ? 84 : 109, 14, stats));
            return n;
          });
          this.box('棋盘外框', 0, -111.5, 435, 498, '#15221e');
          this.cells = this.board.map(function (_, i) {
            var node = _this7.box('Cell ' + i, (i % 7 - 3) * 61, 102 - Math.floor(i / 7) * 61, 55, 55, (i + Math.floor(i / 7)) % 2 ? '#3b5046' : '#34463e');
            _this7.bindTileInput(node, function () {
              return i;
            });
            return node;
          });
          var tileClip = this.box('棋盘棋子裁剪', 0, -111.5, 428, 495);
          tileClip.addComponent(Mask).type = Mask.Type.GRAPHICS_RECT;
          this.tileLayer = this.box('棋子层', 0, 111.5, 428, 483, undefined, tileClip);
          if (this.phase === 'mine') this.drawTrialBoard();
          this.drawBoardEffects();
          this.lock = this.box('棋盘锁定', 0, -111.5, 428, 495, '#19172963');
          this.lockText = this.outline(this.label('敌人入场', 0, -209, 300, 17, this.lock));
          this.buildTiles();
          carried == null || carried.charged.forEach(function (_ref2) {
            var index = _ref2[0],
              tier = _ref2[1];
            return _this7.markCharged(index, tier);
          });
          for (var _iterator4 = _createForOfIteratorHelperLoose(this.rescueCells), _step4; !(_step4 = _iterator4()).done;) {
            var _index = _step4.value;
            var point = this.cells[_index].position;
            var marker = this.outline(this.label('救', point.x + 18, point.y + 18, 20, 15));
            marker.node.name = '营救标记 ' + _index;
          }
          this.battleTool('药水', 0, function () {
            return _this7.usePotion();
          });
          this.battleTool('自动战斗', 1, function () {
            if (_this7.battleModal || _this7.guideMode || _this7.battlePhase === 'entering') return;
            _this7.selected = -1;
            _this7.automatic = !_this7.automatic;
            _this7.drawBoard();
            _this7.autoStep();
          });
          this.battleTool('战斗记录', 2, function () {
            return _this7.openBattleModal('log');
          });
          this.battleTool('撤离', 3, function () {
            return _this7.openBattleModal('retreat');
          });
          this.drawBoard();
          void this.enterBattle(this.motion, reveal);
        };
        _proto.battleTool = function battleTool(name, index, action) {
          var _this8 = this;
          var activate = function activate() {
            if (!_this8.battleModal) action();
          };
          var x = battleToolbar.x + index * battleToolbar.gap;
          this.trialButton(name, battleToolbar.y, activate, x, battleToolbar.width);
        };
        _proto.drawTrialBoard = function drawTrialBoard() {
          var rail = this.box('矿车轨道', 0, 0, 428, 475);
          for (var _i2 = 0, _arr = [6, 7]; _i2 < _arr.length; _i2++) {
            var row = _arr[_i2];
            var y = this.cells[row * cols].position.y;
            this.box('轨道底板', 0, y, 421, 55, row === 6 ? '#3b535c' : '#504b62', rail);
          }
          rail.setSiblingIndex(this.tileLayer.parent.getSiblingIndex());
        };
        _proto.drawBoardEffects = function drawBoardEffects() {
          this.trialFxViewport = this.box('棋盘反馈裁剪', 0, -111.5, 428, 495);
          this.trialFxViewport.addComponent(Mask).type = Mask.Type.GRAPHICS_RECT;
          var effects = this.box('棋盘反馈', 0, 111.5, 428, 483, undefined, this.trialFxViewport);
          this.boardFx = new TemplateBoardFx(effects, this.templateFxFrames);
        };
        _proto.syncBattleTools = function syncBattleTools() {
          var auto = this.ui.getChildByName('自动战斗');
          var potion = this.ui.getChildByName('药水');
          if (auto) auto.getComponentInChildren(Label).string = this.automatic ? '暂停自动' : '自动战斗';
          if (potion) potion.getComponentInChildren(Label).string = '药水 ' + this.potion;
          var locked = this.battlePhase !== 'input' || this.automatic;
          this.lock.active = locked;
          this.lockText.string = this.battlePhase === 'entering' ? '敌人入场' : this.battlePhase === 'enemy' ? '敌方回合' : this.automatic && this.battlePhase === 'input' ? '自动战斗' : '结算中';
        };
        _proto.enterBattle = /*#__PURE__*/function () {
          var _enterBattle = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(motion, reveal) {
            var homes, arrived;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  homes = this.enemyNodes.map(function (n) {
                    return n.position.clone();
                  });
                  this.enemyNodes.forEach(function (n, i) {
                    return n.setPosition(homes[i].x + 205, homes[i].y);
                  });
                  if (!reveal) {
                    _context2.next = 5;
                    break;
                  }
                  _context2.next = 5;
                  return reveal();
                case 5:
                  if (!(motion.cancelled || motion !== this.motion)) {
                    _context2.next = 7;
                    break;
                  }
                  return _context2.abrupt("return");
                case 7:
                  _context2.next = 9;
                  return Promise.all(this.enemyNodes.map(function (n, i) {
                    return motion.play(tween(n).delay(motion.duration(i * .09)).to(motion.duration(.32), {
                      position: homes[i]
                    }, {
                      easing: 'quadOut'
                    }));
                  }));
                case 9:
                  arrived = _context2.sent;
                  if (!(!arrived.every(Boolean) || motion.cancelled)) {
                    _context2.next = 12;
                    break;
                  }
                  return _context2.abrupt("return");
                case 12:
                  this.audio.play('door');
                  this.resumeBattleInput('轮到玩家，交换相邻纹章');
                case 14:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function enterBattle(_x, _x2) {
            return _enterBattle.apply(this, arguments);
          }
          return enterBattle;
        }();
        _proto.outline = function outline(label) {
          label.enableOutline = true;
          label.outlineColor = Color.fromHEX(new Color(), '#233027');
          label.outlineWidth = 3;
          return label;
        };
        _proto.makeMeter = function makeMeter(x, y, w, color, parent) {
          if (parent === void 0) {
            parent = this.ui;
          }
          var height = 21;
          var node = this.box('计量条', x, y, w, height, '#111e1be8', parent);
          var fill = this.box('填充', 0, 0, w - 4, height - 4, color, node);
          var label = this.outline(this.label('', 0, 0, w - 8, 14, node));
          label.node.getComponent(UITransform).setContentSize(w - 8, height);
          label.lineHeight = 17;
          label.outlineWidth = 2;
          return {
            width: w - 4,
            root: node,
            fill: fill,
            label: label
          };
        };
        _proto.setMeter = function setMeter(meter, value, maximum, text) {
          var ratio = Math.min(1, Math.max(0, value / Math.max(1, maximum)));
          meter.fill.setScale(ratio, 1, 1);
          meter.fill.setPosition(-meter.width * (1 - ratio) / 2, 0);
          meter.fill.active = ratio > 0;
          meter.label.string = text;
        };
        _proto.updateHUD = function updateHUD() {
          var _this9 = this;
          this.setMeter(this.healthBar, this.hp, this.maxHP, String(Math.max(0, this.hp)));
          if (this.showsGuard) this.setMeter(this.guardBar, this.dp, this.maxDP, String(this.dp));
          this.coinText.string = String(this.walletGold);
          this.enemies.forEach(function (hp, i) {
            return _this9.setMeter(_this9.enemyMeters[i], hp, _this9.enemyMax[i], String(Math.max(0, hp)));
          });
          this.syncBattleTools();
        };
        _proto.makeCoinDisplay = function makeCoinDisplay() {
          var display = this.outline(this.label(String(this.walletGold), 191, stageGrid.titleY, 65, 20));
          display.node.name = '金币 ' + display.string;
          display.color = Color.fromHEX(new Color(), '#ffe594');
          var coin = this.box('金币', 147, stageGrid.titleY, 20, 20).addComponent(Graphics);
          this.drawCoin(coin, 8);
          return display;
        };
        _proto.drawCoin = function drawCoin(coin, radius) {
          coin.fillColor = Color.fromHEX(new Color(), '#f4c751');
          coin.strokeColor = Color.fromHEX(new Color(), '#50311c');
          coin.lineWidth = radius >= 8 ? 3 : 2;
          coin.circle(0, 0, radius);
          coin.fill();
          coin.stroke();
          coin.strokeColor = Color.fromHEX(new Color(), '#fff0a0');
          coin.lineWidth = 1;
          coin.moveTo(0, -radius * .5);
          coin.lineTo(0, radius * .5);
          coin.stroke();
        };
        _proto.setBattleStatus = function setBattleStatus(message) {
          this.status.string = "\u7B2C " + this.turn + " \u56DE\u5408 \xB7 " + message;
          this.battleLogs.push(this.status.string);
          if (this.battleLogs.length > 12) this.battleLogs.shift();
        };
        _proto.isTutorialBattle = function isTutorialBattle() {
          return this.phase === 'wolves' || this.phase === 'lessonBoss';
        };
        _proto.usePotion = function usePotion() {
          var _this$heroes$get$posi, _this$heroes$get;
          if (this.busy || this.automatic || this.potion <= 0 || this.guideMode === 'swap' || this.hp >= this.maxHP) return;
          var healed = Math.min(this.maxHP - this.hp, 45);
          this.hp += healed;
          this.potion--;
          this.clearGuide();
          this.audio.play('potion');
          this.setBattleStatus("\u836F\u6C34\u6062\u590D " + healed + " HP");
          void this.combatPopup(this.motion, '+' + healed + ' HP', -94, 286, '#a1f6b9');
          void this.supportHalo(this.motion, (_this$heroes$get$posi = (_this$heroes$get = this.heroes.get('s')) == null ? void 0 : _this$heroes$get.position) != null ? _this$heroes$get$posi : new Vec3(-94, 245, 0), '#87eaa5');
          this.updateHUD();
        };
        _proto.bindTileInput = function bindTileInput(node, indexOf) {
          var _this10 = this;
          var start;
          node.on(Node.EventType.TOUCH_START, function (event) {
            _this10.clearIdleHint();
            var index = indexOf();
            if (!_this10.canSelect(index)) return;
            var _event$getUILocation = event.getUILocation(),
              x = _event$getUILocation.x,
              y = _event$getUILocation.y;
            start = {
              id: event.getID(),
              x: x,
              y: y,
              index: index
            };
          });
          var preview = -1;
          var restore = function restore() {
            if (start && _this10.tiles[start.index]) _this10.tiles[start.index].setPosition(_this10.cells[start.index].position);
            if (preview >= 0 && _this10.tiles[preview]) _this10.tiles[preview].setPosition(_this10.cells[preview].position);
            preview = -1;
          };
          var project = function project(event) {
            if (!start || start.id !== event.getID() || !_this10.canSelect(start.index)) return;
            restore();
            var end = event.getUILocation();
            var dx = end.x - start.x,
              dy = end.y - start.y,
              horizontal = Math.abs(dx) > Math.abs(dy);
            var delta = horizontal ? dx : dy;
            if (Math.abs(delta) < 7) return;
            var target = start.index + (horizontal ? Math.sign(delta) : -cols * Math.sign(delta));
            if (!adjacent(start.index, target) || !_this10.cells[target] || !_this10.canSelect(target)) return;
            preview = target;
            var first = _this10.cells[start.index].position;
            var second = _this10.cells[target].position;
            var fraction = Math.min(1, Math.abs(delta) / 61);
            _this10.tiles[start.index].setPosition(Vec3.lerp(new Vec3(), first, second, fraction));
            _this10.tiles[target].setPosition(Vec3.lerp(new Vec3(), second, first, fraction));
          };
          node.on(Node.EventType.TOUCH_MOVE, project);
          var finish = function finish(event, mayTap) {
            if (!start || event.getID() !== start.id) return;
            var _start2 = start,
              index = _start2.index,
              x = _start2.x,
              y = _start2.y;
            var end = event.getUILocation();
            if (Math.max(Math.abs(end.x - x), Math.abs(end.y - y)) >= 20) {
              project(event);
              if (preview >= 0 && _this10.canSelect(index)) {
                var target = preview;
                preview = -1;
                start = undefined;
                _this10.selected = index;
                void _this10.tap(target, false, true);
                return;
              }
            }
            restore();
            start = undefined;
            if (mayTap && Math.max(Math.abs(end.x - x), Math.abs(end.y - y)) < 7) void _this10.tap(index);
          };
          node.on(Node.EventType.TOUCH_END, function (event) {
            return finish(event, true);
          });
          // Creator sends cancel instead of end when a finger leaves its origin hit box.
          node.on(Node.EventType.TOUCH_CANCEL, function (event) {
            return finish(event, false);
          });
        };
        _proto.canSelect = function canSelect(index) {
          return index >= 0 && !this.busy && !this.automatic && !this.battleModal && this.guideMode !== 'potion' && (!(this.phase === 'wolves' && this.firstSwap) || index === 1 || index === 8);
        };
        _proto.tileIcon = function tileIcon(type, parent) {
          var _this$art;
          var shadow = (_this$art = this.art(type, 1, -3, 48, 48, parent)) == null ? void 0 : _this$art.getComponent(Sprite);
          if (shadow) shadow.color = new Color(6, 12, 14, 145);
          this.art(type, 0, 0, 48, 48, parent);
        };
        _proto.tile = function tile(type, index, position) {
          var _this11 = this;
          if (position === void 0) {
            position = this.cells[index].position;
          }
          var node = this.box(type, position.x, position.y, 48, 48, undefined, this.tileLayer);
          this.tileIcon(type, node);
          this.bindTileInput(node, function () {
            return _this11.tiles.indexOf(node);
          });
          return node;
        };
        _proto.buildTiles = function buildTiles() {
          var _this12 = this;
          this.tiles.forEach(function (n) {
            return n.destroy();
          });
          this.tiles = this.board.map(function (type, index) {
            return _this12.tile(type, index);
          });
          this.raiseBoardOverlays();
        };
        _proto.raiseBoardOverlays = function raiseBoardOverlays() {
          var _this$trialFxViewport;
          this.lock.setSiblingIndex(this.ui.children.length - 1);
          (_this$trialFxViewport = this.trialFxViewport) == null || _this$trialFxViewport.setSiblingIndex(this.ui.children.length - 1);
        };
        _proto.drawBoard = function drawBoard() {
          var _this13 = this;
          this.tiles.forEach(function (node, i) {
            return node.setScale(_this13.selected === i ? .85 : 1, _this13.selected === i ? .85 : 1, 1);
          });
          this.updateHUD();
        };
        _proto.moveTile = function moveTile(motion, node, index, time) {
          return motion.play(tween(node).to(motion.duration(time), {
            position: this.cells[index].position.clone()
          }, {
            easing: 'quadOut'
          }));
        };
        _proto.drop = /*#__PURE__*/function () {
          var _drop = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(motion, removed, plan) {
            var _this14 = this;
            var previous, next, _iterator5, _step5, _index2, slides, animate, _iterator6, _step6, _step6$value, from, to, path, _iterator7, _step7, _step7$value, _to, _path, direction, distance, entry, position;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  previous = this.tiles;
                  next = previous.slice();
                  for (_iterator5 = _createForOfIteratorHelperLoose(removed); !(_step5 = _iterator5()).done;) {
                    _index2 = _step5.value;
                    previous[_index2].destroy();
                  }
                  slides = [];
                  animate = function animate(tile, path, entrySteps) {
                    if (entrySteps === void 0) {
                      entrySteps = 0;
                    }
                    if (_this14.phase !== 'mine') {
                      slides.push(_this14.moveTile(motion, tile, path[path.length - 1], .18));
                      return;
                    }
                    var slide = tween(tile);
                    for (var k = entrySteps ? 0 : 1; k < path.length; k++) {
                      var steps = k === 0 ? entrySteps : 1;
                      slide.to(motion.duration(.052 * steps), {
                        position: _this14.cells[path[k]].position.clone()
                      });
                    }
                    if (!motion.reduced) slide.to(.045, {
                      scale: new Vec3(.96, 1.04, 1)
                    }).to(.065, {
                      scale: new Vec3(1, 1, 1)
                    });
                    slides.push(motion.play(slide));
                  };
                  for (_iterator6 = _createForOfIteratorHelperLoose(plan.moves); !(_step6 = _iterator6()).done;) {
                    _step6$value = _step6.value, from = _step6$value.from, to = _step6$value.to, path = _step6$value.path;
                    next[to] = previous[from];
                    animate(next[to], path);
                  }
                  for (_iterator7 = _createForOfIteratorHelperLoose(plan.spawns); !(_step7 = _iterator7()).done;) {
                    _step7$value = _step7.value, _to = _step7$value.to, _path = _step7$value.path, direction = _step7$value.direction, distance = _step7$value.distance;
                    entry = this.cells[_path[0]].position;
                    position = new Vec3(entry.x - direction.x * 61 * distance, entry.y + direction.y * 61 * distance, 0);
                    next[_to] = this.tile(plan.board[_to], _to, position);
                    animate(next[_to], _path, distance);
                  }
                  this.tiles = next;
                  this.raiseBoardOverlays();
                  _context3.next = 11;
                  return Promise.all(slides);
                case 11:
                  if (this.trial && !motion.cancelled) this.audio.playTrial('drop');
                case 12:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function drop(_x3, _x4, _x5) {
            return _drop.apply(this, arguments);
          }
          return drop;
        }();
        _proto.legalMove = function legalMove$1() {
          return legalMove(this.board);
        };
        _proto.autoStep = function autoStep() {
          var _this15 = this;
          var root = this.ui;
          var request = ++this.autoRequest;
          if (!this.automatic || this.busy || root !== this.battleRoot || this.guideMode || this.battleModal) return;
          this.scheduleOnce(function () {
            if (request !== _this15.autoRequest || !_this15.automatic || _this15.busy || root !== _this15.ui || _this15.battleModal) return;
            var move = _this15.bestAutoMove();
            if (move) {
              _this15.selected = move[0];
              void _this15.tap(move[1], true);
            }
          }, .38);
        };
        _proto.bestAutoMove = function bestAutoMove() {
          var _this16 = this;
          var best;
          var bestScore = 0;
          for (var a = 0; a < this.board.length; a++) {
            var _loop2 = function _loop2() {
              var b = _arr2[_i3];
              if (b >= _this16.board.length || !adjacent(a, b)) return 1; // continue
              var next = _this16.board.slice();
              var _ref3 = [next[b], next[a]];
              next[a] = _ref3[0];
              next[b] = _ref3[1];
              var score = matches(next).reduce(function (sum, group) {
                var type = next[group[0]];
                var weight = type === 'h' && _this16.hp < _this16.maxHP * .6 ? 2 : type === 'd' && _this16.dp < _this16.maxDP * .4 ? 1.7 : type === 'cry' ? .5 : 1;
                return sum + group.length * weight;
              }, 0);
              if (score > bestScore) {
                best = [a, b];
                bestScore = score;
              }
            };
            for (var _i3 = 0, _arr2 = [a + 1, a + 7]; _i3 < _arr2.length; _i3++) {
              if (_loop2()) continue;
            }
          }
          return best;
        };
        _proto.tap = /*#__PURE__*/function () {
          var _tap = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(i, fromAuto, preview) {
            var _this17 = this,
              _room$rescueCells;
            var motion, a, _ref4, groups, _this$boardFx2, _ref5, _ref6, _loop3, _ret, wave, _this$trial2, director, room, rescued, _this$adventure2, _this$lastFallen, reward, drop, played;
            return _regeneratorRuntime().wrap(function _callee4$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  if (fromAuto === void 0) {
                    fromAuto = false;
                  }
                  if (preview === void 0) {
                    preview = false;
                  }
                  if (!(this.busy || this.battleModal || !fromAuto && !this.canSelect(i))) {
                    _context5.next = 4;
                    break;
                  }
                  return _context5.abrupt("return");
                case 4:
                  this.clearIdleHint();
                  motion = this.motion;
                  a = this.selected;
                  this.selected = i === a ? -1 : i;
                  if (!(a < 0 || !adjacent(a, i))) {
                    _context5.next = 11;
                    break;
                  }
                  this.drawBoard();
                  return _context5.abrupt("return");
                case 11:
                  if (this.boardFx) this.audio.playTrial('swap');else this.audio.play('swap');
                  this.busy = true;
                  this.battlePhase = 'resolve';
                  this.selected = -1;
                  this.clearGuide();
                  _ref4 = [this.board[i], this.board[a]];
                  this.board[a] = _ref4[0];
                  this.board[i] = _ref4[1];
                  groups = matches(this.board);
                  this.drawBoard();
                  if (!(!preview || groups.length)) {
                    _context5.next = 24;
                    break;
                  }
                  _context5.next = 24;
                  return Promise.all([this.moveTile(motion, this.tiles[a], i, preview ? .06 : .12), this.moveTile(motion, this.tiles[i], a, preview ? .06 : .12)]);
                case 24:
                  if (!motion.cancelled) {
                    _context5.next = 26;
                    break;
                  }
                  return _context5.abrupt("return");
                case 26:
                  if (groups.length) {
                    _context5.next = 35;
                    break;
                  }
                  _ref5 = [this.board[i], this.board[a]];
                  this.board[a] = _ref5[0];
                  this.board[i] = _ref5[1];
                  if (this.boardFx) this.audio.playTrial('invalid');
                  _context5.next = 33;
                  return Promise.all([this.moveTile(motion, this.tiles[a], a, .12), this.moveTile(motion, this.tiles[i], i, .12), (_this$boardFx2 = this.boardFx) == null ? void 0 : _this$boardFx2.reject(motion, [this.cells[a].position, this.cells[i].position])]);
                case 33:
                  if (!motion.cancelled) this.resumeBattleInput('没有成组，换位已还原');
                  return _context5.abrupt("return");
                case 35:
                  _ref6 = [this.tiles[i], this.tiles[a]];
                  this.tiles[a] = _ref6[0];
                  this.tiles[i] = _ref6[1];
                  if (this.trial) this.trial.moves++;
                  if (this.phase === 'wolves') this.firstSwap = false;
                  _loop3 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop3() {
                    var _this17$boardFx, _this17$boardFx2, _this17$trial;
                    var plan, removed, _iterator8, _step8, _step8$value, _index3, tier, _iterator9, _step9, _this17$ui$getChildBy, _index4, _iterator10, _step10, group, active, advanced, length, refill;
                    return _regeneratorRuntime().wrap(function _loop3$(_context4) {
                      while (1) switch (_context4.prev = _context4.next) {
                        case 0:
                          if (_this17.trial) _this17.trial.longestChain = Math.max(_this17.trial.longestChain, wave + 1);
                          _this17.setBattleStatus("\u7B2C " + (wave + 1) + " \u6B21\u8FDE\u9501 \xB7 " + groups.length + " \u7EC4\u6D88\u9664");
                          plan = planWave(groups, function (index) {
                            return _this17.chargedTiles.get(_this17.tiles[index]);
                          }, wave === 0 ? [i, a] : []);
                          removed = plan.removed;
                          if (_this17.boardFx) {
                            _this17.audio.playChain(wave);
                            if (plan.anchors.size) _this17.audio.playTrial('create');
                          } else _this17.audio.play('clear');
                          for (_iterator8 = _createForOfIteratorHelperLoose(plan.created); !(_step8 = _iterator8()).done;) {
                            _step8$value = _step8.value, _index3 = _step8$value[0], tier = _step8$value[1];
                            _this17.markCharged(_index3, tier);
                          }
                          for (_iterator9 = _createForOfIteratorHelperLoose(removed); !(_step9 = _iterator9()).done;) {
                            _index4 = _step9.value;
                            if (_this17.rescueCells["delete"](_index4)) (_this17$ui$getChildBy = _this17.ui.getChildByName('营救标记 ' + _index4)) == null || _this17$ui$getChildBy.destroy();
                          }
                          _context4.next = 9;
                          return Promise.all([_this17.flashTiles(motion, Array.from(plan.matched), removed, false)].concat(Array.from(plan.anchors, function (index) {
                            return _this17.dropCharge(motion, _this17.tiles[index]);
                          }), [(_this17$boardFx = _this17.boardFx) == null ? void 0 : _this17$boardFx.combo(motion, wave + 1, new Vec3(0, 80, 0)), (_this17$boardFx2 = _this17.boardFx) == null ? void 0 : _this17$boardFx2.chargeReady(motion, Array.from(plan.anchors, function (index) {
                            return {
                              position: _this17.cells[index].position
                            };
                          }))]));
                        case 9:
                          if (!motion.cancelled) {
                            _context4.next = 11;
                            break;
                          }
                          return _context4.abrupt("return", {
                            v: void 0
                          });
                        case 11:
                          if (!plan.columns.size) {
                            _context4.next = 15;
                            break;
                          }
                          if (_this17.trial) _this17.audio.playTrial('charge');else _this17.audio.play('charge');
                          _context4.next = 15;
                          return _this17.flashTiles(motion, plan.propagated, removed, true, Array.from(plan.columns));
                        case 15:
                          if (!motion.cancelled) {
                            _context4.next = 17;
                            break;
                          }
                          return _context4.abrupt("return", {
                            v: void 0
                          });
                        case 17:
                          _iterator10 = _createForOfIteratorHelperLoose(plan.components);
                        case 18:
                          if ((_step10 = _iterator10()).done) {
                            _context4.next = 29;
                            break;
                          }
                          group = _step10.value;
                          active = group.filter(function (index) {
                            return plan.charged.has(index);
                          });
                          advanced = active.some(function (index) {
                            return _this17.chargedTiles.get(_this17.tiles[index]) === 'advanced';
                          });
                          length = Math.max(group.length, advanced ? 5 : active.length ? 4 : 3);
                          _context4.next = 25;
                          return _this17.applySkill(motion, _this17.board[group[0]], length, wave + 1, active.length > 0, advanced);
                        case 25:
                          if (!motion.cancelled) {
                            _context4.next = 27;
                            break;
                          }
                          return _context4.abrupt("return", {
                            v: void 0
                          });
                        case 27:
                          _context4.next = 18;
                          break;
                        case 29:
                          refill = planRefill(_this17.board, removed, _this17.types, (_this17$trial = _this17.trial) == null ? void 0 : _this17$trial.random, _this17.phase === 'mine' ? mineGravity : undefined);
                          _this17.board = refill.board;
                          _context4.next = 33;
                          return _this17.drop(motion, removed, refill);
                        case 33:
                          if (!motion.cancelled) {
                            _context4.next = 35;
                            break;
                          }
                          return _context4.abrupt("return", {
                            v: void 0
                          });
                        case 35:
                          groups = matches(_this17.board);
                        case 36:
                        case "end":
                          return _context4.stop();
                      }
                    }, _loop3);
                  });
                  wave = 0;
                case 42:
                  if (!(groups.length && wave < 12)) {
                    _context5.next = 50;
                    break;
                  }
                  return _context5.delegateYield(_loop3(), "t0", 44);
                case 44:
                  _ret = _context5.t0;
                  if (!_ret) {
                    _context5.next = 47;
                    break;
                  }
                  return _context5.abrupt("return", _ret.v);
                case 47:
                  wave++;
                  _context5.next = 42;
                  break;
                case 50:
                  if (groups.length || !this.legalMove()) {
                    if (this.trial) this.audio.playTrial('shuffle');
                    this.board = newBoard(this.types, (_this$trial2 = this.trial) == null ? void 0 : _this$trial2.random);
                    this.buildTiles();
                  }
                  director = this.dungeon;
                  room = director == null ? void 0 : director.room;
                  rescued = (room == null ? void 0 : room.kind) === 'battle' && !!((_room$rescueCells = room.rescueCells) != null && _room$rescueCells.length) && !this.rescueCells.size;
                  if (!(this.enemies.every(function (hp) {
                    return hp <= 0;
                  }) || rescued)) {
                    _context5.next = 66;
                    break;
                  }
                  if (this.dungeon) this.carriedBoard = {
                    director: this.dungeon,
                    types: this.types.join(','),
                    board: this.board.slice(),
                    charged: this.tiles.flatMap(function (tile, index) {
                      var tier = _this17.chargedTiles.get(tile);
                      return tier ? [[index, tier]] : [];
                    })
                  };
                  if (rescued) this.setBattleStatus('营救成功');
                  this.battlePhase = 'complete';
                  if (!(director && (room == null ? void 0 : room.kind) === 'battle')) {
                    _context5.next = 65;
                    break;
                  }
                  reward = battleCoinReward(room, (_this$adventure2 = this.adventure) == null ? void 0 : _this$adventure2.id);
                  drop = (_this$lastFallen = this.lastFallen) != null ? _this$lastFallen : {
                    origin: new Vec3(rescued ? 72 : 132, stageGrid.groundY + 30),
                    ground: stageGrid.groundY
                  };
                  _context5.next = 63;
                  return this.animateCoins(motion, reward, this.coinText, drop.origin, drop.ground);
                case 63:
                  played = _context5.sent;
                  if (played) this.victory(director, room, reward);
                case 65:
                  return _context5.abrupt("return");
                case 66:
                  _context5.next = 68;
                  return this.enemyTurn(motion);
                case 68:
                case "end":
                  return _context5.stop();
              }
            }, _callee4, this);
          }));
          function tap(_x6, _x7, _x8) {
            return _tap.apply(this, arguments);
          }
          return tap;
        }();
        _proto.markCharged = function markCharged(index, tier) {
          var tile = this.tiles[index];
          this.chargedTiles.set(tile, tier);
          var palette = {
            s: '#9f282b',
            d: '#165e86',
            m: '#58339e',
            h: '#a63660',
            stone: '#456a41',
            fist: '#a95128',
            cry: '#8b631a',
            staff: '#8b631a'
          };
          var type = this.board[index];
          var original = tile.children.slice();
          var frame = this.textures.get(tier + '-frame');
          if (frame) {
            var _this$art2;
            original.forEach(function (node) {
              node.removeFromParent();
              node.destroy();
            });
            this.box('技能纹章底色', 0, 0, 55, 55, palette[type], tile);
            var rim = (_this$art2 = this.art(tier + '-frame', 0, 0, 56, 56, tile)) == null ? void 0 : _this$art2.getComponent(Sprite);
            if (rim && tier === 'skill') rim.color = new Color(141, 157, 169);
            if (rim && tier === 'advanced' && this.tintedFrame) {
              var _themes$type;
              rim.customMaterial = this.tintedFrame;
              var themes = {
                s: '#c86a56',
                d: '#518ad8',
                m: '#aa69ec',
                h: '#e45da5'
              };
              rim.color = Color.fromHEX(new Color(), (_themes$type = themes[type]) != null ? _themes$type : palette[type]);
            }
            this.tileIcon(type, tile);
            if (tier === 'advanced' && this.skillSweep && !this.motion.reduced) {
              var _this$art3, _this$art4;
              var sheen = (_this$art3 = this.art('advanced-frame', 0, 0, 56, 56, tile)) == null ? void 0 : _this$art3.getComponent(Sprite);
              if (sheen) sheen.customMaterial = this.skillSweep;
              var iconSheen = (_this$art4 = this.art(type, 0, 0, 48, 48, tile)) == null ? void 0 : _this$art4.getComponent(Sprite);
              if (iconSheen) iconSheen.customMaterial = this.skillSweep;
            }
          }
        };
        _proto.dropCharge = /*#__PURE__*/function () {
          var _dropCharge = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(motion, tile) {
            var children, _iterator11, _step11, _step11$value, child, home;
            return _regeneratorRuntime().wrap(function _callee5$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  if (!motion.reduced) {
                    _context6.next = 2;
                    break;
                  }
                  return _context6.abrupt("return");
                case 2:
                  children = tile.children.map(function (child) {
                    return {
                      child: child,
                      home: child.position.clone()
                    };
                  });
                  for (_iterator11 = _createForOfIteratorHelperLoose(children); !(_step11 = _iterator11()).done;) {
                    _step11$value = _step11.value, child = _step11$value.child, home = _step11$value.home;
                    child.setPosition(home.x, home.y + 13, home.z);
                    child.setScale(.86, 1.10, 1);
                  }
                  _context6.next = 6;
                  return Promise.all(children.map(function (_ref7) {
                    var child = _ref7.child,
                      home = _ref7.home;
                    return motion.play(tween(child).to(.14, {
                      position: home,
                      scale: new Vec3(1.15, .78, 1)
                    }, {
                      easing: 'quadIn'
                    }).to(.09, {
                      scale: new Vec3(1, 1, 1)
                    }, {
                      easing: 'quadOut'
                    }));
                  }));
                case 6:
                case "end":
                  return _context6.stop();
              }
            }, _callee5);
          }));
          function dropCharge(_x9, _x10) {
            return _dropCharge.apply(this, arguments);
          }
          return dropCharge;
        }();
        _proto.flashTiles = /*#__PURE__*/function () {
          var _flashTiles = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(motion, indices, removed, propagated, columns) {
            var _this18 = this;
            var cleared, moves, palette, points, lanes, effects, _loop4, _iterator12, _step12;
            return _regeneratorRuntime().wrap(function _callee6$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
                case 0:
                  if (columns === void 0) {
                    columns = [];
                  }
                  cleared = indices.filter(function (index) {
                    return removed.has(index);
                  });
                  moves = indices.map(function (index) {
                    var _tile$getComponent;
                    var tile = _this18.tiles[index];
                    var opacity = (_tile$getComponent = tile.getComponent(UIOpacity)) != null ? _tile$getComponent : tile.addComponent(UIOpacity);
                    return motion.play(tween(opacity).set({
                      opacity: 160
                    }).delay(motion.duration(.095)).set({
                      opacity: removed.has(index) ? 0 : 255
                    }));
                  });
                  if (!this.boardFx) {
                    _context8.next = 10;
                    break;
                  }
                  palette = {
                    s: '#ff9d78',
                    d: '#93d8ff',
                    h: '#ffa9c8',
                    m: '#caa6fd',
                    stone: '#efcf9e',
                    fist: '#ffb57f',
                    staff: '#ffe3a3'
                  };
                  points = cleared.map(function (index) {
                    var _palette$_this18$boar;
                    return {
                      position: _this18.cells[index].position,
                      color: Color.fromHEX(new Color(), (_palette$_this18$boar = palette[_this18.board[index]]) != null ? _palette$_this18$boar : '#fff0c2')
                    };
                  });
                  lanes = columns.map(function (col) {
                    return {
                      from: _this18.cells[col].position,
                      to: _this18.cells[_this18.cells.length - cols + col].position
                    };
                  });
                  _context8.next = 9;
                  return Promise.all([].concat(moves, [this.boardFx.clear(motion, points, propagated ? 'charge' : 'match', lanes)]));
                case 9:
                  return _context8.abrupt("return");
                case 10:
                  effects = cleared.slice(0, 8).flatMap(function (index) {
                    var p = _this18.cells[index].position;
                    return _this18.burst(motion, p.x, p.y, propagated ? '#c196ff' : '#fcd687', 3);
                  });
                  _loop4 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop4() {
                    var col, first, last, beam, opacity;
                    return _regeneratorRuntime().wrap(function _loop4$(_context7) {
                      while (1) switch (_context7.prev = _context7.next) {
                        case 0:
                          col = _step12.value;
                          first = _this18.cells[col].position;
                          last = _this18.cells[_this18.cells.length - cols + col].position;
                          beam = _this18.box('整列传导', first.x, (first.y + last.y) / 2, 17, first.y - last.y + 45, '#ffcf68');
                          opacity = beam.addComponent(UIOpacity);
                          opacity.opacity = 210;
                          effects.push(motion.play(tween(opacity).to(motion.duration(.23), {
                            opacity: 0
                          })).then(function (played) {
                            beam.destroy();
                            return played;
                          }));
                        case 7:
                        case "end":
                          return _context7.stop();
                      }
                    }, _loop4);
                  });
                  _iterator12 = _createForOfIteratorHelperLoose(columns);
                case 13:
                  if ((_step12 = _iterator12()).done) {
                    _context8.next = 17;
                    break;
                  }
                  return _context8.delegateYield(_loop4(), "t0", 15);
                case 15:
                  _context8.next = 13;
                  break;
                case 17:
                  _context8.next = 19;
                  return Promise.all([].concat(moves, effects));
                case 19:
                case "end":
                  return _context8.stop();
              }
            }, _callee6, this);
          }));
          function flashTiles(_x11, _x12, _x13, _x14, _x15) {
            return _flashTiles.apply(this, arguments);
          }
          return flashTiles;
        }();
        _proto.castSkillEffect = /*#__PURE__*/function () {
          var _castSkillEffect = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(motion, at, advanced) {
            var ring, shape, flash, ink, light;
            return _regeneratorRuntime().wrap(function _callee7$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
                case 0:
                  ring = this.box('技能蓄力光环', at.x, at.y, 138, 138);
                  shape = ring.addComponent(Graphics);
                  shape.strokeColor = Color.fromHEX(new Color(), advanced ? '#ffd464' : '#a9eaff');
                  shape.lineWidth = 5;
                  shape.circle(0, 0, 56);
                  shape.stroke();
                  _context9.next = 8;
                  return motion.play(tween(ring).to(advanced ? .34 : .19, {
                    scale: new Vec3(.43, .43, 1)
                  }, {
                    easing: 'quadIn'
                  }));
                case 8:
                  ring.destroy();
                  if (!(!advanced || motion.cancelled)) {
                    _context9.next = 11;
                    break;
                  }
                  return _context9.abrupt("return");
                case 11:
                  flash = this.box('大招反差环', at.x, at.y, 134, 134);
                  ink = flash.addComponent(Graphics);
                  ink.strokeColor = Color.BLACK;
                  ink.lineWidth = 11;
                  ink.circle(0, 0, 55);
                  ink.stroke();
                  ink.strokeColor = Color.WHITE;
                  ink.lineWidth = 5;
                  ink.circle(0, 0, 55);
                  ink.stroke();
                  light = flash.addComponent(UIOpacity);
                  light.opacity = 255;
                  _context9.next = 25;
                  return motion.play(tween(light).to(.10, {
                    opacity: 15
                  }).delay(.10).to(.06, {
                    opacity: 0
                  }));
                case 25:
                  flash.destroy();
                case 26:
                case "end":
                  return _context9.stop();
              }
            }, _callee7, this);
          }));
          function castSkillEffect(_x16, _x17, _x18) {
            return _castSkillEffect.apply(this, arguments);
          }
          return castSkillEffect;
        }();
        _proto.focusCombat = function focusCombat(motion, actors) {
          if (motion.reduced) return function () {};
          var layer = this.stageContent;
          var order = layer.children.slice();
          var centerY = stageGrid.centerY,
            width = stageGrid.width,
            height = stageGrid.height;
          var shade = this.box('行动聚焦', 0, centerY, width, height, undefined, layer);
          var ink = shade.addComponent(Graphics);
          ink.fillColor = new Color(8, 11, 19, 166);
          ink.rect(-width / 2, -height / 2, width, height);
          ink.fill();
          for (var _iterator13 = _createForOfIteratorHelperLoose(actors), _step13; !(_step13 = _iterator13()).done;) {
            var actor = _step13.value;
            actor.setSiblingIndex(layer.children.length - 1);
          }
          return function () {
            shade.removeFromParent();
            shade.destroy();
            if (layer.isValid) order.forEach(function (node, index) {
              if (node.isValid && node.parent === layer) node.setSiblingIndex(index);
            });
          };
        };
        _proto.applySkill = /*#__PURE__*/function () {
          var _applySkill = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(motion, type, length, chain, charged, advanced) {
            var _this19 = this;
            var owner, tutorial, attack, specialAttack, skill, actor, _actor$position$x, _actor$position$y, restore, _actor$position, cap, before, gained, unit, position, color, tags, targets, hit, _iterator14, _step14, target, _enemy, home, restoreFocus, _enemy$getChildByName3, _enemy$getChildByName4, _actor$position2, origin, _enemy$getChildByName, _enemy$getChildByName2, _actor$getChildByName, _actor$getChildByName2, _origin, enemyGround, footOffset, arrived, immune, damage, fallen, number, armor, effects, flinch, _enemy$getComponent, alpha;
            return _regeneratorRuntime().wrap(function _callee8$(_context10) {
              while (1) switch (_context10.prev = _context10.next) {
                case 0:
                  if (advanced === void 0) {
                    advanced = false;
                  }
                  if (!this.enemies.every(function (hp) {
                    return hp <= 0;
                  })) {
                    _context10.next = 3;
                    break;
                  }
                  return _context10.abrupt("return");
                case 3:
                  owner = skillOwner(type);
                  tutorial = this.isTutorialBattle();
                  attack = tutorial ? owner === 'h' ? 12 : 26 : this.heroAttack(owner);
                  specialAttack = advanced && (tutorial || ['stone', 'fist', 'staff'].includes(type)) ? attack * 1.35 : attack;
                  skill = planSkill(type, length, chain, charged, tutorial, specialAttack, this.dp >= this.maxDP, this.rally, function (id) {
                    return _this19.inventory.hasEquipped(id);
                  }, function (id) {
                    return _this19.buff(id);
                  });
                  actor = this.heroes.get(owner);
                  if (!(charged && actor && !motion.reduced)) {
                    _context10.next = 14;
                    break;
                  }
                  _context10.next = 12;
                  return this.castSkillEffect(motion, actor.position, advanced);
                case 12:
                  if (!motion.cancelled) {
                    _context10.next = 14;
                    break;
                  }
                  return _context10.abrupt("return");
                case 14:
                  if (!(skill.kind === 'rally')) {
                    _context10.next = 21;
                    break;
                  }
                  this.rally = true;
                  this.setBattleStatus('战吼：下一次攻击增伤');
                  this.audio.play('charge');
                  _context10.next = 20;
                  return Promise.all(this.burst(motion, (_actor$position$x = actor == null ? void 0 : actor.position.x) != null ? _actor$position$x : -70, (_actor$position$y = actor == null ? void 0 : actor.position.y) != null ? _actor$position$y : 270, '#ffbc60', 6));
                case 20:
                  return _context10.abrupt("return");
                case 21:
                  if (!(skill.kind === 'heal' || skill.kind === 'guard')) {
                    _context10.next = 40;
                    break;
                  }
                  restore = actor ? this.focusCombat(motion, [actor]) : function () {};
                  _context10.prev = 23;
                  cap = skill.kind === 'heal' ? this.maxHP : this.maxDP;
                  before = skill.kind === 'heal' ? this.hp : this.dp;
                  gained = Math.min(cap - before, skill.amount);
                  if (skill.kind === 'heal') {
                    this.hp += gained;
                    if (!tutorial && this.inventory.hasEquipped('healcore')) {
                      this.dp = Math.min(this.maxDP, this.dp + Math.round((skill.amount - gained) * (.35 + .2 * this.buff('overflow'))));
                    }
                  } else this.dp += gained;
                  unit = skill.kind === 'heal' ? 'HP' : 'DP';
                  this.setBattleStatus(skill.name + " \xB7 +" + gained + " " + unit);
                  this.updateHUD();
                  this.audio.play('charge');
                  position = (_actor$position = actor == null ? void 0 : actor.position) != null ? _actor$position : new Vec3(-70, 270, 0);
                  color = skill.kind === 'heal' ? '#81f4a4' : '#8bcbff';
                  _context10.next = 36;
                  return Promise.all([this.supportHalo(motion, position, color)].concat(this.burst(motion, position.x, position.y, color, 6)));
                case 36:
                  _context10.prev = 36;
                  restore();
                  return _context10.finish(36);
                case 39:
                  return _context10.abrupt("return");
                case 40:
                  if (!(skill.kind !== 'attack')) {
                    _context10.next = 42;
                    break;
                  }
                  return _context10.abrupt("return");
                case 42:
                  this.rally = false;
                  tags = this.foes.map(function (foe) {
                    var _foe$tags;
                    return (_foe$tags = foe.tags) != null ? _foe$tags : [];
                  });
                  targets = selectTargets(this.enemies, tags, skill.target);
                  hit = 0;
                case 46:
                  if (!(hit < skill.hits)) {
                    _context10.next = 104;
                    break;
                  }
                  _iterator14 = _createForOfIteratorHelperLoose(targets);
                case 48:
                  if ((_step14 = _iterator14()).done) {
                    _context10.next = 101;
                    break;
                  }
                  target = _step14.value;
                  if (!(this.enemies[target] <= 0)) {
                    _context10.next = 52;
                    break;
                  }
                  return _context10.abrupt("continue", 99);
                case 52:
                  _enemy = this.enemyNodes[target];
                  home = _enemy.position.clone();
                  restoreFocus = this.focusCombat(motion, actor ? [_enemy, actor] : [_enemy]);
                  _context10.prev = 55;
                  if (!(type === 'stone' || type === 'm')) {
                    _context10.next = 64;
                    break;
                  }
                  origin = (_actor$position2 = actor == null ? void 0 : actor.position) != null ? _actor$position2 : new Vec3(-70, 270, 0);
                  _context10.next = 60;
                  return this.flyProjectile(motion, type, origin, home);
                case 60:
                  if (_context10.sent) {
                    _context10.next = 62;
                    break;
                  }
                  return _context10.abrupt("return");
                case 62:
                  _context10.next = 74;
                  break;
                case 64:
                  if (!actor) {
                    _context10.next = 74;
                    break;
                  }
                  _origin = actor.position.clone();
                  enemyGround = home.y + ((_enemy$getChildByName = (_enemy$getChildByName2 = _enemy.getChildByName('脚底投影')) == null ? void 0 : _enemy$getChildByName2.position.y) != null ? _enemy$getChildByName : -34);
                  footOffset = (_actor$getChildByName = (_actor$getChildByName2 = actor.getChildByName('脚底投影')) == null ? void 0 : _actor$getChildByName2.position.y) != null ? _actor$getChildByName : -34;
                  _context10.next = 70;
                  return motion.play(tween(actor).to(motion.duration(.14), {
                    position: new Vec3(home.x - 36, enemyGround - footOffset, 0)
                  }));
                case 70:
                  arrived = _context10.sent;
                  if (arrived) {
                    _context10.next = 73;
                    break;
                  }
                  return _context10.abrupt("return");
                case 73:
                  void motion.play(tween(actor).to(motion.duration(.18), {
                    position: _origin
                  }, {
                    easing: 'quadOut'
                  }));
                case 74:
                  if (!motion.cancelled) {
                    _context10.next = 76;
                    break;
                  }
                  return _context10.abrupt("return");
                case 76:
                  immune = tags[target].some(function (tag) {
                    return tag === 'boss' || tag === 'stun-immune';
                  });
                  damage = Math.min(this.enemies[target], Math.round(skill.damage * (skill.stun && immune ? 1.25 : 1)));
                  this.enemies[target] -= damage;
                  if (skill.stun && !immune && this.enemies[target] > 0) this.stunned.add(target);
                  this.setBattleStatus(skill.name + " \xB7 " + this.foes[target].name + " \u2212" + damage);
                  this.updateHUD();
                  this.audio.play('hit');
                  fallen = this.enemies[target] === 0;
                  if (fallen) this.lastFallen = {
                    origin: home,
                    ground: home.y + ((_enemy$getChildByName3 = (_enemy$getChildByName4 = _enemy.getChildByName('脚底投影')) == null ? void 0 : _enemy$getChildByName4.position.y) != null ? _enemy$getChildByName3 : -34)
                  };
                  number = this.combatPopup(motion, '−' + damage, home.x, home.y + 51, advanced ? '#ffd66b' : '#ffe7b0', advanced ? 38 : charged ? 32 : 27);
                  armor = tags[target].includes('armor');
                  effects = this.burst(motion, home.x, home.y, armor ? '#ffde86' : type === 'm' ? '#d4a6ff' : '#ffb784', 6);
                  effects.push(this.hitReaction(motion, _enemy));
                  flinch = tween(_enemy).to(motion.duration(.065), {
                    position: new Vec3(home.x + 11, home.y, 0)
                  }).to(motion.duration(.10), {
                    position: home
                  });
                  if (fallen) {
                    alpha = (_enemy$getComponent = _enemy.getComponent(UIOpacity)) != null ? _enemy$getComponent : _enemy.addComponent(UIOpacity);
                    effects.push(motion.play(tween(alpha).delay(motion.duration(.17)).to(motion.duration(.25), {
                      opacity: 0
                    })));
                    effects.push(this.soulRise(motion, home));
                    effects.push(this.combatPopup(motion, '+ EXP 2', home.x, home.y + 70, '#9ae7ad'));
                  }
                  _context10.next = 93;
                  return Promise.all([number, motion.play(flinch)].concat(effects));
                case 93:
                  if (!motion.cancelled) {
                    _context10.next = 95;
                    break;
                  }
                  return _context10.abrupt("return");
                case 95:
                  if (fallen) {
                    _enemy.active = false;
                    this.enemyMeters[target].root.active = false;
                  }
                case 96:
                  _context10.prev = 96;
                  restoreFocus();
                  return _context10.finish(96);
                case 99:
                  _context10.next = 48;
                  break;
                case 101:
                  hit++;
                  _context10.next = 46;
                  break;
                case 104:
                case "end":
                  return _context10.stop();
              }
            }, _callee8, this, [[23,, 36, 39], [55,, 96, 99]]);
          }));
          function applySkill(_x19, _x20, _x21, _x22, _x23, _x24) {
            return _applySkill.apply(this, arguments);
          }
          return applySkill;
        }();
        _proto.hitReaction = /*#__PURE__*/function () {
          var _hitReaction = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(motion, actor) {
            var portrait, impact, alpha, bounds, white, whiteAlpha;
            return _regeneratorRuntime().wrap(function _callee9$(_context11) {
              while (1) switch (_context11.prev = _context11.next) {
                case 0:
                  if (!(motion.reduced || motion.cancelled)) {
                    _context11.next = 2;
                    break;
                  }
                  return _context11.abrupt("return", true);
                case 2:
                  portrait = actor.children.find(function (node) {
                    return node.getComponent(Sprite);
                  });
                  impact = this.art('combat-impact', actor.position.x, actor.position.y, 96, 80);
                  alpha = impact == null ? void 0 : impact.addComponent(UIOpacity);
                  bounds = portrait == null ? void 0 : portrait.getComponent(UITransform);
                  white = bounds && this.art('hit-white-' + portrait.name, portrait.position.x, portrait.position.y, bounds.width, bounds.height, actor);
                  whiteAlpha = white == null ? void 0 : white.addComponent(UIOpacity);
                  _context11.prev = 8;
                  _context11.next = 11;
                  return Promise.all([motion.play(tween(actor).to(.055, {
                    scale: new Vec3(1.12, .90, 1)
                  }).to(.12, {
                    scale: new Vec3(1, 1, 1)
                  })), whiteAlpha ? motion.play(tween(whiteAlpha).to(.085, {
                    opacity: 0
                  })) : Promise.resolve(true), alpha ? motion.play(tween(alpha).to(.18, {
                    opacity: 0
                  })) : Promise.resolve(true)]).then(function (results) {
                    return results.every(Boolean);
                  });
                case 11:
                  return _context11.abrupt("return", _context11.sent);
                case 12:
                  _context11.prev = 12;
                  white == null || white.destroy();
                  impact == null || impact.destroy();
                  return _context11.finish(12);
                case 16:
                case "end":
                  return _context11.stop();
              }
            }, _callee9, this, [[8,, 12, 16]]);
          }));
          function hitReaction(_x25, _x26) {
            return _hitReaction.apply(this, arguments);
          }
          return hitReaction;
        }();
        _proto.soulRise = /*#__PURE__*/function () {
          var _soulRise = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(motion, home) {
            var soul, alpha, result;
            return _regeneratorRuntime().wrap(function _callee10$(_context12) {
              while (1) switch (_context12.prev = _context12.next) {
                case 0:
                  if (!motion.reduced) {
                    _context12.next = 2;
                    break;
                  }
                  return _context12.abrupt("return", true);
                case 2:
                  soul = this.art('enemy-soul', home.x, home.y + 8, 52, 52);
                  if (soul) {
                    _context12.next = 5;
                    break;
                  }
                  return _context12.abrupt("return", true);
                case 5:
                  alpha = soul.addComponent(UIOpacity);
                  alpha.opacity = 0;
                  _context12.prev = 7;
                  _context12.next = 10;
                  return Promise.all([motion.play(tween(soul).to(.52, {
                    position: new Vec3(home.x, home.y + 76, 0)
                  }, {
                    easing: 'quadOut'
                  })), motion.play(tween(alpha).delay(.09).to(.13, {
                    opacity: 228
                  }).to(.30, {
                    opacity: 0
                  }))]);
                case 10:
                  result = _context12.sent;
                  return _context12.abrupt("return", result.every(Boolean));
                case 12:
                  _context12.prev = 12;
                  soul.destroy();
                  return _context12.finish(12);
                case 15:
                case "end":
                  return _context12.stop();
              }
            }, _callee10, this, [[7,, 12, 15]]);
          }));
          function soulRise(_x27, _x28) {
            return _soulRise.apply(this, arguments);
          }
          return soulRise;
        }();
        _proto.enemyTurn = /*#__PURE__*/function () {
          var _enemyTurn = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(motion) {
            var _this20 = this;
            var attackers, restoreFocus, base, attack, absorbed, lost, effects, _iterator15, _step15, hero, flash, opacity, stageNodes, _iterator16, _step16, node, home;
            return _regeneratorRuntime().wrap(function _callee11$(_context13) {
              while (1) switch (_context13.prev = _context13.next) {
                case 0:
                  this.battlePhase = 'enemy';
                  this.setBattleStatus('敌方行动');
                  this.syncBattleTools();
                  attackers = this.enemyNodes.flatMap(function (node, i) {
                    return _this20.enemies[i] > 0 && !_this20.stunned.has(i) ? [node] : [];
                  });
                  restoreFocus = attackers.length ? this.focusCombat(motion, Array.from(this.heroes.values()).concat(attackers)) : function () {};
                  _context13.prev = 5;
                  _context13.next = 8;
                  return Promise.all(attackers.map(function (node) {
                    var origin = node.position.clone();
                    var art = _this20.foes[_this20.enemyNodes.indexOf(node)].art;
                    if (art === 'wizard' || art === 'vine') {
                      var _target$position;
                      var target = _this20.heroes.values().next().value;
                      return _this20.flyProjectile(motion, art === 'wizard' ? 'm' : 'stone', origin, (_target$position = target == null ? void 0 : target.position) != null ? _target$position : new Vec3(-100, 240, 0));
                    }
                    return motion.play(tween(node).to(motion.duration(.14), {
                      position: new Vec3(origin.x - 27, origin.y, 0)
                    }).to(motion.duration(.17), {
                      position: origin
                    }));
                  }));
                case 8:
                  if (!motion.cancelled) {
                    _context13.next = 10;
                    break;
                  }
                  return _context13.abrupt("return");
                case 10:
                  base = this.enemies.reduce(function (sum, hp, i) {
                    return sum + (hp > 0 && !_this20.stunned.has(i) ? _this20.foes[i].atk : 0);
                  }, 0);
                  this.stunned.clear();
                  attack = base;
                  absorbed = Math.min(this.dp, attack);
                  lost = Math.min(this.hp, attack - absorbed);
                  this.dp -= absorbed;
                  this.hp -= lost;
                  this.updateHUD();
                  if (!attack) {
                    _context13.next = 41;
                    break;
                  }
                  this.audio.play('hurt');
                  this.setBattleStatus("\u654C\u65B9\u653B\u51FB \xB7 HP \u2212" + lost + " \xB7 DP \u2212" + absorbed);
                  effects = [this.combatPopup(motion, [lost && '−' + lost + ' HP', absorbed && '−' + absorbed + ' DP'].filter(Boolean).join(' · '), -100, 283, '#ffaaa2')];
                  for (_iterator15 = _createForOfIteratorHelperLoose(this.heroes.values()); !(_step15 = _iterator15()).done;) {
                    hero = _step15.value;
                    effects.push(this.hitReaction(motion, hero));
                  }
                  if (!(lost && this.hp <= this.maxHP * .30 && !motion.reduced)) {
                    _context13.next = 39;
                    break;
                  }
                  flash = this.box('重伤闪红', 0, -111.5, 428, 495, '#c31538');
                  this.art('hurt-cracks', 0, 0, 428, 495, flash);
                  opacity = flash.addComponent(UIOpacity);
                  opacity.opacity = 0;
                  effects.push(motion.play(tween(opacity).to(.045, {
                    opacity: 190
                  }, {
                    easing: 'quadOut'
                  }).to(.23, {
                    opacity: 0
                  }, {
                    easing: 'quadIn'
                  })).then(function (played) {
                    flash.destroy();
                    return played;
                  }));
                  stageNodes = Array.from(this.heroes.values()).concat(attackers);
                  _iterator16 = _createForOfIteratorHelperLoose(stageNodes);
                case 31:
                  if ((_step16 = _iterator16()).done) {
                    _context13.next = 39;
                    break;
                  }
                  node = _step16.value;
                  if (node) {
                    _context13.next = 35;
                    break;
                  }
                  return _context13.abrupt("continue", 37);
                case 35:
                  home = node.position.clone();
                  effects.push(motion.play(tween(node).to(.06, {
                    position: new Vec3(home.x - 2, home.y, 0)
                  }).to(.06, {
                    position: new Vec3(home.x + 2, home.y, 0)
                  }).to(.09, {
                    position: home
                  })));
                case 37:
                  _context13.next = 31;
                  break;
                case 39:
                  _context13.next = 41;
                  return Promise.all(effects);
                case 41:
                  if (!motion.cancelled) {
                    _context13.next = 43;
                    break;
                  }
                  return _context13.abrupt("return");
                case 43:
                  _context13.prev = 43;
                  restoreFocus();
                  return _context13.finish(43);
                case 46:
                  if (!(this.hp <= 0)) {
                    _context13.next = 49;
                    break;
                  }
                  this.finishAdventure('fail');
                  return _context13.abrupt("return");
                case 49:
                  this.turn++;
                  this.resumeBattleInput('轮到玩家，交换相邻纹章');
                case 51:
                case "end":
                  return _context13.stop();
              }
            }, _callee11, this, [[5,, 43, 46]]);
          }));
          function enemyTurn(_x29) {
            return _enemyTurn.apply(this, arguments);
          }
          return enemyTurn;
        }();
        _proto.resumeBattleInput = function resumeBattleInput(message) {
          this.clearIdleHint();
          this.busy = false;
          this.battlePhase = 'input';
          this.setBattleStatus(this.rescueCells.size ? "\u8425\u6551 \xB7 \u6E05\u9664\u300C\u6551\u300D\u6807\u8BB0\u683C\u8FD8\u5269 " + this.rescueCells.size + " \u5904" : message);
          this.drawBoard();
          this.refreshGuide();
          this.autoStep();
        };
        _proto.clearIdleHint = function clearIdleHint() {
          var _this$stopHint;
          this.hintIdle = 0;
          (_this$stopHint = this.stopHint) == null || _this$stopHint.call(this);
          this.stopHint = undefined;
        };
        _proto.update = function update(delta) {
          var _this21 = this;
          if (this.ui !== this.battleRoot || this.battlePhase !== 'input' || this.busy || this.automatic || this.guideMode || this.battleModal || this.motion.reduced) {
            if (this.hintIdle || this.stopHint) this.clearIdleHint();
            return;
          }
          this.hintIdle += delta;
          if (this.hintIdle < 6 || this.stopHint) return;
          this.hintIdle = 0;
          var move = this.legalMove();
          if (!move) return;
          var _move$map = move.map(function (index) {
              return _this21.tiles[index];
            }),
            a = _move$map[0],
            b = _move$map[1];
          var dx = Math.sign(b.position.x - a.position.x) * 5;
          var dy = Math.sign(b.position.y - a.position.y) * 5;
          var entries = [a, b].map(function (node, i) {
            var home = node.position.clone();
            var sign = i === 0 ? 1 : -1;
            var slide = new Vec3(home.x + dx * sign, home.y + dy * sign, home.z);
            var animation = tween(node).repeat(2, tween(node).to(.13, {
              position: slide
            }).to(.15, {
              position: home
            }));
            return {
              node: node,
              home: home,
              animation: animation
            };
          });
          this.stopHint = function () {
            for (var _iterator17 = _createForOfIteratorHelperLoose(entries), _step17; !(_step17 = _iterator17()).done;) {
              var _step17$value = _step17.value,
                node = _step17$value.node,
                home = _step17$value.home,
                animation = _step17$value.animation;
              animation.stop();
              if (node.isValid) node.setPosition(home);
            }
          };
          entries[0].animation.call(function () {
            _this21.stopHint = undefined;
          });
          entries.forEach(function (_ref8) {
            var animation = _ref8.animation;
            return animation.start();
          });
        };
        _proto.clearGuide = function clearGuide() {
          var _this$guideHand, _this$guideLayer;
          (_this$guideHand = this.guideHand) == null || _this$guideHand.stop();
          (_this$guideLayer = this.guideLayer) == null || _this$guideLayer.destroy();
          this.guideHand = undefined;
          this.guideLayer = undefined;
          this.guideMode = undefined;
        };
        _proto.refreshGuide = function refreshGuide() {
          var _this22 = this;
          this.clearGuide();
          if (this.phase !== 'wolves' || this.busy || this.battleModal) return;
          var mode = this.firstSwap ? 'swap' : this.potion > 0 && this.hp <= 30 ? 'potion' : undefined;
          if (!mode) return;
          if (this.automatic) {
            this.automatic = false;
            this.syncBattleTools();
          }
          this.guideMode = mode;
          var layer = this.guideLayer = this.box('教学遮罩', 0, 0, 480, 854);
          var graphics = layer.addComponent(Graphics);
          var holes = mode === 'swap' ? [0, 1, 2, 8].map(function (index) {
            var p = _this22.cells[index].position;
            return {
              x: p.x,
              y: p.y,
              w: 58,
              h: 58
            };
          }) : [{
            x: battleToolbar.x,
            y: battleToolbar.y,
            w: battleToolbar.width + 4,
            h: 52
          }, {
            x: -stageGrid.meterX,
            y: stageGrid.hpY,
            w: 125,
            h: 24
          }];
          var breaks = Array.from(new Set([-427, 427].concat(holes.flatMap(function (h) {
            return [h.y - h.h / 2, h.y + h.h / 2];
          })))).sort(function (a, b) {
            return a - b;
          });
          graphics.fillColor = Color.fromHEX(new Color(), '#101c20ad');
          var _loop5 = function _loop5() {
            var low = breaks[row - 1],
              high = breaks[row],
              mid = (high + low) / 2;
            var openings = holes.filter(function (h) {
              return Math.abs(h.y - mid) < h.h / 2;
            }).sort(function (a, b) {
              return a.x - b.x;
            });
            var left = -240;
            for (var _iterator19 = _createForOfIteratorHelperLoose(openings), _step19; !(_step19 = _iterator19()).done;) {
              var hole = _step19.value;
              graphics.rect(left, low, hole.x - hole.w / 2 - left, high - low);
              left = hole.x + hole.w / 2;
            }
            graphics.rect(left, low, 240 - left, high - low);
          };
          for (var row = 1; row < breaks.length; row++) {
            _loop5();
          }
          graphics.fill();
          graphics.strokeColor = Color.fromHEX(new Color(), '#ffe49d');
          graphics.lineWidth = 3;
          for (var _iterator18 = _createForOfIteratorHelperLoose(holes), _step18; !(_step18 = _iterator18()).done;) {
            var h = _step18.value;
            graphics.roundRect(h.x - h.w / 2, h.y - h.h / 2, h.w, h.h, 8);
          }
          graphics.stroke();
          var caption = mode === 'swap' ? '滑动或依次点击高亮的两枚纹章' : '点击药水恢复生命';
          this.box('教学提示底板', 0, 159, 419, 36, '#27362ef0', layer);
          this.outline(this.label(caption, 0, 159, 411, 19, layer));
          var source = mode === 'swap' ? this.cells[1].position : new Vec3(battleToolbar.x, battleToolbar.y + 23, 0);
          var dest = mode === 'swap' ? this.cells[8].position : source;
          var hand = this.box('引导手套', source.x + 15, source.y - 15, 30, 39, undefined, layer);
          var glove = hand.addComponent(Graphics);
          glove.fillColor = Color.fromHEX(new Color(), '#fff8df');
          glove.strokeColor = Color.fromHEX(new Color(), '#312920');
          glove.lineWidth = 2;
          glove.moveTo(-3, 17);
          glove.quadraticCurveTo(-9, 20, -10, 14);
          glove.lineTo(-10, 0);
          glove.quadraticCurveTo(-16, 4, -17, -2);
          glove.lineTo(-10, -12);
          glove.quadraticCurveTo(-7, -18, -1, -18);
          glove.lineTo(7, -18);
          glove.quadraticCurveTo(13, -17, 15, -11);
          glove.lineTo(17, 0);
          glove.quadraticCurveTo(17, 7, 10, 5);
          glove.quadraticCurveTo(6, 9, 1, 6);
          glove.lineTo(1, 13);
          glove.quadraticCurveTo(1, 17, -3, 17);
          glove.close();
          glove.fill();
          glove.stroke();
          if (!this.motion.reduced) {
            this.guideHand = tween(hand).repeatForever(tween(hand).set({
              position: new Vec3(source.x + 15, source.y - 15, 0),
              scale: new Vec3(.9, .9, 1)
            }).to(.56, {
              position: new Vec3(dest.x + 15, dest.y - 15, 0),
              scale: new Vec3(1.1, 1.1, 1)
            }).delay(.42)).start();
          }
        };
        _proto.openBattleModal = function openBattleModal(mode) {
          var _this23 = this;
          if (this.battleModal || this.battlePhase === 'complete') return;
          this.clearGuide();
          this.motion.pause();
          if (this.trial) this.audio.playTrial('open');
          var panel = this.battleModal = this.box('战斗弹窗', 0, 0, 480, 854, '#131a22b8');
          var card = this.box('弹窗卡片', 0, 0, 432, mode === 'log' ? 480 : 234, '#253a34', panel);
          this.outline(this.label(mode === 'log' ? '战斗记录' : '撤离探索', 0, mode === 'log' ? 204 : 80, 390, 25, card));
          if (mode === 'log') {
            this.battleLogs.slice(-9).forEach(function (line, i) {
              return _this23.label(line, 0, 152 - i * 34, 396, 16, card);
            });
          } else this.label('确定撤离当前探索？', 0, 19, 396, 19, card);
          var dismiss = function dismiss() {
            panel.destroy();
            _this23.battleModal = undefined;
            _this23.motion.resume();
            _this23.refreshGuide();
            _this23.autoStep();
          };
          var choice = function choice(label, x, y, action) {
            var button = _this23.box(label, x, y, 169, 46, '#567052', card);
            if (_this23.trial) _this23.slicedArt('trial-ui-button', 0, 0, 169, 46, button);
            _this23.label(label, 0, 0, 164, 18, button);
            button.on(Node.EventType.TOUCH_END, function () {
              if (_this23.trial) _this23.audio.playTrial('click');
              action();
            });
          };
          if (mode === 'retreat') {
            choice('返回战斗', -97, -71, dismiss);
            choice('确认撤离', 97, -71, function () {
              _this23.motion.cancel();
              _this23.battleModal = undefined;
              _this23.finishAdventure('retreat');
            });
          } else choice('返回战斗', 0, -192, dismiss);
        };
        _proto.animateCoins = /*#__PURE__*/function () {
          var _animateCoins = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(motion, amount, label, origin, groundY) {
            var _this24 = this;
            var root, active, base, setAmount, count, spacing, left, coins, hud, destination, displayed, target, pulse, rolling, rollCounter, _i4, _coins, node;
            return _regeneratorRuntime().wrap(function _callee14$(_context16) {
              while (1) switch (_context16.prev = _context16.next) {
                case 0:
                  root = this.ui;
                  active = function active() {
                    return !motion.cancelled && _this24.ui === root && label.isValid;
                  };
                  if (!(!active() || amount <= 0)) {
                    _context16.next = 4;
                    break;
                  }
                  return _context16.abrupt("return", active());
                case 4:
                  base = Number(label.string);
                  setAmount = function setAmount(value) {
                    if (active()) label.string = String(value);
                  };
                  if (!motion.reduced) {
                    _context16.next = 9;
                    break;
                  }
                  setAmount(base + amount);
                  return _context16.abrupt("return", true);
                case 9:
                  count = Math.min(amount, 8);
                  spacing = 14;
                  left = Math.max(-218, Math.min(218 - (count - 1) * spacing, origin.x - (count - 1) * spacing / 2));
                  coins = Array.from({
                    length: count
                  }, function (_, i) {
                    var node = _this24.box('飞行金币', origin.x, origin.y, 13, 13);
                    _this24.drawCoin(node.addComponent(Graphics), 6);
                    var ground = new Vec3(left + i * spacing, groundY + 6 + i % 2 * 4, 0);
                    return {
                      node: node,
                      ground: ground
                    };
                  });
                  hud = label.node;
                  destination = hud.position.clone();
                  displayed = base;
                  target = base;
                  pulse = 0;
                  rollCounter = /*#__PURE__*/function () {
                    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
                      var step;
                      return _regeneratorRuntime().wrap(function _callee12$(_context14) {
                        while (1) switch (_context14.prev = _context14.next) {
                          case 0:
                            step = Math.max(1, Math.ceil(amount / 20));
                          case 1:
                            if (!(displayed < target && active())) {
                              _context14.next = 10;
                              break;
                            }
                            _context14.next = 4;
                            return motion.play(tween({}).delay(.038));
                          case 4:
                            if (_context14.sent) {
                              _context14.next = 6;
                              break;
                            }
                            return _context14.abrupt("return");
                          case 6:
                            displayed = Math.min(target, displayed + step);
                            setAmount(displayed);
                            _context14.next = 1;
                            break;
                          case 10:
                          case "end":
                            return _context14.stop();
                        }
                      }, _callee12);
                    }));
                    return function rollCounter() {
                      return _ref9.apply(this, arguments);
                    };
                  }();
                  _context16.prev = 19;
                  _context16.next = 22;
                  return Promise.all(coins.map(function (_ref10, i) {
                    var node = _ref10.node,
                      ground = _ref10.ground;
                    return motion.play(tween(node).to(.14, {
                      position: new Vec3((ground.x + origin.x) / 2, origin.y + 24 + i % 3 * 4, 0)
                    }, {
                      easing: 'quadOut'
                    }).to(.19, {
                      position: ground
                    }, {
                      easing: 'quadIn'
                    }));
                  }));
                case 22:
                  if (active()) {
                    _context16.next = 24;
                    break;
                  }
                  return _context16.abrupt("return", false);
                case 24:
                  _context16.next = 26;
                  return Promise.all(coins.map( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(_ref11, i) {
                    var _rolling;
                    var node, ground, bend, arrived, current;
                    return _regeneratorRuntime().wrap(function _callee13$(_context15) {
                      while (1) switch (_context15.prev = _context15.next) {
                        case 0:
                          node = _ref11.node, ground = _ref11.ground;
                          bend = (i - (count - 1) / 2) * 12;
                          _context15.next = 4;
                          return motion.play(tween({
                            progress: 0
                          }).delay(.15 + i * .064).to(.35, {
                            progress: 1
                          }, {
                            easing: 'quadIn',
                            onUpdate: function onUpdate(_ref13) {
                              var progress = _ref13.progress;
                              if (!node.isValid) return;
                              var arc = Math.sin(Math.PI * progress);
                              node.setPosition(ground.x + (destination.x - ground.x) * progress + bend * arc, ground.y + (destination.y - ground.y) * progress + (38 + i % 2 * 9) * arc);
                            }
                          }));
                        case 4:
                          arrived = _context15.sent;
                          if (!(!arrived || !active())) {
                            _context15.next = 7;
                            break;
                          }
                          return _context15.abrupt("return");
                        case 7:
                          node.destroy();
                          _this24.audio.play('coins');
                          target += Math.floor((i + 1) * amount / count) - Math.floor(i * amount / count);
                          (_rolling = rolling) != null ? _rolling : rolling = rollCounter()["finally"](function () {
                            rolling = undefined;
                          });
                          current = ++pulse;
                          hud.setScale(1.17, 1.17, 1);
                          _context15.next = 15;
                          return motion.play(tween({
                            scale: 1.17
                          }).to(.12, {
                            scale: 1
                          }, {
                            onUpdate: function onUpdate(_ref14) {
                              var scale = _ref14.scale;
                              if (current === pulse && active()) hud.setScale(scale, scale, 1);
                            }
                          }));
                        case 15:
                        case "end":
                          return _context15.stop();
                      }
                    }, _callee13);
                  }))));
                case 26:
                  _context16.next = 28;
                  return rolling;
                case 28:
                  if (active()) {
                    _context16.next = 30;
                    break;
                  }
                  return _context16.abrupt("return", false);
                case 30:
                  setAmount(base + amount);
                  return _context16.abrupt("return", true);
                case 32:
                  _context16.prev = 32;
                  for (_i4 = 0, _coins = coins; _i4 < _coins.length; _i4++) {
                    node = _coins[_i4].node;
                    if (node.isValid) node.destroy();
                  }
                  if (hud.isValid) hud.setScale(1, 1, 1);
                  if (!active() && this.ui === root && label.isValid) label.string = String(base);
                  return _context16.finish(32);
                case 37:
                case "end":
                  return _context16.stop();
              }
            }, _callee14, this, [[19,, 32, 37]]);
          }));
          function animateCoins(_x30, _x31, _x32, _x33, _x34) {
            return _animateCoins.apply(this, arguments);
          }
          return animateCoins;
        }();
        _proto.combatPopup = function combatPopup(motion, value, x, y, color, size) {
          if (size === void 0) {
            size = 20;
          }
          var label = this.outline(this.label(value, x, y, 155, size));
          label.color = Color.fromHEX(new Color(), color);
          label.isBold = size > 20;
          var n = label.node;
          n.setScale(.75, .75, 1);
          return motion.play(tween(n).to(motion.duration(.075), {
            position: new Vec3(x, y + 8, 0),
            scale: new Vec3(1.27, 1.27, 1)
          }).to(motion.duration(.10), {
            scale: new Vec3(1, 1, 1)
          }).to(motion.duration(.19), {
            position: new Vec3(x, y + 32, 0)
          })).then(function (played) {
            if (n.isValid) n.destroy();
            return played;
          });
        };
        _proto.flyProjectile = /*#__PURE__*/function () {
          var _flyProjectile = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(motion, type, origin, target) {
            var _this25 = this;
            var projectile, trails, arrived;
            return _regeneratorRuntime().wrap(function _callee15$(_context17) {
              while (1) switch (_context17.prev = _context17.next) {
                case 0:
                  projectile = this.art(type, origin.x, origin.y, 32, 32);
                  if (projectile) {
                    _context17.next = 3;
                    break;
                  }
                  return _context17.abrupt("return", true);
                case 3:
                  trails = motion.reduced ? [] : Array.from({
                    length: 4
                  }, function (_, i) {
                    var n = _this25.box('投射物拖尾', origin.x, origin.y, 8 - i, 8 - i, type === 'm' ? '#ba90f0' : '#d1b58a');
                    var alpha = n.addComponent(UIOpacity);
                    alpha.opacity = 143 - i * 25;
                    n.setSiblingIndex(projectile.getSiblingIndex());
                    return motion.play(tween(n).delay(i * .018).to(.19, {
                      position: new Vec3(target.x - Math.sign(target.x - origin.x) * (14 + i * 6), target.y, 0),
                      scale: new Vec3(.35, .35, 1)
                    }, {
                      easing: 'quadIn'
                    })).then(function (played) {
                      if (n.isValid) n.destroy();
                      return played;
                    });
                  });
                  _context17.next = 6;
                  return motion.play(tween(projectile).to(motion.duration(.18), {
                    position: target.clone()
                  }, {
                    easing: 'quadIn'
                  }));
                case 6:
                  arrived = _context17.sent;
                  if (projectile.isValid) projectile.destroy();
                  _context17.next = 10;
                  return Promise.all(trails);
                case 10:
                  return _context17.abrupt("return", arrived && !motion.cancelled);
                case 11:
                case "end":
                  return _context17.stop();
              }
            }, _callee15, this);
          }));
          function flyProjectile(_x37, _x38, _x39, _x40) {
            return _flyProjectile.apply(this, arguments);
          }
          return flyProjectile;
        }();
        _proto.supportHalo = function supportHalo(motion, position, color) {
          if (motion.reduced) return Promise.resolve(true);
          var node = this.box('守护光环', position.x, position.y - 15, 90, 60);
          var ring = node.addComponent(Graphics);
          ring.strokeColor = Color.fromHEX(new Color(), color);
          ring.lineWidth = 3;
          ring.ellipse(0, 0, 40, 24);
          ring.stroke();
          var opacity = node.addComponent(UIOpacity);
          opacity.opacity = 0;
          return Promise.all([motion.play(tween(opacity).to(.09, {
            opacity: 220
          }).to(.19, {
            opacity: 0
          })), motion.play(tween(node).to(.28, {
            position: new Vec3(position.x, position.y + 12, 0),
            scale: new Vec3(1.12, 1.12, 1)
          }))]).then(function (results) {
            if (node.isValid) node.destroy();
            return results.every(Boolean);
          });
        };
        _proto.burst = function burst(motion, x, y, color, count) {
          var _this26 = this;
          if (motion.reduced) return [];
          return Array.from({
            length: count
          }, function (_, i) {
            var _this26$particlePool$, _node$getComponent;
            var angle = i * 2 * Math.PI / count;
            var root = _this26.ui;
            var node = (_this26$particlePool$ = _this26.particlePool.pop()) != null ? _this26$particlePool$ : _this26.box('粒子', x, y, 8, 8);
            var g = (_node$getComponent = node.getComponent(Graphics)) != null ? _node$getComponent : node.addComponent(Graphics);
            g.clear();
            g.fillColor = Color.fromHEX(new Color(), color);
            g.circle(0, 0, 4);
            g.fill();
            node.setPosition(x, y);
            node.setScale(1, 1, 1);
            node.active = true;
            node.setSiblingIndex(root.children.length - 1);
            return motion.play(tween(node).to(.19, {
              position: new Vec3(x + Math.cos(angle) * 30, y + Math.sin(angle) * 25, 0),
              scale: new Vec3(.2, .2, 1)
            })).then(function (played) {
              if (node.isValid && _this26.ui === root) {
                node.active = false;
                _this26.particlePool.push(node);
              }
              return played;
            });
          });
        };
        _proto.popup = function popup(value, x, y) {
          var n = this.outline(this.label(value, x, y, 155, 20)).node;
          tween(n).to(.42, {
            position: new Vec3(x, y + 35, 0),
            scale: new Vec3(1.15, 1.15, 1)
          }).call(function () {
            return n.destroy();
          }).start();
        };
        _proto.groundShadow = function groundShadow(parent, y, art, width) {
          var _portraitFootprint$ar;
          var _ref15 = (_portraitFootprint$ar = portraitFootprint[art]) != null ? _portraitFootprint$ar : [.14, .86],
            left = _ref15[0],
            right = _ref15[1];
          var x = ((left + right) * .5 - .5) * width;
          var radius = Math.max(15, (right - left) * width * .47);
          var height = radius * .24;
          var shade = this.box('脚底投影', x, y, radius * 2, height * 2, undefined, parent);
          var g = shade.addComponent(Graphics);
          g.fillColor = new Color(17, 13, 15, 105);
          g.ellipse(0, 0, radius, height);
          g.fill();
        };
        _proto.showParty = function showParty() {
          this.heroes.clear();
          var size = 94;
          var slots = partyFormation(this.party, function (id) {
            return heroes[id].tags;
          }).sort(function (a, b) {
            return Number(a.front) - Number(b.front);
          });
          for (var _iterator20 = _createForOfIteratorHelperLoose(slots), _step20; !(_step20 = _iterator20()).done;) {
            var _step20$value = _step20.value,
              id = _step20$value.id,
              x = _step20$value.x,
              front = _step20$value.front;
            var ground = front ? stageGrid.groundY : stageGrid.rearGroundY;
            var art = 'hero-' + id;
            var y = this.portraitY(art, ground, size);
            var actor = this.box(art, x, y, size, size);
            this.groundShadow(actor, ground - y, art, size);
            this.art(art, 0, 0, size, size, actor);
            this.heroes.set(id, actor);
          }
        };
        _proto.page = function page(title, detail, background, options) {
          if (background === void 0) {
            background = 'travel-forest-plains';
          }
          if (options === void 0) {
            options = {};
          }
          this.reset(background);
          if (options.party !== false) this.showParty();else this.heroes.clear();
          this.box('Scene title plate', 0, stageGrid.titleY, 336, 40, '#24392fe8');
          var heading = this.label(title, 0, stageGrid.titleY, 320, 25);
          heading.isBold = true;
          if (detail) {
            this.box('Scene information', 0, 122, 456, 27, '#263c32');
            this.label(detail, 0, 122, 442, 17);
          }
          if (options.meters !== false) {
            var hp = Math.max(0, this.hp),
              maxHP = this.maxHP;
            var stageStats = this.makeMeter(-stageGrid.meterX, stageGrid.hpY, 121, '#7ecb82');
            this.setMeter(stageStats, hp, maxHP, String(hp));
            if (this.showsGuard) {
              var stageGuard = this.makeMeter(-stageGrid.meterX, stageGrid.secondaryY, 121, '#63b5df');
              this.setMeter(stageGuard, this.dp, this.maxDP, String(this.dp));
            }
          }
          if (options.gold !== false) this.coinText = this.makeCoinDisplay();
        };
        _proto.startTutorial = function startTutorial() {
          this.adventure = undefined;
          this.tutorialXP = 0;
          this.phase = 'wolves';
          this.dungeon = new DungeonDirector(tutorialRoute());
          this.showRoom();
        };
        _proto.startMineTrial = function startMineTrial() {
          var _this27 = this;
          if (this.trial) return;
          var snapshot = {
            party: this.party,
            types: this.types,
            phase: this.phase,
            hp: this.hp,
            dp: this.dp,
            potion: this.potion,
            inventory: this.inventory,
            dungeon: this.dungeon,
            adventure: this.adventure
          };
          this.trial = {
            random: mineTrialRandom(),
            restore: function restore() {
              return Object.assign(_this27, snapshot);
            },
            moves: 0,
            longestChain: 0
          };
          this.inventory = new Inventory();
          this.party = ['s', 'd', 'h', 'm'];
          this.types = this.formalTypes();
          this.phase = 'mine';
          this.adventure = {
            id: 'mine',
            coins: 0,
            loot: {},
            xp: 0,
            ordinaryWins: 0,
            buffs: {}
          };
          this.dungeon = new DungeonDirector(makeMineTrial());
          this.hp = this.maxHP;
          this.dp = 0;
          this.potion = 2;
          this.page(mineTrialTitle, '小队沿废弃轨道前进，找到深处的晶岩守卫。', this.dungeonBackdrop(0));
          this.box('轨道试玩说明', 0, -45, 416, 232, '#20372f');
          this.mineTrialCaption('棋盘轨道', 48);
          this.label('上方六排向下落子', 0, 2, 378, 19);
          this.label('倒数第二排从左补棋，最底排从右补棋', 0, -36, 390, 18);
          this.label('遭遇战 · 营地 · 营救 · 晶岩守卫', 0, -84, 388, 17);
          var root = this.ui;
          this.trialButton('进入矿道', -203, function () {
            if (_this27.ui !== root) return;
            _this27.audio.playTrial('open');
            _this27.showRoom();
          });
          this.trialButton('返回标题', -269, function () {
            return _this27.leaveMineTrial();
          }, 0, 230, 'trial-ui-back', true);
        };
        _proto.mineTrialCaption = function mineTrialCaption(value, y) {
          this.slicedArt('trial-ui-banner', 0, y, 406, 48);
          var heading = this.label(value, 0, y, 374, 21);
          heading.isBold = true;
          heading.color = Color.fromHEX(new Color(), '#51382b');
        };
        _proto.leaveMineTrial = function leaveMineTrial(retry) {
          var _this$motion2;
          if (retry === void 0) {
            retry = false;
          }
          var trial = this.trial;
          if (!trial) return;
          (_this$motion2 = this.motion) == null || _this$motion2.cancel();
          this.audio.stopTrial();
          this.trial = undefined;
          trial.restore();
          if (retry) this.startMineTrial();else this.menu();
        };
        _proto.finishMineTrial = function finishMineTrial(outcome) {
          var _this$motion3,
            _this28 = this;
          (_this$motion3 = this.motion) == null || _this$motion3.cancel();
          this.audio.stopTrial();
          this.dungeon = undefined;
          this.automatic = false;
          this.busy = false;
          var title = outcome === 'win' ? '轨道试炼完成' : outcome === 'fail' ? '小队战败' : '已撤离矿道';
          var detail = outcome === 'win' ? '晶岩守卫已击败，通往矿镇的轨道重新畅通。' : outcome === 'fail' ? '下一次可以在低血量时用药，或在营地恢复。' : '可以随时从固定开局重新挑战。';
          this.page(title, detail, outcome === 'win' ? 'stage-mine-4' : 'stage-mine-0');
          this.mineTrialCaption('挑战结果', 66);
          if (outcome === 'win') {
            this.audio.playTrial('victory');
            var star = this.art('trial-ui-clear', 0, -12, 85, 85);
            var _root = this.ui;
            if (star) {
              var reveal = new BattleMotion();
              this.motion = reveal;
              if (!reveal.reduced) {
                star.setScale(.35, .35, 1);
                void reveal.play(tween(star).delay(.24).to(.16, {
                  scale: new Vec3(1.13, 1.13, 1)
                }, {
                  easing: 'backOut'
                }).call(function () {
                  if (_this28.ui === _root) _this28.audio.playTrial('reward');
                }).to(.11, {
                  scale: new Vec3(1, 1, 1)
                }));
              }
            }
            this.label("\u6709\u6548\u6362\u4F4D " + this.trial.moves + " \u6B21\u3000\u6700\u9AD8 " + this.trial.longestChain + " \u8FDE\u9501", 0, -83, 390, 17);
          } else if (outcome === 'fail') this.audio.playTrial('defeat');
          this.trialButton('再试一次', -164, function () {
            return _this28.leaveMineTrial(true);
          });
          this.trialButton('返回标题', -230, function () {
            return _this28.leaveMineTrial();
          }, 0, 230, 'trial-ui-back', true);
        };
        _proto.victory = function victory(director, room, reward) {
          var _this29 = this;
          if (this.dungeon !== director || director.room !== room || this.rewardedRooms.has(room)) return;
          this.rewardedRooms.add(room);
          var run = this.adventure;
          this.receiveGold(reward);
          if (this.trial) {
            if (room.type !== 'boss') this.audio.playTrial('victory');
            this.advanceRoom(director, room);
            return;
          }
          this.audio.play('victory');
          if (!run) {
            this.tutorialXP += room.enemies.length * 2;
            if (room.type === 'boss') {
              director.advance(room);
              this.dungeon = undefined;
              this.taught = true;
              this.villageGuidePending = true;
              this.location = locations.indexOf('forest');
              this.gainXP(this.tutorialXP);
              this.save();
              this.page('裂印暂时封闭', '带着救出的村民前往溪桥村，向村长交付村徽。', 'stage-forest-4');
              this.button('返回章节地图', 14, function () {
                return _this29.map();
              });
              return;
            }
            this.advanceRoom(director, room);
            return;
          }
          run.xp += room.enemies.length * 2;
          var multiplier = dungeonRewardMultiplier(room.type);
          var loot = dungeons[run.id].loot;
          for (var _i5 = 0, _arr3 = Object.keys(loot); _i5 < _arr3.length; _i5++) {
            var _run$loot$key;
            var key = _arr3[_i5];
            if (key === 'gold') continue;
            run.loot[key] = ((_run$loot$key = run.loot[key]) != null ? _run$loot$key : 0) + Math.ceil(loot[key] * multiplier);
          }
          if (room.type !== 'elite' && room.type !== 'boss') run.ordinaryWins++;
          this.advanceRoom(director, room);
        };
        _proto.finishAdventure = function finishAdventure(outcome) {
          var _this30 = this;
          if (this.trial) {
            this.finishMineTrial(outcome);
            return;
          }
          var run = this.adventure;
          this.adventure = undefined;
          this.dungeon = undefined;
          this.automatic = false;
          this.busy = false;
          if (run) {
            var rate = outcome === 'win' ? 1 : outcome === 'retreat' ? .7 : .5;
            var earned = {};
            for (var _i6 = 0, _arr4 = Object.keys(run.loot); _i6 < _arr4.length; _i6++) {
              var key = _arr4[_i6];
              earned[key] = Math.floor(run.loot[key] * rate);
            }
            earned.gold = Math.floor(run.coins * rate);
            if (outcome === 'win') {
              var _this$hunt;
              if (!this.cleared.has(run.id)) {
                var _earned$gold;
                this.cleared.add(run.id);
                earned.gold = ((_earned$gold = earned.gold) != null ? _earned$gold : 0) + 12;
              }
              if (((_this$hunt = this.hunt) == null ? void 0 : _this$hunt.state) === 'active' && this.hunt.target === run.id) this.hunt = _extends({}, this.hunt, {
                state: 'ready'
              });
              this.gainXP(run.xp);
            }
            this.addMaterials(earned);
            if (outcome !== 'fail') {
              this.hp = Math.min(this.maxHP, Math.max(1, this.hp));
              this.save();
              var names = {
                gold: '金币',
                herb: '草药',
                ore: '铁矿',
                essence: '灵质',
                crystal: '晶体'
              };
              var summary = Object.keys(earned).filter(function (key) {
                return earned[key] > 0;
              }).map(function (key) {
                return names[key] + ' ×' + earned[key];
              }).join(' · ');
              this.page(outcome === 'win' ? '地牢通关' : '撤离结算', '本次带回：' + (summary || '无'), outcome === 'win' ? this.lastDungeonBackdrop(run.id) : 'stage-' + run.id + '-0');
              if (outcome === 'win' && run.id === 'tower') {
                this.label('伊芙：归印会把失控的力量引向了矿镇。', 0, 86, 434, 17);
                this.label('高塔的裂印已封闭，接下来要找出运单的收货人。', 0, 62, 434, 16);
              }
              this.button('返回章节地图', 30, function () {
                return _this30.map();
              });
              this.button('整理角色与装备', -34, function () {
                return _this30.roster();
              });
              return;
            }
          }
          if (outcome === 'fail') {
            this.audio.play('defeat');
            this.hp = this.maxHP;
            this.dp = this.maxDP;
            this.location = locations.indexOf('village');
            this.save();
            this.page('探索失败', '你在溪桥村的酒馆醒来，队伍已恢复生命与 DP。', 'village-tavern-stage');
            this.button('起身，回到酒馆', 14, function () {
              return _this30.tavern(true);
            });
          } else this.menu();
        };
        _proto.map = function map() {
          var _this$art5,
            _root$getChildByName,
            _this31 = this;
          this.dungeon = undefined;
          this.adventure = undefined;
          var saved = locations[this.location];
          var current = saved && unlocked(saved, this.cleared) ? saved : 'forest';
          this.location = locations.indexOf(current);
          this.save();
          var guide = this.villageGuidePending && !this.reported;
          this.page('第一章 · 苔石边境', !this.reported ? '前往溪桥村交付村徽' : !this.party.includes('d') ? '前往溪桥村酒馆，与盾卫罗兰会合' : '击败各地首领，沿道路开启下一片区域', this.locationBackdrop(current), {
            gold: false
          });
          var mapY = -121;
          var mapSize = 460;
          (_this$art5 = this.art('world-travel', 0, mapY, mapSize, mapSize)) != null ? _this$art5 : this.art('world', 0, mapY, mapSize, mapSize);
          var settlementX = (444.5 / 940 - .5) * mapSize;
          var settlementY = (.5 - 722.5 / 940) * mapSize + mapY;
          var villageArt = this.art('world-village-cut', settlementX, settlementY, 349 / 940 * mapSize, 243 / 940 * mapSize);
          var at = function at(_ref16) {
            var x = _ref16[0],
              y = _ref16[1];
            return new Vec3((x - 50) * mapSize / 100, (50 - y) * mapSize / 100 + mapY, 0);
          };
          var marker = at(worldPoints[current]);
          var tokenY = 29;
          var token = this.art('hero-s', marker.x, marker.y + tokenY, 68, 68);
          var traveling = false;
          var root = this.ui;
          var caption = (_root$getChildByName = root.getChildByName('第一章 · 苔石边境')) == null ? void 0 : _root$getChildByName.getComponent(Label);
          var _loop6 = function _loop6() {
            var _this31$hunt;
            var id = _step21.value;
            var pt = at(worldPoints[id]);
            var ready = unlocked(id, _this31.cleared);
            var node = _this31.box(locationNames[id], pt.x, pt.y - 23, 104, 38);
            var settlement = id === 'village' ? _this31.box('村庄建筑点击区', settlementX - pt.x, settlementY - (pt.y - 23) - 16, 113, 48, undefined, node) : undefined;
            if (guide && id === 'village') _this31.mapQuestHighlight(node);
            var banner = _this31.slicedArt('map-parchment', 0, 0, 104, 37, node);
            if (banner) banner.getComponent(Sprite).grayscale = !ready;else _this31.box('地图名称备用底框', 0, 0, 104, 37, ready ? '#f8dfb4' : '#c3b9a9', node);
            var title = _this31.label(locationNames[id], 0, 0, 82, 16, node);
            title.isBold = true;
            title.color = Color.fromHEX(new Color(), ready ? '#573724' : '#625b54');
            if (((_this31$hunt = _this31.hunt) == null ? void 0 : _this31$hunt.state) === 'active' && _this31.hunt.target === id) {
              var badge = _this31.box('讨伐标记', 41, 17, 21, 21, undefined, node);
              var ink = badge.addComponent(Graphics);
              ink.fillColor = Color.fromHEX(new Color(), '#d63c41');
              ink.strokeColor = Color.fromHEX(new Color(), '#622331');
              ink.lineWidth = 2;
              ink.circle(0, 0, 9);
              ink.fill();
              ink.stroke();
              _this31.outline(_this31.label('!', 0, 0, 17, 14, badge));
            }
            var visit = /*#__PURE__*/function () {
              var _ref17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
                var path, places, travelTime, pathPoints;
                return _regeneratorRuntime().wrap(function _callee16$(_context18) {
                  while (1) switch (_context18.prev = _context18.next) {
                    case 0:
                      if (!(traveling || !ready || _this31.ui !== root || guide && id !== 'village')) {
                        _context18.next = 2;
                        break;
                      }
                      return _context18.abrupt("return");
                    case 2:
                      path = worldRoute(current, id, function (point) {
                        return !locations.includes(point) || unlocked(point, _this31.cleared);
                      });
                      if (path.length) {
                        _context18.next = 5;
                        break;
                      }
                      return _context18.abrupt("return");
                    case 5:
                      traveling = true;
                      if (caption) caption.string = '前往' + locationNames[id];
                      if (!(path.length > 1)) {
                        _context18.next = 13;
                        break;
                      }
                      places = _this31.mapTravelViews(current, id);
                      travelTime = Math.max(1.3, (places.length - 1) * .46, path.length * .24);
                      pathPoints = worldTrack(path).map(at);
                      _context18.next = 13;
                      return Promise.all([_this31.walkParty(travelTime, places), _this31.moveMapToken(token, pathPoints, tokenY, travelTime)]);
                    case 13:
                      if (!(_this31.ui !== root)) {
                        _context18.next = 15;
                        break;
                      }
                      return _context18.abrupt("return");
                    case 15:
                      if (!(id === 'village')) {
                        _context18.next = 21;
                        break;
                      }
                      _this31.location = locations.indexOf(id);
                      _this31.villageGuidePending = false;
                      _this31.save();
                      _this31.village();
                      return _context18.abrupt("return");
                    case 21:
                      _this31.audio.play('door');
                      _context18.next = 24;
                      return _this31.curtain(false);
                    case 24:
                      if (!(_this31.ui !== root)) {
                        _context18.next = 26;
                        break;
                      }
                      return _context18.abrupt("return");
                    case 26:
                      _this31.location = locations.indexOf(id);
                      _this31.save();
                      _this31.enter(id, function () {
                        return _this31.curtain(true);
                      });
                    case 29:
                    case "end":
                      return _context18.stop();
                  }
                }, _callee16);
              }));
              return function visit() {
                return _ref17.apply(this, arguments);
              };
            }();
            node.on(Node.EventType.TOUCH_END, visit);
            settlement == null || settlement.on(Node.EventType.TOUCH_END, visit);
            if (id === 'village') villageArt == null || villageArt.on(Node.EventType.TOUCH_END, visit);
          };
          for (var _iterator21 = _createForOfIteratorHelperLoose(locations), _step21; !(_step21 = _iterator21()).done;) {
            _loop6();
          }
          token == null || token.setSiblingIndex(this.ui.children.length - 1);
          if (guide) this.label('点击高亮的溪桥村', 0, -364, 240, 16);
          var footerY = guide ? -399 : -386;
          this.button('小队配置', footerY, function () {
            if (!traveling) _this31.roster();
          }, -145, 135);
          this.button('规则', footerY, function () {
            if (!traveling) _this31.showRules();
          }, 0, 112);
          this.button('返回主菜单', footerY, function () {
            if (!traveling) _this31.menu();
          }, 145, 135);
        };
        _proto.mapQuestHighlight = function mapQuestHighlight(node) {
          var glow = this.box('任务目标高亮', 0, 0, 120, 50, undefined, node).addComponent(Graphics);
          for (var _i7 = 0, _arr5 = [[14, 20], [9, 42], [5, 98], [2, 255]]; _i7 < _arr5.length; _i7++) {
            var _arr5$_i = _arr5[_i7],
              width = _arr5$_i[0],
              alpha = _arr5$_i[1];
            glow.strokeColor = new Color(255, 207, 79, alpha);
            glow.lineWidth = width;
            glow.roundRect(-52, -17, 104, 34, 9);
            glow.stroke();
          }
        };
        _proto.moveMapToken = function moveMapToken(token, points, floorOffset, seconds) {
          var _this32 = this;
          if (!token || !points.length) return Promise.resolve();
          return new Promise(function (resolve) {
            var motion = tween(token);
            var current = token.position.clone();
            var targets = points.map(function (point) {
              return new Vec3(point.x, point.y + floorOffset, 0);
            });
            var lengths = targets.map(function (point) {
              var length = Vec3.distance(current, point);
              current = point;
              return length;
            });
            var total = lengths.reduce(function (sum, length) {
              return sum + length;
            }, 0);
            targets.forEach(function (position, i) {
              return motion.to(_this32.travelDuration(seconds * lengths[i] / Math.max(1, total)), {
                position: position
              });
            });
            motion.call(function () {
              return resolve();
            }).start();
          });
        };
        _proto.showRules = function showRules(tab, back) {
          var _this33 = this;
          if (tab === void 0) {
            tab = 0;
          }
          if (back === void 0) {
            back = function back() {
              return _this33.map();
            };
          }
          var labels = ['战斗', '探索', '存档'];
          var lines = [['交换相邻纹章。剑和星攻击，盾回复 DP，心恢复 HP。', '四连留下银框技能纹章，再消触发小技能。', '五格以上留下金色高级纹章，再消触发大招。'], ['首战直接开始，战斗结束后队伍自动前进。', '商人、剧情和分支门需要先完成当前选择。'], ['局外装备、资源、进度与成长自动保存。', '刷新会结束当前地牢并恢复出发前的存档。', '通关、主动撤离、失败分别保留全部、70%、50% 战利品。']];
          this.page('冒险规则', '');
          labels.forEach(function (label, i) {
            return _this33.button(label, 88, function () {
              return _this33.showRules(i, back);
            }, (i - 1) * 143, 132);
          });
          lines[tab].forEach(function (line, i) {
            return _this33.label(line, 0, 10 - i * 55, 444, 19);
          });
          this.button('返回', -370, back, 0, 180);
        };
        _proto.travelDuration = function travelDuration(seconds) {
          return typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches ? .001 : seconds;
        };
        _proto.locationBackdrop = function locationBackdrop(location) {
          if (location === 'village') return 'village-stage';
          var edge = 'travel-' + location + '-edge';
          if (this.textures.has(edge)) return edge;
          var trail = 'travel-' + location + '-plains';
          if (this.textures.has(trail)) return trail;
          return 'stage-' + location + '-0';
        };
        _proto.lastDungeonBackdrop = function lastDungeonBackdrop(id) {
          return 'stage-' + id + '-' + (dungeonReels[id].stops.length - 1);
        };
        _proto.dungeonBackdrop = function dungeonBackdrop(depth) {
          var _this$adventure$id, _this$adventure3, _this$dungeon$rooms$l, _this$dungeon4;
          if (depth === void 0) {
            var _this$dungeon$depth, _this$dungeon3;
            depth = (_this$dungeon$depth = (_this$dungeon3 = this.dungeon) == null ? void 0 : _this$dungeon3.depth) != null ? _this$dungeon$depth : 0;
          }
          var id = (_this$adventure$id = (_this$adventure3 = this.adventure) == null ? void 0 : _this$adventure3.id) != null ? _this$adventure$id : 'forest';
          var count = (_this$dungeon$rooms$l = (_this$dungeon4 = this.dungeon) == null ? void 0 : _this$dungeon4.rooms.length) != null ? _this$dungeon$rooms$l : 1;
          var last = dungeonReels[id].stops.length - 1;
          if (depth >= count - 1 && count > 1) return this.lastDungeonBackdrop(id);
          return 'stage-' + id + '-' + Math.max(0, Math.min(depth, last - 1));
        };
        _proto.mapTravelViews = function mapTravelViews(from, to) {
          var _this34 = this;
          return [this.locationBackdrop(from), 'travel-' + from + '-plains', 'travel-plains', 'travel-' + to + '-plains', this.locationBackdrop(to)].filter(function (name, index, frames) {
            return (_this34.textures.has(name) || _this34.stageFrames.has(name)) && name !== frames[index - 1];
          });
        };
        _proto.walkParty = function walkParty(seconds, views, direction) {
          var _sequence$,
            _this35 = this;
          if (direction === void 0) {
            direction = 1;
          }
          seconds = this.travelDuration(seconds);
          var root = this.ui;
          var sequence = views != null ? views : [this.dungeonBackdrop()];
          var backdrop = root.getChildByName(sequence[0]);
          var movements = [];
          var fromRoom = /^stage-([a-z]+)-(\d+)$/.exec(sequence[0]);
          var toRoom = /^stage-([a-z]+)-(\d+)$/.exec((_sequence$ = sequence[1]) != null ? _sequence$ : '');
          var area = fromRoom == null ? void 0 : fromRoom[1];
          var reelName = area && area === (toRoom == null ? void 0 : toRoom[1]) ? area + '-reel' : '';
          var sceneryFrame = this.stageFrames.get(reelName);
          var reelInfo = area ? this.stageReels.get(area) : undefined;
          var width = stageGrid.width,
            height = stageGrid.height,
            centerY = stageGrid.centerY;
          if (backdrop && fromRoom && toRoom && sceneryFrame && reelInfo) {
            var layer = backdrop.getSiblingIndex();
            var frame = this.box('行进风景', 0, centerY, width, height);
            frame.addComponent(Mask).type = Mask.Type.GRAPHICS_RECT;
            frame.setSiblingIndex(layer);
            backdrop.active = false;
            var offset = function offset(n) {
              return (.5 - reelInfo.stops[Number(n)]) * (reelInfo.width - width);
            };
            var reel = this.paintFrame(reelName, sceneryFrame, offset(fromRoom[2]), 0, reelInfo.width, height, frame);
            movements.push(new Promise(function (resolve) {
              tween(reel).to(seconds, {
                position: new Vec3(offset(toRoom[2]), 0, 0)
              }).call(function () {
                return resolve();
              }).start();
            }));
          } else if (backdrop && sequence.length > 1) {
            var _layer = backdrop.getSiblingIndex();
            var viewport = this.box('行进风景', 0, centerY, width, height, undefined, root);
            viewport.addComponent(Mask).type = Mask.Type.GRAPHICS_RECT;
            viewport.setSiblingIndex(_layer);
            backdrop.setParent(viewport);
            backdrop.setPosition(0, 0);
            sequence.slice(1).forEach(function (name, index) {
              return _this35.stageBackdrop(name, (index + 1) * width * direction, 0, viewport);
            });
            var scenery = viewport.children.slice();
            var scroll = {
              offset: 0
            };
            movements.push(new Promise(function (resolve) {
              tween(scroll).to(seconds, {
                offset: width * (scenery.length - 1)
              }, {
                onUpdate: function onUpdate() {
                  if (!viewport.isValid || _this35.ui !== root) return;
                  scenery.forEach(function (segment, i) {
                    return segment.setPosition((i * width - scroll.offset) * direction, 0);
                  });
                }
              }).call(function () {
                return resolve();
              }).start();
            }));
          }
          var _loop7 = function _loop7() {
            var hero = _step22.value;
            var home = hero.position.clone();
            movements.push(new Promise(function (resolve) {
              var steps = Math.max(1, Math.round(seconds * 3));
              var stride = tween(hero);
              for (var i = 0; i < steps; i++) {
                stride.to(seconds / (steps * 2), {
                  position: new Vec3(home.x + 4 * (1 - i % 2), home.y + 5, home.z)
                }).to(seconds / (steps * 2), {
                  position: home
                });
              }
              stride.call(function () {
                return resolve();
              }).start();
            }));
          };
          for (var _iterator22 = _createForOfIteratorHelperLoose(this.heroes.values()), _step22; !(_step22 = _iterator22()).done;) {
            _loop7();
          }
          var finishWalking = this.audio.beginWalking();
          return Promise.all(movements)["finally"](finishWalking);
        };
        _proto.curtain = function curtain(opening) {
          var _this36 = this;
          var root = this.ui;
          var overlay = this.box('地图转场', 0, 280, 470, 270);
          var ink = overlay.addComponent(Graphics);
          var state = {
            progress: 0
          };
          var draw = function draw() {
            ink.clear();
            ink.fillColor = Color.BLACK;
            var cell = 10,
              width = 470,
              height = 270;
            for (var x = 0; x < width; x += cell) {
              var offset = (opening ? width - x - cell : x) / (width - cell);
              var growth = Math.max(0, Math.min(1, (state.progress - offset * .66) / .34));
              var size = cell * (opening ? 1 - growth : growth);
              if (!size) continue;
              for (var y = 0; y < height; y += cell) {
                var left = x + (cell - size) / 2;
                var bottom = y + (cell - size) / 2;
                ink.rect(left - width / 2, bottom - height / 2, size, size);
              }
            }
            ink.fill();
          };
          draw();
          return new Promise(function (resolve) {
            tween(state).to(_this36.travelDuration(.46), {
              progress: 1
            }, {
              onUpdate: function onUpdate() {
                if (overlay.isValid && _this36.ui === root) draw();
              }
            }).call(function () {
              if (opening && overlay.isValid) overlay.destroy();
              resolve();
            }).start();
          });
        };
        _proto.roster = function roster(selected, back) {
          var _this37 = this;
          if (selected === void 0) {
            selected = this.party[0];
          }
          if (back === void 0) {
            back = function back() {
              return _this37.map();
            };
          }
          var hero = heroes[selected];
          var stats = this.inventory.stats(selected);
          var rank = this.inventory.rank(selected);
          this.reset(this.textures.has('gear-stage') ? 'gear-stage' : 'village-stage');
          this.outline(this.label('小队配置', 0, 394, 380, 26)).isBold = true;
          var art = 'hero-' + selected;
          this.art(art, 0, this.portraitY(art, 200, 146), 146, 146);
          this.box('角色信息底板', 0, 168, 348, 55, '#20352dec');
          this.outline(this.label(hero.name + ' · ' + hero.role + '    Lv. ' + rank.level, 0, 179, 330, 19));
          this.label('HP ' + stats.hp + '　DP ' + stats.dp + '　攻击 ' + stats.attack + '　EXP ' + rank.progress + '/' + rank.level * 2, 0, 155, 336, 15);
          var root = this.ui;
          var active = function active() {
            return _this37.ui === root && !root.getChildByName('物品操作');
          };
          var cycle = function cycle(offset) {
            if (!active() || _this37.party.length < 2) return;
            var index = _this37.party.indexOf(selected);
            _this37.roster(_this37.party[(index + offset + _this37.party.length) % _this37.party.length], back);
          };
          var _loop8 = function _loop8() {
            var side = _arr6[_i8];
            var arrow = _this37.box(side < 0 ? '上一位角色' : '下一位角色', side * 205, 267, 44, 54);
            var icon = _this37.art('gear-arrow', 0, 0, 34, 42, arrow);
            if (icon) icon.setScale(side, 1, 1);else _this37.outline(_this37.label(side < 0 ? '‹' : '›', 0, 0, 40, 31, arrow));
            arrow.on(Node.EventType.TOUCH_END, function () {
              return cycle(side);
            });
          };
          for (var _i8 = 0, _arr6 = [-1, 1]; _i8 < _arr6.length; _i8++) {
            _loop8();
          }
          var slots = [{
            id: 'weapon',
            name: '主手武器槽',
            icon: 'slot-main',
            x: -133,
            y: 324
          }, {
            id: 'offhand',
            name: '副手武器槽',
            icon: 'slot-off',
            x: -133,
            y: 242
          }, {
            id: 'armor',
            name: '防御装备槽',
            icon: 'slot-armor',
            x: 133,
            y: 324
          }, {
            id: 'core',
            name: '饰品槽',
            icon: 'slot-accessory',
            x: 133,
            y: 242
          }];
          var _loop9 = function _loop9() {
            var slot = _slots[_i9];
            var item = equipment.find(function (entry) {
              return entry.id === _this37.inventory.slots[selected + ':' + slot.id];
            });
            var node = _this37.box(slot.name, slot.x, slot.y, 71, 71, item ? '#694e2d' : '#263a35');
            var backdrop = _this37.art(slot.icon, 0, 0, 50, 50, node);
            if (backdrop) backdrop.addComponent(UIOpacity).opacity = item ? 88 : 126;
            if (item) _this37.outline(_this37.label(item.name, 0, -24, 69, 13, node));
            node.on(Node.EventType.TOUCH_END, function () {
              if (!active()) return;
              if (item) {
                _this37.gearActions(item.id, true, selected, back);
                return;
              }
              var compatible = equipment.find(function (entry) {
                return entry.owner === selected && entry.slot === slot.id && _this37.inventory.bag.includes(entry.id);
              });
              if (compatible) _this37.gearActions(compatible.id, false, selected, back);else _this37.popup('没有可装配物品', 0, 108);
            });
          };
          for (var _i9 = 0, _slots = slots; _i9 < _slots.length; _i9++) {
            _loop9();
          }
          this.box('背包底板', 0, -106, 430, 447, '#263931');
          this.label('背包', 0, 91, 400, 23).isBold = true;
          var bag = [].concat(this.potion ? [{
            id: 'potion',
            label: '治疗药水 ×' + this.potion,
            icon: '',
            item: null
          }] : [], equipment.filter(function (item) {
            return _this37.inventory.bag.includes(item.id);
          }).map(function (item) {
            var _slots$find$icon, _slots$find;
            return {
              id: item.id,
              label: item.name,
              icon: (_slots$find$icon = (_slots$find = slots.find(function (slot) {
                return slot.id === item.slot;
              })) == null ? void 0 : _slots$find.icon) != null ? _slots$find$icon : '',
              item: item
            };
          }));
          var _loop10 = function _loop10() {
            var content = bag[_index5];
            var x = (_index5 % 4 - 1.5) * 102,
              y = 28 - Math.floor(_index5 / 4) * 108;
            var cell = _this37.box(content ? '背包 · ' + content.label : '空背包格 ' + _index5, x, y, 94, 100, content ? '#47604c' : '#31473b');
            if (!content) return 1; // continue
            if (content.id === 'potion') _this37.drawPotion(cell);else if (!_this37.art(content.icon, 0, 11, 45, 45, cell)) _this37.label('◇', 0, 11, 45, 25, cell);
            _this37.label(content.label, 0, -28, 90, 15, cell);
            cell.on(Node.EventType.TOUCH_END, function () {
              if (!active()) return;
              if (content.id !== 'potion') _this37.gearActions(content.id, false, selected, back);else _this37.itemActions('治疗药水', '恢复至多 45 HP。', [['使用药水', function () {
                if (!_this37.potion || _this37.hp >= _this37.maxHP) return false;
                _this37.potion--;
                _this37.hp = Math.min(_this37.maxHP, _this37.hp + 45);
                _this37.audio.play('potion');
                return true;
              }], ['丢弃 1 瓶', function () {
                if (!_this37.potion) return false;
                _this37.potion--;
                return true;
              }]], function () {
                return _this37.roster(selected, back);
              });
            });
          };
          for (var _index5 = 0; _index5 < 12; _index5++) {
            if (_loop10()) continue;
          }
          this.button('返回地图', -380, back, 0, 300);
        };
        _proto.drawPotion = function drawPotion(parent) {
          var vessel = this.box('药水瓶', 0, 10, 44, 48, undefined, parent);
          var shape = vessel.addComponent(Graphics);
          shape.lineWidth = 2;
          shape.strokeColor = Color.fromHEX(new Color(), '#231c2c');
          shape.fillColor = Color.fromHEX(new Color(), '#cf4672');
          shape.roundRect(-14, -17, 28, 28, 8);
          shape.fill();
          shape.stroke();
          shape.fillColor = Color.fromHEX(new Color(), '#dbc08a');
          shape.roundRect(-7, 11, 14, 10, 3);
          shape.fill();
          shape.stroke();
          shape.fillColor = Color.fromHEX(new Color(), '#ffadc3');
          shape.circle(-6, 2, 3);
          shape.fill();
        };
        _proto.gearActions = function gearActions(id, equipped, selected, back) {
          var _item$effect,
            _this38 = this;
          var item = equipment.find(function (entry) {
            return entry.id === id;
          });
          if (!item) return;
          var description = [item.attack ? '攻击 +' + item.attack : '', item.hp ? 'HP +' + item.hp : '', item.dp ? 'DP +' + item.dp : '', (_item$effect = item.effect) != null ? _item$effect : ''].filter(Boolean).join(' · ');
          var actions = [];
          if (equipped || this.party.includes(item.owner)) actions.push([equipped ? '卸下装备' : '装备给' + heroes[item.owner].name, function () {
            return _this38.inventory.hasEquipped(id) === equipped && _this38.inventory.toggle(id);
          }]);
          actions.push(['丢弃装备', function () {
            return _this38.inventory.discard(id);
          }]);
          this.itemActions(item.name, description, actions, function () {
            return _this38.roster(selected, back);
          });
        };
        _proto.itemActions = function itemActions(title, detail, actions, redraw) {
          var _this39 = this;
          var root = this.ui;
          var overlay = this.box('物品操作', 0, 0, 480, 854, '#101913c2');
          overlay.on(Node.EventType.TOUCH_START, function () {});
          overlay.on(Node.EventType.TOUCH_END, function () {});
          this.box('物品操作卡', 0, -75, 394, 320, '#2b4037', overlay);
          this.label(title, 0, 47, 340, 25, overlay).isBold = true;
          this.label(detail, 0, 4, 345, 16, overlay);
          actions.forEach(function (_ref18, index) {
            var label = _ref18[0],
              perform = _ref18[1];
            var button = _this39.button(label, -62 - index * 62, function () {
              if (_this39.ui !== root || !overlay.isValid) return;
              if (!perform()) {
                _this39.popup('现在无法执行', 0, 146);
                return;
              }
              _this39.hp = Math.min(_this39.hp, _this39.maxHP);
              _this39.dp = Math.min(_this39.dp, _this39.maxDP);
              _this39.audio.play('equip');
              _this39.save();
              redraw();
            }, 0, 294);
            button.setParent(overlay);
          });
          var close = this.button('取消', -186, function () {
            overlay.removeFromParent();
            overlay.destroy();
          }, 0, 294);
          close.setParent(overlay);
        };
        _proto.village = function village() {
          var _this40 = this;
          this.save();
          var guided = !this.reported;
          var findRoland = this.reported && !this.party.includes('d');
          var quest = guided ? '点击描金的村长家，交付村徽' : findRoland ? '前往酒馆，与盾卫罗兰会合' : '休整或领取讨伐委托';
          this.page('溪桥村', quest, 'village-stage');
          var hasGround = this.textures.has('village-ground');
          this.art(hasGround ? 'village-ground' : 'village', 0, -129, 464, 464);
          if (hasGround) this.villageGarden(122, -239);
          var destinations = [{
            name: '村长家',
            art: 'chief',
            x: 0,
            y: 13,
            highlight: guided,
            action: function action() {
              return _this40.chief();
            }
          }, {
            name: '商店',
            art: 'shop',
            x: -134,
            y: -67,
            highlight: false,
            action: function action() {
              return _this40.villageShop();
            }
          }, {
            name: '铁匠铺',
            art: 'smith',
            x: -123,
            y: -235,
            highlight: false,
            action: function action() {
              return _this40.smithy();
            }
          }, {
            name: '酒馆',
            art: 'tavern',
            x: 134,
            y: -67,
            highlight: findRoland,
            action: function action() {
              return _this40.tavern();
            }
          }, {
            name: '村口 · 返回地图',
            art: 'gate',
            x: 0,
            y: -318,
            highlight: false,
            action: function action() {
              return _this40.map();
            }
          }];
          var root = this.ui;
          var _loop11 = function _loop11() {
            var site = _destinations[_i10];
            var gate = site.art === 'gate';
            var width = gate ? 180 : 151;
            var height = gate ? 64 : 112;
            var node = _this40.box(site.name, site.x, site.y, width, height);
            if (site.highlight) {
              var glow = _this40.box('任务金光', 0, 0, width + 10, height + 10, undefined, node).addComponent(Graphics);
              for (var _iterator23 = _createForOfIteratorHelperLoose([[8, '#fbc84a30'], [4, '#ffd26360'], [0, '#fadd76']]), _step23; !(_step23 = _iterator23()).done;) {
                var _step23$value = _step23.value,
                  padding = _step23$value[0],
                  color = _step23$value[1];
                glow.strokeColor = Color.fromHEX(new Color(), color);
                glow.lineWidth = padding ? 4 : 2.6;
                glow.roundRect(-width / 2 - padding, -height / 2 - padding, width + padding * 2, height + padding * 2, 13);
                glow.stroke();
              }
            }
            if (hasGround) {
              var _this40$textures$get;
              var name = 'village-building-' + site.art;
              var size = (_this40$textures$get = _this40.textures.get(name)) == null ? void 0 : _this40$textures$get.originalSize;
              if (size) {
                var spriteWidth = gate ? 84 : 143;
                var spriteHeight = spriteWidth * size.height / size.width;
                var baseY = gate ? -17 : -36;
                _this40.art(name, 0, baseY + spriteHeight / 2, spriteWidth, spriteHeight, node);
              }
            }
            var caption = _this40.label(site.name, 0, -height / 2 + 13, width - 18, 17, node);
            caption.color = Color.fromHEX(new Color(), '#523420');
            caption.isBold = true;
            caption.enableOutline = true;
            caption.outlineColor = Color.fromHEX(new Color(), '#fff0cf');
            caption.outlineWidth = 3;
            node.on(Node.EventType.TOUCH_END, function () {
              if (_this40.ui !== root || guided && site.art !== 'chief') return;
              _this40.audio.play('door');
              site.action();
            });
          };
          for (var _i10 = 0, _destinations = destinations; _i10 < _destinations.length; _i10++) {
            _loop11();
          }
        };
        _proto.villageGarden = function villageGarden(x, y) {
          var g = this.box('村庄菜圃', x, y, 116, 89).addComponent(Graphics);
          for (var row = 0; row < 3; row++) {
            var line = 24 - row * 23;
            g.fillColor = Color.fromHEX(new Color(), '#a97140');
            g.roundRect(-52, line - 8, 104, 16, 7);
            g.fill();
            for (var col = 0; col < 5; col++) {
              var px = -37 + col * 18;
              g.fillColor = Color.fromHEX(new Color(), '#3f7143');
              g.ellipse(px - 2, line + 3, 4, 6);
              g.ellipse(px + 3, line + 2, 4, 5);
              g.fill();
            }
          }
        };
        _proto.townInterior = function townInterior(title, detail, room, npc, gold) {
          if (gold === void 0) {
            gold = true;
          }
          var scene = 'village-' + room + '-stage';
          this.page(title, detail, this.textures.has(scene) ? scene : 'village-stage', {
            gold: gold
          });
          return this.sceneActor(npc, 140, 117, '城镇人物 ');
        };
        _proto.sceneActor = function sceneActor(art, x, height, prefix, flip) {
          if (prefix === void 0) {
            prefix = '剧情人物 ';
          }
          if (flip === void 0) {
            flip = false;
          }
          var groundY = stageGrid.groundY;
          var y = this.portraitY(art, groundY, height);
          var frame = this.textures.get(art);
          if (frame) {
            var w = height * frame.originalSize.width / frame.originalSize.height;
            var actor = this.box(prefix + art, x, y, w, height);
            this.groundShadow(actor, groundY - y, art, w);
            this.art(art, 0, 0, w, height, actor);
            if (flip) actor.setScale(-1, 1, 1);
          }
          return new Vec3(x, y, 0);
        };
        _proto.chief = function chief(step) {
          var _this41 = this;
          if (step === void 0) {
            step = 0;
          }
          this.audio.play('dialogue');
          if (this.reported) {
            this.townInterior('村长家', step ? '村长：运单盖着矿镇火印。问问酒馆里的罗兰，再沿旧道往北。' : '村长：村民已回家。归印会运走的东西还没查到。', 'chief', 'npc-chief', false);
            if (!step) this.button('询问归印会的去向', 39, function () {
              return _this41.chief(1);
            });
            this.button('返回村庄', -36, function () {
              return _this41.village();
            });
            return;
          }
          var lines = ['村长：你带回了溪桥村的铜徽。林子里还有人吗？', '雷恩：我沿脚印找到他们，把他们从裂印兽旁带了回来。', '村长：那就好。徽章请交给我，这份酬金是大家凑的。'];
          var position = this.townInterior('村长家', lines[step], 'chief', 'npc-chief', false);
          var root = this.ui;
          var rewardPlaying = false;
          var advance = function advance(text, action) {
            return _this41.button(text, 38, function () {
              if (_this41.ui !== root) return;
              action();
            });
          };
          if (step < 2) advance(step === 0 ? '说说林中的救援' : '听村长的答复', function () {
            return _this41.chief(step + 1);
          });else advance('交付村徽 · 获得 20 金币', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
            var goldBefore, motion, hud, balance, panelOpacity, textOpacity, fade;
            return _regeneratorRuntime().wrap(function _callee17$(_context19) {
              while (1) switch (_context19.prev = _context19.next) {
                case 0:
                  if (!_this41.reported) {
                    _context19.next = 2;
                    break;
                  }
                  return _context19.abrupt("return");
                case 2:
                  goldBefore = _this41.gold;
                  rewardPlaying = true;
                  _this41.reported = true;
                  _this41.addMaterials({
                    gold: 20
                  });
                  _this41.save();
                  motion = new BattleMotion();
                  hud = _this41.box('任务金币', 175, 343, 105, 36, '#244036e9');
                  _this41.art('trial-ui-clear', -32, 0, 17, 17, hud);
                  balance = _this41.outline(_this41.label(String(goldBefore), 184, 343, 67, 21));
                  panelOpacity = hud.addComponent(UIOpacity);
                  textOpacity = balance.node.addComponent(UIOpacity);
                  fade = function fade(value, seconds) {
                    return Promise.all([panelOpacity, textOpacity].map(function (alpha) {
                      return motion.play(tween(alpha).to(motion.duration(seconds), {
                        opacity: value
                      }));
                    }));
                  };
                  panelOpacity.opacity = textOpacity.opacity = 0;
                  _context19.next = 17;
                  return fade(255, .19);
                case 17:
                  if (!(_this41.ui !== root)) {
                    _context19.next = 20;
                    break;
                  }
                  motion.cancel();
                  return _context19.abrupt("return");
                case 20:
                  _context19.next = 22;
                  return _this41.animateCoins(motion, 20, balance, position, stageGrid.groundY);
                case 22:
                  if (!(_this41.ui !== root)) {
                    _context19.next = 25;
                    break;
                  }
                  motion.cancel();
                  return _context19.abrupt("return");
                case 25:
                  _context19.next = 27;
                  return fade(0, .26);
                case 27:
                  if (_this41.ui === root) _this41.chief(1);
                case 28:
                case "end":
                  return _context19.stop();
              }
            }, _callee17);
          })));
          this.button('返回村庄', -36, function () {
            if (!rewardPlaying) _this41.village();
          });
        };
        _proto.villageShop = function villageShop() {
          var _this42 = this;
          this.audio.play('door');
          this.townInterior('村庄商店', '老板：药水 5 金币一瓶。已携带 ' + this.potion + ' 瓶。', 'shop', 'npc-shop');
          this.button('购买治疗药水 · 5 金币', 42, function () {
            if (_this42.gold < 5) {
              _this42.popup('金币不足', 0, 91);
              return;
            }
            if (_this42.potion >= 99) {
              _this42.popup('背包药水已满', 0, 91);
              return;
            }
            _this42.gold -= 5;
            _this42.potion++;
            _this42.save();
            _this42.villageShop();
          });
          this.button('返回村庄', -78, function () {
            return _this42.village();
          });
        };
        _proto.smithy = function smithy(page) {
          var _this43 = this;
          if (page === void 0) {
            page = 0;
          }
          var materials = Object.entries(this.inventory.materials).map(function (_ref20) {
            var key = _ref20[0],
              value = _ref20[1];
            return resourceNames[key] + ' ' + value;
          }).join(' · ');
          this.townInterior('溪桥村铁匠铺', materials, 'smith', 'npc-smith');
          var recipes = equipment.filter(function (item) {
            return !_this43.inventory.owned.includes(item.id);
          });
          var lastPage = Math.max(0, Math.ceil(recipes.length / 3) - 1);
          page = Math.min(page, lastPage);
          if (!recipes.length) this.label('已掌握的装备均已制作', 0, 42, 420, 19);
          recipes.slice(page * 3, page * 3 + 3).forEach(function (item, index) {
            var cost = Object.entries(item.cost).map(function (_ref21) {
              var key = _ref21[0],
                value = _ref21[1];
              return resourceNames[key] + ' ' + value;
            }).join(' · ');
            var y = 47 - index * 88;
            _this43.button(item.name + ' · ' + cost, y, function () {
              var paid = _this43.inventory.craft(item.id, _this43.gold);
              if (paid === null) {
                _this43.popup('材料不足', 0, 99);
                return;
              }
              _this43.gold -= paid;
              _this43.audio.play('equip');
              _this43.save();
              _this43.smithy(page);
            });
            if (item.effect) _this43.label(item.effect, 0, y - 37, 375, 15);
          });
          if (page > 0) this.button('上一页', -228, function () {
            return _this43.smithy(page - 1);
          }, -94, 160);
          if (page < lastPage) this.button('下一页', -228, function () {
            return _this43.smithy(page + 1);
          }, 94, 160);
          this.button('返回村庄', -354, function () {
            return _this43.village();
          });
        };
        _proto.tavern = function tavern(revived) {
          var _this$hunt2,
            _this$hunt3,
            _this$hunt4,
            _this44 = this;
          if (revived === void 0) {
            revived = false;
          }
          this.save();
          this.audio.play('dialogue');
          var join = this.taught && this.reported && !this.party.includes('d');
          var active = ((_this$hunt2 = this.hunt) == null ? void 0 : _this$hunt2.state) === 'active' ? this.hunt : undefined;
          var ready = ((_this$hunt3 = this.hunt) == null ? void 0 : _this$hunt3.state) === 'ready';
          var cooling = ((_this$hunt4 = this.hunt) == null ? void 0 : _this$hunt4.state) === 'cooldown' && this.hunt.until > Date.now();
          var detail = revived ? '酒馆老板救回了小队。' : join ? '罗兰带来矿镇运单，法师伊芙正在调查迷雾高塔。' : active ? '当前委托：通关' + locationNames[active.target] + '。' : cooling ? '新委托稍后刷新。' : '休息或接受附近地牢的讨伐委托。';
          this.townInterior('溪桥村酒馆', detail, 'tavern', 'npc-innkeeper');
          if (join) this.button('与盾卫罗兰会合', 42, function () {
            if (_this44.party.includes('d')) return;
            var oldHP = _this44.maxHP,
              oldDP = _this44.maxDP;
            _this44.party.push('d');
            _this44.hp += _this44.maxHP - oldHP;
            _this44.dp += _this44.maxDP - oldDP;
            _this44.tavern();
          });
          var restCost = 10;
          this.button('休息 · 恢复生命与 DP · 10 金币', -29, function () {
            if (_this44.hp >= _this44.maxHP && _this44.dp >= _this44.maxDP) {
              _this44.popup('生命和 DP 已满', 0, 87);
              return;
            }
            if (_this44.gold < restCost) {
              _this44.popup('金币不足', 0, 87);
              return;
            }
            _this44.gold -= restCost;
            _this44.hp = _this44.maxHP;
            _this44.dp = _this44.maxDP;
            _this44.tavern();
            _this44.popup('已恢复', 0, 87);
          });
          if (this.taught && ready) this.button('交付讨伐 · 获得 12 金币', -100, function () {
            var _this44$hunt;
            if (((_this44$hunt = _this44.hunt) == null ? void 0 : _this44$hunt.state) !== 'ready') return;
            _this44.hunt = {
              state: 'cooldown',
              until: Date.now() + 60000
            };
            _this44.addMaterials({
              gold: 12
            });
            _this44.tavern();
          });
          if (this.taught && !active && !ready && !cooling) this.button('领取附近地牢讨伐', -100, function () {
            if (_this44.hunt && !(_this44.hunt.state === 'cooldown' && _this44.hunt.until <= Date.now())) return;
            var available = dungeonIds.filter(function (id) {
              return unlocked(id, _this44.cleared);
            });
            _this44.hunt = {
              state: 'active',
              target: available[Math.floor(Math.random() * available.length)]
            };
            _this44.tavern();
          });
          this.button(this.taught ? '返回村庄' : '重新开始教学', -171, function () {
            return _this44.taught ? _this44.village() : _this44.menu();
          });
        };
        _proto.formalTypes = function formalTypes() {
          var mage = this.party.includes('m'),
            knight = this.party.includes('d');
          return knight && mage ? ['s', 'd', 'm', 'h'] : knight ? ['s', 'd', 'h', 'staff'] : mage ? ['s', 'm', 'h', 'staff'] : ['s', 'fist', 'h', 'staff'];
        };
        _proto.enter = function enter(id, reveal) {
          this.phase = id;
          this.types = this.formalTypes();
          this.adventure = {
            id: id,
            coins: 0,
            loot: {},
            xp: 0,
            ordinaryWins: 0,
            buffs: {}
          };
          this.dungeon = new DungeonDirector(makeRoute(id));
          this.showRoom(reveal);
        };
        _proto.advanceRoom = function advanceRoom(director, room) {
          if (this.dungeon !== director || !director.advance(room)) return;
          this.afterRoom(director);
        };
        _proto.afterRoom = function afterRoom(director) {
          var _this45 = this;
          if (this.dungeon !== director) return;
          if (!director.room) {
            this.finishAdventure('win');
            return;
          }
          var before = this.dungeonBackdrop(director.depth - 1);
          var after = this.dungeonBackdrop(director.depth);
          this.page('沿路前进', '小队正在前往下一房间。', before);
          var root = this.ui;
          void this.walkParty(before === after ? .45 : 1.05, before === after ? [before] : [before, after]).then(function () {
            if (_this45.ui === root && _this45.dungeon === director) _this45.showRoom();
          });
        };
        _proto.buff = function buff(id) {
          var _this$adventure$buffs, _this$adventure4;
          return (_this$adventure$buffs = (_this$adventure4 = this.adventure) == null ? void 0 : _this$adventure4.buffs[id]) != null ? _this$adventure$buffs : 0;
        };
        _proto.offerUpgrade = function offerUpgrade(director, room, proceed) {
          var _this46 = this;
          var run = this.adventure;
          if (!run) {
            proceed();
            return;
          }
          var options = drawUpgrades(run.buffs, function (id) {
            return _this46.inventory.hasEquipped(id);
          });
          if (!options.length) {
            proceed();
            return;
          }
          this.page('选择临时强化', '强化仅在本次地牢探索中生效。', this.dungeonBackdrop());
          var root = this.ui;
          options.forEach(function (option, index) {
            return _this46.button(option.name + ' · ' + option.description, 43 - index * 72, function () {
              if (_this46.ui !== root || _this46.dungeon !== director || director.room !== room) return;
              run.buffs[option.id] = _this46.buff(option.id) + 1;
              if (option.id === 'vital') _this46.hp = Math.min(_this46.maxHP, _this46.hp + 30);
              _this46.audio.play('charge');
              proceed();
            });
          });
          this.button('撤离', -380, function () {
            if (_this46.ui === root && _this46.dungeon === director) _this46.finishAdventure('retreat');
          });
        };
        _proto.showRoom = function showRoom(reveal) {
          var _this47 = this;
          var director = this.dungeon;
          var room = director == null ? void 0 : director.room;
          if (!room) return;
          var run = this.adventure;
          if (room.kind === 'battle') {
            this.enemies = [].concat(room.enemies);
            if (!run) this.phase = room.type === 'boss' ? 'lessonBoss' : 'wolves';
            if ((run == null ? void 0 : run.id) === 'tower' && director.depth === 0 && !this.party.includes('m')) {
              this.page('高塔里的回声', '法师伊芙：高塔的结界失控了，我和你们一起进去。', this.dungeonBackdrop());
              this.sceneActor('hero-m', 144, 102, '剧情人物 ', true);
              var _root2 = this.ui;
              var allowMeeting = function allowMeeting() {
                if (_this47.ui !== _root2 || _this47.dungeon !== director) return;
                _this47.button('与法师伊芙会合', 32, function () {
                  if (_this47.ui !== _root2 || _this47.party.includes('m')) return;
                  var oldHP = _this47.maxHP,
                    oldDP = _this47.maxDP;
                  _this47.party.push('m');
                  _this47.hp += _this47.maxHP - oldHP;
                  _this47.dp += _this47.maxDP - oldDP;
                  _this47.types = _this47.formalTypes();
                  _this47.save();
                  _this47.beginBattle();
                });
              };
              if (reveal) void reveal().then(allowMeeting);else allowMeeting();
            } else this.beginBattle(reveal);
            return;
          }
          var advance = function advance() {
            return _this47.advanceRoom(director, room);
          };
          if (room.kind === 'rescue' || room.kind === 'recruit') {
            var recruit = room.kind === 'recruit';
            this.audio.play('dialogue');
            this.page(recruit ? '失散的牧师' : '林中的求救声', recruit ? '米拉：结界碎片就在前面。我来治疗，你来开路。' : '村民：归印会改接了结界。请把这枚村徽带给村长。', this.dungeonBackdrop());
            if (recruit) this.sceneActor('hero-h', 144, 102, '剧情人物 ', true);else this.sceneActor('dungeon-traveler', 144, 99);
            var _root3 = this.ui;
            this.button(recruit ? '邀请米拉入队' : '救下村民，接下报信任务', 30, function () {
              if (_this47.ui !== _root3 || _this47.dungeon !== director || director.room !== room) return;
              if (recruit && !_this47.party.includes('h')) {
                _this47.party.push('h');
                _this47.types = ['s', 'fist', 'h', 'staff'];
                _this47.hp = Math.min(_this47.maxHP, _this47.hp + 55);
              }
              advance();
            });
            this.button('撤离', -380, function () {
              return _this47.finishAdventure('retreat');
            });
            return;
          }
          if (!run) return;
          var payingReward = false;
          var action = function action(label, y, apply) {
            var root = _this47.ui;
            _this47.button(label, y, function () {
              if (payingReward || _this47.ui !== root || _this47.dungeon !== director || director.room !== room) return;
              apply();
            });
          };
          var decision = function decision(label, y, apply) {
            return action(label, y, function () {
              apply();
              advance();
            });
          };
          var goldDecision = function goldDecision(label, amount, origin, takeMaterials) {
            return action(label, 42, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
              var root, motion, played;
              return _regeneratorRuntime().wrap(function _callee18$(_context20) {
                while (1) switch (_context20.prev = _context20.next) {
                  case 0:
                    payingReward = true;
                    root = _this47.ui;
                    motion = new BattleMotion();
                    _context20.next = 5;
                    return _this47.animateCoins(motion, amount, _this47.coinText, origin, stageGrid.groundY);
                  case 5:
                    played = _context20.sent;
                    payingReward = false;
                    if (!(!played || _this47.ui !== root || _this47.dungeon !== director || director.room !== room || _this47.adventure !== run)) {
                      _context20.next = 9;
                      break;
                    }
                    return _context20.abrupt("return");
                  case 9:
                    _this47.receiveGold(amount);
                    takeMaterials == null || takeMaterials();
                    advance();
                  case 12:
                  case "end":
                    return _context20.stop();
                }
              }, _callee18);
            })));
          };
          var show = function show(title, detail) {
            return _this47.page(title, detail, _this47.dungeonBackdrop(director.depth));
          };
          if (room.kind === 'merchant') {
            show('旅行商人', '金币 ' + this.walletGold + ' · 治疗药水 ×' + this.potion);
            this.sceneActor('dungeon-merchant', 151, 116);
            action('购买治疗药水 · 5 金币', 42, function () {
              if (_this47.potion >= 99 || !_this47.spendGold(5)) {
                _this47.popup('无法购买', 0, 91);
                return;
              }
              _this47.potion++;
              _this47.showRoom();
            });
            action('小队休整 · 3 金币，恢复 30 HP', -25, function () {
              if (_this47.hp >= _this47.maxHP || !_this47.spendGold(3)) {
                _this47.popup('无法休整', 0, 91);
                return;
              }
              _this47.hp = Math.min(_this47.maxHP, _this47.hp + 30);
              _this47.showRoom();
            });
            action('离开商人房间', -92, advance);
          } else if (room.kind === 'event') {
            show('迷雾中的旅人', '旅人迷了路，前方还有裂印兽出没。');
            var traveler = this.sceneActor('dungeon-traveler', 144, 99);
            goldDecision("\u534F\u52A9\u65C5\u4EBA\uFF0C\u83B7\u5F97 " + roomRewards.travelerGold + " \u91D1\u5E01", roomRewards.travelerGold, traveler);
            decision('谨慎休整，恢复 22 HP', -25, function () {
              _this47.hp = Math.min(_this47.maxHP, _this47.hp + 22);
            });
          } else if (room.kind === 'rest') {
            if (this.trial) {
              show('矿道休息营地', '晶岩守卫正在前方。选择一种补给后继续。');
              this.mineTrialCaption('选一种补给', 57);
              var _root4 = this.ui;
              var supply = function supply(restore) {
                return function () {
                  if (_this47.ui !== _root4 || _this47.dungeon !== director || director.room !== room) return;
                  restore();
                  advance();
                };
              };
              this.trialButton('恢复 45 HP', -26, supply(function () {
                _this47.hp = Math.min(_this47.maxHP, _this47.hp + 45);
              }));
              this.trialButton('恢复 35 DP', -92, supply(function () {
                _this47.dp = Math.min(_this47.maxDP, _this47.dp + 35);
              }));
            } else {
              show('休息营地', '队伍发现了安全的休息地点。');
              decision('恢复 45 HP', 42, function () {
                _this47.hp = Math.min(_this47.maxHP, _this47.hp + 45);
              });
              decision('恢复 35 DP', -25, function () {
                _this47.dp = Math.min(_this47.maxDP, _this47.dp + 35);
              });
            }
          } else if (room.kind === 'chest') {
            show('遗落的宝箱', '一只无人看守的旧箱子。');
            var chest = this.sceneActor('dungeon-chest', 144, 77, '剧情道具 ');
            chest.y += 11;
            goldDecision("\u53D6\u8D70\u7269\u8D44 \xB7 " + roomRewards.chestGold + " \u91D1\u5E01\uFF0C" + roomRewards.chestOre + " \u94C1\u77FF", roomRewards.chestGold, chest, function () {
              var _run$loot$ore;
              run.loot.ore = ((_run$loot$ore = run.loot.ore) != null ? _run$loot$ore : 0) + roomRewards.chestOre;
            });
          } else if (room.kind === 'fork') {
            show('选择一扇门', '选定路线后，小队会直接前往下一间。');
            var _supply = ['merchant', 'rest', 'chest'];
            var choices = [['血色门 · 普通战斗', encounter(run.id, director.depth + 1, 'battle')], ['铜色门 · 补给或商人', {
              kind: _supply[Math.floor(Math.random() * _supply.length)]
            }], ['黑铁门 · 精英战斗', encounter(run.id, director.depth + 1, 'elite')]];
            choices.forEach(function (_ref23, index) {
              var label = _ref23[0],
                next = _ref23[1];
              return action(label, 42 - index * 67, function () {
                if (director.choose(room, next)) _this47.afterRoom(director);
              });
            });
          }
          action('撤离', -380, function () {
            return _this47.finishAdventure('retreat');
          });
        };
        _createClass(FourEmblemsGame, [{
          key: "maxHP",
          get: function get() {
            var _this48 = this;
            return this.party.reduce(function (sum, id) {
              return sum + _this48.inventory.stats(id).hp;
            }, 0) + 15 * this.buff('vital');
          }
        }, {
          key: "maxDP",
          get: function get() {
            var _this49 = this;
            return this.party.reduce(function (sum, id) {
              return sum + _this49.inventory.stats(id).dp;
            }, 0);
          }
        }, {
          key: "walletGold",
          get: function get() {
            var _this$adventure$coins2, _this$adventure5;
            var found = (_this$adventure$coins2 = (_this$adventure5 = this.adventure) == null ? void 0 : _this$adventure5.coins) != null ? _this$adventure$coins2 : 0;
            return this.trial ? found : this.gold + found;
          }
        }, {
          key: "joined",
          get: function get() {
            return this.party.includes('h');
          }
        }, {
          key: "showsGuard",
          get: function get() {
            return this.party.includes('d');
          }
        }]);
        return FourEmblemsGame;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameAudio.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy, tween, sys, Node, AudioSource, resources, AudioClip;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      tween = module.tween;
      sys = module.sys;
      Node = module.Node;
      AudioSource = module.AudioSource;
      resources = module.resources;
      AudioClip = module.AudioClip;
    }],
    execute: function () {
      cclegacy._RF.push({}, "bfd82Vxu5ZKlJaF9JtrHRwH", "GameAudio", undefined);
      var baseCues = ['click', 'swap', 'clear', 'charge', 'hit', 'hurt', 'potion', 'victory', 'defeat', 'door', 'step', 'dialogue', 'coins', 'equip'];
      var trialCues = {
        click: {
          files: ['click'],
          volume: .24,
          fallback: 'click'
        },
        swap: {
          files: ['swap'],
          volume: .23,
          fallback: 'swap'
        },
        invalid: {
          files: ['invalid'],
          volume: .25,
          fallback: 'click'
        },
        clear: {
          files: ['clear'],
          volume: .24,
          fallback: 'clear'
        },
        drop: {
          files: ['drop', 'drop-alt', 'drop-light'],
          volume: .24,
          fallback: 'swap'
        },
        create: {
          files: ['create'],
          volume: .21,
          fallback: 'charge'
        },
        charge: {
          files: ['charge'],
          volume: .22,
          fallback: 'charge'
        },
        combo: {
          files: ['combo'],
          volume: .20,
          fallback: 'clear'
        },
        victory: {
          files: ['victory'],
          volume: .25,
          fallback: 'victory'
        },
        defeat: {
          files: ['defeat'],
          volume: .23,
          fallback: 'defeat'
        },
        shuffle: {
          files: ['shuffle'],
          volume: .16,
          fallback: 'charge'
        },
        open: {
          files: ['open'],
          volume: .22,
          fallback: 'door'
        },
        reward: {
          files: ['reward'],
          volume: .22,
          fallback: 'coins'
        }
      };
      var GameAudio = exports('GameAudio', /*#__PURE__*/function () {
        function GameAudio(root) {
          var _this = this;
          this.voices = void 0;
          this.clips = new Map();
          this.lastPlayed = new Map();
          this.trialVoices = new Set();
          this.trialVariants = new Map();
          this.cursor = 0;
          this.steps = void 0;
          this.walking = 0;
          this.fade = void 0;
          this.enabled = true;
          var footsteps = new Node('Footsteps');
          root.addChild(footsteps);
          this.steps = footsteps.addComponent(AudioSource);
          this.steps.playOnAwake = false;
          this.steps.loop = true;
          this.voices = Array.from({
            length: 5
          }, function () {
            var node = new Node('Audio');
            root.addChild(node);
            var voice = node.addComponent(AudioSource);
            voice.playOnAwake = false;
            return voice;
          });
          var trialFiles = Object.values(trialCues).flatMap(function (cue) {
            return Array.from(cue.files, function (file) {
              return 'trial-' + file;
            });
          });
          var _loop = function _loop() {
            var name = _step.value;
            resources.load('audio/' + name, AudioClip, function (error, clip) {
              if (!error) _this.clips.set(name, clip);
            });
          };
          for (var _iterator = _createForOfIteratorHelperLoose(baseCues.concat(trialFiles)), _step; !(_step = _iterator()).done;) {
            _loop();
          }
        }
        var _proto = GameAudio.prototype;
        _proto.play = function play(name) {
          this.emit(name, this.clips.get(name), .23);
        };
        _proto.beginWalking = function beginWalking() {
          var _this$fade,
            _this2 = this;
          var trip = ++this.walking;
          (_this$fade = this.fade) == null || _this$fade.stop();
          var clip = this.clips.get('step');
          if (this.enabled && clip) {
            this.steps.clip = clip;
            this.steps.volume = .23;
            this.steps.play();
          }
          return function () {
            if (trip !== _this2.walking || !_this2.steps.playing) return;
            _this2.fade = tween(_this2.steps).to(.20, {
              volume: 0
            }).call(function () {
              return _this2.resetVoice(_this2.steps);
            }).start();
          };
        };
        _proto.playChain = function playChain(wave) {
          var _this$clips$get;
          var name = wave ? 'combo' : 'clear';
          var clip = (_this$clips$get = this.clips.get('trial-' + name)) != null ? _this$clips$get : this.clips.get('clear');
          this.emit('chain', clip, Math.min(.40, .21 + wave * .045), true);
        };
        _proto.playTrial = function playTrial(name) {
          var _this$trialVariants$g, _this$clips$get2;
          var cue = trialCues[name];
          var variant = (_this$trialVariants$g = this.trialVariants.get(name)) != null ? _this$trialVariants$g : 0;
          var filename = 'trial-' + cue.files[variant % cue.files.length];
          var clip = (_this$clips$get2 = this.clips.get(filename)) != null ? _this$clips$get2 : this.clips.get(cue.fallback);
          if (this.emit('trial-' + name, clip, cue.volume, true)) {
            this.trialVariants.set(name, (variant + 1) % cue.files.length);
          }
        };
        _proto.stopTrial = function stopTrial() {
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.trialVoices), _step2; !(_step2 = _iterator2()).done;) {
            var voice = _step2.value;
            this.resetVoice(voice);
          }
          this.trialVoices.clear();
        };
        _proto.resetVoice = function resetVoice(voice) {
          voice.stop();
          // Detach a pending sample so a late audio decode cannot start it.
          voice.clip = null;
        };
        _proto.emit = function emit(name, clip, volume, trial) {
          var _this$lastPlayed$get;
          if (trial === void 0) {
            trial = false;
          }
          var now = Date.now();
          if (!this.enabled || !clip || now - ((_this$lastPlayed$get = this.lastPlayed.get(name)) != null ? _this$lastPlayed$get : 0) < 85) return false;
          this.lastPlayed.set(name, now);
          var voice = this.voices[this.cursor++ % this.voices.length];
          voice.stop();
          if (trial) this.trialVoices.add(voice);else this.trialVoices["delete"](voice);
          voice.clip = clip;
          voice.volume = volume;
          voice.play();
          return true;
        };
        _proto.toggle = function toggle() {
          var _this3 = this;
          this.enabled = !this.enabled;
          if (!this.enabled) {
            var _this$fade2;
            (_this$fade2 = this.fade) == null || _this$fade2.stop();
            this.resetVoice(this.steps);
            this.voices.forEach(function (voice) {
              return _this3.resetVoice(voice);
            });
            this.trialVoices.clear();
          }
          sys.localStorage.setItem('cocos-muted', String(!this.enabled));
        };
        return GameAudio;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Inventory.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "20da9QpTWNPmbvrCDEtMvn/", "Inventory", undefined);
      var resourceNames = exports('resourceNames', {
        gold: '金币',
        herb: '草药',
        ore: '铁矿',
        essence: '灵质',
        crystal: '晶体'
      });
      var equipment = exports('equipment', [{
        id: 'blade',
        name: '铁剑',
        owner: 's',
        slot: 'weapon',
        attack: 12,
        cost: {
          gold: 16
        }
      }, {
        id: 'shield',
        name: '守护甲',
        owner: 'd',
        slot: 'armor',
        hp: 30,
        dp: 8,
        cost: {
          gold: 20,
          herb: 3
        }
      }, {
        id: 'swordcore',
        name: '剑气护符',
        owner: 's',
        slot: 'core',
        effect: '剑纹章四消追加剑气',
        cost: {
          gold: 24,
          ore: 4
        }
      }, {
        id: 'guardcore',
        name: '反击徽记',
        owner: 'd',
        slot: 'core',
        effect: '满 DP 反击增伤',
        cost: {
          gold: 25,
          ore: 4
        }
      }, {
        id: 'magiccore',
        name: '奥术法典',
        owner: 'm',
        slot: 'core',
        effect: '法术连锁增强',
        cost: {
          gold: 28,
          essence: 3
        }
      }, {
        id: 'healcore',
        name: '生命圣杯',
        owner: 'h',
        slot: 'core',
        effect: '治疗溢出转为 DP',
        cost: {
          gold: 28,
          essence: 3
        }
      }, {
        id: 'buckler',
        name: '皮革臂盾',
        owner: 'd',
        slot: 'offhand',
        dp: 6,
        cost: {
          gold: 12,
          ore: 1
        }
      }]);
      var humanTags = ['living', 'human', 'humanoid'];
      var heroes = exports('heroes', {
        s: {
          name: '雷恩',
          role: '剑士',
          hp: 100,
          dp: 12,
          attack: 26,
          tags: [].concat(humanTags, ['melee'])
        },
        d: {
          name: '罗兰',
          role: '盾卫',
          hp: 130,
          dp: 42,
          attack: 15,
          tags: [].concat(humanTags, ['melee', 'armor'])
        },
        m: {
          name: '伊芙',
          role: '法师',
          hp: 80,
          dp: 8,
          attack: 32,
          tags: [].concat(humanTags, ['ranged', 'mage'])
        },
        h: {
          name: '米拉',
          role: '牧师',
          hp: 100,
          dp: 18,
          attack: 12,
          tags: [].concat(humanTags, ['ranged', 'healer'])
        }
      });
      var Inventory = exports('Inventory', /*#__PURE__*/function () {
        function Inventory() {
          this.owned = ['blade'];
          this.slots = {
            's:weapon': 'blade'
          };
          this.materials = {
            herb: 0,
            ore: 0,
            essence: 0,
            crystal: 0
          };
          this.experience = {
            s: 0,
            d: 0,
            m: 0,
            h: 0
          };
        }
        var _proto = Inventory.prototype;
        _proto.hasEquipped = function hasEquipped(id) {
          return Object.values(this.slots).includes(id);
        };
        _proto.toggle = function toggle(id) {
          var item = equipment.find(function (item) {
            return item.id === id;
          });
          if (!item || !this.owned.includes(id)) return false;
          var key = item.owner + ':' + item.slot;
          if (this.slots[key] === id) delete this.slots[key];else this.slots[key] = id;
          return true;
        };
        _proto.discard = function discard(id) {
          var index = this.owned.indexOf(id);
          if (index < 0) return false;
          this.owned.splice(index, 1);
          for (var _i = 0, _Object$keys = Object.keys(this.slots); _i < _Object$keys.length; _i++) {
            var key = _Object$keys[_i];
            if (this.slots[key] === id) delete this.slots[key];
          }
          return true;
        };
        _proto.canCraft = function canCraft(id, gold) {
          var _this = this;
          var item = equipment.find(function (entry) {
            return entry.id === id;
          });
          return !!item && !this.owned.includes(id) && Object.entries(item.cost).every(function (_ref) {
            var key = _ref[0],
              cost = _ref[1];
            return (key === 'gold' ? gold : _this.materials[key]) >= cost;
          });
        };
        _proto.craft = function craft(id, gold) {
          var _item$cost$gold;
          if (!this.canCraft(id, gold)) return null;
          var item = equipment.find(function (entry) {
            return entry.id === id;
          });
          for (var _i2 = 0, _Object$keys2 = Object.keys(this.materials); _i2 < _Object$keys2.length; _i2++) {
            var _item$cost$key;
            var key = _Object$keys2[_i2];
            this.materials[key] -= (_item$cost$key = item.cost[key]) != null ? _item$cost$key : 0;
          }
          this.owned.push(id);
          return (_item$cost$gold = item.cost.gold) != null ? _item$cost$gold : 0;
        };
        _proto.rank = function rank(id) {
          var _this$experience$id;
          var progress = (_this$experience$id = this.experience[id]) != null ? _this$experience$id : 0;
          var level = 1;
          while (progress >= level * 2) progress -= level++ * 2;
          return {
            level: level,
            progress: progress
          };
        };
        _proto.stats = function stats(id) {
          var _this2 = this;
          var base = heroes[id];
          var gear = equipment.filter(function (item) {
            return item.owner === id && _this2.hasEquipped(item.id);
          });
          return {
            hp: base.hp + gear.reduce(function (sum, item) {
              var _item$hp;
              return sum + ((_item$hp = item.hp) != null ? _item$hp : 0);
            }, 0),
            dp: base.dp + gear.reduce(function (sum, item) {
              var _item$dp;
              return sum + ((_item$dp = item.dp) != null ? _item$dp : 0);
            }, 0),
            attack: base.attack + gear.reduce(function (sum, item) {
              var _item$attack;
              return sum + ((_item$attack = item.attack) != null ? _item$attack : 0);
            }, 0)
          };
        };
        _proto.restore = function restore(state) {
          if (!state || typeof state !== 'object') return;
          var data = state;
          var amount = function amount(value) {
            return typeof value === 'number' && Number.isFinite(value) ? Math.min(1000000, Math.max(0, Math.floor(value))) : 0;
          };
          if (Array.isArray(data.owned)) this.owned = equipment.filter(function (item) {
            return data.owned.includes(item.id);
          }).map(function (item) {
            return item.id;
          });
          if (data.slots && typeof data.slots === 'object') {
            this.slots = {};
            for (var _i3 = 0, _equipment = equipment; _i3 < _equipment.length; _i3++) {
              var item = _equipment[_i3];
              var key = item.owner + ':' + item.slot;
              if (this.owned.includes(item.id) && data.slots[key] === item.id) this.slots[key] = item.id;
            }
          }
          for (var _i4 = 0, _Object$keys3 = Object.keys(this.materials); _i4 < _Object$keys3.length; _i4++) {
            var _data$materials;
            var _key = _Object$keys3[_i4];
            this.materials[_key] = amount((_data$materials = data.materials) == null ? void 0 : _data$materials[_key]);
          }
          for (var _i5 = 0, _Object$keys4 = Object.keys(this.experience); _i5 < _Object$keys4.length; _i5++) {
            var _data$experience;
            var _key2 = _Object$keys4[_i5];
            this.experience[_key2] = amount((_data$experience = data.experience) == null ? void 0 : _data$experience[_key2]);
          }
        };
        _createClass(Inventory, [{
          key: "bag",
          get: function get() {
            var _this3 = this;
            return this.owned.filter(function (id) {
              return !_this3.hasEquipped(id);
            });
          }
        }]);
        return Inventory;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./BattleMotion.ts', './BattleRules.ts', './Board.ts', './Chapter.ts', './CombatTags.ts', './DungeonDirector.ts', './Game.ts', './GameAudio.ts', './Inventory.ts', './MineTrial.ts', './TemplateBoardFx.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/MineTrial.ts", ['cc', './Chapter.ts'], function (exports) {
  var cclegacy, enemy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      enemy = module.enemy;
    }],
    execute: function () {
      exports({
        makeMineTrial: makeMineTrial,
        mineTrialRandom: mineTrialRandom
      });
      cclegacy._RF.push({}, "5e71aIqxQBM4YY6yZaGfFDg", "MineTrial", undefined);
      var mineTrialTitle = exports('mineTrialTitle', '废弃矿坑 · 矿车轨道');
      var mineTrialSeed = exports('mineTrialSeed', 20261114);
      function makeMineTrial() {
        return [{
          kind: 'battle',
          coinReward: 4,
          enemies: [112, 80],
          encounters: [enemy('石甲虫', 'beetle', 112, 11), enemy('矿洞蝙蝠', 'bat', 80, 8)]
        }, {
          kind: 'rest'
        }, {
          kind: 'battle',
          coinReward: 4,
          enemies: [150],
          rescueCells: [23, 30],
          encounters: [enemy('堵路石甲虫', 'beetle', 150, 13)]
        }, {
          kind: 'battle',
          type: 'boss',
          coinReward: 8,
          enemies: [295],
          encounters: [enemy('晶岩守卫', 'golem', 295, 23, ['boss'])]
        }];
      }
      function mineTrialRandom(seed) {
        if (seed === void 0) {
          seed = mineTrialSeed;
        }
        var state = seed >>> 0;
        return function () {
          state = Math.imul(state, 1664525) + 1013904223 >>> 0;
          return state / 4294967296;
        };
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TemplateBoardFx.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy, Color, Node, UITransform, Sprite, UIOpacity, Label, tween, Vec3, resources, Texture2D, SpriteFrame;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      Color = module.Color;
      Node = module.Node;
      UITransform = module.UITransform;
      Sprite = module.Sprite;
      UIOpacity = module.UIOpacity;
      Label = module.Label;
      tween = module.tween;
      Vec3 = module.Vec3;
      resources = module.resources;
      Texture2D = module.Texture2D;
      SpriteFrame = module.SpriteFrame;
    }],
    execute: function () {
      cclegacy._RF.push({}, "cd63cW7k5hEv5WXAk6gSAmI", "TemplateBoardFx", undefined);
      // Sweet Sugar expl.anim plays these consecutive flame and smoke silhouettes.
      var burstFrames = Array.from({
        length: 13
      }, function (_, index) {
        return 'burst-' + String(index + 5).padStart(2, '0');
      });
      var circleFrames = ['circle-1', 'circle-2', 'circle-3', 'circle-4'];
      var textureNames = [].concat(burstFrames, circleFrames, ['beam', 'spark', 'glow', 'ring', 'charge-ring']);
      var maxSprites = 20;
      var maxClearPoints = 8;
      var amber = new Color(255, 208, 109);
      var violet = new Color(194, 162, 255);
      var red = new Color(255, 112, 106);
      var TemplateBoardFx = exports('TemplateBoardFx', /*#__PURE__*/function () {
        TemplateBoardFx.load = /*#__PURE__*/function () {
          var _load = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var frames;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  frames = new Map();
                  _context.next = 3;
                  return Promise.all(textureNames.map(function (name) {
                    return new Promise(function (resolve) {
                      resources.load('template-fx/' + name + '/texture', Texture2D, function (error, texture) {
                        if (!error) {
                          var frame = new SpriteFrame();
                          frame.texture = texture;
                          frames.set(name, frame);
                        }
                        resolve();
                      });
                    });
                  }));
                case 3:
                  return _context.abrupt("return", frames);
                case 4:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function load() {
            return _load.apply(this, arguments);
          }
          return load;
        }();
        function TemplateBoardFx(parent, frames) {
          this.layer = void 0;
          this.pool = [];
          this.stamp = void 0;
          this.disposed = false;
          this.frames = frames;
          this.layer = new Node('消除特效层');
          this.layer.layer = parent.layer;
          this.layer.addComponent(UITransform);
          parent.addChild(this.layer);
        }
        var _proto = TemplateBoardFx.prototype;
        _proto.dispose = function dispose() {
          this.disposed = true;
          if (this.layer.isValid) {
            this.layer.removeFromParent();
            this.layer.destroy();
          }
        };
        _proto.clear = /*#__PURE__*/function () {
          var _clear = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(motion, points, kind, lanes) {
            var propagated, tint, visible, animations, _iterator, _step, lane, _iterator2, _step2, _point, index, point;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (kind === void 0) {
                    kind = 'match';
                  }
                  if (lanes === void 0) {
                    lanes = [];
                  }
                  if (!(motion.cancelled || this.disposed || motion.reduced)) {
                    _context2.next = 4;
                    break;
                  }
                  return _context2.abrupt("return");
                case 4:
                  propagated = kind === 'charge';
                  tint = propagated ? violet : amber;
                  visible = points.slice(0, maxClearPoints);
                  animations = [];
                  for (_iterator = _createForOfIteratorHelperLoose(lanes); !(_step = _iterator()).done;) {
                    lane = _step.value;
                    animations.push(this.beam(motion, lane, tint));
                  }
                  for (_iterator2 = _createForOfIteratorHelperLoose(visible); !(_step2 = _iterator2()).done;) {
                    _point = _step2.value;
                    animations.push(this.flipbook(motion, _point, propagated ? circleFrames : burstFrames, tint));
                  }
                  for (index = 0; index < visible.length; index++) {
                    point = visible[index];
                    animations.push(this.spark(motion, point, tint, index));
                    if (index < 3) animations.push(this.spark(motion, point, tint, index + 5));
                  }
                  _context2.next = 13;
                  return Promise.all(animations);
                case 13:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function clear(_x, _x2, _x3, _x4) {
            return _clear.apply(this, arguments);
          }
          return clear;
        }();
        _proto.chargeReady = /*#__PURE__*/function () {
          var _chargeReady = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(motion, points) {
            var _this = this;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  if (!(motion.cancelled || this.disposed || motion.reduced)) {
                    _context3.next = 2;
                    break;
                  }
                  return _context3.abrupt("return");
                case 2:
                  _context3.next = 4;
                  return Promise.all(points.slice(0, maxClearPoints).map(function (point) {
                    return _this.pulse(motion, 'charge-ring', '蓄能光圈', point.position, 61, amber);
                  }));
                case 4:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function chargeReady(_x5, _x6) {
            return _chargeReady.apply(this, arguments);
          }
          return chargeReady;
        }();
        _proto.reject = /*#__PURE__*/function () {
          var _reject = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(motion, positions) {
            var _this2 = this;
            var effects;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  if (!(motion.cancelled || this.disposed || motion.reduced)) {
                    _context4.next = 2;
                    break;
                  }
                  return _context4.abrupt("return");
                case 2:
                  effects = positions.slice(0, 2).flatMap(function (position) {
                    return [_this2.pulse(motion, 'glow', '无效换位闪光', position, 53, red), _this2.pulse(motion, 'ring', '无效换位描边', position, 70, red)];
                  });
                  _context4.next = 5;
                  return Promise.all(effects);
                case 5:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
          function reject(_x7, _x8) {
            return _reject.apply(this, arguments);
          }
          return reject;
        }();
        _proto.combo = /*#__PURE__*/function () {
          var _combo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(motion, wave, position) {
            var _this3 = this;
            var _node, ui, _text, _this$stamp, node, text, opacity, state;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  if (!(wave < 2 || motion.cancelled || this.disposed || motion.reduced)) {
                    _context5.next = 2;
                    break;
                  }
                  return _context5.abrupt("return");
                case 2:
                  if (!this.stamp) {
                    _node = new Node('连锁提示');
                    _node.layer = this.layer.layer;
                    this.layer.addChild(_node);
                    ui = _node.addComponent(UITransform);
                    _text = _node.addComponent(Label);
                    _text.fontFamily = 'Microsoft YaHei';
                    _text.fontSize = 32;
                    _text.lineHeight = 40;
                    _text.color = amber.clone();
                    _text.enableOutline = true;
                    _text.outlineColor = new Color(52, 28, 48);
                    _text.outlineWidth = 4;
                    ui.setContentSize(260, 46);
                    this.stamp = {
                      node: _node,
                      text: _text,
                      opacity: _node.addComponent(UIOpacity)
                    };
                  }
                  _this$stamp = this.stamp, node = _this$stamp.node, text = _this$stamp.text, opacity = _this$stamp.opacity;
                  state = {
                    progress: 0
                  };
                  text.string = wave + ' 连锁';
                  node.setSiblingIndex(this.layer.children.length - 1);
                  node.setPosition(position.x, position.y);
                  node.setScale(.68, .68, 1);
                  opacity.opacity = 0;
                  node.active = true;
                  _context5.prev = 11;
                  _context5.next = 14;
                  return motion.play(tween(state).to(motion.duration(.28), {
                    progress: 1
                  }, {
                    onUpdate: function onUpdate() {
                      if (_this3.disposed || !node.isValid) return;
                      var progress = state.progress;
                      var scale = progress < .28 ? .68 + progress * 1.9 : 1.21 - (progress - .28) * .3;
                      node.setScale(scale, scale, 1);
                      node.setPosition(position.x, position.y + 14 * progress);
                      opacity.opacity = Math.round(255 * Math.min(progress * 14, 1, (1 - progress) * 2.7));
                    }
                  }));
                case 14:
                  _context5.prev = 14;
                  if (!this.disposed && node.isValid) node.active = false;
                  return _context5.finish(14);
                case 17:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this, [[11,, 14, 17]]);
          }));
          function combo(_x9, _x10, _x11) {
            return _combo.apply(this, arguments);
          }
          return combo;
        }();
        _proto.take = function take(key, name, position, width, height, tint) {
          var frame = this.frames.get(key);
          if (!frame || this.disposed || !this.layer.isValid) return;
          var effect = this.pool.find(function (entry) {
            return !entry.node.active;
          });
          if (!effect) {
            if (this.pool.length >= maxSprites) return;
            var _node2 = new Node();
            _node2.layer = this.layer.layer;
            this.layer.addChild(_node2);
            var _size = _node2.addComponent(UITransform);
            var _sprite = _node2.addComponent(Sprite);
            _sprite.sizeMode = Sprite.SizeMode.CUSTOM;
            effect = {
              node: _node2,
              size: _size,
              sprite: _sprite,
              opacity: _node2.addComponent(UIOpacity)
            };
            this.pool.push(effect);
          }
          var _effect = effect,
            node = _effect.node,
            size = _effect.size,
            sprite = _effect.sprite,
            opacity = _effect.opacity;
          node.name = name;
          node.setPosition(position.x, position.y);
          node.setScale(1, 1, 1);
          node.angle = 0;
          sprite.spriteFrame = frame;
          sprite.color = tint;
          size.setContentSize(width, height);
          opacity.opacity = 255;
          node.active = true;
          return effect;
        };
        _proto.animate = /*#__PURE__*/function () {
          var _animate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(motion, effect, duration, update) {
            var _this4 = this;
            var state;
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  state = {
                    progress: 0
                  };
                  _context6.prev = 1;
                  _context6.next = 4;
                  return motion.play(tween(state).to(motion.duration(duration), {
                    progress: 1
                  }, {
                    onUpdate: function onUpdate() {
                      if (!_this4.disposed && effect.node.isValid) update(state.progress);
                    }
                  }));
                case 4:
                  _context6.prev = 4;
                  if (!this.disposed && effect.node.isValid) effect.node.active = false;
                  return _context6.finish(4);
                case 7:
                case "end":
                  return _context6.stop();
              }
            }, _callee6, this, [[1,, 4, 7]]);
          }));
          function animate(_x12, _x13, _x14, _x15) {
            return _animate.apply(this, arguments);
          }
          return animate;
        }();
        _proto.flipbook = /*#__PURE__*/function () {
          var _flipbook = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(motion, point, keys, tint) {
            var _point$color,
              _this5 = this;
            var effect;
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  effect = this.take(keys[0], '消除爆裂', point.position, 78, 78, (_point$color = point.color) != null ? _point$color : tint);
                  if (effect) {
                    _context7.next = 3;
                    break;
                  }
                  return _context7.abrupt("return");
                case 3:
                  _context7.next = 5;
                  return this.animate(motion, effect, .245, function (progress) {
                    var index = Math.min(keys.length - 1, Math.floor(progress * keys.length));
                    var frame = _this5.frames.get(keys[index]);
                    if (frame && effect.sprite.spriteFrame !== frame) effect.sprite.spriteFrame = frame;
                    effect.opacity.opacity = Math.round(244 * Math.min(1, (1 - progress) * 4.4));
                  });
                case 5:
                case "end":
                  return _context7.stop();
              }
            }, _callee7, this);
          }));
          function flipbook(_x16, _x17, _x18, _x19) {
            return _flipbook.apply(this, arguments);
          }
          return flipbook;
        }();
        _proto.beam = /*#__PURE__*/function () {
          var _beam = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(motion, lane, tint) {
            var dx, dy, center, effect;
            return _regeneratorRuntime().wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
                case 0:
                  dx = lane.to.x - lane.from.x;
                  dy = lane.to.y - lane.from.y;
                  center = new Vec3((lane.from.x + lane.to.x) * .5, (lane.from.y + lane.to.y) * .5);
                  effect = this.take('beam', '传导光束', center, Math.hypot(dx, dy) + 53, 19, tint);
                  if (effect) {
                    _context8.next = 6;
                    break;
                  }
                  return _context8.abrupt("return");
                case 6:
                  effect.node.angle = Math.atan2(dy, dx) * 180 / Math.PI;
                  effect.node.setScale(.44, .8, 1);
                  _context8.next = 10;
                  return this.animate(motion, effect, .24, function (progress) {
                    effect.node.setScale(.44 + Math.min(progress * 2.8, 1) * .56, .8 + progress * .9, 1);
                    effect.opacity.opacity = Math.round(255 * Math.min(1, (1 - progress) * 2.65));
                  });
                case 10:
                case "end":
                  return _context8.stop();
              }
            }, _callee8, this);
          }));
          function beam(_x20, _x21, _x22) {
            return _beam.apply(this, arguments);
          }
          return beam;
        }();
        _proto.spark = /*#__PURE__*/function () {
          var _spark = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(motion, point, tint, index) {
            var _point$color2;
            var effect, angle, dx, dy;
            return _regeneratorRuntime().wrap(function _callee9$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
                case 0:
                  effect = this.take('spark', '飞散星光', point.position, 31, 31, (_point$color2 = point.color) != null ? _point$color2 : tint);
                  if (effect) {
                    _context9.next = 3;
                    break;
                  }
                  return _context9.abrupt("return");
                case 3:
                  angle = index * 2.4 + .55;
                  dx = Math.cos(angle) * 32;
                  dy = Math.sin(angle) * 26 + 8;
                  _context9.next = 8;
                  return this.animate(motion, effect, .225, function (progress) {
                    var travel = 1 - Math.pow(1 - progress, 2);
                    effect.node.setPosition(point.position.x + dx * travel, point.position.y + dy * travel);
                    var scale = .62 + progress * .48;
                    effect.node.setScale(scale, scale, 1);
                    effect.opacity.opacity = Math.round(245 * Math.min(1, (1 - progress) * 2.7));
                  });
                case 8:
                case "end":
                  return _context9.stop();
              }
            }, _callee9, this);
          }));
          function spark(_x23, _x24, _x25, _x26) {
            return _spark.apply(this, arguments);
          }
          return spark;
        }();
        _proto.pulse = /*#__PURE__*/function () {
          var _pulse = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(motion, key, name, position, size, tint) {
            var effect;
            return _regeneratorRuntime().wrap(function _callee10$(_context10) {
              while (1) switch (_context10.prev = _context10.next) {
                case 0:
                  effect = this.take(key, name, position, size, size, tint);
                  if (effect) {
                    _context10.next = 3;
                    break;
                  }
                  return _context10.abrupt("return");
                case 3:
                  effect.node.setScale(.65, .65, 1);
                  _context10.next = 6;
                  return this.animate(motion, effect, .17, function (progress) {
                    var scale = .65 + progress * .53;
                    effect.node.setScale(scale, scale, 1);
                    effect.opacity.opacity = Math.round(245 * (1 - progress));
                  });
                case 6:
                case "end":
                  return _context10.stop();
              }
            }, _callee10, this);
          }));
          function pulse(_x27, _x28, _x29, _x30, _x31, _x32) {
            return _pulse.apply(this, arguments);
          }
          return pulse;
        }();
        return TemplateBoardFx;
      }());
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});