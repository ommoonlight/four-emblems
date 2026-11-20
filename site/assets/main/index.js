System.register("chunks:///_virtual/ActorArt.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _extends, cclegacy;
  return {
    setters: [function (module) {
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f813fjU/QxAiaoTjIvULM+h", "ActorArt", undefined);
      // Stage art calibration. Anchors use source image normalized top-left coordinates.
      var portraitBottomPadding = exports('portraitBottomPadding', {
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
      });
      // Lower-silhouette bounds keep the ellipse under the feet even when the
      // portrait canvas is offset or its upper body is much wider than its stance.
      var portraitFootprint = exports('portraitFootprint', {
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
      });
      var enemyPortraitSize = exports('enemyPortraitSize', {
        boss: 142,
        knight: 188,
        wizard: 188,
        dragon: 176,
        bear: 162,
        golem: 164,
        lich: 148
      });
      var actorArt = exports('actorArt', {
        "hero-s": {
          "baseOpacity": 1,
          "headY": 0.026,
          "centerX": 0.5,
          "centerY": 0.5,
          "projectileX": 0.65,
          "projectileY": 0.45,
          "shadowOffsetX": 0,
          "shadowOffsetY": 0,
          "shadowScale": 1,
          "sourceFacing": "right"
        },
        "hero-d": {
          "baseOpacity": 1,
          "headY": 0.0521,
          "centerX": 0.5,
          "centerY": 0.5,
          "projectileX": 0.65,
          "projectileY": 0.45,
          "shadowOffsetX": 0,
          "shadowOffsetY": 0,
          "shadowScale": 1,
          "sourceFacing": "right"
        },
        "hero-m": {
          "baseOpacity": 1,
          "headY": 0.0625,
          "centerX": 0.5,
          "centerY": 0.5,
          "projectileX": 0.65,
          "projectileY": 0.45,
          "shadowOffsetX": 0,
          "shadowOffsetY": 0,
          "shadowScale": 1,
          "sourceFacing": "right"
        },
        "hero-h": {
          "baseOpacity": 1,
          "headY": 0.0365,
          "centerX": 0.5,
          "centerY": 0.5,
          "projectileX": 0.65,
          "projectileY": 0.45,
          "shadowOffsetX": 0,
          "shadowOffsetY": 0,
          "shadowScale": 1,
          "sourceFacing": "right"
        },
        "wolf": {
          "baseOpacity": 1,
          "headY": 0.0469,
          "centerX": 0.5,
          "centerY": 0.5,
          "projectileX": 0.65,
          "projectileY": 0.45,
          "shadowOffsetX": 0,
          "shadowOffsetY": 0,
          "shadowScale": 1,
          "sourceFacing": "right"
        },
        "boss": {
          "baseOpacity": 1,
          "headY": 0.1281,
          "centerX": 0.5,
          "centerY": 0.5,
          "projectileX": 0.65,
          "projectileY": 0.45,
          "shadowOffsetX": 0,
          "shadowOffsetY": 0,
          "shadowScale": 1,
          "sourceFacing": "right"
        },
        "boar": {
          "baseOpacity": 1,
          "headY": 0.1594,
          "centerX": 0.5,
          "centerY": 0.5,
          "projectileX": 0.65,
          "projectileY": 0.45,
          "shadowOffsetX": 0,
          "shadowOffsetY": 0,
          "shadowScale": 1,
          "sourceFacing": "right"
        },
        "vine": {
          "baseOpacity": 1,
          "headY": 0.07,
          "centerX": 0.5,
          "centerY": 0.5,
          "projectileX": 0.65,
          "projectileY": 0.45,
          "shadowOffsetX": 0,
          "shadowOffsetY": 0,
          "shadowScale": 1,
          "sourceFacing": "right"
        },
        "bear": {
          "baseOpacity": 1,
          "headY": 0.0867,
          "centerX": 0.5,
          "centerY": 0.5,
          "projectileX": 0.65,
          "projectileY": 0.45,
          "shadowOffsetX": 0,
          "shadowOffsetY": 0,
          "shadowScale": 1,
          "sourceFacing": "right"
        },
        "bat": {
          "baseOpacity": 1,
          "headY": 0.17,
          "centerX": 0.5,
          "centerY": 0.5,
          "projectileX": 0.65,
          "projectileY": 0.45,
          "shadowOffsetX": 0,
          "shadowOffsetY": 0,
          "shadowScale": 1,
          "sourceFacing": "right"
        },
        "beetle": {
          "baseOpacity": 1,
          "headY": 0.1833,
          "centerX": 0.5,
          "centerY": 0.5,
          "projectileX": 0.65,
          "projectileY": 0.45,
          "shadowOffsetX": 0,
          "shadowOffsetY": 0,
          "shadowScale": 1,
          "sourceFacing": "right"
        },
        "golem": {
          "baseOpacity": 1,
          "headY": 0.0433,
          "centerX": 0.5,
          "centerY": 0.5,
          "projectileX": 0.65,
          "projectileY": 0.45,
          "shadowOffsetX": 0,
          "shadowOffsetY": 0,
          "shadowScale": 1,
          "sourceFacing": "right"
        },
        "ghost": {
          "baseOpacity": 0.85,
          "headY": 0.0467,
          "centerX": 0.5,
          "centerY": 0.5,
          "projectileX": 0.65,
          "projectileY": 0.45,
          "shadowOffsetX": 0,
          "shadowOffsetY": 0,
          "shadowScale": 1,
          "sourceFacing": "right"
        },
        "frog": {
          "baseOpacity": 1,
          "headY": 0.0433,
          "centerX": 0.5,
          "centerY": 0.5,
          "projectileX": 0.65,
          "projectileY": 0.45,
          "shadowOffsetX": 0,
          "shadowOffsetY": 0,
          "shadowScale": 1,
          "sourceFacing": "right"
        },
        "lich": {
          "baseOpacity": 1,
          "headY": 0.0433,
          "centerX": 0.5,
          "centerY": 0.5,
          "projectileX": 0.65,
          "projectileY": 0.45,
          "shadowOffsetX": 0,
          "shadowOffsetY": 0,
          "shadowScale": 1,
          "sourceFacing": "right"
        },
        "dragon": {
          "baseOpacity": 1,
          "headY": 0.0533,
          "centerX": 0.5,
          "centerY": 0.5,
          "projectileX": 0.65,
          "projectileY": 0.45,
          "shadowOffsetX": 0,
          "shadowOffsetY": 0,
          "shadowScale": 1,
          "sourceFacing": "right"
        },
        "knight": {
          "baseOpacity": 1,
          "headY": 0.36,
          "centerX": 0.5,
          "centerY": 0.5,
          "projectileX": 0.65,
          "projectileY": 0.45,
          "shadowOffsetX": 0,
          "shadowOffsetY": 0,
          "shadowScale": 1,
          "sourceFacing": "right"
        },
        "wizard": {
          "baseOpacity": 1,
          "headY": 0.3067,
          "centerX": 0.5,
          "centerY": 0.5,
          "projectileX": 0.65,
          "projectileY": 0.45,
          "shadowOffsetX": 0,
          "shadowOffsetY": 0,
          "shadowScale": 1,
          "sourceFacing": "right"
        },
        "npc-chief": {
          "baseOpacity": 1,
          "headY": 0.0404,
          "centerX": 0.5,
          "centerY": 0.5,
          "projectileX": 0.65,
          "projectileY": 0.45,
          "shadowOffsetX": 0,
          "shadowOffsetY": 0,
          "shadowScale": 1,
          "sourceFacing": "right"
        },
        "npc-shop": {
          "baseOpacity": 1,
          "headY": 0.0404,
          "centerX": 0.5,
          "centerY": 0.5,
          "projectileX": 0.65,
          "projectileY": 0.45,
          "shadowOffsetX": 0,
          "shadowOffsetY": 0,
          "shadowScale": 1,
          "sourceFacing": "right"
        },
        "npc-innkeeper": {
          "baseOpacity": 1,
          "headY": 0.0404,
          "centerX": 0.5,
          "centerY": 0.5,
          "projectileX": 0.65,
          "projectileY": 0.45,
          "shadowOffsetX": 0,
          "shadowOffsetY": 0,
          "shadowScale": 1,
          "sourceFacing": "right"
        },
        "npc-smith": {
          "baseOpacity": 1,
          "headY": 0.0404,
          "centerX": 0.5,
          "centerY": 0.5,
          "projectileX": 0.65,
          "projectileY": 0.45,
          "shadowOffsetX": 0,
          "shadowOffsetY": 0,
          "shadowScale": 1,
          "sourceFacing": "right"
        },
        "dungeon-traveler": {
          "baseOpacity": 1,
          "headY": 0.2,
          "centerX": 0.5,
          "centerY": 0.5,
          "projectileX": 0.65,
          "projectileY": 0.45,
          "shadowOffsetX": 0,
          "shadowOffsetY": 0,
          "shadowScale": 1,
          "sourceFacing": "right"
        },
        "dungeon-merchant": {
          "baseOpacity": 1,
          "headY": 0.07,
          "centerX": 0.5,
          "centerY": 0.5,
          "projectileX": 0.65,
          "projectileY": 0.45,
          "shadowOffsetX": 0,
          "shadowOffsetY": 0,
          "shadowScale": 1,
          "sourceFacing": "right"
        }
      });

      // Game-sized supplied character derivatives (right-facing source convention).
      portraitBottomPadding['npc-chief'] = 0.018072289156626505;
      portraitFootprint['npc-chief'] = [.18, .82];
      actorArt['npc-chief'] = {
        baseOpacity: 1,
        headY: 0.018072289156626505,
        centerX: .5,
        centerY: .5,
        projectileX: .7,
        projectileY: .45,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowScale: 1,
        sourceFacing: 'right'
      };
      portraitBottomPadding['npc-villager'] = 0.018072289156626505;
      portraitFootprint['npc-villager'] = [.18, .82];
      actorArt['npc-villager'] = {
        baseOpacity: 1,
        headY: 0.018072289156626505,
        centerX: .5,
        centerY: .5,
        projectileX: .7,
        projectileY: .45,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowScale: 1,
        sourceFacing: 'right'
      };
      portraitBottomPadding['npc-villager-down'] = 0.018072289156626505;
      portraitFootprint['npc-villager-down'] = [.18, .82];
      actorArt['npc-villager-down'] = {
        baseOpacity: 1,
        headY: 0.29819277108433734,
        centerX: .5,
        centerY: .5,
        projectileX: .7,
        projectileY: .45,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowScale: 1,
        sourceFacing: 'right'
      };
      portraitBottomPadding['murloc-mage'] = 0.018072289156626505;
      portraitFootprint['murloc-mage'] = [.18, .82];
      actorArt['murloc-mage'] = {
        baseOpacity: 1,
        headY: 0.018072289156626505,
        centerX: .5,
        centerY: .5,
        projectileX: .7,
        projectileY: .45,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowScale: 1,
        sourceFacing: 'right'
      };
      portraitBottomPadding['murloc-spear'] = 0.018072289156626505;
      portraitFootprint['murloc-spear'] = [.18, .82];
      actorArt['murloc-spear'] = {
        baseOpacity: 1,
        headY: 0.02108433734939759,
        centerX: .5,
        centerY: .5,
        projectileX: .7,
        projectileY: .45,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowScale: 1,
        sourceFacing: 'right'
      };
      portraitBottomPadding['murloc-axe'] = 0.018072289156626505;
      portraitFootprint['murloc-axe'] = [.18, .82];
      actorArt['murloc-axe'] = {
        baseOpacity: 1,
        headY: 0.08132530120481928,
        centerX: .5,
        centerY: .5,
        projectileX: .7,
        projectileY: .45,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowScale: 1,
        sourceFacing: 'right'
      };
      portraitBottomPadding['forest-treant'] = 0.018072289156626505;
      portraitFootprint['forest-treant'] = [.18, .82];
      actorArt['forest-treant'] = {
        baseOpacity: 1,
        headY: 0.018072289156626505,
        centerX: .5,
        centerY: .5,
        projectileX: .7,
        projectileY: .45,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowScale: 1,
        sourceFacing: 'right'
      };
      portraitBottomPadding['wolf'] = 0.018072289156626505;
      portraitFootprint['wolf'] = [.18, .82];
      actorArt['wolf'] = {
        baseOpacity: 1,
        headY: 0.30120481927710846,
        centerX: .5,
        centerY: .5,
        projectileX: .7,
        projectileY: .45,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowScale: 1,
        sourceFacing: 'right'
      };
      portraitBottomPadding['forest-leafguard'] = 0.018072289156626505;
      portraitFootprint['forest-leafguard'] = [.18, .82];
      actorArt['forest-leafguard'] = {
        baseOpacity: 1,
        headY: 0.018072289156626505,
        centerX: .5,
        centerY: .5,
        projectileX: .7,
        projectileY: .45,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowScale: 1,
        sourceFacing: 'right'
      };
      portraitBottomPadding['forest-stone'] = 0.018072289156626505;
      portraitFootprint['forest-stone'] = [.18, .82];
      actorArt['forest-stone'] = {
        baseOpacity: 1,
        headY: 0.018072289156626505,
        centerX: .5,
        centerY: .5,
        projectileX: .7,
        projectileY: .45,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowScale: 1,
        sourceFacing: 'right'
      };
      portraitBottomPadding['forest-bear'] = 0.018072289156626505;
      portraitFootprint['forest-bear'] = [.18, .82];
      actorArt['forest-bear'] = {
        baseOpacity: 1,
        headY: 0.21686746987951808,
        centerX: .5,
        centerY: .5,
        projectileX: .7,
        projectileY: .45,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowScale: 1,
        sourceFacing: 'right'
      };
      portraitBottomPadding['forest-bug'] = 0.018072289156626505;
      portraitFootprint['forest-bug'] = [.18, .82];
      actorArt['forest-bug'] = {
        baseOpacity: 1,
        headY: 0.12951807228915663,
        centerX: .5,
        centerY: .5,
        projectileX: .7,
        projectileY: .45,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowScale: 1,
        sourceFacing: 'right'
      };
      portraitBottomPadding['boss'] = 0.018072289156626505;
      portraitFootprint['boss'] = [.18, .82];
      actorArt['boss'] = {
        baseOpacity: 1,
        headY: 0.30120481927710846,
        centerX: .5,
        centerY: .5,
        projectileX: .7,
        projectileY: .45,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowScale: 1,
        sourceFacing: 'right'
      };
      Object.assign(enemyPortraitSize, {
        'forest-bear': 160,
        'forest-treant': 116,
        'forest-stone': 142,
        'forest-leafguard': 112,
        'forest-bug': 88,
        'murloc-mage': 126,
        'murloc-spear': 100,
        'murloc-axe': 116
      });
      actorArt['forest-wolf'] = _extends({}, actorArt.wolf, {
        sourceFacing: 'right',
        headY: 0.171875
      });
      portraitBottomPadding['forest-wolf'] = 0.025;
      portraitFootprint['forest-wolf'] = [.15, .85];
      enemyPortraitSize['forest-wolf'] = 94;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/battle-core.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BattleRules.ts', './formal-rules.ts', './Board.ts', './experiment.ts', './damage.ts', './derivation.ts', './board-bridge.ts'], function (exports) {
  var _extends, _regeneratorRuntime, _createForOfIteratorHelperLoose, _objectWithoutPropertiesLoose, _inheritsLoose, _createClass, _wrapNativeSuper, cclegacy, newOathState, oathDamage, applyBattleCry, endOathRound, formalHit, formalSkill, formalEnemy, matches, legalMove, experimentAction, combatPipeline, derivationState, acceptFact, createBoardBridge;
  return {
    setters: [function (module) {
      _extends = module.extends;
      _regeneratorRuntime = module.regeneratorRuntime;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _objectWithoutPropertiesLoose = module.objectWithoutPropertiesLoose;
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _wrapNativeSuper = module.wrapNativeSuper;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      newOathState = module.newOathState;
      oathDamage = module.oathDamage;
      applyBattleCry = module.applyBattleCry;
      endOathRound = module.endOathRound;
    }, function (module) {
      formalHit = module.formalHit;
      formalSkill = module.formalSkill;
      formalEnemy = module.formalEnemy;
    }, function (module) {
      matches = module.matches;
      legalMove = module.legalMove;
    }, function (module) {
      experimentAction = module.experimentAction;
    }, function (module) {
      combatPipeline = module.combatPipeline;
    }, function (module) {
      derivationState = module.derivationState;
      acceptFact = module.acceptFact;
    }, function (module) {
      createBoardBridge = module.createBoardBridge;
    }],
    execute: function () {
      exports({
        canonical: canonical,
        createBattleCore: createBattleCore
      });
      var _excluded = ["commands"];
      cclegacy._RF.push({}, "6f6a0evaANAcKoci1iAXtk0", "battle-core", undefined);
      function canonical(value) {
        if (Array.isArray(value)) return '[' + value.map(canonical).join(',') + ']';
        if (value !== null && typeof value === 'object') {
          var entries = value instanceof Map ? Array.from(value.entries()) : Object.entries(value);
          return '{' + entries.sort(function (_ref, _ref2) {
            var a = _ref[0];
            var b = _ref2[0];
            return a < b ? -1 : a > b ? 1 : 0;
          }).map(function (_ref3) {
            var k = _ref3[0],
              v = _ref3[1];
            return JSON.stringify(k) + ':' + canonical(v);
          }).join(',') + '}';
        }
        var encoded = JSON.stringify(value);
        if (encoded === undefined) throw new Error('Non-serializable value');
        return encoded;
      }

      /** Candidate operations, never trusted commands or replacement snapshots. */

      function createBattleCore(fixture, options) {
        var _options$fingerprint, _options$boardMode, _f$rescue, _f$equipment, _derivation$instances;
        var _marked = /*#__PURE__*/_regeneratorRuntime().mark(flush),
          _marked2 = /*#__PURE__*/_regeneratorRuntime().mark(produce),
          _marked3 = /*#__PURE__*/_regeneratorRuntime().mark(apply),
          _marked4 = /*#__PURE__*/_regeneratorRuntime().mark(formalTick),
          _marked5 = /*#__PURE__*/_regeneratorRuntime().mark(drainFormal),
          _marked6 = /*#__PURE__*/_regeneratorRuntime().mark(advance);
        if (options === void 0) {
          options = {};
        }
        var hash = (_options$fingerprint = options.fingerprint) != null ? _options$fingerprint : canonical;
        var f = structuredClone(fixture);
        var mode = (_options$boardMode = options.boardMode) != null ? _options$boardMode : 'scripted';
        var boardVersion = 0;
        var potionReceipts = new Set();
        var events = [];
        var cues = [];
        var presented = 0;
        var replayBoards = [];
        var frames = new Map();
        var recorded = [];
        var state = {
          battleId: f.battleId,
          roomId: f.roomId,
          roundId: 0,
          phase: 'PLAYER_INPUT',
          rng: f.seed >>> 0,
          partyHP: f.partyHP,
          enemies: _extends({}, f.enemies),
          marks: Array.from(new Set((_f$rescue = f.rescue) != null ? _f$rescue : [])),
          partyQueue: [],
          personal: new Map(),
          delayed: [],
          producers: [],
          equipmentUses: _extends({}, f.initialEquipmentUses),
          result: null
        };
        if (f.formal) state.formal = _extends({
          rally: false,
          stunned: []
        }, f.formal.revisedSkills ? {
          oath: newOathState()
        } : {});
        var derivation = f.equipment !== undefined || f.board !== undefined || f.experiment !== undefined ? derivationState((_f$equipment = f.equipment) != null ? _f$equipment : []) : undefined;
        if (derivation) {
          if (!f.combat) throw new Error('M3 requires combat configuration');
          state.derivation = derivation;
        }
        if (f.board) state.board = {
          tiles: f.board.initial.slice()
        };
        var bridge = state.board && f.board ? createBoardBridge(f.board, state.board, random) : undefined;
        var seenFacts = new Set();
        var equipmentById = new Map(derivation == null ? void 0 : derivation.instances.map(function (i) {
          return [i.spec.id, i];
        }));
        var triggerTypes = new Set((_derivation$instances = derivation == null ? void 0 : derivation.instances.map(function (i) {
          return i.spec.trigger;
        })) != null ? _derivation$instances : []);
        var flushing = false;
        var batch = 0;
        function emit(category, type, parent, payload, sourceId, targetId) {
          var _parent$eventId, _parent$rootEventId;
          if (payload === void 0) {
            payload = {};
          }
          if (sourceId === void 0) {
            sourceId = null;
          }
          if (targetId === void 0) {
            targetId = null;
          }
          var sequence = events.length + 1;
          var eventId = f.battleId + ':' + sequence;
          var e = {
            eventId: eventId,
            battleId: f.battleId,
            roundId: state.roundId,
            sequence: sequence,
            parentEventId: (_parent$eventId = parent == null ? void 0 : parent.eventId) != null ? _parent$eventId : null,
            rootEventId: (_parent$rootEventId = parent == null ? void 0 : parent.rootEventId) != null ? _parent$rootEventId : eventId,
            phase: state.phase,
            category: category,
            type: type,
            sourceId: sourceId,
            targetId: targetId,
            payload: payload
          };
          events.push(e);
          if (derivation && triggerTypes.has(type)) acceptFact(derivation, e, seenFacts);
          return e;
        }
        function random() {
          state.rng = Math.imul(state.rng, 1664525) + 1013904223 >>> 0;
          return state.rng / Math.pow(2, 32);
        }
        var pipeline = f.combat ? combatPipeline(_extends({
          config: f.combat,
          state: state,
          emit: emit,
          random: random
        }, derivation ? {
          schedule: schedule,
          flush: flush
        } : {})) : undefined;
        if (pipeline) state.combat = pipeline.runtime;
        function enqueue(q) {
          var actor = q.snapshot.actor;
          if (!state.personal.has(actor)) {
            state.personal.set(actor, []);
            state.partyQueue.push(actor);
          }
          state.personal.get(actor).push(q);
        }
        function schedule(request, cause, actor) {
          derivation.requests.push({
            request: request,
            cause: cause,
            actor: actor,
            equipmentId: null
          });
        }
        function dispatch(command, cause) {
          var snapshot = Object.freeze(_extends({}, command));
          var deferred = state.phase === 'ENEMY_RESOLVE';
          var event = emit('FACT', 'COMMAND_ENQUEUED', cause, {
            snapshot: snapshot,
            deferred: deferred
          }, snapshot.actor);
          var q = {
            snapshot: snapshot,
            event: event
          };
          if (deferred) state.delayed.push(q);else enqueue(q);
        }
        function pendingState() {
          var _state$combat, _state$board, _derivation$instances2, _derivation$requests$;
          return _extends({
            phase: state.phase,
            rng: state.rng,
            partyHP: state.partyHP,
            enemies: state.enemies,
            marks: state.marks
          }, state.formal ? {
            formal: state.formal
          } : {}, {
            combat: (_state$combat = state.combat) != null ? _state$combat : null,
            board: (_state$board = state.board) != null ? _state$board : null,
            budgets: (_derivation$instances2 = derivation == null ? void 0 : derivation.instances.map(function (i) {
              return i.remaining;
            })) != null ? _derivation$instances2 : [],
            commands: state.partyQueue.map(function (id) {
              return [id, state.personal.get(id).map(function (q) {
                return q.snapshot;
              })];
            }),
            delayed: state.delayed.map(function (q) {
              return q.snapshot;
            }),
            requests: (_derivation$requests$ = derivation == null ? void 0 : derivation.requests.map(function (p) {
              return [p.actor, p.equipmentId, p.request];
            })) != null ? _derivation$requests$ : []
          });
        }
        function fail(message, parent, reason, fingerprint) {
          emit('LIFECYCLE', 'SIMULATION_FAILED', parent, {
            reason: reason,
            fingerprint: fingerprint
          });
          throw new SimulationError(message, structuredClone(state), events.slice());
        }
        function boardHasWork(start) {
          var visited = new Set();
          var name = start;
          while (name !== undefined) {
            var _step$commands, _step$marks;
            var step = Object.hasOwn(f.steps, name) ? f.steps[name] : undefined;
            // Broken definitions are delegated to the producer to emit its failure diagnostic.
            if (!step || visited.has(name)) return true;
            if ((_step$commands = step.commands) != null && _step$commands.length || step.match && (!bridge || bridge.canMatch(step.match)) || step.recover || (_step$marks = step.marks) != null && _step$marks.some(function (mark) {
              return state.marks.includes(mark);
            })) return true;
            visited.add(name);
            name = step.next;
          }
          return false;
        }
        function flush() {
          var seen, _instance$remaining, first, fingerprint, _ref4, request, cause, actor, equipmentId, instance, commit;
          return _regeneratorRuntime().wrap(function flush$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (!(!derivation || flushing)) {
                  _context.next = 2;
                  break;
                }
                return _context.abrupt("return");
              case 2:
                flushing = true;
                seen = new Set();
                _context.prev = 4;
              case 5:
                if (!derivation.requests.length) {
                  _context.next = 41;
                  break;
                }
                first = derivation.requests[0];
                fingerprint = hash(pendingState());
                if (seen.has(fingerprint)) fail('Repeated derived logical state', first.cause, 'repeated-derivation', fingerprint);
                seen.add(fingerprint);
                _ref4 = derivation.requests.shift(), request = _ref4.request, cause = _ref4.cause, actor = _ref4.actor, equipmentId = _ref4.equipmentId;
                instance = equipmentId === null ? undefined : equipmentById.get(equipmentId);
                if (!((instance == null ? void 0 : instance.remaining) === 0)) {
                  _context.next = 14;
                  break;
                }
                return _context.abrupt("continue", 5);
              case 14:
                if (!(request.kind === 'skill' && !Object.hasOwn(f.skills, request.command.skill))) {
                  _context.next = 16;
                  break;
                }
                throw new Error('Unknown derived skill');
              case 16:
                if (!(mode === 'scripted' && request.kind === 'board' && !Object.hasOwn(f.steps, request.step))) {
                  _context.next = 18;
                  break;
                }
                throw new Error('Unknown derived board step');
              case 18:
                if (!(mode === 'scripted' && instance && request.kind === 'board' && !boardHasWork(request.step))) {
                  _context.next = 20;
                  break;
                }
                return _context.abrupt("continue", 5);
              case 20:
                if (!(instance && request.kind === 'damage' && !pipeline.canTarget(request.strike.target))) {
                  _context.next = 22;
                  break;
                }
                return _context.abrupt("continue", 5);
              case 22:
                if (!(instance && request.kind === 'effect' && !pipeline.canInflict(request.effect))) {
                  _context.next = 24;
                  break;
                }
                return _context.abrupt("continue", 5);
              case 24:
                if ((instance == null ? void 0 : instance.remaining) != null) instance.remaining--;
                commit = emit('COMMAND', 'DERIVED_REQUEST_COMMITTED', cause, {
                  request: request,
                  equipmentId: equipmentId,
                  remaining: (_instance$remaining = instance == null ? void 0 : instance.remaining) != null ? _instance$remaining : null
                }, actor);
                _context.t0 = request.kind;
                _context.next = _context.t0 === 'skill' ? 29 : _context.t0 === 'board' ? 31 : _context.t0 === 'effect' ? 33 : _context.t0 === 'cleanse' ? 35 : _context.t0 === 'damage' ? 37 : 39;
                break;
              case 29:
                dispatch(request.command, commit);
                return _context.abrupt("break", 39);
              case 31:
                return _context.delegateYield(produce(request.step, commit), "t1", 32);
              case 32:
                return _context.abrupt("break", 39);
              case 33:
                pipeline.inflict(request.effect, commit, actor);
                return _context.abrupt("break", 39);
              case 35:
                pipeline.cleanse(request.owner, request.effect, commit);
                return _context.abrupt("break", 39);
              case 37:
                return _context.delegateYield(pipeline.derivedDamage(request.strike, commit, actor), "t2", 38);
              case 38:
                return _context.abrupt("break", 39);
              case 39:
                _context.next = 5;
                break;
              case 41:
                _context.prev = 41;
                flushing = false;
                return _context.finish(41);
              case 44:
              case "end":
                return _context.stop();
            }
          }, _marked, null, [[4,, 41, 44]]);
        }
        function register(start, parent) {
          var request = emit('COMMAND', 'BOARD_MUTATION_REQUESTED', parent, {
            start: start
          }, parent.sourceId);
          state.producers.push(request.eventId);
          return request;
        }
        function produce(start, parent) {
          var request, ticket, external, visited, seenBoard, name, wave, cause, _loop;
          return _regeneratorRuntime().wrap(function produce$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                request = register(start, parent);
                ticket = function ticket(step, wave) {
                  var _options$generation;
                  return Object.freeze(_extends({
                    battleId: f.battleId,
                    roomId: f.roomId,
                    generation: (_options$generation = options.generation) != null ? _options$generation : 0,
                    roundId: state.roundId,
                    phase: state.phase,
                    producerId: request.eventId,
                    parentEventId: parent.eventId,
                    boardVersion: boardVersion,
                    step: step
                  }, wave === undefined ? {} : {
                    wave: wave
                  }));
                };
                if (f.formal) {
                  _context3.next = 6;
                  break;
                }
                _context3.next = 5;
                return ticket(start);
              case 5:
                external = _context3.sent;
              case 6:
                visited = new Set();
                seenBoard = new Set();
                name = start;
                wave = 1;
                cause = request;
                _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
                  var _step$marks2, _ref6, _step$match$wave, _step$match;
                  var _external, key, step, removed, match, _ref5, matchedCommands, boardFacts, _i, _arr, _step$commands2, command, _f$rescue2, _f$strategy, _f$strategy2, rescueCompleted;
                  return _regeneratorRuntime().wrap(function _loop$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                      case 0:
                        if (!f.formal) {
                          _context2.next = 7;
                          break;
                        }
                        if (mode === 'external' && state.board) {
                          key = canonical([state.rng, state.marks, state.board.tiles.map(function (t) {
                            var _t$tier;
                            return [t.emblem, (_t$tier = t.tier) != null ? _t$tier : null];
                          })]);
                          if (seenBoard.has(key)) fail('Repeated formal board state', cause, 'repeated-board-state', key);
                          seenBoard.add(key);
                        }
                        _context2.next = 4;
                        return ticket(name, wave);
                      case 4:
                        external = _context2.sent;
                        if (!(((_external = external) == null ? void 0 : _external.size) === 0)) {
                          _context2.next = 7;
                          break;
                        }
                        return _context2.abrupt("return", 1);
                      case 7:
                        if (!(mode === 'external' && !external)) {
                          _context2.next = 9;
                          break;
                        }
                        throw new Error('External production requires BoardFacts');
                      case 9:
                        step = external ? external.get(name) : Object.hasOwn(f.steps, name) ? f.steps[name] : undefined;
                        if (!(!step || visited.has(name))) {
                          _context2.next = 13;
                          break;
                        }
                        emit('LIFECYCLE', 'BOARD_PRODUCER_FAILED', cause, {
                          producer: request.eventId,
                          step: name,
                          reason: step ? 'fixture-cycle' : 'missing-step'
                        });
                        throw new SimulationError('Invalid scripted board producer: ' + name, structuredClone(state), events.slice());
                      case 13:
                        visited.add(name);
                        removed = ((_step$marks2 = step.marks) != null ? _step$marks2 : []).filter(function (mark) {
                          return state.marks.includes(mark);
                        });
                        state.marks = state.marks.filter(function (mark) {
                          return !removed.includes(mark);
                        });
                        if (!step.recover) {
                          _context2.next = 21;
                          break;
                        }
                        if (bridge) {
                          _context2.next = 19;
                          break;
                        }
                        throw new Error('Recovery requires a BoardBridge');
                      case 19:
                        if (!bridge.recover(step.recover)) fail('No proposed recovery preserves the charged tiles and produces a legal board', cause, 'unresolved-board-recovery', hash(pendingState()));
                        cause = emit('FACT', 'BOARD_RECOVERED', cause, {
                          step: name
                        });
                      case 21:
                        match = step.match ? bridge == null ? void 0 : bridge.match(step.match) : undefined;
                        if (!(step.match && !match)) {
                          _context2.next = 24;
                          break;
                        }
                        throw new Error('Match requires a BoardBridge');
                      case 24:
                        _ref5 = match != null ? match : {
                          commands: []
                        }, matchedCommands = _ref5.commands, boardFacts = _objectWithoutPropertiesLoose(_ref5, _excluded);
                        cause = emit('FACT', 'MATCH_RESOLVED', cause, _extends({
                          producer: request.eventId,
                          step: name,
                          wave: (_ref6 = (_step$match$wave = (_step$match = step.match) == null ? void 0 : _step$match.wave) != null ? _step$match$wave : step.wave) != null ? _ref6 : null,
                          marksCleared: removed
                        }, boardFacts));
                        if (mode === 'external' && state.board) frames.set(cause.eventId, structuredClone({
                          board: state.board,
                          marks: state.marks
                        }));
                        if (derivation && step.redeliverFact) acceptFact(derivation, cause, seenFacts);
                        for (_i = 0, _arr = [].concat((_step$commands2 = step.commands) != null ? _step$commands2 : [], matchedCommands); _i < _arr.length; _i++) {
                          command = _arr[_i];
                          dispatch(command, cause);
                        }
                        if (!f.formal) {
                          _context2.next = 38;
                          break;
                        }
                        boardVersion++;
                        if (step.match) wave++;
                        return _context2.delegateYield(flush(), "t0", 33);
                      case 33:
                        rescueCompleted = !!((_f$rescue2 = f.rescue) != null && _f$rescue2.length) && !state.marks.length && (state.partyQueue.length > 0 || !!activeFormal);
                        if (!(rescueCompleted && !((_f$strategy = f.strategy) != null && _f$strategy.rescue) && state.partyHP > 0 && Object.values(state.enemies).some(function (hp) {
                          return hp > 0;
                        }))) {
                          _context2.next = 36;
                          break;
                        }
                        throw new SimulationError('Fixture must specify rescue policy with pending commands', structuredClone(state), events.slice());
                      case 36:
                        if (!(state.phase !== 'ENEMY_RESOLVE' && !flushing && !draining && !(rescueCompleted && ((_f$strategy2 = f.strategy) == null ? void 0 : _f$strategy2.rescue) === 'stop'))) {
                          _context2.next = 38;
                          break;
                        }
                        return _context2.delegateYield(formalTick(), "t1", 38);
                      case 38:
                        name = step.next;
                      case 39:
                      case "end":
                        return _context2.stop();
                    }
                  }, _loop);
                });
              case 12:
                if (!(name !== undefined)) {
                  _context3.next = 18;
                  break;
                }
                return _context3.delegateYield(_loop(), "t0", 14);
              case 14:
                if (!_context3.t0) {
                  _context3.next = 16;
                  break;
                }
                return _context3.abrupt("break", 18);
              case 16:
                _context3.next = 12;
                break;
              case 18:
                if (!f.formal) boardVersion++;
                state.producers.pop();
                return _context3.abrupt("return", emit('FACT', 'BOARD_STABILIZED', cause, {
                  producer: request.eventId
                }, parent.sourceId));
              case 21:
              case "end":
                return _context3.stop();
            }
          }, _marked2);
        }
        function hit(parent, target, raw, party) {
          if (party === void 0) {
            party = false;
          }
          var before = party ? state.partyHP : Object.hasOwn(state.enemies, target) ? state.enemies[target] : 0;
          var req = emit('COMMAND', 'HIT_REQUESTED', parent, {
            raw: raw
          }, parent.sourceId, target);
          var damage = Math.min(before, raw);
          var resolved = emit('FACT', 'HIT_RESOLVED', req, {
            before: before,
            damage: damage,
            validTarget: before > 0
          }, parent.sourceId, target);
          if (damage > 0) {
            if (party) state.partyHP -= damage;else state.enemies[target] -= damage;
            emit('FACT', 'DAMAGE_APPLIED', resolved, {
              damage: damage,
              remaining: before - damage
            }, parent.sourceId, target);
          }
        }
        function apply(delta, parent, typed) {
          var _parent$sourceId;
          var _iterator, _step, _delta$hits, entry;
          return _regeneratorRuntime().wrap(function apply$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                if (!(pipeline && (delta.partyDamage !== undefined || delta.hits || delta.randomDamage !== undefined))) {
                  _context4.next = 2;
                  break;
                }
                throw new Error('M2 requires typed strikes; legacy damage is only available in v1 fixtures');
              case 2:
                if (!typed) {
                  _context4.next = 4;
                  break;
                }
                return _context4.delegateYield(typed.apply(parent), "t0", 4);
              case 4:
                if (delta.partyDamage !== undefined) hit(parent, 'PARTY', delta.partyDamage, true);
                for (_iterator = _createForOfIteratorHelperLoose((_delta$hits = delta.hits) != null ? _delta$hits : []); !(_step = _iterator()).done;) {
                  entry = _step.value;
                  hit(parent, entry.enemy, entry.damage);
                }
                if (delta.randomDamage !== undefined) {
                  hit(parent, delta.variationTarget, Math.floor(random() * (delta.randomDamage + 1)));
                }
                if (!(delta.producer === undefined)) {
                  _context4.next = 9;
                  break;
                }
                return _context4.abrupt("return", parent);
              case 9:
                if (derivation) {
                  _context4.next = 12;
                  break;
                }
                return _context4.delegateYield(produce(delta.producer, parent), "t1", 11);
              case 11:
                return _context4.abrupt("return", _context4.t1);
              case 12:
                schedule({
                  kind: 'board',
                  step: delta.producer
                }, parent, (_parent$sourceId = parent.sourceId) != null ? _parent$sourceId : 'BOARD');
                return _context4.delegateYield(flush(), "t2", 14);
              case 14:
                return _context4.abrupt("return", parent);
              case 15:
              case "end":
                return _context4.stop();
            }
          }, _marked3);
        }
        function terminate(parent, phaseDrained) {
          var _f$rescue3, _f$strategy3;
          var enemiesDefeated = Object.values(state.enemies).every(function (hp) {
            return hp === 0;
          });
          var rescued = !!((_f$rescue3 = f.rescue) != null && _f$rescue3.length) && state.marks.length === 0;
          var dead = state.partyHP === 0;
          if (!enemiesDefeated && !rescued && !dead) return false;
          if (dead && (enemiesDefeated || rescued) && !((_f$strategy3 = f.strategy) != null && _f$strategy3.simultaneous)) {
            throw new SimulationError('Fixture must specify simultaneous terminal policy', structuredClone(state), events.slice());
          }
          if (rescued && !enemiesDefeated && !dead && !phaseDrained && (state.partyQueue.length || state.delayed.length)) {
            var _f$strategy4;
            if (!((_f$strategy4 = f.strategy) != null && _f$strategy4.rescue)) throw new SimulationError('Fixture must specify rescue policy with pending commands', structuredClone(state), events.slice());
            if (f.strategy.rescue === 'drain-phase') return false;
          }
          var outcome = dead ? enemiesDefeated || rescued ? f.strategy.simultaneous : 'lose' : 'win';
          state.result = Object.freeze({
            battleId: f.battleId,
            roomId: f.roomId,
            outcome: outcome,
            roundId: state.roundId
          });
          state.partyQueue.length = 0;
          state.personal.clear();
          state.delayed.length = 0;
          state.phase = 'TERMINATED';
          emit('FACT', 'BATTLE_TERMINATED', parent, {
            result: state.result,
            enemiesDefeated: enemiesDefeated,
            rescued: rescued,
            dead: dead
          });
          return true;
        }
        function beginFormal(q, actorBatch) {
          var _q$snapshot$tier;
          var cfg = f.formal,
            flags = state.formal,
            hp = cfg.enemies.map(function (e) {
              return state.enemies[e.id];
            }),
            dp = pipeline.runtime;
          var _formalSkill = formalSkill(cfg, q.snapshot, dp.partyDP >= dp.maxPartyDP, flags.rally, hp, flags.oath),
            skill = _formalSkill.skill,
            targets = _formalSkill.targets,
            attack = _formalSkill.attack;
          var cast = emit('LIFECYCLE', 'CAST_STARTED', q.event, {
            skill: q.snapshot.skill,
            name: skill.name,
            attack: attack,
            kind: skill.kind,
            targets: targets.map(function (i) {
              return cfg.enemies[i].id;
            }),
            tier: (_q$snapshot$tier = q.snapshot.tier) != null ? _q$snapshot$tier : null
          }, q.snapshot.actor);
          cues.push(Object.freeze({
            actor: q.snapshot.actor,
            castId: cast.eventId,
            batch: actorBatch
          }));
          if (derivation) emit('FACT', 'ON_CAST', cast, {
            skill: q.snapshot.skill
          }, q.snapshot.actor);
          return /*#__PURE__*/_regeneratorRuntime().mark(function resolveCast() {
            var gained, _cfg$buffs$overflow, amount, _amount, _iterator2, _step2, _cfg$enemies$target$a, _cfg$enemies$target$a2, target, id, damage, outcome, splash, hitTargets, segment, _iterator3, _step3, _ref7, _target, _id, raw, armor, magic, _damage, _outcome;
            return _regeneratorRuntime().wrap(function resolveCast$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  return _context5.delegateYield(flush(), "t0", 1);
                case 1:
                  if (skill.kind === 'rally') {
                    if (flags.oath && 'multiplier' in skill) {
                      applyBattleCry(flags.oath, skill.multiplier, skill.boost);
                      emit('FACT', 'BATTLE_CRY_APPLIED', cast, _extends({}, flags.oath), q.snapshot.actor);
                    } else flags.rally = true;
                  }
                  if (skill.kind === 'heal') {
                    if (flags.oath && 'cleanse' in skill && skill.cleanse) pipeline.cleanseOldestNegative(cast);
                    gained = Math.min(dp.maxPartyHP - state.partyHP, skill.amount);
                    state.partyHP += gained;
                    emit('FACT', 'HEAL_APPLIED', cast, {
                      amount: gained,
                      remainingHP: state.partyHP
                    }, q.snapshot.actor, 'PARTY');
                    if (!cfg.tutorial && cfg.gear.includes('healcore')) {
                      amount = Math.min(dp.maxPartyDP - dp.partyDP, Math.round((skill.amount - gained) * (.35 + .2 * ((_cfg$buffs$overflow = cfg.buffs.overflow) != null ? _cfg$buffs$overflow : 0))));
                      dp.partyDP += amount;
                      if (amount) emit('FACT', 'DP_RESTORED', cast, {
                        amount: amount,
                        remainingDP: dp.partyDP
                      }, q.snapshot.actor, 'PARTY');
                    }
                  }
                  if (!(skill.kind === 'guard')) {
                    _context5.next = 21;
                    break;
                  }
                  _amount = Math.min(dp.maxPartyDP - dp.partyDP, skill.amount);
                  dp.partyDP += _amount;
                  emit('FACT', 'DP_RESTORED', cast, {
                    amount: _amount,
                    remainingDP: dp.partyDP
                  }, q.snapshot.actor, 'PARTY');
                  if (flags.oath && 'resist' in skill && skill.resist) {
                    flags.oath.guard = true;
                    emit('FACT', 'PARTY_RESIST_APPLIED', cast, {
                      amount: .15
                    }, q.snapshot.actor, 'PARTY');
                  }
                  if (!(flags.oath && 'followup' in skill && skill.followup !== undefined)) {
                    _context5.next = 21;
                    break;
                  }
                  _iterator2 = _createForOfIteratorHelperLoose(targets);
                case 10:
                  if ((_step2 = _iterator2()).done) {
                    _context5.next = 21;
                    break;
                  }
                  target = _step2.value;
                  id = cfg.enemies[target].id;
                  if (!(state.enemies[id] <= 0)) {
                    _context5.next = 15;
                    break;
                  }
                  return _context5.abrupt("continue", 19);
                case 15:
                  damage = oathDamage(flags.oath, id, skill.followup, (_cfg$enemies$target$a = (_cfg$enemies$target$a2 = cfg.enemies[target].armor) == null ? void 0 : _cfg$enemies$target$a2.physical) != null ? _cfg$enemies$target$a : 0, false);
                  outcome = formalHit(cfg, target, state.enemies[id], damage, false);
                  state.enemies[id] -= outcome.lost;
                  emit('FACT', 'HIT_RESOLVED', cast, _extends({}, outcome, {
                    segment: 0,
                    remainingHP: state.enemies[id],
                    equipment: 'guardcore'
                  }), q.snapshot.actor, id);
                case 19:
                  _context5.next = 10;
                  break;
                case 21:
                  if (!(skill.kind === 'attack')) {
                    _context5.next = 49;
                    break;
                  }
                  flags.rally = false;
                  splash = 'splash' in skill ? skill.splash : undefined;
                  hitTargets = splash === undefined ? targets : targets.concat(hp.flatMap(function (n, i) {
                    return n > 0 && !targets.includes(i) ? [i] : [];
                  }));
                  if (flags.oath && targets.some(function (i) {
                    return state.enemies[cfg.enemies[i].id] > 0;
                  })) flags.oath.rally = 1;
                  segment = 0;
                case 27:
                  if (!(segment < skill.hits)) {
                    _context5.next = 49;
                    break;
                  }
                  _iterator3 = _createForOfIteratorHelperLoose(hitTargets);
                case 29:
                  if ((_step3 = _iterator3()).done) {
                    _context5.next = 46;
                    break;
                  }
                  _target = _step3.value;
                  _id = cfg.enemies[_target].id;
                  if (!(state.enemies[_id] <= 0)) {
                    _context5.next = 34;
                    break;
                  }
                  return _context5.abrupt("continue", 44);
                case 34:
                  raw = targets.includes(_target) ? skill.damage : splash;
                  armor = cfg.enemies[_target].armor;
                  magic = q.snapshot.emblem === 'm';
                  _damage = flags.oath ? oathDamage(flags.oath, _id, raw, (_ref7 = magic ? armor == null ? void 0 : armor.magic : armor == null ? void 0 : armor.physical) != null ? _ref7 : 0, magic) : raw;
                  _outcome = formalHit(cfg, _target, state.enemies[_id], _damage, skill.stun);
                  state.enemies[_id] -= _outcome.lost;
                  if (flags.oath && 'shred' in skill && skill.shred && state.enemies[_id] > 0) {
                    flags.oath.shred[_id] = state.roundId + 1;
                    emit('FACT', 'PHYSICAL_SHRED_APPLIED', cast, {
                      expiresAfterRound: state.roundId + 1
                    }, q.snapshot.actor, _id);
                  }
                  if (flags.oath && 'weaken' in skill && skill.weaken && state.enemies[_id] > 0 && !flags.oath.weaken.includes(_id)) {
                    flags.oath.weaken.push(_id);
                    emit('FACT', 'ENEMY_WEAKENED', cast, {
                      amount: .2
                    }, q.snapshot.actor, _id);
                  }
                  if (_outcome.stunned && !flags.stunned.includes(_id)) flags.stunned.push(_id);
                  emit('FACT', 'HIT_RESOLVED', cast, _extends({}, _outcome, {
                    segment: segment,
                    remainingHP: state.enemies[_id]
                  }), q.snapshot.actor, _id);
                case 44:
                  _context5.next = 29;
                  break;
                case 46:
                  segment++;
                  _context5.next = 27;
                  break;
                case 49:
                  return _context5.abrupt("return", emit('LIFECYCLE', 'CAST_COMPLETED', cast, {
                    castId: cast.eventId
                  }, q.snapshot.actor));
                case 50:
                case "end":
                  return _context5.stop();
              }
            }, resolveCast);
          });
        }
        var activeFormal;
        var formalActor;
        var formalBatch = 0;
        function formalTick() {
          var done, _f$rescue4, _f$strategy5, actor, queue;
          return _regeneratorRuntime().wrap(function formalTick$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
              case 0:
                draining = true;
                _context6.prev = 1;
                if (!activeFormal) {
                  _context6.next = 6;
                  break;
                }
                return _context6.delegateYield(activeFormal(), "t0", 4);
              case 4:
                done = _context6.t0;
                activeFormal = undefined;
              case 6:
                if (!state.partyQueue.length) {
                  _context6.next = 22;
                  break;
                }
                actor = state.partyQueue[0];
                queue = state.personal.get(actor);
                if (queue.length) {
                  _context6.next = 14;
                  break;
                }
                state.personal["delete"](actor);
                state.partyQueue.shift();
                formalActor = undefined;
                return _context6.abrupt("continue", 6);
              case 14:
                if (!(state.partyHP === 0 || Object.values(state.enemies).every(function (hp) {
                  return hp === 0;
                }) || !!((_f$rescue4 = f.rescue) != null && _f$rescue4.length) && !state.marks.length && ((_f$strategy5 = f.strategy) == null ? void 0 : _f$strategy5.rescue) === 'stop')) {
                  _context6.next = 17;
                  break;
                }
                queue.length = 0;
                return _context6.abrupt("continue", 6);
              case 17:
                if (formalActor !== actor) {
                  formalActor = actor;
                  formalBatch = ++batch;
                }
                activeFormal = beginFormal(queue.shift(), formalBatch);
                return _context6.abrupt("break", 22);
              case 22:
                return _context6.abrupt("return", done);
              case 23:
                _context6.prev = 23;
                draining = false;
                return _context6.finish(23);
              case 26:
              case "end":
                return _context6.stop();
            }
          }, _marked4, null, [[1,, 23, 26]]);
        }
        function drainFormal(root, checkTerminal) {
          var seen, cause, _yield$formalTick, fingerprint;
          return _regeneratorRuntime().wrap(function drainFormal$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
              case 0:
                seen = new Set();
                cause = root;
              case 2:
                if (!(activeFormal || state.partyQueue.length)) {
                  _context7.next = 16;
                  break;
                }
                fingerprint = hash({
                  pending: pendingState(),
                  cast: activeFormal !== undefined
                });
                if (seen.has(fingerprint)) fail('Repeated formal actor state', cause, 'repeated-formal-actor', fingerprint);
                seen.add(fingerprint);
                return _context7.delegateYield(formalTick(), "t0", 7);
              case 7:
                _context7.t1 = _yield$formalTick = _context7.t0;
                if (!(_context7.t1 != null)) {
                  _context7.next = 12;
                  break;
                }
                _context7.t2 = _yield$formalTick;
                _context7.next = 13;
                break;
              case 12:
                _context7.t2 = cause;
              case 13:
                cause = _context7.t2;
                _context7.next = 2;
                break;
              case 16:
                return _context7.abrupt("return", checkTerminal && terminate(cause, true));
              case 17:
              case "end":
                return _context7.stop();
            }
          }, _marked5);
        }
        var draining = false;
        function drain(root, checkTerminal) {
          if (checkTerminal === void 0) {
            checkTerminal = true;
          }
          return /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var seen, actor, queue, actorBatch, _state$combat2, _trial$action, fingerprint, q, skill, trial, resolvedSkill, typed, cast, applied, _iterator4, _step4, _trial$requests, _request, done;
            return _regeneratorRuntime().wrap(function _callee$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
                case 0:
                  if (!f.formal) {
                    _context8.next = 3;
                    break;
                  }
                  return _context8.delegateYield(drainFormal(root, checkTerminal), "t0", 2);
                case 2:
                  return _context8.abrupt("return", _context8.t0);
                case 3:
                  seen = new Set();
                  draining = true;
                  _context8.prev = 5;
                case 6:
                  if (!state.partyQueue.length) {
                    _context8.next = 43;
                    break;
                  }
                  actor = state.partyQueue[0];
                  queue = state.personal.get(actor);
                  actorBatch = ++batch;
                case 10:
                  if (!queue.length) {
                    _context8.next = 37;
                    break;
                  }
                  fingerprint = derivation ? hash(pendingState()) : hash({
                    rng: state.rng,
                    partyHP: state.partyHP,
                    enemies: state.enemies,
                    marks: state.marks,
                    combat: (_state$combat2 = state.combat) != null ? _state$combat2 : null,
                    equipmentUses: state.equipmentUses,
                    pending: state.partyQueue.map(function (id) {
                      return [id, state.personal.get(id).map(function (q) {
                        return q.snapshot;
                      })];
                    })
                  });
                  if (!seen.has(fingerprint)) {
                    _context8.next = 15;
                    break;
                  }
                  emit('LIFECYCLE', 'SIMULATION_FAILED', queue[0].event, {
                    reason: 'repeated-logical-state',
                    fingerprint: fingerprint
                  });
                  throw new SimulationError('Repeated scripted logical state', structuredClone(state), events.slice());
                case 15:
                  seen.add(fingerprint);
                  q = queue.shift();
                  skill = Object.hasOwn(f.skills, q.snapshot.skill) ? f.skills[q.snapshot.skill] : undefined;
                  if (skill) {
                    _context8.next = 20;
                    break;
                  }
                  throw new SimulationError('Unknown scripted skill: ' + q.snapshot.skill, structuredClone(state), events.slice());
                case 20:
                  trial = f.experiment && pipeline ? experimentAction(f.experiment, q.snapshot, skill, pipeline.runtime, state.enemies) : undefined;
                  resolvedSkill = (_trial$action = trial == null ? void 0 : trial.action) != null ? _trial$action : skill;
                  typed = pipeline == null ? void 0 : pipeline.cast(actor, resolvedSkill, false, q.snapshot);
                  cast = emit('LIFECYCLE', 'CAST_STARTED', q.event, _extends({
                    skill: q.snapshot.skill
                  }, typed ? {
                    snapshot: typed.snapshot
                  } : {}), actor);
                  cues.push(Object.freeze({
                    actor: actor,
                    castId: cast.eventId,
                    batch: actorBatch
                  }));
                  if (derivation) emit('FACT', 'ON_CAST', cast, {
                    skill: q.snapshot.skill
                  }, actor);
                  return _context8.delegateYield(apply(skill, cast, typed), "t1", 27);
                case 27:
                  applied = _context8.t1;
                  for (_iterator4 = _createForOfIteratorHelperLoose((_trial$requests = trial == null ? void 0 : trial.requests) != null ? _trial$requests : []); !(_step4 = _iterator4()).done;) {
                    _request = _step4.value;
                    schedule(_request, cast, actor);
                  }
                  return _context8.delegateYield(flush(), "t2", 30);
                case 30:
                  done = emit('LIFECYCLE', 'CAST_COMPLETED', applied, {
                    castId: cast.eventId
                  }, actor); // Empty active reservation alone isn't pending work.
                  if (!(checkTerminal && terminate(done, !queue.length && state.partyQueue.length === 1))) {
                    _context8.next = 33;
                    break;
                  }
                  return _context8.abrupt("return", true);
                case 33:
                  if (!(!checkTerminal && (state.partyHP === 0 || Object.values(state.enemies).every(function (hp) {
                    return hp === 0;
                  })))) {
                    _context8.next = 35;
                    break;
                  }
                  return _context8.abrupt("return", false);
                case 35:
                  _context8.next = 10;
                  break;
                case 37:
                  if (!(!f.formal && state.producers.length)) {
                    _context8.next = 39;
                    break;
                  }
                  throw new Error('Actor cannot leave with an open producer');
                case 39:
                  state.personal["delete"](actor);
                  state.partyQueue.shift();
                  _context8.next = 6;
                  break;
                case 43:
                  return _context8.abrupt("return", checkTerminal && terminate(root, true));
                case 44:
                  _context8.prev = 44;
                  draining = false;
                  return _context8.finish(44);
                case 47:
                case "end":
                  return _context8.stop();
              }
            }, _callee, null, [[5,, 44, 47]]);
          })();
        }
        function advance(inputs) {
          var _loop2, _ret, _iterator5, _step5;
          return _regeneratorRuntime().wrap(function advance$(_context11) {
            while (1) switch (_context11.prev = _context11.next) {
              case 0:
                _loop2 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop2() {
                  var _state$formal;
                  var input, _f$combat, receiptId, amount, _iterator6, _step6, _i$spec$limit, i, root, swap, playerDone, enemy, enemyDone, _iterator7, _step7, _f$enemyActions, entry, typed, cast, applied, dp, flags, attack, _iterator8, _step8, _step8$value, id, skip, chance, counter, _iterator9, _step9, q, end, endDone;
                  return _regeneratorRuntime().wrap(function _loop2$(_context10) {
                    while (1) switch (_context10.prev = _context10.next) {
                      case 0:
                        input = _step5.value;
                        if (!state.result) {
                          _context10.next = 3;
                          break;
                        }
                        return _context10.abrupt("return", 0);
                      case 3:
                        if (!('roomEnd' in input)) {
                          _context10.next = 9;
                          break;
                        }
                        if (!(!pipeline || pipeline.runtime.roomEnded)) {
                          _context10.next = 6;
                          break;
                        }
                        return _context10.abrupt("return", 1);
                      case 6:
                        recorded.push({
                          roomEnd: true
                        });
                        pipeline.roomEnd(emit('LIFECYCLE', 'ROOM_ENDED', null, {}));
                        return _context10.abrupt("return", 0);
                      case 9:
                        if (!('potion' in input)) {
                          _context10.next = 19;
                          break;
                        }
                        receiptId = input.potion.receiptId;
                        if (!(!pipeline || ((_f$combat = f.combat) == null ? void 0 : _f$combat.maxPartyHP) === undefined || state.phase !== 'PLAYER_INPUT' || state.partyHP <= 0 || state.partyHP >= pipeline.runtime.maxPartyHP || typeof receiptId !== 'string' || !receiptId.trim() || potionReceipts.has(receiptId))) {
                          _context10.next = 13;
                          break;
                        }
                        return _context10.abrupt("return", 1);
                      case 13:
                        amount = Math.min(45, pipeline.runtime.maxPartyHP - state.partyHP);
                        recorded.push({
                          potion: {
                            receiptId: receiptId
                          }
                        });
                        potionReceipts.add(receiptId);
                        state.partyHP += amount;
                        emit('FACT', 'POTION_APPLIED', null, {
                          receiptId: receiptId,
                          amount: amount,
                          remainingHP: state.partyHP
                        }, 'PARTY', 'PARTY');
                        return _context10.abrupt("return", 1);
                      case 19:
                        recorded.push({
                          swap: input.swap
                        });
                        if (Object.hasOwn(f.swaps, input.swap)) {
                          _context10.next = 23;
                          break;
                        }
                        emit('FACT', 'SWAP_REJECTED', null, {
                          swap: input.swap
                        });
                        return _context10.abrupt("return", 1);
                      case 23:
                        state.phase = 'ROUND_START';
                        state.roundId++;
                        state.equipmentUses = {};
                        if (derivation) {
                          for (_iterator6 = _createForOfIteratorHelperLoose(derivation.instances); !(_step6 = _iterator6()).done;) {
                            i = _step6.value;
                            i.remaining = (_i$spec$limit = i.spec.limit) != null ? _i$spec$limit : null;
                          }
                        }
                        root = emit('LIFECYCLE', 'ROUND_STARTED', null);
                        swap = emit('FACT', 'SWAP_COMMITTED', root, {
                          swap: input.swap
                        });
                        state.phase = 'PLAYER_RESOLVE';
                        return _context10.delegateYield(produce(f.swaps[input.swap], swap), "t0", 31);
                      case 31:
                        playerDone = _context10.t0;
                        return _context10.delegateYield(flush(), "t1", 33);
                      case 33:
                        if (!f.formal) {
                          _context10.next = 38;
                          break;
                        }
                        return _context10.delegateYield(drain(playerDone), "t3", 35);
                      case 35:
                        _context10.t2 = _context10.t3;
                        _context10.next = 43;
                        break;
                      case 38:
                        _context10.t4 = terminate(playerDone, false);
                        if (_context10.t4) {
                          _context10.next = 42;
                          break;
                        }
                        return _context10.delegateYield(drain(playerDone), "t5", 41);
                      case 41:
                        _context10.t4 = _context10.t5;
                      case 42:
                        _context10.t2 = _context10.t4;
                      case 43:
                        if (!_context10.t2) {
                          _context10.next = 45;
                          break;
                        }
                        return _context10.abrupt("return", 1);
                      case 45:
                        state.phase = 'ENEMY_RESOLVE';
                        enemy = emit('LIFECYCLE', 'ENEMY_PHASE_STARTED', root, {}, 'ENEMY');
                        if (!f.enemy) {
                          _context10.next = 52;
                          break;
                        }
                        return _context10.delegateYield(apply(f.enemy, enemy, pipeline == null ? void 0 : pipeline.cast('ENEMY', f.enemy, true)), "t7", 49);
                      case 49:
                        _context10.t6 = _context10.t7;
                        _context10.next = 53;
                        break;
                      case 52:
                        _context10.t6 = enemy;
                      case 53:
                        enemyDone = _context10.t6;
                        return _context10.delegateYield(flush(), "t8", 55);
                      case 55:
                        if (!terminate(enemyDone, false)) {
                          _context10.next = 57;
                          break;
                        }
                        return _context10.abrupt("return", 1);
                      case 57:
                        _iterator7 = _createForOfIteratorHelperLoose((_f$enemyActions = f.enemyActions) != null ? _f$enemyActions : []);
                      case 58:
                        if ((_step7 = _iterator7()).done) {
                          _context10.next = 75;
                          break;
                        }
                        entry = _step7.value;
                        if (pipeline) {
                          _context10.next = 62;
                          break;
                        }
                        throw new Error('Enemy actions require combat configuration');
                      case 62:
                        if (pipeline.opportunity(entry.actor, enemy)) {
                          _context10.next = 64;
                          break;
                        }
                        return _context10.abrupt("continue", 73);
                      case 64:
                        typed = pipeline.cast(entry.actor, entry.action, true);
                        cast = emit('LIFECYCLE', 'CAST_STARTED', enemy, {
                          skill: 'enemy-action',
                          snapshot: typed.snapshot
                        }, entry.actor);
                        if (derivation) emit('FACT', 'ON_CAST', cast, {
                          skill: 'enemy-action'
                        }, entry.actor);
                        return _context10.delegateYield(apply(entry.action, cast, typed), "t9", 68);
                      case 68:
                        applied = _context10.t9;
                        return _context10.delegateYield(flush(), "t10", 70);
                      case 70:
                        enemyDone = emit('LIFECYCLE', 'CAST_COMPLETED', applied, {
                          castId: cast.eventId
                        }, entry.actor);
                        if (!terminate(enemyDone, false)) {
                          _context10.next = 73;
                          break;
                        }
                        return _context10.abrupt("break", 75);
                      case 73:
                        _context10.next = 58;
                        break;
                      case 75:
                        if (!f.formal) {
                          _context10.next = 85;
                          break;
                        }
                        dp = pipeline.runtime, flags = state.formal;
                        attack = formalEnemy(f.formal, state.enemies, flags.stunned, state.partyHP, dp.partyDP, flags.oath);
                        for (_iterator8 = _createForOfIteratorHelperLoose(attack.opportunities); !(_step8 = _iterator8()).done;) {
                          _step8$value = _step8.value, id = _step8$value.id, skip = _step8$value.skip;
                          chance = emit('LIFECYCLE', 'ACTION_OPPORTUNITY', enemy, {}, id, id);
                          if (skip) emit('FACT', 'ACTION_SKIPPED', chance, {
                            reason: 'stun'
                          }, id, id);
                        }
                        flags.stunned.length = 0;
                        dp.partyDP -= attack.absorbed;
                        state.partyHP -= attack.lost;
                        enemyDone = emit('FACT', 'ENEMY_AGGREGATE_RESOLVED', enemy, _extends({}, attack, {
                          remainingHP: state.partyHP,
                          remainingDP: dp.partyDP
                        }), 'ENEMY', 'PARTY');
                        if (!terminate(enemyDone, false)) {
                          _context10.next = 85;
                          break;
                        }
                        return _context10.abrupt("return", 1);
                      case 85:
                        if (!state.result) {
                          _context10.next = 87;
                          break;
                        }
                        return _context10.abrupt("return", 1);
                      case 87:
                        state.phase = 'PLAYER_COUNTER';
                        counter = emit('LIFECYCLE', 'COUNTER_PHASE_STARTED', enemyDone);
                        for (_iterator9 = _createForOfIteratorHelperLoose(state.delayed.splice(0)); !(_step9 = _iterator9()).done;) {
                          q = _step9.value;
                          enqueue(q);
                        }
                        return _context10.delegateYield(drain(counter), "t11", 91);
                      case 91:
                        if (!_context10.t11) {
                          _context10.next = 93;
                          break;
                        }
                        return _context10.abrupt("return", 1);
                      case 93:
                        state.phase = 'ROUND_END';
                        end = emit('LIFECYCLE', 'ROUND_END_STARTED', root);
                        if (!f.roundEnd) {
                          _context10.next = 100;
                          break;
                        }
                        return _context10.delegateYield(apply(f.roundEnd, end, pipeline == null ? void 0 : pipeline.cast('ROUND_END', f.roundEnd, true)), "t13", 97);
                      case 97:
                        _context10.t12 = _context10.t13;
                        _context10.next = 101;
                        break;
                      case 100:
                        _context10.t12 = end;
                      case 101:
                        endDone = _context10.t12;
                        if (!pipeline) {
                          _context10.next = 104;
                          break;
                        }
                        return _context10.delegateYield(pipeline.roundEnd(endDone, derivation ? /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                          return _regeneratorRuntime().wrap(function _callee2$(_context9) {
                            while (1) switch (_context9.prev = _context9.next) {
                              case 0:
                                return _context9.delegateYield(flush(), "t0", 1);
                              case 1:
                                if (!(state.partyHP > 0 && Object.values(state.enemies).some(function (hp) {
                                  return hp > 0;
                                }))) {
                                  _context9.next = 3;
                                  break;
                                }
                                return _context9.delegateYield(drain(endDone, false), "t1", 3);
                              case 3:
                              case "end":
                                return _context9.stop();
                            }
                          }, _callee2);
                        }) : undefined), "t14", 104);
                      case 104:
                        if (!terminate(endDone, true)) {
                          _context10.next = 106;
                          break;
                        }
                        return _context10.abrupt("return", 1);
                      case 106:
                        if ((_state$formal = state.formal) != null && _state$formal.oath) endOathRound(state.formal.oath, state.roundId);
                        emit('LIFECYCLE', 'ROUND_ENDED', endDone);
                        state.phase = 'PLAYER_INPUT';
                      case 109:
                      case "end":
                        return _context10.stop();
                    }
                  }, _loop2);
                });
                _iterator5 = _createForOfIteratorHelperLoose(inputs);
              case 2:
                if ((_step5 = _iterator5()).done) {
                  _context11.next = 11;
                  break;
                }
                return _context11.delegateYield(_loop2(), "t0", 4);
              case 4:
                _ret = _context11.t0;
                if (!(_ret === 0)) {
                  _context11.next = 7;
                  break;
                }
                return _context11.abrupt("break", 11);
              case 7:
                if (!(_ret === 1)) {
                  _context11.next = 9;
                  break;
                }
                return _context11.abrupt("continue", 9);
              case 9:
                _context11.next = 2;
                break;
              case 11:
              case "end":
                return _context11.stop();
            }
          }, _marked6);
        }
        var pending;
        var iterator;
        var closed = false,
          disposition = 'active';
        function resume(facts) {
          try {
            var step = iterator.next(facts);
            pending = step.done ? undefined : step.value;
            if (step.done) {
              iterator = undefined;
              if (state.result) disposition = 'terminal';
            }
            return pending;
          } catch (error) {
            if (mode === 'external') {
              var _events$at, _pending$producerId, _pending;
              var cause = (_events$at = events.at(-1)) != null ? _events$at : null;
              emit('LIFECYCLE', 'CONTINUATION_FAILED', cause, {
                reason: String(error),
                boardVersion: boardVersion,
                producer: (_pending$producerId = (_pending = pending) == null ? void 0 : _pending.producerId) != null ? _pending$producerId : null
              });
            }
            disposition = 'failed';
            closed = true;
            pending = undefined;
            iterator = undefined;
            activeFormal = undefined;
            throw error;
          }
        }
        function validateTicket(ticket) {
          if (closed || !pending || Object.keys(pending).some(function (key) {
            var k = key;
            return pending[k] !== ticket[k];
          })) throw new Error('Stale or out-of-order board ticket');
        }
        function seal(reason) {
          if (closed || state.result) return false;
          disposition = 'cancelled';
          if (!pending) {
            closed = true;
            return true;
          }
          var parent = events.find(function (e) {
            return e.eventId === pending.producerId;
          });
          emit('LIFECYCLE', 'BOARD_PRODUCER_CANCELLED', parent, {
            producer: pending.producerId,
            reason: reason
          });
          closed = true;
          pending = undefined;
          iterator = undefined;
          activeFormal = undefined;
          return true;
        }
        return {
          submit: function submit(input) {
            if (iterator) throw new Error('Board producer still open');
            if (closed || state.result) return undefined;
            if ('roomEnd' in input && pipeline) {
              closed = true;
              disposition = 'room-ended';
            }
            iterator = advance([input]);
            return resume();
          },
          acceptsBoardTicket: function acceptsBoardTicket(ticket) {
            try {
              validateTicket(ticket);
              return true;
            } catch (_unused) {
              return false;
            }
          },
          resolveScriptedBoard: function resolveScriptedBoard(ticket) {
            validateTicket(ticket);
            if (mode !== 'scripted') throw new Error('External production requires BoardFacts');
            return resume();
          },
          commitBoardFacts: function commitBoardFacts(ticket, facts) {
            var _ticket$wave;
            validateTicket(ticket);
            if (mode !== 'external') throw new Error('Scripted production cannot accept BoardFacts');
            if (!bridge || !state.board || !f.board) throw new Error('External production requires a logical board');
            if (facts.version !== boardVersion) throw new Error('Board version conflict');
            var candidate = structuredClone(facts.steps);
            var next = ticket.step;
            var checked = new Map();
            var preview = {
              tiles: structuredClone(state.board.tiles)
            };
            var seed = state.rng;
            var staged = createBoardBridge(f.board, preview, function () {
              return (seed = Math.imul(seed, 1664525) + 1013904223 >>> 0) / Math.pow(2, 32);
            });
            var marks = new Set(state.marks);
            if (f.formal && candidate.length > 1) throw Error('Formal ticket accepts one wave');
            var wave = ((_ticket$wave = ticket.wave) != null ? _ticket$wave : 1) - 1;
            for (var _iterator10 = _createForOfIteratorHelperLoose(candidate), _step10; !(_step10 = _iterator10()).done;) {
              var _step$marks4;
              var _step10$value = _step10.value,
                id = _step10$value.id,
                step = _step10$value.step;
              if (id !== next || checked.has(id) || step.commands || step.redeliverFact || !step.match && !step.recover || step.match && step.recover) throw new Error('Invalid board fact sequence or untrusted command');
              if (step.match) {
                if (step.match.wave !== ++wave || wave !== 1 && step.match.swap || !staged.canMatch(step.match)) throw new Error('Invalid match wave');
                var match = staged.match(step.match);
                var _loop3 = function _loop3() {
                  var mark = _step11.value;
                  if (!marks["delete"](mark) || !match.removed.some(function (index) {
                    return String(index) === mark;
                  })) throw new Error('Invalid rescue mark');
                };
                for (var _iterator11 = _createForOfIteratorHelperLoose((_step$marks3 = step.marks) != null ? _step$marks3 : []), _step11; !(_step11 = _iterator11()).done;) {
                  var _step$marks3;
                  _loop3();
                }
              } else if ((_step$marks4 = step.marks) != null && _step$marks4.length || !staged.recover(step.recover)) throw new Error('Invalid board recovery');
              checked.set(id, step);
              next = step.next;
            }
            var unstable = matches(preview.tiles.map(function (tile) {
              return tile.emblem;
            })).length > 0;
            if (f.formal ? !checked.size ? ticket.wave === 1 || unstable || !legalMove(preview.tiles.map(function (t) {
              return t.emblem;
            })) : next === undefined && (unstable || !legalMove(preview.tiles.map(function (t) {
              return t.emblem;
            }))) : !checked.size || next !== undefined || unstable) throw new Error('Incomplete board facts');
            validateTicket(ticket);
            if (facts.version !== boardVersion) throw new Error('Board version conflict');
            replayBoards.push({
              ticket: structuredClone(ticket),
              facts: {
                version: boardVersion,
                steps: candidate
              }
            });
            return resume(checked);
          },
          failBoard: function failBoard(ticket, reason) {
            validateTicket(ticket);
            var parent = events.find(function (e) {
              return e.eventId === ticket.producerId;
            });
            emit('LIFECYCLE', 'BOARD_PRODUCER_FAILED', parent, {
              producer: ticket.producerId,
              reason: reason,
              boardVersion: boardVersion
            });
            disposition = 'failed';
            closed = true;
            pending = undefined;
            iterator = undefined;
            activeFormal = undefined;
          },
          get disposition() {
            return disposition;
          },
          cancel: function cancel(reason) {
            if (reason === void 0) {
              reason = 'session-cancelled';
            }
            return seal(reason);
          },
          get boardVersion() {
            return boardVersion;
          },
          acknowledgePresentation: function acknowledgePresentation(eventId) {
            var event = events[presented];
            if (!event || event.eventId !== eventId) return false;
            presented++;
            frames["delete"](eventId);
            return true;
          },
          boardReplay: function boardReplay() {
            return structuredClone(replayBoards);
          },
          frame: function frame(eventId) {
            var frame = frames.get(eventId);
            return frame && structuredClone(frame);
          },
          snapshot: function snapshot() {
            var snapshot = _extends({}, state, {
              personal: Array.from(state.personal)
            });
            return structuredClone({
              version: f.experiment ? 4 : derivation ? 3 : pipeline ? 2 : 1,
              fixture: f,
              inputs: recorded,
              events: events,
              cues: cues,
              state: snapshot,
              result: state.result
            });
          }
        };
      }
      var SimulationError = exports('SimulationError', /*#__PURE__*/function (_Error) {
        _inheritsLoose(SimulationError, _Error);
        function SimulationError(message, state, events) {
          var _this;
          _this = _Error.call(this, message) || this;
          _this.state = void 0;
          _this.events = void 0;
          _this.state = state;
          _this.events = events;
          return _this;
        }
        return SimulationError;
      }( /*#__PURE__*/_wrapNativeSuper(Error)));

      // The presenter receives a stable cast journal. Early receipts are buffered by
      // ID; exposing the next actor batch requires all receipts of the current batch.
      var PresentationBarrier = exports('PresentationBarrier', /*#__PURE__*/function () {
        function PresentationBarrier(cues) {
          this.waiting = new Set();
          this.acknowledged = new Set();
          this.offset = 0;
          this.cues = void 0;
          this.cues = cues;
          this.expose();
        }
        var _proto = PresentationBarrier.prototype;
        _proto.signal = function signal(castId) {
          if (!this.cues.some(function (cue) {
            return cue.castId === castId;
          }) || this.acknowledged.has(castId)) return false;
          this.acknowledged.add(castId);
          if (this.waiting["delete"](castId) && !this.waiting.size) this.expose();
          return true;
        };
        _proto.expose = function expose() {
          while (this.offset < this.cues.length && !this.waiting.size) {
            var batch = this.cues[this.offset].batch;
            while (((_this$cues$this$offse = this.cues[this.offset]) == null ? void 0 : _this$cues$this$offse.batch) === batch) {
              var _this$cues$this$offse;
              var castId = this.cues[this.offset++].castId;
              if (!this.acknowledged.has(castId)) this.waiting.add(castId);
            }
          }
        };
        _createClass(PresentationBarrier, [{
          key: "complete",
          get: function get() {
            return this.offset === this.cues.length && !this.waiting.size;
          }
        }, {
          key: "active",
          get: function get() {
            return [].concat(this.waiting);
          }
        }]);
        return PresentationBarrier;
      }());

      // Caller owns the session ledger. No callbacks mutate economy or room state.
      var TerminalDelivery = exports('TerminalDelivery', /*#__PURE__*/function () {
        function TerminalDelivery() {
          this.delivered = new Set();
        }
        var _proto2 = TerminalDelivery.prototype;
        _proto2.take = function take(result) {
          if (!result) return null;
          var key = JSON.stringify([result.battleId, result.roomId]);
          if (this.delivered.has(key)) return null;
          this.delivered.add(key);
          return result;
        };
        return TerminalDelivery;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BattleMotion.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "64e01yiOGhCRqNl771/UV3F", "BattleMotion", undefined);
      var BattleMotion = exports('BattleMotion', /*#__PURE__*/function () {
        function BattleMotion() {
          this.pending = new Map();
          this.paused = false;
          this.cancelListeners = new Set();
          this.idleWaiters = new Set();
          this.cancelled = false;
          this.reduced = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
        }
        var _proto = BattleMotion.prototype;
        _proto.onCancel = function onCancel(listener) {
          var _this = this;
          if (this.cancelled) {
            listener();
            return function () {};
          }
          this.cancelListeners.add(listener);
          return function () {
            _this.cancelListeners["delete"](listener);
          };
        };
        _proto.whenIdle = function whenIdle() {
          var _this2 = this;
          if (this.cancelled) return Promise.resolve(false);
          if (!this.pending.size) return Promise.resolve(true);
          return new Promise(function (resolve) {
            return _this2.idleWaiters.add(resolve);
          });
        };
        _proto.releaseIdle = function releaseIdle(ok) {
          if (ok && this.pending.size) return;
          this.idleWaiters.forEach(function (resolve) {
            return resolve(ok);
          });
          this.idleWaiters.clear();
        };
        _proto.duration = function duration(seconds) {
          return this.reduced ? Math.min(seconds, .001) : seconds;
        };
        _proto.play = function play(motion) {
          var _this3 = this;
          if (this.cancelled || this.pending.has(motion)) return Promise.resolve(false);
          return new Promise(function (resolve) {
            _this3.pending.set(motion, resolve);
            motion.call(function () {
              if (_this3.cancelled || !_this3.pending["delete"](motion)) return;
              resolve(true);
              _this3.releaseIdle(true);
            }).start();
            if (_this3.paused) motion.pause();
          });
        }

        /** Stop one owned presentation, including its receipt; the session stays valid. */;
        _proto.stop = function stop(motion) {
          var resolve = this.pending.get(motion);
          if (!resolve) return false;
          this.pending["delete"](motion);
          motion.stop();
          resolve(false);
          this.releaseIdle(true);
          return true;
        };
        _proto.pause = function pause() {
          this.paused = true;
          this.pending.forEach(function (_, motion) {
            return motion.pause();
          });
        };
        _proto.resume = function resume() {
          this.paused = false;
          this.pending.forEach(function (_, motion) {
            return motion.resume();
          });
        };
        _proto.cancel = function cancel() {
          if (this.cancelled) return;
          this.cancelled = true;
          var interrupted = [];
          this.pending.forEach(function (resolve, motion) {
            return interrupted.push([motion, resolve]);
          });
          this.pending.clear();
          var listeners = Array.from(this.cancelListeners);
          this.cancelListeners.clear();
          for (var _i = 0, _listeners = listeners; _i < _listeners.length; _i++) {
            var listener = _listeners[_i];
            try {
              listener();
            } catch (error) {
              console.warn('Presentation cancellation cleanup failed', error);
            }
          }
          this.releaseIdle(false);
          for (var _i2 = 0, _interrupted = interrupted; _i2 < _interrupted.length; _i2++) {
            var _interrupted$_i = _interrupted[_i2],
              motion = _interrupted$_i[0],
              resolve = _interrupted$_i[1];
            motion.stop();
            resolve(false);
          }
        };
        _createClass(BattleMotion, [{
          key: "isPaused",
          get: function get() {
            return this.paused;
          }
        }, {
          key: "pendingCount",
          get: function get() {
            return this.pending.size;
          }
        }]);
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
        applyBattleCry: applyBattleCry,
        endOathRound: endOathRound,
        oathArmorLayers: oathArmorLayers,
        oathDamage: oathDamage,
        oathEnemyPower: oathEnemyPower,
        planOathSkill: planOathSkill,
        planSkill: planSkill,
        rosterEmblems: rosterEmblems,
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
            s: '剑击',
            d: '骑士反击',
            m: '奥术弹'
          }[type]) != null ? _s$d$m$type : '攻击',
          damage: damage,
          hits: 1,
          target: 'front',
          stun: false
        };
      }
      var newOathState = exports('newOathState', function newOathState() {
        return {
          rally: 1,
          roundBoost: 1,
          guard: false,
          shred: {},
          weaken: []
        };
      });
      function rosterEmblems(party) {
        if (!party.includes('h')) return ['s', 'stone', 'cry', 'fist'];
        if (party.includes('d') && party.includes('m')) return ['s', 'd', 'm', 'h'];
        if (party.includes('d')) return ['s', 'd', 'h', 'staff'];
        if (party.includes('m')) return ['s', 'm', 'h', 'staff'];
        return ['s', 'fist', 'h', 'staff'];
      }
      function endOathRound(state, round) {
        state.roundBoost = 1;
        state.guard = false;
        for (var _i = 0, _Object$keys = Object.keys(state.shred); _i < _Object$keys.length; _i++) {
          var _id = _Object$keys[_i];
          if (state.shred[_id] <= round) delete state.shred[_id];
        }
      }
      function applyBattleCry(state, multiplier, boost) {
        state.rally = Math.max(state.rally, multiplier);
        state.roundBoost = Math.max(state.roundBoost, boost);
      }
      function oathEnemyPower(state, id, attack) {
        if (!state.weaken.includes(id)) return attack;
        state.weaken = state.weaken.filter(function (target) {
          return target !== id;
        });
        return Math.round(attack * .8);
      }
      function oathDamage(state, id, raw, armor, magic) {
        var layers = oathArmorLayers(state, id, armor, magic);
        return Math.round(raw * (1 - .25 * layers));
      }
      function oathArmorLayers(state, id, armor, magic) {
        return Math.max(0, Math.min(4, armor) - (magic ? 0 : Number(id in state.shred)));
      }
      function planOathSkill(type, length, wave, tier, attack, fullGuard, state, hasCore, buff) {
        var _s$m$stone$fist$staff;
        if (buff === void 0) {
          buff = function buff() {
            return 0;
          };
        }
        var high = tier === 'advanced',
          charged = !!tier;
        var m = (length >= 5 ? 2.1 : length >= 4 ? 1.55 : 1) * (1 + (wave - 1) * (.16 + .12 * buff('chain')));
        if (type === 'cry') return {
          kind: 'rally',
          name: '战吼',
          multiplier: high ? 1.7 : charged ? 1.55 : 1.4,
          boost: high ? 1.1 : 1
        };
        if (type === 'd') return {
          kind: 'guard',
          name: '骑士守护',
          amount: Math.round((high ? 35 : charged ? 28 : 20) * m * (1 + .35 * buff('def'))),
          resist: high,
          followup: fullGuard && hasCore('guardcore') ? Math.round(attack * state.roundBoost) : undefined
        };
        if (type === 'h') return {
          kind: 'heal',
          name: '牧师治疗',
          amount: Math.round((high ? 40 : charged ? 32 : 24) * m * (1 + .35 * buff('heal'))),
          cleanse: high
        };
        var team = state.roundBoost;
        var main = team * state.rally;
        var ratio = type === 's' ? high ? 1.65 : charged ? 1.35 : 1 : type === 'm' ? high ? 1.6 : charged ? 1.35 : 1 : type === 'stone' ? high ? .65 : charged ? .85 : .55 : type === 'fist' ? high ? 1.6 : charged ? 1.1 : .7 : type === 'staff' ? high ? 1.65 : charged ? 1.35 : 1 : 1;
        var power = type === 's' ? 1 + .25 * buff('atk') : type === 'm' ? 1 + .25 * buff('mag') : 1;
        var damage = Math.round(attack * ratio * m * main * power);
        if (type === 's' && length >= 4 && hasCore('swordcore')) damage += Math.round(attack * (.5 + .45 * buff('sword4')) * team);
        if (type === 'm' && wave > 1 && hasCore('magiccore')) damage += Math.round(attack * (.3 + .25 * buff('echo')) * team);
        return {
          kind: 'attack',
          name: (_s$m$stone$fist$staff = {
            s: '剑击',
            m: '奥术弹',
            stone: high ? '碎石雨' : '投石',
            fist: high ? '震击' : '直拳',
            staff: high ? '圣光杖击' : '神圣杖击'
          }[type]) != null ? _s$m$stone$fist$staff : '攻击',
          damage: damage,
          splash: type === 'm' && high ? Math.round(attack * .45 * m * team * power) : undefined,
          target: type === 'stone' && high ? 'all' : 'front',
          hits: type === 'stone' && high ? 2 : 1,
          stun: type === 'fist' && high,
          shred: type === 's' && high,
          weaken: type === 'staff' && high
        };
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BattleSession.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, _asyncToGenerator, _regeneratorRuntime, _extends, cclegacy;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f8f36XNMDBDiYko+vEu6aXg", "BattleSession", undefined);
      /** One instance owns one room's scheduling lifetime. Construct a new instance on room change. */
      var BattleSession = exports('BattleSession', /*#__PURE__*/function () {
        function BattleSession() {
          this.generation = 0;
          this.abort = new AbortController();
          this.status = 'active';
          this.nextBatch = 0;
          this.running = false;
          this.stopBatch = void 0;
          this.cancelPresentation = new Set();
          this.cleanupErrors = [];
          this.journal = [];
        }
        var _proto = BattleSession.prototype;
        _proto.produce = /*#__PURE__*/function () {
          var _produce = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(tasks, commit) {
            var _this = this;
            var generation, batch, open, emit, stop, stopped, current, fail, results, i, result, returned;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(this.status !== 'active')) {
                    _context2.next = 2;
                    break;
                  }
                  return _context2.abrupt("return", false);
                case 2:
                  if (!this.running) {
                    _context2.next = 4;
                    break;
                  }
                  throw new Error('Declare concurrent producers in one batch');
                case 4:
                  this.running = true;
                  generation = this.generation, batch = this.nextBatch++;
                  open = new Set(tasks.map(function (_, i) {
                    return i;
                  }));
                  emit = function emit(index, kind, reason) {
                    _this.journal.push(Object.freeze(_extends({
                      generation: generation,
                      batch: batch,
                      index: index,
                      kind: kind
                    }, reason === undefined ? {} : {
                      reason: reason
                    })));
                  };
                  open.forEach(function (i) {
                    return emit(i, 'registered');
                  });
                  stopped = new Promise(function (resolve) {
                    stop = function stop() {
                      return resolve(null);
                    };
                  });
                  this.stopBatch = function () {
                    open.forEach(function (i) {
                      return emit(i, 'cancelled');
                    });
                    open.clear();
                    stop();
                  };
                  current = function current() {
                    return _this.generation === generation && _this.status === 'active';
                  };
                  fail = function fail(i, error) {
                    if (!current() || !open["delete"](i)) return;
                    emit(i, 'failed', String(error));
                    _this.invalidate('failed');
                  };
                  results = tasks.map(function (task, i) {
                    return Promise.resolve().then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                      return _regeneratorRuntime().wrap(function _callee$(_context) {
                        while (1) switch (_context.prev = _context.next) {
                          case 0:
                            if (current()) {
                              _context.next = 2;
                              break;
                            }
                            return _context.abrupt("return", {
                              ok: false,
                              error: 'stale producer'
                            });
                          case 2:
                            _context.prev = 2;
                            _context.next = 5;
                            return task(_this.abort.signal);
                          case 5:
                            _context.t0 = _context.sent;
                            return _context.abrupt("return", {
                              ok: true,
                              value: _context.t0
                            });
                          case 9:
                            _context.prev = 9;
                            _context.t1 = _context["catch"](2);
                            fail(i, _context.t1);
                            return _context.abrupt("return", {
                              ok: false,
                              error: _context.t1
                            });
                          case 13:
                          case "end":
                            return _context.stop();
                        }
                      }, _callee, null, [[2, 9]]);
                    })));
                  });
                  _context2.prev = 14;
                  i = 0;
                case 16:
                  if (!(i < results.length)) {
                    _context2.next = 40;
                    break;
                  }
                  _context2.next = 19;
                  return Promise.race([results[i], stopped]);
                case 19:
                  result = _context2.sent;
                  if (!(!result || !current() || !result.ok)) {
                    _context2.next = 22;
                    break;
                  }
                  return _context2.abrupt("return", false);
                case 22:
                  _context2.prev = 22;
                  returned = commit(result.value, i);
                  if (!(returned !== null && (typeof returned === 'object' || typeof returned === 'function') && typeof returned.then === 'function')) {
                    _context2.next = 27;
                    break;
                  }
                  void Promise.resolve(returned)["catch"](function () {});
                  throw new Error('Producer commit must be synchronous');
                case 27:
                  _context2.next = 33;
                  break;
                case 29:
                  _context2.prev = 29;
                  _context2.t0 = _context2["catch"](22);
                  if (current()) {
                    open["delete"](i);
                    emit(i, 'failed', String(_context2.t0));
                    this.invalidate('failed');
                  }
                  return _context2.abrupt("return", false);
                case 33:
                  if (current()) {
                    _context2.next = 35;
                    break;
                  }
                  return _context2.abrupt("return", false);
                case 35:
                  open["delete"](i);
                  emit(i, 'committed');
                case 37:
                  i++;
                  _context2.next = 16;
                  break;
                case 40:
                  return _context2.abrupt("return", true);
                case 41:
                  _context2.prev = 41;
                  this.stopBatch = undefined;
                  this.running = false;
                  return _context2.finish(41);
                case 45:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this, [[14,, 41, 45], [22, 29]]);
          }));
          function produce(_x, _x2) {
            return _produce.apply(this, arguments);
          }
          return produce;
        }() /** Return a stop handle for the actual Tween or timer, including detached work. */;
        _proto.presentation = function presentation(start) {
          var _this2 = this;
          if (this.status !== 'active') return Promise.resolve(false);
          return new Promise(function (resolve, reject) {
            var stop,
              cancelled = false;
            var stopSafely = function stopSafely() {
              try {
                if (typeof stop === 'function') stop();
              } catch (error) {
                _this2.cleanupErrors.push(String(error));
              }
            };
            var cancel = function cancel() {
              if (!_this2.cancelPresentation["delete"](cancel)) return;
              cancelled = true;
              stopSafely();
              resolve(false);
            };
            _this2.cancelPresentation.add(cancel);
            try {
              stop = start(function () {
                if (_this2.cancelPresentation["delete"](cancel)) resolve(true);
              });
              if (cancelled) stopSafely();
            } catch (error) {
              if (_this2.cancelPresentation["delete"](cancel)) reject(error);
            }
          });
        };
        _proto.cancel = function cancel() {
          return this.invalidate('cancelled');
        };
        _proto.finish = function finish() {
          if (this.running) return false;
          return this.invalidate('terminal');
        };
        _proto.invalidate = function invalidate(status) {
          var _this$stopBatch;
          if (this.status !== 'active') return false;
          this.generation++;
          this.status = status;
          (_this$stopBatch = this.stopBatch) == null || _this$stopBatch.call(this);
          this.abort.abort(status);
          this.cancelPresentation.forEach(function (cancel) {
            return cancel();
          });
          return true;
        };
        _createClass(BattleSession, [{
          key: "presentationCleanupErrors",
          get: function get() {
            return this.cleanupErrors.slice();
          }
        }, {
          key: "events",
          get: function get() {
            return this.journal.slice();
          }
        }, {
          key: "state",
          get: function get() {
            return this.status;
          }
        }]);
        return BattleSession;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/board-bridge.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Board.ts'], function (exports) {
  var _extends, _createForOfIteratorHelperLoose, cclegacy, matches, planWave, planRefill, mineGravity, legalMove, adjacent;
  return {
    setters: [function (module) {
      _extends = module.extends;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      matches = module.matches;
      planWave = module.planWave;
      planRefill = module.planRefill;
      mineGravity = module.mineGravity;
      legalMove = module.legalMove;
      adjacent = module.adjacent;
    }],
    execute: function () {
      exports('createBoardBridge', createBoardBridge);
      cclegacy._RF.push({}, "109eamVxuRHpasaVsJA9tLf", "board-bridge", undefined);
      function assertTiles(tiles) {
        if (tiles.length !== 56 || new Set(tiles.map(function (t) {
          return t == null ? void 0 : t.id;
        })).size !== 56 || tiles.some(function (t) {
          return !(t != null && t.id) || !t.emblem || t.tier !== undefined && t.tier !== 'skill' && t.tier !== 'advanced';
        })) throw new Error('Invalid board tiles');
      }
      function createBoardBridge(config, state, random) {
        assertTiles(state.tiles);
        var colors = function colors(tiles) {
          return tiles.map(function (t) {
            return t.emblem;
          });
        };
        function swapped(step) {
          var before = state.tiles.slice();
          if (step.swap) {
            var _step$swap = step.swap,
              a = _step$swap[0],
              b = _step$swap[1];
            if (!before[a] || !before[b] || !adjacent(a, b)) throw new Error('Invalid scripted swap');
            var _ref = [before[b], before[a]];
            before[a] = _ref[0];
            before[b] = _ref[1];
          }
          return before;
        }
        return {
          canMatch: function canMatch(step) {
            return matches(colors(swapped(step))).length > 0;
          },
          match: function match(step) {
            var _step$preferred;
            var before = swapped(step);
            var plan = planWave(matches(colors(before)), function (i) {
              return before[i].tier;
            }, (_step$preferred = step.preferred) != null ? _step$preferred : step.swap ? [step.swap[1], step.swap[0]] : []);
            var removed = Array.from(plan.removed);
            var commands = plan.components.map(function (group) {
              var emblem = before[group[0]].emblem;
              var mapping = Object.hasOwn(config.skills, emblem) ? config.skills[emblem] : undefined;
              if (!mapping) throw new Error('Missing board skill mapping: ' + emblem);
              var tier = group.some(function (i) {
                return before[i].tier === 'advanced';
              }) ? 'advanced' : group.some(function (i) {
                return before[i].tier === 'skill';
              }) ? 'skill' : undefined;
              return _extends({
                actor: mapping.actor,
                skill: tier && mapping[tier] || mapping.ordinary,
                emblem: emblem,
                wave: step.wave,
                length: config.actualLength ? group.length : Math.max(group.length, tier === 'advanced' ? 5 : tier === 'skill' ? 4 : 3)
              }, tier ? {
                tier: tier
              } : {});
            });
            var oldIds = new Set(before.map(function (t) {
              return t.id;
            }));
            var charged = before.slice();
            var generated = Array.from(plan.created).map(function (_ref2) {
              var index = _ref2[0],
                tier = _ref2[1];
              return {
                index: index,
                tile: charged[index] = _extends({}, before[index], {
                  tier: tier
                })
              };
            });
            var after = charged.slice();
            if (step.gravity) {
              var g = step.gravity;
              if (step.refill || !random || !g.pool.length) throw new Error('Gravity requires a seeded pool and no scripted refill');
              var refill = planRefill(colors(before), plan.removed, g.pool, random, g.mode === 'mine' ? mineGravity : undefined);
              for (var _iterator = _createForOfIteratorHelperLoose(refill.moves), _step; !(_step = _iterator()).done;) {
                var move = _step.value;
                after[move.to] = charged[move.from];
              }
              for (var _iterator2 = _createForOfIteratorHelperLoose(refill.spawns), _step2; !(_step2 = _iterator2()).done;) {
                var spawn = _step2.value;
                var id = g.idPrefix + spawn.to;
                if (oldIds.has(id)) throw new Error('Gravity spawn must use fresh ID');
                after[spawn.to] = {
                  id: id,
                  emblem: refill.board[spawn.to]
                };
              }
            } else {
              var _step$refill;
              var _refill = (_step$refill = step.refill) != null ? _step$refill : {};
              if (Object.keys(_refill).length !== removed.length || removed.some(function (i) {
                return !Object.hasOwn(_refill, i);
              })) throw new Error('Scripted refill must cover exactly the removed cells');
              if (Object.values(_refill).some(function (t) {
                return t.tier || oldIds.has(t.id);
              })) throw new Error('Refill must use fresh ordinary tiles');
              for (var _iterator3 = _createForOfIteratorHelperLoose(removed), _step3; !(_step3 = _iterator3()).done;) {
                var i = _step3.value;
                after[i] = _refill[i];
              }
            }
            assertTiles(after);
            state.tiles = after;
            return {
              commands: commands,
              removed: removed,
              generated: generated,
              consumed: Array.from(plan.charged).map(function (i) {
                return before[i];
              })
            };
          },
          recover: function recover(candidates) {
            if (matches(colors(state.tiles)).length || legalMove(colors(state.tiles))) throw new Error('Recovery requires a stable dead board');
            var _loop = function _loop() {
                var candidate = _step4.value;
                assertTiles(candidate);
                var preserved = state.tiles.every(function (t, i) {
                  return !t.tier || candidate[i].id === t.id && candidate[i].tier === t.tier && candidate[i].emblem === t.emblem;
                });
                var sameCount = candidate.filter(function (t) {
                  return t.tier;
                }).length === state.tiles.filter(function (t) {
                  return t.tier;
                }).length;
                if (preserved && sameCount && !matches(colors(candidate)).length && legalMove(colors(candidate))) {
                  state.tiles = candidate.slice();
                  return {
                    v: true
                  };
                }
              },
              _ret;
            for (var _iterator4 = _createForOfIteratorHelperLoose(candidates), _step4; !(_step4 = _iterator4()).done;) {
              _ret = _loop();
              if (_ret) return _ret.v;
            }
            return false;
          }
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
        refill: refill,
        sideRefill: sideRefill
      });
      cclegacy._RF.push({}, "58ca6Qen5pOx5uPQaJG5VXD", "Board", undefined);
      var cols = exports('cols', 7);
      var rows = exports('rows', 8);
      var rockCell = exports('rockCell', '__rock'),
        holeCell = exports('holeCell', '__hole');
      var playableCell = exports('playableCell', function playableCell(type) {
        return type !== rockCell && type !== holeCell;
      });

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
      var verticalGravity = exports('verticalGravity', verticalRoutes(rows));
      var mineGravity = exports('mineGravity', [].concat(verticalRoutes(rows - 2), [Array.from({
        length: cols
      }, function (_, col) {
        return (rows - 2) * cols + col;
      }), Array.from({
        length: cols
      }, function (_, col) {
        return rows * cols - 1 - col;
      })]));
      function matches(board, connected) {
        if (connected === void 0) {
          connected = function connected() {
            return true;
          };
        }
        var groups = [];
        for (var _i = 0, _arr = [1, cols]; _i < _arr.length; _i++) {
          var stride = _arr[_i];
          for (var i = 0; i < board.length; i++) {
            if (board[i] === 'miner' || !playableCell(board[i])) continue;
            var length = stride === 1 ? cols - i % cols : rows - Math.floor(i / cols);
            var group = [i];
            for (var k = 1; k < length && board[i + k * stride] === board[i] && connected(i + (k - 1) * stride, i + k * stride); k++) group.push(i + k * stride);
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

      /** For a vertically fed obstacle board, only its top edge produces tiles. */
      function sideRefill(board, removed, types, random, blocked) {
        var cells = board.map(function (type, i) {
          return blocked.has(i) || removed.has(i) ? undefined : {
            from: i,
            path: [i],
            type: type,
            distance: 0
          };
        });
        var parents = board.map(function () {
            return [];
          }),
          supplied = new Set();
        for (var i = 0; i < board.length; i++) {
          if (blocked.has(i)) continue;
          if (i < cols) {
            supplied.add(i);
            continue;
          }
          var up = i - cols;
          for (var _i2 = 0, _arr2 = [up, up - 1, up + 1]; _i2 < _arr2.length; _i2++) {
            var candidate = _arr2[_i2];
            if (Math.floor(candidate / cols) === Math.floor(up / cols) && supplied.has(candidate)) parents[i].push(candidate);
          }
          if (parents[i].length) supplied.add(i);
        }
        var entries = Array(cols).fill(0);
        function fill(i) {
          if (cells[i]) return cells[i];
          if (!supplied.has(i)) throw Error('Obstacle layout has no gravity supply at ' + i);
          if (i < cols) return cells[i] = {
            from: -1,
            path: [i],
            type: types[Math.floor(random() * types.length)],
            distance: ++entries[i]
          };
          var from = parents[i][0],
            piece = fill(from);
          cells[from] = undefined;
          piece.path.push(i);
          return cells[i] = piece;
        }
        var plan = {
          board: board.slice(),
          moves: [],
          spawns: []
        };
        for (var _i3 = board.length - 1; _i3 >= 0; _i3--) {
          if (blocked.has(_i3)) continue;
          var piece = fill(_i3);
          plan.board[_i3] = piece.type;
          if (piece.from < 0) plan.spawns.push({
            to: _i3,
            path: piece.path,
            distance: piece.distance,
            direction: {
              x: 0,
              y: 1
            }
          });else if (piece.from !== _i3) plan.moves.push({
            from: piece.from,
            to: _i3,
            path: piece.path
          });
        }
        return plan;
      }
      function planRefill(board, removed, types, random, routes, topology) {
        var _topology$blocked, _topology$portals2;
        if (random === void 0) {
          random = Math.random;
        }
        if (routes === void 0) {
          routes = verticalGravity;
        }
        if (topology === void 0) {
          topology = {};
        }
        var blocked = (_topology$blocked = topology.blocked) != null ? _topology$blocked : new Set();
        for (var _iterator = _createForOfIteratorHelperLoose(blocked), _step; !(_step = _iterator()).done;) {
          var _index = _step.value;
          if (!Number.isInteger(_index) || _index < 0 || _index >= board.length || removed.has(_index)) throw Error('Invalid blocked refill cell');
        }
        var jump = function jump(from, to) {
          var _topology$portals;
          return (_topology$portals = topology.portals) == null ? void 0 : _topology$portals.some(function (pair) {
            return pair[0] === from && pair[1] === to;
          });
        };
        var entrances = new Set(),
          exits = new Set();
        var _loop = function _loop() {
          var _step2$value = _step2.value,
            from = _step2$value[0],
            to = _step2$value[1];
          if (!Number.isInteger(from) || !Number.isInteger(to) || from < 0 || to < 0 || from >= board.length || to >= board.length || from === to || blocked.has(from) || blocked.has(to) || entrances.has(from) || exits.has(to) || !routes.some(function (route) {
            return route.some(function (cell, i) {
              return cell === from && route[i + 1] === to;
            });
          })) throw Error('Invalid portal graph');
          entrances.add(from);
          exits.add(to);
        };
        for (var _iterator2 = _createForOfIteratorHelperLoose((_topology$portals3 = topology.portals) != null ? _topology$portals3 : []), _step2; !(_step2 = _iterator2()).done;) {
          var _topology$portals3;
          _loop();
        }
        var plan = {
          board: blocked.size ? board.slice() : Array(board.length),
          moves: [],
          spawns: []
        };
        if ((_topology$portals2 = topology.portals) != null && _topology$portals2.length) plan.teleports = topology.portals;
        var covered = new Set();
        var _loop2 = function _loop2() {
          var route = _step3.value;
          if (!route.length) throw new Error('Gravity routes need an entry cell');
          route.forEach(function (cell, i) {
            if (!Number.isInteger(cell) || cell < 0 || cell >= board.length || covered.has(cell) || blocked.has(cell) || i > 0 && !adjacent(route[i - 1], cell) && !jump(route[i - 1], cell)) {
              throw new Error("Invalid gravity route at cell " + cell);
            }
            covered.add(cell);
          });
        };
        for (var _iterator3 = _createForOfIteratorHelperLoose(routes), _step3; !(_step3 = _iterator3()).done;) {
          _loop2();
        }
        if (covered.size !== board.length - blocked.size) throw new Error('Gravity routes must cover every active cell');
        for (var _iterator4 = _createForOfIteratorHelperLoose(routes), _step4; !(_step4 = _iterator4()).done;) {
          var route = _step4.value;
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
        for (var _iterator5 = _createForOfIteratorHelperLoose(part), _step5; !(_step5 = _iterator5()).done;) {
          var _index2 = _step5.value;
          columnSum += _index2 % cols;
          rowSum += Math.floor(_index2 / cols);
        }
        var anchor;
        var closest = Infinity;
        for (var _iterator6 = _createForOfIteratorHelperLoose(junctions.length ? junctions : ordinary), _step6; !(_step6 = _iterator6()).done;) {
          var _index3 = _step6.value;
          var dx = _index3 % cols * part.size - columnSum;
          var dy = Math.floor(_index3 / cols) * part.size - rowSum;
          var distance = dx * dx + dy * dy;
          if (anchor === undefined || distance < closest || distance === closest && _index3 > anchor) {
            anchor = _index3;
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
        for (var _iterator7 = _createForOfIteratorHelperLoose(groups), _step7; !(_step7 = _iterator7()).done;) {
          var group = _step7.value;
          for (var _iterator11 = _createForOfIteratorHelperLoose(group), _step11; !(_step11 = _iterator11()).done;) {
            var _index4 = _step11.value;
            if (matched.has(_index4)) crossings.add(_index4);
            matched.add(_index4);
          }
        }
        var charged = new Set();
        var columns = new Set();
        var removed = new Set(matched);
        for (var _iterator8 = _createForOfIteratorHelperLoose(removed), _step8; !(_step8 = _iterator8()).done;) {
          var _index5 = _step8.value;
          var tier = tierAt(_index5);
          if (!tier) continue;
          charged.add(_index5);
          if (lineClear && tier !== 'skill') {
            columns.add(_index5 % cols);
            for (var row = 0; row < rows; row++) removed.add(row * cols + _index5 % cols);
          }
        }
        var components = [];
        var _loop3 = function _loop3() {
          var group = _step9.value;
          var connected = components.filter(function (part) {
            return group.some(function (index) {
              return part.has(index);
            });
          });
          var merged = new Set(group);
          for (var _iterator12 = _createForOfIteratorHelperLoose(connected), _step12; !(_step12 = _iterator12()).done;) {
            var _part = _step12.value;
            _part.forEach(function (index) {
              return merged.add(index);
            });
            components.splice(components.indexOf(_part), 1);
          }
          components.push(merged);
        };
        for (var _iterator9 = _createForOfIteratorHelperLoose(groups), _step9; !(_step9 = _iterator9()).done;) {
          _loop3();
        }
        var anchors = new Set();
        var created = new Map();
        for (var _i4 = 0, _components = components; _i4 < _components.length; _i4++) {
          var part = _components[_i4];
          if (part.size < 4) continue;
          var anchor = skillAnchor(part, crossings, charged, preferred);
          if (anchor !== undefined) {
            anchors.add(anchor);
            created.set(anchor, part.size >= 5 ? 'advanced' : 'skill');
          }
        }
        for (var _iterator10 = _createForOfIteratorHelperLoose(anchors), _step10; !(_step10 = _iterator10()).done;) {
          var _anchor = _step10.value;
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
      function legalMove(board, canSwap, findMatches) {
        if (canSwap === void 0) {
          canSwap = function canSwap() {
            return true;
          };
        }
        if (findMatches === void 0) {
          findMatches = matches;
        }
        for (var _a = 0; _a < board.length; _a++) for (var _i5 = 0, _arr3 = [_a + 1, _a + cols]; _i5 < _arr3.length; _i5++) {
          var _b = _arr3[_i5];
          if (_b >= board.length || !adjacent(_a, _b) || !playableCell(board[_a]) || !playableCell(board[_b]) || !canSwap(_a, _b)) continue;
          var probe = [].concat(board);
          var _ref = [probe[_b], probe[_a]];
          probe[_a] = _ref[0];
          probe[_b] = _ref[1];
          if (findMatches(probe).length) return [_a, _b];
        }
      }
      function newBoard(types, random) {
        if (random === void 0) {
          random = Math.random;
        }
        var board = Array(cols * rows);
        for (var attempt = 0; attempt < 24; attempt++) {
          var _loop4 = function _loop4(i) {
            var row = Math.floor(i / cols),
              column = i % cols;
            var allowed = types.filter(function (type) {
              return !(column >= 2 && board[i - 1] === type && board[i - 2] === type) && !(row >= 2 && board[i - cols] === type && board[i - 2 * cols] === type);
            });
            board[i] = allowed[Math.floor(random() * allowed.length)];
          };
          for (var i = 0; i < board.length; i++) {
            _loop4(i);
          }
          if (legalMove(board)) return board;
        }
        return opening(types);
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BoardMechanics.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Board.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy, cols, rows, playableCell, matches, legalMove;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      cols = module.cols;
      rows = module.rows;
      playableCell = module.playableCell;
      matches = module.matches;
      legalMove = module.legalMove;
    }],
    execute: function () {
      exports({
        clearTerrain: clearTerrain,
        deliveryAdvanceScore: deliveryAdvanceScore,
        deliveryStarts: deliveryStarts,
        identityPreservingRecovery: identityPreservingRecovery,
        minersAtExits: minersAtExits,
        retireMinerBoard: retireMinerBoard,
        shockTarget: shockTarget,
        validateDelivery: validateDelivery
      });
      cclegacy._RF.push({}, "68d8e6vmY5Jg4qJ1p1N2HNF", "BoardMechanics", undefined);
      var minerEmblem = exports('minerEmblem', 'miner');
      function validateDelivery(spec) {
        if (!Number.isSafeInteger(spec.required) || spec.required < 1 || spec.starts.length !== spec.required || new Set(spec.starts).size !== spec.starts.length || !spec.exits.length || [].concat(spec.starts, spec.exits).some(function (i) {
          return !Number.isSafeInteger(i) || i < 0 || i >= cols * rows;
        }) || spec.starts.some(function (i) {
          return spec.exits.includes(i);
        })) throw Error('Invalid miner delivery configuration');
      }
      function minersAtExits(board, spec) {
        return spec.exits.filter(function (index) {
          return board[index] === minerEmblem;
        });
      }
      function shockTarget(tiers, random) {
        var candidates = tiers.flatMap(function (tier, index) {
          return tier === 'skill' ? [index] : [];
        });
        if (!candidates.length) return undefined;
        return candidates[Math.min(candidates.length - 1, Math.floor(random() * candidates.length))];
      }
      // A candidate permutation only: caller commits tiles/IDs together after validation.
      function identityPreservingRecovery(board, random, isStable, anchored) {
        if (isStable === void 0) {
          isStable = function isStable(board) {
            return !matches(board).length && !!legalMove(board);
          };
        }
        if (anchored === void 0) {
          anchored = new Map();
        }
        var active = board.flatMap(function (type, i) {
          return playableCell(type) && !anchored.has(i) ? [i] : [];
        });
        for (var attempt = 0; attempt < 256; attempt++) {
          var order = board.map(function (_, i) {
            return i;
          });
          for (var i = active.length - 1; i > 0; i--) {
            var j = Math.floor(random() * (i + 1)),
              a = active[i],
              b = active[j];
            var _ref = [order[b], order[a]];
            order[a] = _ref[0];
            order[b] = _ref[1];
          }
          var candidate = order.map(function (i) {
            return board[i];
          });
          if (isStable(candidate)) return order;
        }
        return undefined; // Explicit failure, never replace or downgrade special tiles.
      }

      /** Remove room-scoped delivery tokens without moving any ordinary survivor. */
      function retireMinerBoard(board, types, token) {
        if (token === void 0) {
          token = minerEmblem;
        }
        var candidate = board.slice(),
          indices = board.flatMap(function (type, i) {
            return type === token ? [i] : [];
          });
        function fill(k) {
          if (k === indices.length) return !matches(candidate).length && !!legalMove(candidate);
          for (var _iterator = _createForOfIteratorHelperLoose(types), _step; !(_step = _iterator()).done;) {
            var type = _step.value;
            candidate[indices[k]] = type;
            if (fill(k + 1)) return true;
          }
          candidate[indices[k]] = token;
          return false;
        }
        return fill(0) ? candidate : undefined;
      }

      /** Prefer authored starts; never overwrite a carried enhanced crest. */
      function deliveryStarts(spec, charged) {
        var selected = [];
        var _loop = function _loop() {
            var desired = _step2.value;
            var candidates = [desired].concat(Array.from({
              length: cols * rows
            }, function (_, i) {
              return i;
            }).sort(function (a, b) {
              return Math.abs(a - desired) - Math.abs(b - desired) || a - b;
            }));
            var next = candidates.find(function (i) {
              return !charged.has(i) && !spec.exits.includes(i) && !selected.includes(i);
            });
            if (next === undefined) return {
              v: undefined
            };
            selected.push(next);
          },
          _ret;
        for (var _iterator2 = _createForOfIteratorHelperLoose(spec.starts), _step2; !(_step2 = _iterator2()).done;) {
          _ret = _loop();
          if (_ret) return _ret.v;
        }
        return selected;
      }

      /** Objective-only heuristic: no random draw and no authoritative board mutation. */
      function deliveryAdvanceScore(before, after, spec, routes) {
        var distance = function distance(index) {
          var route = routes.find(function (row) {
            return row.includes(index);
          });
          if (!route) return 0;
          var at = route.indexOf(index),
            ends = spec.exits.map(function (i) {
              return route.indexOf(i);
            }).filter(function (i) {
              return i >= at;
            });
          return ends.length ? Math.min.apply(Math, ends) - at : rows + Math.min.apply(Math, spec.exits.map(function (exit) {
            return Math.abs(exit % cols - index % cols) + Math.abs(Math.floor(exit / cols) - Math.floor(index / cols));
          }));
        };
        var sum = function sum(board) {
          return board.reduce(function (n, type, i) {
            return n + (type === minerEmblem ? distance(i) : 0);
          }, 0);
        };
        var escaped = minersAtExits(after, spec).length;
        return escaped * 250 + (sum(before) - sum(after)) * 20;
      }

      /** Cell-scoped terrain: one durability per unique matched cell per wave, independent of tiles. */
      function clearTerrain(state, matched) {
        var next = new Map(state),
          hits = [];
        for (var _iterator3 = _createForOfIteratorHelperLoose(new Set(matched)), _step3; !(_step3 = _iterator3()).done;) {
          var index = _step3.value;
          var layers = next.get(index);
          if (!layers) continue;
          hits.push(index);
          if (layers === 1) next["delete"](index);else next.set(index, layers - 1);
        }
        return {
          next: next,
          hits: hits
        };
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BuffView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createForOfIteratorHelperLoose, _createClass, cclegacy;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "59d57f9q/VFqaaZ0Q48o7O5", "BuffView", undefined);
      /** Read-only projection. Owners are scene nodes, never combat state owners. */
      var BuffView = exports('BuffView', /*#__PURE__*/function () {
        function BuffView(create, count) {
          this.owners = new Map();
          this.create = create;
          this.count = count;
        }
        var _proto = BuffView.prototype;
        _proto.sync = function sync(parent, badges, top) {
          var _this = this;
          if (top === void 0) {
            top = -24;
          }
          for (var _iterator = _createForOfIteratorHelperLoose(this.owners), _step; !(_step = _iterator()).done;) {
            var _step$value = _step.value,
              owner = _step$value[0];
            if (!owner.isValid) this.owners["delete"](owner);
          }
          if (!(parent != null && parent.isValid)) return;
          var slots = this.owners.get(parent);
          if (!slots) {
            slots = new Map();
            this.owners.set(parent, slots);
          }
          var wanted = new Set(badges.map(function (b) {
            return b.id;
          }));
          for (var _iterator2 = _createForOfIteratorHelperLoose(slots), _step2; !(_step2 = _iterator2()).done;) {
            var _step2$value = _step2.value,
              id = _step2$value[0],
              _node2 = _step2$value[1];
            if (!wanted.has(id)) {
              _node2.removeFromParent();
              _node2.destroy();
              slots["delete"](id);
            }
          }
          badges.forEach(function (badge, index) {
            var _node;
            var node = slots.get(badge.id);
            if (!((_node = node) != null && _node.isValid)) {
              node = _this.create(parent, badge);
              slots.set(badge.id, node);
            }
            node.setPosition(-51 + index % 5 * 25, top - Math.floor(index / 5) * 24);
            _this.count(node, badge.count);
          });
        };
        _proto.dispose = function dispose() {
          for (var _iterator3 = _createForOfIteratorHelperLoose(this.owners.values()), _step3; !(_step3 = _iterator3()).done;) {
            var slots = _step3.value;
            for (var _iterator4 = _createForOfIteratorHelperLoose(slots.values()), _step4; !(_step4 = _iterator4()).done;) {
              var _node3 = _step4.value;
              if (_node3.isValid) {
                _node3.removeFromParent();
                _node3.destroy();
              }
            }
          }
          this.owners.clear();
        };
        _createClass(BuffView, [{
          key: "size",
          get: function get() {
            return Array.from(this.owners.values()).reduce(function (n, m) {
              return n + m.size;
            }, 0);
          }
        }]);
        return BuffView;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Chapter.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _extends, _createForOfIteratorHelperLoose, cclegacy;
  return {
    setters: [function (module) {
      _extends = module.extends;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
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
        'forest-wolf': ['living', 'beast', 'melee'],
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
        dragon: ['undead', 'beast', 'giant', 'ranged'],
        'forest-bug': ['living', 'beast', 'melee'],
        'forest-leafguard': ['living', 'plant', 'melee'],
        'forest-treant': ['living', 'plant', 'melee'],
        'forest-stone': ['elemental', 'giant', 'armor', 'melee'],
        'forest-bear': ['living', 'beast', 'giant', 'melee'],
        'murloc-spear': ['living', 'humanoid', 'melee'],
        'murloc-axe': ['living', 'humanoid', 'melee'],
        'murloc-mage': ['living', 'humanoid', 'ranged', 'mage']
      };
      function enemy(name, art, hp, atk, extraTags) {
        var _enemyTags$art;
        if (extraTags === void 0) {
          extraTags = [];
        }
        var tags = Array.from(new Set([].concat((_enemyTags$art = enemyTags[art]) != null ? _enemyTags$art : [], extraTags)));
        return _extends({
          name: name,
          art: art,
          hp: hp,
          atk: atk,
          tags: tags
        }, ['golem', 'forest-stone'].includes(art) ? {
          skill: 'shock'
        } : {});
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
          enemies: [enemy('苔芽小虫', 'forest-bug', 100, 11), enemy('绿叶守护者', 'forest-leafguard', 120, 12), enemy('树人战士', 'forest-treant', 130, 13), enemy('苔岩守卫', 'forest-stone', 140, 13)],
          boss: enemy('苔林熊灵', 'forest-bear', 220, 19, ['boss'])
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
          enemies: [enemy('鱼人长矛手', 'murloc-spear', 170, 18), enemy('青鳞斧卫', 'murloc-axe', 190, 18)],
          boss: enemy('紫袍鱼人祭司', 'murloc-mage', 340, 26, ['boss'])
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
          var guard = _extends({}, enemy('封洞石甲守卫', 'beetle', 1400, 6, ['armor']), {
            armor: {
              physical: 2,
              magic: 1
            }
          });
          return [encounter(id, 0, 'battle', function () {
            return 0;
          }), {
            kind: 'rest'
          }, {
            kind: 'battle',
            enemies: [guard.hp],
            encounters: [guard],
            delivery: {
              required: 3,
              starts: [43, 45, 53],
              exits: [48, 49]
            }
          }, {
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
          encounters: [enemy('灰狼', 'wolf', 72, 3), enemy('林狼', 'forest-wolf', 72, 3)]
        }, {
          kind: 'battle',
          coinReward: 4,
          enemies: [65],
          encounters: [enemy('苔芽小虫', 'forest-bug', 65, 3)]
        }, {
          kind: 'rescue'
        }, {
          kind: 'battle',
          coinReward: 4,
          enemies: [78],
          encounters: [enemy('迷路的树人', 'forest-treant', 78, 4)]
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

System.register("chunks:///_virtual/cocos-board-adapter.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Board.ts', './BattleSession.ts', './board-bridge.ts'], function (exports) {
  var _extends, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, adjacent, matches, legalMove, BattleSession, createBoardBridge;
  return {
    setters: [function (module) {
      _extends = module.extends;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      adjacent = module.adjacent;
      matches = module.matches;
      legalMove = module.legalMove;
    }, function (module) {
      BattleSession = module.BattleSession;
    }, function (module) {
      createBoardBridge = module.createBoardBridge;
    }],
    execute: function () {
      exports({
        boardFromCells: boardFromCells,
        cellsFromBoard: cellsFromBoard,
        planBoardFacts: planBoardFacts,
        validExchange: validExchange
      });
      cclegacy._RF.push({}, "dab40jfZyhAxJC8jFNhsUGH", "cocos-board-adapter", undefined);
      function cellsFromBoard(board, marks) {
        return board.tiles.map(function (tile, index) {
          return {
            index: index,
            tile: _extends({}, tile),
            rescue: marks.includes(String(index))
          };
        });
      }
      function boardFromCells(cells) {
        var ordered = [].concat(cells).sort(function (a, b) {
          return a.index - b.index;
        });
        if (ordered.length !== 56 || ordered.some(function (cell, index) {
          return cell.index !== index;
        }) || new Set(ordered.map(function (cell) {
          return cell.tile.id;
        })).size !== 56) throw Error('Invalid cell mapping');
        return {
          board: {
            tiles: ordered.map(function (cell) {
              return _extends({}, cell.tile);
            })
          },
          marks: ordered.filter(function (c) {
            return c.rescue;
          }).map(function (c) {
            return String(c.index);
          })
        };
      }
      function validExchange(board, _ref) {
        var a = _ref[0],
          b = _ref[1];
        if (!board.tiles[a] || !board.tiles[b] || !adjacent(a, b)) return false;
        var colors = board.tiles.map(function (tile) {
          return tile.emblem;
        });
        var _ref2 = [colors[b], colors[a]];
        colors[a] = _ref2[0];
        colors[b] = _ref2[1];
        return matches(colors).length > 0;
      }
      function planBoardFacts(ticket, snapshot, intent, signal) {
        var config = snapshot.fixture.board;
        if (!config || !snapshot.state.board) throw Error('Missing board');
        if (!intent.pool.length || intent.pool.some(function (color) {
          return !Object.hasOwn(config.skills, color);
        })) throw Error('Invalid refill pool');
        var board = structuredClone(snapshot.state.board);
        var marks = new Set(snapshot.state.marks);
        if (ticket.wave !== undefined && ticket.wave > 1 && intent.swap) throw Error('Only first wave may swap');
        if (intent.swap && !validExchange(board, intent.swap)) throw Error('Exchange does not produce a match');
        var seed = snapshot.state.rng;
        var local = createBoardBridge(config, board, function () {
          return (seed = Math.imul(seed, 1664525) + 1013904223 >>> 0) / Math.pow(2, 32);
        });
        var steps = [];
        var seen = new Set();
        var append = function append(step) {
          var id = steps.length ? ticket.step + '/' + (steps.length + 1) : ticket.step;
          if (steps.length) steps[steps.length - 1].step.next = id;
          steps.push({
            id: id,
            step: step
          });
        };
        var ids = new Set(board.tiles.map(function (tile) {
          return tile.id;
        }));
        var _loop = function _loop() {
            signal == null || signal.throwIfAborted();
            var swap = wave === 1 ? intent.swap : undefined;
            var pattern = JSON.stringify([seed, board.tiles.map(function (t) {
              return [t.emblem, t.tier];
            }), Array.from(marks), swap != null ? swap : null]);
            if (seen.has(pattern)) throw Error('Repeated logical board state while planning');
            seen.add(pattern);
            var prefix = 'live:' + ticket.producerId + ':' + wave + ':';
            while (board.tiles.some(function (_, i) {
              return ids.has(prefix + i);
            })) prefix += ':';
            var match = _extends({
              wave: wave
            }, swap ? {
              swap: [].concat(swap)
            } : {}, {
              gravity: {
                mode: intent.gravity,
                pool: [].concat(intent.pool),
                idPrefix: prefix
              }
            });
            if (!local.canMatch(match)) return 0; // break
            var result = local.match(match);
            for (var _iterator = _createForOfIteratorHelperLoose(board.tiles), _step; !(_step = _iterator()).done;) {
              var t = _step.value;
              ids.add(t.id);
            }
            var cleared = result.removed.map(String).filter(function (id) {
              return marks["delete"](id);
            });
            append(_extends({
              match: match
            }, cleared.length ? {
              marks: cleared
            } : {}));
            if (ticket.wave !== undefined) {
              var colors = board.tiles.map(function (t) {
                return t.emblem;
              });
              if (matches(colors).length || !legalMove(colors)) steps[0].step.next = ticket.producerId + '/wave/' + (wave + 1);
              return {
                v: {
                  version: ticket.boardVersion,
                  steps: steps
                }
              };
            }
          },
          _ret;
        for (var wave = (_ticket$wave = ticket.wave) != null ? _ticket$wave : 1;; wave++) {
          var _ticket$wave;
          _ret = _loop();
          if (_ret === 0) break;
          if (_ret) return _ret.v;
        }
        if (!legalMove(board.tiles.map(function (t) {
          return t.emblem;
        }))) {
          var _intent$recovery;
          var recovery = structuredClone((_intent$recovery = intent.recovery) != null ? _intent$recovery : []);
          if (!local.recover(recovery)) throw Error('No approved recovery preserves enhanced tile identity');
          append({
            recover: recovery
          });
        }
        if (!steps.length && (ticket.wave === undefined || ticket.wave === 1)) throw Error('Board intent has no legal mutation');
        return {
          version: ticket.boardVersion,
          steps: steps
        };
      }
      var IsolatedBoardSession = exports('IsolatedBoardSession', /*#__PURE__*/function () {
        function IsolatedBoardSession(core) {
          this.session = new BattleSession();
          this.core = void 0;
          this.core = core;
        }
        var _proto = IsolatedBoardSession.prototype;
        _proto.resolve = /*#__PURE__*/function () {
          var _resolve = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(ticket, intent, prepare) {
            var _this = this;
            var next, snapshot, ok, _this$session$events$, _this$session$events$2, reason;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (prepare === void 0) {
                    prepare = function prepare() {};
                  }
                  if (this.core.acceptsBoardTicket(ticket)) {
                    _context2.next = 3;
                    break;
                  }
                  return _context2.abrupt("return", {
                    ok: false,
                    next: undefined
                  });
                case 3:
                  snapshot = this.core.snapshot();
                  _context2.next = 6;
                  return this.session.produce([/*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(signal) {
                    return _regeneratorRuntime().wrap(function _callee$(_context) {
                      while (1) switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return prepare(signal);
                        case 2:
                          signal.throwIfAborted();
                          return _context.abrupt("return", planBoardFacts(ticket, snapshot, intent, signal));
                        case 4:
                        case "end":
                          return _context.stop();
                      }
                    }, _callee);
                  }))], function (facts) {
                    next = _this.core.commitBoardFacts(ticket, facts);
                  });
                case 6:
                  ok = _context2.sent;
                  if (!ok && this.session.state === 'failed' && this.core.disposition === 'active') {
                    reason = (_this$session$events$ = (_this$session$events$2 = this.session.events.findLast(function (e) {
                      return e.kind === 'failed';
                    })) == null ? void 0 : _this$session$events$2.reason) != null ? _this$session$events$ : 'Board planning failed'; // The ticket is validated by the core; a foreign receipt cannot seal it.
                    try {
                      this.core.failBoard(ticket, reason);
                    } catch (_unused) {/* stale receipt */}
                  }
                  if (ok && this.core.disposition === 'terminal') this.session.finish();
                  return _context2.abrupt("return", {
                    ok: ok,
                    next: next
                  });
                case 10:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function resolve(_x, _x2, _x3) {
            return _resolve.apply(this, arguments);
          }
          return resolve;
        }();
        _proto.cancel = function cancel(reason) {
          this.core.cancel(reason);
          this.session.cancel();
        };
        return IsolatedBoardSession;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CombatSceneLab.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BattleMotion.ts', './Board.ts', './battle-core.ts', './formal-rules.ts', './cocos-board-adapter.ts'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, _extends, cclegacy, Node, UITransform, Graphics, Color, Vec3, tween, BattleMotion, newBoard, legalMove, createBattleCore, setupFormalRoom, IsolatedBoardSession, validExchange;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      UITransform = module.UITransform;
      Graphics = module.Graphics;
      Color = module.Color;
      Vec3 = module.Vec3;
      tween = module.tween;
    }, function (module) {
      BattleMotion = module.BattleMotion;
    }, function (module) {
      newBoard = module.newBoard;
      legalMove = module.legalMove;
    }, function (module) {
      createBattleCore = module.createBattleCore;
    }, function (module) {
      setupFormalRoom = module.setupFormalRoom;
    }, function (module) {
      IsolatedBoardSession = module.IsolatedBoardSession;
      validExchange = module.validExchange;
    }],
    execute: function () {
      exports('openCombatSceneLab', openCombatSceneLab);
      cclegacy._RF.push({}, "d161bhp9oZO+LbixTh3swzL", "CombatSceneLab", undefined);
      var pool = ['a', 'b', 'c', 'd'];
      var colors = ['#de7262', '#589dc9', '#a582da', '#79bd88'];
      var position = function position(i) {
        return new Vec3((i % 7 - 3) * 49, (3.5 - Math.floor(i / 7)) * 49, 0);
      };
      function openCombatSceneLab(parent, seed, formal) {
        if (seed === void 0) {
          seed = 8;
        }
        if (formal === void 0) {
          formal = false;
        }
        var root = new Node('M5-A isolated board');
        root.layer = parent.layer;
        parent.addChild(root);
        root.addComponent(UITransform).setContentSize(350, 400);
        var actor = new Node('职业演出');
        actor.layer = parent.layer;
        root.addChild(actor);
        actor.setPosition(-150, 220, 0);
        var actorArt = actor.addComponent(Graphics);
        actorArt.fillColor = Color.fromHEX(new Color(), '#ffdc87');
        actorArt.circle(0, 0, 15);
        actorArt.fill();
        actor.active = formal;
        var spans = [];
        var nodes = new Map();
        var rendered = new Set();
        var generation = 0,
          busy = false,
          motion = new BattleMotion();
        var core;
        var session;
        var journal = [];
        var presented = 0;
        function project(board, marks, animate) {
          var active = new Set(board.tiles.map(function (t) {
            return t.id;
          }));
          nodes.forEach(function (node, id) {
            if (!active.has(id)) {
              nodes["delete"](id);
              node.destroy();
            }
          });
          var waits = [];
          board.tiles.forEach(function (tile, i) {
            var _colors$indexOf;
            var node = nodes.get(tile.id);
            var goal = position(i);
            if (!node) {
              node = new Node(tile.id);
              node.layer = root.layer;
              root.addChild(node);
              node.setPosition(animate ? new Vec3(goal.x, goal.y + 35, 0) : goal);
              nodes.set(tile.id, node);
              node.addComponent(UITransform).setContentSize(45, 45);
              node.addComponent(Graphics);
            }
            var g = node.getComponent(Graphics);
            g.clear();
            g.fillColor = Color.fromHEX(new Color(), (_colors$indexOf = colors[(formal ? ['s', 'd', 'm', 'h'] : pool).indexOf(tile.emblem)]) != null ? _colors$indexOf : '#aaaabb');
            g.roundRect(-21, -21, 42, 42, 8);
            g.fill();
            if (tile.tier || marks.includes(String(i))) {
              g.lineWidth = tile.tier === 'advanced' ? 5 : 3;
              g.strokeColor = Color.fromHEX(new Color(), tile.tier ? '#ffe2a1' : '#ffffff');
              g.roundRect(-19, -19, 38, 38, 6);
              g.stroke();
            }
            if (animate && !node.position.equals(goal)) waits.push(motion.play(tween(node).to(motion.duration(.09), {
              position: goal
            })));else node.setPosition(goal);
          });
          return waits;
        }
        function start(initial) {
          var _core, _session;
          generation++;
          (_core = core) == null || _core.cancel('lab-room-change');
          (_session = session) == null || _session.cancel('lab-room-change');
          motion.cancel();
          motion = new BattleMotion();
          rendered.clear();
          journal = [];
          presented = 0;
          busy = false;
          spans.length = 0;
          root.setScale(1, 1, 1);
          actor.setPosition(-150, 220, 0);
          var fixture = {
            battleId: 'lab:' + generation,
            roomId: 'room:' + generation,
            seed: seed,
            partyHP: 70,
            enemies: {
              dummy: 99999
            },
            combat: {
              enemyOrder: ['dummy']
            },
            swaps: {
              move: 'open'
            },
            steps: {},
            board: {
              initial: initial,
              skills: Object.fromEntries(pool.map(function (c) {
                return [c, {
                  actor: 'A',
                  ordinary: 'A1',
                  skill: 'silver',
                  advanced: 'gold'
                }];
              }))
            },
            skills: {
              A1: {},
              A2: {},
              B1: {},
              silver: {},
              gold: {}
            },
            equipment: [{
              id: 'B1',
              actor: 'A',
              trigger: 'ON_CAST',
              skill: 'A1',
              limit: 1,
              request: {
                kind: 'skill',
                command: {
                  actor: 'B',
                  skill: 'B1',
                  wave: 1
                }
              }
            }, {
              id: 'A2',
              actor: 'A',
              trigger: 'ON_CAST',
              skill: 'A1',
              limit: 1,
              request: {
                kind: 'skill',
                command: {
                  actor: 'A',
                  skill: 'A2',
                  wave: 1
                }
              }
            }]
          };
          core = createBattleCore(formal ? setupFormalRoom({
            battleId: fixture.battleId,
            roomId: fixture.roomId,
            seed: seed,
            hp: 70,
            maxHP: 100,
            dp: 0,
            maxDP: 40,
            enemyHP: {
              dummy: 99999
            },
            enemies: [{
              id: 'dummy',
              attack: 5,
              tags: []
            }],
            tutorial: false,
            roles: ['s', 'd', 'm', 'h'],
            attacks: {
              s: 27,
              d: 18,
              m: 23,
              h: 12
            },
            gear: [],
            buffs: {},
            tiles: initial,
            rescue: [],
            swaps: {
              move: 'open'
            }
          }) : fixture, {
            boardMode: 'external',
            generation: generation
          });
          session = new IsolatedBoardSession(core);
          project({
            tiles: initial
          }, [], false);
        }
        function present(event) {
          if (rendered.has(event.eventId) || !journal.some(function (x) {
            return x.eventId === event.eventId;
          })) return undefined;
          rendered.add(event.eventId);
          var frame = core.frame(event.eventId);
          if (frame) return project(frame.board, frame.marks, true);
          if (event.type === 'CAST_STARTED') return [motion.play(tween(root).to(motion.duration(.035), {
            scale: new Vec3(1.025, 1.025, 1)
          }).to(motion.duration(.035), {
            scale: new Vec3(1, 1, 1)
          }))];
          return [];
        }
        var r = seed;
        start(newBoard(formal ? ['s', 'd', 'm', 'h'] : pool, function () {
          return (r = Math.imul(r, 1664525) + 1013904223 >>> 0) / Math.pow(2, 32);
        }).map(function (emblem, i) {
          return {
            id: 'start:' + i,
            emblem: emblem
          };
        }));
        var api = {
          swap: function swap(input) {
            return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var board, move, token, ticket, result, events, playLane, _iterator2, _step2, event, _present, _event;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    board = core.snapshot().state.board;
                    move = input != null ? input : legalMove(board.tiles.map(function (t) {
                      return t.emblem;
                    }));
                    if (!(busy || !move || !validExchange(board, move))) {
                      _context2.next = 4;
                      break;
                    }
                    return _context2.abrupt("return", false);
                  case 4:
                    token = generation;
                    busy = true;
                    _context2.prev = 6;
                    ticket = core.submit({
                      swap: 'move'
                    });
                  case 8:
                    if (!ticket) {
                      _context2.next = 17;
                      break;
                    }
                    _context2.next = 11;
                    return session.resolve(ticket, _extends({}, ticket.wave === undefined || ticket.wave === 1 ? {
                      swap: move
                    } : {}, {
                      pool: formal ? ['s', 'd', 'm', 'h'] : pool,
                      gravity: 'mine'
                    }));
                  case 11:
                    result = _context2.sent;
                    if (!(token !== generation || !result.ok)) {
                      _context2.next = 14;
                      break;
                    }
                    return _context2.abrupt("return", false);
                  case 14:
                    ticket = result.next;
                    _context2.next = 8;
                    break;
                  case 17:
                    journal = core.snapshot().events;
                    if (!formal) {
                      _context2.next = 28;
                      break;
                    }
                    events = journal.slice(presented);
                    playLane = /*#__PURE__*/function () {
                      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(lane) {
                        var _iterator, _step, event, frame, _start, waits, _result;
                        return _regeneratorRuntime().wrap(function _callee$(_context) {
                          while (1) switch (_context.prev = _context.next) {
                            case 0:
                              _iterator = _createForOfIteratorHelperLoose(events);
                            case 1:
                              if ((_step = _iterator()).done) {
                                _context.next = 18;
                                break;
                              }
                              event = _step.value;
                              if (!(token !== generation)) {
                                _context.next = 5;
                                break;
                              }
                              return _context.abrupt("return");
                            case 5:
                              if (!(event.type !== (lane === 'board' ? 'MATCH_RESOLVED' : 'CAST_STARTED'))) {
                                _context.next = 7;
                                break;
                              }
                              return _context.abrupt("continue", 16);
                            case 7:
                              frame = lane === 'board' ? core.frame(event.eventId) : undefined;
                              _start = performance.now();
                              waits = frame ? project(frame.board, frame.marks, true) : [motion.play(tween(actor).to(.065, {
                                position: new Vec3(-105, 220, 0)
                              }).to(.065, {
                                position: new Vec3(-150, 220, 0)
                              }))];
                              _context.next = 12;
                              return Promise.all(waits);
                            case 12:
                              _result = _context.sent;
                              if (!(token !== generation)) {
                                _context.next = 15;
                                break;
                              }
                              return _context.abrupt("return");
                            case 15:
                              spans.push({
                                lane: lane,
                                id: event.eventId,
                                start: _start,
                                end: performance.now(),
                                completed: waits.length > 0 && _result.every(Boolean)
                              });
                            case 16:
                              _context.next = 1;
                              break;
                            case 18:
                            case "end":
                              return _context.stop();
                          }
                        }, _callee);
                      }));
                      return function playLane(_x) {
                        return _ref.apply(this, arguments);
                      };
                    }();
                    _context2.next = 23;
                    return Promise.all([playLane('board'), playLane('actor')]);
                  case 23:
                    if (!(token !== generation)) {
                      _context2.next = 25;
                      break;
                    }
                    return _context2.abrupt("return", false);
                  case 25:
                    for (_iterator2 = _createForOfIteratorHelperLoose(events); !(_step2 = _iterator2()).done;) {
                      event = _step2.value;
                      rendered.add(event.eventId);
                      core.acknowledgePresentation(event.eventId);
                    }
                    presented = journal.length;
                    return _context2.abrupt("return", true);
                  case 28:
                    if (!(presented < journal.length)) {
                      _context2.next = 37;
                      break;
                    }
                    _event = journal[presented];
                    if (!(token !== generation)) {
                      _context2.next = 32;
                      break;
                    }
                    return _context2.abrupt("return", false);
                  case 32:
                    _context2.next = 34;
                    return Promise.all((_present = present(_event)) != null ? _present : []);
                  case 34:
                    presented++;
                    _context2.next = 28;
                    break;
                  case 37:
                    return _context2.abrupt("return", token === generation);
                  case 38:
                    _context2.prev = 38;
                    if (token === generation) busy = false;
                    return _context2.finish(38);
                  case 41:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, null, [[6,, 38, 41]]);
            }))();
          },
          carry: function carry() {
            start(core.snapshot().state.board.tiles);
          },
          duplicate: function duplicate() {
            return journal.length ? present(journal[0]) !== undefined : false;
          },
          state: function state() {
            return {
              generation: generation,
              busy: busy,
              journal: journal,
              spans: spans.slice(),
              tiles: core.snapshot().state.board.tiles.map(function (tile) {
                var _nodes$get, _nodes$get2, _nodes$get3;
                return _extends({}, tile, {
                  node: (_nodes$get = nodes.get(tile.id)) == null ? void 0 : _nodes$get.uuid,
                  x: (_nodes$get2 = nodes.get(tile.id)) == null ? void 0 : _nodes$get2.position.x,
                  y: (_nodes$get3 = nodes.get(tile.id)) == null ? void 0 : _nodes$get3.position.y
                });
              }),
              nodes: nodes.size
            };
          }
        };
        root.once(Node.EventType.NODE_DESTROYED, function () {
          generation++;
          session.cancel('lab-destroy');
          motion.cancel();
        });
        return api;
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
        x: -73,
        front: true
      }, {
        x: -110,
        front: false
      }];
      var rangedSlots = [{
        x: -145,
        front: true
      }, {
        x: -185,
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

System.register("chunks:///_virtual/ContentGroups.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "06af4B/inVHDYkclq4r6w/r", "ContentGroups", undefined);
      // Generated by scripts/content-manifest.py; ownership in content-groups.json.
      var contentGroups = exports('contentGroups', {
        "opening": ["advanced-frame", "combat-impact", "cry", "fist", "forest-lab-far", "forest-lab-front", "forest-lab-ground", "forest-lab-middle", "forest-lab-midground", "forest-lab-mist", "forest-props", "forest-wolf", "game-logo", "hero-s", "s", "skill-frame", "stone", "trial-ui-back", "trial-ui-banner", "trial-ui-button-off", "trial-ui-button", "wolf"],
        "tutorial": ["boss", "forest-bug", "forest-treant", "h", "hero-h", "npc-villager-down", "npc-villager", "staff"],
        "map": ["map-parchment", "travel-forest-plains", "travel-plains", "travel-village-edge", "world-travel", "world-village-cut"],
        "village": ["d", "dungeon-chest", "dungeon-merchant", "dungeon-traveler", "gear-arrow", "gear-blade", "gear-buckler", "gear-guardcore", "gear-healcore", "gear-magiccore", "gear-shield", "gear-stage", "gear-swordcore", "hero-d", "npc-chief", "npc-innkeeper", "npc-shop", "npc-smith", "slot-accessory", "slot-armor", "slot-main", "slot-off", "tool-base", "travel-village-plains", "village-chief-stage", "village-navigation", "village-shop-stage", "village-smith-stage", "village-stage", "village-tavern-stage"],
        "forest": ["bear", "boar", "forest-bear", "forest-leafguard", "forest-reel", "forest-stone", "map-forest"],
        "mine": ["bat", "beetle", "golem", "map-mine", "mine-reel", "travel-mine-edge", "travel-mine-plains"],
        "swamp": ["frog", "map-swamp", "murloc-axe", "murloc-mage", "murloc-spear", "swamp-reel", "travel-swamp-plains", "vine"],
        "tower": ["dragon", "ghost", "hero-m", "knight", "lich", "m", "map-tower", "tower-reel", "travel-tower-plains", "wizard"]
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ContentQueue.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "687a2ajI4xEXJTs/6EdLZYz", "ContentQueue", undefined);
      /** Background downloads are independent of scenes and resident textures. */
      var ContentQueue = exports('ContentQueue', /*#__PURE__*/function () {
        function ContentQueue(download, delay, options) {
          if (delay === void 0) {
            delay = function delay(ms) {
              return new Promise(function (r) {
                return setTimeout(r, ms);
              });
            };
          }
          if (options === void 0) {
            options = {};
          }
          this.jobs = new Map();
          this.order = [];
          this.running = false;
          this.stopped = false;
          this.active = void 0;
          this.wake = void 0;
          this.audit = [];
          this.download = void 0;
          this.delay = void 0;
          this.options = void 0;
          this.download = download;
          this.delay = delay;
          this.options = options;
        }
        var _proto = ContentQueue.prototype;
        _proto.enqueue = function enqueue(names, urgent) {
          var _this$wake,
            _this = this;
          if (urgent === void 0) {
            urgent = false;
          }
          if (this.stopped) return Promise.reject(Error('Content queue disposed'));
          var _loop = function _loop() {
            var name = _step.value;
            if (!_this.jobs.has(name)) {
              var resolve, reject;
              var promise = new Promise(function (ok, fail) {
                resolve = ok;
                reject = fail;
              });
              // A background enqueue may have no active waiter at component destruction.
              void promise["catch"](function () {});
              _this.jobs.set(name, {
                state: 'queued',
                attempts: 0,
                promise: promise,
                resolve: resolve,
                reject: reject,
                readyAt: 0
              });
              _this.order.push(name);
            }
          };
          for (var _iterator = _createForOfIteratorHelperLoose(new Set(names)), _step; !(_step = _iterator()).done;) {
            _loop();
          }
          if (urgent) {
            for (var _iterator2 = _createForOfIteratorHelperLoose(names), _step2; !(_step2 = _iterator2()).done;) {
              var n = _step2.value;
              var j = this.jobs.get(n);
              if (j.state === 'retry') j.readyAt = 0;
            }
            this.order.sort(function (a, b) {
              return Number(names.includes(b)) - Number(names.includes(a));
            });
          }
          (_this$wake = this.wake) == null || _this$wake.call(this);
          void this.pump();
          return Promise.all(names.map(function (n) {
            return _this.jobs.get(n).promise;
          })).then(function () {});
        };
        _proto.snapshot = function snapshot() {
          return Array.from(this.jobs.entries()).map(function (_ref) {
            var name = _ref[0],
              j = _ref[1];
            return {
              name: name,
              state: j.state,
              attempts: j.attempts,
              error: j.error
            };
          });
        };
        _proto.dispose = function dispose() {
          var _this$active, _this$wake2;
          if (this.stopped) return;
          this.stopped = true;
          (_this$active = this.active) == null || _this$active.abort();
          (_this$wake2 = this.wake) == null || _this$wake2.call(this);
          for (var _iterator3 = _createForOfIteratorHelperLoose(this.jobs), _step3; !(_step3 = _iterator3()).done;) {
            var _step3$value = _step3.value,
              _name = _step3$value[0],
              j = _step3$value[1];
            if (j.state !== 'downloaded') {
              j.state = 'cancelled';
              this.record(_name, j);
              j.reject(Error('Content queue disposed'));
            }
          }
        };
        _proto.attempt = /*#__PURE__*/function () {
          var _attempt = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(name) {
            var _this2 = this;
            var controller, timer, finished, progress, abort, interrupted;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  controller = this.active = new AbortController();
                  finished = false;
                  progress = function progress() {
                    var _this2$options$idleMs;
                    if (finished || controller.signal.aborted) return;
                    clearTimeout(timer);
                    timer = setTimeout(function () {
                      return controller.abort();
                    }, (_this2$options$idleMs = _this2.options.idleMs) != null ? _this2$options$idleMs : 25000);
                  };
                  interrupted = new Promise(function (_, reject) {
                    abort = function abort() {
                      return reject(Error(_this2.stopped ? 'Content queue disposed' : 'Download stalled: ' + name));
                    };
                    controller.signal.addEventListener('abort', abort, {
                      once: true
                    });
                  });
                  progress();
                  _context.prev = 5;
                  _context.next = 8;
                  return Promise.race([interrupted, Promise.resolve().then(function () {
                    return _this2.download(name, controller.signal, progress);
                  })]);
                case 8:
                  _context.prev = 8;
                  finished = true;
                  clearTimeout(timer);
                  controller.signal.removeEventListener('abort', abort);
                  if (this.active === controller) this.active = undefined;
                  return _context.finish(8);
                case 14:
                case "end":
                  return _context.stop();
              }
            }, _callee, this, [[5,, 8, 14]]);
          }));
          function attempt(_x) {
            return _attempt.apply(this, arguments);
          }
          return attempt;
        }();
        _proto.pump = /*#__PURE__*/function () {
          var _pump = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _this3 = this;
            var _loop2, _ret;
            return _regeneratorRuntime().wrap(function _callee2$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  if (!(this.running || this.stopped)) {
                    _context3.next = 2;
                    break;
                  }
                  return _context3.abrupt("return");
                case 2:
                  this.running = true;
                  _context3.prev = 3;
                  _loop2 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop2() {
                    var index, _ms, _timer, notified, name, j, _this3$options$retryM;
                    return _regeneratorRuntime().wrap(function _loop2$(_context2) {
                      while (1) switch (_context2.prev = _context2.next) {
                        case 0:
                          index = _this3.order.findIndex(function (n) {
                            return _this3.jobs.get(n).readyAt <= Date.now();
                          });
                          if (!(index < 0)) {
                            _context2.next = 12;
                            break;
                          }
                          _ms = Math.max(1, Math.min.apply(Math, _this3.order.map(function (n) {
                            return _this3.jobs.get(n).readyAt;
                          })) - Date.now());
                          notified = new Promise(function (resolve) {
                            _this3.wake = resolve;
                            _timer = setTimeout(resolve, _ms);
                          });
                          _context2.prev = 4;
                          _context2.next = 7;
                          return notified;
                        case 7:
                          _context2.prev = 7;
                          clearTimeout(_timer);
                          _this3.wake = undefined;
                          return _context2.finish(7);
                        case 11:
                          return _context2.abrupt("return", 0);
                        case 12:
                          name = _this3.order.splice(index, 1)[0], j = _this3.jobs.get(name);
                          j.state = 'downloading';
                          j.attempts++;
                          _this3.record(name, j);
                          _context2.prev = 16;
                          _context2.next = 19;
                          return _this3.attempt(name);
                        case 19:
                          if (!_this3.stopped) {
                            _context2.next = 21;
                            break;
                          }
                          return _context2.abrupt("return", {
                            v: void 0
                          });
                        case 21:
                          j.state = 'downloaded';
                          j.error = undefined;
                          _this3.record(name, j);
                          j.resolve();
                          _context2.next = 36;
                          break;
                        case 27:
                          _context2.prev = 27;
                          _context2.t0 = _context2["catch"](16);
                          if (!_this3.stopped) {
                            _context2.next = 31;
                            break;
                          }
                          return _context2.abrupt("return", {
                            v: void 0
                          });
                        case 31:
                          j.state = 'retry';
                          j.error = String(_context2.t0.message);
                          j.readyAt = Date.now() + Math.min(30000, ((_this3$options$retryM = _this3.options.retryMs) != null ? _this3$options$retryM : 1000) * Math.pow(2, Math.min(j.attempts - 1, 5)));
                          _this3.record(name, j);
                          _this3.order.push(name);
                        case 36:
                          _context2.next = 38;
                          return _this3.delay(30);
                        case 38:
                        case "end":
                          return _context2.stop();
                      }
                    }, _loop2, null, [[4,, 7, 11], [16, 27]]);
                  });
                case 5:
                  if (!(this.order.length && !this.stopped)) {
                    _context3.next = 14;
                    break;
                  }
                  return _context3.delegateYield(_loop2(), "t0", 7);
                case 7:
                  _ret = _context3.t0;
                  if (!(_ret === 0)) {
                    _context3.next = 10;
                    break;
                  }
                  return _context3.abrupt("continue", 5);
                case 10:
                  if (!_ret) {
                    _context3.next = 12;
                    break;
                  }
                  return _context3.abrupt("return", _ret.v);
                case 12:
                  _context3.next = 5;
                  break;
                case 14:
                  _context3.prev = 14;
                  this.running = false;
                  return _context3.finish(14);
                case 17:
                case "end":
                  return _context3.stop();
              }
            }, _callee2, this, [[3,, 14, 17]]);
          }));
          function pump() {
            return _pump.apply(this, arguments);
          }
          return pump;
        }();
        _proto.record = function record(name, j) {
          this.audit.push({
            name: name,
            state: j.state,
            at: Date.now(),
            attempt: j.attempts,
            error: j.error
          });
          if (this.audit.length > 256) this.audit.shift();
        };
        return ContentQueue;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/damage.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './effects.ts'], function (exports) {
  var _extends, _createForOfIteratorHelperLoose, _regeneratorRuntime, cclegacy, effectEngine, enemy, hero, party;
  return {
    setters: [function (module) {
      _extends = module.extends;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      effectEngine = module.effectEngine;
      enemy = module.enemy;
      hero = module.hero;
      party = module.party;
    }],
    execute: function () {
      exports('combatPipeline', combatPipeline);
      cclegacy._RF.push({}, "a00c5XsJP5H+aWpseApP+XH", "damage", undefined);
      var clamp = function clamp(n) {
        return Math.min(4, Math.max(0, Math.trunc(n)));
      };
      var armor = function armor(value) {
        var _value$physical, _value$magic;
        return {
          physical: clamp((_value$physical = value == null ? void 0 : value.physical) != null ? _value$physical : 0),
          magic: clamp((_value$magic = value == null ? void 0 : value.magic) != null ? _value$magic : 0)
        };
      };
      function combatPipeline(host) {
        var _config$maxPartyHP, _config$enemyOrder, _config$partyDP, _config$partyDP2, _ref, _config$maxPartyDP, _config$partyDP3, _config$partyDP4, _config$definitions;
        var state = host.state,
          config = host.config,
          emit = host.emit;
        var maxPartyHP = (_config$maxPartyHP = config.maxPartyHP) != null ? _config$maxPartyHP : state.partyHP,
          maxEnemyHP = _extends({}, state.enemies);
        if (config.maxPartyHP !== undefined && (!Number.isSafeInteger(maxPartyHP) || maxPartyHP < state.partyHP || maxPartyHP <= 0)) throw new Error('Invalid maximum party HP');
        // Object order is not encoded by canonical JSON hashes. Make tie order explicit and reproducible.
        var enemyOrder = (_config$enemyOrder = config.enemyOrder) != null ? _config$enemyOrder : Object.keys(state.enemies).sort();
        if (enemyOrder.length !== Object.keys(state.enemies).length || new Set(enemyOrder).size !== enemyOrder.length || enemyOrder.some(function (id) {
          return !Object.hasOwn(state.enemies, id);
        })) throw new Error('Invalid enemy order');
        if (!Number.isSafeInteger((_config$partyDP = config.partyDP) != null ? _config$partyDP : 0) || ((_config$partyDP2 = config.partyDP) != null ? _config$partyDP2 : 0) < 0) throw new Error('Invalid party DP');
        var maxPartyDP = (_ref = (_config$maxPartyDP = config.maxPartyDP) != null ? _config$maxPartyDP : config.partyDP) != null ? _ref : 0;
        if (!Number.isSafeInteger(maxPartyDP) || maxPartyDP < ((_config$partyDP3 = config.partyDP) != null ? _config$partyDP3 : 0)) throw new Error('Invalid maximum DP');
        var runtime = {
          partyDP: (_config$partyDP4 = config.partyDP) != null ? _config$partyDP4 : 0,
          maxPartyDP: maxPartyDP,
          maxPartyHP: maxPartyHP,
          maxEnemyHP: maxEnemyHP,
          partyArmor: armor(config.partyArmor),
          attacks: _extends({}, config.attacks),
          enemyArmor: Object.fromEntries(enemyOrder.map(function (id) {
            var _config$enemies;
            return [id, armor((_config$enemies = config.enemies) == null || (_config$enemies = _config$enemies[id]) == null ? void 0 : _config$enemies.armor)];
          })),
          enemyTags: Object.fromEntries(enemyOrder.map(function (id) {
            var _config$enemies$id$ta, _config$enemies2;
            return [id, [].concat((_config$enemies$id$ta = (_config$enemies2 = config.enemies) == null || (_config$enemies2 = _config$enemies2[id]) == null ? void 0 : _config$enemies2.tags) != null ? _config$enemies$id$ta : [])];
          })),
          enemyOrder: enemyOrder,
          effects: {
            instances: [],
            nextId: 1
          },
          roomEnded: false
        };
        var effectParent = null;
        var effects = effectEngine(runtime.effects, (_config$definitions = config.definitions) != null ? _config$definitions : {}, function () {
          return state.roundId;
        }, function (type, payload, source, target) {
          emit('FACT', type, effectParent, payload, source, target);
        }, function (owner) {
          var _runtime$enemyTags$ow;
          return owner.kind === 'ENEMY' && ((_runtime$enemyTags$ow = runtime.enemyTags[owner.id]) != null ? _runtime$enemyTags$ow : []).some(function (t) {
            return t === 'boss' || t === 'stun-immune';
          });
        });
        var hp = function hp(owner) {
          return owner.kind === 'PARTY' ? state.partyHP : owner.kind === 'ENEMY' && Object.hasOwn(state.enemies, owner.id) ? state.enemies[owner.id] : 0;
        };
        var sourceOwner = function sourceOwner(actor, enemyActor) {
          return enemyActor ? enemy(actor) : hero(actor);
        };
        var validOwner = function validOwner(owner) {
          return owner.kind === 'HERO' || hp(owner) > 0;
        };
        var applyEffect = function applyEffect(id, owner, source, potency) {
          if (validOwner(owner)) effects.apply(id, owner, source, potency);
        };
        function requireTarget(target, operation) {
          if ((target == null ? void 0 : target.kind) === 'PARTY' && target.id === party.id || (target == null ? void 0 : target.kind) === 'ENEMY' && typeof target.id === 'string' && Object.hasOwn(state.enemies, target.id)) return;
          throw new Error('Invalid ' + operation + ' target: ' + JSON.stringify(target));
        }
        function targetOf(target) {
          if (target !== 'front') return target;
          var id = runtime.enemyOrder.find(function (id) {
            return state.enemies[id] > 0;
          });
          return id === undefined ? null : enemy(id);
        }
        function restoreDP(amount, parent, actor) {
          var gained = Math.min(runtime.maxPartyDP - runtime.partyDP, amount);
          runtime.partyDP += gained;
          if (gained > 0) emit('FACT', 'DP_RESTORED', parent, {
            amount: gained
          }, actor, party.id);
        }
        function damage(parent, actor, target, type, raw) {
          if (!Number.isFinite(raw) || raw < 0 || !['PHYSICAL', 'MAGICAL'].includes(type)) throw new Error('Invalid damage request');
          requireTarget(target, 'damage');
          var current = hp(target);
          var active = effects.on(target);
          var layers = target.kind === 'PARTY' ? runtime.partyArmor : runtime.enemyArmor[target.id];
          var totals = _extends({}, layers != null ? layers : armor());
          for (var _iterator = _createForOfIteratorHelperLoose(active), _step; !(_step = _iterator()).done;) {
            var _mod$physical, _mod$magic;
            var i = _step.value;
            var mod = effects.definition(i.definition).armor;
            if (i.definition === 'physicalShred') continue;
            totals.physical += ((_mod$physical = mod == null ? void 0 : mod.physical) != null ? _mod$physical : 0) * i.stacks * i.potency;
            totals.magic += ((_mod$magic = mod == null ? void 0 : mod.magic) != null ? _mod$magic : 0) * i.stacks * i.potency;
          }
          var effective = armor(totals);
          if (active.some(function (i) {
            return i.definition === 'physicalShred';
          })) effective.physical = Math.max(0, effective.physical - 1);
          var snapshot = Object.freeze({
            hp: current,
            dp: target.kind === 'PARTY' ? runtime.partyDP : 0,
            armor: Object.freeze(effective),
            effects: Object.freeze(active.map(function (i) {
              return i.id;
            })),
            validTarget: current > 0
          });
          var request = emit('COMMAND', 'HIT_REQUESTED', parent, {
            raw: raw,
            type: type
          }, actor, target.id);
          var afterArmor = Math.round(raw * (1 - .25 * effective[type === 'PHYSICAL' ? 'physical' : 'magic']));
          var dp = snapshot.validTarget ? Math.min(snapshot.dp, afterArmor) : 0;
          var lost = snapshot.validTarget ? Math.min(current, afterArmor - dp) : 0;
          var resolved = emit('FACT', 'HIT_RESOLVED', request, {
            snapshot: snapshot,
            afterArmor: afterArmor,
            dpDamage: dp,
            hpDamage: lost
          }, actor, target.id);
          if (dp || lost) {
            if (target.kind === 'PARTY') {
              runtime.partyDP -= dp;
              state.partyHP -= lost;
            } else state.enemies[target.id] -= lost;
            emit('FACT', 'DAMAGE_APPLIED', resolved, {
              damage: dp + lost,
              dpDamage: dp,
              hpDamage: lost,
              remainingHP: current - lost,
              remainingDP: snapshot.dp - dp
            }, actor, target.id);
          }
          return {
            resolved: resolved,
            landed: snapshot.validTarget,
            damaged: dp + lost > 0
          };
        }
        function operation(op, i, parent, target) {
          effectParent = parent;
          var owner = op.to === 'owner' ? i.owner : target;
          if ('apply' in op) applyEffect(op.apply, owner, i.source);else if ('cleanse' in op) effects.cleanse(owner, op.cleanse);else damage(parent, i.source, owner, op.type, op.damage);
        }
        function invoke(trigger, list, parent, actor, target, inflict) {
          if (inflict === void 0) {
            inflict = [];
          }
          var event = emit('FACT', trigger, parent, {}, actor, target.id);
          effectParent = event;
          for (var _iterator2 = _createForOfIteratorHelperLoose(inflict), _step2; !(_step2 = _iterator2()).done;) {
            var id = _step2.value;
            if (host.schedule) host.schedule({
              kind: 'effect',
              effect: {
                effect: id,
                owner: target
              }
            }, event, actor);else applyEffect(id, target, actor);
          }
          // Capture listeners once for each fact. New effects cannot subscribe to the same fact mid-dispatch.
          for (var _iterator3 = _createForOfIteratorHelperLoose(list), _step3; !(_step3 = _iterator3()).done;) {
            var i = _step3.value;
            if (effects.present(i)) {
              for (var _iterator4 = _createForOfIteratorHelperLoose((_effects$definition$h = (_effects$definition$h2 = effects.definition(i.definition).hooks) == null ? void 0 : _effects$definition$h2[trigger]) != null ? _effects$definition$h : []), _step4; !(_step4 = _iterator4()).done;) {
                var _effects$definition$h, _effects$definition$h2;
                var op = _step4.value;
                if (host.schedule) {
                  var owner = op.to === 'owner' ? i.owner : target;
                  var _request = 'apply' in op ? {
                    kind: 'effect',
                    effect: {
                      effect: op.apply,
                      owner: owner
                    }
                  } : 'cleanse' in op ? {
                    kind: 'cleanse',
                    owner: owner,
                    effect: op.cleanse
                  } : {
                    kind: 'damage',
                    strike: {
                      target: owner,
                      type: op.type,
                      flat: op.damage
                    }
                  };
                  host.schedule(_request, event, i.source);
                  continue;
                }
                if (trigger !== 'ROUND_END' && 'damage' in op) throw new Error('Damage hooks outside ROUND_END require a scheduled mechanic');
                operation(op, i, event, target);
              }
            }
          }
        }
        function settleStrike(s, parent, actor, raw, enemyActor) {
          if (enemyActor === void 0) {
            enemyActor = false;
          }
          return /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var target, listeners, _damage, resolved, landed, damaged;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  target = targetOf(s.target);
                  if (target) {
                    _context.next = 3;
                    break;
                  }
                  return _context.abrupt("return");
                case 3:
                  listeners = effects.on.apply(effects, [sourceOwner(actor, enemyActor)].concat(enemyActor ? [] : [party], [target]));
                  _damage = damage(parent, actor, target, s.type, raw), resolved = _damage.resolved, landed = _damage.landed, damaged = _damage.damaged;
                  if (landed) invoke('ON_HIT', listeners, resolved, actor, target, s.onHit);
                  if (damaged) invoke('ON_DAMAGE_DEALT', listeners, resolved, actor, target, s.onDamage);
                  if (!host.flush) {
                    _context.next = 9;
                    break;
                  }
                  return _context.delegateYield(host.flush(), "t0", 9);
                case 9:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          })();
        }
        for (var _iterator5 = _createForOfIteratorHelperLoose((_config$initialEffect = config.initialEffects) != null ? _config$initialEffect : []), _step5; !(_step5 = _iterator5()).done;) {
          var _config$initialEffect;
          var initial = _step5.value;
          applyEffect(initial.effect, initial.owner, 'fixture', initial.potency);
        }
        return {
          runtime: runtime,
          derivedDamage: /*#__PURE__*/_regeneratorRuntime().mark(function derivedDamage(strike, parent, actor) {
            var _strike$flat;
            return _regeneratorRuntime().wrap(function derivedDamage$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  return _context2.delegateYield(settleStrike(strike, parent, actor, (_strike$flat = strike.flat) != null ? _strike$flat : 0), "t0", 1);
                case 1:
                case "end":
                  return _context2.stop();
              }
            }, derivedDamage);
          }),
          canTarget: function canTarget(target) {
            var owner = targetOf(target);
            if (!owner) return false;
            requireTarget(owner, 'damage');
            return hp(owner) > 0;
          },
          canInflict: function canInflict(entry) {
            return validOwner(entry.owner) && effects.canApply(entry.effect, entry.owner, entry.potency);
          },
          inflict: function inflict(entry, parent, actor) {
            effectParent = parent;
            applyEffect(entry.effect, entry.owner, actor, entry.potency);
          },
          cleanseOldestNegative: function cleanseOldestNegative(parent) {
            var oldest = runtime.effects.instances.find(function (i) {
              return (i.owner.kind === 'PARTY' || i.owner.kind === 'HERO') && effects.definition(i.definition).negative && effects.definition(i.definition).cleansable;
            });
            if (oldest) {
              effectParent = parent;
              effects.removeOne(oldest);
            }
          },
          cleanse: function cleanse(owner, id, parent) {
            effectParent = parent;
            effects.cleanse(owner, id);
          },
          cast: function cast(actor, action, enemyActor, command) {
            var _action$strikes;
            if (enemyActor === void 0) {
              enemyActor = false;
            }
            var list = effects.on.apply(effects, enemyActor ? [enemy(actor)] : [party, hero(actor)]);
            for (var _iterator6 = _createForOfIteratorHelperLoose((_action$strikes3 = action.strikes) != null ? _action$strikes3 : []), _step6; !(_step6 = _iterator6()).done;) {
              var _action$strikes3;
              var s = _step6.value;
              if (s.target !== 'front') requireTarget(s.target, 'damage');
            }
            for (var _iterator7 = _createForOfIteratorHelperLoose((_action$heal2 = action.heal) != null ? _action$heal2 : []), _step7; !(_step7 = _iterator7()).done;) {
              var _action$heal2;
              var h = _step7.value;
              requireTarget(h.target, 'healing');
            }
            if (action.restoreDP !== undefined && (!Number.isSafeInteger(action.restoreDP) || action.restoreDP < 0)) throw new Error('Invalid shield restoration');
            var legalAttack = ((_action$strikes = action.strikes) != null ? _action$strikes : []).some(function (s) {
              var target = targetOf(s.target);
              return target !== null && hp(target) > 0;
            });
            var applicable = list.filter(function (i) {
              var def = effects.definition(i.definition);
              return (!def.attackOnly || legalAttack) && (!def.onlySkill || def.onlySkill === (command == null ? void 0 : command.skill));
            });
            var attack = Object.hasOwn(runtime.attacks, actor) ? runtime.attacks[actor] : 0;
            var bonus = applicable.reduce(function (sum, i) {
              var _command$length, _rule$minLength, _rule$minWave;
              var rule = effects.definition(i.definition).castBonus;
              return rule && rule.skill === (command == null ? void 0 : command.skill) && ((_command$length = command.length) != null ? _command$length : 0) >= ((_rule$minLength = rule.minLength) != null ? _rule$minLength : 0) && command.wave >= ((_rule$minWave = rule.minWave) != null ? _rule$minWave : 0) ? sum + Math.round(attack * rule.attackRatio * i.potency * i.stacks) : sum;
            }, 0);
            var snapshot = Object.freeze({
              attack: attack,
              bonus: bonus,
              multiplier: applicable.reduce(function (m, i) {
                var _effects$definition$a;
                return m * Math.pow(1 + (((_effects$definition$a = effects.definition(i.definition).attackScale) != null ? _effects$definition$a : 1) - 1) * i.potency, i.stacks);
              }, 1),
              effects: Object.freeze(applicable.map(function (i) {
                return i.id;
              }))
            });
            return {
              snapshot: snapshot,
              apply: /*#__PURE__*/_regeneratorRuntime().mark(function apply(parent) {
                var _iterator8, _step8, i, _iterator9, _step9, _action$strikes2, _s$flat, _s$ratio, s, _iterator10, _step10, _action$applyEffects, entry, _iterator11, _step11, _action$cleanse, _entry, _iterator12, _step12, _action$heal, _step12$value, _target, amount, conversion, max, gained, conversions, rates, rate, _i$id, _i, dp;
                return _regeneratorRuntime().wrap(function apply$(_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                    case 0:
                      effectParent = parent;
                      for (_iterator8 = _createForOfIteratorHelperLoose(applicable); !(_step8 = _iterator8()).done;) {
                        i = _step8.value;
                        if (effects.definition(i.definition).lifecycle === 'CAST_COUNT') effects.consume(i);
                      }
                      if (!host.flush) {
                        _context3.next = 4;
                        break;
                      }
                      return _context3.delegateYield(host.flush(), "t0", 4);
                    case 4:
                      _iterator9 = _createForOfIteratorHelperLoose((_action$strikes2 = action.strikes) != null ? _action$strikes2 : []);
                    case 5:
                      if ((_step9 = _iterator9()).done) {
                        _context3.next = 12;
                        break;
                      }
                      s = _step9.value;
                      if (targetOf(s.target)) {
                        _context3.next = 9;
                        break;
                      }
                      return _context3.abrupt("continue", 10);
                    case 9:
                      return _context3.delegateYield(settleStrike(s, parent, actor, (((_s$flat = s.flat) != null ? _s$flat : 0) + ((_s$ratio = s.ratio) != null ? _s$ratio : 0) * snapshot.attack + (s.randomBonus === undefined ? 0 : Math.floor(host.random() * (s.randomBonus + 1)))) * snapshot.multiplier + (s.skipCastBonus ? 0 : snapshot.bonus), enemyActor), "t1", 10);
                    case 10:
                      _context3.next = 5;
                      break;
                    case 12:
                      if (action.restoreDP !== undefined && state.partyHP > 0) restoreDP(action.restoreDP, parent, actor);
                      effectParent = parent;
                      for (_iterator10 = _createForOfIteratorHelperLoose((_action$applyEffects = action.applyEffects) != null ? _action$applyEffects : []); !(_step10 = _iterator10()).done;) {
                        entry = _step10.value;
                        applyEffect(entry.effect, entry.owner, actor, entry.potency);
                      }
                      for (_iterator11 = _createForOfIteratorHelperLoose((_action$cleanse = action.cleanse) != null ? _action$cleanse : []); !(_step11 = _iterator11()).done;) {
                        _entry = _step11.value;
                        effects.cleanse(_entry.owner, _entry.effect);
                      }
                      _iterator12 = _createForOfIteratorHelperLoose((_action$heal = action.heal) != null ? _action$heal : []);
                    case 17:
                      if ((_step12 = _iterator12()).done) {
                        _context3.next = 36;
                        break;
                      }
                      _step12$value = _step12.value, _target = _step12$value.target, amount = _step12$value.amount, conversion = _step12$value.conversion;
                      if (!(!Number.isFinite(amount) || amount < 0)) {
                        _context3.next = 21;
                        break;
                      }
                      throw new Error('Invalid heal');
                    case 21:
                      if (!(hp(_target) <= 0)) {
                        _context3.next = 23;
                        break;
                      }
                      return _context3.abrupt("continue", 34);
                    case 23:
                      max = _target.kind === 'PARTY' ? maxPartyHP : maxEnemyHP[_target.id];
                      gained = Math.min(max - hp(_target), amount);
                      conversions = _target.kind === 'PARTY' ? applicable.filter(function (i) {
                        return effects.definition(i.definition).overhealToDP !== undefined;
                      }) : [];
                      rates = conversions.map(function (i) {
                        return effects.definition(i.definition).overhealToDP * i.potency * i.stacks;
                      });
                      if (_target.kind === 'PARTY' && conversion !== undefined) rates.push(conversion);
                      if (!(rates.length > 1 && !config.overhealPolicy)) {
                        _context3.next = 30;
                        break;
                      }
                      throw new Error('Overheal stacking requires an explicit future policy');
                    case 30:
                      rate = config.overhealPolicy === 'MAX' ? Math.max.apply(Math, [0].concat(rates)) : config.overhealPolicy === 'SKILL_FIRST' && conversion !== undefined ? conversion : rates.reduce(function (a, b) {
                        return a + b;
                      }, 0);
                      if (_target.kind === 'PARTY') state.partyHP += gained;else state.enemies[_target.id] += gained;
                      emit('FACT', 'HEAL_APPLIED', parent, {
                        amount: gained
                      }, actor, _target.id);
                      if (_target.kind === 'PARTY') {
                        if (rate > 0) {
                          _i = conversions[0];
                          dp = Math.min(runtime.maxPartyDP - runtime.partyDP, Math.round((amount - gained) * rate));
                          runtime.partyDP += dp;
                          if (dp > 0) emit('FACT', 'DP_RESTORED', parent, {
                            amount: dp,
                            instanceId: (_i$id = _i == null ? void 0 : _i.id) != null ? _i$id : null
                          }, actor, _target.id);
                        }
                      }
                    case 34:
                      _context3.next = 17;
                      break;
                    case 36:
                    case "end":
                      return _context3.stop();
                  }
                }, apply);
              })
            };
          },
          opportunity: function opportunity(actor, parent) {
            var target = enemy(actor);
            if (hp(target) <= 0) return false;
            effectParent = emit('LIFECYCLE', 'ACTION_OPPORTUNITY', parent, {}, actor, actor);
            var list = effects.on(target).filter(function (i) {
              return effects.definition(i.definition).lifecycle === 'ACTION_OPPORTUNITY';
            });
            var skip = list.some(function (i) {
              return effects.definition(i.definition).skipAction;
            });
            for (var _iterator13 = _createForOfIteratorHelperLoose(list), _step13; !(_step13 = _iterator13()).done;) {
              var i = _step13.value;
              effects.consume(i);
            }
            if (skip) emit('FACT', 'ACTION_SKIPPED', effectParent, {
              reason: 'stun'
            }, actor, actor);
            return !skip;
          },
          roundEnd: /*#__PURE__*/_regeneratorRuntime().mark(function roundEnd(parent, beforeExpiry) {
            var stable, _iterator14, _step14, _effects$definition$h3, i;
            return _regeneratorRuntime().wrap(function roundEnd$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  stable = runtime.effects.instances.slice();
                  _iterator14 = _createForOfIteratorHelperLoose(stable);
                case 2:
                  if ((_step14 = _iterator14()).done) {
                    _context4.next = 10;
                    break;
                  }
                  i = _step14.value;
                  if (!(effects.present(i) && (_effects$definition$h3 = effects.definition(i.definition).hooks) != null && (_effects$definition$h3 = _effects$definition$h3.ROUND_END) != null && _effects$definition$h3.length)) {
                    _context4.next = 8;
                    break;
                  }
                  invoke('ROUND_END', [i], parent, i.source, i.owner);
                  if (!host.flush) {
                    _context4.next = 8;
                    break;
                  }
                  return _context4.delegateYield(host.flush(), "t0", 8);
                case 8:
                  _context4.next = 2;
                  break;
                case 10:
                  if (!beforeExpiry) {
                    _context4.next = 12;
                    break;
                  }
                  return _context4.delegateYield(beforeExpiry(), "t1", 12);
                case 12:
                  effectParent = parent;
                  effects.expire();
                case 14:
                case "end":
                  return _context4.stop();
              }
            }, roundEnd);
          }),
          roomEnd: function roomEnd(parent) {
            effectParent = parent;
            effects.roomEnd();
            runtime.roomEnded = true;
          }
        };
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/derivation.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports({
        acceptFact: acceptFact,
        derivationState: derivationState
      });
      cclegacy._RF.push({}, "273d7A81F5Ks7dri33QE22P", "derivation", undefined);
      function derivationState(equipment) {
        var ids = new Set();
        return {
          instances: equipment.map(function (spec) {
            var _spec$limit;
            if (!spec.id || ids.has(spec.id)) throw new Error('Duplicate equipment effect id: ' + spec.id);
            ids.add(spec.id);
            if (spec.limit !== undefined && (!Number.isSafeInteger(spec.limit) || spec.limit < 0)) throw new Error('Invalid equipment budget: ' + spec.id);
            if ((spec.request.kind === 'skill' || spec.request.kind === 'board') && spec.limit === undefined) throw new Error('Action-generating effect requires an instance budget: ' + spec.id);
            return {
              spec: spec,
              remaining: (_spec$limit = spec.limit) != null ? _spec$limit : null
            };
          }),
          requests: [],
          seenFacts: []
        };
      }
      function acceptFact(state, fact, seen) {
        if (fact.category !== 'FACT' || seen.has(fact.eventId)) return false;
        seen.add(fact.eventId);
        state.seenFacts.push(fact.eventId);
        var payload = fact.payload;
        for (var _iterator = _createForOfIteratorHelperLoose(state.instances), _step; !(_step = _iterator()).done;) {
          var spec = _step.value.spec;
          if (spec.trigger !== fact.type || spec.skill !== undefined && spec.skill !== payload.skill || spec.step !== undefined && spec.step !== payload.step) continue;
          if (fact.type !== 'MATCH_RESOLVED' && spec.actor !== fact.sourceId) continue;
          state.requests.push({
            request: spec.request,
            cause: fact,
            actor: spec.actor,
            equipmentId: spec.id
          });
        }
        return true;
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
        function DungeonDirector(route, testLoop) {
          if (testLoop === void 0) {
            testLoop = false;
          }
          this.position = 0;
          this.route = void 0;
          this.testLoop = void 0;
          this.route = route;
          this.testLoop = testLoop;
        }
        var _proto = DungeonDirector.prototype;
        _proto.repeatTestBattle = function repeatTestBattle(expected, next) {
          if (!this.testLoop || this.room !== expected || expected.kind !== 'battle' || next.kind !== 'battle') return false;
          this.route.splice(0, this.route.length, next);
          this.position = 0;
          return true;
        };
        DungeonDirector.restore = function restore(route, cursor) {
          if (!route.length || !Number.isSafeInteger(cursor) || cursor < 0 || cursor > route.length) throw Error('Invalid persisted dungeon cursor');
          var director = new DungeonDirector(structuredClone([].concat(route)));
          director.position = cursor;
          return director;
        };
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

System.register("chunks:///_virtual/effects.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _extends, cclegacy;
  return {
    setters: [function (module) {
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('effectEngine', effectEngine);
      cclegacy._RF.push({}, "3645aZgAAlOZLbHGwl65Wju", "effects", undefined);
      var sameOwner = exports('sameOwner', function sameOwner(a, b) {
        return a.kind === b.kind && a.id === b.id;
      });
      var party = exports('party', Object.freeze({
        kind: 'PARTY',
        id: 'PARTY'
      }));
      var enemy = exports('enemy', function enemy(id) {
        return {
          kind: 'ENEMY',
          id: id
        };
      });
      var hero = exports('hero', function hero(id) {
        return {
          kind: 'HERO',
          id: id
        };
      });
      var builtins = exports('builtins', {
        physicalShred: {
          owners: ['PARTY', 'ENEMY'],
          lifecycle: 'ROUND',
          count: 2,
          policy: 'REFRESH',
          cleansable: true,
          negative: true,
          armor: {
            physical: -1
          }
        },
        rally: {
          owners: ['PARTY'],
          lifecycle: 'CAST_COUNT',
          count: 1,
          policy: 'REFRESH',
          attackOnly: true,
          attackScale: 1.4,
          cleansable: true
        },
        stun: {
          owners: ['ENEMY'],
          lifecycle: 'ACTION_OPPORTUNITY',
          count: 1,
          policy: 'REFRESH',
          skipAction: true,
          cleansable: true
        }
      });
      function effectEngine(state, extra, round, record, immune) {
        for (var _i = 0, _Object$keys = Object.keys(extra); _i < _Object$keys.length; _i++) {
          var id = _Object$keys[_i];
          if (Object.hasOwn(builtins, id)) throw new Error('Reserved effect: ' + id);
        }
        var defs = new Map(Object.entries(_extends({}, builtins, extra)));
        var definition = function definition(id) {
          var def = defs.get(id);
          if (!def) throw new Error('Unknown effect: ' + id);
          return def;
        };
        var log = function log(type, i, reason) {
          return record(type, {
            instance: structuredClone(i),
            reason: reason != null ? reason : null
          }, i.source, i.owner.id);
        };
        function apply(id, owner, source, potency) {
          var _d$count;
          if (potency === void 0) {
            potency = 1;
          }
          var d = definition(id);
          if (!d.owners.includes(owner.kind)) throw new Error('Invalid effect owner: ' + id);
          if (!Number.isFinite(potency) || potency < 0 || Object.hasOwn(builtins, id) && potency !== 1) throw new Error('Invalid effect potency: ' + id);
          if (d.skipAction && immune(owner)) {
            record('EFFECT_REJECTED', {
              definition: id,
              owner: owner,
              reason: 'immune'
            }, source, owner.id);
            return;
          }
          var existing = d.policy === 'INDEPENDENT' ? undefined : state.instances.find(function (i) {
            return i.definition === id && sameOwner(i.owner, owner);
          });
          if (existing && d.policy === 'REPLACE_STRONGER' && existing.potency >= potency) {
            record('EFFECT_REJECTED', {
              definition: id,
              owner: owner,
              reason: 'not-stronger'
            }, source, owner.id);
            return;
          }
          var count = (_d$count = d.count) != null ? _d$count : 1;
          if (!Number.isSafeInteger(count) || count < 1) throw new Error('Invalid effect duration: ' + id);
          var timed = {
            source: source,
            appliedRound: round(),
            expiresAfterRound: d.lifecycle === 'ROUND' ? round() + count - 1 : null,
            remaining: d.lifecycle === 'CAST_COUNT' || d.lifecycle === 'ACTION_OPPORTUNITY' ? count : null,
            potency: potency
          };
          if (existing) {
            var _d$maxStacks;
            Object.assign(existing, timed);
            existing.stacks = d.policy === 'ADD_STACK' ? Math.min(existing.stacks + 1, (_d$maxStacks = d.maxStacks) != null ? _d$maxStacks : 1) : 1;
            log(d.policy === 'ADD_STACK' ? 'EFFECT_STACKED' : d.policy === 'REPLACE_STRONGER' ? 'EFFECT_REPLACED' : 'EFFECT_REFRESHED', existing);
          } else {
            var created = _extends({}, timed, {
              id: state.nextId++,
              definition: id,
              owner: _extends({}, owner),
              stacks: 1
            });
            state.instances.push(created);
            log('EFFECT_APPLIED', created);
          }
        }
        function remove(i, reason) {
          var index = state.instances.indexOf(i);
          if (index < 0) return;
          state.instances.splice(index, 1);
          log('EFFECT_REMOVED', i, reason);
        }
        function consume(i) {
          if (i.remaining === null || !state.instances.includes(i)) return;
          i.remaining--;
          log('EFFECT_CONSUMED', i);
          if (!i.remaining) remove(i, 'consumed');
        }
        return {
          apply: apply,
          definition: definition,
          consume: consume,
          removeOne: function removeOne(i) {
            return remove(i, 'cleanse');
          },
          canApply: function canApply(id, owner, potency) {
            if (potency === void 0) {
              potency = 1;
            }
            var d = definition(id);
            if (!d.owners.includes(owner.kind)) throw new Error('Invalid effect owner: ' + id);
            return !(d.skipAction && immune(owner)) && !(d.policy === 'REPLACE_STRONGER' && state.instances.some(function (i) {
              return i.definition === id && sameOwner(i.owner, owner) && i.potency >= potency;
            }));
          },
          on: function on() {
            for (var _len = arguments.length, owners = new Array(_len), _key = 0; _key < _len; _key++) {
              owners[_key] = arguments[_key];
            }
            return state.instances.filter(function (i) {
              return owners.some(function (o) {
                return sameOwner(i.owner, o);
              });
            });
          },
          present: function present(i) {
            return state.instances.includes(i);
          },
          cleanse: function cleanse(owner, id) {
            return state.instances.slice().filter(function (i) {
              return sameOwner(i.owner, owner) && i.definition === id && definition(id).cleansable;
            }).forEach(function (i) {
              return remove(i, 'cleanse');
            });
          },
          expire: function expire() {
            return state.instances.slice().filter(function (i) {
              return i.expiresAfterRound !== null && i.expiresAfterRound <= round();
            }).forEach(function (i) {
              return remove(i, 'expired');
            });
          },
          roomEnd: function roomEnd() {
            return state.instances.slice().filter(function (i) {
              return definition(i.definition).lifecycle !== 'PERMANENT';
            }).forEach(function (i) {
              return remove(i, 'room-end');
            });
          }
        };
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EnemySkills.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _extends, cclegacy;
  return {
    setters: [function (module) {
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('planEnemyAction', planEnemyAction);
      cclegacy._RF.push({}, "16da2uk291ENKKEvFfGQHJY", "EnemySkills", undefined);
      var strike = function strike(id, name, extra) {
        if (extra === void 0) {
          extra = {};
        }
        return _extends({
          id: id,
          name: name,
          kind: 'attack',
          ratio: 1
        }, extra);
      };
      var mend = function mend(id, name, target) {
        if (target === void 0) {
          target = 'self';
        }
        return {
          id: id,
          name: name,
          kind: 'heal',
          ratio: .15,
          target: target
        };
      };
      /** Each entry is a real action, not a display alias for one aggregate faction hit. */
      var enemySkills = exports('enemySkills', {
        wolf: {
          basic: strike('wolf-bite', '灰狼撕咬'),
          special: strike('wolf-pounce', '扑击', {
            ratio: 1.25
          })
        },
        'forest-wolf': {
          basic: strike('leaf-fang', '叶影利齿'),
          special: strike('leaf-double', '叶影连扑', {
            ratio: .6,
            hits: 2
          })
        },
        boss: {
          basic: strike('alpha-fang', '裂印獠牙'),
          special: strike('alpha-rend', '狼王撕裂', {
            ratio: 1.3
          })
        },
        boar: {
          basic: strike('tusk', '獠牙冲顶'),
          special: strike('boar-charge', '蛮力冲撞', {
            ratio: 1.3
          })
        },
        vine: {
          basic: strike('vine-dart', '藤刺投射', {
            projectile: true
          }),
          special: mend('vine-regrow', '再生藤芽')
        },
        bear: {
          basic: strike('bear-claw', '厚掌猛击'),
          special: strike('bear-roar', '震地咆哮', {
            ratio: 1.25
          })
        },
        bat: {
          basic: strike('bat-echo', '声波掠袭', {
            projectile: true,
            magic: true
          }),
          special: strike('bat-double', '回声连击', {
            projectile: true,
            magic: true,
            ratio: .6,
            hits: 2
          })
        },
        beetle: {
          basic: strike('beetle-pincer', '甲刃钳击'),
          special: mend('shell-mend', '甲壳修复')
        },
        golem: {
          basic: strike('stone-shock', '震荡重拳', {
            shock: true
          })
        },
        ghost: {
          basic: strike('ghost-orb', '幽影弹', {
            magic: true,
            projectile: true
          }),
          special: strike('soul-drain', '汲魂触袭', {
            magic: true,
            projectile: true,
            ratio: .9,
            drain: .5
          })
        },
        frog: {
          basic: strike('frog-tongue', '长舌鞭击'),
          special: strike('bog-glob', '沼液弹', {
            magic: true,
            projectile: true,
            ratio: 1.2
          })
        },
        lich: {
          basic: strike('bone-bolt', '寒骨箭', {
            magic: true,
            projectile: true
          }),
          special: mend('soul-stitch', '亡魂缝合', 'injured')
        },
        knight: {
          basic: strike('rust-blade', '锈剑斩击'),
          special: strike('bone-combo', '亡骨连斩', {
            ratio: .6,
            hits: 2
          })
        },
        wizard: {
          basic: strike('abyss-bolt', '深渊魔弹', {
            magic: true,
            projectile: true
          }),
          special: strike('shadow-salvo', '暗影连弹', {
            magic: true,
            projectile: true,
            ratio: .6,
            hits: 2
          })
        },
        dragon: {
          basic: strike('dragon-ember', '龙息弹', {
            magic: true,
            projectile: true
          }),
          special: strike('dragon-inferno', '灭焰吐息', {
            magic: true,
            projectile: true,
            ratio: 1.4
          })
        },
        'forest-bug': {
          basic: strike('sprout-ram', '芽刺冲撞'),
          special: strike('acid-spit', '酸液喷射', {
            magic: true,
            projectile: true,
            ratio: 1.2
          })
        },
        'forest-leafguard': {
          basic: strike('leaf-blade', '叶刃挥击'),
          special: mend('leaf-mend', '绿叶修复', 'injured')
        },
        'forest-treant': {
          basic: strike('root-swing', '根须挥击'),
          special: strike('root-combo', '缠根连刺', {
            ratio: .6,
            hits: 2
          })
        },
        'forest-stone': {
          basic: strike('moss-shock', '苔岩震荡', {
            shock: true
          })
        },
        'forest-bear': {
          basic: strike('moss-claw', '苔林重掌'),
          special: strike('moss-roar', '山林震吼', {
            ratio: 1.25
          })
        },
        'murloc-spear': {
          basic: strike('spear-thrust', '穿刺长枪'),
          special: strike('spear-combo', '刺枪连突', {
            ratio: .6,
            hits: 2
          })
        },
        'murloc-axe': {
          basic: strike('scale-axe', '青鳞斧击'),
          special: strike('axe-spin', '旋斧重劈', {
            ratio: 1.3
          })
        },
        'murloc-mage': {
          basic: strike('tide-bolt', '水波弹', {
            magic: true,
            projectile: true
          }),
          special: mend('tide-mend', '潮汐疗愈', 'injured')
        }
      });
      function planEnemyAction(foe, index, opportunities, hp, max, teaching) {
        if (teaching === void 0) {
          teaching = false;
        }
        var book = enemySkills[foe.art];
        if (!book) throw Error('Missing enemy skill configuration: ' + foe.art);
        var move = book.basic,
          target = index;
        if (!teaching && book.special && opportunities % 3 === 0) {
          var candidate = book.special;
          if (candidate.kind === 'heal') {
            var targets = candidate.target === 'self' ? [index] : hp.flatMap(function (n, i) {
              return n > 0 ? [i] : [];
            });
            target = targets.reduce(function (best, i) {
              return hp[i] / max[i] < hp[best] / max[best] ? i : best;
            }, index);
            if (hp[target] < max[target] * .85) move = candidate;
          } else move = candidate;
        }
        return {
          move: _extends({}, move, {
            shock: move.shock || foe.skill === 'shock'
          }),
          target: target
        };
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/experiment.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './effects.ts'], function (exports) {
  var _extends, _createForOfIteratorHelperLoose, cclegacy, party, enemy;
  return {
    setters: [function (module) {
      _extends = module.extends;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      party = module.party;
      enemy = module.enemy;
    }],
    execute: function () {
      exports({
        experimentAction: experimentAction,
        matchScale: matchScale
      });
      cclegacy._RF.push({}, "81544odmRhKP42aooLQSGmX", "experiment", undefined);
      var curves = exports('curves', {
        A: {
          four: 1.55,
          five: 2.10,
          chain: {
            kind: 'linear',
            step: .16
          }
        },
        B: {
          four: 1.40,
          five: 1.85,
          chain: {
            kind: 'saturating',
            height: .30,
            decay: .6
          }
        },
        C: {
          four: 1.55,
          five: 2.10,
          chain: {
            kind: 'saturating',
            height: .30,
            decay: .6
          }
        },
        D: {
          four: 1.40,
          five: 1.85,
          chain: {
            kind: 'linear',
            step: .16
          }
        }
      });
      var probeWaves = exports('probeWaves', [1, 2, 3, 5, 8, 13, 24, 40]);
      function matchScale(profile, length, wave) {
        if (!Number.isInteger(wave) || wave < 1 || !Number.isInteger(length) || length < 3) throw new Error('Invalid match snapshot');
        var c = profile.chain;
        return (length >= 5 ? profile.five : length === 4 ? profile.four : 1) * (c.kind === 'linear' ? 1 + c.step * (wave - 1) : 1 + c.height * (1 - Math.pow(c.decay, wave - 1)));
      }
      var experimentalTiers = exports('experimentalTiers', {
        skill: {
          sword: {
            ratio: .35
          },
          shield: {
            dp: 8
          },
          mage: {
            ratio: .45,
            targets: 'one'
          },
          priest: {
            conversion: .35
          }
        },
        advanced: {
          sword: {
            ratio: .65,
            onHit: ['physicalShred']
          },
          shield: {
            dp: 15,
            effect: 'trialProtection'
          },
          mage: {
            ratio: .65,
            targets: 'all'
          },
          priest: {
            conversion: .50,
            cleanse: ['trialHex']
          }
        }
      });
      function experimentAction(config, cmd, base, state, enemies) {
        var _cmd$emblem, _config$tiers, _base$strikes, _rule$requests;
        if (cmd.length === undefined || !['s', 'd', 'm', 'h'].includes((_cmd$emblem = cmd.emblem) != null ? _cmd$emblem : '')) return {
          action: base,
          requests: []
        };
        var scale = matchScale(config.curves, cmd.length, cmd.wave);
        var rule = cmd.tier ? (_config$tiers = config.tiers) == null ? void 0 : _config$tiers[cmd.tier] : undefined;
        var action = _extends({}, base);
        var strikes = ((_base$strikes = base.strikes) != null ? _base$strikes : []).map(function (s) {
          var _s$ratio, _s$flat;
          return _extends({}, s, {
            ratio: ((_s$ratio = s.ratio) != null ? _s$ratio : 0) * scale,
            flat: ((_s$flat = s.flat) != null ? _s$flat : 0) * scale
          });
        });
        var alive = state.enemyOrder.filter(function (id) {
          return enemies[id] > 0;
        });
        if (cmd.emblem === 'd') {
          if (state.partyDP >= state.maxPartyDP) strikes.push({
            type: 'PHYSICAL',
            target: 'front',
            ratio: scale
          });else action.restoreDP = Math.round(config.shieldDP * scale);
          if (rule != null && rule.shield) {
            var _action$restoreDP, _action$applyEffects;
            action.restoreDP = ((_action$restoreDP = action.restoreDP) != null ? _action$restoreDP : 0) + rule.shield.dp;
            if (rule.shield.effect) action.applyEffects = [].concat((_action$applyEffects = action.applyEffects) != null ? _action$applyEffects : [], [{
              effect: rule.shield.effect,
              owner: party
            }]);
          }
        }
        if (cmd.emblem === 's' && rule != null && rule.sword && alive.length) {
          // Bind the additional segment to the original target. Main hit may kill it; no spillover.
          strikes.push({
            type: 'PHYSICAL',
            target: enemy(alive[0]),
            ratio: rule.sword.ratio,
            skipCastBonus: true,
            onHit: rule.sword.onHit
          });
        }
        if (cmd.emblem === 'm' && rule != null && rule.mage) {
          for (var _iterator = _createForOfIteratorHelperLoose(alive.slice(1, rule.mage.targets === 'one' ? 2 : undefined)), _step; !(_step = _iterator()).done;) {
            var id = _step.value;
            strikes.push({
              type: 'MAGICAL',
              target: enemy(id),
              ratio: rule.mage.ratio,
              skipCastBonus: true
            });
          }
        }
        if (cmd.emblem === 'h') {
          var _action$heal, _rule$priest, _rule$priest2, _action$cleanse;
          action.heal = [].concat((_action$heal = action.heal) != null ? _action$heal : [], [{
            target: party,
            amount: Math.round(config.healHP * scale),
            conversion: rule == null || (_rule$priest = rule.priest) == null ? void 0 : _rule$priest.conversion
          }]);
          if (rule != null && (_rule$priest2 = rule.priest) != null && _rule$priest2.cleanse) action.cleanse = [].concat((_action$cleanse = action.cleanse) != null ? _action$cleanse : [], rule.priest.cleanse.map(function (effect) {
            return {
              owner: party,
              effect: effect
            };
          }));
        }
        action.strikes = strikes;
        return {
          action: action,
          requests: (_rule$requests = rule == null ? void 0 : rule.requests) != null ? _rule$requests : []
        };
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/exploration-save.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _extends, _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy;
  return {
    setters: [function (module) {
      _extends = module.extends;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports({
        browserExclusiveWriter: browserExclusiveWriter,
        decodeExploration: decodeExploration,
        explorationStore: explorationStore,
        planExit: planExit,
        roomPosition: roomPosition,
        transition: transition,
        validBoard: validBoard
      });
      cclegacy._RF.push({}, "720b4gNSplBt45jE3d14PrA", "exploration-save", undefined);
      var materials = ['herb', 'ore', 'essence', 'crystal'];
      var integer = function integer(n) {
        return Number.isSafeInteger(n) && Number(n) >= 0;
      };
      var id = function id(v) {
        return typeof v === 'string' && v.trim().length > 0;
      };
      var object = function object(v) {
        return !!v && typeof v === 'object' && !Array.isArray(v);
      };
      var only = function only(v, keys) {
        return Object.keys(v).every(function (k) {
          return keys.includes(k);
        });
      };
      var exact = function exact(a, b) {
        return canonical(a) === canonical(b);
      };
      function canonical(v) {
        var _JSON$stringify;
        if (Array.isArray(v)) return '[' + v.map(canonical).join(',') + ']';
        if (object(v)) return '{' + Object.keys(v).sort().map(function (k) {
          return JSON.stringify(k) + ':' + canonical(v[k]);
        }).join(',') + '}';
        return (_JSON$stringify = JSON.stringify(v)) != null ? _JSON$stringify : 'undefined';
      }
      function validPending(v) {
        return object(v) && Object.keys(v).every(function (k) {
          return ['coins', 'xp', 'ordinaryWins', 'loot'].includes(k);
        }) && integer(v.coins) && integer(v.xp) && integer(v.ordinaryWins) && object(v.loot) && Object.entries(v.loot).every(function (_ref) {
          var k = _ref[0],
            n = _ref[1];
          return materials.includes(k) && integer(n);
        });
      }
      function validBoard(v) {
        if (!object(v) || !only(v, ['gravity', 'tiles']) || v.gravity !== 'mine/v1' || !Array.isArray(v.tiles) || v.tiles.length !== 56) return false;
        var tiles = v.tiles;
        if (new Set(tiles.map(function (t) {
          return t == null ? void 0 : t.id;
        })).size !== 56 || tiles.some(function (t) {
          return !object(t) || !only(t, ['id', 'emblem', 'tier']) || !id(t.id) || typeof t.emblem !== 'string' || !['s', 'd', 'm', 'h', 'fist', 'stone', 'cry', 'staff'].includes(t.emblem) || t.tier !== undefined && t.tier !== 'skill' && t.tier !== 'advanced';
        })) return false;
        return !tiles.some(function (tile, i) {
          return [1, 7].some(function (stride) {
            return (stride === 1 ? i % 7 <= 4 : i < 42) && tile.emblem === tiles[i + stride].emblem && tile.emblem === tiles[i + 2 * stride].emblem;
          });
        });
      }
      function validPlayer(v) {
        return object(v) && Array.isArray(v.party) && v.party[0] === 's' && new Set(v.party).size === v.party.length && v.party.every(function (r) {
          return ['s', 'd', 'm', 'h'].includes(r);
        });
      }
      function validRoom(v) {
        if (!object(v)) return false;
        if (v.kind !== 'battle') return ['merchant', 'event', 'rest', 'chest', 'fork', 'rescue', 'recruit'].includes(String(v.kind));
        return Array.isArray(v.enemies) && v.enemies.length > 0 && v.enemies.every(function (n) {
          return integer(n) && n > 0;
        }) && (v.encounters === undefined || Array.isArray(v.encounters) && v.encounters.length === v.enemies.length && v.encounters.every(function (e, i) {
          return object(e) && id(e.name) && id(e.art) && e.hp === v.enemies[i] && integer(e.atk) && Array.isArray(e.tags) && e.tags.every(id);
        })) && (v.rescueCells === undefined || Array.isArray(v.rescueCells) && v.rescueCells.every(function (n) {
          return integer(n) && n < 56;
        })) && (v.type === undefined || ['battle', 'elite', 'boss'].includes(String(v.type))) && (v.coinReward === undefined || integer(v.coinReward));
      }
      function validCommit(v) {
        return object(v) && only(v, ['terminal', 'nextRoomId', 'delta', 'board']) && object(v.terminal) && only(v.terminal, ['runId', 'roomId', 'generation', 'terminalEventId']) && id(v.terminal.runId) && id(v.terminal.roomId) && integer(v.terminal.generation) && id(v.terminal.terminalEventId) && (v.nextRoomId === null || id(v.nextRoomId)) && validPending(v.delta) && validBoard(v.board);
      }
      function validRun(v) {
        if (!object(v) || !id(v.runId) || !integer(v.generation) || !Array.isArray(v.route) || !v.route.length || !v.route.every(function (r) {
          return object(r) && id(r.id) && validRoom(r.room);
        }) || new Set(v.route.map(function (r) {
          return r.id;
        })).size !== v.route.length || !integer(v.cursor) || Number(v.cursor) > v.route.length || !validPending(v.pending) || v.board !== null && !validBoard(v.board) || ![null, 'complete', 'retreat', 'fail'].includes(v.closed) || !Array.isArray(v.receipts)) return false;
        var run = v;
        var indexes = new Set();
        var _loop = function _loop() {
            var _run$route$id, _run$route;
            var receipt = _step.value;
            if (!object(receipt) || receipt.status !== 'committed' || !validCommit(receipt.request)) return {
              v: false
            };
            var _receipt$request = receipt.request,
              terminal = _receipt$request.terminal,
              nextRoomId = _receipt$request.nextRoomId;
            var i = run.route.findIndex(function (r) {
              return r.id === terminal.roomId;
            });
            if (terminal.runId !== run.runId || terminal.generation > run.generation || i < 0 || i >= run.cursor || indexes.has(i) || run.route[i].room.kind !== 'battle' || nextRoomId !== ((_run$route$id = (_run$route = run.route[i + 1]) == null ? void 0 : _run$route.id) != null ? _run$route$id : null)) return {
              v: false
            };
            indexes.add(i);
          },
          _ret;
        for (var _iterator = _createForOfIteratorHelperLoose(run.receipts), _step; !(_step = _iterator()).done;) {
          _ret = _loop();
          if (_ret) return _ret.v;
        }
        var latest = run.receipts.at(-1);
        return !latest || exact(run.board, latest.request.board);
      }
      function decodeExploration(raw) {
        if (raw === null) return {
          kind: 'missing'
        };
        try {
          var value = JSON.parse(raw);
          if (object(value) && Object.hasOwn(value, 'schemaVersion')) {
            if (value.schemaVersion === 1 && validPlayer(value.player) && validRun(value.run)) return {
              kind: 'versioned',
              save: value
            };
          } else if (validPlayer(value)) return {
            kind: 'legacy',
            player: value
          };
        } catch (_unused) {/* malformed */}
        return {
          kind: 'invalid'
        };
      }
      function roomPosition(run) {
        var _run$route$run$cursor, _run$route$run$cursor2, _run$route$id2, _run$route2;
        return {
          current: (_run$route$run$cursor = (_run$route$run$cursor2 = run.route[run.cursor]) == null ? void 0 : _run$route$run$cursor2.id) != null ? _run$route$run$cursor : null,
          next: (_run$route$id2 = (_run$route2 = run.route[run.cursor + 1]) == null ? void 0 : _run$route2.id) != null ? _run$route$id2 : null
        };
      }
      // Pure projection of the existing Game.finishAdventure arithmetic. No economic writes.
      function planExit(pending, outcome, firstClear) {
        if (firstClear === void 0) {
          firstClear = false;
        }
        var rate = outcome === 'complete' ? 1 : outcome === 'retreat' ? .7 : .5;
        return {
          gold: Math.floor(pending.coins * rate) + (outcome === 'complete' && firstClear ? 12 : 0),
          loot: Object.fromEntries(Object.entries(pending.loot).map(function (_ref2) {
            var k = _ref2[0],
              n = _ref2[1];
            return [k, Math.floor(n * rate)];
          })),
          xp: outcome === 'complete' ? pending.xp : 0
        };
      }
      function add(a, b) {
        return {
          coins: a.coins + b.coins,
          xp: a.xp + b.xp,
          ordinaryWins: a.ordinaryWins + b.ordinaryWins,
          loot: Object.fromEntries(materials.filter(function (k) {
            return k in a.loot || k in b.loot;
          }).map(function (k) {
            var _a$loot$k, _b$loot$k;
            return [k, ((_a$loot$k = a.loot[k]) != null ? _a$loot$k : 0) + ((_b$loot$k = b.loot[k]) != null ? _b$loot$k : 0)];
          }))
        };
      }
      function transition(save, action) {
        var _run$route$run$cursor3;
        var run = save.run;
        if (action.kind === 'close') {
          if (!['complete', 'retreat', 'fail'].includes(action.outcome) || run.runId !== action.runId || run.generation !== action.generation || run.closed || action.outcome === 'complete' && roomPosition(run).current !== null || !integer(run.generation + 1)) return {
            status: 'rejected'
          };
          return {
            status: 'changed',
            save: _extends({}, save, {
              run: _extends({}, run, {
                closed: action.outcome,
                generation: run.generation + 1
              })
            })
          };
        }
        var r = action.request;
        if (!validCommit(r)) return {
          status: 'rejected'
        };
        var already = run.receipts.find(function (entry) {
          return exact(entry.request.terminal, r.terminal);
        });
        if (already) return exact(already.request, r) ? {
          status: 'duplicate',
          save: save
        } : {
          status: 'conflict'
        };
        var position = roomPosition(run);
        if (run.closed || run.runId !== r.terminal.runId || run.generation !== r.terminal.generation || position.current !== r.terminal.roomId || position.next !== r.nextRoomId || ((_run$route$run$cursor3 = run.route[run.cursor]) == null ? void 0 : _run$route$run$cursor3.room.kind) !== 'battle' || !integer(run.generation + 1)) return {
          status: 'rejected'
        };
        var pending = add(run.pending, r.delta);
        if (!validPending(pending)) return {
          status: 'rejected'
        };
        var request = structuredClone(r);
        return {
          status: 'changed',
          save: _extends({}, save, {
            run: _extends({}, run, {
              cursor: run.cursor + 1,
              generation: run.generation + 1,
              pending: pending,
              board: structuredClone(request.board),
              receipts: [].concat(run.receipts, [{
                status: 'committed',
                request: request
              }])
            })
          })
        };
      }
      function browserExclusiveWriter(locks) {
        return {
          withLock: function withLock(key, write) {
            return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    if (locks) {
                      _context.next = 2;
                      break;
                    }
                    return _context.abrupt("return", undefined);
                  case 2:
                    return _context.abrupt("return", locks.request(key, {
                      mode: 'exclusive',
                      ifAvailable: true
                    }, function (lock) {
                      return lock ? write() : undefined;
                    }));
                  case 3:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }))();
          }
        };
      }
      // Deliberately separate from the live Game save key. Every writer must share the same lock.
      function explorationStore(namespace, storage, writer) {
        if (!id(namespace)) throw Error('Missing isolated exploration namespace');
        var key = 'hx:4c1:isolated:' + namespace;
        var uncertain = false;
        var read = function read() {
          return decodeExploration(storage.getItem(key));
        };
        return {
          key: key,
          read: read,
          apply: function apply(action) {
            return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var input, result;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    input = structuredClone(action);
                    _context2.prev = 1;
                    _context2.next = 4;
                    return writer.withLock(key, function () {
                      if (uncertain) return {
                        status: 'uncertain'
                      };
                      var before = storage.getItem(key);
                      var parsed = decodeExploration(before);
                      if (parsed.kind !== 'versioned') return {
                        status: 'read-only'
                      };
                      var next = transition(parsed.save, input);
                      if (next.status !== 'changed') return next;
                      var after = JSON.stringify(next.save);
                      try {
                        storage.setItem(key, after);
                      } catch (_unused2) {
                        // Ambiguous synchronous failure: compare the whole atomic value, still under the lock.
                        var actual;
                        try {
                          actual = storage.getItem(key);
                        } catch (_unused3) {/* inaccessible */}
                        if (actual !== after) {
                          if (actual === before) return {
                            status: 'write-failed'
                          };
                          uncertain = true;
                          return {
                            status: 'uncertain'
                          };
                        }
                      }
                      return {
                        status: 'committed',
                        save: next.save
                      };
                    });
                  case 4:
                    result = _context2.sent;
                    return _context2.abrupt("return", result != null ? result : {
                      status: 'read-only'
                    });
                  case 8:
                    _context2.prev = 8;
                    _context2.t0 = _context2["catch"](1);
                    return _context2.abrupt("return", {
                      status: 'read-only'
                    });
                  case 11:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, null, [[1, 8]]);
            }))();
          }
        };
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/formal-rules.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BattleRules.ts'], function (exports) {
  var _extends, cclegacy, skillOwner, planOathSkill, selectTargets, planSkill, oathEnemyPower;
  return {
    setters: [function (module) {
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      skillOwner = module.skillOwner;
      planOathSkill = module.planOathSkill;
      selectTargets = module.selectTargets;
      planSkill = module.planSkill;
      oathEnemyPower = module.oathEnemyPower;
    }],
    execute: function () {
      exports({
        formalEnemy: formalEnemy,
        formalHit: formalHit,
        formalSkill: formalSkill,
        setupFormalRoom: setupFormalRoom
      });
      cclegacy._RF.push({}, "8d2e5Ptk5pGS4mNeK4856vt", "formal-rules", undefined);
      var emblems = ['s', 'd', 'm', 'h', 'cry', 'stone', 'fist', 'staff'];
      function setupFormalRoom(room) {
        var _structuredClone = structuredClone(room),
          battleId = _structuredClone.battleId,
          roomId = _structuredClone.roomId,
          seed = _structuredClone.seed,
          hp = _structuredClone.hp,
          maxHP = _structuredClone.maxHP,
          dp = _structuredClone.dp,
          maxDP = _structuredClone.maxDP,
          enemyHP = _structuredClone.enemyHP,
          tiles = _structuredClone.tiles,
          rescue = _structuredClone.rescue,
          swaps = _structuredClone.swaps,
          strategy = _structuredClone.strategy,
          tutorial = _structuredClone.tutorial,
          roles = _structuredClone.roles,
          attacks = _structuredClone.attacks,
          gear = _structuredClone.gear,
          buffs = _structuredClone.buffs,
          enemies = _structuredClone.enemies,
          revisedSkills = _structuredClone.revisedSkills;
        if (!battleId || !roomId || !Number.isSafeInteger(seed) || !Number.isSafeInteger(hp) || hp <= 0 || !roles.length || new Set(roles).size !== roles.length || roles.some(function (r) {
          return !['s', 'm', 'd', 'h'].includes(r) || !Number.isFinite(attacks[r]) || attacks[r] < 0;
        }) || enemies.some(function (e) {
          return !Number.isSafeInteger(e.attack) || e.attack < 0 || !Number.isSafeInteger(enemyHP[e.id]) || enemyHP[e.id] <= 0;
        })) throw Error('Invalid formal room input');
        var available = emblems.filter(function (e) {
          return roles.includes(skillOwner(e));
        });
        if (tiles.some(function (tile) {
          return !available.includes(tile.emblem);
        })) throw Error('Board emblem has no active role');
        return {
          battleId: battleId,
          roomId: roomId,
          seed: seed,
          partyHP: hp,
          enemies: enemyHP,
          rescue: rescue,
          swaps: swaps,
          steps: {},
          strategy: strategy,
          formal: _extends({
            tutorial: tutorial,
            roles: roles,
            attacks: attacks,
            gear: gear,
            buffs: buffs,
            enemies: enemies
          }, revisedSkills ? {
            revisedSkills: revisedSkills
          } : {}),
          combat: {
            maxPartyHP: maxHP,
            partyDP: dp,
            maxPartyDP: maxDP,
            attacks: attacks,
            enemyOrder: enemies.map(function (e) {
              return e.id;
            })
          },
          skills: Object.fromEntries(available.map(function (e) {
            return [e, {}];
          })),
          board: _extends({
            initial: tiles
          }, revisedSkills ? {
            actualLength: true
          } : {}, {
            skills: Object.fromEntries(available.map(function (e) {
              return [e, {
                actor: skillOwner(e),
                ordinary: e
              }];
            }))
          })
        };
      }
      function formalSkill(config, command, fullGuard, rally, hp, oath) {
        var type = command.emblem;
        if (!type || !emblems.includes(type) || command.actor !== skillOwner(type) || !config.roles.includes(command.actor) || command.length === undefined) throw Error('Invalid formal command');
        var attack = config.tutorial ? command.actor === 'h' ? 12 : 26 : config.attacks[command.actor];
        if (config.revisedSkills && oath) {
          var _skill = planOathSkill(type, command.length, command.wave, command.tier, attack, fullGuard, oath, function (id) {
            return config.gear.includes(id);
          }, function (id) {
            var _config$buffs$id;
            return (_config$buffs$id = config.buffs[id]) != null ? _config$buffs$id : 0;
          });
          var targets = _skill.kind === 'attack' ? selectTargets(hp, config.enemies.map(function (e) {
            return e.tags;
          }), _skill.target) : _skill.kind === 'guard' && _skill.followup !== undefined ? selectTargets(hp, config.enemies.map(function (e) {
            return e.tags;
          })) : [];
          return {
            attack: attack,
            skill: _skill,
            targets: targets
          };
        }
        var scaled = command.tier === 'advanced' && (config.tutorial || ['stone', 'fist', 'staff'].includes(type)) ? attack * 1.35 : attack;
        var skill = planSkill(type, command.length, command.wave, !!command.tier, config.tutorial, scaled, fullGuard, rally, function (id) {
          return config.gear.includes(id);
        }, function (id) {
          var _config$buffs$id2;
          return (_config$buffs$id2 = config.buffs[id]) != null ? _config$buffs$id2 : 0;
        });
        return {
          attack: scaled,
          skill: skill,
          targets: skill.kind === 'attack' ? selectTargets(hp, config.enemies.map(function (e) {
            return e.tags;
          }), skill.target) : []
        };
      }
      function formalHit(config, target, hp, damage, stun) {
        var immune = config.enemies[target].tags.some(function (tag) {
          return tag === 'boss' || tag === 'stun-immune';
        });
        var lost = Math.min(hp, Math.round(damage * (stun && immune ? 1.25 : 1)));
        return {
          lost: lost,
          stunned: stun && !immune && hp > lost
        };
      }
      function formalEnemy(config, hp, stunned, partyHP, dp, oath) {
        var opportunities = config.enemies.filter(function (e) {
          return hp[e.id] > 0;
        }).map(function (e) {
          return {
            id: e.id,
            skip: stunned.includes(e.id),
            attack: e.attack
          };
        });
        var sum = opportunities.reduce(function (total, e) {
          return total + (e.skip ? 0 : oath ? oathEnemyPower(oath, e.id, e.attack) : e.attack);
        }, 0);
        var total = oath != null && oath.guard ? Math.round(sum * .85) : sum;
        if (oath) oath.guard = false;
        var absorbed = Math.min(dp, total);
        return {
          opportunities: opportunities,
          total: total,
          absorbed: absorbed,
          lost: Math.min(partyHP, total - absorbed)
        };
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FormalSaveGate.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "572d9WDeLhLKJNI1CD3VPkd", "FormalSaveGate", undefined);
      function legacy(raw) {
        if (raw === null) return true;
        try {
          var state = JSON.parse(raw);
          return state !== null && typeof state === 'object' && !Array.isArray(state) && !Object.hasOwn(state, 'schemaVersion') && Array.isArray(state.party) && state.party[0] === 's' && new Set(state.party).size === state.party.length && state.party.every(function (id) {
            return typeof id === 'string' && ['s', 'd', 'm', 'h'].includes(id);
          });
        } catch (_unused) {
          return false;
        }
      }
      var FormalSaveGate = exports('FormalSaveGate', /*#__PURE__*/function () {
        function FormalSaveGate(key, storage, recognized) {
          if (recognized === void 0) {
            recognized = function recognized() {
              return false;
            };
          }
          this.release = void 0;
          this.expected = null;
          this.closed = false;
          this.uncertain = false;
          this.key = void 0;
          this.storage = void 0;
          this.recognized = void 0;
          this.key = key;
          this.storage = storage;
          this.recognized = recognized;
        }
        var _proto = FormalSaveGate.prototype;
        _proto.acquire = /*#__PURE__*/function () {
          var _acquire = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(locks) {
            var _this = this;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!(!locks || this.closed)) {
                    _context.next = 2;
                    break;
                  }
                  return _context.abrupt("return", false);
                case 2:
                  if (!this.writable) {
                    _context.next = 4;
                    break;
                  }
                  return _context.abrupt("return", true);
                case 4:
                  return _context.abrupt("return", new Promise(function (resolve) {
                    void locks.request(_this.key, {
                      mode: 'exclusive',
                      ifAvailable: true
                    }, function (lock) {
                      if (!lock || _this.closed) {
                        resolve(false);
                        return;
                      }
                      var raw = _this.storage.getItem(_this.key);
                      if (!legacy(raw) && (raw === null || !_this.recognized(raw))) {
                        resolve(false);
                        return;
                      }
                      _this.expected = raw;
                      return new Promise(function (release) {
                        _this.release = release;
                        resolve(true);
                      });
                    })["catch"](function () {
                      return resolve(false);
                    });
                  })["catch"](function () {
                    return false;
                  }));
                case 5:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function acquire(_x) {
            return _acquire.apply(this, arguments);
          }
          return acquire;
        }();
        _proto.close = function close() {
          this.closed = true;
          var release = this.release;
          this.release = undefined;
          release == null || release();
        };
        _proto.readRaw = function readRaw() {
          try {
            var _raw = this.storage.getItem(this.key);
            if (this.writable && _raw !== this.expected) this.close();
            return _raw;
          } catch (_unused2) {
            return null;
          }
        };
        _proto.read = function read() {
          var raw = this.readRaw();
          return legacy(raw) ? raw : null;
        };
        _proto.readRecovery = function readRecovery() {
          var raw = this.readRaw();
          return raw !== null && this.recognized(raw) ? raw : null;
        };
        _proto.write = function write(payload, base) {
          return this.writeChecked(payload, base, false);
        };
        _proto.writeRecovery = function writeRecovery(payload, base) {
          return this.writeChecked(payload, base, true);
        };
        _proto.startRecovery = function startRecovery(payload, base) {
          return this.writeChecked(payload, base, true, true);
        };
        _proto.releaseRecovery = function releaseRecovery(payload, base) {
          try {
            var _state$run, _state$mineRecovery;
            var state = JSON.parse(base);
            if (!((_state$run = state.run) != null && _state$run.closed) || ((_state$mineRecovery = state.mineRecovery) == null ? void 0 : _state$mineRecovery.source) !== 'formal' || JSON.stringify(state.player) !== payload) return 'blocked';
          } catch (_unused3) {
            return 'blocked';
          }
          return this.writeChecked(payload, base, false, false, true);
        };
        _proto.writeChecked = function writeChecked(payload, base, recovery, opening, releasing) {
          if (opening === void 0) {
            opening = false;
          }
          if (releasing === void 0) {
            releasing = false;
          }
          if (!this.writable || !(recovery ? this.recognized(payload) : legacy(payload))) return 'blocked';
          var before;
          try {
            before = this.storage.getItem(this.key);
          } catch (_unused4) {
            this.close();
            return 'blocked';
          }
          if (before !== this.expected) {
            this.close();
            return 'blocked';
          }
          if (opening && before === null) return 'blocked';
          if (!(recovery && !opening || releasing ? before !== null && this.recognized(before) : legacy(before))) return 'blocked';
          if (base !== undefined && base !== before) return 'blocked';
          var reconciled = false;
          try {
            this.storage.setItem(this.key, payload);
          } catch (_unused5) {
            var stored;
            try {
              stored = this.storage.getItem(this.key);
            } catch (_unused6) {/* cannot determine outcome */}
            if (stored !== payload) {
              if (stored === before) return 'write-failed';
              this.uncertain = true;
              return 'uncertain';
            }
            reconciled = true;
          }
          this.expected = payload;
          return reconciled ? 'reconciled' : 'committed';
        };
        _createClass(FormalSaveGate, [{
          key: "writable",
          get: function get() {
            return !!this.release && !this.closed && !this.uncertain;
          }
        }]);
        return FormalSaveGate;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Game.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './QuestJournal.ts', './TestBoardRules.ts', './TestBoardChallenge.ts', './ContentQueue.ts', './ContentGroups.ts', './TravelClock.ts', './EnemySkills.ts', './BoardMechanics.ts', './ActorArt.ts', './Inventory.ts', './GameAudio.ts', './DungeonDirector.ts', './Chapter.ts', './CombatTags.ts', './mine-recovery.ts', './FormalSaveGate.ts', './battle-core.ts', './potion-bridge.ts', './formal-rules.ts', './cocos-board-adapter.ts', './Board.ts', './BattleMotion.ts', './CombatSceneLab.ts', './BattleRules.ts', './MineTrial.ts', './TemplateBoardFx.ts', './StageTravel.ts', './StageLayout.ts', './BuffView.ts', './TownRules.ts'], function (exports) {
  var _inheritsLoose, _extends, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, _construct, _objectWithoutPropertiesLoose, _createClass, cclegacy, _decorator, UIOpacity, tween, Vec3, Color, Node, UITransform, Graphics, Label, Sprite, SpriteFrame, Rect, Size, Mask, Material, Vec4, view, Tween, Component, resources, JsonAsset, EffectAsset, sys, profiler, Texture2D, QuestJournal, questBook, portalLinks, fractureHoles, jellyStarts, placeRocks, portalGravity, segmentedGravity, damageRocks, spreadJelly, challengeSwap, challengeEdge, challengeCatalog, TestBoardChallenge, pillarCells, sourceEntry, challengePowers, powerLabel, challengeGravity, hitChallengeLocks, powerCells, growChallengeLocks, ContentQueue, contentGroups, TravelClock, travelPose, planEnemyAction, identityPreservingRecovery, validateDelivery, deliveryStarts, minerEmblem, deliveryAdvanceScore, clearTerrain, minersAtExits, retireMinerBoard, shockTarget, actorArt, portraitBottomPadding, enemyPortraitSize, portraitFootprint, Inventory, heroes, resourceNames, equipment, GameAudio, DungeonDirector, locations, dungeonIds, enemy, worldPoints, tutorialRoute, dungeons, dungeonRewardMultiplier, unlocked, locationNames, makeRoute, drawUpgrades, encounter, roomRewards, battleCoinReward, worldRoute, worldTrack, partyFormation, readMineRecovery, planMineRest, planMineFormalClose, planMineTestClose, planMineLegacyVictory, planMinePotion, planMineFirstVictory, planMineChest, FormalSaveGate, createBattleCore, createPotionBridge, setupFormalRoom, IsolatedBoardSession, validExchange, matches, sideRefill, planRefill, legalMove, newBoard, opening, rockCell, holeCell, playableCell, cols, adjacent, mineGravity, verticalGravity, planWave, BattleMotion, openCombatSceneLab, newOathState, oathArmorLayers, rosterEmblems, oathDamage, selectTargets, planOathSkill, endOathRound, oathEnemyPower, applyBattleCry, skillOwner, testTerrainCells, testMechanism, mechanismPage, testMechanisms, mineTrialRandom, makeMineTrial, mineTestEncounter, TemplateBoardFx, StageTravel, stageCover, stageGrid, stageX, stageReelCrop, BuffView, restoreTown, exitBlessing, newTownProgress, claimAltar;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _extends = module.extends;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _construct = module.construct;
      _objectWithoutPropertiesLoose = module.objectWithoutPropertiesLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      Vec3 = module.Vec3;
      Color = module.Color;
      Node = module.Node;
      UITransform = module.UITransform;
      Graphics = module.Graphics;
      Label = module.Label;
      Sprite = module.Sprite;
      SpriteFrame = module.SpriteFrame;
      Rect = module.Rect;
      Size = module.Size;
      Mask = module.Mask;
      Material = module.Material;
      Vec4 = module.Vec4;
      view = module.view;
      Tween = module.Tween;
      Component = module.Component;
      resources = module.resources;
      JsonAsset = module.JsonAsset;
      EffectAsset = module.EffectAsset;
      sys = module.sys;
      profiler = module.profiler;
      Texture2D = module.Texture2D;
    }, function (module) {
      QuestJournal = module.QuestJournal;
      questBook = module.questBook;
    }, function (module) {
      portalLinks = module.portalLinks;
      fractureHoles = module.fractureHoles;
      jellyStarts = module.jellyStarts;
      placeRocks = module.placeRocks;
      portalGravity = module.portalGravity;
      segmentedGravity = module.segmentedGravity;
      damageRocks = module.damageRocks;
      spreadJelly = module.spreadJelly;
    }, function (module) {
      challengeSwap = module.challengeSwap;
      challengeEdge = module.challengeEdge;
      challengeCatalog = module.challengeCatalog;
      TestBoardChallenge = module.TestBoardChallenge;
      pillarCells = module.pillarCells;
      sourceEntry = module.sourceEntry;
      challengePowers = module.challengePowers;
      powerLabel = module.powerLabel;
      challengeGravity = module.challengeGravity;
      hitChallengeLocks = module.hitChallengeLocks;
      powerCells = module.powerCells;
      growChallengeLocks = module.growChallengeLocks;
    }, function (module) {
      ContentQueue = module.ContentQueue;
    }, function (module) {
      contentGroups = module.contentGroups;
    }, function (module) {
      TravelClock = module.TravelClock;
      travelPose = module.travelPose;
    }, function (module) {
      planEnemyAction = module.planEnemyAction;
    }, function (module) {
      identityPreservingRecovery = module.identityPreservingRecovery;
      validateDelivery = module.validateDelivery;
      deliveryStarts = module.deliveryStarts;
      minerEmblem = module.minerEmblem;
      deliveryAdvanceScore = module.deliveryAdvanceScore;
      clearTerrain = module.clearTerrain;
      minersAtExits = module.minersAtExits;
      retireMinerBoard = module.retireMinerBoard;
      shockTarget = module.shockTarget;
    }, function (module) {
      actorArt = module.actorArt;
      portraitBottomPadding = module.portraitBottomPadding;
      enemyPortraitSize = module.enemyPortraitSize;
      portraitFootprint = module.portraitFootprint;
    }, function (module) {
      Inventory = module.Inventory;
      heroes = module.heroes;
      resourceNames = module.resourceNames;
      equipment = module.equipment;
    }, function (module) {
      GameAudio = module.GameAudio;
    }, function (module) {
      DungeonDirector = module.DungeonDirector;
    }, function (module) {
      locations = module.locations;
      dungeonIds = module.dungeonIds;
      enemy = module.enemy;
      worldPoints = module.worldPoints;
      tutorialRoute = module.tutorialRoute;
      dungeons = module.dungeons;
      dungeonRewardMultiplier = module.dungeonRewardMultiplier;
      unlocked = module.unlocked;
      locationNames = module.locationNames;
      makeRoute = module.makeRoute;
      drawUpgrades = module.drawUpgrades;
      encounter = module.encounter;
      roomRewards = module.roomRewards;
      battleCoinReward = module.battleCoinReward;
      worldRoute = module.worldRoute;
      worldTrack = module.worldTrack;
    }, function (module) {
      partyFormation = module.partyFormation;
    }, function (module) {
      readMineRecovery = module.readMineRecovery;
      planMineRest = module.planMineRest;
      planMineFormalClose = module.planMineFormalClose;
      planMineTestClose = module.planMineTestClose;
      planMineLegacyVictory = module.planMineLegacyVictory;
      planMinePotion = module.planMinePotion;
      planMineFirstVictory = module.planMineFirstVictory;
      planMineChest = module.planMineChest;
    }, function (module) {
      FormalSaveGate = module.FormalSaveGate;
    }, function (module) {
      createBattleCore = module.createBattleCore;
    }, function (module) {
      createPotionBridge = module.createPotionBridge;
    }, function (module) {
      setupFormalRoom = module.setupFormalRoom;
    }, function (module) {
      IsolatedBoardSession = module.IsolatedBoardSession;
      validExchange = module.validExchange;
    }, function (module) {
      matches = module.matches;
      sideRefill = module.sideRefill;
      planRefill = module.planRefill;
      legalMove = module.legalMove;
      newBoard = module.newBoard;
      opening = module.opening;
      rockCell = module.rockCell;
      holeCell = module.holeCell;
      playableCell = module.playableCell;
      cols = module.cols;
      adjacent = module.adjacent;
      mineGravity = module.mineGravity;
      verticalGravity = module.verticalGravity;
      planWave = module.planWave;
    }, function (module) {
      BattleMotion = module.BattleMotion;
    }, function (module) {
      openCombatSceneLab = module.openCombatSceneLab;
    }, function (module) {
      newOathState = module.newOathState;
      oathArmorLayers = module.oathArmorLayers;
      rosterEmblems = module.rosterEmblems;
      oathDamage = module.oathDamage;
      selectTargets = module.selectTargets;
      planOathSkill = module.planOathSkill;
      endOathRound = module.endOathRound;
      oathEnemyPower = module.oathEnemyPower;
      applyBattleCry = module.applyBattleCry;
      skillOwner = module.skillOwner;
    }, function (module) {
      testTerrainCells = module.testTerrainCells;
      testMechanism = module.testMechanism;
      mechanismPage = module.mechanismPage;
      testMechanisms = module.testMechanisms;
      mineTrialRandom = module.mineTrialRandom;
      makeMineTrial = module.makeMineTrial;
      mineTestEncounter = module.mineTestEncounter;
    }, function (module) {
      TemplateBoardFx = module.TemplateBoardFx;
    }, function (module) {
      StageTravel = module.StageTravel;
    }, function (module) {
      stageCover = module.stageCover;
      stageGrid = module.stageGrid;
      stageX = module.stageX;
      stageReelCrop = module.stageReelCrop;
    }, function (module) {
      BuffView = module.BuffView;
    }, function (module) {
      restoreTown = module.restoreTown;
      exitBlessing = module.exitBlessing;
      newTownProgress = module.newTownProgress;
      claimAltar = module.claimAltar;
    }],
    execute: function () {
      var _excluded = ["materials"];
      var _dec, _class;
      cclegacy._RF.push({}, "293c0LpkiNDzKcsh+fuvggE", "Game", undefined);
      var ccclass = _decorator.ccclass;
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
      // Cocos draws siblings back to front: road first, then C/B/A, middle verge and foreground.
      var forestLabLayers = ['ground', 'far', 'mist', 'middle', 'midground', 'front'].map(function (layer) {
        return 'forest-lab-' + layer;
      });
      var battleToolbar = {
        x: -162,
        gap: 108,
        y: -394,
        width: 102
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
          _this.gameFont = void 0;
          _this.allArt = [];
          _this.downloads = void 0;
          _this.artLoads = new Map();
          _this.readyGroups = new Set();
          _this.deliveryManifest = void 0;
          _this.contentReady = false;
          _this.contentLoading = void 0;
          _this.releaseVersion = '20261120-quests-and-gravity-1';
          _this.stageTravel = void 0;
          _this.forestLayout = void 0;
          _this.forestForeground = new WeakMap();
          _this.forestPropFrames = [];
          _this.forestNodeStats = {
            created: 0,
            recycled: 0,
            peak: 0
          };
          _this.forestPropWindows = new WeakMap();
          _this.stageFrames = new Map();
          _this.stageReels = new Map();
          _this.actorEffect = void 0;
          _this.forestEffect = void 0;
          _this.waveAudit = [];
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
          _this.stage4AGeneration = 0;
          _this.stage4AStockUncertain = false;
          _this.stage4A = void 0;
          _this.battlePhase = void 0;
          _this.turn = 1;
          _this.autoRequest = 0;
          _this.battleLogs = [];
          _this.oath = newOathState();
          _this.stunned = new Set();
          _this.foes = [];
          _this.healthBar = void 0;
          _this.buffView = void 0;
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
          _this.rescuedMiners = 0;
          _this.terrain = new Map();
          _this.rocks = new Map();
          _this.holes = new Set();
          _this.jelly = new Set();
          _this.portalTransits = 0;
          _this.mechanismAudit = [];
          _this.challenge = void 0;
          _this.testObjective = void 0;
          _this.deliveryEvents = [];
          _this.automatic = false;
          _this.battleRoot = void 0;
          _this.saveKey = 'four-emblems-cocos-chapter-one-v1';
          _this.saveGate = void 0;
          _this.mineRecovery = void 0;
          _this.restoredTileIds = new WeakMap();
          _this.closeSaveGate = function () {
            var _this$saveGate;
            return (_this$saveGate = _this.saveGate) == null ? void 0 : _this$saveGate.close();
          };
          _this.busy = false;
          _this.party = ['s'];
          _this.phase = 'wolves';
          _this.taught = false;
          _this.reported = false;
          _this.villageGuidePending = false;
          _this.town = newTownProgress();
          _this.location = 0;
          _this.gold = 20;
          _this.exp = 0;
          _this.dp = 0;
          _this.dungeon = void 0;
          _this.cleared = new Set();
          _this.hunt = void 0;
          _this.journal = new QuestJournal();
          _this.bagMaterials = false;
          _this.adventure = void 0;
          _this.tutorialXP = 0;
          _this.rewardedRooms = new WeakSet();
          _this.enemyNodes = [];
          _this.lock = void 0;
          _this.heroes = new Map();
          _this.enemyMax = [];
          _this.arrivedEncounter = void 0;
          _this.encounterTravelAudit = void 0;
          _this.enemyActionAudit = [];
          _this.hp = 45;
          _this.enemies = [72, 72];
          _this.potion = 1;
          _this.status = void 0;
          _this.pageMotions = new Set();
          _this.activeTravelCancel = void 0;
          _this.travelSerial = 0;
          _this.travelAudit = [];
          _this.recoveryPlaying = false;
          _this.actorStates = new WeakMap();
          _this.popupLayer = void 0;
          _this.popupPool = [];
          _this.popupOrder = 0;
          _this.speechOwner = void 0;
          return _this;
        }
        var _proto = FourEmblemsGame.prototype;
        _proto.canChallengeSwap = function canChallengeSwap(a, b) {
          return !this.challenge || challengeSwap(this.challenge.id, a, b, this.challenge.locks);
        };
        _proto.challengeMatches = function challengeMatches(board) {
          var state = this.challenge;
          if (!state) return matches(board);
          return matches(board, function (a, b) {
            return challengeEdge(state.id, a, b) && (state.id === 'wire' || !state.locks.has(a) && !state.locks.has(b));
          });
        };
        _proto.recoverTestBoard = function recoverTestBoard() {
          var _this$trial$random,
            _this$trial,
            _this2 = this,
            _this$challenge;
          return identityPreservingRecovery(this.board, (_this$trial$random = (_this$trial = this.trial) == null ? void 0 : _this$trial.random) != null ? _this$trial$random : Math.random, function (board) {
            return !_this2.challengeMatches(board).length && !!_this2.legalMove(board);
          }, (_this$challenge = this.challenge) == null ? void 0 : _this$challenge.locks);
        };
        _proto.isFusion = function isFusion(a, b) {
          var _this$challenge2,
            _this3 = this;
          if (((_this$challenge2 = this.challenge) == null ? void 0 : _this$challenge2.id) !== 'fusion') return false;
          return [a, b].every(function (i) {
            var _this3$restoredTileId;
            return _this3.challenge.powers.has((_this3$restoredTileId = _this3.restoredTileIds.get(_this3.tiles[i])) != null ? _this3$restoredTileId : '');
          });
        };
        _proto.planBattleRefill = function planBattleRefill(board, removed, types, random) {
          var _this$trial3;
          if (types === void 0) {
            types = this.types;
          }
          if (random === void 0) {
            var _this$trial$random2, _this$trial2;
            random = (_this$trial$random2 = (_this$trial2 = this.trial) == null ? void 0 : _this$trial2.random) != null ? _this$trial$random2 : Math.random;
          }
          if (this.blockedBoardCells.size) return sideRefill(board, removed, types, random, this.blockedBoardCells);
          return planRefill(board, removed, types, random, this.boardRoutes, _extends({
            blocked: this.blockedBoardCells
          }, ((_this$trial3 = this.trial) == null ? void 0 : _this$trial3.id) === 'portal' ? {
            portals: portalLinks
          } : {}));
        };
        _proto.questEvent = function questEvent(kind, key, notify) {
          if (notify === void 0) {
            notify = true;
          }
          if (this.trial || this.mineRecovery) return;
          var accepted = this.journal.signal({
            kind: kind,
            key: key
          });
          if (notify) {
            for (var _iterator = _createForOfIteratorHelperLoose(accepted), _step; !(_step = _iterator()).done;) {
              var d = _step.value;
              this.questToast(d.title);
            }
          }
        };
        _proto.questToast = function questToast(title) {
          var node = this.box('任务接取提示', 400, 321, 300, 46, '#30453b', this.node);
          this.label('已获取任务：' + title, 0, 0, 280, 19, node);
          var alpha = node.addComponent(UIOpacity);
          alpha.opacity = 0;
          this.audio.play('charge');
          tween(alpha).to(.2, {
            opacity: 255
          }).delay(1).to(.22, {
            opacity: 0
          }).start();
          tween(node).to(.2, {
            position: new Vec3(78, 321, 0)
          }).delay(1).to(.22, {
            position: new Vec3(360, 321, 0)
          }).call(function () {
            return node.destroy();
          }).start();
        };
        _proto.turnIn = function turnIn(key) {
          var completed = this.journal.submit({
            kind: 'talk',
            key: key
          }, this.inventory.materials);
          for (var _iterator2 = _createForOfIteratorHelperLoose(completed), _step2; !(_step2 = _iterator2()).done;) {
            var q = _step2.value;
            this.addMaterials(_extends({}, q.reward.materials, {
              gold: q.reward.gold
            }));
          }
          return completed;
        };
        _proto.restoreJournal = function restoreJournal(data) {
          var _this4 = this;
          this.journal = new QuestJournal(questBook, data);
          if (data) {
            var _this$hunt;
            if (((_this$hunt = this.hunt) == null ? void 0 : _this$hunt.state) === 'ready') this.journal.signal({
              kind: 'clear',
              key: this.hunt.target
            });
            return;
          }
          var talk = function talk(key) {
            return _this4.journal.signal({
              kind: 'talk',
              key: key
            });
          };
          if (this.town.rescued || this.reported) this.journal.signal({
            kind: 'room',
            key: 'villager'
          });
          if (this.reported) this.journal.submit({
            kind: 'talk',
            key: 'chief-report'
          }, {});
          for (var _iterator3 = _createForOfIteratorHelperLoose([['d', 'knight', this.town.knightQuest], ['m', 'mage', this.town.mageQuest]]), _step3; !(_step3 = _iterator3()).done;) {
            var _step3$value = _step3.value,
              role = _step3$value[0],
              quest = _step3$value[1],
              accepted = _step3$value[2];
            if (accepted || this.party.includes(role)) talk('chief-' + quest);
            if (this.party.includes(role)) {
              talk(quest);
              this.journal.submit({
                kind: 'talk',
                key: quest
              }, {});
            }
          }
          if (this.hunt && this.hunt.state !== 'cooldown') {
            talk('accept-' + this.hunt.target);
            if (this.hunt.state === 'ready') this.journal.signal({
              kind: 'clear',
              key: this.hunt.target
            });
          }
        };
        _proto.worldFooter = function worldFooter(back, enabled, y) {
          var _this5 = this;
          if (enabled === void 0) {
            enabled = function enabled() {
              return true;
            };
          }
          if (y === void 0) {
            y = -386;
          }
          var actions = [['小队配置', function () {
            return _this5.roster(_this5.party[0], back);
          }], ['任务', function () {
            return _this5.questPanel(back);
          }], ['规则', function () {
            return _this5.showRules(0, back);
          }], ['返回主菜单', function () {
            return _this5.menu();
          }]];
          actions.forEach(function (_ref, i) {
            var name = _ref[0],
              action = _ref[1];
            return _this5.button(name, y, function () {
              if (enabled()) action();
            }, (i - 1.5) * 113, 107);
          });
        };
        _proto.questPanel = function questPanel(back, done, group, selected, page) {
          var _this6 = this;
          if (done === void 0) {
            done = false;
          }
          if (group === void 0) {
            group = '';
          }
          if (selected === void 0) {
            selected = '';
          }
          if (page === void 0) {
            page = 0;
          }
          this.page('任务日志', '', 'travel-forest-plains');
          var draw = function draw(d, g, id, p) {
            if (d === void 0) {
              d = done;
            }
            if (g === void 0) {
              g = group;
            }
            if (id === void 0) {
              id = selected;
            }
            if (p === void 0) {
              p = 0;
            }
            return _this6.questPanel(back, d, g, id, p);
          };
          this.button('当前任务', 85, function () {
            return draw(false, '', '');
          }, -105, 184, !done);
          this.button('已完成任务', 85, function () {
            return draw(true, '', '');
          }, 105, 184, done);
          var rows = [];
          var _loop = function _loop() {
              var name = _Array$from[_i];
              var defs = questBook.filter(function (q) {
                return q.group === name;
              });
              if (!defs.some(function (q) {
                var _this6$journal$entrie, _this6$journal$entrie2;
                return done ? (_this6$journal$entrie = _this6.journal.entries[q.id]) == null ? void 0 : _this6$journal$entrie.finished : (_this6$journal$entrie2 = _this6.journal.entries[q.id]) == null ? void 0 : _this6$journal$entrie2.active;
              })) return 0; // continue
              rows.push({
                title: (group === name ? '▾ ' : '▸ ') + name,
                action: function action() {
                  return draw(done, group === name ? '' : name, '');
                }
              });
              if (name !== group) return 0; // continue
              var _loop2 = function _loop2() {
                  var q = _step4.value;
                  var e = _this6.journal.entries[q.id];
                  if (!e || !(done ? e.finished : e.active || name !== '狩猎' && e.finished)) return 0; // continue
                  var finished = done || !e.active;
                  rows.push({
                    title: q.title + ' · ' + (finished ? '已完成' : _this6.journal.ready(q, _this6.inventory.materials) ? '待交付' : '进行中'),
                    action: function action() {
                      return draw(done, name, selected === q.id ? '' : q.id);
                    }
                  });
                  if (selected !== q.id) return 0; // continue
                  rows.push({
                    title: q.description
                  });
                  q.objectives.forEach(function (o, i) {
                    return rows.push({
                      title: o.text + '　' + (finished ? o.count : _this6.journal.progress(q, i, _this6.inventory.materials)) + '/' + o.count
                    });
                  });
                  if (q.reward.gold) rows.push({
                    title: '金币 × ' + q.reward.gold,
                    color: '#ffd475'
                  });
                  for (var _i2 = 0, _Object$entries = Object.entries((_q$reward$materials = q.reward.materials) != null ? _q$reward$materials : {}); _i2 < _Object$entries.length; _i2++) {
                    var _q$reward$materials;
                    var _Object$entries$_i = _Object$entries[_i2],
                      key = _Object$entries$_i[0],
                      qty = _Object$entries$_i[1];
                    rows.push({
                      title: resourceNames[key] + ' × ' + qty,
                      color: '#a5dac6'
                    });
                  }
                  if (q.reward.item) rows.push({
                    title: q.reward.item,
                    color: '#a5dac6'
                  });
                },
                _ret2;
              for (var _iterator4 = _createForOfIteratorHelperLoose(defs), _step4; !(_step4 = _iterator4()).done;) {
                _ret2 = _loop2();
                if (_ret2 === 0) continue;
              }
            },
            _ret;
          for (var _i = 0, _Array$from = Array.from(new Set(questBook.map(function (q) {
              return q.group;
            }))); _i < _Array$from.length; _i++) {
            _ret = _loop();
            if (_ret === 0) continue;
          }
          if (!rows.length) this.label(done ? '暂无已完成任务' : '暂无进行中的任务', 0, -45, 420, 20);
          page = Math.min(page, Math.max(0, Math.ceil(rows.length / 7) - 1));
          rows.slice(page * 7, page * 7 + 7).forEach(function (row, i) {
            var y = 22 - i * 48;
            if (row.action) _this6.button(row.title, y, row.action, 0, 408);else {
              var text = _this6.label(row.title, 0, y, 416, 17);
              if (row.color) text.color = Color.fromHEX(new Color(), row.color);
            }
          });
          if (page) this.button('上一页', -320, function () {
            return draw(done, group, selected, page - 1);
          }, -110, 150);
          if ((page + 1) * 7 < rows.length) this.button('下一页', -320, function () {
            return draw(done, group, selected, page + 1);
          }, 110, 150);
          this.button('返回', -385, back, 0, 170);
        };
        _proto.heroAttack = function heroAttack(id) {
          return this.inventory.stats(id).attack;
        };
        _proto.gainXP = function gainXP(amount) {
          this.exp += amount;
          for (var _iterator5 = _createForOfIteratorHelperLoose(this.party), _step5; !(_step5 = _iterator5()).done;) {
            var id = _step5.value;
            this.inventory.experience[id] += amount;
          }
        };
        _proto.addMaterials = function addMaterials(gains) {
          var _gains$gold;
          this.gold += (_gains$gold = gains.gold) != null ? _gains$gold : 0;
          for (var _i3 = 0, _Object$keys = Object.keys(this.inventory.materials); _i3 < _Object$keys.length; _i3++) {
            var _gains$key;
            var key = _Object$keys[_i3];
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
            var _this7 = this;
            var _URLSearchParams$get, seed, fx, sweep, sceneArt, skillArt, atlas;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  profiler.hideStats();
                  if (!(typeof location !== 'undefined' && new URLSearchParams(location.search).has('m5-stage2'))) {
                    _context.next = 7;
                    break;
                  }
                  seed = Number((_URLSearchParams$get = new URLSearchParams(location.search).get('seed')) != null ? _URLSearchParams$get : 8);
                  globalThis.m5SceneLab = openCombatSceneLab(this.node, seed, new URLSearchParams(location.search).has('formal'));
                  // Prepare the next playable stretch in memory while the menu/tutorial is interactive.
                  this.warmNextScenes();
                  globalThis.__fourEmblemsReady = true;
                  return _context.abrupt("return");
                case 7:
                  this.saveGate = new FormalSaveGate(this.saveKey, sys.localStorage, function (raw) {
                    return _this7.recoveryOptIn() && !!readMineRecovery(raw);
                  });
                  if (typeof window !== 'undefined') window.addEventListener('pagehide', this.closeSaveGate);
                  _context.next = 11;
                  return this.saveGate.acquire(typeof navigator === 'undefined' ? undefined : navigator.locks);
                case 11:
                  if (this.isValid) {
                    _context.next = 13;
                    break;
                  }
                  return _context.abrupt("return");
                case 13:
                  this.audio = new GameAudio(this.node);
                  fx = TemplateBoardFx.load().then(function (frames) {
                    _this7.templateFxFrames = frames;
                  });
                  sweep = new Promise(function (resolve) {
                    return resources.load('effects/skill-sweep', EffectAsset, function (error, effect) {
                      if (!error) {
                        _this7.skillSweep = new Material();
                        _this7.skillSweep.initialize({
                          effectAsset: effect,
                          defines: {
                            USE_TEXTURE: true
                          }
                        });
                        _this7.tintedFrame = new Material();
                        _this7.tintedFrame.initialize({
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
                  _context.next = 18;
                  return new Promise(function (resolve) {
                    return resources.load('effects/actor-state', EffectAsset, function (error, effect) {
                      if (!error) _this7.actorEffect = effect;
                      resolve();
                    });
                  });
                case 18:
                  _context.next = 20;
                  return new Promise(function (resolve) {
                    return resources.load('effects/forest-depth', EffectAsset, function (error, effect) {
                      if (!error) _this7.forestEffect = effect;
                      resolve();
                    });
                  });
                case 20:
                  sceneArt = ['map-parchment', 'world-travel', 'world-village-cut', 'gear-stage', 'village-chief-stage', 'village-shop-stage', 'village-tavern-stage', 'village-smith-stage', 'npc-chief', 'npc-shop', 'npc-innkeeper', 'npc-smith', 'dungeon-traveler', 'dungeon-chest', 'dungeon-merchant', 'slot-main', 'slot-off', 'slot-armor', 'slot-accessory', 'tool-base', 'gear-arrow', 'travel-plains', 'travel-village-edge', 'travel-mine-edge'].concat(dungeonIds.filter(function (id) {
                    return id !== 'forest' || _this7.useForestReel;
                  }).map(function (id) {
                    return id + '-reel';
                  }), ['village', 'mine', 'forest', 'swamp', 'tower'].map(function (name) {
                    return 'travel-' + name + '-plains';
                  }));
                  if (!this.useForestReel) sceneArt.push.apply(sceneArt, forestLabLayers.concat(['forest-props']));
                  if (this.useForestReel) {
                    _context.next = 25;
                    break;
                  }
                  _context.next = 25;
                  return new Promise(function (resolve) {
                    resources.load('art/forest-props-layout', JsonAsset, function (error, asset) {
                      if (!error) _this7.forestLayout = asset.json;
                      resolve();
                    });
                  });
                case 25:
                  skillArt = ['skill-frame', 'advanced-frame'];
                  this.allArt = [].concat(sceneArt, skillArt, ['village-stage', 'wolf', 'forest-wolf', 'boss', 'boar', 'vine', 'bear', 'bat', 'beetle', 'golem', 'ghost', 'frog', 'lich', 'dragon', 'knight', 'wizard', 's', 'd', 'm', 'h', 'stone', 'fist', 'cry', 'staff', 'hero-s', 'hero-d', 'hero-m', 'hero-h', 'combat-impact', 'forest-bug', 'forest-leafguard', 'forest-treant', 'forest-stone', 'forest-bear', 'murloc-spear', 'murloc-axe', 'murloc-mage', 'npc-villager', 'npc-villager-down'], equipment.map(function (item) {
                    return 'gear-' + item.id;
                  }), ['game-logo', 'village-navigation', 'trial-ui-banner', 'trial-ui-button', 'trial-ui-button-off', 'trial-ui-back']);
                  // Startup textures only; persistent low-priority prefetch begins after menu readiness.
                  _context.next = 29;
                  return Promise.all([fx, sweep, this.loadArt([].concat(!this.useForestReel ? [].concat(forestLabLayers, ['forest-props']) : ['forest-reel'], skillArt, ['game-logo', 'wolf', 'forest-wolf', 'hero-s', 's', 'stone', 'fist', 'cry', 'combat-impact', 'trial-ui-banner', 'trial-ui-button', 'trial-ui-button-off', 'trial-ui-back']))]);
                case 29:
                  if (this.isValid) {
                    atlas = this.textures.get('forest-props');
                    if (atlas && this.forestLayout) this.forestPropFrames = this.forestLayout.frames.map(function (_ref2) {
                      var x = _ref2[0],
                        y = _ref2[1],
                        w = _ref2[2],
                        h = _ref2[3];
                      return _this7.frameCrop(atlas, x, y, w, h);
                    });
                    this.prepareStageReels();
                    this.menu();
                    this.downloads = new ContentQueue(function (name, signal, progress) {
                      return _this7.downloadContentArt(name, signal, progress);
                    });
                    globalThis.__contentDownloads = this.downloads;
                    void this.downloads.enqueue(Object.values(contentGroups).flat().filter(function (n) {
                      return !_this7.textures.has(n);
                    }))["catch"](function () {});
                    // Prepare the next playable stretch in memory while the menu/tutorial is interactive.
                    this.warmNextScenes();
                    globalThis.__fourEmblemsReady = true;
                  }
                case 30:
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
        _proto.warmNextScenes = function warmNextScenes() {
          var _this8 = this;
          var preparation = Promise.resolve();
          var _loop3 = function _loop3() {
            var name = _arr[_i4];
            // A retrying file must not hold back other textures that already arrived.
            void _this8.downloads.enqueue([name]).then(function () {
              preparation = preparation.then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!_this8.isValid) {
                        _context2.next = 3;
                        break;
                      }
                      _context2.next = 3;
                      return _this8.loadArt([name]);
                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }, _callee2);
              })))["catch"](function () {}); // A visible scene can retry a failed preparation.
            })["catch"](function () {});
          };
          for (var _i4 = 0, _arr = [].concat(contentGroups.tutorial, contentGroups.map, contentGroups.village); _i4 < _arr.length; _i4++) {
            _loop3();
          }
        };
        _proto.downloadContentArt = /*#__PURE__*/function () {
          var _downloadContentArt = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(name, signal, progress) {
            var check, _response, manifest, asset, url, cache, cached, response, size, chunks, reader, cancel, part, bytes, body, offset, _iterator6, _step6, chunk, headers;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  check = function check() {
                    if (signal.aborted) throw Error('Download cancelled: ' + name);
                  };
                  check();
                  _context3.next = 4;
                  return new Promise(function (resolve, reject) {
                    var cancel = function cancel() {
                      return reject(Error('Preload cancelled: ' + name));
                    };
                    signal.addEventListener('abort', cancel, {
                      once: true
                    });
                    resources.preload('art/' + name + '/texture', Texture2D, function (error) {
                      signal.removeEventListener('abort', cancel);
                      if (signal.aborted) return;
                      error ? reject(error) : resolve();
                    });
                  });
                case 4:
                  check();
                  progress();
                  if (this.deliveryManifest) {
                    _context3.next = 17;
                    break;
                  }
                  _context3.next = 9;
                  return fetch('content-delivery.json', {
                    signal: signal
                  });
                case 9:
                  _response = _context3.sent;
                  if (_response.ok) {
                    _context3.next = 12;
                    break;
                  }
                  throw Error('Content manifest HTTP ' + _response.status);
                case 12:
                  _context3.next = 14;
                  return _response.json();
                case 14:
                  manifest = _context3.sent;
                  check();
                  this.deliveryManifest = manifest;
                case 17:
                  asset = Object.values(this.deliveryManifest.groups).flatMap(function (g) {
                    return g.assets;
                  }).find(function (a) {
                    return a.name === name;
                  });
                  if (asset) {
                    _context3.next = 20;
                    break;
                  }
                  throw Error('Unassigned delivered texture: ' + name);
                case 20:
                  check();
                  progress();
                  // Dedicated prefetch streams bypass the two buffering retry layers. The queue
                  // owns timeout/retry; only a fully validated image is put into the shared cache.
                  url = new URL(asset.path, location.href).href;
                  if (!(typeof caches !== 'undefined')) {
                    _context3.next = 29;
                    break;
                  }
                  _context3.next = 26;
                  return caches.open('four-emblems-assets-' + this.releaseVersion)["catch"](function () {
                    return undefined;
                  });
                case 26:
                  _context3.t0 = _context3.sent;
                  _context3.next = 30;
                  break;
                case 29:
                  _context3.t0 = undefined;
                case 30:
                  cache = _context3.t0;
                  _context3.next = 33;
                  return cache == null ? void 0 : cache.match(url)["catch"](function () {
                    return undefined;
                  });
                case 33:
                  cached = _context3.sent;
                  if (!(cached != null)) {
                    _context3.next = 38;
                    break;
                  }
                  _context3.t1 = cached;
                  _context3.next = 41;
                  break;
                case 38:
                  _context3.next = 40;
                  return fetch(asset.path, {
                    signal: signal,
                    headers: {
                      'X-Four-Emblems-Prefetch': '1'
                    }
                  });
                case 40:
                  _context3.t1 = _context3.sent;
                case 41:
                  response = _context3.t1;
                  if (response.ok) {
                    _context3.next = 44;
                    break;
                  }
                  throw Error('Texture download HTTP ' + response.status + ': ' + name);
                case 44:
                  size = 0;
                  chunks = [];
                  if (!response.body) {
                    _context3.next = 68;
                    break;
                  }
                  reader = response.body.getReader();
                  cancel = function cancel() {
                    void reader.cancel()["catch"](function () {});
                  };
                  signal.addEventListener('abort', cancel, {
                    once: true
                  });
                  _context3.prev = 50;
                case 51:
                  _context3.next = 53;
                  return reader.read();
                case 53:
                  part = _context3.sent;
                  check();
                  if (!part.done) {
                    _context3.next = 57;
                    break;
                  }
                  return _context3.abrupt("break", 62);
                case 57:
                  size += part.value.byteLength;
                  if (!cached) chunks.push(part.value);
                  progress();
                case 60:
                  _context3.next = 51;
                  break;
                case 62:
                  _context3.prev = 62;
                  signal.removeEventListener('abort', cancel);
                  reader.releaseLock();
                  return _context3.finish(62);
                case 66:
                  _context3.next = 75;
                  break;
                case 68:
                  _context3.t2 = Uint8Array;
                  _context3.next = 71;
                  return response.arrayBuffer();
                case 71:
                  _context3.t3 = _context3.sent;
                  bytes = new _context3.t2(_context3.t3);
                  size = bytes.byteLength;
                  if (!cached) chunks.push(bytes);
                case 75:
                  check();
                  if (!(size !== asset.bytes)) {
                    _context3.next = 81;
                    break;
                  }
                  if (!cached) {
                    _context3.next = 80;
                    break;
                  }
                  _context3.next = 80;
                  return cache == null ? void 0 : cache["delete"](url);
                case 80:
                  throw Error('Incomplete texture: ' + name);
                case 81:
                  if (!(cache && !cached)) {
                    _context3.next = 91;
                    break;
                  }
                  body = new Uint8Array(size);
                  offset = 0;
                  for (_iterator6 = _createForOfIteratorHelperLoose(chunks); !(_step6 = _iterator6()).done;) {
                    chunk = _step6.value;
                    body.set(chunk, offset);
                    offset += chunk.byteLength;
                  }
                  headers = new Headers(response.headers);
                  headers["delete"]('content-encoding');
                  headers["delete"]('content-length');
                  _context3.next = 90;
                  return cache.put(url, new Response(body, {
                    headers: headers
                  }))["catch"](function () {});
                case 90:
                  check();
                case 91:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this, [[50,, 62, 66]]);
          }));
          function downloadContentArt(_x, _x2, _x3) {
            return _downloadContentArt.apply(this, arguments);
          }
          return downloadContentArt;
        }();
        _proto.loadArt = /*#__PURE__*/function () {
          var _loadArt = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(names) {
            var _this9 = this;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return Promise.all(Array.from(new Set(names)).filter(function (name) {
                    return !_this9.textures.has(name);
                  }).map(function (name) {
                    var pending = _this9.artLoads.get(name);
                    if (pending) return pending;
                    var task = new Promise(function (resolve, reject) {
                      var settled = false;
                      var timer = setTimeout(function () {
                        settled = true;
                        reject(Error('资源准备超时，请重试: ' + name));
                      }, 60000);
                      resources.load('art/' + name + '/texture', Texture2D, function (error, texture) {
                        if (settled) return;
                        settled = true;
                        clearTimeout(timer);
                        if (error) {
                          reject(Error('资源加载失败: ' + name));
                          return;
                        }
                        if (!_this9.isValid) {
                          resolve();
                          return;
                        }
                        var frame = new SpriteFrame();
                        frame.texture = texture;
                        _this9.textures.set(name, frame);
                        resolve();
                      });
                    })["finally"](function () {
                      if (_this9.artLoads.get(name) === task) _this9.artLoads["delete"](name);
                    });
                    _this9.artLoads.set(name, task);
                    return task;
                  }));
                case 2:
                case "end":
                  return _context4.stop();
              }
            }, _callee4);
          }));
          function loadArt(_x4) {
            return _loadArt.apply(this, arguments);
          }
          return loadArt;
        }();
        _proto.deferContent = function deferContent(action, group, required) {
          var _this10 = this;
          if (group === void 0) {
            group = 'tutorial';
          }
          if (this.readyGroups.has(group)) return false;
          if (this.contentLoading) return true;
          var groups = required ? [] : group === 'all' ? Object.keys(contentGroups) : ['opening', group];
          var names = Array.from(new Set(required != null ? required : groups.flatMap(function (g) {
            return Array.from(contentGroups[g]);
          })));
          var markReady = function markReady() {
            groups.forEach(function (g) {
              return _this10.readyGroups.add(g);
            });
            _this10.readyGroups.add(group);
            _this10.contentReady = _this10.readyGroups.has('tutorial');
            _this10.prepareStageReels();
          };
          if (names.every(function (name) {
            return _this10.textures.has(name);
          })) {
            markReady();
            return false;
          }
          this.page('正在准备下一段旅程', '后台下载持续进行，仅等待当前场景所需资源。', 'stage-forest-0');
          var root = this.ui;
          this.contentLoading = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
            var _this10$downloads;
            var missing, i;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  // Foreground load may reuse an in-flight preload; no all-content barrier.
                  void ((_this10$downloads = _this10.downloads) == null ? void 0 : _this10$downloads.enqueue(names, true)["catch"](function () {}));
                  missing = names.filter(function (name) {
                    return !_this10.textures.has(name);
                  });
                  i = 0;
                case 3:
                  if (!(i < missing.length)) {
                    _context5.next = 9;
                    break;
                  }
                  _context5.next = 6;
                  return _this10.loadArt(missing.slice(i, i + 4));
                case 6:
                  i += 4;
                  _context5.next = 3;
                  break;
                case 9:
                  markReady();
                  _this10.contentLoading = undefined;
                  if (_this10.isValid && _this10.ui === root) action();
                case 12:
                case "end":
                  return _context5.stop();
              }
            }, _callee5);
          }))()["catch"](function (error) {
            _this10.contentLoading = undefined;
            if (!_this10.isValid || _this10.ui !== root) return;
            _this10.label(String(error.message), 0, 0, 430, 18);
            _this10.button('重新加载', -65, function () {
              return _this10.deferContent(action, group, required);
            });
          });
          return true;
        };
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
          label.fontSize = size * 2;
          label.fontFamily = '"Microsoft YaHei", "PingFang SC", "Noto Sans CJK SC", sans-serif';
          if (this.gameFont) {
            label.useSystemFont = false;
            label.font = this.gameFont;
          }
          label.lineHeight = (size + 5) * 2;
          label.color = Color.fromHEX(new Color(), '#fff3d2');
          label.overflow = Label.Overflow.SHRINK;
          // Switching to an imported font may resize Label while its default
          // overflow is NONE. Restore the intended box after all font setters.
          node.getComponent(UITransform).setContentSize(w * 2, size * 4);
          node.setScale(.5, .5, 1);
          return label;
        };
        _proto.art = function art(name, x, y, w, h, parent) {
          if (parent === void 0) {
            parent = this.ui;
          }
          var frame = this.textures.get(name);
          if (!frame) return;
          var fit = Math.min(w / frame.originalSize.width, h / frame.originalSize.height);
          var node = this.paintFrame(name, frame, x, y, frame.originalSize.width * fit, frame.originalSize.height * fit, parent);
          if (actorArt[name]) {
            node.setScale(1, 1, 1);
            var sprite = node.getComponent(Sprite);
            if (sprite) this.actorMaterial(sprite);
          }
          return node;
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
          var _this11 = this;
          var _loop4 = function _loop4() {
            var id = _step7.value;
            var source = _this11.textures.get(id + '-reel');
            if (!source || _this11.stageReels.has(id + '-reel')) return 1; // continue
            var _source$rect = source.rect,
              w = _source$rect.width,
              h = _source$rect.height;
            var _dungeonReels$id = dungeonReels[id],
              top = _dungeonReels$id.top,
              bottom = _dungeonReels$id.bottom,
              stops = _dungeonReels$id.stops;
            var _stageReelCrop = stageReelCrop(w, h, top, bottom),
              y = _stageReelCrop.y,
              aperture = _stageReelCrop.h,
              window = _stageReelCrop.window,
              drawnWidth = _stageReelCrop.drawnWidth;
            var cropped = _this11.frameCrop(source, 0, y, w, aperture);
            _this11.stageFrames.set(id + '-reel', cropped);
            _this11.stageReels.set(id, {
              width: drawnWidth,
              stops: stops
            });
            stops.forEach(function (stop, i) {
              return _this11.stageFrames.set('stage-' + id + '-' + i, _this11.frameCrop(source, stop * (w - window), y, window, aperture));
            });
          };
          for (var _iterator7 = _createForOfIteratorHelperLoose(dungeonIds), _step7; !(_step7 = _iterator7()).done;) {
            if (_loop4()) continue;
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
          var forestStop = this.forestLabStop(name);
          if (forestStop !== undefined) {
            var _view = this.box(name, x, y, width, height, undefined, parent);
            _view.addComponent(Mask).type = Mask.Type.GRAPHICS_RECT;
            if (this.forestEffect) {
              var sky = this.paintFrame('森林渐变天空', this.textures.get('forest-props'), 0, 0, width, height, _view);
              var material = new Material();
              material.initialize({
                effectAsset: this.forestEffect,
                defines: {
                  USE_TEXTURE: true,
                  SKY: true
                }
              });
              sky.getComponent(Sprite).customMaterial = material;
              sky.once(Node.EventType.NODE_DESTROYED, function () {
                return material.destroy();
              });
            }
            for (var _iterator8 = _createForOfIteratorHelperLoose(forestLabLayers), _step8; !(_step8 = _iterator8()).done;) {
              var layer = _step8.value;
              var image = this.textures.get(layer);
              var _this$forestLayout$bo = this.forestLayout.bounds[layer.slice('forest-lab-'.length)],
                drawnWidth = _this$forestLayout$bo[0],
                left = _this$forestLayout$bo[1],
                top = _this$forestLayout$bo[2],
                baseWidth = _this$forestLayout$bo[3],
                baseHeight = _this$forestLayout$bo[4];
              var strip = this.box(layer, 0, 0, drawnWidth, height, undefined, _view);
              // Surface segments are mounted only for the camera window by positionForestLab.
            }

            this.positionForestLab(_view, forestStop);
            return _view;
          }
          var frame = this.stageFrames.get(name);
          if (!frame) {
            var source = this.textures.get(name);
            if (source) {
              // Anchor the bottom so framing can trim scenery but keeps the walking surface.
              var crop = stageCover(source.rect.width, source.rect.height);
              frame = this.frameCrop(source, crop.x, crop.y, crop.w, crop.h);
              this.stageFrames.set(name, frame);
            }
          }
          (_frame = frame) != null ? _frame : frame = this.stageFrames.get('stage-forest-0');
          if (frame) return this.paintFrame(name, frame, x, y, width, height, parent);
          return this.box(name, x, y, width, height, '#24342b', parent);
        };
        _proto.forestLabStop = function forestLabStop(name) {
          var _this12 = this,
            _this$dungeon$rooms$l,
            _this$dungeon;
          var forest = /^stage-forest-(\d+)$/.exec(name);
          if (!forest || !this.forestLayout || !this.forestPropFrames.length || !forestLabLayers.every(function (layer) {
            return _this12.textures.has(layer);
          })) return undefined;
          return Number(forest[1]) / (Math.max(2, (_this$dungeon$rooms$l = (_this$dungeon = this.dungeon) == null ? void 0 : _this$dungeon.rooms.length) != null ? _this$dungeon$rooms$l : 5) - 1);
        };
        _proto.positionForestLab = function positionForestLab(view, progress) {
          // Ground and foreground share a world strip; shorter strips travel
          // proportionally less. The exact same camera position is used on arrival.
          for (var _iterator9 = _createForOfIteratorHelperLoose(view.children.concat((_this$forestForegroun = (_this$forestForegroun2 = this.forestForeground.get(view)) == null ? void 0 : _this$forestForegroun2.layer) != null ? _this$forestForegroun : [])), _step9; !(_step9 = _iterator9()).done;) {
            var _this$forestForegroun, _this$forestForegroun2;
            var layer = _step9.value;
            if (!layer.name.startsWith('forest-lab-')) continue;
            var overflow = layer.getComponent(UITransform).width - stageGrid.width;
            layer.setPosition((.5 - progress) * overflow, 0);
            this.updateForestSurface(layer, progress * overflow);
            this.updateForestProps(layer, progress * overflow);
          }
        };
        _proto.liftForestForeground = function liftForestForeground(view, parent) {
          if (!(view != null && view.isValid)) return;
          var mounted = this.forestForeground.get(view);
          if (mounted != null && mounted.viewport.isValid) {
            mounted.viewport.setSiblingIndex(parent.children.length - 1);
            return;
          }
          var layer = view.getChildByName('forest-lab-front');
          if (!layer) return;
          var viewport = this.box('400 森林前景', view.position.x, view.position.y, stageGrid.width, stageGrid.height, undefined, parent);
          viewport.addComponent(Mask).type = Mask.Type.GRAPHICS_RECT;
          layer.setParent(viewport);
          this.forestForeground.set(view, {
            viewport: viewport,
            layer: layer
          });
          view.once(Node.EventType.NODE_DESTROYED, function () {
            if (viewport.isValid) viewport.destroy();
          });
        };
        _proto.updateForestSurface = function updateForestSurface(layer, left) {
          var _this$forestLayout;
          var key = layer.name.slice('forest-lab-'.length);
          var bounds = (_this$forestLayout = this.forestLayout) == null ? void 0 : _this$forestLayout.bounds[key],
            frame = this.textures.get(layer.name);
          if (!bounds || !frame) return;
          var world = bounds[0],
            x = bounds[1],
            top = bounds[2],
            w = bounds[3],
            h = bounds[4];
          if (w < 2 || h < 2) return; // Transparent placeholder layers have props but no surface.
          var first = Math.max(0, Math.floor((left - x) / w)),
            last = Math.ceil((left + stageGrid.width - x) / w);
          for (var _iterator10 = _createForOfIteratorHelperLoose(layer.children.filter(function (n) {
              return n.name.startsWith('地表底图 ');
            })), _step10; !(_step10 = _iterator10()).done;) {
            var _node = _step10.value;
            var _slot = Number(_node.name.slice(5));
            if (_slot < first || _slot > last) {
              _node.removeFromParent();
              _node.destroy();
            }
          }
          for (var slot = first; slot <= last; slot++) {
            if (layer.getChildByName('地表底图 ' + slot)) continue;
            var node = this.paintFrame('地表底图 ' + slot, frame, x + slot * w + w / 2 - world / 2, (stageGrid.height - h) / 2 - top, w, h, layer);
            node.setSiblingIndex(0);
          }
        };
        _proto.updateForestProps = function updateForestProps(layer, left) {
          var _this$forestLayout2,
            _this13 = this;
          var props = (_this$forestLayout2 = this.forestLayout) == null ? void 0 : _this$forestLayout2.layers[layer.name.slice('forest-lab-'.length)];
          if (!(props != null && props.length)) return;
          var active = this.forestPropWindows.get(layer);
          if (!active) {
            active = new Map();
            this.forestPropWindows.set(layer, active);
          }
          var layerWidth = layer.getComponent(UITransform).width;
          props.forEach(function (_ref5, index) {
            var frame = _ref5[0],
              x = _ref5[1],
              y = _ref5[2],
              w = _ref5[3],
              h = _ref5[4],
              flip = _ref5[5];
            var onscreen = x + w / 2 > left && x - w / 2 < left + stageGrid.width;
            var node = active.get(index);
            if (!onscreen) {
              if (node) {
                node.removeFromParent();
                node.destroy();
                active["delete"](index);
                _this13.forestNodeStats.recycled++;
              }
              return;
            }
            if (node || !_this13.forestPropFrames[frame]) return;
            _this13.forestNodeStats.created++;
            _this13.forestNodeStats.peak = Math.max(_this13.forestNodeStats.peak, active.size + 1);
            var prop = _this13.paintFrame('场景切图', _this13.forestPropFrames[frame], x - layerWidth / 2, stageGrid.height / 2 - y + h / 2, w, h, layer);
            if (flip) prop.setScale(-1, 1, 1);
            _this13.applyForestDepth(prop, layer.name, frame);
            var nextSibling = prop.getSiblingIndex();
            for (var _iterator11 = _createForOfIteratorHelperLoose(active), _step11; !(_step11 = _iterator11()).done;) {
              var _step11$value = _step11.value,
                key = _step11$value[0],
                other = _step11$value[1];
              if (key > index) nextSibling = Math.min(nextSibling, other.getSiblingIndex());
            }
            prop.setSiblingIndex(nextSibling);
            active.set(index, prop);
          });
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
          var source = this.textures.get(name);
          var node = source ? this.paintFrame(name, source, x, y, w / scale, h / scale, parent) : undefined;
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
        _proto.newPageMotion = function newPageMotion() {
          var motion = new BattleMotion();
          this.pageMotions.add(motion);
          return motion;
        };
        _proto.cancelPageMotions = function cancelPageMotions() {
          this.pageMotions.forEach(function (motion) {
            return motion.cancel();
          });
          this.pageMotions.clear();
        };
        _proto.onDestroy = function onDestroy() {
          var _this$downloads, _this$buffView, _this$motion, _this$stageTravel;
          (_this$downloads = this.downloads) == null || _this$downloads.dispose();
          (_this$buffView = this.buffView) == null || _this$buffView.dispose();
          this.closeSaveGate();
          if (typeof window !== 'undefined') window.removeEventListener('pagehide', this.closeSaveGate);
          this.stopStage4A('destroy');
          (_this$motion = this.motion) == null || _this$motion.cancel();
          this.cancelPageMotions();
          (_this$stageTravel = this.stageTravel) == null || _this$stageTravel.dispose();
        };
        _proto.applyForestDepth = function applyForestDepth(node, layer, frameIndex) {
          if (!this.forestEffect) return;
          var depth = layer.endsWith('-far') ? 0 : layer.endsWith('-mist') ? 1 : layer.endsWith('-middle') ? 2 : -1;
          if (depth < 0) return;
          var material = new Material();
          material.initialize({
            effectAsset: this.forestEffect,
            defines: {
              USE_TEXTURE: true
            }
          });
          var _this$forestLayout$fr = this.forestLayout.frames[frameIndex],
            x = _this$forestLayout$fr[0],
            y = _this$forestLayout$fr[1],
            w = _this$forestLayout$fr[2],
            h = _this$forestLayout$fr[3],
            texture = this.textures.get('forest-props').texture;
          material.setProperty('bounds', new Vec4((x + .5) / texture.width, (y + .5) / texture.height, (x + w - .5) / texture.width, (y + h - .5) / texture.height));
          material.setProperty('fog', _construct(Vec4, [[.18, .44, .43, .78], [.086, .36, .318, .49], [.094, .349, .294, .10]][depth]));
          material.setProperty('depth', new Vec4([.25, .57, .92][depth], [.48, .72, .96][depth], .7 / texture.width, .7 / texture.height));
          node.getComponent(Sprite).customMaterial = material;
          node.once(Node.EventType.NODE_DESTROYED, function () {
            return material.destroy();
          });
        };
        _proto.reset = function reset(background) {
          var _this$buffView2, _this$stageTravel2, _this$boardFx, _this$ui, _this$ui2;
          if (background === void 0) {
            background = 'travel-forest-plains';
          }
          if (background === 'travel-forest-plains' && !this.textures.has(background)) background = 'stage-forest-0';
          (_this$buffView2 = this.buffView) == null || _this$buffView2.dispose();
          this.buffView = undefined;
          this.stopStage4A('reset');
          this.cancelPageMotions();
          (_this$stageTravel2 = this.stageTravel) == null || _this$stageTravel2.dispose();
          this.stageTravel = undefined;
          this.clearIdleHint();
          (_this$boardFx = this.boardFx) == null || _this$boardFx.dispose();
          this.boardFx = undefined;
          this.trialFxViewport = undefined;
          (_this$ui = this.ui) == null || _this$ui.removeFromParent();
          (_this$ui2 = this.ui) == null || _this$ui2.destroy();
          var topOffset = (view.getVisibleSize().height - 854) / 2;
          this.ui = this.box('Game', 0, topOffset, 480, 854, '#26352e', this.node);
          this.box('Interaction panel', 0, -141, 470, 559, '#314339');
          this.stageBackdrop(background);
        };
        _proto.button = function button(text, y, action, x, w, selected) {
          var _this14 = this;
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
            _this14.audio.play('click');
            action();
          });
          return button;
        };
        _proto.trialButton = function trialButton(text, y, action, x, w, icon, muted) {
          if (x === void 0) {
            x = 0;
          }
          if (w === void 0) {
            w = 310;
          }
          var button = this.button(text, y, action, x, w);
          var label = button.getChildByName(text).getComponent(Label);
          if (icon) this.art(icon, -w / 2 + 26, 1, 20, 20, button);
          return {
            button: button,
            label: label
          };
        };
        _proto.save = function save() {
          var _this$saveGate2;
          if (!this.taught || this.trial || this.stage4AStockUncertain) return;
          var party = this.party,
            reported = this.reported,
            location = this.location,
            gold = this.gold,
            exp = this.exp,
            dp = this.dp,
            hp = this.hp,
            potion = this.potion,
            inventory = this.inventory;
          return (_this$saveGate2 = this.saveGate) == null ? void 0 : _this$saveGate2.write(JSON.stringify({
            party: party,
            reported: reported,
            location: location,
            gold: gold,
            exp: exp,
            dp: dp,
            hp: hp,
            potion: potion,
            inventory: inventory,
            town: this.town,
            cleared: Array.from(this.cleared),
            hunt: this.hunt,
            quests: this.journal.entries,
            villageGuidePending: this.villageGuidePending
          }));
        };
        _proto.resume = function resume(player) {
          try {
            var _this$saveGate3, _state$hunt, _state$hunt2, _state$hunt3;
            var state = player != null ? player : JSON.parse(((_this$saveGate3 = this.saveGate) == null ? void 0 : _this$saveGate3.read()) || 'null');
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
            this.town = restoreTown(state.town, true);
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
            this.restoreJournal(state.quests);
            this.taught = true;
            return true;
          } catch (_unused) {
            return false;
          }
        };
        _proto.recoveryOptIn = function recoveryOptIn() {
          return typeof location !== 'undefined' && new URLSearchParams(location.search).has('m5-stage4a');
        };
        _proto.continueSavedGame = function continueSavedGame() {
          var _this$saveGate4,
            _this15 = this,
            _state$mineRecovery$p,
            _state$mineRecovery$p2;
          var raw = (_this$saveGate4 = this.saveGate) == null ? void 0 : _this$saveGate4.readRecovery();
          if (raw && this.deferContent(function () {
            return _this15.continueSavedGame();
          }, 'all')) return;
          if (!raw) {
            if (this.resume()) {
              if (this.town.blessingInDungeon) {
                var next = exitBlessing(this.town, this.hp, this.baseMaxHP, false);
                this.town = next.town;
                this.hp = next.hp;
                this.save();
              }
              this.map();
            }
            return;
          }
          var state = readMineRecovery(raw);
          if (!state || !this.resume(state.player)) return;
          if (state.run.closed) {
            if (state.mineRecovery.source === 'formal') this.showFormalMineSettlement(raw, state);else this.showRecoveryClosed();
            return;
          }
          this.phase = 'mine';
          this.types = this.formalTypes();
          var board = (_state$mineRecovery$p = (_state$mineRecovery$p2 = state.mineRecovery.potion) == null ? void 0 : _state$mineRecovery$p2.board) != null ? _state$mineRecovery$p : state.run.board;
          if (board.tiles.some(function (tile) {
            return !_this15.types.includes(tile.emblem);
          }) || !legalMove(board.tiles.map(function (t) {
            return t.emblem;
          })) || state.player.hp !== this.hp || state.player.dp !== this.dp) {
            this.page('恢复已阻断', '存档的队伍或棋盘未通过校验。请重新加载后核对。');
            return;
          }
          var director = DungeonDirector.restore(state.run.route.map(function (entry) {
            return entry.room;
          }), state.run.cursor);
          this.mineRecovery = {
            raw: raw,
            state: state
          };
          this.projectMineRecovery(director, state);
        };
        _proto.projectMineRecovery = function projectMineRecovery(director, state) {
          var _state$mineRecovery$p3, _state$mineRecovery$p4;
          this.dungeon = director;
          this.hp = state.player.hp;
          this.dp = state.player.dp;
          this.location = state.player.location;
          var board = (_state$mineRecovery$p3 = (_state$mineRecovery$p4 = state.mineRecovery.potion) == null ? void 0 : _state$mineRecovery$p4.board) != null ? _state$mineRecovery$p3 : state.run.board;
          var pending = state.run.pending;
          this.adventure = {
            id: 'mine',
            coins: pending.coins,
            loot: _extends({}, pending.loot),
            xp: pending.xp,
            ordinaryWins: pending.ordinaryWins,
            buffs: {}
          };
          this.carriedBoard = {
            director: director,
            types: this.types.join(','),
            board: board.tiles.map(function (tile) {
              return tile.emblem;
            }),
            charged: board.tiles.flatMap(function (tile, i) {
              return tile.tier ? [[i, tile.tier]] : [];
            }),
            ids: board.tiles.map(function (tile) {
              return tile.id;
            })
          };
          this.showRoom();
        };
        _proto.commitMineRest = function commitMineRest(director, room, choice) {
          var live = this.mineRecovery;
          if (!live || this.dungeon !== director || director.room !== room || director.depth !== live.state.run.cursor || room.kind !== 'rest') return;
          var run = live.state.run,
            roomId = run.route[run.cursor].id;
          var plan = planMineRest(live.state, {
            runId: run.runId,
            roomId: roomId,
            generation: run.generation,
            operationId: 'rest:' + roomId,
            choice: choice
          }, {
            hp: this.maxHP,
            dp: this.maxDP
          });
          if (plan.status !== 'changed') return;
          if (!this.persistMineRecovery(live, plan.save)) return;
          // Projection only. Storage already contains both updated meters and the next position.
          this.hp = plan.save.player.hp;
          this.dp = plan.save.player.dp;
          if (!director.advance(room) || director.depth !== plan.save.run.cursor) {
            this.showRecoveryStop('休息已保存，房间显示需重新加载。');
            return;
          }
          try {
            this.showRoom();
          } catch (_unused2) {
            this.showRecoveryStop('休息已保存，场景需重新加载。');
          }
        };
        _proto.persistMineRecovery = function persistMineRecovery(live, next, retry) {
          var _this$saveGate5,
            _this16 = this;
          if (this.mineRecovery !== live) return false;
          var raw = JSON.stringify(next);
          var result = (_this$saveGate5 = this.saveGate) == null ? void 0 : _this$saveGate5.writeRecovery(raw, live.raw);
          if (result !== 'committed' && result !== 'reconciled') {
            if (result === 'write-failed') {
              this.popup('保存失败，未执行操作。', 0, 105);
              if (retry) {
                var button = this.button('重试保存', -325, function () {
                  if (_this16.mineRecovery !== live) return;
                  button.destroy();
                  retry();
                });
              }
            } else this.showRecoveryStop('存档未能确认，请重新加载。');
            return false;
          }
          this.mineRecovery = {
            raw: raw,
            state: next
          };
          return true;
        };
        _proto.showRecoveryStop = function showRecoveryStop(message) {
          var _this$motion2;
          (_this$motion2 = this.motion) == null || _this$motion2.cancel();
          this.page('探索恢复已停止', message);
          this.button('重新加载', 20, function () {
            return location.reload();
          });
        };
        _proto.stopLegacyMineBoard = function stopLegacyMineBoard(reason) {
          var _this17 = this;
          var live = this.mineRecovery;
          if (!live || live.state.mineRecovery.source !== 'formal') return;
          this.automatic = false;
          this.autoRequest++;
          this.motion.cancel();
          var detail = reason === 'no-legal-move' ? '没有合法换位' : '仍有待结算连锁，已到旧战斗处理边界';
          this.page('棋盘结算已中断', detail + '。可恢复最近保存的同一房间。');
          var root = this.ui;
          this.button('恢复房间检查点', 20, function () {
            var _this17$saveGate;
            if (_this17.ui !== root || _this17.mineRecovery !== live) return;
            if (((_this17$saveGate = _this17.saveGate) == null ? void 0 : _this17$saveGate.readRecovery()) !== live.raw) {
              _this17.showRecoveryStop('检查点已变更，请重新加载。');
              return;
            }
            _this17.continueSavedGame();
          });
        };
        _proto.closeMineRecovery = function closeMineRecovery(outcome) {
          var _this18 = this;
          var live = this.mineRecovery;
          if (!live || live.state.run.closed) return;
          if (live.state.mineRecovery.source === 'formal') {
            var interrupted = outcome === 'retreat' && this.ui === this.battleRoot && this.battlePhase !== 'input';
            var hp = interrupted ? live.state.player.hp : this.hp;
            var dp = interrupted ? live.state.player.dp : this.dp;
            var next = planMineFormalClose(live.state, outcome, {
              hp: outcome === 'fail' ? this.maxHP : Math.min(this.maxHP, Math.max(1, hp)),
              dp: outcome === 'fail' ? this.maxDP : dp
            });
            if (!next) return;
            var commit = function commit() {
              if (!_this18.persistMineRecovery(live, next, commit)) return;
              try {
                if (!_this18.resume(next.player)) throw Error('player projection mismatch');
                _this18.showFormalMineSettlement(_this18.mineRecovery.raw, next);
              } catch (_unused3) {
                _this18.showRecoveryStop('结算已保存，场景需重新加载。');
              }
            };
            commit();
            return;
          }
          var run = live.state.run,
            roomId = run.route[run.cursor].id;
          var plan = planMineTestClose(live.state, {
            runId: run.runId,
            roomId: roomId,
            generation: run.generation,
            operationId: 'close:' + roomId,
            outcome: outcome
          });
          if (plan.status === 'changed' && this.persistMineRecovery(live, plan.save)) this.showRecoveryClosed();
        };
        _proto.showFormalMineSettlement = function showFormalMineSettlement(raw, state) {
          var _this$motion3,
            _this19 = this;
          (_this$motion3 = this.motion) == null || _this$motion3.cancel();
          this.automatic = false;
          this.dungeon = undefined;
          this.adventure = undefined;
          this.carriedBoard = undefined;
          this.mineRecovery = undefined;
          var outcome = state.run.closed;
          var reward = state.mineRecovery.settlement.preview;
          this.page(outcome === 'complete' ? '地牢通关' : outcome === 'fail' ? '探索失败' : '撤离结算', '本次带回：金币 ×' + reward.gold + ' · 经验 ×' + reward.xp, outcome === 'fail' ? 'village-tavern-stage' : 'stage-mine-0');
          this.button(outcome === 'fail' ? '起身，回到酒馆' : '返回章节地图', 28, function () {
            var _this19$saveGate;
            var result = (_this19$saveGate = _this19.saveGate) == null ? void 0 : _this19$saveGate.releaseRecovery(JSON.stringify(state.player), raw);
            if (result === 'committed' || result === 'reconciled') {
              if (outcome === 'fail') _this19.tavern(true);else _this19.map();
            } else if (result === 'write-failed') _this19.popup('保存失败，请重试。', 0, 105);else _this19.showRecoveryStop('存档未能确认，请重新加载。');
          });
        };
        _proto.minePermit = function minePermit(director, room) {
          var live = this.mineRecovery;
          if (!live || live.state.mineRecovery.source !== 'formal' || this.dungeon !== director || director.room !== room || director.depth !== live.state.run.cursor || live.state.run.closed) return;
          var run = live.state.run;
          return {
            live: live,
            permit: {
              runId: run.runId,
              roomId: run.route[run.cursor].id,
              generation: run.generation
            }
          };
        };
        _proto.stableMineBoard = function stableMineBoard() {
          var _this20 = this;
          if (this.tiles.length !== 56 || matches(this.board).length || !this.legalMove()) return;
          var tiles = this.tiles.map(function (node, index) {
            var id = _this20.restoredTileIds.get(node);
            var tier = _this20.chargedTiles.get(node);
            return _extends({
              id: id,
              emblem: _this20.board[index]
            }, tier ? {
              tier: tier
            } : {});
          });
          if (tiles.some(function (tile) {
            return !tile.id;
          }) || new Set(tiles.map(function (tile) {
            return tile.id;
          })).size !== 56) return;
          return {
            gravity: 'mine/v1',
            tiles: tiles.map(function (tile) {
              return _extends({}, tile, {
                id: tile.id
              });
            })
          };
        };
        _proto.commitLegacyMineVictory = function commitLegacyMineVictory(director, room) {
          var _room$rescueCells;
          var current = this.minePermit(director, room);
          if (!current) return;
          var board = this.stableMineBoard();
          if (!board || room.kind !== 'battle' || !(this.enemies.every(function (hp) {
            return hp <= 0;
          }) || (_room$rescueCells = room.rescueCells) != null && _room$rescueCells.length && !this.rescueCells.size)) {
            this.showRecoveryStop('旧战斗终局或稳定棋盘未通过校验。');
            return;
          }
          var next = planMineLegacyVictory(current.live.state, current.permit, board, this.hp, this.dp);
          if (!next) {
            this.showRecoveryStop('旧战斗终局回执未通过校验。');
            return;
          }
          var _final = room.type === 'boss' ? planMineFormalClose(next, 'complete', {
            hp: this.hp,
            dp: this.dp
          }) : next;
          if (!_final) {
            this.showRecoveryStop('通关结算未通过校验。');
            return;
          }
          this.commitMineRoom(current.live, _final, director, room);
        };
        _proto.commitMineRoom = function commitMineRoom(live, next, director, room, coinsAt) {
          var _this21 = this;
          if (this.dungeon !== director || director.room !== room || director.depth !== live.state.run.cursor) return;
          if (!this.persistMineRecovery(live, next, this.ui === this.battleRoot ? function () {
            return _this21.commitMineRoom(live, next, director, room);
          } : undefined)) return;
          var committed = this.mineRecovery,
            root = this.ui;
          var show = function show() {
            try {
              if (!director.advance(room) || director.depth !== next.run.cursor) throw Error('room projection mismatch');
              if (next.run.closed) {
                if (!_this21.resume(next.player)) throw Error('player projection mismatch');
                _this21.showFormalMineSettlement(_this21.mineRecovery.raw, next);
              } else _this21.projectMineRecovery(director, next);
            } catch (_unused4) {
              _this21.showRecoveryStop('结果已保存，场景需重新加载。');
            }
          };
          if (!coinsAt) {
            show();
            return true;
          }
          var motion = this.newPageMotion();
          void _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
            var amount;
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.prev = 0;
                  amount = next.run.pending.coins - live.state.run.pending.coins;
                  _context6.next = 4;
                  return _this21.animateCoins(motion, amount, _this21.coinText, coinsAt, stageGrid.groundY);
                case 4:
                  if (_this21.ui === root && _this21.mineRecovery === committed && !motion.cancelled) show();
                  _context6.next = 10;
                  break;
                case 7:
                  _context6.prev = 7;
                  _context6.t0 = _context6["catch"](0);
                  if (_this21.ui === root && _this21.mineRecovery === committed) _this21.showRecoveryStop('宝箱已保存，场景需重新加载。');
                case 10:
                case "end":
                  return _context6.stop();
              }
            }, _callee6, null, [[0, 7]]);
          }))();
          return true;
        };
        _proto.showRecoveryClosed = function showRecoveryClosed() {
          var _this$motion4;
          (_this$motion4 = this.motion) == null || _this$motion4.cancel();
          this.dungeon = undefined;
          this.adventure = undefined;
          this.carriedBoard = undefined;
          this.mineRecovery = undefined;
          this.page('验证探索已关闭', '已记录关闭回执。测试收益不会发给角色。');
        };
        _proto.menu = function menu() {
          var _this22 = this,
            _this$saveGate6,
            _this$saveGate7,
            _this$saveGate8;
          this.reset();
          this.button('冒险手册', -213, function () {
            return _this22.showRules(0, function () {
              return _this22.menu();
            });
          }, 0, 360);
          this.box('Title frame', 0, 65, 420, 135, '#23372f');
          this.box('Title rule', 0, 29, 164, 2, '#cfac6e');
          var title = this.label('四纹章地牢', 0, 82, 420, 42);
          title.isBold = false;
          this.label('版本 ' + this.releaseVersion, 0, -380, 440, 14);
          this.label('结界逆转，队伍在苔石森林失散。', 0, -11, 440, 19);
          this.art('hero-s', 0, 263, 104, 104);
          var persistedRecovery = (_this$saveGate6 = this.saveGate) == null ? void 0 : _this$saveGate6.readRecovery();
          if (persistedRecovery || (_this$saveGate7 = this.saveGate) != null && _this$saveGate7.read()) this.button('继续冒险', -144, function () {
            return _this22.continueSavedGame();
          });
          if (!((_this$saveGate8 = this.saveGate) != null && _this$saveGate8.writable)) this.label('存档只读 · 本次进度不会写入', 0, -264, 420, 15);
          if (persistedRecovery) return;
          this.trialButton('测试关卡', -302, function () {
            return _this22.testLevelMenu();
          });
          this.button('在林中醒来', -80, function () {
            _this22.taught = false;
            _this22.reported = false;
            _this22.villageGuidePending = false;
            _this22.town = newTownProgress();
            _this22.cleared.clear();
            _this22.journal = new QuestJournal();
            _this22.hunt = undefined;
            _this22.adventure = undefined;
            _this22.inventory = new Inventory();
            _this22.party = ['s'];
            _this22.types = ['s', 'stone', 'fist', 'cry'];
            _this22.location = 0;
            _this22.gold = 20;
            _this22.exp = 0;
            _this22.dp = 0;
            _this22.phase = 'wolves';
            _this22.firstSwap = true;
            _this22.hp = 45;
            _this22.potion = 1;
            _this22.enemies = [72, 72];
            _this22.startTutorial();
          });
        };
        _proto.beginBattle = function beginBattle(reveal) {
          var _this$arrivedEncounte,
            _this$arrivedEncounte2,
            _this$dungeon2,
            _this$motion5,
            _this$carriedBoard,
            _this$carriedBoard2,
            _this$dungeon3,
            _this$mineRecovery,
            _checkpoint$marks,
            _activeRoom$rescueCel,
            _this$dungeon4,
            _carried$board$slice,
            _carried,
            _this$trial4,
            _this$trial5,
            _this23 = this,
            _this$trial6,
            _this$trial7,
            _this$trial8,
            _this$trial9,
            _this$ui$getChildByNa,
            _this$dungeon5,
            _this$trial11,
            _carried4,
            _carried5;
          var alreadyArrived = ((_this$arrivedEncounte = this.arrivedEncounter) == null ? void 0 : _this$arrivedEncounte.director) === this.dungeon && ((_this$arrivedEncounte2 = this.arrivedEncounter) == null ? void 0 : _this$arrivedEncounte2.room) === ((_this$dungeon2 = this.dungeon) == null ? void 0 : _this$dungeon2.room);
          this.arrivedEncounter = undefined;
          this.audio.prepareBoard();
          this.stopStage4A('new battle');
          (_this$motion5 = this.motion) == null || _this$motion5.cancel();
          this.motion = new BattleMotion();
          this.lastFallen = undefined;
          this.enemyMax = [].concat(this.enemies);
          var carried = ((_this$carriedBoard = this.carriedBoard) == null ? void 0 : _this$carriedBoard.director) === this.dungeon && ((_this$carriedBoard2 = this.carriedBoard) == null ? void 0 : _this$carriedBoard2.types) === this.types.join(',') ? this.carriedBoard : undefined;
          var activeRoom = (_this$dungeon3 = this.dungeon) == null ? void 0 : _this$dungeon3.room;
          var checkpoint = (_this$mineRecovery = this.mineRecovery) == null ? void 0 : _this$mineRecovery.state.mineRecovery.potion;
          this.rescueCells = new Set((_checkpoint$marks = checkpoint == null ? void 0 : checkpoint.marks) != null ? _checkpoint$marks : (activeRoom == null ? void 0 : activeRoom.kind) === 'battle' ? (_activeRoom$rescueCel = activeRoom.rescueCells) != null ? _activeRoom$rescueCel : [] : []);
          if (checkpoint) this.enemies = [].concat(checkpoint.enemies);
          if (this.phase === 'mine' && !this.trial && ((_this$dungeon4 = this.dungeon) == null ? void 0 : _this$dungeon4.depth) === 0 && this.recoveryOptIn()) {
            var seed = this.stage4ASeed();
            this.board = newBoard(this.types, function () {
              return (seed = Math.imul(seed, 1664525) + 1013904223 >>> 0) / Math.pow(2, 32);
            });
          } else this.board = (_carried$board$slice = (_carried = carried) == null ? void 0 : _carried.board.slice()) != null ? _carried$board$slice : this.phase === 'wolves' && this.firstSwap ? opening(this.types) : newBoard(this.types, (_this$trial4 = this.trial) == null ? void 0 : _this$trial4.random);
          this.rescuedMiners = 0;
          this.deliveryEvents = [];
          this.terrain = new Map(((_this$trial5 = this.trial) == null ? void 0 : _this$trial5.id) === 'terrain' ? testTerrainCells : []);
          this.testObjective = undefined;
          var challenge = challengeCatalog.find(function (entry) {
            var _this23$trial;
            return entry.id === ((_this23$trial = _this23.trial) == null ? void 0 : _this23$trial.id);
          });
          this.challenge = challenge ? new TestBoardChallenge(challenge.id) : undefined;
          this.rocks = new Map();
          this.holes = new Set(((_this$trial6 = this.trial) == null ? void 0 : _this$trial6.id) === 'fracture' ? fractureHoles : ((_this$trial7 = this.trial) == null ? void 0 : _this$trial7.id) === 'pillar' ? pillarCells : []);
          this.jelly = new Set(((_this$trial8 = this.trial) == null ? void 0 : _this$trial8.id) === 'jelly' ? jellyStarts : []);
          this.portalTransits = 0;
          this.mechanismAudit = [];
          if (((_this$trial9 = this.trial) == null ? void 0 : _this$trial9.id) === 'rocks') {
            var _carried$charged$map, _carried2;
            var placed = placeRocks(new Set((_carried$charged$map = (_carried2 = carried) == null ? void 0 : _carried2.charged.map(function (_ref7) {
              var index = _ref7[0];
              return index;
            })) != null ? _carried$charged$map : []));
            if (!placed) {
              this.page('岩块布置暂停', '普通格不足，保留强化，不覆盖现有棋子。');
              this.button('返回测试关卡', -160, function () {
                return _this23.leaveMineTrial();
              });
              return;
            }
            this.rocks = placed;
            placed.forEach(function (_, index) {
              return _this23.board[index] = rockCell;
            });
          }
          this.holes.forEach(function (index) {
            return _this23.board[index] = holeCell;
          });
          if ((this.blockedBoardCells.size || this.challenge) && (!this.legalMove() || this.challengeMatches(this.board).length)) {
            var order = this.recoverTestBoard();
            if (!order) {
              this.page('棋盘布置暂停', '没有保留身份的合法候选，请返回测试目录。');
              this.button('返回测试关卡', -160, function () {
                return _this23.leaveMineTrial();
              });
              return;
            }
            this.board = order.map(function (i) {
              return _this23.board[i];
            });
            if (carried) {
              var previous = carried,
                tiers = new Map(previous.charged);
              carried = _extends({}, previous, {
                board: order.map(function (i) {
                  return previous.board[i];
                }),
                ids: previous.ids ? order.map(function (i) {
                  return previous.ids[i];
                }) : undefined,
                charged: order.flatMap(function (from, to) {
                  return tiers.has(from) ? [[to, tiers.get(from)]] : [];
                })
              });
            }
          }
          var deliverySpawns = new Set();
          if ((activeRoom == null ? void 0 : activeRoom.kind) === 'battle' && activeRoom.delivery) {
            var _carried$charged$map2, _carried3, _this$trial10;
            validateDelivery(activeRoom.delivery);
            var starts = deliveryStarts(activeRoom.delivery, new Set((_carried$charged$map2 = (_carried3 = carried) == null ? void 0 : _carried3.charged.map(function (_ref8) {
              var index = _ref8[0];
              return index;
            })) != null ? _carried$charged$map2 : []));
            if (!starts) {
              this.page('营救布置暂停', '普通格不足，保留强化棋子，不替换棋盘。');
              this.button('撤离', -150, function () {
                return _this23.finishAdventure('retreat');
              });
              return;
            }
            var deploy = ((_this$trial10 = this.trial) == null ? void 0 : _this$trial10.id) === 'source' ? carried ? [] : [sourceEntry] : starts;
            for (var _iterator12 = _createForOfIteratorHelperLoose(deploy), _step12; !(_step12 = _iterator12()).done;) {
              var _index = _step12.value;
              this.board[_index] = minerEmblem;
              deliverySpawns.add(_index);
            }
          }
          this.selected = -1;
          this.busy = true;
          this.battlePhase = 'entering';
          this.automatic = false;
          this.turn = 1;
          this.battleLogs = [];
          this.stunned.clear();
          this.oath = checkpoint != null && checkpoint.oath ? structuredClone(checkpoint.oath) : _extends({}, newOathState(), {
            rally: checkpoint != null && checkpoint.rally ? 1.4 : 1
          });
          if (checkpoint) {
            this.turn = checkpoint.round;
            this.stunned = new Set(checkpoint.stunned);
          }
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
          var room = (_this$dungeon5 = this.dungeon) == null ? void 0 : _this$dungeon5.room;
          this.foes = this.resolveBattleFoes(room, this.enemies, this.phase);
          var stageTitle = this.trial ? testMechanism(this.trial.id).title : this.phase === 'wolves' || this.phase === 'lessonBoss' ? '苔石森林 · 序章' : {
            forest: '苔石森林',
            mine: '废弃矿坑',
            swamp: '迷雾沼泽',
            tower: '迷雾高塔'
          }[this.phase];
          this.outline(this.label(stageTitle, 0, stageGrid.titleY, 280, 21));
          this.healthBar = this.makeMeter(-stageGrid.meterX, stageGrid.hpY, 139, '#7ecb82');
          this.guardBar = this.makeMeter(-stageGrid.meterX, stageGrid.secondaryY, 139, '#63b5df');
          this.guardBar.root.active = this.showsGuard;
          this.coinText = this.makeCoinDisplay();
          this.status = this.outline(this.label('', 0, 169, 450, 17));
          this.status.node.active = false;
          this.setBattleStatus(this.trial ? testMechanism(this.trial.id).description : '敌人正在入场');
          this.showParty();
          for (var _iterator13 = _createForOfIteratorHelperLoose(this.heroes.values()), _step13; !(_step13 = _iterator13()).done;) {
            var hero = _step13.value;
            hero.setParent(this.stageContent, true);
          }
          this.enemyMeters = [];
          this.enemyOpportunities = this.foes.map(function (_, i) {
            var _checkpoint$oath$enem, _checkpoint$oath;
            return (_checkpoint$oath$enem = checkpoint == null || (_checkpoint$oath = checkpoint.oath) == null || (_checkpoint$oath = _checkpoint$oath.enemyActions) == null ? void 0 : _checkpoint$oath[i]) != null ? _checkpoint$oath$enem : 0;
          });
          this.enemyActionAudit = [];
          this.enemyNodes = this.enemies.map(function (_, i) {
            var _actorArt$foe$art$hea, _actorArt$foe$art;
            var foe = _this23.foes[i];
            var hasPair = _this23.enemies.length > 1;
            var isBoss = foe.tags.includes('boss');
            var _this23$enemyPlacemen = _this23.enemyPlacement(foe, _this23.enemies.length, i),
              x = _this23$enemyPlacemen.x,
              ground = _this23$enemyPlacemen.ground,
              size = _this23$enemyPlacemen.size,
              y = _this23$enemyPlacemen.y;
            var n = _this23.box('Enemy ' + i, x, y, size, size, undefined, _this23.stageContent);
            _this23.groundShadow(n, ground - n.position.y, foe.art, size);
            var portrait = _this23.art(foe.art, 0, 0, size, size, n);
            _this23.faceStage(portrait, 'right');
            if (!portrait) _this23.label(foe.name, 0, 0, size, 16, n);
            if (foe.art === 'ghost' && portrait) {
              var _this23$actorMaterial;
              var sprite = portrait.getComponent(Sprite);
              if (sprite) (_this23$actorMaterial = _this23.actorMaterial(sprite)) == null || _this23$actorMaterial.setProperty('state', new Vec4(0, 1, 1, .85));
            }
            var meterY = Math.min(stageGrid.centerY + stageGrid.height / 2 - 76, n.position.y + size * (.5 - ((_actorArt$foe$art$hea = (_actorArt$foe$art = actorArt[foe.art]) == null ? void 0 : _actorArt$foe$art.headY) != null ? _actorArt$foe$art$hea : .1)) + 12);
            var stats = _this23.box('敌方状态 ' + i, x, meterY, 84, 48);
            var meter = _this23.makeMeter(0, 0, hasPair ? 85 : 128, '#c34e61', stats);
            _this23.enemyMeters.push(_extends({}, meter, {
              root: stats
            }));
            _this23.outline(_this23.label(foe.name, 0, 23, hasPair ? 85 : 128, 14, stats));
            return n;
          });
          this.liftForestForeground(this.stageContent.getChildByName(background), this.stageContent);
          this.box('棋盘外框', 0, -111.5, 435, 498, '#15221e');
          this.cells = this.board.map(function (_, i) {
            var _this23$trial2;
            var node = _this23.box('Cell ' + i, (i % 7 - 3) * 61, 102 - Math.floor(i / 7) * 61, 55, 55, (i + Math.floor(i / 7)) % 2 ? '#3b5046' : '#34463e');
            if (_this23.holes.has(i) && ((_this23$trial2 = _this23.trial) == null ? void 0 : _this23$trial2.id) !== 'pillar') node.active = false;
            _this23.bindTileInput(node, function () {
              return i;
            });
            return node;
          });
          var tileClip = this.box('棋盘棋子裁剪', 0, -111.5, 428, 495);
          tileClip.addComponent(Mask).type = Mask.Type.GRAPHICS_RECT;
          this.tileLayer = this.box('棋子层', 0, 111.5, 428, 483, undefined, tileClip);
          if (((_this$trial11 = this.trial) == null ? void 0 : _this$trial11.id) === 'terrain') {
            for (var _iterator14 = _createForOfIteratorHelperLoose(this.terrain.keys()), _step14; !(_step14 = _iterator14()).done;) {
              var _index2 = _step14.value;
              this.drawTerrainCell(_index2);
            }
          }
          this.drawMechanismMarkers();
          if (this.trial && this.trial.id !== 'rail') {
            this.testObjective = this.outline(this.label('', 0, 141, 420, 14));
            this.testObjective.node.name = '机制目标';
            this.refreshTestObjective();
          }
          if (this.usesRailGravity) this.drawTrialBoard();
          this.drawBoardEffects();
          this.lock = this.box('棋盘锁定', 0, -111.5, 428, 495, '#19172963');
          this.lockText = this.outline(this.label('敌人入场', 0, -209, 300, 17, this.lock));
          this.buildTiles();
          (_carried4 = carried) == null || _carried4.charged.forEach(function (_ref9) {
            var index = _ref9[0],
              tier = _ref9[1];
            if (!deliverySpawns.has(index)) _this23.markCharged(index, tier);
          });
          (_carried5 = carried) == null || (_carried5 = _carried5.ids) == null || _carried5.forEach(function (id, index) {
            if (!deliverySpawns.has(index) && playableCell(_this23.board[index])) _this23.restoredTileIds.set(_this23.tiles[index], id);
          });
          if (this.challenge) {
            var _carried$charged$map3, _carried6;
            var protectedCells = new Set((_carried$charged$map3 = (_carried6 = carried) == null ? void 0 : _carried6.charged.map(function (_ref10) {
              var index = _ref10[0];
              return index;
            })) != null ? _carried$charged$map3 : []);
            for (var _iterator15 = _createForOfIteratorHelperLoose(challengePowers(this.challenge.id, this.board, protectedCells)), _step15; !(_step15 = _iterator15()).done;) {
              var _step15$value = _step15.value,
                _index3 = _step15$value.index,
                power = _step15$value.power;
              this.challenge.powers.set(this.restoredTileIds.get(this.tiles[_index3]), power);
            }
            this.drawChallengePowers();
            this.refreshTestObjective();
          }
          for (var _iterator16 = _createForOfIteratorHelperLoose(this.rescueCells), _step16; !(_step16 = _iterator16()).done;) {
            var _index5 = _step16.value;
            var _point = this.cells[_index5].position;
            var marker = this.outline(this.label('净', _point.x + 18, _point.y + 18, 20, 15));
            marker.node.name = '营救标记 ' + _index5;
          }
          if ((activeRoom == null ? void 0 : activeRoom.kind) === 'battle' && activeRoom.delivery) {
            for (var _iterator17 = _createForOfIteratorHelperLoose(activeRoom.delivery.exits), _step17; !(_step17 = _iterator17()).done;) {
              var _this$trial12, _this$trial13;
              var _index4 = _step17.value;
              var point = this.cells[_index4].position;
              var vertical = ((_this$trial12 = this.trial) == null ? void 0 : _this$trial12.id) === 'delivery' || ((_this$trial13 = this.trial) == null ? void 0 : _this$trial13.id) === 'source',
                _x5 = vertical ? point.x : _index4 % 7 === 0 ? -218 : 218,
                y = vertical ? point.y - 19 : point.y;
              var gate = this.box('矿工出口 ' + _index4, _x5, y, vertical ? 32 : 25, vertical ? 18 : 39, undefined);
              if (vertical) {
                var arch = gate.addComponent(Graphics);
                arch.fillColor = Color.fromHEX(new Color(), '#28222f');
                arch.roundRect(-16, -8, 32, 17, 7);
                arch.fill();
                this.outline(this.label('出口', 0, 0, 30, 10, gate));
                continue;
              }
              var cave = gate.addComponent(Graphics);
              cave.fillColor = Color.fromHEX(new Color(), '#74615b');
              cave.roundRect(-13, -20, 26, 39, 11);
              cave.fill();
              cave.fillColor = Color.fromHEX(new Color(), '#211b29');
              cave.roundRect(-8, -20, 16, 31, 8);
              cave.fill();
              this.outline(this.label('出口', _x5, point.y - 25, 32, 10));
            }
          }
          this.setupStage4A();
          this.battleTool('药水', 0, function () {
            if (_this23.stage4A) {
              _this23.useStage4APotion();
              return;
            }
            _this23.usePotion();
          });
          this.battleTool('自动战斗', 1, function () {
            if (_this23.battleModal || _this23.guideMode || _this23.battlePhase === 'entering') return;
            _this23.selected = -1;
            _this23.automatic = !_this23.automatic;
            _this23.drawBoard();
            _this23.autoStep();
          });
          this.battleTool('战斗记录', 2, function () {
            return _this23.openBattleModal('log');
          });
          this.battleTool('撤离', 3, function () {
            return _this23.openBattleModal('retreat');
          });
          this.drawBoard();
          void this.enterBattle(this.motion, reveal, alreadyArrived);
        };
        _proto.battleTool = function battleTool(name, index, action) {
          var _this24 = this;
          var activate = function activate() {
            if (!_this24.battleModal) action();
          };
          var x = battleToolbar.x + index * battleToolbar.gap;
          this.trialButton(name, battleToolbar.y, activate, x, battleToolbar.width);
        };
        _proto.drawTrialBoard = function drawTrialBoard() {
          var rail = this.box('矿车轨道', 0, 0, 428, 475);
          for (var _i5 = 0, _arr2 = [6, 7]; _i5 < _arr2.length; _i5++) {
            var row = _arr2[_i5];
            var y = this.cells[row * cols].position.y;
            this.box('轨道底板', 0, y, 421, 55, row === 6 ? '#3b535c' : '#504b62', rail);
          }
          rail.setSiblingIndex(this.tileLayer.parent.getSiblingIndex());
        };
        _proto.drawBoardEffects = function drawBoardEffects() {
          this.trialFxViewport = this.box('棋盘反馈裁剪', 0, -111.5, 428, 495);
          this.trialFxViewport.addComponent(Mask).type = Mask.Type.GRAPHICS_RECT;
          var effects = this.box('棋盘反馈', 0, 111.5, 428, 483, undefined, this.trialFxViewport);
          this.boardFx = new TemplateBoardFx(effects, this.templateFxFrames, this.gameFont);
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
          var _enterBattle = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(motion, reveal, alreadyArrived) {
            var _this$stage4A;
            var homes, arrived;
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  if (alreadyArrived === void 0) {
                    alreadyArrived = false;
                  }
                  homes = this.enemyNodes.map(function (n) {
                    return n.position.clone();
                  });
                  if (!alreadyArrived) this.enemyNodes.forEach(function (n, i) {
                    return n.setPosition(homes[i].x + 205, homes[i].y);
                  });
                  if (!reveal) {
                    _context7.next = 6;
                    break;
                  }
                  _context7.next = 6;
                  return reveal();
                case 6:
                  if (!(motion.cancelled || motion !== this.motion)) {
                    _context7.next = 8;
                    break;
                  }
                  return _context7.abrupt("return");
                case 8:
                  if (!alreadyArrived) {
                    _context7.next = 12;
                    break;
                  }
                  _context7.t0 = [true];
                  _context7.next = 15;
                  break;
                case 12:
                  _context7.next = 14;
                  return Promise.all(this.enemyNodes.map(function (n, i) {
                    return motion.play(tween(n).delay(motion.duration(i * .09)).to(motion.duration(.32), {
                      position: homes[i]
                    }, {
                      easing: 'quadOut'
                    }));
                  }));
                case 14:
                  _context7.t0 = _context7.sent;
                case 15:
                  arrived = _context7.t0;
                  if (!(!arrived.every(Boolean) || motion.cancelled)) {
                    _context7.next = 18;
                    break;
                  }
                  return _context7.abrupt("return");
                case 18:
                  this.audio.play('door');
                  if (!((_this$stage4A = this.stage4A) != null && _this$stage4A.error)) {
                    _context7.next = 22;
                    break;
                  }
                  this.setBattleStatus('验证战斗已阻断 · 可撤离');
                  return _context7.abrupt("return");
                case 22:
                  this.resumeBattleInput('轮到玩家，交换相邻纹章');
                case 23:
                case "end":
                  return _context7.stop();
              }
            }, _callee7, this);
          }));
          function enterBattle(_x6, _x7, _x8) {
            return _enterBattle.apply(this, arguments);
          }
          return enterBattle;
        }();
        _proto.outline = function outline(label) {
          label.enableOutline = true;
          label.outlineColor = Color.fromHEX(new Color(), '#233027');
          label.outlineWidth = 4;
          return label;
        };
        _proto.makeMeter = function makeMeter(x, y, w, color, parent) {
          if (parent === void 0) {
            parent = this.ui;
          }
          var height = 25;
          var node = this.box('计量条', x, y, w, height, undefined, parent);
          var frame = node.addComponent(Graphics);
          frame.fillColor = Color.fromHEX(new Color(), '#573622');
          frame.roundRect(-w / 2, -height / 2, w, height, height / 2);
          frame.fill();
          frame.fillColor = Color.fromHEX(new Color(), '#263029');
          frame.roundRect(-w / 2 + 3, -height / 2 + 3, w - 6, height - 6, (height - 6) / 2);
          frame.fill();
          var clip = this.box('条芯圆角裁剪', 0, 0, w - 6, height - 6, undefined, node);
          var mask = clip.addComponent(Mask);
          mask.type = Mask.Type.GRAPHICS_STENCIL;
          var stencil = clip.getComponent(Graphics);
          stencil.clear();
          stencil.fillColor = Color.WHITE;
          stencil.roundRect(-(w - 6) / 2, -(height - 6) / 2, w - 6, height - 6, (height - 6) / 2);
          stencil.fill();
          var trail = this.box('缓动追赶', 0, 0, w - 6, height - 6, undefined, clip);
          trail.addComponent(Graphics);
          var fill = this.box('填充', 0, 0, w - 6, height - 6, undefined, clip);
          fill.addComponent(Graphics);
          var label = this.outline(this.label('', 0, 0, w - 8, 14, node));
          label.node.getComponent(UITransform).setContentSize((w - 8) * 2, height * 2);
          label.lineHeight = 34;
          label.outlineWidth = 2;
          return {
            width: w - 6,
            root: node,
            fill: fill,
            trail: trail,
            label: label,
            color: Color.fromHEX(new Color(), color)
          };
        };
        _proto.setMeter = function setMeter(meter, value, maximum, text) {
          var ratio = Math.min(1, Math.max(0, value / Math.max(1, maximum)));
          var draw = function draw(node, r, color) {
            if (!node.isValid) return;
            var ink = node.getComponent(Graphics);
            ink.clear();
            var width = meter.width * r;
            if (width <= 0) return;
            ink.fillColor = color;
            ink.rect(-meter.width / 2, -9.5, width, 19);
            ink.fill();
          };
          var previous = meter.ratio;
          if (previous !== ratio) {
            var _meter$animation;
            (_meter$animation = meter.animation) == null || _meter$animation.stop();
            var state = {
              value: previous != null ? previous : ratio
            };
            draw(meter.trail, state.value, new Color(236, 194, 135));
            draw(meter.fill, ratio, meter.color);
            meter.animation = tween(state).delay(previous === undefined ? 0 : .12).to(.48, {
              value: ratio
            }, {
              easing: 'sineOut',
              onUpdate: function onUpdate() {
                draw(meter.trail, state.value, new Color(236, 194, 135));
              }
            }).call(function () {
              return draw(meter.fill, ratio, meter.color);
            }).start();
            meter.ratio = ratio;
            if (previous === undefined) meter.root.once(Node.EventType.NODE_DESTROYED, function () {
              var _meter$animation2;
              return (_meter$animation2 = meter.animation) == null ? void 0 : _meter$animation2.stop();
            });
          }
          meter.label.string = text;
        };
        _proto.updateHUD = function updateHUD() {
          var _this25 = this;
          this.setMeter(this.healthBar, this.hp, this.maxHP, String(Math.max(0, this.hp)));
          if (this.showsGuard) this.setMeter(this.guardBar, this.dp, this.maxDP, String(this.dp));
          this.coinText.string = String(this.walletGold);
          this.enemies.forEach(function (hp, i) {
            return _this25.setMeter(_this25.enemyMeters[i], hp, _this25.enemyMax[i], String(Math.max(0, hp)));
          });
          this.syncBuffViews();
          this.syncBattleTools();
        };
        _proto.syncBuffViews = function syncBuffViews() {
          var _this$buffView3,
            _this26 = this;
          (_this$buffView3 = this.buffView) != null ? _this$buffView3 : this.buffView = new BuffView(function (parent, badge) {
            var node = _this26.box('Buff ' + badge.id, 0, 0, 22, 22, '#25322fea', parent);
            _this26.art(badge.icon, 0, 0, 18, 18, node);
            var label = _this26.outline(_this26.label(badge.count, 6, -5, 24, 11, node));
            label.node.name = '计数';
            label.isBold = true;
            return node;
          }, function (node, text) {
            var _node$getChildByName;
            var label = (_node$getChildByName = node.getChildByName('计数')) == null ? void 0 : _node$getChildByName.getComponent(Label);
            if (label) label.string = text;
          });
          var team = [];
          if (this.oath.rally > 1) team.push({
            id: 'rally',
            icon: 'cry',
            count: Math.round((this.oath.rally - 1) * 100) + '%',
            name: '下一次攻击增益'
          });
          if (this.oath.roundBoost > 1) team.push({
            id: 'round-boost',
            icon: 's',
            count: '1',
            name: '本回合伤害增益'
          });
          if (this.oath.guard) team.push({
            id: 'guard',
            icon: 'd',
            count: '1',
            name: '本回合15%减伤'
          });
          if (this.town.blessing) team.push({
            id: 'altar',
            icon: 'h',
            count: '1',
            name: '祭坛祝福 · HP上限+100'
          });
          for (var _i6 = 0, _Object$entries2 = Object.entries((_this$adventure$buffs = (_this$adventure2 = this.adventure) == null ? void 0 : _this$adventure2.buffs) != null ? _this$adventure$buffs : {}); _i6 < _Object$entries2.length; _i6++) {
            var _this$adventure$buffs, _this$adventure2, _heal$def$mag$id;
            var _Object$entries2$_i = _Object$entries2[_i6],
              id = _Object$entries2$_i[0],
              count = _Object$entries2$_i[1];
            if (count) team.push({
              id: 'run-' + id,
              icon: (_heal$def$mag$id = {
                heal: 'h',
                def: 'd',
                mag: 'm'
              }[id]) != null ? _heal$def$mag$id : 's',
              count: String(count),
              name: id
            });
          }
          this.buffView.sync(this.healthBar.root, team, this.showsGuard ? -58 : -25);
          this.enemyMeters.forEach(function (meter, i) {
            var list = [];
            if (_this26.enemies[i] > 0) {
              var _this26$foes$i;
              var armor = (_this26$foes$i = _this26.foes[i]) == null ? void 0 : _this26$foes$i.armor;
              if (armor) {
                var _armor$physical, _armor$magic;
                list.push({
                  id: 'physical-armor',
                  icon: 'd',
                  count: String(oathArmorLayers(_this26.oath, String(i), (_armor$physical = armor == null ? void 0 : armor.physical) != null ? _armor$physical : 0, false)),
                  name: '物理护甲层数'
                });
                list.push({
                  id: 'magic-armor',
                  icon: 'm',
                  count: String(oathArmorLayers(_this26.oath, String(i), (_armor$magic = armor == null ? void 0 : armor.magic) != null ? _armor$magic : 0, true)),
                  name: '魔法护甲层数'
                });
              }
              if (String(i) in _this26.oath.shred) list.push({
                id: 'shred',
                icon: 's',
                count: String(Math.max(1, _this26.oath.shred[String(i)] - _this26.turn + 1)),
                name: '物理破甲'
              });
              if (_this26.stunned.has(i)) list.push({
                id: 'stun',
                icon: 'fist',
                count: '1',
                name: '眩晕'
              });
              if (_this26.oath.weaken.includes(String(i))) list.push({
                id: 'weaken',
                icon: 'staff',
                count: '1',
                name: '衰弱'
              });
            }
            _this26.buffView.sync(meter.root, list);
          });
        };
        _proto.makeCoinDisplay = function makeCoinDisplay() {
          var display = this.outline(this.label(String(this.walletGold), -176, stageGrid.titleY, 65, 20));
          display.node.name = '金币 ' + display.string;
          display.color = Color.fromHEX(new Color(), '#ffe594');
          var coin = this.box('金币', -220, stageGrid.titleY, 20, 20).addComponent(Graphics);
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
          this.refreshTestObjective();
          this.status.string = "\u7B2C " + this.turn + " \u56DE\u5408 \xB7 " + message;
          this.battleLogs.push(this.status.string);
          if (this.battleLogs.length > 12) this.battleLogs.shift();
        };
        _proto.isTutorialBattle = function isTutorialBattle() {
          return this.phase === 'wolves' || this.phase === 'lessonBoss';
        };
        _proto.usePotion = function usePotion() {
          var _recipient$position$x,
            _recipient$position$y,
            _this$heroes$get$posi,
            _this$heroes$get,
            _this27 = this;
          if (this.busy || this.automatic || this.potion <= 0 || this.guideMode === 'swap' || this.hp >= this.maxHP) return;
          var healed = Math.min(this.maxHP - this.hp, 45);
          if (this.mineRecovery) {
            var _live$state$mineRecov, _live$state$mineRecov2;
            var director = this.dungeon,
              room = director == null ? void 0 : director.room;
            var current = director && room && this.minePermit(director, room),
              board = this.stableMineBoard();
            if (!current || !board || this.battlePhase !== 'input') return;
            var live = current.live,
              permit = current.permit;
            var next = planMinePotion(live.state, {
              roomId: permit.roomId,
              generation: permit.generation,
              operation: ((_live$state$mineRecov = (_live$state$mineRecov2 = live.state.mineRecovery.potion) == null ? void 0 : _live$state$mineRecov2.operation) != null ? _live$state$mineRecov : 0) + 1,
              board: board,
              enemies: [].concat(this.enemies),
              marks: Array.from(this.rescueCells),
              round: this.turn,
              rally: this.oath.rally > 1,
              oath: structuredClone(this.oath),
              stunned: Array.from(this.stunned)
            }, this.hp + healed, this.dp, this.potion);
            if (!next || !this.persistMineRecovery(live, next)) return;
          }
          this.hp += healed;
          this.potion--;
          this.clearGuide();
          this.audio.play('potion');
          this.setBattleStatus("\u836F\u6C34\u6062\u590D " + healed + " HP");
          var recipient = Array.from(this.heroes.values())[0];
          var motion = this.motion,
            restore = this.focusCombat(motion, recipient ? [recipient] : []);
          this.busy = true;
          this.battlePhase = 'resolve';
          this.syncBattleTools();
          void Promise.all([this.combatPopup(motion, '+' + healed + ' HP', (_recipient$position$x = recipient == null ? void 0 : recipient.position.x) != null ? _recipient$position$x : -94, (_recipient$position$y = recipient == null ? void 0 : recipient.position.y) != null ? _recipient$position$y : 286, '#adf4b0', 27), this.supportHalo(motion, (_this$heroes$get$posi = (_this$heroes$get = this.heroes.get('s')) == null ? void 0 : _this$heroes$get.position) != null ? _this$heroes$get$posi : new Vec3(-94, 245, 0), '#87eaa5')])["finally"](function () {
            restore();
            if (!motion.cancelled && _this27.motion === motion) _this27.resumeBattleInput('药水恢复完成');
          });
          this.updateHUD();
        };
        _proto.bindTileInput = function bindTileInput(node, indexOf) {
          var _this28 = this;
          var start;
          node.on(Node.EventType.TOUCH_START, function (event) {
            _this28.clearIdleHint();
            var index = indexOf();
            if (!_this28.canSelect(index)) return;
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
            if (start && _this28.tiles[start.index]) _this28.tiles[start.index].setPosition(_this28.cells[start.index].position);
            if (preview >= 0 && _this28.tiles[preview]) _this28.tiles[preview].setPosition(_this28.cells[preview].position);
            preview = -1;
          };
          var project = function project(event) {
            if (!start || start.id !== event.getID() || !_this28.canSelect(start.index)) return;
            restore();
            var end = event.getUILocation();
            var dx = end.x - start.x,
              dy = end.y - start.y,
              horizontal = Math.abs(dx) > Math.abs(dy);
            var delta = horizontal ? dx : dy;
            if (Math.abs(delta) < 7) return;
            var target = start.index + (horizontal ? Math.sign(delta) : -cols * Math.sign(delta));
            if (!adjacent(start.index, target) || !_this28.cells[target] || !_this28.canSelect(target)) return;
            preview = target;
            var first = _this28.cells[start.index].position;
            var second = _this28.cells[target].position;
            var fraction = Math.min(1, Math.abs(delta) / 61);
            _this28.tiles[start.index].setPosition(Vec3.lerp(new Vec3(), first, second, fraction));
            _this28.tiles[target].setPosition(Vec3.lerp(new Vec3(), second, first, fraction));
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
              if (preview >= 0 && _this28.canSelect(index)) {
                var target = preview;
                preview = -1;
                start = undefined;
                _this28.selected = index;
                void _this28.tap(target, false, true);
                return;
              }
            }
            restore();
            start = undefined;
            if (mayTap && Math.max(Math.abs(end.x - x), Math.abs(end.y - y)) < 7) void _this28.tap(index);
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
          var _this$challenge3;
          return index >= 0 && index < this.board.length && playableCell(this.board[index]) && !((_this$challenge3 = this.challenge) != null && _this$challenge3.locks.has(index)) && !this.busy && !this.automatic && !this.battleModal && this.guideMode !== 'potion' && (!(this.phase === 'wolves' && this.firstSwap) || index === 1 || index === 8);
        };
        _proto.tileIcon = function tileIcon(type, parent) {
          var _this$art;
          if (type === holeCell) {
            parent.active = false;
            return;
          }
          if (type === rockCell) {
            var _this$rocks$get;
            this.drawRock(parent, (_this$rocks$get = this.rocks.get(this.tiles.indexOf(parent))) != null ? _this$rocks$get : 1);
            return;
          }
          if (type === minerEmblem) {
            this.art('npc-villager', 0, -1, 42, 42, parent);
            this.box('矿工安全帽', 0, 15, 24, 8, '#e9bd42', parent);
            var lamp = this.box('矿灯', 0, 16, 7, 7, '#fff2b5', parent);
            return;
          }
          var shadow = (_this$art = this.art(type, 1, -3, 48, 48, parent)) == null ? void 0 : _this$art.getComponent(Sprite);
          if (shadow) {
            var _this$actorMaterial;
            shadow.color = Color.WHITE;
            (_this$actorMaterial = this.actorMaterial(shadow)) == null || _this$actorMaterial.setProperty('state', new Vec4(0, 0, 0, .57));
          }
          this.art(type, 0, 0, 48, 48, parent);
        };
        _proto.tile = function tile(type, index, position) {
          var _this$rocks$get2,
            _this29 = this;
          if (position === void 0) {
            position = this.cells[index].position;
          }
          var node = this.box(type, position.x, position.y, 48, 48, undefined, this.tileLayer);
          if (type === rockCell) this.drawRock(node, (_this$rocks$get2 = this.rocks.get(index)) != null ? _this$rocks$get2 : 1);else this.tileIcon(type, node);
          this.bindTileInput(node, function () {
            return _this29.tiles.indexOf(node);
          });
          return node;
        };
        _proto.buildTiles = function buildTiles() {
          var _this30 = this;
          this.tiles.forEach(function (n) {
            return n.destroy();
          });
          this.tiles = this.board.map(function (type, index) {
            return _this30.tile(type, index);
          });
          this.tiles.forEach(function (node, index) {
            return _this30.restoredTileIds.set(node, playableCell(_this30.board[index]) ? crypto.randomUUID() : "cell:" + index + ":" + _this30.board[index]);
          });
          this.raiseBoardOverlays();
        };
        _proto.raiseBoardOverlays = function raiseBoardOverlays() {
          var _this$trialFxViewport;
          this.lock.setSiblingIndex(this.ui.children.length - 1);
          (_this$trialFxViewport = this.trialFxViewport) == null || _this$trialFxViewport.setSiblingIndex(this.ui.children.length - 1);
        };
        _proto.drawBoard = function drawBoard() {
          var _this31 = this;
          this.tiles.forEach(function (node, i) {
            return node.setScale(_this31.selected === i ? .85 : 1, _this31.selected === i ? .85 : 1, 1);
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
          var _drop = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(motion, removed, plan) {
            var _this32 = this;
            var previous, next, _iterator18, _step18, _index6, slides, animate, _iterator19, _step19, _step19$value, from, to, path, _iterator20, _step20, _this$challenge4, _this$challenge5, _this$challenge6, _step20$value, _to, _path, direction, distance, entry, localEntry, position, alpha;
            return _regeneratorRuntime().wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
                case 0:
                  previous = this.tiles;
                  next = previous.slice();
                  for (_iterator18 = _createForOfIteratorHelperLoose(removed); !(_step18 = _iterator18()).done;) {
                    _index6 = _step18.value;
                    previous[_index6].destroy();
                  }
                  slides = [];
                  animate = function animate(tile, path, entrySteps) {
                    var _this32$trial;
                    if (entrySteps === void 0) {
                      entrySteps = 0;
                    }
                    if (((_this32$trial = _this32.trial) == null ? void 0 : _this32$trial.id) === 'portal') {
                      var _slide = tween(tile),
                        root = _this32.ui;
                      var _loop5 = function _loop5() {
                        var from = path[k - 1],
                          to = path[k],
                          jump = from !== undefined && portalLinks.some(function (pair) {
                            return pair[0] === from && pair[1] === to;
                          });
                        if (jump) {
                          _slide.call(function () {
                            if (motion.cancelled || _this32.ui !== root) return;
                            _this32.logMechanism({
                              kind: 'PORTAL_STARTED',
                              id: _this32.restoredTileIds.get(tile),
                              from: from,
                              to: to
                            });
                            _this32.audio.playTrial('charge');
                          }).to(motion.duration(.09), {
                            scale: new Vec3(.08, .08, 1)
                          }).call(function () {
                            if (!motion.cancelled && _this32.ui === root) tile.setPosition(_this32.cells[to].position);
                          }).to(motion.duration(.09), {
                            scale: new Vec3(1, 1, 1)
                          }).call(function () {
                            if (motion.cancelled || _this32.ui !== root) return;
                            _this32.portalTransits++;
                            _this32.logMechanism({
                              kind: 'PORTAL_COMPLETED',
                              id: _this32.restoredTileIds.get(tile),
                              from: from,
                              to: to
                            });
                            _this32.refreshTestObjective();
                          });
                        } else _slide.to(motion.duration(.045 * (k === 0 ? entrySteps : 1)), {
                          position: _this32.cells[to].position.clone()
                        });
                      };
                      for (var k = entrySteps ? 0 : 1; k < path.length; k++) {
                        _loop5();
                      }
                      slides.push(motion.play(_slide));
                      return;
                    }
                    if (_this32.phase !== 'mine' && !_this32.blockedBoardCells.size) {
                      slides.push(_this32.moveTile(motion, tile, path[path.length - 1], .18));
                      return;
                    }
                    var slide = tween(tile);
                    for (var _k = entrySteps ? 0 : 1; _k < path.length; _k++) {
                      var steps = _k === 0 ? entrySteps : 1;
                      slide.to(motion.duration(.052 * steps), {
                        position: _this32.cells[path[_k]].position.clone()
                      });
                    }
                    if (!motion.reduced) slide.to(.045, {
                      scale: new Vec3(.96, 1.04, 1)
                    }).to(.065, {
                      scale: new Vec3(1, 1, 1)
                    });
                    slides.push(motion.play(slide));
                  };
                  for (_iterator19 = _createForOfIteratorHelperLoose(plan.moves); !(_step19 = _iterator19()).done;) {
                    _step19$value = _step19.value, from = _step19$value.from, to = _step19$value.to, path = _step19$value.path;
                    next[to] = previous[from];
                    animate(next[to], path);
                  }
                  for (_iterator20 = _createForOfIteratorHelperLoose(plan.spawns); !(_step20 = _iterator20()).done;) {
                    _step20$value = _step20.value, _to = _step20$value.to, _path = _step20$value.path, direction = _step20$value.direction, distance = _step20$value.distance;
                    entry = this.cells[_path[0]].position;
                    localEntry = (((_this$challenge4 = this.challenge) == null ? void 0 : _this$challenge4.locks.size) || ((_this$challenge5 = this.challenge) == null ? void 0 : _this$challenge5.id) === 'seam' || _path[0] === sourceEntry && ((_this$challenge6 = this.challenge) == null ? void 0 : _this$challenge6.id) === 'source') && _path[0] >= cols;
                    position = localEntry ? entry.clone() : new Vec3(entry.x - direction.x * 61 * distance, entry.y + direction.y * 61 * distance, 0);
                    next[_to] = this.tile(plan.board[_to], _to, position);
                    if (localEntry) {
                      alpha = next[_to].addComponent(UIOpacity);
                      alpha.opacity = 0;
                      slides.push(motion.play(tween(alpha).to(motion.duration(.14), {
                        opacity: 255
                      })));
                    }
                    this.restoredTileIds.set(next[_to], crypto.randomUUID());
                    animate(next[_to], _path, distance);
                  }
                  this.tiles = next;
                  this.raiseBoardOverlays();
                  _context8.next = 11;
                  return Promise.all(slides);
                case 11:
                  if (this.trial && !motion.cancelled) {
                    this.audio.playTrial('drop');
                    this.drawChallengePowers();
                  }
                case 12:
                case "end":
                  return _context8.stop();
              }
            }, _callee8, this);
          }));
          function drop(_x9, _x10, _x11) {
            return _drop.apply(this, arguments);
          }
          return drop;
        }();
        _proto.legalMove = function legalMove$1(board) {
          var _this33 = this;
          if (board === void 0) {
            board = this.board;
          }
          if (!this.challenge) return legalMove(board);
          return legalMove(board, function (a, b) {
            return _this33.canChallengeSwap(a, b);
          }, function (board) {
            return _this33.challengeMatches(board);
          });
        };
        _proto.autoStep = function autoStep() {
          var _this34 = this;
          var root = this.ui;
          var request = ++this.autoRequest;
          if (!this.automatic || this.busy || root !== this.battleRoot || this.guideMode || this.battleModal) return;
          this.scheduleOnce(function () {
            if (request !== _this34.autoRequest || !_this34.automatic || _this34.busy || root !== _this34.ui || _this34.battleModal) return;
            var move = _this34.bestAutoMove();
            if (move) {
              _this34.selected = move[0];
              void _this34.tap(move[1], true);
            }
          }, .38);
        };
        _proto.bestAutoMove = function bestAutoMove() {
          var _this35 = this;
          var best;
          var bestScore = 0;
          var _loop6 = function _loop6(a) {
              var _loop7 = function _loop7() {
                  var _this35$trial, _this35$trial2, _this35$trial3, _this35$dungeon;
                  var b = _arr3[_i7];
                  if (b >= _this35.board.length || !adjacent(a, b) || !playableCell(_this35.board[a]) || !playableCell(_this35.board[b]) || !_this35.canChallengeSwap(a, b)) return 0; // continue
                  if (_this35.isFusion(a, b)) return {
                    v: {
                      v: [a, b]
                    }
                  };
                  var next = _this35.board.slice();
                  var _ref11 = [next[b], next[a]];
                  next[a] = _ref11[0];
                  next[b] = _ref11[1];
                  var groups = _this35.challengeMatches(next);
                  if (!groups.length) return 0; // continue
                  var score = groups.reduce(function (sum, group) {
                    var type = next[group[0]];
                    var weight = type === 'h' && _this35.hp < _this35.maxHP * .6 ? 2 : type === 'd' && _this35.dp < _this35.maxDP * .4 ? 1.7 : type === 'cry' ? .5 : 1;
                    return sum + group.length * weight;
                  }, 0);
                  if (((_this35$trial = _this35.trial) == null ? void 0 : _this35$trial.id) === 'rocks') score += damageRocks(_this35.rocks, groups.flat()).hits.length * 30;
                  if (((_this35$trial2 = _this35.trial) == null ? void 0 : _this35$trial2.id) === 'jelly') score += spreadJelly(_this35.jelly, groups).added.length * 30;
                  if (((_this35$trial3 = _this35.trial) == null ? void 0 : _this35$trial3.id) === 'terrain') score += Array.from(new Set(groups.flat())).filter(function (index) {
                    return _this35.terrain.has(index);
                  }).length * 30;
                  if (_this35.challenge) {
                    var cells = new Set(groups.flat());
                    score += hitChallengeLocks(_this35.challenge.id, _this35.challenge.locks, cells).hits.length * 35;
                    var desired = _this35.challenge.stage ? 'm' : 's';
                    if (_this35.challenge.id === 'collect' || _this35.challenge.id === 'relay') score += groups.filter(function (group) {
                      return next[group[0]] === desired;
                    }).length * 24;
                    for (var _iterator21 = _createForOfIteratorHelperLoose(cells), _step21; !(_step21 = _iterator21()).done;) {
                      var _this35$restoredTileI;
                      var _index7 = _step21.value;
                      var from = _index7 === a ? b : _index7 === b ? a : _index7;
                      if (_this35.challenge.powers.has((_this35$restoredTileI = _this35.restoredTileIds.get(_this35.tiles[from])) != null ? _this35$restoredTileI : '')) score += 40;
                    }
                  }
                  var room = (_this35$dungeon = _this35.dungeon) == null ? void 0 : _this35$dungeon.room;
                  if ((room == null ? void 0 : room.kind) === 'battle' && room.delivery) {
                    var _this35$challenge, _this35$challenge2;
                    var plan = planWave(groups, function (index) {
                      return _this35.chargedTiles.get(_this35.tiles[index === a ? b : index === b ? a : index]);
                    }, [b, a]);
                    var gravity = _this35.planBattleRefill(next, plan.removed, _this35.types, function () {
                      return 0;
                    });
                    score += deliveryAdvanceScore(_this35.board, gravity.board, room.delivery, ((_this35$challenge = _this35.challenge) == null ? void 0 : _this35$challenge.id) === 'source' ? _this35.boardRoutes : _this35.usesRailGravity ? mineGravity : verticalGravity);
                    if (((_this35$challenge2 = _this35.challenge) == null ? void 0 : _this35$challenge2.id) === 'source') {
                      var route = _this35.boardRoutes.find(function (path) {
                        return path[0] === sourceEntry;
                      });
                      score += groups.flat().filter(function (index) {
                        return index >= sourceEntry - 7 && Math.abs(index % 7 - sourceEntry % 7) <= 1;
                      }).length * 4;
                      score += groups.flat().filter(function (index) {
                        return route.includes(index);
                      }).length * 8;
                    }
                  }
                  if (!best || score > bestScore) {
                    best = [a, b];
                    bestScore = score;
                  }
                },
                _ret4;
              for (var _i7 = 0, _arr3 = [a + 1, a + 7]; _i7 < _arr3.length; _i7++) {
                _ret4 = _loop7();
                if (_ret4 === 0) continue;
                if (_ret4) return _ret4.v;
              }
            },
            _ret3;
          for (var a = 0; a < this.board.length; a++) {
            _ret3 = _loop6(a);
            if (_ret3) return _ret3.v;
          }
          return best;
        };
        _proto.stopStage4A = function stopStage4A(reason) {
          var _live$session, _this$motion6;
          var live = this.stage4A;
          if (!live) return;
          this.stage4A = undefined;
          this.stage4AGeneration++;
          (_live$session = live.session) == null || _live$session.cancel(reason);
          (_this$motion6 = this.motion) == null || _this$motion6.cancel();
          this.hp = live.entryHP;
          this.dp = live.entryDP;
        };
        _proto.wantsStage4A = function wantsStage4A() {
          // Frozen after the multi-color cascade audit. All playable rooms use
          // the shared wave-by-wave battle path until a new rollout is approved.
          return false;
        };
        _proto.stage4ASeed = function stage4ASeed() {
          var _URLSearchParams$get2;
          return Number((_URLSearchParams$get2 = new URLSearchParams(location.search).get('seed')) != null ? _URLSearchParams$get2 : Date.now()) >>> 0;
        };
        _proto.setupStage4A = function setupStage4A() {
          var _this$dungeon6,
            _this36 = this;
          var room = (_this$dungeon6 = this.dungeon) == null ? void 0 : _this$dungeon6.room;
          if (!this.wantsStage4A() || (room == null ? void 0 : room.kind) !== 'battle') return;
          var generation = ++this.stage4AGeneration;
          var live = {
            generation: generation,
            runId: crypto.randomUUID(),
            nodes: new Map(),
            journal: [],
            samples: [],
            eligible: false,
            published: [],
            entryHP: this.hp,
            entryDP: this.dp,
            potionSequence: 0
          };
          this.stage4A = live; // Lock ownership even if this room cannot start.
          try {
            var _room$rescueCells2, _this$adventure3;
            var gear = Object.values(this.inventory.slots);
            if ((_room$rescueCells2 = room.rescueCells) != null && _room$rescueCells2.length || gear.includes('healcore')) throw Error('该配置包含尚未决定的救援或生命圣杯规则');
            var seed = this.stage4ASeed();
            var tiles = this.board.map(function (emblem, i) {
              return _extends({
                id: "room:" + generation + ":" + i,
                emblem: emblem
              }, _this36.chargedTiles.get(_this36.tiles[i]) ? {
                tier: _this36.chargedTiles.get(_this36.tiles[i])
              } : {});
            });
            tiles.forEach(function (tile, i) {
              return live.nodes.set(tile.id, _this36.tiles[i]);
            });
            var ids = this.enemies.map(function (_, i) {
              return 'enemy:' + i;
            });
            var core = createBattleCore(setupFormalRoom({
              battleId: 'game:' + generation,
              roomId: 'mine:0',
              seed: seed,
              hp: this.hp,
              maxHP: this.maxHP,
              dp: this.dp,
              maxDP: this.maxDP,
              tutorial: false,
              revisedSkills: true,
              roles: [].concat(this.party),
              attacks: Object.fromEntries(this.party.map(function (role) {
                return [role, _this36.heroAttack(role)];
              })),
              gear: gear,
              buffs: _extends({}, (_this$adventure3 = this.adventure) == null ? void 0 : _this$adventure3.buffs),
              enemies: this.foes.map(function (foe, i) {
                return {
                  id: ids[i],
                  attack: foe.atk,
                  tags: [].concat(foe.tags),
                  armor: foe.armor
                };
              }),
              enemyHP: Object.fromEntries(ids.map(function (id, i) {
                return [id, _this36.enemies[i]];
              })),
              tiles: tiles,
              rescue: [],
              swaps: {
                move: 'open'
              }
            }), {
              boardMode: 'external',
              generation: generation
            });
            live.core = core;
            live.session = new IsolatedBoardSession(core);
            live.potion = createPotionBridge(core, {
              reserve: function reserve() {
                var gate = _this36.saveGate;
                var raw = gate == null ? void 0 : gate.read();
                if (!(gate != null && gate.writable) || !raw || _this36.potion <= 0) return undefined;
                var stored;
                try {
                  stored = JSON.parse(raw);
                } catch (_unused6) {
                  return undefined;
                }
                if (!stored || typeof stored !== 'object') return undefined;
                var stock = stored.potion === true ? 1 : stored.potion;
                if (stock !== _this36.potion) return undefined;
                var after = stock - 1;
                return {
                  release: function release() {},
                  confirm: function confirm() {
                    if (_this36.stage4A !== live || gate.write(JSON.stringify(_extends({}, stored, {
                      potion: after
                    })), raw) !== 'committed') throw Error('Potion stock could not be confirmed normally');
                    _this36.potion = after;
                  }
                };
              }
            }, function () {
              return _this36.stage4A === live;
            });
          } catch (error) {
            live.error = String(error);
          }
        };
        _proto.useStage4APotion = function useStage4APotion() {
          var _this$heroes$get$posi2,
            _this$heroes$get2,
            _this37 = this;
          var live = this.stage4A;
          if (!(live != null && live.core) || !live.potion || live.error || this.busy || this.automatic || this.battlePhase !== 'input') return;
          var result = live.potion(live.core.snapshot().fixture.battleId + ':potion:' + ++live.potionSequence);
          if (result === 'confirm-uncertain') {
            this.stage4AStockUncertain = true;
            live.error = '药水库存提交结果不明，请重新加载核对库存';
            this.busy = true;
            this.battlePhase = 'resolve';
            this.setBattleStatus(live.error);
            this.updateHUD();
            return;
          }
          if (result !== 'applied') return;
          var snapshot = live.core.snapshot();
          live.journal = snapshot.events;
          var event = snapshot.events.at(-1);
          this.hp = snapshot.state.partyHP;
          this.audio.play('potion');
          this.setBattleStatus('药水恢复 ' + event.payload.amount + ' HP');
          var motion = this.motion;
          void this.supportHalo(motion, (_this$heroes$get$posi2 = (_this$heroes$get2 = this.heroes.get('s')) == null ? void 0 : _this$heroes$get2.position) != null ? _this$heroes$get$posi2 : new Vec3(-94, 245, 0), '#87eaa5').then(function () {
            if (_this37.stage4A === live && !motion.cancelled) live.core.acknowledgePresentation(event.eventId);
          });
          this.updateHUD();
        };
        _proto.stage4ASwap = /*#__PURE__*/function () {
          var _stage4ASwap = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(a, b, preview) {
            var _this38 = this;
            var live, core, session, motion, current, _this$boardFx2, swapView, waves, tail, releaseFocus, attackTier, returnAnimation, clearFocus, cursor, parents, view, enqueue, publish, ticket, _reason, _live$journal$at, result, _iterator24, _step24, wave, _iterator26, _step26, _play, _i8, _tail, play, _iterator25, _step25, event, snapshot;
            return _regeneratorRuntime().wrap(function _callee17$(_context17) {
              while (1) switch (_context17.prev = _context17.next) {
                case 0:
                  live = this.stage4A;
                  core = live.core, session = live.session;
                  motion = this.motion;
                  current = function current() {
                    return _this38.stage4A === live && !motion.cancelled;
                  };
                  this.selected = -1;
                  if (!(!core || !session || live.error || core.disposition !== 'active')) {
                    _context17.next = 7;
                    break;
                  }
                  return _context17.abrupt("return");
                case 7:
                  this.busy = true;
                  this.battlePhase = 'resolve';
                  this.drawBoard();
                  this.audio.playTrial('swap');
                  if (validExchange(core.snapshot().state.board, [a, b])) {
                    _context17.next = 17;
                    break;
                  }
                  this.audio.playTrial('invalid');
                  _context17.next = 15;
                  return Promise.all([this.moveTile(motion, this.tiles[a], a, .12), this.moveTile(motion, this.tiles[b], b, .12), (_this$boardFx2 = this.boardFx) == null ? void 0 : _this$boardFx2.reject(motion, [this.cells[a].position, this.cells[b].position])]);
                case 15:
                  if (current()) this.resumeBattleInput('没有成组，换位已还原');
                  return _context17.abrupt("return");
                case 17:
                  // Core facts are submitted independently. Presentation replays their causal waves.
                  swapView = Promise.all([this.moveTile(motion, this.tiles[a], b, preview ? .06 : .12), this.moveTile(motion, this.tiles[b], a, preview ? .06 : .12)]).then(function () {
                    if (!current()) return;
                    var _ref12 = [_this38.tiles[b], _this38.tiles[a]];
                    _this38.tiles[a] = _ref12[0];
                    _this38.tiles[b] = _ref12[1];
                    var _ref13 = [_this38.board[b], _this38.board[a]];
                    _this38.board[a] = _ref13[0];
                    _this38.board[b] = _ref13[1];
                  });
                  waves = new Map();
                  tail = [];
                  clearFocus = function clearFocus() {
                    releaseFocus == null || releaseFocus();
                    releaseFocus = undefined;
                  };
                  cursor = live.journal.length;
                  parents = new Map();
                  view = function view(lane, event, play) {
                    return /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
                      var start;
                      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                        while (1) switch (_context9.prev = _context9.next) {
                          case 0:
                            if (current()) {
                              _context9.next = 2;
                              break;
                            }
                            return _context9.abrupt("return");
                          case 2:
                            start = performance.now();
                            _context9.next = 5;
                            return play();
                          case 5:
                            if (current()) live.samples.push({
                              lane: lane,
                              id: event.eventId,
                              start: start,
                              end: performance.now()
                            });
                          case 6:
                          case "end":
                            return _context9.stop();
                        }
                      }, _callee9);
                    }));
                  };
                  enqueue = function enqueue(lane, event, play) {
                    if (event.phase === 'ENEMY_RESOLVE') {
                      tail.push(view(lane, event, play));
                      return;
                    }
                    var cause = event.parentEventId;
                    while (cause && !waves.has(cause)) {
                      var _parents$get;
                      cause = (_parents$get = parents.get(cause)) != null ? _parents$get : null;
                    }
                    var wave = cause && waves.get(cause);
                    (wave ? wave.actors : tail).push(view(lane, event, play));
                  };
                  publish = function publish() {
                    var snap = core.snapshot();
                    live.journal = snap.events;
                    var _loop8 = function _loop8() {
                      var _event$sourceId, _event$targetId;
                      var event = _step22.value;
                      parents.set(event.eventId, event.parentEventId);
                      live.published.push({
                        id: event.eventId,
                        time: performance.now()
                      });
                      var frame = event.type === 'MATCH_RESOLVED' ? core.frame(event.eventId) : undefined;
                      if (frame) {
                        var facts = event.payload;
                        var removed = new Set(facts.removed);
                        var matched = facts.removed.concat(facts.generated.map(function (g) {
                          return g.index;
                        }));
                        var clear = view('board', event, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
                          var _this38$boardFx, _this38$boardFx2;
                          var oldNodes, _iterator23, _step23, _step23$value, _index8, tile;
                          return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                            while (1) switch (_context10.prev = _context10.next) {
                              case 0:
                                oldNodes = _this38.tiles.slice();
                                _iterator23 = _createForOfIteratorHelperLoose(facts.generated);
                              case 2:
                                if ((_step23 = _iterator23()).done) {
                                  _context10.next = 9;
                                  break;
                                }
                                _step23$value = _step23.value, _index8 = _step23$value.index, tile = _step23$value.tile;
                                if (!(live.nodes.get(tile.id) !== oldNodes[_index8])) {
                                  _context10.next = 6;
                                  break;
                                }
                                throw Error('强化演出棋子身份不一致');
                              case 6:
                                _this38.markCharged(_index8, tile.tier);
                              case 7:
                                _context10.next = 2;
                                break;
                              case 9:
                                _this38.audio.playChain(facts.wave - 1);
                                if (facts.generated.length) _this38.audio.playTrial('create');
                                _context10.next = 13;
                                return Promise.all([_this38.flashTiles(motion, matched, removed, false)].concat(facts.generated.map(function (_ref16) {
                                  var index = _ref16.index;
                                  return _this38.dropCharge(motion, oldNodes[index]);
                                }), [(_this38$boardFx = _this38.boardFx) == null ? void 0 : _this38$boardFx.combo(motion, facts.wave, new Vec3(0, 80, 0)), (_this38$boardFx2 = _this38.boardFx) == null ? void 0 : _this38$boardFx2.chargeReady(motion, facts.generated.map(function (_ref17) {
                                  var index = _ref17.index;
                                  return {
                                    position: _this38.cells[index].position
                                  };
                                }))]));
                              case 13:
                              case "end":
                                return _context10.stop();
                            }
                          }, _callee10);
                        })));
                        var refill = view('board', event, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
                          var paths, nextNodes;
                          return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                            while (1) switch (_context11.prev = _context11.next) {
                              case 0:
                                // The committed frame supplies colors and stable IDs; geometry uses the previous frame.
                                paths = planRefill(_this38.board, removed, [''], function () {
                                  return 0;
                                }, mineGravity);
                                paths.board = frame.board.tiles.map(function (t) {
                                  return t.emblem;
                                });
                                _this38.board = paths.board;
                                _this38.audio.playTrial('drop');
                                _context11.next = 6;
                                return _this38.drop(motion, removed, paths);
                              case 6:
                                if (current()) {
                                  _context11.next = 8;
                                  break;
                                }
                                return _context11.abrupt("return");
                              case 8:
                                nextNodes = new Map();
                                frame.board.tiles.forEach(function (_ref19, i) {
                                  var id = _ref19.id;
                                  var previous = live.nodes.get(id);
                                  if (previous && previous !== _this38.tiles[i]) throw Error('矿轨演出棋子身份不一致');
                                  nextNodes.set(id, _this38.tiles[i]);
                                });
                                live.nodes = nextNodes;
                              case 11:
                              case "end":
                                return _context11.stop();
                            }
                          }, _callee11);
                        })));
                        waves.set(event.eventId, {
                          clear: clear,
                          refill: refill,
                          actors: []
                        });
                      }
                      if (event.type === 'CAST_STARTED' && event.sourceId) {
                        var actor = _this38.heroes.get(event.sourceId);
                        if (actor) enqueue('actor', event, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
                          var home, cast, targets, target, color, _target$getChildByNam, _target$getChildByNam2, _actor$getChildByName, _actor$getChildByName2, _ground, foot, contact;
                          return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                            while (1) switch (_context12.prev = _context12.next) {
                              case 0:
                                home = actor.position.clone();
                                cast = event.payload;
                                targets = cast.targets.flatMap(function (id) {
                                  var target = _this38.enemyNodes[Number(id.split(':')[1])];
                                  return target != null && target.active ? [target] : [];
                                });
                                target = targets[0];
                                clearFocus();
                                attackTier = cast.tier;
                                releaseFocus = _this38.focusCombat(motion, [].concat(targets, [actor]));
                                if (cast.tier || cast.kind !== 'attack') _this38.audio.play('charge');
                                if (!(cast.tier && !motion.reduced)) {
                                  _context12.next = 11;
                                  break;
                                }
                                _context12.next = 11;
                                return _this38.castSkillEffect(motion, home, cast.tier === 'advanced');
                              case 11:
                                if (current()) {
                                  _context12.next = 13;
                                  break;
                                }
                                return _context12.abrupt("return");
                              case 13:
                                if (!(cast.kind !== 'attack')) {
                                  _context12.next = 19;
                                  break;
                                }
                                color = cast.kind === 'heal' ? '#81f4a4' : cast.kind === 'guard' ? '#8bcbff' : '#ffbc60';
                                _context12.next = 17;
                                return Promise.all([_this38.supportHalo(motion, home, color)].concat(_this38.burst(motion, home.x, home.y, color, 6)));
                              case 17:
                                _context12.next = 31;
                                break;
                              case 19:
                                if (!(target && (cast.skill === 'm' || cast.skill === 'stone'))) {
                                  _context12.next = 24;
                                  break;
                                }
                                _context12.next = 22;
                                return _this38.flyProjectile(motion, cast.skill, home, target.position.clone());
                              case 22:
                                _context12.next = 31;
                                break;
                              case 24:
                                if (!target) {
                                  _context12.next = 31;
                                  break;
                                }
                                _ground = target.position.y + ((_target$getChildByNam = (_target$getChildByNam2 = target.getChildByName('脚底投影')) == null ? void 0 : _target$getChildByNam2.position.y) != null ? _target$getChildByNam : -34);
                                foot = (_actor$getChildByName = (_actor$getChildByName2 = actor.getChildByName('脚底投影')) == null ? void 0 : _actor$getChildByName2.position.y) != null ? _actor$getChildByName : -34;
                                contact = new Vec3(target.position.x - 36, _ground - foot, 0);
                                _context12.next = 30;
                                return motion.play(tween(actor).to(motion.duration(.105), {
                                  position: contact
                                }));
                              case 30:
                                if (current()) returnAnimation = motion.play(tween(actor).to(motion.duration(.18), {
                                  position: home
                                }, {
                                  easing: 'quadOut'
                                }));
                              case 31:
                              case "end":
                                return _context12.stop();
                            }
                          }, _callee12);
                        })));
                      }
                      if (event.type === 'CAST_COMPLETED') enqueue('actor', event, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
                        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
                          while (1) switch (_context13.prev = _context13.next) {
                            case 0:
                              _context13.next = 2;
                              return returnAnimation;
                            case 2:
                              returnAnimation = undefined;
                              clearFocus();
                              attackTier = undefined;
                            case 5:
                            case "end":
                              return _context13.stop();
                          }
                        }, _callee13);
                      })));
                      if (event.type === 'ACTION_OPPORTUNITY' && (_event$sourceId = event.sourceId) != null && _event$sourceId.startsWith('enemy:') && !snap.events.some(function (e) {
                        return e.parentEventId === event.eventId && e.type === 'ACTION_SKIPPED';
                      })) {
                        var _index9 = Number(event.sourceId.split(':')[1]);
                        enqueue('actor', event, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
                          var node, home, art, _this38$heroes$values, _this38$heroes$values2;
                          return _regeneratorRuntime().wrap(function _callee14$(_context14) {
                            while (1) switch (_context14.prev = _context14.next) {
                              case 0:
                                node = _this38.enemyNodes[_index9];
                                if (node) {
                                  _context14.next = 3;
                                  break;
                                }
                                return _context14.abrupt("return");
                              case 3:
                                home = node.position.clone();
                                clearFocus();
                                releaseFocus = _this38.focusCombat(motion, [].concat(Array.from(_this38.heroes.values()), [node]));
                                art = _this38.foes[_index9].art;
                                if (!(art === 'wizard' || art === 'vine')) {
                                  _context14.next = 12;
                                  break;
                                }
                                _context14.next = 10;
                                return _this38.flyProjectile(motion, art === 'wizard' ? 'm' : 'stone', home, (_this38$heroes$values = (_this38$heroes$values2 = _this38.heroes.values().next().value) == null ? void 0 : _this38$heroes$values2.position) != null ? _this38$heroes$values : new Vec3(-100, 240, 0));
                              case 10:
                                _context14.next = 14;
                                break;
                              case 12:
                                _context14.next = 14;
                                return motion.play(tween(node).to(motion.duration(.14), {
                                  position: home.clone().add(new Vec3(-27, 0, 0))
                                }).to(motion.duration(.17), {
                                  position: home
                                }));
                              case 14:
                              case "end":
                                return _context14.stop();
                            }
                          }, _callee14);
                        })));
                      }
                      if (event.type === 'HEAL_APPLIED' || event.type === 'DP_RESTORED' || event.type === 'ENEMY_AGGREGATE_RESOLVED') {
                        var meters = event.payload;
                        enqueue('actor', event, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
                          var _meters$amount, _meters$amount2;
                          var _meters$remainingHP, _meters$remainingDP, _meters$lost, lost, _meters$absorbed, absorbed;
                          return _regeneratorRuntime().wrap(function _callee15$(_context15) {
                            while (1) switch (_context15.prev = _context15.next) {
                              case 0:
                                if (event.type === 'HEAL_APPLIED') _this38.hp = Math.min(_this38.maxHP, _this38.hp + ((_meters$amount = meters.amount) != null ? _meters$amount : 0));else if (event.type === 'DP_RESTORED') _this38.dp = Math.min(_this38.maxDP, _this38.dp + ((_meters$amount2 = meters.amount) != null ? _meters$amount2 : 0));else {
                                  _this38.hp = (_meters$remainingHP = meters.remainingHP) != null ? _meters$remainingHP : _this38.hp;
                                  _this38.dp = (_meters$remainingDP = meters.remainingDP) != null ? _meters$remainingDP : _this38.dp;
                                }
                                _this38.updateHUD();
                                if (!(event.type === 'ENEMY_AGGREGATE_RESOLVED')) {
                                  _context15.next = 9;
                                  break;
                                }
                                _meters$lost = meters.lost, lost = _meters$lost === void 0 ? 0 : _meters$lost, _meters$absorbed = meters.absorbed, absorbed = _meters$absorbed === void 0 ? 0 : _meters$absorbed;
                                if (!(lost || absorbed)) {
                                  _context15.next = 8;
                                  break;
                                }
                                _this38.audio.play('hurt');
                                _context15.next = 8;
                                return Promise.all([_this38.combatPopup(motion, [lost && '−' + lost + ' HP', absorbed && '−' + absorbed + ' DP'].filter(Boolean).join(' · '), -100, 283, '#ffaaa2')].concat(Array.from(_this38.heroes.values(), function (hero) {
                                  return _this38.hitReaction(motion, hero);
                                }), [lost && _this38.hp <= _this38.maxHP * .30 ? _this38.lowHealthFlash(motion) : undefined]));
                              case 8:
                                clearFocus();
                              case 9:
                              case "end":
                                return _context15.stop();
                            }
                          }, _callee15);
                        })));
                      }
                      if (event.type === 'HIT_RESOLVED' && (_event$targetId = event.targetId) != null && _event$targetId.startsWith('enemy:')) {
                        var _index10 = Number(event.targetId.split(':')[1]);
                        var hit = event.payload;
                        enqueue('actor', event, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
                          var node, home, fallen, effects, _node$getChildByName$, _node$getChildByName2, _node$getComponent, alpha;
                          return _regeneratorRuntime().wrap(function _callee16$(_context16) {
                            while (1) switch (_context16.prev = _context16.next) {
                              case 0:
                                _this38.enemies[_index10] = Math.max(0, _this38.enemies[_index10] - hit.lost);
                                _this38.updateHUD();
                                node = _this38.enemyNodes[_index10];
                                if (node) {
                                  _context16.next = 5;
                                  break;
                                }
                                return _context16.abrupt("return");
                              case 5:
                                home = node.position.clone();
                                fallen = _this38.enemies[_index10] === 0;
                                _this38.audio.play('hit');
                                effects = [_this38.hitReaction(motion, node), _this38.combatPopup(motion, '−' + hit.lost, home.x, home.y + 51, attackTier === 'advanced' ? '#ffd66b' : '#ffe7b0', attackTier === 'advanced' ? 38 : attackTier ? 32 : 27), motion.play(tween(node).to(motion.duration(.065), {
                                  position: home.clone().add(new Vec3(11, 0, 0))
                                }).to(motion.duration(.10), {
                                  position: home
                                }))].concat(_this38.burst(motion, home.x, home.y, _this38.foes[_index10].tags.includes('armor') ? '#ffde86' : event.sourceId === 'm' ? '#d4a6ff' : '#ffb784', 6));
                                if (fallen) {
                                  _this38.lastFallen = {
                                    origin: home,
                                    ground: home.y + ((_node$getChildByName$ = (_node$getChildByName2 = node.getChildByName('脚底投影')) == null ? void 0 : _node$getChildByName2.position.y) != null ? _node$getChildByName$ : -34)
                                  };
                                  alpha = (_node$getComponent = node.getComponent(UIOpacity)) != null ? _node$getComponent : node.addComponent(UIOpacity);
                                  effects.push(motion.play(tween(alpha).delay(motion.duration(.17)).to(motion.duration(.25), {
                                    opacity: 0
                                  })), _this38.soulRise(motion, home));
                                }
                                _context16.next = 12;
                                return Promise.all(effects);
                              case 12:
                                if (current() && fallen) {
                                  node.active = false;
                                  _this38.enemyMeters[_index10].root.active = false;
                                }
                              case 13:
                              case "end":
                                return _context16.stop();
                            }
                          }, _callee16);
                        })));
                      }
                    };
                    for (var _iterator22 = _createForOfIteratorHelperLoose(snap.events.slice(cursor)), _step22; !(_step22 = _iterator22()).done;) {
                      _loop8();
                    }
                    cursor = snap.events.length;
                  };
                  _context17.prev = 26;
                  ticket = core.submit({
                    swap: 'move'
                  });
                  publish();
                case 29:
                  if (!(ticket && current())) {
                    _context17.next = 44;
                    break;
                  }
                  _context17.next = 32;
                  return session.resolve(ticket, _extends({}, ticket.wave === 1 ? {
                    swap: [a, b]
                  } : {}, {
                    pool: this.types,
                    gravity: 'mine'
                  }));
                case 32:
                  result = _context17.sent;
                  if (current()) {
                    _context17.next = 35;
                    break;
                  }
                  return _context17.abrupt("return");
                case 35:
                  publish();
                  if (result.ok) {
                    _context17.next = 38;
                    break;
                  }
                  throw Error(String((_reason = (_live$journal$at = live.journal.at(-1)) == null || (_live$journal$at = _live$journal$at.payload) == null ? void 0 : _live$journal$at.reason) != null ? _reason : '棋盘请求失败；请查看事件记录'));
                case 38:
                  ticket = result.next;
                  if (!ticket) {
                    _context17.next = 42;
                    break;
                  }
                  _context17.next = 42;
                  return new Promise(function (resolve) {
                    return requestAnimationFrame(function () {
                      return resolve();
                    });
                  });
                case 42:
                  _context17.next = 29;
                  break;
                case 44:
                  _context17.next = 46;
                  return swapView;
                case 46:
                  if (current()) {
                    _context17.next = 48;
                    break;
                  }
                  return _context17.abrupt("return");
                case 48:
                  _iterator24 = _createForOfIteratorHelperLoose(waves.values());
                case 49:
                  if ((_step24 = _iterator24()).done) {
                    _context17.next = 66;
                    break;
                  }
                  wave = _step24.value;
                  _context17.next = 53;
                  return wave.clear();
                case 53:
                  _iterator26 = _createForOfIteratorHelperLoose(wave.actors);
                case 54:
                  if ((_step26 = _iterator26()).done) {
                    _context17.next = 60;
                    break;
                  }
                  _play = _step26.value;
                  _context17.next = 58;
                  return _play();
                case 58:
                  _context17.next = 54;
                  break;
                case 60:
                  _context17.next = 62;
                  return wave.refill();
                case 62:
                  if (current()) {
                    _context17.next = 64;
                    break;
                  }
                  return _context17.abrupt("return");
                case 64:
                  _context17.next = 49;
                  break;
                case 66:
                  _i8 = 0, _tail = tail;
                case 67:
                  if (!(_i8 < _tail.length)) {
                    _context17.next = 74;
                    break;
                  }
                  play = _tail[_i8];
                  _context17.next = 71;
                  return play();
                case 71:
                  _i8++;
                  _context17.next = 67;
                  break;
                case 74:
                  if (current()) {
                    _context17.next = 76;
                    break;
                  }
                  return _context17.abrupt("return");
                case 76:
                  for (_iterator25 = _createForOfIteratorHelperLoose(live.journal); !(_step25 = _iterator25()).done;) {
                    event = _step25.value;
                    core.acknowledgePresentation(event.eventId);
                  }
                  snapshot = core.snapshot();
                  this.hp = snapshot.state.partyHP;
                  this.dp = snapshot.state.combat.partyDP;
                  this.enemies = Object.values(snapshot.state.enemies);
                  this.turn = snapshot.state.roundId + 1;
                  this.updateHUD();
                  if (snapshot.result) {
                    live.eligible = snapshot.state.producers.length === 0 && live.journal.some(function (e) {
                      return e.type === 'BOARD_STABILIZED';
                    }) && live.journal.filter(function (e) {
                      return e.type === 'BATTLE_TERMINATED';
                    }).length === 1;
                    this.automatic = false;
                    this.setBattleStatus('首房战斗已结束');
                    if (snapshot.result.outcome === 'win') this.commitMineFirstVictory(live, this.dungeon, this.dungeon.room);else this.audio.play('defeat');
                  } else this.resumeBattleInput('轮到玩家，交换相邻纹章');
                  _context17.next = 96;
                  break;
                case 86:
                  _context17.prev = 86;
                  _context17.t0 = _context17["catch"](26);
                  if (!(this.stage4A !== live || motion.cancelled)) {
                    _context17.next = 90;
                    break;
                  }
                  return _context17.abrupt("return");
                case 90:
                  live.error = String(_context17.t0);
                  session.cancel('stage4a-failed');
                  motion.cancel();
                  _context17.next = 95;
                  return Promise.allSettled([swapView]);
                case 95:
                  if (this.stage4A === live) this.setBattleStatus('验证战斗已阻断 · 可撤离');
                case 96:
                  _context17.prev = 96;
                  clearFocus();
                  return _context17.finish(96);
                case 99:
                case "end":
                  return _context17.stop();
              }
            }, _callee17, this, [[26, 86, 96, 99]]);
          }));
          function stage4ASwap(_x12, _x13, _x14) {
            return _stage4ASwap.apply(this, arguments);
          }
          return stage4ASwap;
        }();
        _proto.commitMineFirstVictory = function commitMineFirstVictory(live, director, room) {
          var _snapshot$result,
            _snapshot$state$deriv,
            _this39 = this,
            _this$lastFallen;
          if (this.stage4A !== live || this.stage4AGeneration !== live.generation || this.dungeon !== director || director.room !== room || director.depth !== 0 || !this.wantsStage4A() || !live.eligible || live.error || this.mineRecovery) return;
          var snapshot = live.core.snapshot();
          var ends = snapshot.events.filter(function (e) {
            return e.type === 'BATTLE_TERMINATED';
          });
          var settled = snapshot.events.findLast(function (e) {
            return e.type === 'BOARD_STABILIZED';
          });
          var board = snapshot.state.board;
          var gate = this.saveGate;
          var raw = gate == null ? void 0 : gate.read();
          if (((_snapshot$result = snapshot.result) == null ? void 0 : _snapshot$result.outcome) !== 'win' || snapshot.result.roomId !== 'mine:0' || ends.length !== 1 || ends[0].battleId !== snapshot.result.battleId || !settled || settled.sequence >= ends[0].sequence || snapshot.state.producers.length || snapshot.state.partyQueue.length || snapshot.state.delayed.length || snapshot.state.personal.some(function (_ref25) {
            var queue = _ref25[1];
            return queue.length;
          }) || (_snapshot$state$deriv = snapshot.state.derivation) != null && _snapshot$state$deriv.requests.length || snapshot.events.some(function (e) {
            return live.core.frame(e.eventId);
          }) || !board || board.tiles.some(function (t) {
            return !t;
          }) || !legalMove(board.tiles.map(function (t) {
            return t.emblem;
          })) || !(gate != null && gate.writable) || !raw) {
            this.showRecoveryStop('首房终局或存档未通过校验。');
            return;
          }
          var player = JSON.parse(raw);
          var run = this.adventure;
          var stock = typeof player.potion === 'boolean' ? Number(player.potion) : Number.isFinite(player.potion) ? Math.max(0, Math.min(99, Math.floor(player.potion))) : 0;
          if ((run == null ? void 0 : run.id) !== 'mine' || run.coins || run.xp || run.ordinaryWins || Object.keys(run.loot).length || stock !== this.potion) {
            this.showRecoveryStop('首房待结算收益或库存无法核对。');
            return;
          }
          var next = planMineFirstVictory({
            schemaVersion: 1,
            player: _extends({}, player, {
              location: locations.indexOf('mine'),
              hp: snapshot.state.partyHP,
              dp: snapshot.state.combat.partyDP
            }),
            run: {
              runId: live.runId,
              generation: live.generation,
              route: director.rooms.map(function (room, i) {
                return {
                  id: 'mine:' + i,
                  room: room
                };
              }),
              cursor: 0,
              pending: {
                coins: 0,
                xp: 0,
                ordinaryWins: 0,
                loot: {}
              },
              board: null,
              receipts: [],
              closed: null
            }
          }, {
            runId: live.runId,
            roomId: 'mine:0',
            generation: live.generation,
            terminalEventId: ends[0].eventId
          }, {
            gravity: 'mine/v1',
            tiles: board.tiles.map(function (t) {
              return t;
            })
          });
          if (!next) {
            this.showRecoveryStop('首房事务快照未通过校验。');
            return;
          }
          var payload = JSON.stringify(next);
          var result = gate.startRecovery(payload, raw);
          if (result === 'write-failed') {
            if (!live.retrySave) live.retrySave = this.button('重试保存首房结果', -325, function () {
              var _live$retrySave;
              if (_this39.stage4A !== live) return;
              (_live$retrySave = live.retrySave) == null || _live$retrySave.destroy();
              live.retrySave = undefined;
              _this39.commitMineFirstVictory(live, director, room);
            });
            this.setBattleStatus('首房奖励尚未保存');
            return;
          }
          if (result !== 'committed' && result !== 'reconciled') {
            this.showRecoveryStop('首房结果未能确认，请重新加载。');
            return;
          }
          this.mineRecovery = {
            raw: payload,
            state: next
          };
          this.battlePhase = 'complete';
          if (!director.advance(room) || director.depth !== next.run.cursor) {
            this.showRecoveryStop('首房已保存，房间显示需重新加载。');
            return;
          }
          var root = this.ui,
            motion = this.motion;
          var drop = (_this$lastFallen = this.lastFallen) != null ? _this$lastFallen : {
            origin: new Vec3(132, stageGrid.groundY + 30),
            ground: stageGrid.groundY
          };
          this.audio.play('victory');
          var reveal = /*#__PURE__*/function () {
            var _ref26 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
              return _regeneratorRuntime().wrap(function _callee18$(_context18) {
                while (1) switch (_context18.prev = _context18.next) {
                  case 0:
                    _context18.prev = 0;
                    _context18.next = 3;
                    return _this39.animateCoins(motion, next.run.pending.coins, _this39.coinText, drop.origin, drop.ground);
                  case 3:
                    _context18.next = 9;
                    break;
                  case 5:
                    _context18.prev = 5;
                    _context18.t0 = _context18["catch"](0);
                    if (_this39.ui === root) _this39.showRecoveryStop('首房已保存，场景需重新加载。');
                    return _context18.abrupt("return");
                  case 9:
                    if (!(_this39.ui !== root || _this39.stage4A !== live || motion.cancelled)) {
                      _context18.next = 11;
                      break;
                    }
                    return _context18.abrupt("return");
                  case 11:
                    _this39.stopStage4A('first room committed');
                    try {
                      _this39.projectMineRecovery(director, next);
                    } catch (_unused8) {
                      _this39.showRecoveryStop('首房已保存，场景需重新加载。');
                    }
                  case 13:
                  case "end":
                    return _context18.stop();
                }
              }, _callee18, null, [[0, 5]]);
            }));
            return function reveal() {
              return _ref26.apply(this, arguments);
            };
          }();
          void reveal();
        };
        _proto.tap = /*#__PURE__*/function () {
          var _tap = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(i, fromAuto, preview) {
            var _this40 = this,
              _room$rescueCells3,
              _this$trial15,
              _this$trial16,
              _this$trial17;
            var motion, a, fusion, _ref27, groups, _this$boardFx3, _ref28, _ref29, _loop9, _ret5, wave, challenge, result, _this$mineRecovery2, _this$dungeon7, order, old, _this$trial14, director, room, rescued, _this$adventure4, _this$lastFallen2, reward, drop, loot, _yield$Promise$all, played;
            return _regeneratorRuntime().wrap(function _callee19$(_context20) {
              while (1) switch (_context20.prev = _context20.next) {
                case 0:
                  if (fromAuto === void 0) {
                    fromAuto = false;
                  }
                  if (preview === void 0) {
                    preview = false;
                  }
                  if (!(i < 0 || i >= this.board.length || !playableCell(this.board[i]) || this.busy || this.battleModal || !fromAuto && !this.canSelect(i))) {
                    _context20.next = 4;
                    break;
                  }
                  return _context20.abrupt("return");
                case 4:
                  this.clearIdleHint();
                  motion = this.motion;
                  a = this.selected;
                  this.selected = i === a ? -1 : i;
                  if (!(a < 0 || !playableCell(this.board[a]) || !adjacent(a, i) || !this.canChallengeSwap(a, i))) {
                    _context20.next = 11;
                    break;
                  }
                  this.drawBoard();
                  return _context20.abrupt("return");
                case 11:
                  if (!this.stage4A) {
                    _context20.next = 15;
                    break;
                  }
                  _context20.next = 14;
                  return this.stage4ASwap(a, i, preview);
                case 14:
                  return _context20.abrupt("return");
                case 15:
                  if (this.boardFx) this.audio.playTrial('swap');else this.audio.play('swap');
                  this.busy = true;
                  this.battlePhase = 'resolve';
                  this.selected = -1;
                  this.clearGuide();
                  fusion = this.isFusion(a, i);
                  _ref27 = [this.board[i], this.board[a]];
                  this.board[a] = _ref27[0];
                  this.board[i] = _ref27[1];
                  groups = this.challengeMatches(this.board);
                  this.drawBoard();
                  if (!(!preview || groups.length || fusion)) {
                    _context20.next = 29;
                    break;
                  }
                  _context20.next = 29;
                  return Promise.all([this.moveTile(motion, this.tiles[a], i, preview ? .06 : .12), this.moveTile(motion, this.tiles[i], a, preview ? .06 : .12)]);
                case 29:
                  if (!motion.cancelled) {
                    _context20.next = 31;
                    break;
                  }
                  return _context20.abrupt("return");
                case 31:
                  if (!(!groups.length && !fusion)) {
                    _context20.next = 40;
                    break;
                  }
                  _ref28 = [this.board[i], this.board[a]];
                  this.board[a] = _ref28[0];
                  this.board[i] = _ref28[1];
                  if (this.boardFx) this.audio.playTrial('invalid');
                  _context20.next = 38;
                  return Promise.all([this.moveTile(motion, this.tiles[a], a, .12), this.moveTile(motion, this.tiles[i], i, .12), (_this$boardFx3 = this.boardFx) == null ? void 0 : _this$boardFx3.reject(motion, [this.cells[a].position, this.cells[i].position])]);
                case 38:
                  if (!motion.cancelled) this.resumeBattleInput('没有成组，换位已还原');
                  return _context20.abrupt("return");
                case 40:
                  _ref29 = [this.tiles[i], this.tiles[a]];
                  this.tiles[a] = _ref29[0];
                  this.tiles[i] = _ref29[1];
                  if (this.trial) this.trial.moves++;
                  if (this.challenge) {
                    this.challenge.moves++;
                    this.challenge.hitThisTurn = false;
                  }
                  if (this.phase === 'wolves') this.firstSwap = false;
                  this.waveAudit = [];
                  _loop9 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop9() {
                    var _this40$boardFx, _this40$boardFx2, _this40$trial;
                    var plan, removed, _iterator27, _step27, _step27$value, _index11, tier, _iterator28, _step28, _this40$ui$getChildBy, _index12, _iterator29, _step29, group, active, advanced, refill;
                    return _regeneratorRuntime().wrap(function _loop9$(_context19) {
                      while (1) switch (_context19.prev = _context19.next) {
                        case 0:
                          if (_this40.trial) _this40.trial.longestChain = Math.max(_this40.trial.longestChain, wave + 1);
                          _this40.setBattleStatus("\u7B2C " + (wave + 1) + " \u6B21\u8FDE\u9501 \xB7 " + groups.length + " \u7EC4\u6D88\u9664");
                          plan = planWave(groups, function (index) {
                            return _this40.chargedTiles.get(_this40.tiles[index]);
                          }, wave === 0 ? [i, a] : []);
                          removed = plan.removed;
                          if (_this40.boardFx) {
                            _this40.audio.playChain(wave);
                            if (plan.anchors.size) _this40.audio.playTrial('create');
                          } else _this40.audio.play('clear');
                          for (_iterator27 = _createForOfIteratorHelperLoose(plan.created); !(_step27 = _iterator27()).done;) {
                            _step27$value = _step27.value, _index11 = _step27$value[0], tier = _step27$value[1];
                            _this40.markCharged(_index11, tier);
                          }
                          for (_iterator28 = _createForOfIteratorHelperLoose(removed); !(_step28 = _iterator28()).done;) {
                            _index12 = _step28.value;
                            if (_this40.rescueCells["delete"](_index12)) (_this40$ui$getChildBy = _this40.ui.getChildByName('营救标记 ' + _index12)) == null || _this40$ui$getChildBy.destroy();
                          }
                          _context19.next = 9;
                          return Promise.all([_this40.flashTiles(motion, Array.from(plan.matched), removed, false)].concat(Array.from(plan.anchors, function (index) {
                            return _this40.dropCharge(motion, _this40.tiles[index]);
                          }), [(_this40$boardFx = _this40.boardFx) == null ? void 0 : _this40$boardFx.combo(motion, wave + 1, new Vec3(0, 80, 0)), (_this40$boardFx2 = _this40.boardFx) == null ? void 0 : _this40$boardFx2.chargeReady(motion, Array.from(plan.anchors, function (index) {
                            return {
                              position: _this40.cells[index].position
                            };
                          }))]));
                        case 9:
                          if (!motion.cancelled) {
                            _context19.next = 11;
                            break;
                          }
                          return _context19.abrupt("return", {
                            v: void 0
                          });
                        case 11:
                          _context19.t0 = ((_this40$trial = _this40.trial) == null ? void 0 : _this40$trial.id) === 'terrain';
                          if (!_context19.t0) {
                            _context19.next = 16;
                            break;
                          }
                          _context19.next = 15;
                          return _this40.clearTestTerrain(motion, plan.matched, wave + 1);
                        case 15:
                          _context19.t0 = !_context19.sent;
                        case 16:
                          if (!_context19.t0) {
                            _context19.next = 18;
                            break;
                          }
                          return _context19.abrupt("return", {
                            v: void 0
                          });
                        case 18:
                          _context19.next = 20;
                          return _this40.applyBoardMechanismWave(motion, plan);
                        case 20:
                          if (_context19.sent) {
                            _context19.next = 22;
                            break;
                          }
                          return _context19.abrupt("return", {
                            v: void 0
                          });
                        case 22:
                          _context19.t1 = _this40.challenge;
                          if (!_context19.t1) {
                            _context19.next = 27;
                            break;
                          }
                          _context19.next = 26;
                          return _this40.applyTestChallengeWave(motion, plan, wave + 1, fusion && wave === 0 ? [a, i] : []);
                        case 26:
                          _context19.t1 = !_context19.sent;
                        case 27:
                          if (!_context19.t1) {
                            _context19.next = 29;
                            break;
                          }
                          return _context19.abrupt("return", {
                            v: void 0
                          });
                        case 29:
                          if (!plan.columns.size) {
                            _context19.next = 33;
                            break;
                          }
                          if (_this40.trial) _this40.audio.playTrial('charge');else _this40.audio.play('charge');
                          _context19.next = 33;
                          return _this40.flashTiles(motion, plan.propagated, removed, true, Array.from(plan.columns));
                        case 33:
                          if (!motion.cancelled) {
                            _context19.next = 35;
                            break;
                          }
                          return _context19.abrupt("return", {
                            v: void 0
                          });
                        case 35:
                          _iterator29 = _createForOfIteratorHelperLoose(plan.components);
                        case 36:
                          if ((_step29 = _iterator29()).done) {
                            _context19.next = 48;
                            break;
                          }
                          group = _step29.value;
                          active = group.filter(function (index) {
                            return plan.charged.has(index);
                          });
                          advanced = active.some(function (index) {
                            return _this40.chargedTiles.get(_this40.tiles[index]) === 'advanced';
                          });
                          _this40.waveAudit.push({
                            wave: wave + 1,
                            kind: 'COMMAND_STARTED',
                            type: _this40.board[group[0]],
                            group: group.slice(),
                            charged: active.length > 0,
                            advanced: advanced
                          });
                          _context19.next = 43;
                          return _this40.applySkill(motion, _this40.board[group[0]], group.length, wave + 1, active.length > 0, advanced);
                        case 43:
                          if (!motion.cancelled) _this40.waveAudit.push({
                            wave: wave + 1,
                            kind: 'COMMAND_COMPLETED',
                            type: _this40.board[group[0]]
                          });
                          if (!motion.cancelled) {
                            _context19.next = 46;
                            break;
                          }
                          return _context19.abrupt("return", {
                            v: void 0
                          });
                        case 46:
                          _context19.next = 36;
                          break;
                        case 48:
                          _this40.waveAudit.push({
                            wave: wave + 1,
                            kind: 'REFILL_STARTED'
                          });
                          refill = _this40.planBattleRefill(_this40.board, removed);
                          _this40.queueTestSource(refill);
                          _this40.board = refill.board;
                          _context19.next = 54;
                          return _this40.drop(motion, removed, refill);
                        case 54:
                          if (!motion.cancelled) {
                            _context19.next = 56;
                            break;
                          }
                          return _context19.abrupt("return", {
                            v: void 0
                          });
                        case 56:
                          _context19.next = 58;
                          return _this40.releaseMiners(motion);
                        case 58:
                          if (!motion.cancelled) {
                            _context19.next = 60;
                            break;
                          }
                          return _context19.abrupt("return", {
                            v: void 0
                          });
                        case 60:
                          groups = _this40.challengeMatches(_this40.board);
                        case 61:
                        case "end":
                          return _context19.stop();
                      }
                    }, _loop9);
                  });
                  wave = 0;
                case 49:
                  if (!((groups.length || fusion && wave === 0) && wave < (this.challenge ? 64 : 12))) {
                    _context20.next = 57;
                    break;
                  }
                  return _context20.delegateYield(_loop9(), "t0", 51);
                case 51:
                  _ret5 = _context20.t0;
                  if (!_ret5) {
                    _context20.next = 54;
                    break;
                  }
                  return _context20.abrupt("return", _ret5.v);
                case 54:
                  wave++;
                  _context20.next = 49;
                  break;
                case 57:
                  if (!(this.challenge && !groups.length)) {
                    _context20.next = 69;
                    break;
                  }
                  _context20.next = 60;
                  return this.finishChallengeTurn(motion);
                case 60:
                  if (!motion.cancelled) {
                    _context20.next = 62;
                    break;
                  }
                  return _context20.abrupt("return");
                case 62:
                  challenge = this.challenge;
                  if (!(challenge.success || challenge.exhausted || challenge.id === 'no-shuffle' && !this.legalMove())) {
                    _context20.next = 69;
                    break;
                  }
                  result = challenge.success ? 'OBJECTIVE_COMPLETED' : challenge.exhausted ? 'BUDGET_EXHAUSTED' : 'NO_REGENERATION';
                  this.logMechanism({
                    kind: result
                  });
                  _context20.next = 68;
                  return this.repeatTestEncounter(motion);
                case 68:
                  return _context20.abrupt("return");
                case 69:
                  if (!(groups.length || !this.legalMove())) {
                    _context20.next = 95;
                    break;
                  }
                  if (!(((_this$mineRecovery2 = this.mineRecovery) == null ? void 0 : _this$mineRecovery2.state.mineRecovery.source) === 'formal')) {
                    _context20.next = 73;
                    break;
                  }
                  this.stopLegacyMineBoard(groups.length ? 'legacy-wave-limit' : 'no-legal-move');
                  return _context20.abrupt("return");
                case 73:
                  if (this.trial) this.audio.playTrial('shuffle');
                  if (!(this.trial || ((_this$dungeon7 = this.dungeon) == null || (_this$dungeon7 = _this$dungeon7.room) == null ? void 0 : _this$dungeon7.kind) === 'battle' && this.dungeon.room.delivery)) {
                    _context20.next = 93;
                    break;
                  }
                  if (!groups.length) {
                    _context20.next = 78;
                    break;
                  }
                  this.setBattleStatus('连锁尚未完成：暂停诊断，不替换棋盘');
                  return _context20.abrupt("return");
                case 78:
                  order = this.recoverTestBoard();
                  if (order) {
                    _context20.next = 82;
                    break;
                  }
                  this.setBattleStatus('无解恢复未找到保留身份的候选，已暂停');
                  return _context20.abrupt("return");
                case 82:
                  old = this.tiles;
                  this.board = order.map(function (i) {
                    return _this40.board[i];
                  });
                  this.tiles = order.map(function (i) {
                    return old[i];
                  });
                  _context20.next = 87;
                  return Promise.all(this.tiles.map(function (tile, i) {
                    return _this40.moveTile(motion, tile, i, .22);
                  }));
                case 87:
                  _context20.next = 89;
                  return this.releaseMiners(motion);
                case 89:
                  if (!motion.cancelled) {
                    _context20.next = 91;
                    break;
                  }
                  return _context20.abrupt("return");
                case 91:
                  _context20.next = 95;
                  break;
                case 93:
                  this.board = newBoard(this.types, (_this$trial14 = this.trial) == null ? void 0 : _this$trial14.random);
                  this.buildTiles();
                case 95:
                  director = this.dungeon;
                  room = director == null ? void 0 : director.room;
                  rescued = (room == null ? void 0 : room.kind) === 'battle' && (!!((_room$rescueCells3 = room.rescueCells) != null && _room$rescueCells3.length) && !this.rescueCells.size || !!room.delivery && this.rescuedMiners >= room.delivery.required);
                  if (!(this.enemies.every(function (hp) {
                    return hp <= 0;
                  }) || rescued || ((_this$trial15 = this.trial) == null ? void 0 : _this$trial15.id) === 'terrain' && !this.terrain.size || ((_this$trial16 = this.trial) == null ? void 0 : _this$trial16.id) === 'rocks' && !this.rocks.size || ((_this$trial17 = this.trial) == null ? void 0 : _this$trial17.id) === 'jelly' && this.jelly.size === this.board.length)) {
                    _context20.next = 126;
                    break;
                  }
                  _context20.t1 = (room == null ? void 0 : room.kind) === 'battle' && room.delivery;
                  if (!_context20.t1) {
                    _context20.next = 104;
                    break;
                  }
                  _context20.next = 103;
                  return this.retireRoomMiners(motion);
                case 103:
                  _context20.t1 = !_context20.sent;
                case 104:
                  if (!_context20.t1) {
                    _context20.next = 106;
                    break;
                  }
                  return _context20.abrupt("return");
                case 106:
                  if (!this.trial) {
                    _context20.next = 110;
                    break;
                  }
                  _context20.next = 109;
                  return this.repeatTestEncounter(motion);
                case 109:
                  return _context20.abrupt("return");
                case 110:
                  if (!this.mineRecovery) {
                    _context20.next = 113;
                    break;
                  }
                  if (this.mineRecovery.state.mineRecovery.source === 'formal' && director && room) {
                    this.setBattleStatus(rescued ? '营救成功' : '战斗结束');
                    this.battlePhase = 'complete';
                    this.automatic = false;
                    this.commitLegacyMineVictory(director, room);
                  } else this.showRecoveryStop('测试快照的后继奖励未启用。');
                  return _context20.abrupt("return");
                case 113:
                  if (this.dungeon) this.carriedBoard = {
                    director: this.dungeon,
                    types: this.types.join(','),
                    board: this.board.slice(),
                    charged: this.tiles.flatMap(function (tile, index) {
                      var tier = _this40.chargedTiles.get(tile);
                      return tier ? [[index, tier]] : [];
                    }),
                    ids: this.tiles.map(function (tile) {
                      var _this40$restoredTileI;
                      return (_this40$restoredTileI = _this40.restoredTileIds.get(tile)) != null ? _this40$restoredTileI : crypto.randomUUID();
                    })
                  };
                  if (rescued) this.setBattleStatus('营救成功');
                  this.battlePhase = 'complete';
                  if (!(director && (room == null ? void 0 : room.kind) === 'battle')) {
                    _context20.next = 125;
                    break;
                  }
                  reward = battleCoinReward(room, (_this$adventure4 = this.adventure) == null ? void 0 : _this$adventure4.id);
                  drop = (_this$lastFallen2 = this.lastFallen) != null ? _this$lastFallen2 : {
                    origin: new Vec3(rescued ? 72 : 132, stageGrid.groundY + 30),
                    ground: stageGrid.groundY
                  };
                  loot = this.adventure && !this.trial ? this.battleMaterials(this.adventure.id, room) : {};
                  _context20.next = 122;
                  return Promise.all([this.animateCoins(motion, reward, this.coinText, drop.origin, drop.ground), this.showMaterials(motion, loot, drop.origin)]);
                case 122:
                  _yield$Promise$all = _context20.sent;
                  played = _yield$Promise$all[0];
                  if (played) this.victory(director, room, reward);
                case 125:
                  return _context20.abrupt("return");
                case 126:
                  _context20.next = 128;
                  return this.enemyTurn(motion);
                case 128:
                case "end":
                  return _context20.stop();
              }
            }, _callee19, this);
          }));
          function tap(_x15, _x16, _x17) {
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
          var _dropCharge = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(motion, tile) {
            var children, _iterator30, _step30, _step30$value, child, home;
            return _regeneratorRuntime().wrap(function _callee20$(_context21) {
              while (1) switch (_context21.prev = _context21.next) {
                case 0:
                  if (!motion.reduced) {
                    _context21.next = 2;
                    break;
                  }
                  return _context21.abrupt("return");
                case 2:
                  children = tile.children.map(function (child) {
                    return {
                      child: child,
                      home: child.position.clone()
                    };
                  });
                  for (_iterator30 = _createForOfIteratorHelperLoose(children); !(_step30 = _iterator30()).done;) {
                    _step30$value = _step30.value, child = _step30$value.child, home = _step30$value.home;
                    child.setPosition(home.x, home.y + 13, home.z);
                    child.setScale(.86, 1.10, 1);
                  }
                  _context21.next = 6;
                  return Promise.all(children.map(function (_ref30) {
                    var child = _ref30.child,
                      home = _ref30.home;
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
                  return _context21.stop();
              }
            }, _callee20);
          }));
          function dropCharge(_x18, _x19) {
            return _dropCharge.apply(this, arguments);
          }
          return dropCharge;
        }();
        _proto.flashTiles = /*#__PURE__*/function () {
          var _flashTiles = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21(motion, indices, removed, propagated, columns) {
            var _this41 = this;
            var cleared, moves, palette, points, lanes, effects, _loop10, _iterator31, _step31;
            return _regeneratorRuntime().wrap(function _callee21$(_context23) {
              while (1) switch (_context23.prev = _context23.next) {
                case 0:
                  if (columns === void 0) {
                    columns = [];
                  }
                  cleared = indices.filter(function (index) {
                    return removed.has(index);
                  });
                  moves = indices.map(function (index) {
                    var _tile$getComponent;
                    var tile = _this41.tiles[index];
                    var opacity = (_tile$getComponent = tile.getComponent(UIOpacity)) != null ? _tile$getComponent : tile.addComponent(UIOpacity);
                    return motion.play(tween(opacity).set({
                      opacity: 160
                    }).delay(motion.duration(.095)).set({
                      opacity: removed.has(index) ? 0 : 255
                    }));
                  });
                  if (!this.boardFx) {
                    _context23.next = 10;
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
                    var _palette$_this41$boar;
                    return {
                      position: _this41.cells[index].position,
                      color: Color.fromHEX(new Color(), (_palette$_this41$boar = palette[_this41.board[index]]) != null ? _palette$_this41$boar : '#fff0c2')
                    };
                  });
                  lanes = columns.map(function (col) {
                    return {
                      from: _this41.cells[col].position,
                      to: _this41.cells[_this41.cells.length - cols + col].position
                    };
                  });
                  _context23.next = 9;
                  return Promise.all([].concat(moves, [this.boardFx.clear(motion, points, propagated ? 'charge' : 'match', lanes)]));
                case 9:
                  return _context23.abrupt("return");
                case 10:
                  effects = cleared.slice(0, 8).flatMap(function (index) {
                    var p = _this41.cells[index].position;
                    return _this41.burst(motion, p.x, p.y, propagated ? '#c196ff' : '#fcd687', 3);
                  });
                  _loop10 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop10() {
                    var col, first, last, beam, opacity;
                    return _regeneratorRuntime().wrap(function _loop10$(_context22) {
                      while (1) switch (_context22.prev = _context22.next) {
                        case 0:
                          col = _step31.value;
                          first = _this41.cells[col].position;
                          last = _this41.cells[_this41.cells.length - cols + col].position;
                          beam = _this41.box('整列传导', first.x, (first.y + last.y) / 2, 17, first.y - last.y + 45, '#ffcf68');
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
                          return _context22.stop();
                      }
                    }, _loop10);
                  });
                  _iterator31 = _createForOfIteratorHelperLoose(columns);
                case 13:
                  if ((_step31 = _iterator31()).done) {
                    _context23.next = 17;
                    break;
                  }
                  return _context23.delegateYield(_loop10(), "t0", 15);
                case 15:
                  _context23.next = 13;
                  break;
                case 17:
                  _context23.next = 19;
                  return Promise.all([].concat(moves, effects));
                case 19:
                case "end":
                  return _context23.stop();
              }
            }, _callee21, this);
          }));
          function flashTiles(_x20, _x21, _x22, _x23, _x24) {
            return _flashTiles.apply(this, arguments);
          }
          return flashTiles;
        }();
        _proto.castSkillEffect = /*#__PURE__*/function () {
          var _castSkillEffect = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22(motion, at, advanced) {
            var ring, shape, flash, ink, light;
            return _regeneratorRuntime().wrap(function _callee22$(_context24) {
              while (1) switch (_context24.prev = _context24.next) {
                case 0:
                  ring = this.box('技能蓄力光环', at.x, at.y, 138, 138);
                  shape = ring.addComponent(Graphics);
                  shape.strokeColor = Color.fromHEX(new Color(), advanced ? '#ffd464' : '#a9eaff');
                  shape.lineWidth = 5;
                  shape.circle(0, 0, 56);
                  shape.stroke();
                  _context24.next = 8;
                  return motion.play(tween(ring).to(advanced ? .34 : .19, {
                    scale: new Vec3(.43, .43, 1)
                  }, {
                    easing: 'quadIn'
                  }));
                case 8:
                  ring.destroy();
                  if (!(!advanced || motion.cancelled)) {
                    _context24.next = 11;
                    break;
                  }
                  return _context24.abrupt("return");
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
                  _context24.next = 25;
                  return motion.play(tween(light).to(.10, {
                    opacity: 15
                  }).delay(.10).to(.06, {
                    opacity: 0
                  }));
                case 25:
                  flash.destroy();
                case 26:
                case "end":
                  return _context24.stop();
              }
            }, _callee22, this);
          }));
          function castSkillEffect(_x25, _x26, _x27) {
            return _castSkillEffect.apply(this, arguments);
          }
          return castSkillEffect;
        }();
        _proto.focusCombat = function focusCombat(motion, actors) {
          var _this42 = this;
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
          var activeHeroes = actors.filter(function (actor) {
            return Array.from(_this42.heroes.values()).includes(actor);
          });
          var activeEnemies = actors.filter(function (actor) {
            return _this42.enemyNodes.includes(actor);
          });
          var faded = [];
          var fades = [];
          var fade = function fade(alpha, value) {
            var animation = tween(alpha).to(.07, {
              opacity: value
            });
            fades.push(animation);
            void motion.play(animation);
          };
          var peers = activeHeroes.length || activeEnemies.length ? Array.from(this.heroes.values()).concat(this.enemyNodes) : [];
          for (var _iterator32 = _createForOfIteratorHelperLoose(peers), _step32; !(_step32 = _iterator32()).done;) {
            var _peer$getComponent;
            var peer = _step32.value;
            if (!(peer != null && peer.isValid) || actors.includes(peer)) continue;
            var alpha = (_peer$getComponent = peer.getComponent(UIOpacity)) != null ? _peer$getComponent : peer.addComponent(UIOpacity);
            faded.push({
              alpha: alpha,
              value: alpha.opacity
            });
            fade(alpha, alpha.opacity * .5);
          }
          var bright = new Set();
          if (activeHeroes.length) {
            bright.add(this.healthBar.root);
            if (this.showsGuard) bright.add(this.guardBar.root);
          }
          for (var _iterator33 = _createForOfIteratorHelperLoose(activeEnemies), _step33; !(_step33 = _iterator33()).done;) {
            var actor = _step33.value;
            var _index13 = this.enemyNodes.indexOf(actor);
            if (this.enemyMeters[_index13]) bright.add(this.enemyMeters[_index13].root);
          }
          // Status emphasis is symmetric: only the acting/receiving faction stays clear.
          var mutedHUD = [];
          var hudColors = [];
          var meters = [this.healthBar, this.guardBar].concat(this.enemyMeters);
          for (var _iterator34 = _createForOfIteratorHelperLoose(meters), _step34; !(_step34 = _iterator34()).done;) {
            var meter = _step34.value;
            if (!(meter != null && meter.root.activeInHierarchy) || bright.has(meter.root)) continue;
            var cover = this.box('非参与状态遮蔽', 0, 0, meter.width + 6, 25, undefined, meter.root);
            var _ink = cover.addComponent(Graphics);
            _ink.fillColor = new Color(8, 11, 19, 205);
            _ink.roundRect(-(meter.width + 6) / 2, -12.5, meter.width + 6, 25, 12.5);
            _ink.fill();
            mutedHUD.push(cover);
            for (var _i12 = 0, _arr4 = [].concat(meter.root.getComponentsInChildren(Label), meter.root.getComponentsInChildren(Sprite)); _i12 < _arr4.length; _i12++) {
              var component = _arr4[_i12];
              var color = component.color.clone(),
                outline = component instanceof Label ? component.outlineColor.clone() : undefined;
              hudColors.push({
                component: component,
                color: color,
                outline: outline
              });
              component.color = new Color(color.r * .22, color.g * .22, color.b * .22, color.a);
              if (component instanceof Label) component.outlineColor = new Color(8, 11, 19, color.a);
            }
          }
          for (var _iterator35 = _createForOfIteratorHelperLoose(this.ui.children), _step35; !(_step35 = _iterator35()).done;) {
            var _this$stageContent, _node$getComponent2;
            var node = _step35.value;
            if (node === ((_this$stageContent = this.stageContent) == null ? void 0 : _this$stageContent.parent) || node === this.popupLayer || bright.has(node) || node.position.y < 175) continue;
            if (Array.from(this.heroes.values()).includes(node)) continue;
            var _alpha = (_node$getComponent2 = node.getComponent(UIOpacity)) != null ? _node$getComponent2 : node.addComponent(UIOpacity);
            faded.push({
              alpha: _alpha,
              value: _alpha.opacity
            });
            fade(_alpha, _alpha.opacity * .4);
          }
          for (var _iterator36 = _createForOfIteratorHelperLoose(actors), _step36; !(_step36 = _iterator36()).done;) {
            var _actor = _step36.value;
            _actor.setSiblingIndex(layer.children.length - 1);
          }
          return function () {
            for (var _i9 = 0, _hudColors = hudColors; _i9 < _hudColors.length; _i9++) {
              var _hudColors$_i = _hudColors[_i9],
                component = _hudColors$_i.component,
                color = _hudColors$_i.color,
                outline = _hudColors$_i.outline;
              if (component.isValid) {
                component.color = color;
                if (outline && component instanceof Label) component.outlineColor = outline;
              }
            }
            for (var _i10 = 0, _mutedHUD = mutedHUD; _i10 < _mutedHUD.length; _i10++) {
              var cover = _mutedHUD[_i10];
              if (cover.isValid) {
                cover.removeFromParent();
                cover.destroy();
              }
            }
            fades.forEach(function (animation) {
              return motion.stop(animation);
            });
            for (var _i11 = 0, _faded = faded; _i11 < _faded.length; _i11++) {
              var _faded$_i = _faded[_i11],
                alpha = _faded$_i.alpha,
                value = _faded$_i.value;
              if (alpha.isValid) alpha.opacity = value;
            }
            if (shade.isValid) {
              shade.removeFromParent();
              shade.destroy();
            }
            if (layer.isValid) order.forEach(function (node, index) {
              if (node.isValid && node.parent === layer) node.setSiblingIndex(index);
            });
          };
        };
        _proto.applySkill = /*#__PURE__*/function () {
          var _applySkill = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23(motion, type, length, chain, charged, advanced) {
            var _this43 = this;
            var owner, tutorial, attack, skill, actor, _actor$position$x, _actor$position$y, restore, _actor$position, cap, beforeDP, before, gained, unit, position, color, followup, tags, primary, splash, targets, hit, _iterator37, _step37, target, _enemy, home, restoreFocus, _ref31, _enemy$getChildByName3, _enemy$getChildByName4, origin, _enemy$getChildByName, _enemy$getChildByName2, _actor$getChildByName3, _actor$getChildByName4, _origin, enemyGround, footOffset, arrived, immune, raw, stun, layers, afterArmor, damage, fallen, number, armor, effects, flinch, _enemy$getComponent;
            return _regeneratorRuntime().wrap(function _callee23$(_context25) {
              while (1) switch (_context25.prev = _context25.next) {
                case 0:
                  if (advanced === void 0) {
                    advanced = false;
                  }
                  if (!this.enemies.every(function (hp) {
                    return hp <= 0;
                  })) {
                    _context25.next = 3;
                    break;
                  }
                  return _context25.abrupt("return");
                case 3:
                  owner = skillOwner(type);
                  tutorial = this.isTutorialBattle();
                  attack = tutorial ? owner === 'h' ? 12 : 26 : this.heroAttack(owner);
                  skill = planOathSkill(type, length, chain, advanced ? 'advanced' : charged ? 'skill' : undefined, attack, this.dp >= this.maxDP, this.oath, function (id) {
                    return _this43.inventory.hasEquipped(id);
                  }, function (id) {
                    return _this43.buff(id);
                  });
                  actor = this.heroes.get(owner);
                  _context25.t0 = actor;
                  if (!_context25.t0) {
                    _context25.next = 13;
                    break;
                  }
                  _context25.next = 12;
                  return this.skillWindup(motion, actor, skill.name, advanced);
                case 12:
                  _context25.t0 = !_context25.sent;
                case 13:
                  if (!_context25.t0) {
                    _context25.next = 15;
                    break;
                  }
                  return _context25.abrupt("return");
                case 15:
                  if (!(charged && actor && !motion.reduced)) {
                    _context25.next = 20;
                    break;
                  }
                  _context25.next = 18;
                  return this.castSkillEffect(motion, actor.position, advanced);
                case 18:
                  if (!motion.cancelled) {
                    _context25.next = 20;
                    break;
                  }
                  return _context25.abrupt("return");
                case 20:
                  if (!(skill.kind === 'rally')) {
                    _context25.next = 28;
                    break;
                  }
                  applyBattleCry(this.oath, skill.multiplier, skill.boost);
                  this.syncBuffViews();
                  this.setBattleStatus('战吼：下一次攻击增伤');
                  this.audio.play('charge');
                  _context25.next = 27;
                  return Promise.all(this.burst(motion, (_actor$position$x = actor == null ? void 0 : actor.position.x) != null ? _actor$position$x : -70, (_actor$position$y = actor == null ? void 0 : actor.position.y) != null ? _actor$position$y : 270, '#ffbc60', 6));
                case 27:
                  return _context25.abrupt("return");
                case 28:
                  if (!(skill.kind === 'heal' || skill.kind === 'guard')) {
                    _context25.next = 48;
                    break;
                  }
                  restore = actor ? this.focusCombat(motion, [actor]) : function () {};
                  _context25.prev = 30;
                  cap = skill.kind === 'heal' ? this.maxHP : this.maxDP;
                  beforeDP = this.dp;
                  before = skill.kind === 'heal' ? this.hp : this.dp;
                  gained = Math.min(cap - before, skill.amount);
                  if (skill.kind === 'heal') {
                    this.hp += gained;
                    if (!tutorial && this.inventory.hasEquipped('healcore')) {
                      this.dp = Math.min(this.maxDP, this.dp + Math.round((skill.amount - gained) * (.35 + .2 * this.buff('overflow'))));
                    }
                  } else {
                    this.dp += gained;
                    if (skill.resist) this.oath.guard = true;
                  }
                  unit = skill.kind === 'heal' ? 'HP' : 'DP';
                  this.setBattleStatus(skill.name + " \xB7 +" + gained + " " + unit);
                  this.updateHUD();
                  this.audio.play('charge');
                  position = (_actor$position = actor == null ? void 0 : actor.position) != null ? _actor$position : new Vec3(-70, 270, 0);
                  if (skill.kind === 'heal' && this.dp > beforeDP) void this.combatPopup(motion, '+' + (this.dp - beforeDP) + ' DP', position.x + 24, position.y + 16, '#90aec4', 27);
                  color = skill.kind === 'heal' ? '#81f4a4' : '#8bcbff';
                  _context25.next = 45;
                  return Promise.all([this.combatPopup(motion, '+' + gained + ' ' + unit, position.x, position.y, skill.kind === 'heal' ? advanced ? '#27934b' : '#adf4b0' : advanced ? '#385a78' : '#90aec4', advanced ? 38 : 27), this.supportHalo(motion, position, color)].concat(this.burst(motion, position.x, position.y, color, 6)));
                case 45:
                  _context25.prev = 45;
                  restore();
                  return _context25.finish(45);
                case 48:
                  followup = skill.kind === 'guard' ? skill.followup : undefined;
                  if (!(skill.kind !== 'attack' && followup === undefined)) {
                    _context25.next = 51;
                    break;
                  }
                  return _context25.abrupt("return");
                case 51:
                  tags = this.foes.map(function (foe) {
                    var _foe$tags;
                    return (_foe$tags = foe.tags) != null ? _foe$tags : [];
                  });
                  primary = selectTargets(this.enemies, tags, skill.kind === 'attack' ? skill.target : 'front');
                  if (skill.kind === 'attack' && primary.length) this.oath.rally = 1;
                  splash = skill.kind === 'attack' ? skill.splash : undefined;
                  targets = splash === undefined ? primary : primary.concat(this.enemies.flatMap(function (hp, i) {
                    return hp > 0 && !primary.includes(i) ? [i] : [];
                  }));
                  hit = 0;
                case 57:
                  if (!(hit < (skill.kind === 'attack' ? skill.hits : 1))) {
                    _context25.next = 120;
                    break;
                  }
                  _iterator37 = _createForOfIteratorHelperLoose(targets);
                case 59:
                  if ((_step37 = _iterator37()).done) {
                    _context25.next = 117;
                    break;
                  }
                  target = _step37.value;
                  if (!(this.enemies[target] <= 0)) {
                    _context25.next = 63;
                    break;
                  }
                  return _context25.abrupt("continue", 115);
                case 63:
                  _enemy = this.enemyNodes[target];
                  home = _enemy.position.clone();
                  restoreFocus = this.focusCombat(motion, actor ? [_enemy, actor] : [_enemy]);
                  _context25.prev = 66;
                  if (!(type === 'stone' || type === 'm')) {
                    _context25.next = 75;
                    break;
                  }
                  origin = actor ? this.emissionPoint(actor) : new Vec3(-70, 270, 0);
                  _context25.next = 71;
                  return this.flyProjectile(motion, type, origin, home);
                case 71:
                  if (_context25.sent) {
                    _context25.next = 73;
                    break;
                  }
                  return _context25.abrupt("return");
                case 73:
                  _context25.next = 85;
                  break;
                case 75:
                  if (!actor) {
                    _context25.next = 85;
                    break;
                  }
                  _origin = actor.position.clone();
                  enemyGround = home.y + ((_enemy$getChildByName = (_enemy$getChildByName2 = _enemy.getChildByName('脚底投影')) == null ? void 0 : _enemy$getChildByName2.position.y) != null ? _enemy$getChildByName : -34);
                  footOffset = (_actor$getChildByName3 = (_actor$getChildByName4 = actor.getChildByName('脚底投影')) == null ? void 0 : _actor$getChildByName4.position.y) != null ? _actor$getChildByName3 : -34;
                  _context25.next = 81;
                  return motion.play(tween(actor).to(motion.duration(.105), {
                    position: new Vec3(home.x - 36, enemyGround - footOffset, 0)
                  }, {
                    easing: 'sineInOut'
                  }));
                case 81:
                  arrived = _context25.sent;
                  if (arrived) {
                    _context25.next = 84;
                    break;
                  }
                  return _context25.abrupt("return");
                case 84:
                  void motion.play(tween(actor).to(motion.duration(.18), {
                    position: _origin
                  }, {
                    easing: 'quadOut'
                  }));
                case 85:
                  if (!motion.cancelled) {
                    _context25.next = 87;
                    break;
                  }
                  return _context25.abrupt("return");
                case 87:
                  immune = tags[target].some(function (tag) {
                    return tag === 'boss' || tag === 'stun-immune';
                  });
                  raw = skill.kind === 'attack' ? primary.includes(target) ? skill.damage : splash : followup;
                  stun = skill.kind === 'attack' && skill.stun;
                  layers = this.foes[target].armor;
                  afterArmor = oathDamage(this.oath, String(target), raw, (_ref31 = type === 'm' ? layers == null ? void 0 : layers.magic : layers == null ? void 0 : layers.physical) != null ? _ref31 : 0, type === 'm');
                  damage = Math.min(this.enemies[target], Math.round(afterArmor * (stun && immune ? 1.25 : 1)));
                  this.enemies[target] -= damage;
                  if (this.enemies[target] > 0 && skill.kind === 'attack') {
                    if (skill.shred) this.oath.shred[String(target)] = this.turn + 1;
                    if (skill.weaken && !this.oath.weaken.includes(String(target))) this.oath.weaken.push(String(target));
                    if (stun && !immune) this.stunned.add(target);
                  }
                  this.setBattleStatus(skill.name + " \xB7 " + this.foes[target].name + " \u2212" + damage);
                  this.updateHUD();
                  this.audio.play('hit');
                  fallen = this.enemies[target] === 0;
                  if (fallen) this.questEvent('kill', this.foes[target].art);
                  if (fallen) this.lastFallen = {
                    origin: home,
                    ground: home.y + ((_enemy$getChildByName3 = (_enemy$getChildByName4 = _enemy.getChildByName('脚底投影')) == null ? void 0 : _enemy$getChildByName4.position.y) != null ? _enemy$getChildByName3 : -34)
                  };
                  number = this.combatPopup(motion, '−' + damage, home.x, home.y, type === 'm' ? advanced ? '#da4cae' : '#8b92f6' : advanced ? '#ffd057' : '#ffffff', advanced ? 38 : 27);
                  armor = tags[target].includes('armor');
                  effects = this.burst(motion, home.x, home.y, armor ? '#ffde86' : type === 'm' ? '#d4a6ff' : '#ffb784', 6);
                  effects.push(this.hitReaction(motion, _enemy));
                  flinch = tween(_enemy).to(motion.duration(.065), {
                    position: new Vec3(home.x + 11, home.y, 0)
                  }).to(motion.duration(.10), {
                    position: home
                  });
                  if (fallen) {
                    (_enemy$getComponent = _enemy.getComponent(UIOpacity)) != null ? _enemy$getComponent : _enemy.addComponent(UIOpacity);
                    effects.push(this.fadeActor(motion, _enemy));
                  }
                  _context25.next = 109;
                  return Promise.all([number, motion.play(flinch)].concat(effects));
                case 109:
                  if (!motion.cancelled) {
                    _context25.next = 111;
                    break;
                  }
                  return _context25.abrupt("return");
                case 111:
                  if (fallen) {
                    _enemy.active = false;
                    this.enemyMeters[target].root.active = false;
                  }
                case 112:
                  _context25.prev = 112;
                  restoreFocus();
                  return _context25.finish(112);
                case 115:
                  _context25.next = 59;
                  break;
                case 117:
                  hit++;
                  _context25.next = 57;
                  break;
                case 120:
                case "end":
                  return _context25.stop();
              }
            }, _callee23, this, [[30,, 45, 48], [66,, 112, 115]]);
          }));
          function applySkill(_x28, _x29, _x30, _x31, _x32, _x33) {
            return _applySkill.apply(this, arguments);
          }
          return applySkill;
        }();
        _proto.presentRecovery = /*#__PURE__*/function () {
          var _presentRecovery = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24(kind, commit) {
            var root, motion, before, cap, meter, alpha, _this$coinText, _actor$position$x2, _actor$position$y2, after, actor;
            return _regeneratorRuntime().wrap(function _callee24$(_context26) {
              while (1) switch (_context26.prev = _context26.next) {
                case 0:
                  if (!this.recoveryPlaying) {
                    _context26.next = 2;
                    break;
                  }
                  return _context26.abrupt("return");
                case 2:
                  this.recoveryPlaying = true;
                  root = this.ui, motion = this.newPageMotion();
                  before = kind === 'hp' ? this.hp : this.dp, cap = kind === 'hp' ? this.maxHP : this.maxDP;
                  meter = this.makeMeter(-stageGrid.meterX, kind === 'hp' ? stageGrid.hpY : stageGrid.secondaryY, 139, kind === 'hp' ? '#7ecb82' : '#63b5df');
                  this.setMeter(meter, before, cap, String(before));
                  alpha = meter.root.addComponent(UIOpacity);
                  alpha.opacity = 0;
                  _context26.prev = 9;
                  _context26.next = 12;
                  return motion.play(tween(alpha).to(.35, {
                    opacity: 255
                  }));
                case 12:
                  _context26.t0 = !_context26.sent;
                  if (_context26.t0) {
                    _context26.next = 15;
                    break;
                  }
                  _context26.t0 = this.ui !== root;
                case 15:
                  if (!_context26.t0) {
                    _context26.next = 17;
                    break;
                  }
                  return _context26.abrupt("return");
                case 17:
                  if (commit()) {
                    _context26.next = 19;
                    break;
                  }
                  return _context26.abrupt("return");
                case 19:
                  if ((_this$coinText = this.coinText) != null && _this$coinText.isValid) this.coinText.string = String(this.walletGold);
                  after = kind === 'hp' ? this.hp : this.dp;
                  this.setMeter(meter, after, kind === 'hp' ? this.maxHP : this.maxDP, String(after));
                  this.audio.play('charge');
                  actor = Array.from(this.heroes.values())[0];
                  _context26.next = 26;
                  return this.combatPopup(motion, '+' + (after - before) + ' ' + kind.toUpperCase(), (_actor$position$x2 = actor == null ? void 0 : actor.position.x) != null ? _actor$position$x2 : -90, (_actor$position$y2 = actor == null ? void 0 : actor.position.y) != null ? _actor$position$y2 : 245, kind === 'hp' ? '#adf4b0' : '#90aec4');
                case 26:
                  if (motion.cancelled) {
                    _context26.next = 29;
                    break;
                  }
                  _context26.next = 29;
                  return motion.play(tween(alpha).delay(.65).to(.4, {
                    opacity: 0
                  }));
                case 29:
                  _context26.prev = 29;
                  if (meter.root.isValid) meter.root.destroy();
                  this.pageMotions["delete"](motion);
                  this.recoveryPlaying = false;
                  return _context26.finish(29);
                case 34:
                case "end":
                  return _context26.stop();
              }
            }, _callee24, this, [[9,, 29, 34]]);
          }));
          function presentRecovery(_x34, _x35) {
            return _presentRecovery.apply(this, arguments);
          }
          return presentRecovery;
        }();
        _proto.ensurePopupLayer = function ensurePopupLayer() {
          var _this$popupLayer;
          if (!((_this$popupLayer = this.popupLayer) != null && _this$popupLayer.isValid) || this.popupLayer.parent !== this.ui) this.popupLayer = this.box('500 跳字层', 0, 0, 480, 854);
          this.popupLayer.setSiblingIndex(this.ui.children.length - 1);
          return this.popupLayer;
        };
        _proto.skillCallout = function skillCallout(motion, name, position, advanced) {
          var layer = this.ensurePopupLayer();
          var label = this.outline(this.label(name, Math.max(-130, Math.min(130, position.x)), Math.min(335, position.y + 60), 270, advanced ? 25 : 22, layer));
          label.isBold = true;
          label.color = Color.fromHEX(new Color(), advanced ? '#ffe296' : '#fff3d2');
          label.node.name = '技能喊招 ' + name;
          var opacity = label.node.addComponent(UIOpacity);
          opacity.opacity = 0;
          return motion.play(tween(opacity).to(motion.duration(.10), {
            opacity: 255
          }).delay(motion.duration(.95)).to(motion.duration(.22), {
            opacity: 0
          }))["finally"](function () {
            if (label.node.isValid) label.node.destroy();
          });
        };
        _proto.lowHealthFlash = /*#__PURE__*/function () {
          var _lowHealthFlash = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee25(motion) {
            var board, home;
            return _regeneratorRuntime().wrap(function _callee25$(_context27) {
              while (1) switch (_context27.prev = _context27.next) {
                case 0:
                  this.audio.play('hurt');
                  if (!(motion.reduced || motion.cancelled)) {
                    _context27.next = 3;
                    break;
                  }
                  return _context27.abrupt("return", true);
                case 3:
                  board = this.tileLayer;
                  if (board != null && board.isValid) {
                    _context27.next = 6;
                    break;
                  }
                  return _context27.abrupt("return", false);
                case 6:
                  home = board.position.clone();
                  return _context27.abrupt("return", motion.play(tween(board).by(.04, {
                    position: new Vec3(-3, 0, 0)
                  }).by(.06, {
                    position: new Vec3(6, 0, 0)
                  }).to(.08, {
                    position: home
                  })));
                case 8:
                case "end":
                  return _context27.stop();
              }
            }, _callee25, this);
          }));
          function lowHealthFlash(_x36) {
            return _lowHealthFlash.apply(this, arguments);
          }
          return lowHealthFlash;
        }();
        _proto.hitReaction = /*#__PURE__*/function () {
          var _hitReaction = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee26(motion, actor) {
            var _this44 = this;
            var portrait, impact, alpha, sprite, material, state, update;
            return _regeneratorRuntime().wrap(function _callee26$(_context28) {
              while (1) switch (_context28.prev = _context28.next) {
                case 0:
                  if (!(motion.reduced || motion.cancelled)) {
                    _context28.next = 2;
                    break;
                  }
                  return _context28.abrupt("return", true);
                case 2:
                  portrait = actor.children.find(function (node) {
                    return node.getComponent(Sprite);
                  });
                  impact = this.art('combat-impact', actor.position.x, actor.position.y, 96, 80);
                  alpha = impact == null ? void 0 : impact.addComponent(UIOpacity);
                  sprite = portrait == null ? void 0 : portrait.getComponent(Sprite);
                  material = sprite ? this.actorMaterial(sprite) : undefined;
                  state = {
                    flash: 1
                  };
                  update = function update() {
                    if (sprite) _this44.setActorState(sprite, {
                      flash: state.flash
                    });
                  };
                  update();
                  _context28.prev = 10;
                  _context28.next = 13;
                  return Promise.all([motion.play(tween(actor).to(.055, {
                    scale: new Vec3(1.12, .90, 1)
                  }).to(.12, {
                    scale: new Vec3(1, 1, 1)
                  })), material ? motion.play(tween(state).to(.12, {
                    flash: 0
                  }, {
                    onUpdate: update
                  })) : Promise.resolve(true), alpha ? motion.play(tween(alpha).to(.18, {
                    opacity: 0
                  })) : Promise.resolve(true)]).then(function (results) {
                    return results.every(Boolean);
                  });
                case 13:
                  return _context28.abrupt("return", _context28.sent);
                case 14:
                  _context28.prev = 14;
                  if (material && sprite != null && sprite.isValid) this.setActorState(sprite, {
                    flash: 0
                  });
                  impact == null || impact.destroy();
                  return _context28.finish(14);
                case 18:
                case "end":
                  return _context28.stop();
              }
            }, _callee26, this, [[10,, 14, 18]]);
          }));
          function hitReaction(_x37, _x38) {
            return _hitReaction.apply(this, arguments);
          }
          return hitReaction;
        }();
        _proto.setActorState = function setActorState(sprite, patch) {
          var _this$actorStates$get, _actorArt$sprite$node, _actorArt$sprite$node2, _sprite$customMateria;
          var state = (_this$actorStates$get = this.actorStates.get(sprite)) != null ? _this$actorStates$get : {
            flash: 0,
            tone: 1,
            fade: 1,
            base: (_actorArt$sprite$node = (_actorArt$sprite$node2 = actorArt[sprite.node.name]) == null ? void 0 : _actorArt$sprite$node2.baseOpacity) != null ? _actorArt$sprite$node : 1
          };
          Object.assign(state, patch);
          this.actorStates.set(sprite, state);
          (_sprite$customMateria = sprite.customMaterial) == null || _sprite$customMateria.setProperty('state', new Vec4(state.flash, state.tone, state.tone, state.base * state.fade));
        };
        _proto.actorMaterial = function actorMaterial(sprite) {
          var _sprite$customMateria2;
          if (!this.actorEffect) return undefined;
          if (((_sprite$customMateria2 = sprite.customMaterial) == null ? void 0 : _sprite$customMateria2.effectAsset) === this.actorEffect) return sprite.customMaterial;
          var material = new Material();
          material.initialize({
            effectAsset: this.actorEffect,
            defines: {
              USE_TEXTURE: true
            }
          });
          sprite.customMaterial = material;
          this.setActorState(sprite, {});
          sprite.node.once(Node.EventType.NODE_DESTROYED, function () {
            return material.destroy();
          });
          return material;
        }

        // Kept as a no-op for the frozen historical presenter; live death uses fadeActor.
        ;

        _proto.soulRise = function soulRise(_motion, _home) {
          return Promise.resolve(true);
        };
        _proto.fadeActor = /*#__PURE__*/function () {
          var _fadeActor = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee27(motion, actor) {
            var _actor$children$find,
              _actorArt$baseOpacity,
              _actorArt,
              _sprite$node$name,
              _this45 = this,
              _actor$getComponent;
            var sprite, material, state, update, alpha;
            return _regeneratorRuntime().wrap(function _callee27$(_context29) {
              while (1) switch (_context29.prev = _context29.next) {
                case 0:
                  sprite = (_actor$children$find = actor.children.find(function (n) {
                    return n.getComponent(Sprite);
                  })) == null ? void 0 : _actor$children$find.getComponent(Sprite);
                  material = sprite && this.actorMaterial(sprite);
                  state = {
                    tone: 1,
                    fade: 1
                  };
                  (_actorArt$baseOpacity = (_actorArt = actorArt[(_sprite$node$name = sprite == null ? void 0 : sprite.node.name) != null ? _sprite$node$name : '']) == null ? void 0 : _actorArt.baseOpacity) != null ? _actorArt$baseOpacity : 1;
                  update = function update() {
                    if (sprite) _this45.setActorState(sprite, {
                      tone: state.tone,
                      fade: state.fade
                    });
                  };
                  alpha = (_actor$getComponent = actor.getComponent(UIOpacity)) != null ? _actor$getComponent : actor.addComponent(UIOpacity);
                  actor.position.clone();
                  return _context29.abrupt("return", Promise.all([motion.play(tween(state).to(.13, {
                    tone: .3
                  }, {
                    onUpdate: update
                  }).to(.33, {
                    tone: 0,
                    fade: 0
                  }, {
                    onUpdate: update
                  })), material ? Promise.resolve(true) : motion.play(tween(alpha).delay(.13).to(.33, {
                    opacity: 0
                  })), Promise.resolve(true)]).then(function (results) {
                    return results.every(Boolean);
                  }));
                case 8:
                case "end":
                  return _context29.stop();
              }
            }, _callee27, this);
          }));
          function fadeActor(_x39, _x40) {
            return _fadeActor.apply(this, arguments);
          }
          return fadeActor;
        }();
        _proto.enemyTurn = /*#__PURE__*/function () {
          var _enemyTurn = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee28(motion) {
            var _index14, _this$enemyOpportunit, actor, count, _planEnemyAction, move, target, recipients, restore, healed, recipient, hit, _move$hits, _struck$position, home, struck, center, base, damage, absorbed, lost, effects, _iterator38, _step38, hero, amount;
            return _regeneratorRuntime().wrap(function _callee28$(_context30) {
              while (1) switch (_context30.prev = _context30.next) {
                case 0:
                  this.battlePhase = 'enemy';
                  this.setBattleStatus('敌方行动');
                  this.syncBattleTools();
                  _index14 = 0;
                case 4:
                  if (!(_index14 < this.foes.length)) {
                    _context30.next = 102;
                    break;
                  }
                  if (!(motion.cancelled || this.hp <= 0)) {
                    _context30.next = 7;
                    break;
                  }
                  return _context30.abrupt("return");
                case 7:
                  if (!(this.enemies[_index14] <= 0)) {
                    _context30.next = 9;
                    break;
                  }
                  return _context30.abrupt("continue", 99);
                case 9:
                  if (!this.stunned["delete"](_index14)) {
                    _context30.next = 12;
                    break;
                  }
                  this.enemyActionAudit.push({
                    kind: 'SKIPPED_STUN',
                    enemy: _index14
                  });
                  return _context30.abrupt("continue", 99);
                case 12:
                  actor = this.enemyNodes[_index14];
                  if (actor != null && actor.isValid) {
                    _context30.next = 15;
                    break;
                  }
                  return _context30.abrupt("continue", 99);
                case 15:
                  count = this.enemyOpportunities[_index14] = ((_this$enemyOpportunit = this.enemyOpportunities[_index14]) != null ? _this$enemyOpportunit : 0) + 1;
                  _planEnemyAction = planEnemyAction(this.foes[_index14], _index14, count, this.enemies, this.enemyMax, this.isTutorialBattle()), move = _planEnemyAction.move, target = _planEnemyAction.target;
                  this.enemyActionAudit.push({
                    kind: 'DECIDED',
                    enemy: _index14,
                    skill: move.id
                  });
                  recipients = move.kind === 'heal' ? [this.enemyNodes[target]] : Array.from(this.heroes.values());
                  restore = this.focusCombat(motion, [actor].concat(recipients.filter(Boolean)));
                  _context30.prev = 20;
                  _context30.next = 23;
                  return this.skillWindup(motion, actor, move.name);
                case 23:
                  if (_context30.sent) {
                    _context30.next = 25;
                    break;
                  }
                  return _context30.abrupt("return");
                case 25:
                  this.enemyActionAudit.push({
                    kind: 'CAST_STARTED',
                    enemy: _index14,
                    skill: move.id
                  });
                  if (!(move.kind === 'heal')) {
                    _context30.next = 36;
                    break;
                  }
                  healed = Math.min(this.enemyMax[target] - this.enemies[target], Math.round(this.enemyMax[target] * move.ratio));
                  this.enemies[target] += healed;
                  this.updateHUD();
                  this.audio.play('charge');
                  recipient = this.enemyNodes[target];
                  _context30.next = 34;
                  return Promise.all([this.supportHalo(motion, recipient.position, '#adf4b0'), this.combatPopup(motion, '+' + healed + ' HP', recipient.position.x, recipient.position.y, '#adf4b0')]);
                case 34:
                  _context30.next = 85;
                  break;
                case 36:
                  hit = 0;
                case 37:
                  if (!(hit < ((_move$hits = move.hits) != null ? _move$hits : 1))) {
                    _context30.next = 85;
                    break;
                  }
                  if (!motion.cancelled) {
                    _context30.next = 40;
                    break;
                  }
                  return _context30.abrupt("return");
                case 40:
                  if (!(this.hp <= 0)) {
                    _context30.next = 42;
                    break;
                  }
                  return _context30.abrupt("break", 85);
                case 42:
                  home = actor.position.clone(), struck = Array.from(this.heroes.values()).find(function (n) {
                    return n.isValid;
                  });
                  center = (_struck$position = struck == null ? void 0 : struck.position) != null ? _struck$position : new Vec3(-100, 270, 0);
                  if (!move.projectile) {
                    _context30.next = 51;
                    break;
                  }
                  _context30.next = 47;
                  return this.flyProjectile(motion, move.magic ? 'm' : 'stone', this.emissionPoint(actor), center);
                case 47:
                  if (_context30.sent) {
                    _context30.next = 49;
                    break;
                  }
                  return _context30.abrupt("return");
                case 49:
                  _context30.next = 55;
                  break;
                case 51:
                  _context30.next = 53;
                  return motion.play(tween(actor).to(motion.duration(.12), {
                    position: new Vec3(center.x + 35, home.y, 0)
                  }, {
                    easing: 'sineInOut'
                  }));
                case 53:
                  if (_context30.sent) {
                    _context30.next = 55;
                    break;
                  }
                  return _context30.abrupt("return");
                case 55:
                  if (!motion.cancelled) {
                    _context30.next = 57;
                    break;
                  }
                  return _context30.abrupt("return");
                case 57:
                  base = Math.round(oathEnemyPower(this.oath, String(_index14), this.foes[_index14].atk) * move.ratio);
                  damage = this.oath.guard ? Math.round(base * .85) : base;
                  absorbed = Math.min(this.dp, damage), lost = Math.min(this.hp, damage - absorbed);
                  this.dp -= absorbed;
                  this.hp -= lost;
                  this.updateHUD();
                  this.audio.play('hurt');
                  this.enemyActionAudit.push({
                    kind: 'HIT',
                    enemy: _index14,
                    skill: move.id,
                    hit: hit,
                    hp: this.hp,
                    dp: this.dp,
                    damage: absorbed + lost
                  });
                  this.setBattleStatus(this.foes[_index14].name + " \xB7 " + move.name + " \xB7 HP \u2212" + lost + " \xB7 DP \u2212" + absorbed);
                  effects = [];
                  if (lost) effects.push(this.combatPopup(motion, '−' + lost, center.x, center.y, move.magic ? '#8b92f6' : '#ffffff'));
                  if (absorbed) effects.push(this.combatPopup(motion, '−' + absorbed + ' DP', center.x + 22, center.y + 18, '#90aec4'));
                  for (_iterator38 = _createForOfIteratorHelperLoose(this.heroes.values()); !(_step38 = _iterator38()).done;) {
                    hero = _step38.value;
                    effects.push(this.hitReaction(motion, hero));
                  }
                  if (!move.projectile) effects.push(motion.play(tween(actor).to(motion.duration(.17), {
                    position: home
                  }, {
                    easing: 'sineOut'
                  })));
                  if (lost && this.hp <= this.maxHP * .3) effects.push(this.lowHealthFlash(motion));
                  _context30.next = 74;
                  return Promise.all(effects);
                case 74:
                  if (!motion.cancelled) {
                    _context30.next = 76;
                    break;
                  }
                  return _context30.abrupt("return");
                case 76:
                  if (!(move.drain && lost)) {
                    _context30.next = 82;
                    break;
                  }
                  amount = Math.min(this.enemyMax[_index14] - this.enemies[_index14], Math.round(lost * move.drain));
                  this.enemies[_index14] += amount;
                  this.updateHUD();
                  _context30.next = 82;
                  return this.combatPopup(motion, '+' + amount + ' HP', actor.position.x, actor.position.y, '#adf4b0');
                case 82:
                  hit++;
                  _context30.next = 37;
                  break;
                case 85:
                  if (!motion.cancelled) {
                    _context30.next = 87;
                    break;
                  }
                  return _context30.abrupt("return");
                case 87:
                  if (!(move.shock && this.hp > 0)) {
                    _context30.next = 92;
                    break;
                  }
                  _context30.next = 90;
                  return this.shockDowngrade(motion, _index14);
                case 90:
                  if (!motion.cancelled) {
                    _context30.next = 92;
                    break;
                  }
                  return _context30.abrupt("return");
                case 92:
                  this.enemyActionAudit.push({
                    kind: 'ACTION_COMPLETED',
                    enemy: _index14,
                    skill: move.id,
                    hp: this.hp,
                    dp: this.dp
                  });
                case 93:
                  _context30.prev = 93;
                  restore();
                  return _context30.finish(93);
                case 96:
                  if (!(this.hp <= 0)) {
                    _context30.next = 99;
                    break;
                  }
                  this.finishAdventure('fail');
                  return _context30.abrupt("return");
                case 99:
                  _index14++;
                  _context30.next = 4;
                  break;
                case 102:
                  if (!motion.cancelled) {
                    _context30.next = 104;
                    break;
                  }
                  return _context30.abrupt("return");
                case 104:
                  endOathRound(this.oath, this.turn);
                  this.turn++;
                  this.resumeBattleInput('轮到玩家，交换相邻纹章');
                case 107:
                case "end":
                  return _context30.stop();
              }
            }, _callee28, this, [[20,, 93, 96]]);
          }));
          function enemyTurn(_x41) {
            return _enemyTurn.apply(this, arguments);
          }
          return enemyTurn;
        }();
        _proto.resumeBattleInput = function resumeBattleInput(message) {
          var _this$dungeon8;
          this.clearIdleHint();
          this.busy = false;
          this.battlePhase = 'input';
          this.syncBuffViews();
          var room = (_this$dungeon8 = this.dungeon) == null ? void 0 : _this$dungeon8.room;
          this.setBattleStatus((room == null ? void 0 : room.kind) === 'battle' && room.delivery ? "\u8425\u6551\u77FF\u5DE5 " + this.rescuedMiners + "/" + room.delivery.required + " \xB7 \u5C06\u77FF\u5DE5\u9001\u5165\u6D1E\u53E3" : this.rescueCells.size ? "\u51C0\u5316 \xB7 \u6307\u5B9A\u683C\u8FD8\u5269 " + this.rescueCells.size + " \u5904" : message);
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
          var _this46 = this;
          var challenge = this.challenge;
          if ((challenge == null ? void 0 : challenge.id) === 'timed' && this.trial && this.ui === this.battleRoot && this.battlePhase === 'input' && !this.busy && !this.battleModal) {
            var seconds = Math.ceil(challenge.time);
            challenge.time = Math.max(0, challenge.time - delta);
            if (Math.ceil(challenge.time) !== seconds) this.refreshTestObjective();
            if (challenge.exhausted) {
              this.logMechanism({
                kind: 'BUDGET_EXHAUSTED'
              });
              void this.repeatTestEncounter(this.motion);
              return;
            }
          }
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
              return _this46.tiles[index];
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
            for (var _iterator39 = _createForOfIteratorHelperLoose(entries), _step39; !(_step39 = _iterator39()).done;) {
              var _step39$value = _step39.value,
                node = _step39$value.node,
                home = _step39$value.home,
                animation = _step39$value.animation;
              animation.stop();
              if (node.isValid) node.setPosition(home);
            }
          };
          entries[0].animation.call(function () {
            _this46.stopHint = undefined;
          });
          entries.forEach(function (_ref32) {
            var animation = _ref32.animation;
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
          var _this47 = this;
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
            var p = _this47.cells[index].position;
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
            w: 143,
            h: 28
          }];
          var breaks = Array.from(new Set([-427, 427].concat(holes.flatMap(function (h) {
            return [h.y - h.h / 2, h.y + h.h / 2];
          })))).sort(function (a, b) {
            return a - b;
          });
          graphics.fillColor = Color.fromHEX(new Color(), '#101c20ad');
          var _loop11 = function _loop11() {
            var low = breaks[row - 1],
              high = breaks[row],
              mid = (high + low) / 2;
            var openings = holes.filter(function (h) {
              return Math.abs(h.y - mid) < h.h / 2;
            }).sort(function (a, b) {
              return a.x - b.x;
            });
            var left = -240;
            for (var _iterator41 = _createForOfIteratorHelperLoose(openings), _step41; !(_step41 = _iterator41()).done;) {
              var hole = _step41.value;
              graphics.rect(left, low, hole.x - hole.w / 2 - left, high - low);
              left = hole.x + hole.w / 2;
            }
            graphics.rect(left, low, 240 - left, high - low);
          };
          for (var row = 1; row < breaks.length; row++) {
            _loop11();
          }
          graphics.fill();
          if (mode !== 'swap') {
            graphics.strokeColor = Color.fromHEX(new Color(), '#ffe49d');
            graphics.lineWidth = 3;
            for (var _iterator40 = _createForOfIteratorHelperLoose(holes), _step40; !(_step40 = _iterator40()).done;) {
              var h = _step40.value;
              graphics.roundRect(h.x - h.w / 2, h.y - h.h / 2, h.w, h.h, 8);
            }
            graphics.stroke();
          }
          var caption = mode === 'swap' ? '滑动或依次点击高亮的两枚纹章' : '点击药水恢复生命';
          this.box('教学提示底板', 0, 159, 419, 36, '#27362ef0', layer);
          this.outline(this.label(caption, 0, 159, 411, 19, layer));
          var source = mode === 'swap' ? this.cells[1].position : new Vec3(battleToolbar.x, battleToolbar.y, 0);
          var dest = mode === 'swap' ? this.cells[8].position : source;
          this.guidePointer(layer, source, dest, mode === 'swap');
        };
        _proto.guidePointer = function guidePointer(layer, source, dest, swap) {
          if (swap === void 0) {
            swap = false;
          }
          var ring = this.box('教学聚焦光环', source.x, source.y, 240, 240, undefined, layer);
          var ink = ring.addComponent(Graphics);
          ink.strokeColor = new Color(255, 230, 150, 230);
          ink.lineWidth = 3;
          ink.circle(0, 0, 110);
          ink.stroke();
          var glow = ring.addComponent(UIOpacity);
          glow.opacity = 0;
          tween(glow).to(.18, {
            opacity: 255
          }).delay(.35).to(.35, {
            opacity: 0
          }).start();
          tween(ring).to(.7, {
            scale: new Vec3(.26, .26, 1)
          }, {
            easing: 'sineInOut'
          }).start();
          var downward = source.y < -320;
          var handAngle = downward ? 180 : swap ? -35 : -20;
          var radians = handAngle * Math.PI / 180;
          var tipX = -6 * Math.cos(radians) - 34 * Math.sin(radians),
            tipY = -6 * Math.sin(radians) + 34 * Math.cos(radians);
          var place = function place(p, lift) {
            if (lift === void 0) {
              lift = 0;
            }
            return new Vec3(Math.max(-196, Math.min(196, p.x - tipX)), Math.max(-370, Math.min(370, p.y - tipY + lift)), 0);
          };
          var hand = this.box('引导手套', 0, 0, 68, 80, undefined, layer);
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
          hand.setScale(2, 2, 1);
          hand.angle = handAngle;
          var opacity = hand.addComponent(UIOpacity);
          opacity.opacity = 0;
          // Animate the actual opacity component, not a dummy progress value whose
          // reset/repeat boundaries can collapse the fade into a single frame.
          var clock = {
            t: 0
          };
          var fade = .6,
            hold = .4,
            move = swap ? .65 : .7,
            dwell = .65,
            out = .6,
            gap = .35,
            total = fade + hold + move + dwell + out + gap;
          var update = function update() {
            var t = clock.t;
            var alpha = t < fade ? t / fade : t < fade + hold + move + dwell ? 1 : Math.max(0, 1 - (t - fade - hold - move - dwell) / out);
            var progress = Math.max(0, Math.min(1, (t - fade - hold) / move));
            var a = place(source, swap ? 0 : 35),
              b = place(dest);
            hand.setPosition(Vec3.lerp(new Vec3(), a, b, progress));
            var _byte = Math.round(255 * alpha);
            opacity.opacity = _byte;
            glove.clear();
            glove.fillColor = new Color(255, 248, 223, _byte);
            glove.strokeColor = new Color(49, 41, 32, _byte);
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
            hand['guideAlpha'] = _byte;
          };
          update();
          var loop = tween(clock).repeatForever(tween(clock).set({
            t: 0
          }).to(total, {
            t: total
          }, {
            onUpdate: update
          })).start();
          layer.once(Node.EventType.NODE_DESTROYED, function () {
            loop.stop();
            Tween.stopAllByTarget(glow);
            Tween.stopAllByTarget(ring);
          });
        };
        _proto.openBattleModal = function openBattleModal(mode) {
          var _this48 = this;
          if (this.battleModal || this.battlePhase === 'complete') return;
          this.clearGuide();
          this.motion.pause();
          if (this.trial) this.audio.playTrial('open');
          var panel = this.battleModal = this.box('战斗弹窗', 0, 0, 480, 854, '#131a22b8');
          var card = this.box('弹窗卡片', 0, 0, 432, mode === 'log' ? 480 : 234, '#253a34', panel);
          this.outline(this.label(mode === 'log' ? '战斗记录' : '撤离探索', 0, mode === 'log' ? 204 : 80, 390, 25, card));
          if (mode === 'log') {
            this.battleLogs.slice(-9).forEach(function (line, i) {
              return _this48.label(line, 0, 152 - i * 34, 396, 16, card);
            });
          } else this.label('确定撤离当前探索？', 0, 19, 396, 19, card);
          var dismiss = function dismiss() {
            if (_this48.battleModal !== panel) return;
            panel.destroy();
            _this48.battleModal = undefined;
            _this48.motion.resume();
            _this48.refreshGuide();
            _this48.autoStep();
          };
          var choice = function choice(label, x, y, action) {
            var button = _this48.box(label, x, y, 169, 46, '#567052', card);
            if (_this48.trial) _this48.slicedArt('trial-ui-button', 0, 0, 169, 46, button);
            _this48.label(label, 0, 0, 164, 18, button);
            button.on(Node.EventType.TOUCH_END, function () {
              if (_this48.battleModal !== panel) return;
              if (_this48.trial) _this48.audio.playTrial('click');
              action();
            });
          };
          if (mode === 'retreat') {
            choice('返回战斗', -97, -71, dismiss);
            var reload = this.stage4AStockUncertain;
            choice(reload ? '重新加载' : '确认撤离', 97, -71, function () {
              if (reload) {
                location.reload();
                return;
              }
              if (_this48.stage4A) {
                _this48.stopStage4A('retreat');
                _this48.battleModal = undefined;
                _this48.automatic = false;
                _this48.busy = false;
                _this48.map();
                return;
              }
              _this48.motion.cancel();
              _this48.battleModal = undefined;
              _this48.finishAdventure('retreat');
            });
          } else choice('返回战斗', 0, -192, dismiss);
        };
        _proto.animateCoins = /*#__PURE__*/function () {
          var _animateCoins = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee31(motion, amount, label, origin, groundY) {
            var _this49 = this;
            var root, active, base, setAmount, count, spacing, left, coins, hud, destination, displayed, target, pulse, rolling, rollCounter, _i13, _coins, node;
            return _regeneratorRuntime().wrap(function _callee31$(_context33) {
              while (1) switch (_context33.prev = _context33.next) {
                case 0:
                  root = this.ui;
                  active = function active() {
                    return !motion.cancelled && _this49.ui === root && label.isValid;
                  };
                  if (!(!active() || amount <= 0)) {
                    _context33.next = 4;
                    break;
                  }
                  return _context33.abrupt("return", active());
                case 4:
                  base = Number(label.string);
                  setAmount = function setAmount(value) {
                    if (active()) label.string = String(value);
                  };
                  if (!motion.reduced) {
                    _context33.next = 9;
                    break;
                  }
                  setAmount(base + amount);
                  return _context33.abrupt("return", true);
                case 9:
                  count = Math.min(amount, 8);
                  spacing = 14;
                  left = Math.max(-218, Math.min(218 - (count - 1) * spacing, origin.x - (count - 1) * spacing / 2));
                  coins = Array.from({
                    length: count
                  }, function (_, i) {
                    var node = _this49.box('飞行金币', origin.x, origin.y, 13, 13);
                    _this49.drawCoin(node.addComponent(Graphics), 6);
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
                    var _ref33 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee29() {
                      var step;
                      return _regeneratorRuntime().wrap(function _callee29$(_context31) {
                        while (1) switch (_context31.prev = _context31.next) {
                          case 0:
                            step = Math.max(1, Math.ceil(amount / 20));
                          case 1:
                            if (!(displayed < target && active())) {
                              _context31.next = 10;
                              break;
                            }
                            _context31.next = 4;
                            return motion.play(tween({}).delay(.038));
                          case 4:
                            if (_context31.sent) {
                              _context31.next = 6;
                              break;
                            }
                            return _context31.abrupt("return");
                          case 6:
                            displayed = Math.min(target, displayed + step);
                            setAmount(displayed);
                            _context31.next = 1;
                            break;
                          case 10:
                          case "end":
                            return _context31.stop();
                        }
                      }, _callee29);
                    }));
                    return function rollCounter() {
                      return _ref33.apply(this, arguments);
                    };
                  }();
                  _context33.prev = 19;
                  _context33.next = 22;
                  return Promise.all(coins.map(function (_ref34, i) {
                    var node = _ref34.node,
                      ground = _ref34.ground;
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
                    _context33.next = 24;
                    break;
                  }
                  return _context33.abrupt("return", false);
                case 24:
                  _context33.next = 26;
                  return Promise.all(coins.map( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee30(_ref35, i) {
                    var _rolling;
                    var node, ground, bend, arrived, current;
                    return _regeneratorRuntime().wrap(function _callee30$(_context32) {
                      while (1) switch (_context32.prev = _context32.next) {
                        case 0:
                          node = _ref35.node, ground = _ref35.ground;
                          bend = (i - (count - 1) / 2) * 12;
                          _context32.next = 4;
                          return motion.play(tween({
                            progress: 0
                          }).delay(.15 + i * .064).to(.35, {
                            progress: 1
                          }, {
                            easing: 'quadIn',
                            onUpdate: function onUpdate(_ref37) {
                              var progress = _ref37.progress;
                              if (!node.isValid) return;
                              var arc = Math.sin(Math.PI * progress);
                              node.setPosition(ground.x + (destination.x - ground.x) * progress + bend * arc, ground.y + (destination.y - ground.y) * progress + (38 + i % 2 * 9) * arc);
                            }
                          }));
                        case 4:
                          arrived = _context32.sent;
                          if (!(!arrived || !active())) {
                            _context32.next = 7;
                            break;
                          }
                          return _context32.abrupt("return");
                        case 7:
                          node.destroy();
                          _this49.audio.play('coins');
                          target += Math.floor((i + 1) * amount / count) - Math.floor(i * amount / count);
                          (_rolling = rolling) != null ? _rolling : rolling = rollCounter()["finally"](function () {
                            rolling = undefined;
                          });
                          current = ++pulse;
                          hud.setScale(.585, .585, 1);
                          _context32.next = 15;
                          return motion.play(tween({
                            scale: 1.17
                          }).to(.12, {
                            scale: 1
                          }, {
                            onUpdate: function onUpdate(_ref38) {
                              var scale = _ref38.scale;
                              if (current === pulse && active()) hud.setScale(scale * .5, scale * .5, 1);
                            }
                          }));
                        case 15:
                        case "end":
                          return _context32.stop();
                      }
                    }, _callee30);
                  }))));
                case 26:
                  _context33.next = 28;
                  return rolling;
                case 28:
                  if (active()) {
                    _context33.next = 30;
                    break;
                  }
                  return _context33.abrupt("return", false);
                case 30:
                  setAmount(base + amount);
                  return _context33.abrupt("return", true);
                case 32:
                  _context33.prev = 32;
                  for (_i13 = 0, _coins = coins; _i13 < _coins.length; _i13++) {
                    node = _coins[_i13].node;
                    if (node.isValid) node.destroy();
                  }
                  if (hud.isValid) hud.setScale(.5, .5, 1);
                  if (!active() && this.ui === root && label.isValid) label.string = String(base);
                  return _context33.finish(32);
                case 37:
                case "end":
                  return _context33.stop();
              }
            }, _callee31, this, [[19,, 32, 37]]);
          }));
          function animateCoins(_x42, _x43, _x44, _x45, _x46) {
            return _animateCoins.apply(this, arguments);
          }
          return animateCoins;
        }();
        _proto.combatPopup = function combatPopup(motion, value, x, y, color, size) {
          var _this$popupPool$pop,
            _this$popupLayer2,
            _n$getComponent,
            _this50 = this;
          if (size === void 0) {
            size = 27;
          }
          this.popupPool = this.popupPool.filter(function (node) {
            return node.isValid;
          });
          var n = (_this$popupPool$pop = this.popupPool.pop()) != null ? _this$popupPool$pop : this.outline(this.label('', 0, 0, 220, 27)).node;
          if (!((_this$popupLayer2 = this.popupLayer) != null && _this$popupLayer2.isValid) || this.popupLayer.parent !== this.ui) this.popupLayer = this.box('500 跳字层', 0, 0, 480, 854);
          this.popupLayer.setSiblingIndex(this.ui.children.length - 1);
          n.setParent(this.popupLayer);
          n.active = true;
          n.name = '战斗跳字 ' + ++this.popupOrder;
          n.setPosition(x, y, 0);
          n.setSiblingIndex(this.popupLayer.children.length - 1);
          var label = n.getComponent(Label);
          label.string = value;
          label.fontSize = 54;
          label.lineHeight = 70;
          label.isBold = true;
          label.color = Color.fromHEX(new Color(), color);
          var alpha = (_n$getComponent = n.getComponent(UIOpacity)) != null ? _n$getComponent : n.addComponent(UIOpacity);
          alpha.opacity = 255;
          var critical = size >= 38;
          n.setScale(.325, .325, 1);
          var move = motion.play(tween(n).to(motion.duration(.09), {
            position: new Vec3(x, y + 9, 0),
            scale: new Vec3(critical ? .825 : .6, critical ? .825 : .6, 1)
          }, {
            easing: 'quadOut'
          }).to(motion.duration(.13), {
            scale: new Vec3(.5, .5, 1)
          }).delay(motion.duration(.32)).to(motion.duration(.25), {
            position: new Vec3(x, y + 38, 0)
          }));
          var fade = motion.play(tween(alpha).delay(motion.duration(.54)).to(motion.duration(.25), {
            opacity: 0
          }));
          return Promise.all([move, fade]).then(function (result) {
            return result.every(Boolean);
          })["finally"](function () {
            if (!n.isValid) return;
            n.active = false;
            if (_this50.popupPool.length < 24) _this50.popupPool.push(n);else n.destroy();
          });
        };
        _proto.emissionPoint = function emissionPoint(actor) {
          var _portrait$name;
          var portrait = actor.children.find(function (n) {
            return n.getComponent(Sprite);
          });
          var profile = actorArt[(_portrait$name = portrait == null ? void 0 : portrait.name) != null ? _portrait$name : ''];
          var bounds = portrait == null ? void 0 : portrait.getComponent(UITransform);
          if (!profile || !bounds) return actor.position;
          var side = portrait.scale.x;
          return new Vec3(actor.position.x + (profile.projectileX - .5) * bounds.width * side, actor.position.y + (.5 - profile.projectileY) * bounds.height, 0);
        };
        _proto.flyProjectile = /*#__PURE__*/function () {
          var _flyProjectile = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee32(motion, type, origin, target) {
            var _this51 = this;
            var projectile, trails, arrived;
            return _regeneratorRuntime().wrap(function _callee32$(_context34) {
              while (1) switch (_context34.prev = _context34.next) {
                case 0:
                  projectile = this.art(type, origin.x, origin.y, 32, 32);
                  if (projectile) {
                    _context34.next = 3;
                    break;
                  }
                  return _context34.abrupt("return", true);
                case 3:
                  trails = motion.reduced ? [] : Array.from({
                    length: 4
                  }, function (_, i) {
                    var n = _this51.box('投射物拖尾', origin.x, origin.y, 8 - i, 8 - i, type === 'm' ? '#ba90f0' : '#d1b58a');
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
                  _context34.next = 6;
                  return motion.play(tween(projectile).to(motion.duration(.18), {
                    position: target.clone()
                  }, {
                    easing: 'quadIn'
                  }));
                case 6:
                  arrived = _context34.sent;
                  if (projectile.isValid) projectile.destroy();
                  _context34.next = 10;
                  return Promise.all(trails);
                case 10:
                  return _context34.abrupt("return", arrived && !motion.cancelled);
                case 11:
                case "end":
                  return _context34.stop();
              }
            }, _callee32, this);
          }));
          function flyProjectile(_x49, _x50, _x51, _x52) {
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
          var _this52 = this;
          if (motion.reduced) return [];
          return Array.from({
            length: count
          }, function (_, i) {
            var _this52$particlePool$, _node$getComponent3;
            var angle = i * 2 * Math.PI / count;
            var root = _this52.ui;
            var node = (_this52$particlePool$ = _this52.particlePool.pop()) != null ? _this52$particlePool$ : _this52.box('粒子', x, y, 8, 8);
            var g = (_node$getComponent3 = node.getComponent(Graphics)) != null ? _node$getComponent3 : node.addComponent(Graphics);
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
              if (node.isValid && _this52.ui === root) {
                node.active = false;
                _this52.particlePool.push(node);
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
          var _portraitFootprint$ar, _profile$shadowOffset, _profile$shadowOffset2, _profile$shadowScale;
          var _ref39 = (_portraitFootprint$ar = portraitFootprint[art]) != null ? _portraitFootprint$ar : [.14, .86],
            left = _ref39[0],
            right = _ref39[1];
          var profile = actorArt[art];
          var x = ((left + right) * .5 - .5) * width + ((_profile$shadowOffset = profile == null ? void 0 : profile.shadowOffsetX) != null ? _profile$shadowOffset : 0);
          y += (_profile$shadowOffset2 = profile == null ? void 0 : profile.shadowOffsetY) != null ? _profile$shadowOffset2 : 0;
          var radius = Math.max(15, (right - left) * width * .47) * ((_profile$shadowScale = profile == null ? void 0 : profile.shadowScale) != null ? _profile$shadowScale : 1);
          var height = radius * .24;
          var shade = this.box('脚底投影', x, y, radius * 2, height * 2, undefined, parent);
          var g = shade.addComponent(Graphics);
          g.fillColor = new Color(17, 13, 15, 105);
          g.ellipse(0, 0, radius, height);
          g.fill();
        };
        _proto.resolveBattleFoes = function resolveBattleFoes(room, hp, phase) {
          var encounters = (room == null ? void 0 : room.kind) === 'battle' ? room.encounters : undefined;
          var defaults = phase === 'wolves' ? [enemy('灰狼', 'wolf', 72, 3), enemy('林狼', 'forest-wolf', 72, 3)] : [enemy('裂印巨狼', 'boss', 100, 7)];
          return hp.map(function (value, index) {
            var _ref40, _encounters$index;
            return (_ref40 = (_encounters$index = encounters == null ? void 0 : encounters[index]) != null ? _encounters$index : defaults[index]) != null ? _ref40 : enemy('裂印兽', 'boar', value, 10);
          });
        };
        _proto.enemyPlacement = function enemyPlacement(foe, count, index) {
          var _enemyPortraitSize$fo, _enemyPortraitSize$fo2;
          var pair = count > 1,
            boss = foe.tags.includes('boss');
          var x = (pair ? 93 + index * 87 : boss ? stageX(381) : stageGrid.meterX) - 10;
          var ground = pair ? index === 0 ? stageGrid.rearGroundY : stageGrid.groundY : this.partyGroundCenter();
          var size = pair ? Math.min((_enemyPortraitSize$fo = enemyPortraitSize[foe.art]) != null ? _enemyPortraitSize$fo : 94, 112) : (_enemyPortraitSize$fo2 = enemyPortraitSize[foe.art]) != null ? _enemyPortraitSize$fo2 : 94;
          var hover = foe.tags.includes('flying') ? size / 2 : foe.art === 'ghost' ? 7 : 0;
          return {
            x: x,
            ground: ground,
            size: size,
            y: this.portraitY(foe.art, ground + hover, size)
          };
        };
        _proto.partyGroundCenter = function partyGroundCenter() {
          var slots = partyFormation(this.party, function (id) {
            return heroes[id].tags;
          });
          return slots.reduce(function (sum, slot) {
            return sum + (slot.front ? stageGrid.groundY : stageGrid.rearGroundY);
          }, 0) / Math.max(1, slots.length);
        };
        _proto.mapLabelPoint = function mapLabelPoint(id) {
          var _id;
          return (_id = {
            forest: [18.8, 63.8],
            village: [47.7, 88.7],
            swamp: [83.7, 84.0]
          }[id]) != null ? _id : [worldPoints[id][0], worldPoints[id][1] + 5];
        };
        _proto.skillWindup = /*#__PURE__*/function () {
          var _skillWindup = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee33(motion, actor, name, advanced) {
            var scale, ok;
            return _regeneratorRuntime().wrap(function _callee33$(_context35) {
              while (1) switch (_context35.prev = _context35.next) {
                case 0:
                  if (advanced === void 0) {
                    advanced = false;
                  }
                  void this.skillCallout(motion, name, actor.position, advanced);
                  scale = actor.scale.clone();
                  _context35.next = 5;
                  return motion.play(tween(actor).to(motion.duration(.1), {
                    scale: new Vec3(scale.x * 1.035, scale.y * .965, scale.z)
                  }, {
                    easing: 'sineIn'
                  }));
                case 5:
                  ok = _context35.sent;
                  if (actor.isValid) actor.setScale(scale);
                  return _context35.abrupt("return", ok && !motion.cancelled);
                case 8:
                case "end":
                  return _context35.stop();
              }
            }, _callee33, this);
          }));
          function skillWindup(_x53, _x54, _x55, _x56) {
            return _skillWindup.apply(this, arguments);
          }
          return skillWindup;
        }();
        _proto.showParty = function showParty() {
          this.heroes.clear();
          var size = 94;
          var slots = partyFormation(this.party, function (id) {
            return heroes[id].tags;
          }).sort(function (a, b) {
            return Number(a.front) - Number(b.front);
          });
          for (var _iterator42 = _createForOfIteratorHelperLoose(slots), _step42; !(_step42 = _iterator42()).done;) {
            var _step42$value = _step42.value,
              id = _step42$value.id,
              _x57 = _step42$value.x,
              front = _step42$value.front;
            var _ground2 = front ? stageGrid.groundY : stageGrid.rearGroundY;
            var art = 'hero-' + id;
            var y = this.portraitY(art, _ground2, size);
            var actor = this.box(art, _x57 + 10, y, size, size);
            this.groundShadow(actor, _ground2 - y, art, size);
            this.art(art, 0, 0, size, size, actor);
            this.heroes.set(id, actor);
          }
          for (var _iterator43 = _createForOfIteratorHelperLoose(this.ui.children.slice()), _step43; !(_step43 = _iterator43()).done;) {
            var backdrop = _step43.value;
            if (backdrop.getChildByName('forest-lab-front')) this.liftForestForeground(backdrop, this.ui);
          }
        };
        _proto.page = function page(title, detail, background, options) {
          var _exec,
            _Array$from$find,
            _this53 = this;
          if (background === void 0) {
            background = 'travel-forest-plains';
          }
          if (options === void 0) {
            options = {};
          }
          this.reset(background);
          this.speechOwner = (_exec = /^([^：:]+)[：:]/.exec(detail)) == null ? void 0 : _exec[1];
          if (options.party !== false) this.showParty();else this.heroes.clear();
          this.box('Scene title plate', 0, stageGrid.titleY, 336, 40, '#24392fe8');
          var heading = this.label(title, 0, stageGrid.titleY, 320, 25);
          heading.isBold = true;
          if (detail) {
            this.box('Scene information', 0, 122, 456, 27, '#263c32');
            this.label(detail, 0, 122, 442, 17);
          }
          if (options.meters === true) {
            var hp = Math.max(0, this.hp),
              maxHP = this.maxHP;
            var stageStats = this.makeMeter(-stageGrid.meterX, stageGrid.hpY, 139, '#7ecb82');
            this.setMeter(stageStats, hp, maxHP, String(hp));
            if (this.showsGuard) {
              var stageGuard = this.makeMeter(-stageGrid.meterX, stageGrid.secondaryY, 139, '#63b5df');
              this.setMeter(stageGuard, this.dp, this.maxDP, String(this.dp));
            }
          }
          if (options.gold !== false) this.coinText = this.makeCoinDisplay();
          if (this.town.blessing) {
            var node = this.box('全局祝福', -150, this.showsGuard ? 299 : 330, 24, 24, '#314e3a');
            this.art('h', 0, 0, 20, 20, node);
            this.outline(this.label('1', 7, -7, 18, 11, node));
          }
          var speaker = (_Array$from$find = Array.from(this.heroes.entries()).find(function (_ref41) {
            var _heroes$id;
            var id = _ref41[0];
            return ((_heroes$id = heroes[id]) == null ? void 0 : _heroes$id.name) === _this53.speechOwner;
          })) == null ? void 0 : _Array$from$find[1];
          if (speaker) this.popSpeaker(speaker);
        };
        _proto.startTutorial = function startTutorial() {
          this.adventure = undefined;
          this.tutorialXP = 0;
          this.phase = 'wolves';
          this.dungeon = new DungeonDirector(tutorialRoute());
          this.showRoom();
        };
        _proto.testLevelMenu = function testLevelMenu(page) {
          var _this54 = this,
            _this$ui$getComponent;
          if (page === void 0) {
            page = 0;
          }
          var paging = mechanismPage(page);
          this.page('测试关卡', '固定四人 · 无装备与增益 · 棋盘保留 · 无限战斗');
          testMechanisms.slice(paging.start, paging.end).forEach(function (entry, i) {
            _this54.button(entry.title, 70 - Math.floor(i / 3) * 100, function () {
              return _this54.startMineTrial(entry.id);
            }, (i % 3 - 1) * 150, 142);
          });
          this.label(paging.page + 1 + " / " + paging.pages, 0, -235, 160, 18);
          if (paging.page > 0) this.button('上一页', -235, function () {
            return _this54.testLevelMenu(page - 1);
          }, -145, 120);
          if (paging.page + 1 < paging.pages) this.button('下一页', -235, function () {
            return _this54.testLevelMenu(page + 1);
          }, 145, 120);
          this.button('返回主菜单', -302, function () {
            return _this54.menu();
          });
          var motion = this.newPageMotion(),
            opacity = (_this$ui$getComponent = this.ui.getComponent(UIOpacity)) != null ? _this$ui$getComponent : this.ui.addComponent(UIOpacity);
          opacity.opacity = 100;
          void motion.play(tween(opacity).to(motion.duration(.18), {
            opacity: 255
          }));
        };
        _proto.logMechanism = function logMechanism(event) {
          this.mechanismAudit.push(event);
          if (this.mechanismAudit.length > 256) this.mechanismAudit.shift();
        };
        _proto.drawRock = function drawRock(node, layers) {
          for (var _iterator44 = _createForOfIteratorHelperLoose(node.children.slice()), _step44; !(_step44 = _iterator44()).done;) {
            var child = _step44.value;
            child.removeFromParent();
            child.destroy();
          }
          var gnode = this.box('碎岩', 0, 0, 48, 48, undefined, node),
            g = gnode.addComponent(Graphics);
          g.fillColor = Color.fromHEX(new Color(), layers > 1 ? '#827287' : '#777780');
          g.moveTo(-23, -15);
          g.lineTo(-19, 17);
          g.lineTo(3, 24);
          g.lineTo(23, 12);
          g.lineTo(20, -20);
          g.lineTo(-7, -24);
          g.close();
          g.fill();
          g.strokeColor = Color.fromHEX(new Color(), '#292a36');
          g.lineWidth = 3;
          g.stroke();
          g.moveTo(-14, 12);
          g.lineTo(1, 2);
          g.lineTo(-4, -10);
          g.moveTo(1, 2);
          g.lineTo(15, -3);
          g.stroke();
          var counter = this.outline(this.label(String(layers), 16, -15, 17, 13, node));
          counter.isBold = true;
        };
        _proto.drawMechanismMarkers = function drawMechanismMarkers() {
          var _this55 = this;
          if (!this.trial) return;
          var blocked = this.blockedBoardCells,
            entries = new Set(blocked.size || this.challenge ? this.boardRoutes.map(function (path) {
              return path[0];
            }) : []);
          this.cells.forEach(function (cell, index) {
            var _this55$trial;
            var old = cell.getChildByName('机制格 ' + index);
            if (old) {
              old.removeFromParent();
              old.destroy();
            }
            var state = _this55.challenge;
            var locked = state == null ? void 0 : state.locks.has(index);
            if (_this55.holes.has(index) && (state == null ? void 0 : state.id) !== 'pillar') return;
            var portal = ((_this55$trial = _this55.trial) == null ? void 0 : _this55$trial.id) === 'portal' ? portalLinks.findIndex(function (pair) {
              return pair.includes(index);
            }) : -1;
            if (!_this55.jelly.has(index) && portal < 0 && !entries.has(index) && !locked && !state) return;
            var mark = _this55.box('机制格 ' + index, 0, 0, 55, 55, undefined, cell),
              g = mark.addComponent(Graphics);
            if (_this55.jelly.has(index)) {
              g.fillColor = Color.fromHEX(new Color(), '#35c589bb');
              g.roundRect(-26, -26, 52, 52, 9);
              g.fill();
              g.fillColor = Color.fromHEX(new Color(), '#c4f5a7cc');
              g.circle(-18, 15, 4);
              g.circle(18, -15, 3);
              g.fill();
            }
            if (portal >= 0) {
              var entry = portalLinks[portal][0] === index;
              g.strokeColor = Color.fromHEX(new Color(), portal === 0 ? '#6ddcfa' : '#dc91ff');
              g.lineWidth = 3;
              g.circle(0, 0, 25);
              g.stroke();
              _this55.outline(_this55.label("" + (portal ? 'B' : 'A') + (entry ? '入' : '出'), 0, -21, 42, 10, mark));
            }
            if (entries.has(index)) {
              g.fillColor = Color.fromHEX(new Color(), '#8ae5e7');
              g.circle(-21, 22, 3);
              g.fill();
            }
            if (!state) return;
            if (locked || _this55.holes.has(index)) {
              var color = state.id === 'growth' ? '#71bc81' : state.id === 'wire' ? '#eac36a' : '#d79ef4';
              g.fillColor = Color.fromHEX(new Color(), state.id === 'pillar' ? '#55496a' : '#402b59');
              g.strokeColor = Color.fromHEX(new Color(), color);
              g.lineWidth = 4;
              g.roundRect(-27, -27, 54, 54, 7);
              g.fill();
              g.stroke();
              _this55.outline(_this55.label(state.id === 'pillar' ? '柱' : String(state.locks.get(index) || '✓'), 21, 20, 16, 13, mark));
            }
            if (state.id === 'seam') for (var _i14 = 0, _arr5 = [[index + 1, 30, 0], [index + 7, 0, -30]]; _i14 < _arr5.length; _i14++) {
              var _arr5$_i = _arr5[_i14],
                other = _arr5$_i[0],
                _x58 = _arr5$_i[1],
                y = _arr5$_i[2];
              if (!challengeEdge(state.id, index, other)) {
                g.fillColor = new Color(237, 171, 101);
                if (_x58) g.rect(28, -27, 4, 54);else g.rect(-27, y - 2, 54, 4);
                g.fill();
              }
            }
            if (state.id === 'seeker' && state.targets.has(index)) {
              g.strokeColor = new Color(243, 141, 216);
              g.lineWidth = 3;
              g.circle(0, 0, 26);
              g.stroke();
            }
            if (state.id === 'updraft' && entries.has(index)) {
              _this55.outline(_this55.label(index >= 49 ? '↑' : '↓', -19, 19, 15, 15, mark));
            }
            if (state.id === 'source' && index === sourceEntry) _this55.outline(_this55.label('矿工入口', 0, 25, 52, 10, mark));
          });
        };
        _proto.applyBoardMechanismWave = /*#__PURE__*/function () {
          var _applyBoardMechanismWave = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee34(motion, plan) {
            var _this$dungeon9,
              _this$trial18,
              _this56 = this,
              _this$trial19;
            var root, room, _this$boardFx4, _this$dungeon10, result, played, _iterator45, _step45, _index15, _this$dungeon11, _result, effects, _played, _iterator46, _step46, node;
            return _regeneratorRuntime().wrap(function _callee34$(_context36) {
              while (1) switch (_context36.prev = _context36.next) {
                case 0:
                  root = this.ui, room = (_this$dungeon9 = this.dungeon) == null ? void 0 : _this$dungeon9.room;
                  if (!(((_this$trial18 = this.trial) == null ? void 0 : _this$trial18.id) === 'rocks')) {
                    _context36.next = 18;
                    break;
                  }
                  result = damageRocks(this.rocks, plan.matched);
                  _context36.next = 5;
                  return Promise.all(result.hits.map(function (index) {
                    var tile = _this56.tiles[index];
                    return motion.play(tween(tile).to(motion.duration(.07), {
                      scale: new Vec3(.82, .82, 1)
                    }).to(motion.duration(.12), {
                      scale: new Vec3(1, 1, 1)
                    }));
                  }));
                case 5:
                  played = _context36.sent;
                  if (!(!motion.cancelled && result.cleared.length)) {
                    _context36.next = 9;
                    break;
                  }
                  _context36.next = 9;
                  return (_this$boardFx4 = this.boardFx) == null ? void 0 : _this$boardFx4.clear(motion, result.cleared.map(function (index) {
                    return {
                      position: _this56.cells[index].position,
                      color: new Color(180, 170, 150)
                    };
                  }));
                case 9:
                  if (!(motion.cancelled || played.some(function (ok) {
                    return !ok;
                  }) || this.ui !== root || ((_this$dungeon10 = this.dungeon) == null ? void 0 : _this$dungeon10.room) !== room)) {
                    _context36.next = 11;
                    break;
                  }
                  return _context36.abrupt("return", false);
                case 11:
                  this.rocks = result.next;
                  for (_iterator45 = _createForOfIteratorHelperLoose(result.hits); !(_step45 = _iterator45()).done;) {
                    _index15 = _step45.value;
                    if (this.rocks.has(_index15)) this.drawRock(this.tiles[_index15], this.rocks.get(_index15));else {
                      plan.removed.add(_index15);
                      this.tiles[_index15].active = false;
                    }
                  }
                  if (result.hits.length) {
                    this.audio.play('hit');
                    this.logMechanism({
                      kind: 'ROCK_HIT',
                      cells: result.hits
                    });
                  }
                  this.drawMechanismMarkers();
                  this.refreshTestObjective();
                  _context36.next = 30;
                  break;
                case 18:
                  if (!(((_this$trial19 = this.trial) == null ? void 0 : _this$trial19.id) === 'jelly')) {
                    _context36.next = 30;
                    break;
                  }
                  _result = spreadJelly(this.jelly, plan.components), effects = _result.added.map(function (index) {
                    var node = _this56.box('黏液扩散', 0, 0, 54, 54, '#64e5a4b0', _this56.cells[index]);
                    node.setScale(.35, .35, 1);
                    return node;
                  });
                  _context36.next = 22;
                  return Promise.all(effects.map(function (node) {
                    return motion.play(tween(node).to(motion.duration(.18), {
                      scale: new Vec3(1, 1, 1)
                    }, {
                      easing: 'backOut'
                    }));
                  }));
                case 22:
                  _played = _context36.sent;
                  for (_iterator46 = _createForOfIteratorHelperLoose(effects); !(_step46 = _iterator46()).done;) {
                    node = _step46.value;
                    if (node.isValid) {
                      node.removeFromParent();
                      node.destroy();
                    }
                  }
                  if (!(motion.cancelled || _played.some(function (ok) {
                    return !ok;
                  }) || this.ui !== root || ((_this$dungeon11 = this.dungeon) == null ? void 0 : _this$dungeon11.room) !== room)) {
                    _context36.next = 26;
                    break;
                  }
                  return _context36.abrupt("return", false);
                case 26:
                  this.jelly = _result.next;
                  if (_result.added.length) this.logMechanism({
                    kind: 'JELLY_SPREAD',
                    cells: _result.added
                  });
                  this.drawMechanismMarkers();
                  this.refreshTestObjective();
                case 30:
                  return _context36.abrupt("return", !motion.cancelled);
                case 31:
                case "end":
                  return _context36.stop();
              }
            }, _callee34, this);
          }));
          function applyBoardMechanismWave(_x59, _x60) {
            return _applyBoardMechanismWave.apply(this, arguments);
          }
          return applyBoardMechanismWave;
        }();
        _proto.drawChallengePowers = function drawChallengePowers() {
          var _this57 = this;
          var state = this.challenge;
          if (!state || !state.powers.size) return;
          this.tiles.forEach(function (node) {
            var id = _this57.restoredTileIds.get(node);
            var power = id && state.powers.get(id);
            if (!power) return;
            var badge = node.getChildByName('试炼标记');
            if (!badge) {
              badge = _this57.box('试炼标记', 17, 19, 20, 18, power === 'bomb' ? '#962d4c' : '#373489', node);
              _this57.outline(_this57.label('', 0, 0, 22, 12, badge));
            }
            badge.getComponentInChildren(Label).string = power === 'bomb' ? String(Math.max(0, 8 - state.moves)) : powerLabel[power];
          });
        };
        _proto.applyTestChallengeWave = /*#__PURE__*/function () {
          var _applyTestChallengeWave = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee35(motion, plan, wave, fusion) {
            var _this$dungeon12,
              _this58 = this,
              _this$dungeon13;
            var state, room, locks, activations, targets, used, extra, progress, _loop12, _iterator47, _step47, _iterator48, _step48, _index16, _this$boardFx5, _iterator49, _step49, _index17, _iterator50, _step50, _index18, id, _iterator51, _step51, _id2, _iterator52, _step52, _index19, badge, _iterator53, _step53, cell;
            return _regeneratorRuntime().wrap(function _callee35$(_context38) {
              while (1) switch (_context38.prev = _context38.next) {
                case 0:
                  state = this.challenge;
                  room = (_this$dungeon12 = this.dungeon) == null ? void 0 : _this$dungeon12.room;
                  locks = hitChallengeLocks(state.id, state.locks, plan.matched);
                  activations = new Set(Array.from(plan.matched).concat(fusion));
                  targets = new Set(state.targets);
                  used = new Set();
                  extra = new Set(fusion);
                  progress = 0;
                  _loop12 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop12() {
                    var index, id, power, cells;
                    return _regeneratorRuntime().wrap(function _loop12$(_context37) {
                      while (1) switch (_context37.prev = _context37.next) {
                        case 0:
                          index = _step47.value;
                          id = _this58.restoredTileIds.get(_this58.tiles[index]);
                          power = id && state.powers.get(id);
                          if (!(!id || !power)) {
                            _context37.next = 5;
                            break;
                          }
                          return _context37.abrupt("return", 1);
                        case 5:
                          used.add(id);
                          cells = powerCells(power, index, _this58.board, targets);
                          cells.forEach(function (cell) {
                            if (_this58.board[cell] === minerEmblem || locks.next.has(cell) || plan.anchors.has(cell)) return;
                            var targetId = _this58.restoredTileIds.get(_this58.tiles[cell]);
                            if (!plan.matched.has(cell) && !fusion.includes(cell) && (_this58.chargedTiles.has(_this58.tiles[cell]) || targetId && state.powers.has(targetId))) return;
                            extra.add(cell);
                            if (power === 'seeker') targets["delete"](cell);
                          });
                          if (power !== 'bomb') progress++;
                        case 9:
                        case "end":
                          return _context37.stop();
                      }
                    }, _loop12);
                  });
                  _iterator47 = _createForOfIteratorHelperLoose(activations);
                case 10:
                  if ((_step47 = _iterator47()).done) {
                    _context38.next = 16;
                    break;
                  }
                  return _context38.delegateYield(_loop12(), "t0", 12);
                case 12:
                  if (!_context38.t0) {
                    _context38.next = 14;
                    break;
                  }
                  return _context38.abrupt("continue", 14);
                case 14:
                  _context38.next = 10;
                  break;
                case 16:
                  for (_iterator48 = _createForOfIteratorHelperLoose(plan.removed); !(_step48 = _iterator48()).done;) {
                    _index16 = _step48.value;
                    extra["delete"](_index16);
                  }
                  if (!(locks.hits.length || extra.size)) {
                    _context38.next = 21;
                    break;
                  }
                  this.audio.playTrial('charge');
                  _context38.next = 21;
                  return (_this$boardFx5 = this.boardFx) == null ? void 0 : _this$boardFx5.clear(motion, Array.from(new Set(locks.hits.concat(Array.from(extra)))).map(function (index) {
                    return {
                      position: _this58.cells[index].position,
                      color: new Color(213, 170, 241)
                    };
                  }));
                case 21:
                  if (!(motion.cancelled || this.challenge !== state || ((_this$dungeon13 = this.dungeon) == null ? void 0 : _this$dungeon13.room) !== room)) {
                    _context38.next = 23;
                    break;
                  }
                  return _context38.abrupt("return", false);
                case 23:
                  state.count(wave, this.board, plan.matched);
                  state.locks = locks.next;
                  state.hitThisTurn || (state.hitThisTurn = locks.hits.length > 0);
                  if (locks.hits.length) {
                    this.logMechanism({
                      kind: 'LOCK_HIT',
                      cells: locks.hits
                    });
                    this.drawMechanismMarkers();
                  }
                  for (_iterator49 = _createForOfIteratorHelperLoose(extra); !(_step49 = _iterator49()).done;) {
                    _index17 = _step49.value;
                    plan.removed.add(_index17);
                    this.tiles[_index17].active = false;
                  }
                  for (_iterator50 = _createForOfIteratorHelperLoose(plan.removed); !(_step50 = _iterator50()).done;) {
                    _index18 = _step50.value;
                    id = this.restoredTileIds.get(this.tiles[_index18]);
                    if (id) used.add(id);
                  }
                  for (_iterator51 = _createForOfIteratorHelperLoose(used); !(_step51 = _iterator51()).done;) {
                    _id2 = _step51.value;
                    state.powers["delete"](_id2);
                  }
                  for (_iterator52 = _createForOfIteratorHelperLoose(activations); !(_step52 = _iterator52()).done;) {
                    _index19 = _step52.value;
                    badge = this.tiles[_index19].getChildByName('试炼标记');
                    if (badge) {
                      badge.removeFromParent();
                      badge.destroy();
                    }
                  }
                  if (progress || fusion.length || used.size && state.id === 'bomb') {
                    if (state.id === 'fusion') {
                      if (fusion.length) state.progress++;
                    } else if (state.id !== 'collect' && state.id !== 'relay') state.progress += progress;
                    if (state.id === 'seeker') {
                      for (_iterator53 = _createForOfIteratorHelperLoose(state.targets); !(_step53 = _iterator53()).done;) {
                        cell = _step53.value;
                        if (!targets.has(cell)) state.targets["delete"](cell);
                      }
                      this.drawMechanismMarkers();
                    }
                    this.logMechanism({
                      kind: fusion.length ? 'FUSION_TRIGGERED' : 'POWER_TRIGGERED',
                      cells: Array.from(extra)
                    });
                  }
                  this.refreshTestObjective();
                  return _context38.abrupt("return", true);
                case 34:
                case "end":
                  return _context38.stop();
              }
            }, _callee35, this);
          }));
          function applyTestChallengeWave(_x61, _x62, _x63, _x64) {
            return _applyTestChallengeWave.apply(this, arguments);
          }
          return applyTestChallengeWave;
        }();
        _proto.finishChallengeTurn = /*#__PURE__*/function () {
          var _finishChallengeTurn = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee36(motion) {
            var _this59 = this;
            var state, protectedCells, _index20, _this$boardFx6;
            return _regeneratorRuntime().wrap(function _callee36$(_context39) {
              while (1) switch (_context39.prev = _context39.next) {
                case 0:
                  state = this.challenge;
                  if (!(state.id === 'growth' && !state.hitThisTurn && !state.success)) {
                    _context39.next = 12;
                    break;
                  }
                  protectedCells = new Set(this.tiles.flatMap(function (node, index) {
                    return _this59.chargedTiles.has(node) ? [index] : [];
                  }));
                  _index20 = growChallengeLocks(state.locks, this.board, protectedCells);
                  if (!(_index20 !== undefined && _index20 >= 0)) {
                    _context39.next = 12;
                    break;
                  }
                  _context39.next = 7;
                  return (_this$boardFx6 = this.boardFx) == null ? void 0 : _this$boardFx6.clear(motion, [{
                    position: this.cells[_index20].position,
                    color: new Color(105, 208, 130)
                  }]);
                case 7:
                  if (!(motion.cancelled || this.challenge !== state)) {
                    _context39.next = 9;
                    break;
                  }
                  return _context39.abrupt("return");
                case 9:
                  state.locks.set(_index20, 1);
                  this.drawMechanismMarkers();
                  this.logMechanism({
                    kind: 'GROWTH',
                    cells: [_index20]
                  });
                case 12:
                  if (state.id === 'bomb') this.drawChallengePowers();
                  this.refreshTestObjective();
                case 14:
                case "end":
                  return _context39.stop();
              }
            }, _callee36, this);
          }));
          function finishChallengeTurn(_x65) {
            return _finishChallengeTurn.apply(this, arguments);
          }
          return finishChallengeTurn;
        }();
        _proto.refreshTestObjective = function refreshTestObjective() {
          var _this$testObjective;
          if (!((_this$testObjective = this.testObjective) != null && _this$testObjective.isValid) || !this.trial) return;
          if (this.challenge) {
            this.testObjective.string = this.challenge.id === 'source' ? "\u4E13\u7528\u5165\u53E3 \xB7 \u5DF2\u64A4\u79BB " + this.rescuedMiners + "/3" : this.challenge.status;
            return;
          }
          var id = this.trial.id;
          this.testObjective.string = id === 'delivery' ? "\u8425\u6551 " + this.rescuedMiners + "/3 \xB7 \u77FF\u5DE5\u843D\u5165\u5E95\u90E8\u6D1E\u53E3" : id === 'terrain' ? "\u51C0\u5316\u5269\u4F59 " + this.terrain.size + " \u683C / " + Array.from(this.terrain.values()).reduce(function (a, b) {
            return a + b;
          }, 0) + " \u5C42" : id === 'rocks' ? "\u788E\u5CA9\u5269\u4F59 " + this.rocks.size + " \u5757 \xB7 \u76F8\u90BB\u6D88\u9664\u7834\u574F\u5CA9\u5C42" : id === 'jelly' ? "\u9ECF\u6DB2\u8986\u76D6 " + this.jelly.size + "/56 \xB7 \u63A5\u89E6\u9ECF\u6DB2\u7684\u5339\u914D\u7EC4\u5411\u5916\u6269\u6563" : id === 'portal' ? "\u4F20\u9001\u5DF2\u5B8C\u6210 " + this.portalTransits + " \u6B21 \xB7 \u6210\u5BF9\u4F9B\u7ED9\uFF0C\u4E0D\u8FDC\u7A0B\u4EA4\u6362" : '空洞不通行 · 分区独立补棋';
        };
        _proto.clearTestTerrain = /*#__PURE__*/function () {
          var _clearTestTerrain = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee37(motion, matched, wave) {
            var _this60 = this;
            var result;
            return _regeneratorRuntime().wrap(function _callee37$(_context40) {
              while (1) switch (_context40.prev = _context40.next) {
                case 0:
                  result = clearTerrain(this.terrain, matched);
                  _context40.next = 3;
                  return Promise.all(result.hits.map(function (index) {
                    var _this60$cells$index, _node$getComponent4;
                    var node = (_this60$cells$index = _this60.cells[index]) == null ? void 0 : _this60$cells$index.getChildByName('地表印记 ' + index);
                    if (!node) return Promise.resolve(true);
                    var alpha = (_node$getComponent4 = node.getComponent(UIOpacity)) != null ? _node$getComponent4 : node.addComponent(UIOpacity);
                    return motion.play(tween(alpha).to(motion.duration(.10), {
                      opacity: 70
                    }).to(motion.duration(.08), {
                      opacity: 255
                    }));
                  }));
                case 3:
                  if (!motion.cancelled) {
                    _context40.next = 5;
                    break;
                  }
                  return _context40.abrupt("return", false);
                case 5:
                  this.terrain = result.next;
                  result.hits.forEach(function (index) {
                    return _this60.drawTerrainCell(index);
                  });
                  this.refreshTestObjective();
                  if (result.hits.length) this.waveAudit.push({
                    wave: wave,
                    kind: 'TERRAIN_HIT',
                    group: result.hits
                  });
                  return _context40.abrupt("return", true);
                case 10:
                case "end":
                  return _context40.stop();
              }
            }, _callee37, this);
          }));
          function clearTestTerrain(_x66, _x67, _x68) {
            return _clearTestTerrain.apply(this, arguments);
          }
          return clearTestTerrain;
        }();
        _proto.drawTerrainCell = function drawTerrainCell(index) {
          var cell = this.cells[index];
          if (!(cell != null && cell.isValid)) return;
          var old = cell.getChildByName('地表印记 ' + index);
          if (old) {
            old.removeFromParent();
            old.destroy();
          }
          var layers = this.terrain.get(index);
          if (!layers) return;
          var mark = this.box('地表印记 ' + index, 0, 0, 55, 55, undefined, cell),
            g = mark.addComponent(Graphics);
          g.fillColor = Color.fromHEX(new Color(), layers > 1 ? '#aa644cc9' : '#c6aa65a0');
          g.roundRect(-26, -26, 52, 52, 6);
          g.fill();
          g.strokeColor = Color.fromHEX(new Color(), '#ffe8a9');
          g.lineWidth = 2;
          g.roundRect(-24, -24, 48, 48, 5);
          g.stroke();
          var text = this.outline(this.label(String(layers), -20, 20, 16, 12, mark));
          text.isBold = true;
        };
        _proto.repeatTestEncounter = /*#__PURE__*/function () {
          var _repeatTestEncounter = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee38(motion) {
            var _this61 = this;
            var trial, director, room;
            return _regeneratorRuntime().wrap(function _callee38$(_context41) {
              while (1) switch (_context41.prev = _context41.next) {
                case 0:
                  trial = this.trial, director = this.dungeon, room = director == null ? void 0 : director.room;
                  if (!(!trial || !director || !room)) {
                    _context41.next = 3;
                    break;
                  }
                  return _context41.abrupt("return");
                case 3:
                  this.busy = true;
                  this.automatic = false;
                  this.battlePhase = 'complete';
                  _context41.next = 8;
                  return motion.whenIdle();
                case 8:
                  _context41.t2 = !_context41.sent;
                  if (_context41.t2) {
                    _context41.next = 11;
                    break;
                  }
                  _context41.t2 = this.trial !== trial;
                case 11:
                  _context41.t1 = _context41.t2;
                  if (_context41.t1) {
                    _context41.next = 14;
                    break;
                  }
                  _context41.t1 = this.dungeon !== director;
                case 14:
                  _context41.t0 = _context41.t1;
                  if (_context41.t0) {
                    _context41.next = 17;
                    break;
                  }
                  _context41.t0 = director.room !== room;
                case 17:
                  if (!_context41.t0) {
                    _context41.next = 19;
                    break;
                  }
                  return _context41.abrupt("return");
                case 19:
                  _context41.t3 = room.kind === 'battle' && room.delivery;
                  if (!_context41.t3) {
                    _context41.next = 24;
                    break;
                  }
                  _context41.next = 23;
                  return this.retireRoomMiners(motion);
                case 23:
                  _context41.t3 = !_context41.sent;
                case 24:
                  if (!_context41.t3) {
                    _context41.next = 26;
                    break;
                  }
                  return _context41.abrupt("return");
                case 26:
                  _context41.t4 = trial.id === 'rocks';
                  if (!_context41.t4) {
                    _context41.next = 31;
                    break;
                  }
                  _context41.next = 30;
                  return this.retireRoomTokens(motion, rockCell);
                case 30:
                  _context41.t4 = !_context41.sent;
                case 31:
                  if (!_context41.t4) {
                    _context41.next = 33;
                    break;
                  }
                  return _context41.abrupt("return");
                case 33:
                  if (!(this.trial !== trial || this.dungeon !== director || director.room !== room || motion.cancelled)) {
                    _context41.next = 35;
                    break;
                  }
                  return _context41.abrupt("return");
                case 35:
                  this.carriedBoard = {
                    director: director,
                    types: this.types.join(','),
                    board: this.board.slice(),
                    charged: this.tiles.flatMap(function (tile, index) {
                      var tier = _this61.chargedTiles.get(tile);
                      return tier ? [[index, tier]] : [];
                    }),
                    ids: this.tiles.map(function (tile) {
                      var id = _this61.restoredTileIds.get(tile);
                      if (!id) {
                        id = crypto.randomUUID();
                        _this61.restoredTileIds.set(tile, id);
                      }
                      return id;
                    })
                  };
                  if (director.repeatTestBattle(room, mineTestEncounter(++trial.rounds, trial.id))) {
                    _context41.next = 38;
                    break;
                  }
                  return _context41.abrupt("return");
                case 38:
                  this.hp = this.maxHP;
                  this.dp = this.maxDP;
                  this.potion = 2;
                  this.adventure = {
                    id: testMechanism(trial.id).dungeon,
                    coins: 0,
                    loot: {},
                    xp: 0,
                    ordinaryWins: 0,
                    buffs: {}
                  };
                  this.showRoom();
                case 43:
                case "end":
                  return _context41.stop();
              }
            }, _callee38, this);
          }));
          function repeatTestEncounter(_x69) {
            return _repeatTestEncounter.apply(this, arguments);
          }
          return repeatTestEncounter;
        }();
        _proto.releaseMiners = /*#__PURE__*/function () {
          var _releaseMiners = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee39(motion) {
            var _this$dungeon14,
              _this62 = this;
            var room, _this$dungeon15, exits, _iterator54, _step54, _index21, played, _iterator55, _step55, _index22, removed, refill;
            return _regeneratorRuntime().wrap(function _callee39$(_context42) {
              while (1) switch (_context42.prev = _context42.next) {
                case 0:
                  room = (_this$dungeon14 = this.dungeon) == null ? void 0 : _this$dungeon14.room;
                  if (!((room == null ? void 0 : room.kind) !== 'battle' || !room.delivery)) {
                    _context42.next = 3;
                    break;
                  }
                  return _context42.abrupt("return");
                case 3:
                  if (motion.cancelled) {
                    _context42.next = 22;
                    break;
                  }
                  exits = minersAtExits(this.board, room.delivery);
                  if (exits.length) {
                    _context42.next = 7;
                    break;
                  }
                  return _context42.abrupt("return");
                case 7:
                  for (_iterator54 = _createForOfIteratorHelperLoose(exits); !(_step54 = _iterator54()).done;) {
                    _index21 = _step54.value;
                    this.deliveryEvents.push({
                      type: 'MINER_EXIT_STARTED',
                      index: _index21,
                      id: this.restoredTileIds.get(this.tiles[_index21])
                    });
                  }
                  _context42.next = 10;
                  return Promise.all(exits.map(function (index) {
                    var _tile$getComponent2, _this62$trial, _this62$trial2;
                    var tile = _this62.tiles[index],
                      opacity = (_tile$getComponent2 = tile.getComponent(UIOpacity)) != null ? _tile$getComponent2 : tile.addComponent(UIOpacity);
                    var target = tile.position.clone();
                    if (((_this62$trial = _this62.trial) == null ? void 0 : _this62$trial.id) === 'delivery' || ((_this62$trial2 = _this62.trial) == null ? void 0 : _this62$trial2.id) === 'source') target.y -= 27;else {
                      target.x += index % 7 === 0 ? -30 : 30;
                      target.y -= 8;
                    }
                    return Promise.all([motion.play(tween(tile).to(motion.duration(.42), {
                      position: target,
                      scale: new Vec3(.55, .55, 1)
                    }, {
                      easing: 'quadIn'
                    })), motion.play(tween(opacity).to(motion.duration(.42), {
                      opacity: 0
                    }))]).then(function (results) {
                      return results.every(Boolean);
                    });
                  }));
                case 10:
                  played = _context42.sent;
                  if (!(motion.cancelled || played.some(function (ok) {
                    return !ok;
                  }) || ((_this$dungeon15 = this.dungeon) == null ? void 0 : _this$dungeon15.room) !== room)) {
                    _context42.next = 13;
                    break;
                  }
                  return _context42.abrupt("return");
                case 13:
                  for (_iterator55 = _createForOfIteratorHelperLoose(exits); !(_step55 = _iterator55()).done;) {
                    _index22 = _step55.value;
                    this.rescuedMiners++;
                    this.refreshTestObjective();
                    this.deliveryEvents.push({
                      type: 'MINER_EXIT_COMPLETED',
                      index: _index22,
                      id: this.restoredTileIds.get(this.tiles[_index22])
                    });
                  }
                  this.setBattleStatus("\u8425\u6551\u77FF\u5DE5 " + this.rescuedMiners + "/" + room.delivery.required);
                  removed = new Set(exits), refill = this.planBattleRefill(this.board, removed);
                  this.queueTestSource(refill);
                  this.board = refill.board;
                  _context42.next = 20;
                  return this.drop(motion, removed, refill);
                case 20:
                  _context42.next = 3;
                  break;
                case 22:
                case "end":
                  return _context42.stop();
              }
            }, _callee39, this);
          }));
          function releaseMiners(_x70) {
            return _releaseMiners.apply(this, arguments);
          }
          return releaseMiners;
        }();
        _proto.queueTestSource = function queueTestSource(refill) {
          var _this$trial20;
          if (((_this$trial20 = this.trial) == null ? void 0 : _this$trial20.id) !== 'source' || this.rescuedMiners >= 3 || refill.board.includes(minerEmblem)) return;
          if (!refill.spawns.some(function (spawn) {
            return spawn.to === sourceEntry;
          })) return;
          refill.board[sourceEntry] = minerEmblem;
          this.logMechanism({
            kind: 'SOURCE_SPAWN',
            cells: [sourceEntry]
          });
        };
        _proto.retireRoomMiners = function retireRoomMiners(motion) {
          return this.retireRoomTokens(motion, minerEmblem);
        };
        _proto.retireRoomTokens = /*#__PURE__*/function () {
          var _retireRoomTokens = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee40(motion, token) {
            var _this63 = this;
            var indices, next, faded, _iterator56, _step56, _index23, old, tile;
            return _regeneratorRuntime().wrap(function _callee40$(_context43) {
              while (1) switch (_context43.prev = _context43.next) {
                case 0:
                  indices = this.board.flatMap(function (type, i) {
                    return type === token ? [i] : [];
                  });
                  if (indices.length) {
                    _context43.next = 3;
                    break;
                  }
                  return _context43.abrupt("return", true);
                case 3:
                  next = retireMinerBoard(this.board, this.types, token);
                  if (next) {
                    _context43.next = 7;
                    break;
                  }
                  this.setBattleStatus('营救棋子离房清理无合法候选，暂停诊断');
                  return _context43.abrupt("return", false);
                case 7:
                  _context43.next = 9;
                  return Promise.all(indices.map(function (index) {
                    var _tile$getComponent3;
                    var tile = _this63.tiles[index],
                      opacity = (_tile$getComponent3 = tile.getComponent(UIOpacity)) != null ? _tile$getComponent3 : tile.addComponent(UIOpacity);
                    return motion.play(tween(opacity).to(motion.duration(.22), {
                      opacity: 0
                    }));
                  }));
                case 9:
                  faded = _context43.sent;
                  if (!(motion.cancelled || faded.some(function (ok) {
                    return !ok;
                  }))) {
                    _context43.next = 12;
                    break;
                  }
                  return _context43.abrupt("return", false);
                case 12:
                  this.board = next;
                  for (_iterator56 = _createForOfIteratorHelperLoose(indices); !(_step56 = _iterator56()).done;) {
                    _index23 = _step56.value;
                    old = this.tiles[_index23];
                    old.removeFromParent();
                    old.destroy();
                    tile = this.tile(next[_index23], _index23);
                    this.tiles[_index23] = tile;
                    this.restoredTileIds.set(tile, crypto.randomUUID());
                    tile.setScale(.65, .65, 1);
                  }
                  _context43.next = 16;
                  return Promise.all(indices.map(function (index) {
                    return motion.play(tween(_this63.tiles[index]).to(motion.duration(.20), {
                      scale: new Vec3(1, 1, 1)
                    }, {
                      easing: 'backOut'
                    }));
                  }));
                case 16:
                  return _context43.abrupt("return", !motion.cancelled);
                case 17:
                case "end":
                  return _context43.stop();
              }
            }, _callee40, this);
          }));
          function retireRoomTokens(_x71, _x72) {
            return _retireRoomTokens.apply(this, arguments);
          }
          return retireRoomTokens;
        }();
        _proto.shockDowngrade = /*#__PURE__*/function () {
          var _shockDowngrade = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee41(motion, enemyIndex) {
            var _this64 = this,
              _this$trial$random3,
              _this$trial21,
              _this$templateFxFrame,
              _this$templateFxFrame2,
              _puff$getComponent;
            var index, tile, decorations, smoke, smokeSprite, puff, opacity, work, frame;
            return _regeneratorRuntime().wrap(function _callee41$(_context44) {
              while (1) switch (_context44.prev = _context44.next) {
                case 0:
                  index = shockTarget(this.tiles.map(function (tile) {
                    return _this64.chargedTiles.get(tile);
                  }), (_this$trial$random3 = (_this$trial21 = this.trial) == null ? void 0 : _this$trial21.random) != null ? _this$trial$random3 : Math.random);
                  if (!(index === undefined)) {
                    _context44.next = 3;
                    break;
                  }
                  return _context44.abrupt("return");
                case 3:
                  tile = this.tiles[index];
                  this.chargedTiles["delete"](tile);
                  this.setBattleStatus(this.foes[enemyIndex].name + " \xB7 \u9707\u8361\uFF1A\u4E00\u7EA7\u5F3A\u5316\u964D\u7EA7");
                  this.audio.play('hurt');
                  decorations = tile.children.filter(function (child) {
                    return child.name === '技能纹章底色' || child.name === 'skill-frame';
                  });
                  smoke = this.box('降级烟雾', 0, 0, 50, 50, undefined, tile);
                  smokeSprite = smoke.addComponent(Sprite);
                  smokeSprite.spriteFrame = (_this$templateFxFrame = (_this$templateFxFrame2 = this.templateFxFrames) == null ? void 0 : _this$templateFxFrame2.get('burst-05')) != null ? _this$templateFxFrame : null;
                  // Template textures live in a separate atlas; fall back to a soft local smoke silhouette.
                  puff = smoke != null ? smoke : this.box('降级烟雾', 0, 0, 39, 28, '#bcc3c9aa', tile);
                  puff.setSiblingIndex(decorations.length);
                  opacity = (_puff$getComponent = puff.getComponent(UIOpacity)) != null ? _puff$getComponent : puff.addComponent(UIOpacity);
                  work = decorations.map(function (child) {
                    var _child$getComponent;
                    var alpha = (_child$getComponent = child.getComponent(UIOpacity)) != null ? _child$getComponent : child.addComponent(UIOpacity);
                    return Promise.all([motion.play(tween(child).to(motion.duration(.10), {
                      scale: new Vec3(1.18, 1.18, 1),
                      angle: 8
                    }).to(motion.duration(.08), {
                      angle: -8
                    }).to(motion.duration(.18), {
                      scale: new Vec3(1.35, 1.35, 1),
                      angle: 0
                    })), motion.play(tween(alpha).delay(motion.duration(.12)).to(motion.duration(.24), {
                      opacity: 0
                    }))]);
                  });
                  frame = {
                    value: 0
                  };
                  _context44.next = 18;
                  return Promise.all([].concat(work, [motion.play(tween(opacity).to(motion.duration(.36), {
                    opacity: 0
                  })), motion.play(tween(frame).to(motion.duration(.36), {
                    value: 12
                  }, {
                    onUpdate: function onUpdate() {
                      var _this64$templateFxFra, _this64$templateFxFra2;
                      var key = 'burst-' + String(5 + Math.min(12, Math.floor(frame.value))).padStart(2, '0');
                      smokeSprite.spriteFrame = (_this64$templateFxFra = (_this64$templateFxFra2 = _this64.templateFxFrames) == null ? void 0 : _this64$templateFxFra2.get(key)) != null ? _this64$templateFxFra : null;
                    }
                  }))]));
                case 18:
                  if (!(motion.cancelled || !tile.isValid)) {
                    _context44.next = 20;
                    break;
                  }
                  return _context44.abrupt("return");
                case 20:
                  decorations.forEach(function (node) {
                    node.removeFromParent();
                    node.destroy();
                  });
                  puff.removeFromParent();
                  puff.destroy();
                case 23:
                case "end":
                  return _context44.stop();
              }
            }, _callee41, this);
          }));
          function shockDowngrade(_x73, _x74) {
            return _shockDowngrade.apply(this, arguments);
          }
          return shockDowngrade;
        }();
        _proto.startMineTrial = function startMineTrial(id) {
          var _this65 = this;
          if (id === void 0) {
            id = 'rail';
          }
          if (this.trial) return;
          var config = testMechanism(id),
            dungeon = dungeons[config.dungeon];
          var required = ['d', 'h', 'm', 'hero-d', 'hero-h', 'hero-m'].concat(dungeon.enemies.map(function (foe) {
            return foe.art;
          }));
          if (config.dungeon !== 'forest' || this.useForestReel) required.push(config.dungeon + '-reel');
          if (id === 'delivery' || id === 'source') required.push('npc-villager');
          if (this.deferContent(function () {
            return _this65.startMineTrial(id);
          }, 'trial:' + id, required)) return;
          var snapshot = {
            party: this.party,
            types: this.types,
            phase: this.phase,
            hp: this.hp,
            dp: this.dp,
            potion: this.potion,
            inventory: this.inventory,
            dungeon: this.dungeon,
            adventure: this.adventure,
            town: this.town,
            carriedBoard: this.carriedBoard,
            mineRecovery: this.mineRecovery
          };
          this.trial = {
            id: id,
            random: mineTrialRandom(testMechanism(id).seed),
            restore: function restore() {
              return Object.assign(_this65, snapshot);
            },
            moves: 0,
            longestChain: 0,
            rounds: 0
          };
          this.inventory = new Inventory();
          this.inventory.owned = [];
          this.inventory.slots = {};
          this.mineRecovery = undefined;
          this.town = _extends({}, this.town, {
            blessing: false,
            blessingInDungeon: false
          });
          this.party = ['s', 'd', 'h', 'm'];
          this.types = this.formalTypes();
          this.phase = config.dungeon;
          this.adventure = {
            id: config.dungeon,
            coins: 0,
            loot: {},
            xp: 0,
            ordinaryWins: 0,
            buffs: {}
          };
          this.dungeon = new DungeonDirector(makeMineTrial(id), true);
          this.hp = this.maxHP;
          this.dp = this.maxDP;
          this.potion = 2;
          this.page(config.title, config.objective, this.dungeonBackdrop(0));
          this.box('轨道试玩说明', 0, -45, 416, 232, '#20372f');
          this.mineTrialCaption(config.title, 48);
          this.label(id === 'rail' ? '上方六排向下落子' : id === 'delivery' ? '矿工不可三消，靠垂直重力到达底部出口' : config.description, 0, 2, 396, 17);
          this.label(id === 'rail' ? '倒数第二排从左补棋，最底排从右补棋' : id === 'delivery' ? '救出3人即可续战；离场动画结束才计数' : config.objective, 0, -36, 396, 16);
          this.label('无限遭遇 · 胜败自动恢复 · 不产生收益', 0, -84, 388, 17);
          var root = this.ui;
          this.trialButton(id === 'rail' ? '进入矿道' : '开始测试', -203, function () {
            if (_this65.ui !== root) return;
            _this65.audio.playTrial('open');
            _this65.showRoom();
          });
          this.trialButton('返回标题', -269, function () {
            return _this65.leaveMineTrial();
          }, 0, 230, 'trial-ui-back', true);
        };
        _proto.mineTrialCaption = function mineTrialCaption(value, y) {
          this.slicedArt('trial-ui-banner', 0, y, 406, 48);
          var heading = this.label(value, 0, y, 374, 21);
          heading.isBold = true;
          heading.color = Color.fromHEX(new Color(), '#51382b');
        };
        _proto.leaveMineTrial = function leaveMineTrial(retry) {
          var _this$motion7;
          if (retry === void 0) {
            retry = false;
          }
          var trial = this.trial;
          if (!trial) return;
          (_this$motion7 = this.motion) == null || _this$motion7.cancel();
          this.audio.stopTrial();
          this.trial = undefined;
          this.challenge = undefined;
          trial.restore();
          if (retry) this.startMineTrial(trial.id);else this.testLevelMenu();
        };
        _proto.finishMineTrial = function finishMineTrial(outcome) {
          var _this$motion8,
            _this66 = this;
          (_this$motion8 = this.motion) == null || _this$motion8.cancel();
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
            var star = this.art('game-logo', 0, -12, 85, 85);
            var _root = this.ui;
            if (star) {
              var reveal = this.newPageMotion();
              this.motion = reveal;
              if (!reveal.reduced) {
                star.setScale(.35, .35, 1);
                void reveal.play(tween(star).delay(.24).to(.16, {
                  scale: new Vec3(1.13, 1.13, 1)
                }, {
                  easing: 'backOut'
                }).call(function () {
                  if (_this66.ui === _root) _this66.audio.playTrial('reward');
                }).to(.11, {
                  scale: new Vec3(1, 1, 1)
                }));
              }
            }
            this.label("\u6709\u6548\u6362\u4F4D " + this.trial.moves + " \u6B21\u3000\u6700\u9AD8 " + this.trial.longestChain + " \u8FDE\u9501", 0, -83, 390, 17);
          } else if (outcome === 'fail') this.audio.playTrial('defeat');
          this.trialButton('再试一次', -164, function () {
            return _this66.leaveMineTrial(true);
          });
          this.trialButton('返回标题', -230, function () {
            return _this66.leaveMineTrial();
          }, 0, 230, 'trial-ui-back', true);
        };
        _proto.battleMaterials = function battleMaterials(id, room) {
          var amounts = {};
          for (var _i15 = 0, _Object$entries3 = Object.entries(dungeons[id].loot); _i15 < _Object$entries3.length; _i15++) {
            var _Object$entries3$_i = _Object$entries3[_i15],
              key = _Object$entries3$_i[0],
              count = _Object$entries3$_i[1];
            if (key !== 'gold') amounts[key] = Math.ceil(count * dungeonRewardMultiplier(room.type));
          }
          return amounts;
        };
        _proto.showMaterials = function showMaterials(motion, amounts, origin) {
          var _this67 = this;
          return Promise.all(Object.entries(amounts).map(function (_ref42, i) {
            var key = _ref42[0],
              count = _ref42[1];
            return _this67.combatPopup(motion, resourceNames[key] + ' × ' + count, origin.x, origin.y + 24 + i * 28, '#abdcc2');
          }));
        };
        _proto.victory = function victory(director, room, reward) {
          var _this68 = this;
          if (this.mineRecovery) return;
          if (this.dungeon !== director || director.room !== room || this.rewardedRooms.has(room)) return;
          this.rewardedRooms.add(room);
          var run = this.adventure;
          if (!this.trial) this.receiveGold(reward);
          if (this.trial) {
            void this.repeatTestEncounter(this.motion);
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
                return _this68.map();
              });
              return;
            }
            this.advanceRoom(director, room);
            return;
          }
          run.xp += room.enemies.length * 2;
          for (var _i16 = 0, _Object$entries4 = Object.entries(this.battleMaterials(run.id, room)); _i16 < _Object$entries4.length; _i16++) {
            var _run$loot$key;
            var _Object$entries4$_i = _Object$entries4[_i16],
              key = _Object$entries4$_i[0],
              count = _Object$entries4$_i[1];
            run.loot[key] = ((_run$loot$key = run.loot[key]) != null ? _run$loot$key : 0) + count;
          }
          if (room.type !== 'elite' && room.type !== 'boss') run.ordinaryWins++;
          this.advanceRoom(director, room);
        };
        _proto.finishAdventure = function finishAdventure(outcome) {
          var _this69 = this;
          if (this.mineRecovery) {
            if (outcome === 'win') this.showRecoveryStop('正式通关事务未启用。');else this.closeMineRecovery(outcome);
            return;
          }
          if (this.trial) {
            if (outcome === 'fail') void this.repeatTestEncounter(this.motion);else this.leaveMineTrial();
            return;
          }
          var run = this.adventure;
          this.adventure = undefined;
          if (run) {
            var exit = exitBlessing(this.town, this.hp, this.baseMaxHP, outcome === 'win');
            this.town = exit.town;
            this.hp = exit.hp;
          }
          this.dungeon = undefined;
          this.automatic = false;
          this.busy = false;
          if (run) {
            var rate = outcome === 'win' ? 1 : outcome === 'retreat' ? .7 : .5;
            var earned = {};
            for (var _i17 = 0, _arr6 = Object.keys(run.loot); _i17 < _arr6.length; _i17++) {
              var key = _arr6[_i17];
              earned[key] = Math.floor(run.loot[key] * rate);
            }
            earned.gold = Math.floor(run.coins * rate);
            if (outcome === 'win') {
              var _this$hunt2;
              if (!this.cleared.has(run.id)) {
                var _earned$gold;
                this.cleared.add(run.id);
                earned.gold = ((_earned$gold = earned.gold) != null ? _earned$gold : 0) + 12;
              }
              this.questEvent('clear', run.id);
              if (((_this$hunt2 = this.hunt) == null ? void 0 : _this$hunt2.state) === 'active' && this.hunt.target === run.id) this.hunt = _extends({}, this.hunt, {
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
                return _this69.map();
              });
              this.button('整理角色与装备', -34, function () {
                return _this69.roster();
              });
              return;
            }
          }
          if (outcome === 'fail') {
            this.audio.play('defeat');
            this.hp = this.maxHP;
            this.dp = 0;
            this.location = locations.indexOf('village');
            this.save();
            this.page('探索失败', '你在溪桥村的酒馆醒来，生命已恢复。护甲需要在铁匠铺修补。', 'village-tavern-stage');
            this.button('起身，回到酒馆', 14, function () {
              return _this69.tavern(true);
            });
          } else this.menu();
        };
        _proto.map = function map() {
          var _this70 = this,
            _root$getChildByName;
          var mapArt = [].concat(contentGroups.map, ['village-stage', 'h'], this.party.map(function (role) {
            return 'hero-' + role;
          }), locations.filter(function (id) {
            return unlocked(id, _this70.cleared);
          }).map(function (id) {
            return 'travel-' + id + '-plains';
          }));
          if (this.deferContent(function () {
            return _this70.map();
          }, 'map:' + this.party.join('') + ':' + mapArt.join(','), mapArt)) return;
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
          this.art('world-travel', 0, mapY, mapSize, mapSize);
          var settlementX = (444.5 / 940 - .5) * mapSize;
          var settlementY = (.5 - 722.5 / 940) * mapSize + mapY;
          var villageArt = this.art('world-village-cut', settlementX, settlementY, 349 / 940 * mapSize, 243 / 940 * mapSize);
          var at = function at(_ref43) {
            var x = _ref43[0],
              y = _ref43[1];
            return new Vec3((x - 50) * mapSize / 100, (50 - y) * mapSize / 100 + mapY, 0);
          };
          var marker = at(this.mapLabelPoint(current));
          var tokenY = 52;
          var token = this.art('hero-s', marker.x, marker.y + tokenY, 68, 68);
          if (token && this.town.blessing) {
            var badge = this.box('地图祝福', 0, 44, 22, 22, '#314e3a', token);
            this.art('h', 0, 0, 18, 18, badge);
            this.outline(this.label('1', 6, -6, 14, 10, badge));
          }
          var traveling = false;
          var root = this.ui;
          var caption = (_root$getChildByName = root.getChildByName('第一章 · 苔石边境')) == null ? void 0 : _root$getChildByName.getComponent(Label);
          var _loop13 = function _loop13() {
            var _this70$journal$entri, _this70$journal$entri2, _this70$hunt, _this70$journal$entri3, _this70$hunt2;
            var id = _step57.value;
            var pt = at(_this70.mapLabelPoint(id));
            var ready = unlocked(id, _this70.cleared);
            var dx = 0,
              dy = 0;
            var node = _this70.box(locationNames[id], pt.x + dx, pt.y + dy, 104, 38);
            var settlement = id === 'village' ? _this70.box('村庄建筑点击区', settlementX - pt.x - dx, settlementY - (pt.y + dy) - 16, 113, 48, undefined, node) : undefined;
            if (id === 'village' && ((_this70$journal$entri = _this70.journal.entries.rescue) != null && _this70$journal$entri.active || (_this70$journal$entri2 = _this70.journal.entries.knight) != null && _this70$journal$entri2.active || _this70.reported && !_this70.party.includes('d') || _this70.cleared.has('swamp') && !_this70.party.includes('m') && !_this70.town.mageQuest)) _this70.taskMark(node, 48, 17);
            if (guide && id === 'village') {
              _this70.mapQuestHighlight(node);
              _this70.mapGuide(node.position);
            }
            var banner = _this70.slicedArt('map-parchment', 0, 0, 104, 37, node);
            if (banner) banner.getComponent(Sprite).grayscale = !ready;else _this70.box('地图名称备用底框', 0, 0, 104, 37, ready ? '#f8dfb4' : '#c3b9a9', node);
            var title = _this70.label(locationNames[id], 0, 0, 82, 16, node);
            title.isBold = true;
            title.color = Color.fromHEX(new Color(), ready ? '#573724' : '#625b54');
            if (((_this70$hunt = _this70.hunt) == null ? void 0 : _this70$hunt.state) === 'active' && _this70.hunt.target === id || id === 'tower' && (_this70$journal$entri3 = _this70.journal.entries.mage) != null && _this70$journal$entri3.active || id === 'village' && ((_this70$hunt2 = _this70.hunt) == null ? void 0 : _this70$hunt2.state) === 'ready') {
              _this70.taskMark(node, 46, 17);
            }
            var visit = /*#__PURE__*/function () {
              var _ref44 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee42() {
                var _root$getChildByName2, _root$getChildByName3, _root$getChildByName4;
                var path, places, travelTime, pathPoints;
                return _regeneratorRuntime().wrap(function _callee42$(_context45) {
                  while (1) switch (_context45.prev = _context45.next) {
                    case 0:
                      if (!(traveling || !ready || _this70.ui !== root || guide && id !== 'village')) {
                        _context45.next = 2;
                        break;
                      }
                      return _context45.abrupt("return");
                    case 2:
                      path = worldRoute(current, id, function (point) {
                        return !locations.includes(point) || unlocked(point, _this70.cleared);
                      });
                      if (path.length) {
                        _context45.next = 5;
                        break;
                      }
                      return _context45.abrupt("return");
                    case 5:
                      traveling = true;
                      (_root$getChildByName2 = root.getChildByName('引导手套')) == null || _root$getChildByName2.destroy();
                      (_root$getChildByName3 = root.getChildByName('教学聚焦光环')) == null || _root$getChildByName3.destroy();
                      (_root$getChildByName4 = root.getChildByName('村庄教学遮罩')) == null || _root$getChildByName4.destroy();
                      if (caption) caption.string = '前往' + locationNames[id];
                      if (!(path.length > 1)) {
                        _context45.next = 18;
                        break;
                      }
                      places = _this70.mapTravelViews(current, id);
                      travelTime = Math.max(1.3, (places.length - 1) * .46, path.length * .24);
                      pathPoints = worldTrack(path).slice(0, -1).map(at);
                      pathPoints.push(at(_this70.mapLabelPoint(id)));
                      if (current !== id) pathPoints.unshift(at(worldPoints[current]));
                      _context45.next = 18;
                      return Promise.all([_this70.walkParty(travelTime, places), _this70.moveMapToken(token, pathPoints, tokenY, travelTime)]);
                    case 18:
                      if (!(_this70.ui !== root)) {
                        _context45.next = 20;
                        break;
                      }
                      return _context45.abrupt("return");
                    case 20:
                      if (!(id === 'village')) {
                        _context45.next = 26;
                        break;
                      }
                      _this70.location = locations.indexOf(id);
                      _this70.villageGuidePending = false;
                      _this70.save();
                      _this70.village();
                      return _context45.abrupt("return");
                    case 26:
                      _this70.audio.play('door');
                      _context45.next = 29;
                      return _this70.curtain(false);
                    case 29:
                      if (!(_this70.ui !== root)) {
                        _context45.next = 31;
                        break;
                      }
                      return _context45.abrupt("return");
                    case 31:
                      _this70.location = locations.indexOf(id);
                      _this70.save();
                      _this70.enter(id, function () {
                        return _this70.curtain(true);
                      });
                    case 34:
                    case "end":
                      return _context45.stop();
                  }
                }, _callee42);
              }));
              return function visit() {
                return _ref44.apply(this, arguments);
              };
            }();
            node.on(Node.EventType.TOUCH_END, visit);
            settlement == null || settlement.on(Node.EventType.TOUCH_END, visit);
            if (id === 'village') villageArt == null || villageArt.on(Node.EventType.TOUCH_END, visit);
          };
          for (var _iterator57 = _createForOfIteratorHelperLoose(locations), _step57; !(_step57 = _iterator57()).done;) {
            _loop13();
          }
          token == null || token.setSiblingIndex(this.ui.children.length - 1);
          if (guide) this.label('点击高亮的溪桥村', 0, -364, 240, 16);
          var footerY = guide ? -399 : -386;
          this.worldFooter(function () {
            return _this70.map();
          }, function () {
            return !traveling && !guide;
          }, footerY);
          this.button('规则', footerY, function () {
            if (!traveling && !guide) _this70.showRules();
          }, 0, 112);
          this.button('返回主菜单', footerY, function () {
            if (!traveling && !guide) _this70.menu();
          }, 145, 135);
        };
        _proto.mapGuide = function mapGuide(target) {
          var layer = this.box('村庄教学遮罩', 0, 0, 480, 854);
          var ink = layer.addComponent(Graphics);
          ink.fillColor = new Color(9, 17, 22, 145);
          var left = target.x - 64,
            right = target.x + 64,
            bottom = target.y - 28,
            top = target.y + 28;
          ink.rect(-240, -427, 480, bottom + 427);
          ink.rect(-240, top, 480, 427 - top);
          ink.rect(-240, bottom, left + 240, top - bottom);
          ink.rect(right, bottom, 240 - right, top - bottom);
          ink.fill();
          this.guidePointer(layer, target, target);
        };
        _proto.mapQuestHighlight = function mapQuestHighlight(node) {
          var glow = this.box('任务目标高亮', 0, 0, 120, 50, undefined, node).addComponent(Graphics);
          for (var _i18 = 0, _arr7 = [[14, 20], [9, 42], [5, 98], [2, 255]]; _i18 < _arr7.length; _i18++) {
            var _arr7$_i = _arr7[_i18],
              _width = _arr7$_i[0],
              alpha = _arr7$_i[1];
            glow.strokeColor = new Color(255, 207, 79, alpha);
            glow.lineWidth = _width;
            glow.roundRect(-52, -17, 104, 34, 9);
            glow.stroke();
          }
        };
        _proto.moveMapToken = function moveMapToken(token, points, floorOffset, seconds) {
          var _this71 = this;
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
              return motion.to(_this71.travelDuration(seconds * lengths[i] / Math.max(1, total)), {
                position: position
              });
            });
            motion.call(function () {
              return resolve();
            }).start();
          });
        };
        _proto.showRules = function showRules(tab, back) {
          var _this72 = this;
          if (tab === void 0) {
            tab = 0;
          }
          if (back === void 0) {
            back = function back() {
              return _this72.map();
            };
          }
          var labels = ['战斗', '探索', '存档'];
          var lines = [['交换相邻纹章。剑和星攻击，盾回复 DP，心恢复 HP。', '四连留下银框技能纹章，再消触发小技能。', '五格以上留下金色高级纹章，再消触发大招。'], ['首战直接开始，战斗结束后队伍自动前进。', '商人、剧情和分支门需要先完成当前选择。'], ['局外装备、资源、进度与成长自动保存。', '刷新会结束当前地牢并恢复出发前的存档。', '通关、主动撤离、失败分别保留全部、70%、50% 战利品。']];
          this.page('冒险规则', '');
          labels.forEach(function (label, i) {
            return _this72.button(label, 88, function () {
              return _this72.showRules(i, back);
            }, (i - 1) * 143, 132);
          });
          lines[tab].forEach(function (line, i) {
            return _this72.label(line, 0, 10 - i * 55, 444, 19);
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
          var _this$adventure$id, _this$adventure5, _this$dungeon$rooms$l2, _this$dungeon17;
          if (depth === void 0) {
            var _this$dungeon$depth, _this$dungeon16;
            depth = (_this$dungeon$depth = (_this$dungeon16 = this.dungeon) == null ? void 0 : _this$dungeon16.depth) != null ? _this$dungeon$depth : 0;
          }
          var id = (_this$adventure$id = (_this$adventure5 = this.adventure) == null ? void 0 : _this$adventure5.id) != null ? _this$adventure$id : 'forest';
          var count = (_this$dungeon$rooms$l2 = (_this$dungeon17 = this.dungeon) == null ? void 0 : _this$dungeon17.rooms.length) != null ? _this$dungeon$rooms$l2 : 1;
          var last = dungeonReels[id].stops.length - 1;
          if (id === 'forest' && !this.useForestReel) return 'stage-forest-' + Math.max(0, depth);
          if (depth >= count - 1 && count > 1) return this.lastDungeonBackdrop(id);
          return 'stage-' + id + '-' + Math.max(0, Math.min(depth, last - 1));
        };
        _proto.mapTravelViews = function mapTravelViews(from, to) {
          var _this73 = this;
          return [this.locationBackdrop(from), 'travel-plains', this.locationBackdrop(to)].filter(function (name, index, frames) {
            return (_this73.textures.has(name) || _this73.stageFrames.has(name)) && name !== frames[index - 1];
          });
        };
        _proto.walkParty = function walkParty(seconds, views, direction, incoming) {
          var _this$activeTravelCan,
            _root$getChildByName5,
            _sequence$,
            _sequence$2,
            _this74 = this;
          if (direction === void 0) {
            direction = 1;
          }
          (_this$activeTravelCan = this.activeTravelCancel) == null || _this$activeTravelCan.call(this);
          var walking = this.newPageMotion();
          seconds = this.travelDuration(seconds);
          var root = this.ui,
            sequence = views != null ? views : [this.dungeonBackdrop()];
          var backdrop = (_root$getChildByName5 = root.getChildByName(sequence[0])) != null ? _root$getChildByName5 : root.getChildByName('行进风景');
          var audit = {
            id: ++this.travelSerial,
            root: root.uuid,
            status: 'running',
            frames: 0,
            seconds: seconds,
            reason: undefined
          };
          this.travelAudit.push(audit);
          if (this.travelAudit.length > 8) this.travelAudit.shift();
          var party = Array.from(this.heroes.values());
          if (!backdrop || party.length !== this.party.length || party.some(function (n) {
            return !n.isValid || !n.activeInHierarchy || n.parent !== root;
          })) {
            audit.status = 'failed';
            audit.reason = 'missing-travel-view';
            this.pageMotions["delete"](walking);
            return Promise.resolve(false);
          }
          var width = stageGrid.width,
            height = stageGrid.height,
            centerY = stageGrid.centerY;
          var fromRoom = /^stage-([a-z]+)-(\d+)$/.exec(sequence[0]),
            toRoom = /^stage-([a-z]+)-(\d+)$/.exec((_sequence$ = sequence[1]) != null ? _sequence$ : '');
          var area = fromRoom == null ? void 0 : fromRoom[1],
            reelName = area && area === (toRoom == null ? void 0 : toRoom[1]) ? area + '-reel' : '';
          var sceneryFrame = this.stageFrames.get(reelName),
            reelInfo = area ? this.stageReels.get(area) : undefined;
          var labFrom = this.forestLabStop(sequence[0]),
            labTo = this.forestLabStop((_sequence$2 = sequence[1]) != null ? _sequence$2 : '');
          var drawBackground = function drawBackground(progress) {},
            distance = width;
          if (labFrom !== undefined && labTo !== undefined) {
            backdrop.name = '行进风景';
            distance = Math.abs(labTo - labFrom) * (this.forestLayout.bounds.ground[0] - width);
            drawBackground = function drawBackground(progress) {
              return _this74.positionForestLab(backdrop, labFrom + (labTo - labFrom) * progress);
            };
          } else if (fromRoom && toRoom && sceneryFrame && reelInfo) {
            var _this$stageTravel3;
            var layer = backdrop.getSiblingIndex(),
              _frame2 = this.box('行进风景', 0, centerY, width, height);
            _frame2.addComponent(Mask).type = Mask.Type.GRAPHICS_RECT;
            _frame2.setSiblingIndex(layer);
            backdrop.removeFromParent();
            backdrop.destroy();
            var rect = sceneryFrame.rect,
              pixelScale = rect.width / reelInfo.width;
            (_this$stageTravel3 = this.stageTravel) == null || _this$stageTravel3.dispose();
            var travel = this.stageTravel = new StageTravel(Math.ceil(reelInfo.width / width), width, 1, function (index) {
              var start = index * width,
                span = Math.min(width, reelInfo.width - start),
                chunk = _this74.box(reelName + ' ' + index, 0, 0, width, height, undefined, _frame2);
              var crop = _this74.frameCrop(sceneryFrame, rect.x + start * pixelScale, rect.y, span * pixelScale, rect.height);
              _this74.paintFrame(reelName, crop, (span - width) / 2, 0, span, height, chunk);
              chunk.once(Node.EventType.NODE_DESTROYED, function () {
                return crop.destroy();
              });
              return chunk;
            });
            var from = reelInfo.stops[Number(fromRoom[2])] * (reelInfo.width - width),
              to = reelInfo.stops[Number(toRoom[2])] * (reelInfo.width - width);
            distance = Math.abs(to - from);
            drawBackground = function drawBackground(progress) {
              return travel.seek(from + (to - from) * progress);
            };
          } else if (sequence.length > 1) {
            var _this$stageTravel4;
            var _layer = backdrop.getSiblingIndex(),
              viewport = this.box('行进风景', 0, centerY, width, height, undefined, root);
            viewport.addComponent(Mask).type = Mask.Type.GRAPHICS_RECT;
            viewport.setSiblingIndex(_layer);
            backdrop.setParent(viewport);
            backdrop.setPosition(0, 0);
            (_this$stageTravel4 = this.stageTravel) == null || _this$stageTravel4.dispose();
            var _travel = this.stageTravel = new StageTravel(sequence.length, width, direction, function (index) {
              return _this74.stageBackdrop(sequence[index], 0, 0, viewport);
            }, backdrop);
            distance = (sequence.length - 1) * width;
            drawBackground = function drawBackground(progress) {
              return _travel.seek(distance * progress);
            };
          }
          var preview;
          var enemies = [];
          if (incoming != null && incoming.length) {
            if (incoming.some(function (foe) {
              return !_this74.textures.has(foe.art);
            })) {
              audit.status = 'failed';
              audit.reason = 'enemy-art-not-ready';
              this.pageMotions["delete"](walking);
              return Promise.resolve(false);
            }
            preview = this.box('行进遇敌', 0, centerY, width, height, undefined, root);
            preview.addComponent(Mask).type = Mask.Type.GRAPHICS_RECT;
            var front = root.getChildByName('400 森林前景');
            if (front) preview.setSiblingIndex(front.getSiblingIndex());
            incoming.forEach(function (foe, index) {
              var _this74$enemyPlacemen = _this74.enemyPlacement(foe, incoming.length, index),
                x = _this74$enemyPlacemen.x,
                y = _this74$enemyPlacemen.y,
                size = _this74$enemyPlacemen.size,
                ground = _this74$enemyPlacemen.ground,
                node = _this74.box('遇敌预览 ' + index, x + distance, y - centerY, size, size, undefined, preview);
              _this74.groundShadow(node, ground - y, foe.art, size);
              var portrait = _this74.art(foe.art, 0, 0, size, size, node);
              _this74.faceStage(portrait, 'right');
              enemies.push({
                node: node,
                x: x,
                y: y - centerY
              });
            });
          }
          var poses = party.map(function (hero, index) {
            var _portrait$angle;
            var portrait = hero.children.find(function (n) {
                return n.getComponent(Sprite);
              }),
              bounds = portrait == null ? void 0 : portrait.getComponent(UITransform);
            var anchor = bounds == null ? void 0 : bounds.anchorPoint.clone(),
              position = portrait == null ? void 0 : portrait.position.clone(),
              angle = (_portrait$angle = portrait == null ? void 0 : portrait.angle) != null ? _portrait$angle : 0,
              home = hero.position.clone();
            if (bounds && portrait) {
              var _portraitBottomPaddin2;
              var foot = (_portraitBottomPaddin2 = portraitBottomPadding[portrait.name]) != null ? _portraitBottomPaddin2 : 0;
              bounds.setAnchorPoint(.5, foot);
              portrait.setPosition(0, -bounds.height * (.5 - foot), 0);
            }
            return {
              hero: hero,
              index: index,
              portrait: portrait,
              bounds: bounds,
              anchor: anchor,
              position: position,
              angle: angle,
              home: home
            };
          });
          var clock = new TravelClock(seconds),
            encounter = {
              distance: distance,
              seconds: seconds,
              samples: []
            };
          if (incoming != null && incoming.length) this.encounterTravelAudit = encounter;
          var draw = function draw(progress) {
            drawBackground(progress);
            for (var _iterator58 = _createForOfIteratorHelperLoose(poses), _step58; !(_step58 = _iterator58()).done;) {
              var _pose$portrait;
              var pose = _step58.value;
              if (!pose.hero.isValid) throw Error('Travel actor destroyed');
              var value = travelPose(clock.elapsed, pose.index);
              pose.hero.setPosition(pose.home.x + (progress === 1 ? 0 : value.x), pose.home.y + (progress === 1 ? 0 : value.y), pose.home.z);
              if ((_pose$portrait = pose.portrait) != null && _pose$portrait.isValid) pose.portrait.angle = progress === 1 ? pose.angle : pose.angle + value.angle;
            }
            for (var _i19 = 0, _enemies = enemies; _i19 < _enemies.length; _i19++) {
              var _enemies$_i = _enemies[_i19],
                node = _enemies$_i.node,
                _x75 = _enemies$_i.x,
                y = _enemies$_i.y;
              if (!node.isValid) throw Error('Travel enemy destroyed');
              node.setPosition(_x75 + distance * (1 - progress), y);
            }
            audit.frames++;
            if (enemies.length && encounter.samples.length < 90) encounter.samples.push({
              time: clock.elapsed,
              x: enemies[0].node.position.x
            });
          };
          var finishWalking = this.audio.beginWalking();
          return new Promise(function (resolve) {
            var settled = false,
              unsubscribe = function unsubscribe() {};
            var finish = function finish(played, reason) {
              var _preview;
              if (settled) return;
              settled = true;
              _this74.unschedule(tick);
              unsubscribe();
              root.off(Node.EventType.NODE_DESTROYED, onDestroy);
              audit.status = played ? 'completed' : 'cancelled';
              audit.reason = reason;
              for (var _iterator59 = _createForOfIteratorHelperLoose(poses), _step59; !(_step59 = _iterator59()).done;) {
                var _pose$portrait2;
                var pose = _step59.value;
                if (pose.hero.isValid) pose.hero.setPosition(pose.home);
                if ((_pose$portrait2 = pose.portrait) != null && _pose$portrait2.isValid && pose.bounds && pose.anchor && pose.position) {
                  pose.bounds.setAnchorPoint(pose.anchor);
                  pose.portrait.setPosition(pose.position);
                  pose.portrait.angle = pose.angle;
                }
              }
              if (!played && (_preview = preview) != null && _preview.isValid) {
                preview.removeFromParent();
                preview.destroy();
              }
              finishWalking();
              _this74.pageMotions["delete"](walking);
              if (_this74.activeTravelCancel === cancel) _this74.activeTravelCancel = undefined;
              resolve(played);
            };
            var cancel = function cancel() {
                return walking.cancel();
              },
              onDestroy = function onDestroy() {
                return walking.cancel();
              };
            var tick = function tick(dt) {
              if (settled) return;
              if (_this74.ui !== root || !root.isValid) {
                finish(false, 'stale-root');
                return;
              }
              if (walking.isPaused || typeof document !== 'undefined' && document.visibilityState === 'hidden') return;
              try {
                draw(clock.advance(dt));
                if (clock.done) finish(true);
              } catch (error) {
                audit.reason = String(error);
                finish(false, 'travel-render-failed');
                console.warn('Travel presentation failed', error);
              }
            };
            unsubscribe = walking.onCancel(function () {
              return finish(false, 'cancelled');
            });
            root.once(Node.EventType.NODE_DESTROYED, onDestroy);
            _this74.activeTravelCancel = cancel;
            try {
              draw(0);
              _this74.schedule(tick, 0);
            } catch (error) {
              finish(false, 'travel-start-failed');
              console.warn('Travel presentation failed', error);
            }
          });
        };
        _proto.curtain = function curtain(opening) {
          var _this75 = this;
          var root = this.ui;
          var centerY = stageGrid.centerY,
            width = stageGrid.width,
            height = stageGrid.height;
          var overlay = this.box('地图转场', 0, centerY, width, height);
          var ink = overlay.addComponent(Graphics);
          var state = {
            progress: 0
          };
          var draw = function draw() {
            ink.clear();
            ink.fillColor = Color.BLACK;
            var cell = 10;
            for (var _x76 = 0; _x76 < width; _x76 += cell) {
              var offset = (opening ? width - _x76 - cell : _x76) / (width - cell);
              var growth = Math.max(0, Math.min(1, (state.progress - offset * .66) / .34));
              var size = cell * (opening ? 1 - growth : growth);
              if (!size) continue;
              for (var y = 0; y < height; y += cell) {
                var left = _x76 + (cell - size) / 2;
                var bottom = y + (cell - size) / 2;
                ink.rect(left - width / 2, bottom - height / 2, size, size);
              }
            }
            ink.fill();
          };
          draw();
          return new Promise(function (resolve) {
            tween(state).to(_this75.travelDuration(.46), {
              progress: 1
            }, {
              onUpdate: function onUpdate() {
                if (overlay.isValid && _this75.ui === root) draw();
              }
            }).call(function () {
              if (opening && overlay.isValid) overlay.destroy();
              resolve();
            }).start();
          });
        };
        _proto.roster = function roster(selected, back) {
          var _this76 = this;
          if (selected === void 0) {
            selected = this.party[0];
          }
          if (back === void 0) {
            back = function back() {
              return _this76.map();
            };
          }
          var icons = ['gear-stage', 'tool-base', 'slot-main', 'slot-off', 'slot-armor', 'slot-accessory'].concat(equipment.map(function (item) {
            return 'gear-' + item.id;
          }), this.party.map(function (role) {
            return 'hero-' + role;
          }));
          if (this.deferContent(function () {
            return _this76.roster(selected, back);
          }, 'roster:' + this.party.join(''), icons)) return;
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
            return _this76.ui === root && !root.getChildByName('物品操作');
          };
          var cycle = function cycle(offset) {
            if (!active() || _this76.party.length < 2) return;
            var index = _this76.party.indexOf(selected);
            _this76.roster(_this76.party[(index + offset + _this76.party.length) % _this76.party.length], back);
          };
          var _loop14 = function _loop14() {
            var side = _arr8[_i20];
            var arrow = _this76.box(side < 0 ? '上一位角色' : '下一位角色', side * 205, 267, 44, 54);
            var frame = _this76.textures.get('trial-ui-back');
            var fit = frame ? Math.min(34 / frame.originalSize.width, 42 / frame.originalSize.height) : 1;
            var icon = frame ? _this76.art('trial-ui-back', 0, 0, frame.originalSize.width * fit, frame.originalSize.height * fit, arrow) : undefined;
            if (icon) icon.setScale(-side, 1, 1);else _this76.outline(_this76.label(side < 0 ? '‹' : '›', 0, 0, 40, 31, arrow));
            arrow.on(Node.EventType.TOUCH_END, function () {
              return cycle(side);
            });
          };
          for (var _i20 = 0, _arr8 = [-1, 1]; _i20 < _arr8.length; _i20++) {
            _loop14();
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
          var _loop15 = function _loop15() {
            var slot = _slots[_i21];
            var item = equipment.find(function (entry) {
              return entry.id === _this76.inventory.slots[selected + ':' + slot.id];
            });
            var node = _this76.box(slot.name, slot.x, slot.y, 71, 71);
            var backdrop = _this76.art(item ? 'tool-base' : slot.icon, 0, 0, item ? 71 : 50, item ? 71 : 50, node);
            if (backdrop && !item) backdrop.addComponent(UIOpacity).opacity = 126;
            if (item) {
              _this76.art('gear-' + item.id, 0, 4, 49, 49, node);
              _this76.outline(_this76.label(item.name, 0, -24, 69, 13, node));
            }
            node.on(Node.EventType.TOUCH_END, function () {
              if (!active()) return;
              if (item) {
                _this76.gearActions(item.id, true, selected, back);
                return;
              }
              var compatible = equipment.find(function (entry) {
                return entry.owner === selected && entry.slot === slot.id && _this76.inventory.bag.includes(entry.id);
              });
              if (compatible) _this76.gearActions(compatible.id, false, selected, back);else _this76.popup('没有可装配物品', 0, 108);
            });
          };
          for (var _i21 = 0, _slots = slots; _i21 < _slots.length; _i21++) {
            _loop15();
          }
          this.box('背包底板', 0, -106, 430, 447, '#263931');
          this.button('背包', 88, function () {
            _this76.bagMaterials = false;
            _this76.roster(selected, back);
          }, -88, 146, !this.bagMaterials);
          this.button('材料', 88, function () {
            _this76.bagMaterials = true;
            _this76.roster(selected, back);
          }, 88, 146, this.bagMaterials);
          if (this.bagMaterials) {
            var items = Object.entries(this.inventory.materials).filter(function (_ref45) {
              var count = _ref45[1];
              return count > 0;
            });
            if (!items.length) this.label('尚无材料', 0, -52, 350, 20);
            items.forEach(function (_ref46, i) {
              var key = _ref46[0],
                count = _ref46[1];
              var cell = _this76.box('材料 · ' + key, (i % 4 - 1.5) * 102, 14, 94, 98, '#47604c');
              _this76.label(resourceNames[key], 0, 8, 86, 20, cell);
              _this76.label('×' + count, 22, -26, 44, 15, cell);
            });
          }
          var bag = [].concat(this.potion ? [{
            id: 'potion',
            label: '治疗药水 ×' + this.potion,
            icon: '',
            item: null
          }] : [], equipment.filter(function (item) {
            return _this76.inventory.bag.includes(item.id);
          }).map(function (item) {
            return {
              id: item.id,
              label: item.name,
              icon: 'gear-' + item.id,
              item: item
            };
          }));
          var _loop16 = function _loop16() {
            var content = bag[_index24];
            var x = (_index24 % 4 - 1.5) * 102,
              y = 28 - Math.floor(_index24 / 4) * 108;
            var cell = _this76.box(content ? '背包 · ' + content.label : '空背包格 ' + _index24, x, y, 94, 100, content ? '#47604c' : '#31473b');
            if (!content) return 1; // continue
            if (content.id === 'potion') _this76.drawPotion(cell);else if (!_this76.art(content.icon, 0, 11, 45, 45, cell)) _this76.label('◇', 0, 11, 45, 25, cell);
            _this76.label(content.label, 0, -28, 90, 15, cell);
            cell.on(Node.EventType.TOUCH_END, function () {
              if (!active()) return;
              if (content.id !== 'potion') _this76.gearActions(content.id, false, selected, back);else _this76.itemActions('治疗药水', '恢复至多 45 HP。', [['使用药水', function () {
                if (!_this76.potion || _this76.hp >= _this76.maxHP) return false;
                _this76.potion--;
                _this76.hp = Math.min(_this76.maxHP, _this76.hp + 45);
                _this76.audio.play('potion');
                return true;
              }], ['丢弃 1 瓶', function () {
                if (!_this76.potion) return false;
                _this76.potion--;
                return true;
              }]], function () {
                return _this76.roster(selected, back);
              });
            });
          };
          for (var _index24 = 0; !this.bagMaterials && _index24 < 12; _index24++) {
            if (_loop16()) continue;
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
            _this77 = this;
          var item = equipment.find(function (entry) {
            return entry.id === id;
          });
          if (!item) return;
          var description = [item.attack ? '攻击 +' + item.attack : '', item.hp ? 'HP +' + item.hp : '', item.dp ? 'DP +' + item.dp : '', (_item$effect = item.effect) != null ? _item$effect : ''].filter(Boolean).join(' · ');
          var actions = [];
          if (equipped || this.party.includes(item.owner)) actions.push([equipped ? '卸下装备' : '装备给' + heroes[item.owner].name, function () {
            return _this77.inventory.hasEquipped(id) === equipped && _this77.inventory.toggle(id);
          }]);
          actions.push(['丢弃装备', function () {
            return _this77.inventory.discard(id);
          }]);
          this.itemActions(item.name, description, actions, function () {
            return _this77.roster(selected, back);
          });
        };
        _proto.itemActions = function itemActions(title, detail, actions, redraw) {
          var _this78 = this;
          var root = this.ui;
          var overlay = this.box('物品操作', 0, 0, 480, 854, '#101913c2');
          overlay.on(Node.EventType.TOUCH_START, function () {});
          overlay.on(Node.EventType.TOUCH_END, function () {});
          this.box('物品操作卡', 0, -75, 394, 320, '#2b4037', overlay);
          this.label(title, 0, 47, 340, 25, overlay).isBold = true;
          this.label(detail, 0, 4, 345, 16, overlay);
          actions.forEach(function (_ref47, index) {
            var label = _ref47[0],
              perform = _ref47[1];
            var button = _this78.button(label, -62 - index * 62, function () {
              if (_this78.ui !== root || !overlay.isValid) return;
              if (!perform()) {
                _this78.popup('现在无法执行', 0, 146);
                return;
              }
              _this78.hp = Math.min(_this78.hp, _this78.maxHP);
              _this78.dp = Math.min(_this78.dp, _this78.maxDP);
              _this78.audio.play('equip');
              _this78.save();
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
          var _this79 = this,
            _this$hunt3;
          if (this.deferContent(function () {
            return _this79.village();
          }, 'village-scene', [].concat(contentGroups.village, ['npc-villager'], this.party.map(function (id) {
            return 'hero-' + id;
          })))) return;
          this.save();
          var guided = !this.reported;
          var findRoland = this.town.knightQuest && !this.party.includes('d');
          var chiefTask = this.town.rescued && !this.reported || this.reported && !this.party.includes('d') && !this.town.knightQuest || this.cleared.has('swamp') && !this.party.includes('m') && !this.town.mageQuest;
          var quest = guided ? '点击红色任务标记的村长家' : findRoland ? '前往酒馆，与盾卫罗兰会合' : '休整或领取委托';
          this.page('溪桥村', quest, 'village-stage');
          this.art('village-navigation', 0, -129, 464, 464);
          // Building anchors measured from the supplied 1254-square navigation map.
          var destinations = [{
            name: '村长家',
            caption: '村长家',
            art: 'chief',
            x: -128,
            y: -24,
            highlight: chiefTask,
            action: function action() {
              return _this79.chief();
            }
          }, {
            name: '商店',
            caption: '商店',
            art: 'shop',
            x: 125,
            y: -167,
            highlight: false,
            action: function action() {
              return _this79.villageShop();
            }
          }, {
            name: '铁匠铺',
            caption: '铁匠铺',
            art: 'smith',
            x: 155,
            y: -39,
            highlight: false,
            action: function action() {
              return _this79.smithy();
            }
          }, {
            name: '酒馆',
            caption: '酒馆',
            art: 'tavern',
            x: -116,
            y: -160,
            highlight: findRoland || ((_this$hunt3 = this.hunt) == null ? void 0 : _this$hunt3.state) === 'ready' || this.taught && (!this.hunt || this.hunt.state === 'cooldown' && this.hunt.until <= Date.now()),
            action: function action() {
              return _this79.tavern();
            }
          }, {
            name: '祭坛',
            caption: '教堂',
            art: 'altar',
            x: 32,
            y: 37,
            highlight: false,
            action: function action() {
              return _this79.altar();
            }
          }, {
            name: '村口 · 返回地图',
            caption: '村口 · 返回地图',
            art: 'gate',
            x: 0,
            y: -291,
            highlight: false,
            action: function action() {
              return _this79.map();
            }
          }];
          var root = this.ui;
          var _loop17 = function _loop17() {
            var site = _destinations[_i22];
            var gate = site.art === 'gate';
            var width = gate ? 180 : 151;
            var height = gate ? 64 : 112;
            var node = _this79.box(site.name, site.x, site.y, width, height);
            if (site.highlight) _this79.taskMark(node, width / 2 - 12, -height / 2 + 13);
            var caption = _this79.label(site.caption, 0, -height / 2 + 13, width - 18, 17, node);
            caption.color = Color.fromHEX(new Color(), '#523420');
            caption.isBold = true;
            caption.enableOutline = true;
            caption.outlineColor = Color.fromHEX(new Color(), '#fff0cf');
            caption.outlineWidth = 3;
            node.on(Node.EventType.TOUCH_END, function () {
              if (_this79.ui !== root) return;
              _this79.audio.play('door');
              _this79.questEvent('interact', 'village:' + site.art);
              site.action();
            });
          };
          for (var _i22 = 0, _destinations = destinations; _i22 < _destinations.length; _i22++) {
            _loop17();
          }
          this.worldFooter(function () {
            return _this79.village();
          });
        };
        _proto.taskMark = function taskMark(parent, x, y) {
          var node = this.box('红色任务标记', x, y, 28, 28, undefined, parent);
          var ink = node.addComponent(Graphics);
          ink.fillColor = new Color(232, 55, 66);
          ink.circle(0, 0, 13);
          ink.fill();
          return node;
        };
        _proto.townWrite = function townWrite(change) {
          var _this$saveGate9;
          var before = {
            materials: _extends({}, this.inventory.materials),
            journal: new QuestJournal(questBook, this.journal.entries),
            hunt: this.hunt,
            town: structuredClone(this.town),
            hp: this.hp,
            dp: this.dp,
            gold: this.gold,
            reported: this.reported,
            party: [].concat(this.party)
          };
          if (!((_this$saveGate9 = this.saveGate) != null && _this$saveGate9.writable)) {
            this.popup('当前页面不能写入存档', 0, 85);
            return false;
          }
          if (change() === false) return false;
          var result = this.save();
          if (result === 'committed' || result === 'reconciled') return true;
          if (result === 'uncertain') {
            this.showRecoveryStop('操作结果无法核对，请重新加载。');
            return false;
          }
          var materials = before.materials,
            previous = _objectWithoutPropertiesLoose(before, _excluded);
          Object.assign(this, previous);
          Object.assign(this.inventory.materials, materials);
          this.popup('保存失败，未执行操作', 0, 85);
          return false;
        };
        _proto.altar = function altar() {
          var _this80 = this;
          this.page('溪桥村祭坛', "\u796D\u575B\u795D\u798F " + this.town.altarCharge + "/1 \xB7 \u901A\u5173\u4EFB\u610F\u526F\u672C\u540E\u91CD\u65B0\u5145\u80FD\u3002", 'village-stage');
          var source = this.textures.get('village-navigation');
          if (source && !this.textures.has('altar-object')) this.textures.set('altar-object', this.frameCrop(source, source.rect.width * .41, source.rect.height * .01, source.rect.width * .23, source.rect.height * .28));
          this.sceneActor('altar-object', 140, 114, '祭坛 ');
          this.label('祝福：生命上限 +100，并恢复 100 HP。', 0, 46, 430, 20);
          this.label('进入副本后持续，离开副本时消耗。', 0, 7, 430, 17);
          this.button(this.town.blessing ? '已获得祝福' : "\u7948\u613F \xB7 \u514D\u8D39\u9886\u53D6 (" + this.town.altarCharge + "/1)", -59, function () {
            var next = claimAltar(_this80.town, _this80.hp, _this80.baseMaxHP);
            if (!next) {
              _this80.popup(_this80.town.blessing ? '已有祝福' : '祭坛尚未充能', 0, 91);
              return;
            }
            var root = _this80.ui;
            void _this80.presentRecovery('hp', function () {
              return _this80.townWrite(function () {
                _this80.town = next.town;
                _this80.hp = next.hp;
              });
            }).then(function () {
              if (_this80.ui === root) _this80.altar();
            });
          });
          this.button('返回村庄', -136, function () {
            return _this80.village();
          });
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
        _proto.popSpeaker = function popSpeaker(actor) {
          var motion = this.newPageMotion();
          if (motion.reduced) return;
          var base = actor.scale.clone();
          void motion.play(tween(actor).to(.10, {
            scale: new Vec3(base.x * 1.10, base.y * 1.10, base.z)
          }, {
            easing: 'sineOut'
          }).to(.18, {
            scale: base
          }, {
            easing: 'sineInOut'
          }));
        };
        _proto.faceStage = function faceStage(node, side) {
          node == null || node.setScale(side === 'right' ? -1 : 1, 1, 1);
        };
        _proto.sceneActor = function sceneActor(art, x, height, prefix) {
          var _this81 = this;
          if (prefix === void 0) {
            prefix = '剧情人物 ';
          }
          var groundY = stageGrid.groundY;
          var y = this.portraitY(art, groundY, height);
          var frame = this.textures.get(art);
          if (frame) {
            var _this$ui$getChildByNa2;
            var w = height * frame.originalSize.width / frame.originalSize.height;
            var actor = this.box(prefix + art, x, y, w, height);
            this.groundShadow(actor, groundY - y, art, w);
            var portrait = this.art(art, 0, 0, w, height, actor);
            if (portrait && !prefix.includes('道具') && art !== 'altar-object') this.faceStage(portrait, x > 0 ? 'right' : 'left');
            var partySpeaker = Object.values(heroes).some(function (hero) {
              return hero.name === _this81.speechOwner;
            });
            var owner = {
              'npc-chief': '村长',
              'npc-villager': '村民'
            }[art];
            if (this.speechOwner && !partySpeaker && !prefix.includes('道具') && (!owner || owner === this.speechOwner)) this.popSpeaker(actor);
            (_this$ui$getChildByNa2 = this.ui.getChildByName('400 森林前景')) == null || _this$ui$getChildByNa2.setSiblingIndex(this.ui.children.length - 1);
          }
          return new Vec3(x, y, 0);
        };
        _proto.chief = function chief(step, topic) {
          var _this82 = this;
          if (step === void 0) {
            step = -1;
          }
          if (topic === void 0) {
            topic = 'rescue';
          }
          this.audio.play('dialogue');
          var pending = this.town.rescued && !this.reported;
          if (step < 0) {
            this.townInterior('村长家', '村长：欢迎回来。有什么消息要告诉我？', 'chief', 'npc-chief', false);
            if (pending) this.sceneActor('npc-villager', 65, 96, '康复村民 ');
            var y = 52;
            var option = function option(name, action, task) {
              if (task === void 0) {
                task = false;
              }
              var button = _this82.button(name, y, action);
              if (task) _this82.taskMark(button, -153, 3);
              y -= 68;
            };
            if (pending) option('拯救村民 · 交付任务', function () {
              return _this82.chief(0);
            }, true);
            if (this.reported && !this.party.includes('d')) option(this.town.knightQuest ? '新队友 · 查看任务' : '新队友 · 领取任务', function () {
              return _this82.chief(0, 'knight');
            }, !this.town.knightQuest);
            if (this.cleared.has('swamp') && !this.party.includes('m')) option(this.town.mageQuest ? '法师的下落 · 查看任务' : '法师的下落 · 领取任务', function () {
              return _this82.chief(0, 'mage');
            }, !this.town.mageQuest);
            option('询问归印会的去向', function () {
              return _this82.chief(0, 'order');
            });
            option('离开 · 返回村庄', function () {
              return _this82.village();
            });
            return;
          }
          if (topic === 'order') {
            this.townInterior('村长家', '村长：归印会运走了结界石。矿镇运单上留着火印，他们正沿旧道向北。', 'chief', 'npc-chief', false);
            if (pending) this.sceneActor('npc-villager', 65, 96, '康复村民 ');
            this.button('返回话题', 30, function () {
              return _this82.chief();
            });
            return;
          }
          if (topic === 'knight' || topic === 'mage') {
            var knight = topic === 'knight',
              _active = knight ? this.town.knightQuest : this.town.mageQuest;
            this.townInterior('村长家', knight ? '村长：盾卫罗兰在酒馆休整，去和他谈谈吧。' : '村长：沼泽的雾已经散了。法师伊芙去了高塔，请把她平安带回来。', 'chief', 'npc-chief', false);
            if (!_active) {
              var button = this.button(knight ? '接受任务 · 寻找罗兰' : '接受任务 · 法师的下落', 32, function () {
                if (_this82.townWrite(function () {
                  _this82.questEvent('talk', knight ? 'chief-knight' : 'chief-mage', false);
                  if (knight) _this82.town.knightQuest = true;else _this82.town.mageQuest = true;
                })) {
                  _this82.chief();
                  _this82.questToast(knight ? '新队友' : '法师的下落');
                }
              });
              this.taskMark(button, -153, 3);
            } else this.label(knight ? '任务目标：前往酒馆与罗兰汇合。' : '任务目标：前往高塔与伊芙汇合。', 0, 32, 420, 18);
            this.button('返回话题', -40, function () {
              return _this82.chief();
            });
            return;
          }
          if (!pending) {
            this.chief();
            return;
          }
          var lines = ['村长：你们真的把他救回来了！快说说林子里发生了什么。', '雷恩：灰狼堵住了林道。我们清开道路，把他带回了村子。', '米拉：他的伤已经处理好了，只要静养几天就能康复。', '村民：归印会夺走了我们的结界石！多谢两位，我先回家报平安。', '村长：愿他平安。谢谢你们，请收下村民们凑出的这份酬金。'];
          step = Math.min(step, 4);
          var position = this.townInterior('村长家', lines[step], 'chief', 'npc-chief', false);
          this.sceneActor('npc-villager', 65, 96, '康复村民 ');
          var root = this.ui;
          var rewardPlaying = false;
          var advance = function advance(text, action) {
            return _this82.button(text, 38, function () {
              if (_this82.ui !== root) return;
              action();
            });
          };
          if (step < 3) advance(['说说林中的救援', '听米拉说明伤情', '听村民讲述'][step], function () {
            return _this82.chief(step + 1);
          });else if (step === 3) advance('听村长答谢', function () {
            return _this82.chief(4);
          });else advance('交付村徽 · 获得 20 金币', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee43() {
            var _icon$getComponent, _balance$node$getComp;
            var goldBefore, motion, balance, icon, panelOpacity, textOpacity, fade, villager, _villager$getComponen, alpha;
            return _regeneratorRuntime().wrap(function _callee43$(_context46) {
              while (1) switch (_context46.prev = _context46.next) {
                case 0:
                  if (!(_this82.reported || rewardPlaying)) {
                    _context46.next = 2;
                    break;
                  }
                  return _context46.abrupt("return");
                case 2:
                  goldBefore = _this82.gold;
                  rewardPlaying = true;
                  if (_this82.townWrite(function () {
                    if (!_this82.turnIn('chief-report').length) return false;
                    _this82.reported = true;
                  })) {
                    _context46.next = 7;
                    break;
                  }
                  rewardPlaying = false;
                  return _context46.abrupt("return");
                case 7:
                  motion = _this82.newPageMotion();
                  balance = _this82.coinText = _this82.makeCoinDisplay();
                  balance.string = String(goldBefore);
                  icon = _this82.ui.getChildByName('金币');
                  panelOpacity = (_icon$getComponent = icon.getComponent(UIOpacity)) != null ? _icon$getComponent : icon.addComponent(UIOpacity);
                  textOpacity = (_balance$node$getComp = balance.node.getComponent(UIOpacity)) != null ? _balance$node$getComp : balance.node.addComponent(UIOpacity);
                  fade = function fade(value, seconds) {
                    return Promise.all([panelOpacity, textOpacity].map(function (alpha) {
                      return motion.play(tween(alpha).to(motion.duration(seconds), {
                        opacity: value
                      }));
                    }));
                  };
                  panelOpacity.opacity = textOpacity.opacity = 0;
                  _context46.next = 17;
                  return fade(255, .19);
                case 17:
                  if (!(_this82.ui !== root)) {
                    _context46.next = 20;
                    break;
                  }
                  motion.cancel();
                  return _context46.abrupt("return");
                case 20:
                  _context46.next = 22;
                  return _this82.animateCoins(motion, 20, balance, position, stageGrid.groundY);
                case 22:
                  if (!(_this82.ui !== root)) {
                    _context46.next = 25;
                    break;
                  }
                  motion.cancel();
                  return _context46.abrupt("return");
                case 25:
                  villager = root.getChildByName('康复村民 npc-villager');
                  if (!villager) {
                    _context46.next = 30;
                    break;
                  }
                  alpha = (_villager$getComponen = villager.getComponent(UIOpacity)) != null ? _villager$getComponen : villager.addComponent(UIOpacity);
                  _context46.next = 30;
                  return motion.play(tween(alpha).to(.4, {
                    opacity: 0
                  }));
                case 30:
                  _context46.next = 32;
                  return fade(0, .26);
                case 32:
                  if (_this82.ui === root) _this82.chief();
                case 33:
                case "end":
                  return _context46.stop();
              }
            }, _callee43);
          })));
          this.button('返回村庄', -36, function () {
            if (!rewardPlaying) _this82.village();
          });
        };
        _proto.villageShop = function villageShop() {
          var _this83 = this;
          this.audio.play('door');
          this.townInterior('村庄商店', '老板：药水 5 金币一瓶。已携带 ' + this.potion + ' 瓶。', 'shop', 'npc-shop');
          this.button('购买治疗药水 · 5 金币', 42, function () {
            if (_this83.gold < 5) {
              _this83.popup('金币不足', 0, 91);
              return;
            }
            if (_this83.potion >= 99) {
              _this83.popup('背包药水已满', 0, 91);
              return;
            }
            _this83.gold -= 5;
            _this83.potion++;
            _this83.save();
            _this83.villageShop();
          });
          this.button('返回村庄', -78, function () {
            return _this83.village();
          });
        };
        _proto.smithy = function smithy(page) {
          var _this84 = this;
          if (page === void 0) {
            page = 0;
          }
          var materials = Object.entries(this.inventory.materials).map(function (_ref49) {
            var key = _ref49[0],
              value = _ref49[1];
            return resourceNames[key] + ' ' + value;
          }).join(' · ');
          this.townInterior('溪桥村铁匠铺', materials, 'smith', 'npc-smith');
          var recipes = equipment.filter(function (item) {
            return !_this84.inventory.owned.includes(item.id);
          });
          this.button('修补护甲 · 恢复 DP · 10 金币', -286, function () {
            if (!_this84.party.includes('d')) {
              _this84.popup('盾卫入队后开放修甲', 0, 91);
              return;
            }
            if (_this84.dp >= _this84.maxDP) {
              _this84.popup('DP 已满', 0, 91);
              return;
            }
            if (_this84.gold < 10) {
              _this84.popup('金币不足', 0, 91);
              return;
            }
            void _this84.presentRecovery('dp', function () {
              return _this84.townWrite(function () {
                _this84.gold -= 10;
                _this84.dp = _this84.maxDP;
              });
            });
          });
          var lastPage = Math.max(0, Math.ceil(recipes.length / 3) - 1);
          page = Math.min(page, lastPage);
          if (!recipes.length) this.label('已掌握的装备均已制作', 0, 42, 420, 19);
          recipes.slice(page * 3, page * 3 + 3).forEach(function (item, index) {
            var cost = Object.entries(item.cost).map(function (_ref50) {
              var key = _ref50[0],
                value = _ref50[1];
              return resourceNames[key] + ' ' + value;
            }).join(' · ');
            var y = 47 - index * 88;
            _this84.button(item.name + ' · ' + cost, y, function () {
              var paid = _this84.inventory.craft(item.id, _this84.gold);
              if (paid === null) {
                _this84.popup('材料不足', 0, 99);
                return;
              }
              _this84.gold -= paid;
              _this84.audio.play('equip');
              _this84.save();
              _this84.smithy(page);
            });
            if (item.effect) _this84.label(item.effect, 0, y - 37, 375, 15);
          });
          if (page > 0) this.button('上一页', -228, function () {
            return _this84.smithy(page - 1);
          }, -94, 160);
          if (page < lastPage) this.button('下一页', -228, function () {
            return _this84.smithy(page + 1);
          }, 94, 160);
          this.button('返回村庄', -354, function () {
            return _this84.village();
          });
        };
        _proto.tavern = function tavern(revived) {
          var _this$hunt4,
            _this$hunt5,
            _this$hunt6,
            _this85 = this;
          if (revived === void 0) {
            revived = false;
          }
          this.save();
          this.audio.play('dialogue');
          var join = this.taught && this.reported && this.town.knightQuest && !this.party.includes('d');
          var active = ((_this$hunt4 = this.hunt) == null ? void 0 : _this$hunt4.state) === 'active' ? this.hunt : undefined;
          var ready = ((_this$hunt5 = this.hunt) == null ? void 0 : _this$hunt5.state) === 'ready';
          var cooling = ((_this$hunt6 = this.hunt) == null ? void 0 : _this$hunt6.state) === 'cooldown' && this.hunt.until > Date.now();
          var detail = revived ? '酒馆老板救回了小队。' : join ? '罗兰带来矿镇运单，法师伊芙正在调查迷雾高塔。' : active ? '当前委托：通关' + locationNames[active.target] + '。' : cooling ? '新委托稍后刷新。' : '休息或接受附近地牢的讨伐委托。';
          this.townInterior('溪桥村酒馆', detail, 'tavern', 'npc-innkeeper');
          if (join) {
            var button = this.button('与盾卫罗兰会合', 42, function () {
              if (_this85.party.includes('d')) return;
              var oldHP = _this85.maxHP,
                oldDP = _this85.maxDP;
              if (!_this85.townWrite(function () {
                _this85.questEvent('talk', 'knight');
                _this85.turnIn('knight');
                _this85.party.push('d');
                _this85.hp += _this85.maxHP - oldHP;
                _this85.dp += _this85.maxDP - oldDP;
              })) return;
              _this85.tavern();
            });
            this.taskMark(button, -153, 3);
          }
          var restCost = 10;
          this.button('休息 · 恢复生命 · 10 金币', -29, function () {
            if (_this85.hp >= _this85.maxHP) {
              _this85.popup('生命已满', 0, 87);
              return;
            }
            if (_this85.gold < restCost) {
              _this85.popup('金币不足', 0, 87);
              return;
            }
            void _this85.presentRecovery('hp', function () {
              return _this85.townWrite(function () {
                _this85.gold -= restCost;
                _this85.hp = _this85.maxHP;
              });
            });
          });
          if (this.taught && ready) this.taskMark(this.button('交付讨伐 · 获得 12 金币', -100, function () {
            var _this85$hunt;
            if (((_this85$hunt = _this85.hunt) == null ? void 0 : _this85$hunt.state) !== 'ready') return;
            if (!_this85.townWrite(function () {
              if (!_this85.turnIn('inn-report').length) return false;
              _this85.hunt = {
                state: 'cooldown',
                until: Date.now() + 60000
              };
            })) return;
            _this85.tavern();
          }), -153, 3);
          if (this.taught && !active && !ready && !cooling) this.taskMark(this.button('领取附近地牢讨伐', -100, function () {
            if (_this85.hunt && !(_this85.hunt.state === 'cooldown' && _this85.hunt.until <= Date.now())) return;
            var available = dungeonIds.filter(function (id) {
              return unlocked(id, _this85.cleared);
            });
            var target = available[Math.floor(Math.random() * available.length)];
            if (_this85.townWrite(function () {
              _this85.hunt = {
                state: 'active',
                target: target
              };
              _this85.questEvent('talk', 'accept-' + target, false);
            })) {
              _this85.tavern();
              _this85.questToast('讨伐 · ' + locationNames[target]);
            }
          }), -153, 3);
          this.button(this.taught ? '返回村庄' : '重新开始教学', -171, function () {
            return _this85.taught ? _this85.village() : _this85.menu();
          });
        };
        _proto.formalTypes = function formalTypes() {
          return rosterEmblems(this.party);
        };
        _proto.enter = function enter(id, reveal) {
          var _this86 = this;
          var battleArt = [].concat(contentGroups[id], contentGroups.tutorial, this.party.flatMap(function (role) {
            return [role, 'hero-' + role];
          }), dungeons[id].enemies.map(function (foe) {
            return foe.art;
          }), ['dungeon-chest', 'dungeon-merchant', 'dungeon-traveler']);
          if (this.deferContent(function () {
            return _this86.enter(id, reveal);
          }, id + ':' + this.party.join(''), battleArt)) return;
          if (this.town.blessing) {
            this.town.blessingInDungeon = true;
            this.save();
          }
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
          if (this.mineRecovery) return;
          if (this.dungeon !== director || !director.advance(room)) return;
          this.afterRoom(director);
        };
        _proto.afterRoom = function afterRoom(director) {
          var _this87 = this;
          if (this.dungeon !== director) return;
          if (!director.room) {
            this.finishAdventure('win');
            return;
          }
          var expectedRoom = director.room;
          if (!this.contentReady && this.deferContent(function () {
            if (_this87.dungeon === director && director.room === expectedRoom) _this87.afterRoom(director);
          })) return;
          var before = this.dungeonBackdrop(director.depth - 1);
          var after = this.dungeonBackdrop(director.depth);
          this.page('沿路前进', '小队正在前往下一房间。', before);
          var root = this.ui;
          var nextRoom = director.room;
          var phase = this.adventure ? this.phase : nextRoom.kind === 'battle' && nextRoom.type === 'boss' ? 'lessonBoss' : 'wolves';
          var incoming = nextRoom.kind === 'battle' ? this.resolveBattleFoes(nextRoom, nextRoom.enemies, phase) : undefined;
          void this.walkParty(this.forestLabStop(before) !== undefined ? 1.05 : before === after ? .45 : 1.05, before === after ? [before] : [before, after], 1, incoming).then(function (played) {
            if (_this87.ui !== root || _this87.dungeon !== director || director.room !== nextRoom) return;
            if (played) {
              if (incoming) _this87.arrivedEncounter = {
                director: director,
                room: nextRoom
              };
              _this87.showRoom();
            } else _this87.button('重试行进', 0, function () {
              if (_this87.ui === root && _this87.dungeon === director && director.room === nextRoom) _this87.afterRoom(director);
            });
          });
        };
        _proto.buff = function buff(id) {
          var _this$adventure$buffs2, _this$adventure6;
          return (_this$adventure$buffs2 = (_this$adventure6 = this.adventure) == null ? void 0 : _this$adventure6.buffs[id]) != null ? _this$adventure$buffs2 : 0;
        };
        _proto.offerUpgrade = function offerUpgrade(director, room, proceed) {
          var _this88 = this;
          var run = this.adventure;
          if (!run) {
            proceed();
            return;
          }
          var options = drawUpgrades(run.buffs, function (id) {
            return _this88.inventory.hasEquipped(id);
          });
          if (!options.length) {
            proceed();
            return;
          }
          this.page('选择临时强化', '强化仅在本次地牢探索中生效。', this.dungeonBackdrop());
          var root = this.ui;
          options.forEach(function (option, index) {
            return _this88.button(option.name + ' · ' + option.description, 43 - index * 72, function () {
              if (_this88.ui !== root || _this88.dungeon !== director || director.room !== room) return;
              run.buffs[option.id] = _this88.buff(option.id) + 1;
              if (option.id === 'vital') _this88.hp = Math.min(_this88.maxHP, _this88.hp + 30);
              _this88.audio.play('charge');
              proceed();
            });
          });
          this.button('撤离', -380, function () {
            if (_this88.ui === root && _this88.dungeon === director) _this88.finishAdventure('retreat');
          });
        };
        _proto.showRoom = function showRoom(reveal) {
          var _this89 = this;
          var director = this.dungeon;
          var room = director == null ? void 0 : director.room;
          if (!room) return;
          if (director.depth > 0 && !this.contentReady && this.deferContent(function () {
            return _this89.showRoom(reveal);
          })) return;
          var run = this.adventure;
          if (this.mineRecovery && room.kind !== 'battle' && room.kind !== 'rest' && !(room.kind === 'chest' && this.mineRecovery.state.mineRecovery.source === 'formal')) {
            this.showRecoveryStop('该房间尚未接入探索事务。');
            return;
          }
          if (room.kind === 'battle') {
            this.enemies = [].concat(room.enemies);
            if (!run) this.phase = room.type === 'boss' ? 'lessonBoss' : 'wolves';
            if ((run == null ? void 0 : run.id) === 'tower' && director.depth === 0 && !this.party.includes('m') && this.town.mageQuest) {
              this.page('高塔里的回声', '法师伊芙：高塔的结界失控了，我和你们一起进去。', this.dungeonBackdrop());
              this.sceneActor('hero-m', 144, 102, '剧情人物 ');
              var _root2 = this.ui;
              var allowMeeting = function allowMeeting() {
                if (_this89.ui !== _root2 || _this89.dungeon !== director) return;
                _this89.button('与法师伊芙会合', 32, function () {
                  if (_this89.ui !== _root2 || _this89.party.includes('m')) return;
                  var oldHP = _this89.maxHP,
                    oldDP = _this89.maxDP;
                  _this89.questEvent('talk', 'mage');
                  _this89.turnIn('mage');
                  _this89.party.push('m');
                  _this89.hp += _this89.maxHP - oldHP;
                  _this89.dp += _this89.maxDP - oldDP;
                  _this89.types = _this89.formalTypes();
                  _this89.save();
                  _this89.beginBattle();
                });
              };
              if (reveal) void reveal().then(allowMeeting);else allowMeeting();
            } else this.beginBattle(reveal);
            return;
          }
          var advance = function advance() {
            return _this89.advanceRoom(director, room);
          };
          if (room.kind === 'rescue' || room.kind === 'recruit') {
            var recruit = room.kind === 'recruit';
            this.audio.play('dialogue');
            this.page(recruit ? '失散的牧师' : '林中的求救声', recruit ? '米拉：结界碎片就在前面。我来治疗，你来开路。' : '村民：归印会改接了结界。请把这枚村徽带给村长。', this.dungeonBackdrop());
            if (recruit) this.sceneActor('hero-h', 144, 102, '剧情人物 ');else this.sceneActor('npc-villager-down', 144, 86);
            var _root3 = this.ui;
            this.button(recruit ? '邀请米拉入队' : '救下村民，接下报信任务', 30, function () {
              if (_this89.ui !== _root3 || _this89.dungeon !== director || director.room !== room) return;
              if (recruit && !_this89.party.includes('h')) {
                _this89.party.push('h');
                _this89.types = ['s', 'fist', 'h', 'staff'];
                _this89.hp = Math.min(_this89.maxHP, _this89.hp + 55);
              }
              if (!recruit && !run) {
                _this89.town.rescued = true;
                _this89.questEvent('room', 'villager');
              }
              advance();
            });
            this.button('撤离', -380, function () {
              return _this89.finishAdventure('retreat');
            });
            return;
          }
          if (!run) return;
          var payingReward = false;
          var action = function action(label, y, apply) {
            var root = _this89.ui;
            _this89.button(label, y, function () {
              if (payingReward || _this89.ui !== root || _this89.dungeon !== director || director.room !== room) return;
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
            return action(label, 42, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee44() {
              var root, motion, _yield$Promise$all2, played;
              return _regeneratorRuntime().wrap(function _callee44$(_context47) {
                while (1) switch (_context47.prev = _context47.next) {
                  case 0:
                    payingReward = true;
                    root = _this89.ui;
                    motion = _this89.newPageMotion();
                    _context47.next = 5;
                    return Promise.all([_this89.animateCoins(motion, amount, _this89.coinText, origin, stageGrid.groundY), takeMaterials ? _this89.showMaterials(motion, {
                      ore: roomRewards.chestOre
                    }, origin) : Promise.resolve()]);
                  case 5:
                    _yield$Promise$all2 = _context47.sent;
                    played = _yield$Promise$all2[0];
                    payingReward = false;
                    if (!(!played || _this89.ui !== root || _this89.dungeon !== director || director.room !== room || _this89.adventure !== run)) {
                      _context47.next = 10;
                      break;
                    }
                    return _context47.abrupt("return");
                  case 10:
                    _this89.receiveGold(amount);
                    takeMaterials == null || takeMaterials();
                    advance();
                  case 13:
                  case "end":
                    return _context47.stop();
                }
              }, _callee44);
            })));
          };
          var show = function show(title, detail) {
            return _this89.page(title, detail, _this89.dungeonBackdrop(director.depth));
          };
          if (room.kind === 'merchant') {
            show('旅行商人', '金币 ' + this.walletGold + ' · 治疗药水 ×' + this.potion);
            this.sceneActor('dungeon-merchant', 151, 116);
            action('购买治疗药水 · 5 金币', 42, function () {
              if (_this89.potion >= 99 || !_this89.spendGold(5)) {
                _this89.popup('无法购买', 0, 91);
                return;
              }
              _this89.potion++;
              _this89.showRoom();
            });
            action('小队休整 · 3 金币，恢复 30 HP', -25, function () {
              if (_this89.hp >= _this89.maxHP || !_this89.spendGold(3)) {
                _this89.popup('无法休整', 0, 91);
                return;
              }
              _this89.hp = Math.min(_this89.maxHP, _this89.hp + 30);
              _this89.showRoom();
            });
            action('离开商人房间', -92, advance);
          } else if (room.kind === 'event') {
            show('迷雾中的旅人', '旅人迷了路，前方还有裂印兽出没。');
            var traveler = this.sceneActor('dungeon-traveler', 144, 99);
            goldDecision("\u534F\u52A9\u65C5\u4EBA\uFF0C\u83B7\u5F97 " + roomRewards.travelerGold + " \u91D1\u5E01", roomRewards.travelerGold, traveler);
            decision('谨慎休整，恢复 22 HP', -25, function () {
              _this89.hp = Math.min(_this89.maxHP, _this89.hp + 22);
            });
          } else if (room.kind === 'rest') {
            if (this.trial) {
              show('矿道休息营地', '晶岩守卫正在前方。选择一种补给后继续。');
              this.mineTrialCaption('选一种补给', 57);
              var _root4 = this.ui;
              var supply = function supply(restore) {
                return function () {
                  if (_this89.ui !== _root4 || _this89.dungeon !== director || director.room !== room) return;
                  restore();
                  advance();
                };
              };
              this.trialButton('恢复 45 HP', -26, supply(function () {
                _this89.hp = Math.min(_this89.maxHP, _this89.hp + 45);
              }));
              this.trialButton('恢复 35 DP', -92, supply(function () {
                _this89.dp = Math.min(_this89.maxDP, _this89.dp + 35);
              }));
            } else if (this.mineRecovery) {
              show('休息营地', '队伍发现了安全的休息地点。');
              action('恢复 45 HP', 42, function () {
                return _this89.commitMineRest(director, room, 'hp');
              });
              action('恢复 35 DP', -25, function () {
                return _this89.commitMineRest(director, room, 'dp');
              });
            } else {
              show('休息营地', '队伍发现了安全的休息地点。');
              decision('恢复 45 HP', 42, function () {
                _this89.hp = Math.min(_this89.maxHP, _this89.hp + 45);
              });
              decision('恢复 35 DP', -25, function () {
                _this89.dp = Math.min(_this89.maxDP, _this89.dp + 35);
              });
            }
          } else if (room.kind === 'chest') {
            show('遗落的宝箱', '一只无人看守的旧箱子。');
            var chest = this.sceneActor('dungeon-chest', 144, 77, '剧情道具 ');
            chest.y += 11;
            if (this.mineRecovery) {
              action("\u53D6\u8D70\u7269\u8D44 \xB7 " + roomRewards.chestGold + " \u91D1\u5E01\uFF0C" + roomRewards.chestOre + " \u94C1\u77FF", 42, function () {
                var current = _this89.minePermit(director, room);
                if (!current) return;
                var next = planMineChest(current.live.state, current.permit);
                if (next) payingReward = _this89.commitMineRoom(current.live, next, director, room, chest) === true;
              });
            } else goldDecision("\u53D6\u8D70\u7269\u8D44 \xB7 " + roomRewards.chestGold + " \u91D1\u5E01\uFF0C" + roomRewards.chestOre + " \u94C1\u77FF", roomRewards.chestGold, chest, function () {
              var _run$loot$ore;
              run.loot.ore = ((_run$loot$ore = run.loot.ore) != null ? _run$loot$ore : 0) + roomRewards.chestOre;
            });
          } else if (room.kind === 'fork') {
            show('选择一扇门', '选定路线后，小队会直接前往下一间。');
            var _supply = ['merchant', 'rest', 'chest'];
            var choices = [['血色门 · 普通战斗', encounter(run.id, director.depth + 1, 'battle')], ['铜色门 · 补给或商人', {
              kind: _supply[Math.floor(Math.random() * _supply.length)]
            }], ['黑铁门 · 精英战斗', encounter(run.id, director.depth + 1, 'elite')]];
            choices.forEach(function (_ref52, index) {
              var label = _ref52[0],
                next = _ref52[1];
              return action(label, 42 - index * 67, function () {
                if (director.choose(room, next)) _this89.afterRoom(director);
              });
            });
          }
          action('撤离', -380, function () {
            return _this89.finishAdventure('retreat');
          });
        };
        _createClass(FourEmblemsGame, [{
          key: "blockedBoardCells",
          get: function get() {
            return new Set([].concat(Array.from(this.rocks.keys()), Array.from(this.holes)));
          }
        }, {
          key: "boardRoutes",
          get: function get() {
            var _this$trial22;
            if (((_this$trial22 = this.trial) == null ? void 0 : _this$trial22.id) === 'portal') return portalGravity();
            var blocked = this.blockedBoardCells;
            var routes = blocked.size ? segmentedGravity(blocked) : this.usesRailGravity ? mineGravity : verticalGravity;
            var state = this.challenge;
            return state && (state.locks.size || state.id === 'updraft' || state.id === 'seam' || state.id === 'source') ? challengeGravity(state.id, routes, state.locks) : routes;
          }
        }, {
          key: "usesRailGravity",
          get: function get() {
            return this.phase === 'mine' && (!this.trial || this.trial.id === 'rail');
          }
        }, {
          key: "enemyOpportunities",
          get: function get() {
            var _this$oath$enemyActio;
            return (_this$oath$enemyActio = this.oath.enemyActions) != null ? _this$oath$enemyActio : this.oath.enemyActions = [];
          },
          set: function set(value) {
            this.oath.enemyActions = value;
          }
        }, {
          key: "baseMaxHP",
          get: function get() {
            var _this90 = this;
            return this.party.reduce(function (sum, id) {
              return sum + _this90.inventory.stats(id).hp;
            }, 0) + 15 * this.buff('vital');
          }
        }, {
          key: "maxHP",
          get: function get() {
            return this.baseMaxHP + (this.town.blessing ? 100 : 0);
          }
        }, {
          key: "maxDP",
          get: function get() {
            var _this91 = this;
            return this.party.reduce(function (sum, id) {
              return sum + _this91.inventory.stats(id).dp;
            }, 0);
          }
        }, {
          key: "walletGold",
          get: function get() {
            var _this$adventure$coins2, _this$adventure7;
            var found = (_this$adventure$coins2 = (_this$adventure7 = this.adventure) == null ? void 0 : _this$adventure7.coins) != null ? _this$adventure$coins2 : 0;
            return this.trial ? found : this.gold + found;
          }
        }, {
          key: "joined",
          get: function get() {
            return this.party.includes('h');
          }
        }, {
          key: "useForestReel",
          get: function get() {
            return typeof location !== 'undefined' && location.hash === '#forest-reel';
          }
        }, {
          key: "partyName",
          get: function get() {
            var _heroes$this$party$0$, _heroes$this$party$;
            return this.party.length > 1 ? '勇者小队' : (_heroes$this$party$0$ = (_heroes$this$party$ = heroes[this.party[0]]) == null ? void 0 : _heroes$this$party$.name) != null ? _heroes$this$party$0$ : '勇者';
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
  var _createForOfIteratorHelperLoose, cclegacy, resources, AudioClip, tween, sys, Node, AudioSource;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      resources = module.resources;
      AudioClip = module.AudioClip;
      tween = module.tween;
      sys = module.sys;
      Node = module.Node;
      AudioSource = module.AudioSource;
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
          this.voices = void 0;
          this.clips = new Map();
          this.lastPlayed = new Map();
          this.trialVoices = new Set();
          this.trialVariants = new Map();
          this.cursor = 0;
          this.steps = void 0;
          this.walking = 0;
          this.fade = void 0;
          this.pending = new Set();
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
          for (var _iterator = _createForOfIteratorHelperLoose(baseCues), _step; !(_step = _iterator()).done;) {
            var name = _step.value;
            this.loadClip(name);
          }
        }
        var _proto = GameAudio.prototype;
        _proto.loadClip = function loadClip(name) {
          var _this = this;
          if (this.clips.has(name) || this.pending.has(name)) return;
          this.pending.add(name);
          resources.load('audio/' + name, AudioClip, function (error, clip) {
            _this.pending["delete"](name);
            if (!error) _this.clips.set(name, clip);
          });
        };
        _proto.prepareBoard = function prepareBoard() {
          for (var _i = 0, _arr = ['swap', 'invalid', 'clear', 'drop', 'create', 'combo', 'charge']; _i < _arr.length; _i++) {
            var cue = _arr[_i];
            this.loadClip('trial-' + cue);
          }
        };
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
          this.loadClip('trial-' + name);
          var clip = (_this$clips$get = this.clips.get('trial-' + name)) != null ? _this$clips$get : this.clips.get('clear');
          this.emit('chain', clip, Math.min(.40, .21 + wave * .045), true);
        };
        _proto.playTrial = function playTrial(name) {
          var _this$trialVariants$g, _this$clips$get2;
          var cue = trialCues[name];
          var variant = (_this$trialVariants$g = this.trialVariants.get(name)) != null ? _this$trialVariants$g : 0;
          var filename = 'trial-' + cue.files[variant % cue.files.length];
          this.loadClip(filename);
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
        effect: '骑士行动开始时 DP 已满，追加一次 1×AP 攻击',
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

System.register("chunks:///_virtual/main", ['./ActorArt.ts', './BattleMotion.ts', './BattleRules.ts', './BattleSession.ts', './Board.ts', './BoardMechanics.ts', './BuffView.ts', './Chapter.ts', './battle-core.ts', './board-bridge.ts', './cocos-board-adapter.ts', './damage.ts', './derivation.ts', './effects.ts', './experiment.ts', './exploration-save.ts', './formal-rules.ts', './mine-recovery.ts', './potion-bridge.ts', './CombatSceneLab.ts', './CombatTags.ts', './ContentGroups.ts', './ContentQueue.ts', './DungeonDirector.ts', './EnemySkills.ts', './FormalSaveGate.ts', './Game.ts', './GameAudio.ts', './Inventory.ts', './MineTrial.ts', './QuestJournal.ts', './StageLayout.ts', './StageTravel.ts', './TemplateBoardFx.ts', './TestBoardChallenge.ts', './TestBoardRules.ts', './TownRules.ts', './TravelClock.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/mine-recovery.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Inventory.ts', './exploration-save.ts', './Chapter.ts'], function (exports) {
  var _extends, _createForOfIteratorHelperLoose, _objectWithoutPropertiesLoose, cclegacy, Inventory, decodeExploration, roomPosition, transition, planExit, validBoard, dungeons, dungeonRewardMultiplier, battleCoinReward, roomRewards;
  return {
    setters: [function (module) {
      _extends = module.extends;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _objectWithoutPropertiesLoose = module.objectWithoutPropertiesLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      Inventory = module.Inventory;
    }, function (module) {
      decodeExploration = module.decodeExploration;
      roomPosition = module.roomPosition;
      transition = module.transition;
      planExit = module.planExit;
      validBoard = module.validBoard;
    }, function (module) {
      dungeons = module.dungeons;
      dungeonRewardMultiplier = module.dungeonRewardMultiplier;
      battleCoinReward = module.battleCoinReward;
      roomRewards = module.roomRewards;
    }],
    execute: function () {
      exports({
        planExplorationTestSettlement: planExplorationTestSettlement,
        planFormalRoomReward: planFormalRoomReward,
        planMineChest: planMineChest,
        planMineFirstVictory: planMineFirstVictory,
        planMineFormalClose: planMineFormalClose,
        planMineLegacyVictory: planMineLegacyVictory,
        planMinePotion: planMinePotion,
        planMineRest: planMineRest,
        planMineTestClose: planMineTestClose,
        readMineRecovery: readMineRecovery
      });
      var _excluded = ["potion"],
        _excluded2 = ["potion"];
      cclegacy._RF.push({}, "80e92onM01MUp49iuFHNJ0N", "mine-recovery", undefined);
      var count = function count(v) {
        return Number.isSafeInteger(v) && Number(v) >= 0;
      };
      var equal = function equal(a, b) {
        return a.runId === b.runId && a.roomId === b.roomId && a.generation === b.generation && a.operationId === b.operationId && ('choice' in a ? 'choice' in b && a.choice === b.choice : 'outcome' in b && a.outcome === b.outcome);
      };
      function identity(save, permit) {
        return save.run.runId === permit.runId && save.run.generation === permit.generation && roomPosition(save.run).current === permit.roomId;
      }
      function readMineRecovery(raw) {
        var _run$receipts$, _exit$permit, _exit$permit2, _exit$permit3, _exit$permit4, _exit$permit5, _exit$permit6, _exit$preview, _exit$preview2, _exit$preview3;
        var parsed = decodeExploration(raw);
        if (parsed.kind !== 'versioned') return;
        var ask = parsed.save;
        var player = ask.player,
          run = ask.run,
          mineRecovery = ask.mineRecovery;
        var first = (_run$receipts$ = run.receipts[0]) == null ? void 0 : _run$receipts$.request;
        if ((mineRecovery == null ? void 0 : mineRecovery.version) !== 1 || !run.board || !count(player.hp) || player.hp < 1 || !count(player.dp) || run.route.map(function (r) {
          return r.room.kind;
        }).join(',') !== 'battle,rest,battle,chest,battle' || run.route.some(function (r, i) {
          return r.id !== 'mine:' + i;
        }) || run.route[4].room.kind !== 'battle' || run.route[4].room.type !== 'boss' || run.cursor < 1 || run.cursor > 5 || !first || first.terminal.roomId !== 'mine:0' || run.generation !== first.terminal.generation + run.cursor + (run.closed ? 1 : 0)) return;
        var rest = mineRecovery.rest,
          exit = mineRecovery.exit,
          source = mineRecovery.source;
        if (source !== undefined && source !== 'formal') return;
        if (source === 'formal') return validFormalRecovery(ask) ? ask : undefined;
        if (run.cursor > 2 || run.receipts.length !== 1 || player.location !== 3) return;
        if (run.cursor === 1 && rest !== undefined) return;
        if (run.cursor === 2 && (!rest || rest.runId !== run.runId || rest.roomId !== 'mine:1' || rest.operationId !== 'rest:mine:1' || rest.generation !== run.generation - (run.closed ? 2 : 1) || !['hp', 'dp'].includes(rest.choice))) return;
        if (!run.closed && exit !== undefined) return;
        if (run.closed && (!exit || ((_exit$permit = exit.permit) == null ? void 0 : _exit$permit.outcome) !== run.closed || ((_exit$permit2 = exit.permit) == null ? void 0 : _exit$permit2.runId) !== run.runId || ((_exit$permit3 = exit.permit) == null ? void 0 : _exit$permit3.roomId) !== roomPosition(run).current || ((_exit$permit4 = exit.permit) == null ? void 0 : _exit$permit4.operationId) !== 'close:' + ((_exit$permit5 = exit.permit) == null ? void 0 : _exit$permit5.roomId) || ((_exit$permit6 = exit.permit) == null ? void 0 : _exit$permit6.generation) !== run.generation - 1 || !count((_exit$preview = exit.preview) == null ? void 0 : _exit$preview.gold) || !count((_exit$preview2 = exit.preview) == null ? void 0 : _exit$preview2.xp) || !((_exit$preview3 = exit.preview) != null && _exit$preview3.loot) || run.pending.coins !== 0 || run.pending.xp !== 0 || run.pending.ordinaryWins !== 0 || Object.keys(run.pending.loot).length !== 0)) return;
        return ask;
      }
      function planMineRest(save, permit, caps) {
        var _run$route$run$cursor, _run$route;
        var old = save.mineRecovery.rest;
        if ((old == null ? void 0 : old.operationId) === permit.operationId) return {
          status: equal(old, permit) ? 'duplicate' : 'conflict'
        };
        var run = save.run,
          player = save.player;
        if (run.closed || !identity(save, permit) || permit.operationId !== 'rest:' + permit.roomId || ((_run$route$run$cursor = run.route[run.cursor]) == null ? void 0 : _run$route$run$cursor.room.kind) !== 'rest' || ((_run$route = run.route[run.cursor + 1]) == null ? void 0 : _run$route.id) !== 'mine:2' || !['hp', 'dp'].includes(permit.choice) || !count(caps.hp) || !count(caps.dp) || player.hp > caps.hp || player.dp > caps.dp) return {
          status: 'rejected'
        };
        var hp = permit.choice === 'hp' ? Math.min(caps.hp, player.hp + 45) : player.hp;
        var dp = permit.choice === 'dp' ? Math.min(caps.dp, player.dp + 35) : player.dp;
        var next = _extends({}, save, {
          player: _extends({}, player, {
            hp: hp,
            dp: dp
          }),
          run: _extends({}, run, {
            cursor: run.cursor + 1,
            generation: run.generation + 1
          }),
          mineRecovery: _extends({}, save.mineRecovery, {
            rest: _extends({}, permit)
          })
        });
        return {
          status: 'changed',
          save: next
        };
      }

      // Closure tests project existing ratios but never mutate the permanent ledger.
      function planExplorationTestSettlement(save, runId, generation, outcome, firstClear) {
        if (firstClear === void 0) {
          firstClear = false;
        }
        var next = transition(save, {
          kind: 'close',
          runId: runId,
          generation: generation,
          outcome: outcome
        });
        if (next.status !== 'changed') return {
          status: 'rejected'
        };
        return {
          status: 'changed',
          preview: planExit(save.run.pending, outcome, firstClear),
          run: _extends({}, next.save.run, {
            pending: {
              coins: 0,
              xp: 0,
              ordinaryWins: 0,
              loot: {}
            }
          })
        };
      }
      function planMineTestClose(save, permit) {
        var _save$mineRecovery$ex;
        var old = (_save$mineRecovery$ex = save.mineRecovery.exit) == null ? void 0 : _save$mineRecovery$ex.permit;
        if ((old == null ? void 0 : old.operationId) === permit.operationId) return {
          status: equal(old, permit) ? 'duplicate' : 'conflict'
        };
        if (save.mineRecovery.source === 'formal' || save.run.closed || !identity(save, permit) || permit.operationId !== 'close:' + permit.roomId || !['retreat', 'fail'].includes(permit.outcome)) return {
          status: 'rejected'
        };
        var settlement = planExplorationTestSettlement(save, permit.runId, permit.generation, permit.outcome);
        if (settlement.status !== 'changed') return settlement;
        var next = _extends({}, save, {
          run: settlement.run,
          mineRecovery: _extends({}, save.mineRecovery, {
            exit: {
              permit: _extends({}, permit),
              preview: settlement.preview
            }
          })
        });
        return {
          status: 'changed',
          save: next
        };
      }
      function planFormalRoomReward(dungeon, room) {
        var base = dungeons[dungeon].loot;
        var multiplier = dungeonRewardMultiplier(room.type);
        var loot = {};
        for (var _iterator = _createForOfIteratorHelperLoose(['herb', 'ore', 'essence', 'crystal']), _step; !(_step = _iterator()).done;) {
          var key = _step.value;
          if (base[key] !== undefined) loot[key] = Math.ceil(base[key] * multiplier);
        }
        return {
          coins: battleCoinReward(room, dungeon),
          loot: loot,
          xp: room.enemies.length * 2,
          ordinaryWins: Number(room.type !== 'elite' && room.type !== 'boss')
        };
      }
      function planMineFirstVictory(base, terminal, board) {
        var _base$run$route$, _room$rescueCells;
        var room = (_base$run$route$ = base.run.route[0]) == null ? void 0 : _base$run$route$.room;
        if (base.run.cursor !== 0 || base.run.receipts.length || terminal.roomId !== 'mine:0' || (room == null ? void 0 : room.kind) !== 'battle' || (_room$rescueCells = room.rescueCells) != null && _room$rescueCells.length || room.type === 'boss') return;
        var commit = transition(base, {
          kind: 'terminal',
          request: {
            terminal: terminal,
            board: board,
            nextRoomId: 'mine:1',
            delta: planFormalRoomReward('mine', room)
          }
        });
        if (commit.status !== 'changed') return;
        return readMineRecovery(JSON.stringify(_extends({}, commit.save, {
          mineRecovery: {
            version: 1,
            source: 'formal'
          }
        })));
      }
      var emptyPending = function emptyPending() {
        return {
          coins: 0,
          xp: 0,
          ordinaryWins: 0,
          loot: {}
        };
      };
      var samePending = function samePending(a, b) {
        return a.coins === b.coins && a.xp === b.xp && a.ordinaryWins === b.ordinaryWins && Object.keys(a.loot).length === Object.keys(b.loot).length && Object.entries(a.loot).every(function (_ref) {
          var k = _ref[0],
            v = _ref[1];
          return b.loot[k] === v;
        });
      };
      var chestDelta = {
        coins: roomRewards.chestGold,
        xp: 0,
        ordinaryWins: 0,
        loot: {
          ore: roomRewards.chestOre
        }
      };
      function plus(a, b) {
        var loot = _extends({}, a.loot);
        for (var _i = 0, _Object$entries = Object.entries(b.loot); _i < _Object$entries.length; _i++) {
          var _loot$key;
          var _Object$entries$_i = _Object$entries[_i],
            k = _Object$entries$_i[0],
            v = _Object$entries$_i[1];
          var key = k;
          loot[key] = ((_loot$key = loot[key]) != null ? _loot$key : 0) + v;
        }
        return {
          coins: a.coins + b.coins,
          xp: a.xp + b.xp,
          ordinaryWins: a.ordinaryWins + b.ordinaryWins,
          loot: loot
        };
      }
      function validCheckpoint(save, p) {
        var _room$rescueCells3;
        var run = save.run,
          current = run.route[run.cursor];
        var room = current == null ? void 0 : current.room;
        return (run.cursor === 2 || run.cursor === 4) && (room == null ? void 0 : room.kind) === 'battle' && p.roomId === current.id && p.generation === run.generation && count(p.operation) && p.operation > 0 && validBoard(p.board) && Array.isArray(p.enemies) && p.enemies.length === room.enemies.length && p.enemies.every(function (hp, i) {
          return count(hp) && hp <= room.enemies[i];
        }) && p.enemies.some(function (hp) {
          return hp > 0;
        }) && Array.isArray(p.marks) && new Set(p.marks).size === p.marks.length && p.marks.every(function (i) {
          var _room$rescueCells2;
          return (_room$rescueCells2 = room.rescueCells) == null ? void 0 : _room$rescueCells2.includes(i);
        }) && (!((_room$rescueCells3 = room.rescueCells) != null && _room$rescueCells3.length) || p.marks.length > 0) && (p.oath === undefined || [1, 1.4, 1.55, 1.7].includes(p.oath.rally) && [1, 1.1].includes(p.oath.roundBoost) && (p.oath.enemyActions === undefined || Array.isArray(p.oath.enemyActions) && p.oath.enemyActions.length === p.enemies.length && p.oath.enemyActions.every(count)) && typeof p.oath.guard === 'boolean' && p.oath.shred && Object.entries(p.oath.shred).every(function (_ref2) {
          var id = _ref2[0],
            n = _ref2[1];
          return count(Number(id)) && Number(id) < p.enemies.length && count(n);
        }) && Array.isArray(p.oath.weaken) && p.oath.weaken.every(function (id) {
          return typeof id === 'string' && count(Number(id)) && Number(id) < p.enemies.length;
        })) && count(p.round) && p.round > 0 && typeof p.rally === 'boolean' && Array.isArray(p.stunned) && p.stunned.every(function (i) {
          return count(i) && i < p.enemies.length;
        });
      }
      function validFormalRecovery(save) {
        var _run$route$2$room$res, _c$preview, _c$preview2, _c$preview3;
        var run = save.run,
          m = save.mineRecovery,
          player = save.player;
        var first = run.receipts[0].request.terminal;
        if (m.exit !== undefined || run.route[2].room.kind !== 'battle' || !((_run$route$2$room$res = run.route[2].room.rescueCells) != null && _run$route$2$room$res.length) || !new RegExp('^game:' + first.generation + ':[1-9][0-9]*$').test(first.terminalEventId)) return false;
        if (run.cursor >= 2) {
          var p = m.rest;
          if (!p || p.runId !== run.runId || p.roomId !== 'mine:1' || p.operationId !== 'rest:mine:1' || p.generation !== first.generation + 1 || !['hp', 'dp'].includes(p.choice)) return false;
        } else if (m.rest) return false;
        var pending = emptyPending();
        var wins = [0, 2, 4].filter(function (i) {
          return i < run.cursor;
        });
        if (run.receipts.length !== wins.length) return false;
        for (var _iterator2 = _createForOfIteratorHelperLoose(wins.entries()), _step2; !(_step2 = _iterator2()).done;) {
          var _step2$value = _step2.value,
            index = _step2$value[0],
            i = _step2$value[1];
          var room = run.route[i].room;
          var receipt = run.receipts[index].request;
          if (room.kind !== 'battle' || receipt.terminal.roomId !== 'mine:' + i || receipt.terminal.generation !== first.generation + i || i > 0 && receipt.terminal.terminalEventId !== legacyVictoryId(receipt.terminal) || !samePending(receipt.delta, planFormalRoomReward('mine', room))) return false;
          pending = plus(pending, receipt.delta);
        }
        if (run.cursor >= 4) {
          var _m$chest;
          if (((_m$chest = m.chest) == null ? void 0 : _m$chest.roomId) !== 'mine:3' || m.chest.generation !== first.generation + 3) return false;
          pending = plus(pending, chestDelta);
        } else if (m.chest) return false;
        if (m.potion && (run.closed || !validCheckpoint(save, m.potion))) return false;
        if (!run.closed) return run.cursor < 5 && player.location === 3 && !m.settlement && samePending(run.pending, pending);
        var c = m.settlement;
        return !!c && c.roomId === roomPosition(run).current && c.generation === run.generation - 1 && c.outcome === run.closed && c.ordinaryWins === pending.ordinaryWins && count((_c$preview = c.preview) == null ? void 0 : _c$preview.gold) && count((_c$preview2 = c.preview) == null ? void 0 : _c$preview2.xp) && !!((_c$preview3 = c.preview) != null && _c$preview3.loot) && (run.closed === 'complete' ? run.cursor === 5 : run.cursor < 5) && player.location === (run.closed === 'fail' ? 1 : 3) && samePending(run.pending, emptyPending());
      }
      var legacyVictoryId = exports('legacyVictoryId', function legacyVictoryId(permit) {
        return 'legacy-victory:' + permit.roomId + ':' + permit.generation;
      });
      function planMineLegacyVictory(save, permit, board, hp, dp) {
        var _save$run$route$save$;
        var room = (_save$run$route$save$ = save.run.route[save.run.cursor]) == null ? void 0 : _save$run$route$save$.room;
        if (save.mineRecovery.source !== 'formal' || save.run.closed || (room == null ? void 0 : room.kind) !== 'battle' || ![2, 4].includes(save.run.cursor) || !count(hp) || hp === 0 || !count(dp)) return;
        var result = transition(save, {
          kind: 'terminal',
          request: {
            terminal: _extends({}, permit, {
              terminalEventId: legacyVictoryId(permit)
            }),
            board: board,
            delta: planFormalRoomReward('mine', room),
            nextRoomId: roomPosition(save.run).next
          }
        });
        if (result.status !== 'changed') return;
        var _save$mineRecovery = save.mineRecovery,
          potion = _save$mineRecovery.potion,
          mineRecovery = _objectWithoutPropertiesLoose(_save$mineRecovery, _excluded);
        return _extends({}, result.save, {
          player: _extends({}, save.player, {
            hp: hp,
            dp: dp
          }),
          mineRecovery: mineRecovery
        });
      }
      function planMineChest(save, permit) {
        var run = save.run;
        if (save.mineRecovery.source !== 'formal' || run.closed || save.mineRecovery.chest || run.cursor !== 3 || permit.roomId !== 'mine:3' || permit.runId !== run.runId || permit.generation !== run.generation) return;
        var chest = {
          roomId: 'mine:3',
          generation: permit.generation
        };
        return _extends({}, save, {
          run: _extends({}, run, {
            cursor: 4,
            generation: run.generation + 1,
            pending: plus(run.pending, chestDelta)
          }),
          mineRecovery: _extends({}, save.mineRecovery, {
            chest: chest
          })
        });
      }
      function planMinePotion(save, checkpoint, hp, dp, expectedStock) {
        var _save$mineRecovery$po, _save$mineRecovery$po2;
        var stock = typeof save.player.potion === 'boolean' ? Number(save.player.potion) : save.player.potion;
        if (save.mineRecovery.source !== 'formal' || save.run.closed || !count(stock) || stock === 0 || stock !== expectedStock || !count(hp) || hp === 0 || !count(dp) || !validCheckpoint(save, checkpoint) || checkpoint.operation !== ((_save$mineRecovery$po = (_save$mineRecovery$po2 = save.mineRecovery.potion) == null ? void 0 : _save$mineRecovery$po2.operation) != null ? _save$mineRecovery$po : 0) + 1) return;
        return _extends({}, save, {
          player: _extends({}, save.player, {
            hp: hp,
            dp: dp,
            potion: stock - 1
          }),
          mineRecovery: _extends({}, save.mineRecovery, {
            potion: checkpoint
          })
        });
      }
      function planMineFormalClose(save, outcome, meters) {
        var run = save.run,
          player = save.player;
        if (save.mineRecovery.source !== 'formal' || !count(meters.hp) || meters.hp === 0 || !count(meters.dp)) return;
        var cleared = Array.isArray(player.cleared) ? player.cleared : [];
        var firstClear = outcome === 'complete' && !cleared.includes('mine');
        var result = planExplorationTestSettlement(save, run.runId, run.generation, outcome, firstClear);
        if (result.status !== 'changed') return;
        var preview = result.preview;
        var inventory = new Inventory();
        inventory.restore(player.inventory);
        for (var _i2 = 0, _arr = Object.keys(inventory.materials); _i2 < _arr.length; _i2++) {
          var _preview$loot$k;
          var k = _arr[_i2];
          inventory.materials[k] += (_preview$loot$k = preview.loot[k]) != null ? _preview$loot$k : 0;
        }
        for (var _i3 = 0, _arr2 = player.party; _i3 < _arr2.length; _i3++) {
          var id = _arr2[_i3];
          inventory.experience[id] += preview.xp;
        }
        var hunt = player.hunt;
        // Optional new town state lives in the same authoritative player snapshot.
        // Old checkpoints without this field retain their exact previous projection.
        var town = player.town;
        var baseHP = player.party.reduce(function (sum, id) {
          return sum + inventory.stats(id).hp;
        }, 0);
        var townPatch = town ? {
          town: _extends({}, town, {
            blessing: town.blessingInDungeon ? false : town.blessing,
            blessingInDungeon: false,
            altarCharge: outcome === 'complete' ? 1 : town.altarCharge
          }),
          hp: town.blessingInDungeon ? Math.min(meters.hp, baseHP) : meters.hp
        } : {};
        var _save$mineRecovery2 = save.mineRecovery,
          potion = _save$mineRecovery2.potion,
          metadata = _objectWithoutPropertiesLoose(_save$mineRecovery2, _excluded2);
        return _extends({}, save, {
          player: _extends({}, player, meters, townPatch, {
            inventory: inventory,
            gold: (count(player.gold) ? player.gold : 0) + preview.gold,
            exp: (count(player.exp) ? player.exp : 0) + preview.xp,
            cleared: firstClear ? [].concat(cleared, ['mine']) : cleared,
            hunt: outcome === 'complete' && (hunt == null ? void 0 : hunt.state) === 'active' && hunt.target === 'mine' ? _extends({}, hunt, {
              state: 'ready'
            }) : hunt,
            location: outcome === 'fail' ? 1 : 3
          }),
          run: result.run,
          mineRecovery: _extends({}, metadata, {
            settlement: {
              roomId: roomPosition(run).current,
              generation: run.generation,
              outcome: outcome,
              preview: preview,
              ordinaryWins: run.pending.ordinaryWins
            }
          })
        });
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MineTrial.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Chapter.ts', './TestBoardChallenge.ts'], function (exports) {
  var _extends, cclegacy, dungeons, encounter, challengeCatalog, sourceEntry;
  return {
    setters: [function (module) {
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      dungeons = module.dungeons;
      encounter = module.encounter;
    }, function (module) {
      challengeCatalog = module.challengeCatalog;
      sourceEntry = module.sourceEntry;
    }],
    execute: function () {
      exports({
        makeMineTrial: makeMineTrial,
        mechanismPage: mechanismPage,
        mineTestEncounter: mineTestEncounter,
        mineTrialRandom: mineTrialRandom,
        testMechanism: testMechanism
      });
      cclegacy._RF.push({}, "5e71aIqxQBM4YY6yZaGfFDg", "MineTrial", undefined);
      var mineTrialTitle = exports('mineTrialTitle', '废弃矿坑 · 矿车轨道');
      var mineTrialSeed = exports('mineTrialSeed', 20261114);
      var testMechanisms = exports('testMechanisms', [{
        id: 'rail',
        seed: mineTrialSeed,
        title: '矿坑 · 横向轨道',
        description: '上六排下落；底部两排横向补棋',
        dungeon: 'mine',
        objective: '观察横向供给与强化保留'
      }, {
        id: 'delivery',
        seed: 1,
        title: '矿坑 · 矿工撤离',
        description: '垂直重力；将3名矿工送到底部洞口',
        dungeon: 'mine',
        objective: '救出3名矿工，或击败守卫'
      }, {
        id: 'terrain',
        seed: mineTrialSeed,
        title: '林地 · 地表净化',
        description: '在印记所在格完成消除；双层需分两波命中',
        dungeon: 'forest',
        objective: '清除全部地表印记，或击败守卫'
      }, {
        id: 'rocks',
        seed: 3,
        title: '矿坑 · 碎岩开路',
        description: '相邻消除破坏岩块；岩块阻挡交换与落子',
        dungeon: 'mine',
        objective: '击碎全部岩块，或击败守卫'
      }, {
        id: 'jelly',
        seed: 17,
        title: '沼泽 · 黏液覆盖',
        description: '带黏液的匹配组将覆盖扩散至整组格位',
        dungeon: 'swamp',
        objective: '覆盖全部格位，或击败守卫'
      }, {
        id: 'portal',
        seed: 17,
        title: '高塔 · 传送阵',
        description: '落子穿过成对传送阵；交换仍限物理相邻',
        dungeon: 'tower',
        objective: '观察传送供给并击败敌人'
      }, {
        id: 'fracture',
        seed: 17,
        title: '林地 · 断裂棋盘',
        description: '空洞不通行；分段区域独立供给',
        dungeon: 'forest',
        objective: '在不规则棋盘上击败敌人'
      }].concat(challengeCatalog));
      var testTerrainCells = exports('testTerrainCells', Array.from({
        length: 12
      }, function (_, i) {
        return [15 + Math.floor(i / 4) * 7 + i % 4, i % 3 === 0 ? 2 : 1];
      }));
      function testMechanism(id) {
        return testMechanisms.find(function (entry) {
          return entry.id === id;
        });
      }
      function mechanismPage(page, size, count) {
        if (size === void 0) {
          size = 9;
        }
        if (count === void 0) {
          count = testMechanisms.length;
        }
        var pages = Math.max(1, Math.ceil(count / size));
        var current = Math.max(0, Math.min(pages - 1, page));
        return {
          page: current,
          pages: pages,
          start: current * size,
          end: Math.min(count, (current + 1) * size)
        };
      }
      function mineTestEncounter(round, id) {
        if (round === void 0) {
          round = 0;
        }
        if (id === void 0) {
          id = 'rail';
        }
        var config = testMechanism(id),
          dungeon = dungeons[config.dungeon];
        var room = encounter(config.dungeon, round % 3, 'battle', function () {
          return (round % dungeon.enemies.length + .25) / dungeon.enemies.length;
        });
        if (room.kind !== 'battle') throw Error('Test requires a battle room');
        if (id === 'rail' || id === 'portal' || id === 'fracture' || id === 'pillar' || id === 'updraft' || id === 'seam') return _extends({}, room, {
          coinReward: 0
        });
        // Test-only endurance, copied from live enemies. Never mutates formal numbers.
        var foes = room.encounters.map(function (foe) {
          return _extends({}, foe, {
            hp: Math.max(id === 'jelly' ? 3000 : 1200, foe.hp * (id === 'jelly' ? 24 : 12)),
            atk: Math.min(id === 'jelly' ? 2 : 6, foe.atk)
          });
        });
        return _extends({}, room, {
          enemies: foes.map(function (foe) {
            return foe.hp;
          }),
          encounters: foes,
          coinReward: 0
        }, id === 'delivery' ? {
          delivery: {
            required: 3,
            starts: [15, 17, 19],
            exits: [49, 50, 51, 52, 53, 54, 55]
          }
        } : id === 'source' ? {
          delivery: {
            required: 3,
            starts: [sourceEntry, sourceEntry + 7, sourceEntry + 1],
            exits: [51]
          }
        } : {});
      }
      function makeMineTrial(id) {
        if (id === void 0) {
          id = 'rail';
        }
        return [mineTestEncounter(0, id)];
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

System.register("chunks:///_virtual/potion-bridge.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('createPotionBridge', createPotionBridge);
      cclegacy._RF.push({}, "bcbbbkWQzRINJd2XrTQ3njN", "potion-bridge", undefined);
      function createPotionBridge(core, stock, isCurrent) {
        var seen = new Set();
        var uncertain = false;
        return function (receiptId) {
          if (uncertain || !isCurrent() || !receiptId.trim() || core.disposition !== 'active') return 'rejected';
          if (seen.has(receiptId)) return 'duplicate';
          var reservation = stock.reserve(receiptId);
          if (!reservation) return 'rejected';
          if (!isCurrent()) {
            reservation.release();
            return 'rejected';
          }
          var before = core.snapshot().events.length;
          var submitted = false;
          try {
            core.submit({
              potion: {
                receiptId: receiptId
              }
            });
          } catch (error) {
            if (core.disposition === 'failed') throw error;
          } finally {
            submitted = core.snapshot().events.slice(before).some(function (e) {
              return e.type === 'POTION_APPLIED' && e.payload.receiptId === receiptId;
            });
            if (!submitted) reservation.release();
          }
          if (!submitted) return 'rejected';
          seen.add(receiptId);
          try {
            reservation.confirm();
          } catch (_unused) {
            // Confirmation may throw after changing stock. Do not retry or refund blindly.
            uncertain = true;
            core.cancel('potion-stock-confirmation-uncertain:' + receiptId);
            return 'confirm-uncertain';
          }
          return 'applied';
        };
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/QuestJournal.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _extends, _createForOfIteratorHelperLoose, cclegacy;
  return {
    setters: [function (module) {
      _extends = module.extends;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e1cbcR5bmZH+Y2JKsUI1Xxg", "QuestJournal", undefined);
      var chapter = '第一章：躁动的魔物';
      var talk = function talk(key) {
        return {
          kind: 'talk',
          key: key
        };
      };
      var questBook = exports('questBook', [{
        id: 'rescue',
        group: chapter,
        title: '救助村民',
        description: '把获救村民的消息带给溪桥村村长。',
        accept: {
          kind: 'room',
          key: 'villager'
        },
        turnIn: talk('chief-report'),
        objectives: [{
          kind: 'room',
          key: 'villager',
          count: 1,
          text: '救下村民'
        }],
        reward: {
          gold: 20
        }
      }, {
        id: 'knight',
        group: chapter,
        title: '新队友',
        description: '到溪桥村酒馆与盾卫罗兰会合。',
        requires: 'rescue',
        accept: talk('chief-knight'),
        turnIn: talk('knight'),
        objectives: [_extends({}, talk('knight'), {
          count: 1,
          text: '与罗兰交谈'
        })],
        reward: {
          item: '盾卫罗兰入队'
        }
      }, {
        id: 'mage',
        group: chapter,
        title: '法师的下落',
        description: '循着村长的线索到高塔寻找伊芙。',
        requires: 'rescue',
        accept: talk('chief-mage'),
        turnIn: talk('mage'),
        objectives: [_extends({}, talk('mage'), {
          count: 1,
          text: '与伊芙交谈'
        })],
        reward: {
          item: '法师伊芙入队'
        }
      }].concat(Object.entries({
        forest: '苔石森林',
        mine: '矿坑',
        swamp: '迷雾沼泽',
        tower: '高塔'
      }).map(function (_ref) {
        var id = _ref[0],
          name = _ref[1];
        return {
          id: 'hunt-' + id,
          group: '狩猎',
          title: '讨伐 · ' + name,
          description: '完成该副本后，返回酒馆领取酬金。',
          accept: talk('accept-' + id),
          turnIn: talk('inn-report'),
          objectives: [{
            kind: 'clear',
            key: id,
            count: 1,
            text: '通关' + name
          }],
          repeat: true,
          reward: {
            gold: 12
          }
        };
      })));
      var QuestJournal = exports('QuestJournal', /*#__PURE__*/function () {
        function QuestJournal(definitions, saved) {
          var _this = this;
          if (definitions === void 0) {
            definitions = questBook;
          }
          this.entries = {};
          this.definitions = void 0;
          this.definitions = definitions;
          var _loop = function _loop() {
            var d = _step.value;
            var e = saved == null ? void 0 : saved[d.id];
            if (e && typeof e.active === 'boolean' && Number.isSafeInteger(e.finished) && e.finished >= 0 && Array.isArray(e.counts)) _this.entries[d.id] = {
              active: e.active,
              finished: e.finished,
              counts: d.objectives.map(function (o, i) {
                return Math.max(0, Math.min(o.count, Math.floor(Number(e.counts[i]) || 0)));
              })
            };
          };
          for (var _iterator = _createForOfIteratorHelperLoose(definitions), _step; !(_step = _iterator()).done;) {
            _loop();
          }
        }
        var _proto = QuestJournal.prototype;
        _proto.progress = function progress(d, i, stock) {
          var _stock$o$key, _this$entries$d$id$co, _this$entries$d$id;
          var o = d.objectives[i];
          return Math.min(o.count, o.kind === 'item' ? (_stock$o$key = stock[o.key]) != null ? _stock$o$key : 0 : (_this$entries$d$id$co = (_this$entries$d$id = this.entries[d.id]) == null ? void 0 : _this$entries$d$id.counts[i]) != null ? _this$entries$d$id$co : 0);
        };
        _proto.ready = function ready(d, stock) {
          var _this$entries$d$id2,
            _this2 = this;
          return !!((_this$entries$d$id2 = this.entries[d.id]) != null && _this$entries$d$id2.active) && d.objectives.every(function (o, i) {
            return _this2.progress(d, i, stock) >= o.count;
          });
        };
        _proto.signal = function signal(event) {
          var _this3 = this;
          var accepted = [];
          var _loop2 = function _loop2() {
            var _entry, _entry2, _this3$entries$d$requ, _entry4;
            var d = _step2.value;
            var entry = _this3.entries[d.id];
            if (!((_entry = entry) != null && _entry.active) && (!((_entry2 = entry) != null && _entry2.finished) || d.repeat) && (!d.requires || (_this3$entries$d$requ = _this3.entries[d.requires]) != null && _this3$entries$d$requ.finished) && d.accept.kind === event.kind && d.accept.key === event.key) {
              var _entry$finished, _entry3;
              entry = _this3.entries[d.id] = {
                active: true,
                finished: (_entry$finished = (_entry3 = entry) == null ? void 0 : _entry3.finished) != null ? _entry$finished : 0,
                counts: d.objectives.map(function () {
                  return 0;
                })
              };
              accepted.push(d);
            }
            if ((_entry4 = entry) != null && _entry4.active) d.objectives.forEach(function (o, i) {
              if (o.kind === event.kind && o.key === event.key) entry.counts[i] = Math.min(o.count, entry.counts[i] + 1);
            });
          };
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.definitions), _step2; !(_step2 = _iterator2()).done;) {
            _loop2();
          }
          return accepted;
        };
        _proto.submit = function submit(event, stock) {
          var completed = [];
          for (var _iterator3 = _createForOfIteratorHelperLoose(this.definitions), _step3; !(_step3 = _iterator3()).done;) {
            var d = _step3.value;
            if (d.turnIn.kind !== event.kind || d.turnIn.key !== event.key || !this.ready(d, stock)) continue;
            var costs = {};
            for (var _iterator4 = _createForOfIteratorHelperLoose(d.objectives), _step4; !(_step4 = _iterator4()).done;) {
              var _costs$o$key;
              var o = _step4.value;
              if (o.kind === 'item' && o.consume) costs[o.key] = ((_costs$o$key = costs[o.key]) != null ? _costs$o$key : 0) + o.count;
            }
            if (Object.entries(costs).some(function (_ref2) {
              var _stock$key;
              var key = _ref2[0],
                n = _ref2[1];
              return ((_stock$key = stock[key]) != null ? _stock$key : 0) < n;
            })) continue;
            for (var _i = 0, _Object$entries = Object.entries(costs); _i < _Object$entries.length; _i++) {
              var _Object$entries$_i = _Object$entries[_i],
                key = _Object$entries$_i[0],
                n = _Object$entries$_i[1];
              stock[key] -= n;
            }
            var e = this.entries[d.id];
            e.active = false;
            e.finished++;
            completed.push(d);
          }
          return completed;
        };
        return QuestJournal;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/StageLayout.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports({
        stageCover: stageCover,
        stageReelCrop: stageReelCrop
      });
      cclegacy._RF.push({}, "b1ef2on9MdCMp74v+COgmRJ", "StageLayout", undefined);
      // Art coordinates are top-left, y down. The common Game parent is centered and y up.
      var width = 480;
      var height = 270;
      var centerY = 292;
      var stageX = exports('stageX', function stageX(x) {
        return x - width / 2;
      });
      var stageY = exports('stageY', function stageY(y) {
        return centerY + height / 2 - y;
      });
      var stageGrid = exports('stageGrid', {
        width: width,
        height: height,
        centerY: centerY,
        titleY: stageY(20),
        meterX: 132,
        hpY: stageY(68),
        secondaryY: stageY(97),
        groundY: stageY(229),
        rearGroundY: stageY(201),
        bossGroundY: stageY(235),
        groundBand: {
          top: 175,
          bottom: 245
        }
      });
      function stageCover(w, h) {
        var scale = Math.max(width / w, height / h);
        var cropW = width / scale,
          cropH = height / scale;
        return {
          x: (w - cropW) / 2,
          y: h - cropH,
          w: cropW,
          h: cropH
        };
      }

      // Travel and stills sample the same reel with this one vertical aperture.
      function stageReelCrop(w, h, top, bottom) {
        var aperture = Math.min(h * (bottom - top), w * height / width);
        return {
          y: Math.min(h - aperture, h * top),
          h: aperture,
          window: aperture * width / height,
          drawnWidth: w * height / aperture
        };
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/StageTravel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy, tween, Tween;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      tween = module.tween;
      Tween = module.Tween;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a6e90FM3YhFRqFXhuxzxd8x", "StageTravel", undefined);

      /** Owns the visible window of a route. Route entries are factories, not nodes. */
      var StageTravel = exports('StageTravel', /*#__PURE__*/function () {
        function StageTravel(count, width, direction, mount, initial) {
          this.visible = new Map();
          this.camera = {
            offset: 0
          };
          this.finish = void 0;
          this.count = count;
          this.width = width;
          this.direction = direction;
          this.mount = mount;
          if (initial) this.visible.set(0, initial);
        }
        var _proto = StageTravel.prototype;
        _proto.update = function update() {
          var index = this.camera.offset / this.width;
          var first = Math.floor(index);
          var last = Math.min(this.count - 1, Math.ceil(index));
          for (var _iterator = _createForOfIteratorHelperLoose(this.visible), _step; !(_step = _iterator()).done;) {
            var _step$value = _step.value,
              _slot = _step$value[0],
              _node = _step$value[1];
            if (_slot >= first && _slot <= last) continue;
            _node.removeFromParent();
            _node.destroy();
            this.visible["delete"](_slot);
          }
          for (var slot = first; slot <= last; slot++) {
            var _this$visible$get;
            var node = (_this$visible$get = this.visible.get(slot)) != null ? _this$visible$get : this.mount(slot);
            this.visible.set(slot, node);
            node.setPosition((slot * this.width - this.camera.offset) * this.direction, 0);
          }
        };
        _proto.seek = function seek(offset) {
          this.camera.offset = Math.max(0, Math.min((this.count - 1) * this.width, offset));
          this.update();
        };
        _proto.play = function play(seconds, from, to) {
          var _this = this;
          if (from === void 0) {
            from = 0;
          }
          if (to === void 0) {
            to = (this.count - 1) * this.width;
          }
          this.camera.offset = from;
          this.update();
          return new Promise(function (resolve) {
            _this.finish = resolve;
            tween(_this.camera).to(seconds, {
              offset: to
            }, {
              onUpdate: function onUpdate() {
                return _this.update();
              }
            }).call(function () {
              _this.update();
              _this.finish = undefined;
              resolve();
            }).start();
          });
        };
        _proto.dispose = function dispose() {
          var _this$finish;
          Tween.stopAllByTarget(this.camera);
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.visible.values()), _step2; !(_step2 = _iterator2()).done;) {
            var node = _step2.value;
            node.removeFromParent();
            node.destroy();
          }
          this.visible.clear();
          (_this$finish = this.finish) == null || _this$finish.call(this);
          this.finish = undefined;
        };
        return StageTravel;
      }());
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
        function TemplateBoardFx(parent, frames, font) {
          this.layer = void 0;
          this.pool = [];
          this.stamp = void 0;
          this.disposed = false;
          this.frames = frames;
          this.font = font;
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
                    _text.fontFamily = 'ZCOOL KuaiLe';
                    if (this.font) {
                      _text.useSystemFont = false;
                      _text.font = this.font;
                    }
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

System.register("chunks:///_virtual/TestBoardChallenge.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Board.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, _createClass, cclegacy, playableCell, adjacent, cols;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      playableCell = module.playableCell;
      adjacent = module.adjacent;
      cols = module.cols;
    }],
    execute: function () {
      exports({
        challengeEdge: challengeEdge,
        challengeGravity: challengeGravity,
        challengeLocks: challengeLocks,
        challengePowers: challengePowers,
        challengeSwap: challengeSwap,
        growChallengeLocks: growChallengeLocks,
        hitChallengeLocks: hitChallengeLocks,
        powerCells: powerCells
      });
      cclegacy._RF.push({}, "4684026WndJu5/xn7WrgjaH", "TestBoardChallenge", undefined);
      var challengeCatalog = exports('challengeCatalog', [{
        id: 'wire',
        seed: 21,
        title: '林地 · 藤笼缠绕',
        description: '藤笼固定棋子，借周围纹章在原位消除',
        dungeon: 'forest',
        objective: '解除全部藤笼'
      }, {
        id: 'seam',
        seed: 22,
        title: '矿坑 · 栅栏分界',
        description: '栅栏切断跨线交换、匹配和落子',
        dungeon: 'mine',
        objective: '利用两侧各自的补给击败敌人'
      }, {
        id: 'pillar',
        seed: 23,
        title: '高塔 · 永固石柱',
        description: '石柱占格，普通与强化消除都无法清除',
        dungeon: 'tower',
        objective: '在永久分隔的棋盘上击败敌人'
      }, {
        id: 'updraft',
        seed: 24,
        title: '高塔 · 逆向风道',
        description: '中间三列向上补棋，两侧向下',
        dungeon: 'tower',
        objective: '利用逆向落子打出攻击'
      }, {
        id: 'spiral',
        seed: 25,
        title: '高塔 · 螺纹封印',
        description: '相邻消除解开封印，每波最多松动一圈',
        dungeon: 'tower',
        objective: '拆除全部封印'
      }, {
        id: 'relic',
        seed: 26,
        title: '矿坑 · 合体遗迹',
        description: '逐格破开遗迹封条，同一遗迹的封条全部解开才释放占格',
        dungeon: 'mine',
        objective: '打开长形与方形遗迹'
      }, {
        id: 'growth',
        seed: 27,
        title: '沼泽 · 蔓生沼泥',
        description: '邻接消除清除沼泥，未清除的回合至多蔓延一格',
        dungeon: 'swamp',
        objective: '清空沼泥'
      }, {
        id: 'source',
        seed: 28,
        title: '矿坑 · 专用矿道口',
        description: '中路入口逐个补入矿工，下方只有一个出口',
        dungeon: 'mine',
        objective: '依次撤离3名矿工，或击败守卫'
      }, {
        id: 'bomb',
        seed: 29,
        title: '矿坑 · 倒数爆晶',
        description: '带倒数的纹章正常参与匹配，结算一回合减一',
        dungeon: 'mine',
        objective: '爆炸前拆除全部爆晶'
      }, {
        id: 'stripe-h',
        seed: 30,
        title: '林地 · 横纹扫击',
        description: '匹配带横印的纹章，额外消除同排棋子',
        dungeon: 'forest',
        objective: '触发横向清除2次'
      }, {
        id: 'stripe-v',
        seed: 31,
        title: '林地 · 竖纹扫击',
        description: '匹配带竖印的纹章，额外消除同列棋子',
        dungeon: 'forest',
        objective: '触发纵向清除2次'
      }, {
        id: 'parcel',
        seed: 32,
        title: '矿坑 · 震荡符包',
        description: '匹配符包，清除中心周围3×3格',
        dungeon: 'mine',
        objective: '引爆2枚符包'
      }, {
        id: 'color',
        seed: 33,
        title: '高塔 · 同色共鸣',
        description: '匹配彩印，清除棋盘上同类普通纹章',
        dungeon: 'tower',
        objective: '触发同色共鸣2次'
      }, {
        id: 'seeker',
        seed: 34,
        title: '沼泽 · 寻迹飞弹',
        description: '匹配飞弹以命中指定标记，依次寻找最近目标',
        dungeon: 'swamp',
        objective: '完成2次寻迹命中'
      }, {
        id: 'fusion',
        seed: 35,
        title: '高塔 · 双印共振',
        description: '交换相邻横印、竖印，无需三连即可发动交叉清除',
        dungeon: 'tower',
        objective: '发动两枚独立纹章的合击'
      }, {
        id: 'collect',
        seed: 36,
        title: '林地 · 剑印收集',
        description: '只累计实际参与匹配的剑纹章',
        dungeon: 'forest',
        objective: '收集12枚剑纹章'
      }, {
        id: 'score',
        seed: 37,
        title: '高塔 · 连锁计分',
        description: '每枚匹配纹章10分，按当前连锁波次递增',
        dungeon: 'tower',
        objective: '累积300分'
      }, {
        id: 'moves',
        seed: 38,
        title: '林地 · 限步突围',
        description: '无效交换免费；8次有效交换内达成计分目标',
        dungeon: 'forest',
        objective: '8步内达到250分'
      }, {
        id: 'timed',
        seed: 39,
        title: '高塔 · 限时试炼',
        description: '只在可操作时计时，技能和棋盘演出期间暂停',
        dungeon: 'tower',
        objective: '45秒操作时间内达到250分'
      }, {
        id: 'relay',
        seed: 40,
        title: '高塔 · 分段接力',
        description: '先收集剑印，再收集星印，换段时保留棋盘',
        dungeon: 'tower',
        objective: '依次收集6枚剑印和6枚星印'
      }, {
        id: 'no-shuffle',
        seed: 41,
        title: '林地 · 封闭补给',
        description: '遭遇无解盘即结束本轮，保留棋子身份开始下一轮',
        dungeon: 'forest',
        objective: '在无解前达到250分'
      }]);
      var powerLabel = exports('powerLabel', {
        'stripe-h': '横',
        'stripe-v': '竖',
        parcel: '震',
        color: '彩',
        seeker: '寻',
        bomb: '爆'
      });
      var powerIds = new Set(Object.keys(powerLabel));
      var relics = [[15, 22], [25, 26, 32, 33]];
      var seams = [[16, 17], [23, 24], [30, 31], [25, 32], [26, 33]];
      var pillarCells = exports('pillarCells', [16, 18, 31, 33]);
      var sourceEntry = exports('sourceEntry', 37);
      function challengeSwap(id, a, b, locked) {
        return !locked.has(a) && !locked.has(b) && challengeEdge(id, a, b);
      }
      function challengeEdge(id, a, b) {
        return id !== 'seam' || !seams.some(function (_ref) {
          var from = _ref[0],
            to = _ref[1];
          return from === Math.min(a, b) && to === Math.max(a, b);
        });
      }
      function challengeGravity(id, routes, locked) {
        return routes.flatMap(function (original, col) {
          var route = id === 'updraft' && col >= 2 && col <= 4 ? Array.from(original).reverse() : original;
          var paths = [];
          var path = [];
          for (var _iterator = _createForOfIteratorHelperLoose(route), _step; !(_step = _iterator()).done;) {
            var cell = _step.value;
            var previous = path.at(-1);
            if (path.length && (locked.has(cell) || !challengeEdge(id, previous, cell) || id === 'source' && cell === sourceEntry)) {
              paths.push(path);
              path = [];
            }
            if (locked.has(cell)) paths.push([cell]);else path.push(cell);
          }
          if (path.length) paths.push(path);
          return paths;
        });
      }
      function challengeLocks(id) {
        if (id === 'wire') return new Map([[16, 1], [19, 1], [29, 1], [38, 1]]);
        if (id === 'spiral') return new Map([[16, 2], [18, 2], [31, 2]]);
        if (id === 'growth') return new Map([[17, 1], [31, 1]]);
        if (id === 'relic') return new Map(relics.flatMap(function (group) {
          return group.map(function (index) {
            return [index, 1];
          });
        }));
        return new Map();
      }
      function hitChallengeLocks(id, locked, matched) {
        var next = new Map(locked);
        var hits = [];
        var _loop = function _loop() {
            var _step2$value = _step2.value,
              cell = _step2$value[0],
              value = _step2$value[1];
            if (!value) return 0; // continue
            var hit = id === 'wire' ? matched.has(cell) : Array.from(matched).some(function (index) {
              return adjacent(index, cell);
            });
            if (!hit) return 0; // continue
            hits.push(cell);
            if (value > 1 || id === 'relic') next.set(cell, value - 1);else next["delete"](cell);
          },
          _ret;
        for (var _iterator2 = _createForOfIteratorHelperLoose(locked), _step2; !(_step2 = _iterator2()).done;) {
          _ret = _loop();
          if (_ret === 0) continue;
        }
        if (id === 'relic') {
          for (var _iterator3 = _createForOfIteratorHelperLoose(relics), _step3; !(_step3 = _iterator3()).done;) {
            var group = _step3.value;
            if (group.every(function (cell) {
              return !next.get(cell);
            })) group.forEach(function (cell) {
              return next["delete"](cell);
            });
          }
        }
        return {
          next: next,
          hits: hits
        };
      }
      function growChallengeLocks(locked, board, protectedCells) {
        if (locked.size >= 12) return undefined;
        return board.findIndex(function (type, index) {
          return playableCell(type) && !locked.has(index) && !protectedCells.has(index) && Array.from(locked.keys()).some(function (cell) {
            return adjacent(index, cell);
          });
        });
      }
      function challengePowers(id, board, protectedCells) {
        var wanted = id === 'fusion' ? [17, 18] : [16, 24, 39];
        if (id !== 'fusion' && !powerIds.has(id)) return [];
        var cells = new Set();
        return wanted.flatMap(function (desired, i) {
          var index = (id === 'fusion' ? [desired] : [desired].concat(Array.from(board.keys()))).find(function (cell) {
            return playableCell(board[cell]) && !cells.has(cell) && (id === 'fusion' || !protectedCells.has(cell));
          });
          if (index === undefined) return [];
          cells.add(index);
          var power = id === 'fusion' ? i ? 'stripe-v' : 'stripe-h' : id;
          return [{
            index: index,
            power: power
          }];
        });
      }
      function powerCells(power, index, board, targets) {
        var x = index % cols,
          y = Math.floor(index / cols);
        var distance = function distance(i) {
          return Math.abs(i % cols - x) + Math.abs(Math.floor(i / cols) - y);
        };
        var nearest = Array.from(targets).sort(function (a, b) {
          return distance(a) - distance(b) || a - b;
        })[0];
        return board.flatMap(function (type, i) {
          if (!playableCell(type)) return [];
          var affected = power === 'stripe-h' ? Math.floor(i / cols) === y : power === 'stripe-v' ? i % cols === x : power === 'parcel' ? Math.abs(i % cols - x) <= 1 && Math.abs(Math.floor(i / cols) - y) <= 1 : power === 'color' ? type === board[index] : power === 'seeker' && i === nearest;
          return affected ? [i] : [];
        });
      }
      var TestBoardChallenge = exports('TestBoardChallenge', /*#__PURE__*/function () {
        function TestBoardChallenge(id) {
          this.locks = void 0;
          this.powers = new Map();
          this.targets = new Set([12, 43]);
          this.moves = 0;
          this.time = 45;
          this.stage = 0;
          this.score = 0;
          this.progress = 0;
          this.hitThisTurn = false;
          this.id = void 0;
          this.id = id;
          this.locks = challengeLocks(id);
        }
        var _proto = TestBoardChallenge.prototype;
        _proto.count = function count(wave, board, matched) {
          this.score += matched.size * 10 * wave;
          if (this.id === 'collect' || this.id === 'relay') {
            var crest = this.stage ? 'm' : 's';
            this.progress += Array.from(matched).filter(function (i) {
              return board[i] === crest;
            }).length;
          }
          if (this.id === 'relay' && !this.stage && this.progress >= 6) {
            this.stage = 1;
            this.progress = 0;
          }
        };
        _createClass(TestBoardChallenge, [{
          key: "success",
          get: function get() {
            switch (this.id) {
              case 'wire':
              case 'spiral':
              case 'relic':
              case 'growth':
                return !this.locks.size;
              case 'bomb':
                return !this.powers.size;
              case 'stripe-h':
              case 'stripe-v':
              case 'parcel':
              case 'color':
                return this.progress >= 2;
              case 'seeker':
                return !this.targets.size;
              case 'fusion':
                return this.progress >= 1;
              case 'collect':
                return this.progress >= 12;
              case 'score':
                return this.score >= 300;
              case 'moves':
              case 'timed':
              case 'no-shuffle':
                return this.score >= 250;
              case 'relay':
                return this.stage === 1 && this.progress >= 6;
              default:
                return false;
            }
          }
        }, {
          key: "exhausted",
          get: function get() {
            return this.id === 'moves' && this.moves >= 8 || this.id === 'timed' && this.time <= 0 || this.id === 'bomb' && this.moves >= 8 && this.powers.size > 0;
          }
        }, {
          key: "status",
          get: function get() {
            var _this = this;
            switch (this.id) {
              case 'wire':
              case 'spiral':
              case 'relic':
              case 'growth':
                return "\u673A\u5173\u5269\u4F59 " + this.locks.size + " \u683C";
              case 'bomb':
                return "\u7206\u6676\u5269\u4F59 " + this.powers.size + " \u679A \xB7 \u5012\u6570 " + Math.max(0, 8 - this.moves);
              case 'stripe-h':
              case 'stripe-v':
              case 'parcel':
              case 'color':
                return "\u673A\u5236\u89E6\u53D1 " + Math.min(2, this.progress) + "/2";
              case 'seeker':
                return "\u5BFB\u8FF9\u76EE\u6807 " + (2 - this.targets.size) + "/2";
              case 'fusion':
                return "\u53CC\u5370\u5171\u632F " + Math.min(1, this.progress) + "/1";
              case 'collect':
                return "\u6536\u96C6\u5251\u7EB9\u7AE0 " + Math.min(12, this.progress) + "/12";
              case 'relay':
                return (this.stage ? '第二段 · 星纹章' : '第一段 · 剑纹章') + " " + Math.min(6, this.progress) + "/6";
              case 'score':
                return "\u8FDE\u9501\u5F97\u5206 " + this.score + "/300";
              case 'moves':
                return "\u5F97\u5206 " + this.score + "/250 \xB7 \u5269\u4F59 " + Math.max(0, 8 - this.moves) + " \u6B65";
              case 'timed':
                return "\u5F97\u5206 " + this.score + "/250 \xB7 \u5269\u4F59 " + Math.ceil(this.time) + " \u79D2";
              case 'no-shuffle':
                return "\u5F97\u5206 " + this.score + "/250 \xB7 \u65E0\u89E3\u5373\u7ED3\u675F\u672C\u8F6E";
              default:
                return challengeCatalog.find(function (entry) {
                  return entry.id === _this.id;
                }).description;
            }
          }
        }]);
        return TestBoardChallenge;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TestBoardRules.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Board.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy, cols, rows, verticalGravity, adjacent;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      cols = module.cols;
      rows = module.rows;
      verticalGravity = module.verticalGravity;
      adjacent = module.adjacent;
    }],
    execute: function () {
      exports({
        damageRocks: damageRocks,
        placeRocks: placeRocks,
        portalGravity: portalGravity,
        segmentedGravity: segmentedGravity,
        spreadJelly: spreadJelly
      });
      cclegacy._RF.push({}, "5bab63cqzFCfJWgJHljHmAV", "TestBoardRules", undefined);
      var rockLayout = exports('rockLayout', [[16, 1], [17, 2], [18, 1], [30, 1], [31, 2], [32, 1]]);
      var fractureHoles = exports('fractureHoles', [0, 6, 7, 13, 17, 24, 31, 38, 42, 48, 49, 55]);
      var jellyStarts = exports('jellyStarts', [15, 17, 19, 36, 38, 40]);
      var portalLinks = exports('portalLinks', [[21, 32], [25, 28]]);
      /** Fixed independent supply segments. Blocked cells never become route members. */
      function segmentedGravity(blocked) {
        var routes = [];
        for (var col = 0; col < cols; col++) {
          var path = [];
          for (var row = 0; row < rows; row++) {
            var cell = row * cols + col;
            if (blocked.has(cell)) {
              if (path.length) routes.push(path);
              path = [];
            } else path.push(cell);
          }
          if (path.length) routes.push(path);
        }
        return routes;
      }
      function portalGravity() {
        return verticalGravity.map(function (route, col) {
          return col === 0 ? [0, 7, 14, 21, 32, 39, 46, 53] : col === 4 ? [4, 11, 18, 25, 28, 35, 42, 49] : Array.from(route);
        });
      }
      function damageRocks(rocks, matched) {
        var cells = Array.from(new Set(matched)),
          next = new Map(rocks),
          hits = [],
          cleared = [];
        rocks.forEach(function (layers, index) {
          if (!cells.some(function (cell) {
            return adjacent(cell, index);
          })) return;
          hits.push(index);
          if (layers === 1) {
            next["delete"](index);
            cleared.push(index);
          } else next.set(index, layers - 1);
        });
        return {
          next: next,
          hits: hits,
          cleared: cleared
        };
      }
      /** Snapshot-based spread: new coverage cannot seed an unrelated component in the same wave. */
      function spreadJelly(covered, groups) {
        var next = new Set(covered),
          added = [];
        for (var _iterator = _createForOfIteratorHelperLoose(groups), _step; !(_step = _iterator()).done;) {
          var group = _step.value;
          if (!group.some(function (i) {
            return covered.has(i);
          })) continue;
          for (var _iterator2 = _createForOfIteratorHelperLoose(group), _step2; !(_step2 = _iterator2()).done;) {
            var i = _step2.value;
            if (!next.has(i)) {
              next.add(i);
              added.push(i);
            }
          }
        }
        return {
          next: next,
          added: added
        };
      }
      /** Spawn blockers only on ordinary cells; enhanced tile identities take precedence. */
      function placeRocks(protectedCells) {
        var rocks = new Map();
        var _loop = function _loop() {
            var _step3$value = _step3.value,
              desired = _step3$value[0],
              layers = _step3$value[1];
            var candidates = Array.from({
                length: cols * rows
              }, function (_, i) {
                return i;
              }).sort(function (a, b) {
                return Math.abs(a - desired) - Math.abs(b - desired) || a - b;
              }),
              index = candidates.find(function (i) {
                return !protectedCells.has(i) && !rocks.has(i);
              });
            if (index === undefined) return {
              v: undefined
            };
            rocks.set(index, layers);
          },
          _ret;
        for (var _iterator3 = _createForOfIteratorHelperLoose(rockLayout), _step3; !(_step3 = _iterator3()).done;) {
          _ret = _loop();
          if (_ret) return _ret.v;
        }
        return rocks;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TownRules.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _extends, cclegacy;
  return {
    setters: [function (module) {
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports({
        claimAltar: claimAltar,
        exitBlessing: exitBlessing,
        restoreTown: restoreTown
      });
      cclegacy._RF.push({}, "73dcep73F9CPJksffaKbVP4", "TownRules", undefined);
      var newTownProgress = exports('newTownProgress', function newTownProgress() {
        return {
          rescued: false,
          knightQuest: false,
          mageQuest: false,
          altarCharge: 1,
          blessing: false,
          blessingInDungeon: false
        };
      });
      function restoreTown(value, legacyRescued) {
        if (legacyRescued === void 0) {
          legacyRescued = false;
        }
        var source = value && typeof value === 'object' ? value : {};
        return {
          rescued: source.rescued === undefined ? legacyRescued : source.rescued === true,
          knightQuest: source.knightQuest === true,
          mageQuest: source.mageQuest === true,
          altarCharge: source.altarCharge === 0 ? 0 : 1,
          blessing: source.blessing === true,
          blessingInDungeon: source.blessing === true && source.blessingInDungeon === true
        };
      }
      function claimAltar(town, hp, baseMaxHP) {
        if (town.altarCharge !== 1 || town.blessing) return;
        return {
          town: _extends({}, town, {
            altarCharge: 0,
            blessing: true,
            blessingInDungeon: false
          }),
          hp: Math.min(baseMaxHP + 100, hp + 100)
        };
      }
      function exitBlessing(town, hp, baseMaxHP, completed) {
        return {
          town: _extends({}, town, {
            altarCharge: completed ? 1 : town.altarCharge,
            blessing: town.blessingInDungeon ? false : town.blessing,
            blessingInDungeon: false
          }),
          hp: town.blessingInDungeon ? Math.min(hp, baseMaxHP) : hp
        };
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TravelClock.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('travelPose', travelPose);
      cclegacy._RF.push({}, "032a1sl+FpDn4wYEUqBItvU", "TravelClock", undefined);
      /** Presentation time only. Long browser frames never skip the whole visible journey. */
      var TravelClock = exports('TravelClock', /*#__PURE__*/function () {
        function TravelClock(duration, maxStep) {
          if (maxStep === void 0) {
            maxStep = .05;
          }
          this.elapsed = 0;
          this.duration = void 0;
          this.maxStep = void 0;
          if (!Number.isFinite(duration) || duration <= 0 || !Number.isFinite(maxStep) || maxStep <= 0) throw Error('Invalid travel clock');
          this.duration = duration;
          this.maxStep = maxStep;
        }
        var _proto = TravelClock.prototype;
        _proto.advance = function advance(dt) {
          if (Number.isFinite(dt) && dt > 0) this.elapsed = Math.min(this.duration, this.elapsed + Math.min(dt, this.maxStep));
          return this.progress;
        };
        _createClass(TravelClock, [{
          key: "progress",
          get: function get() {
            return Math.min(1, this.elapsed / this.duration);
          }
        }, {
          key: "done",
          get: function get() {
            return this.elapsed >= this.duration;
          }
        }]);
        return TravelClock;
      }());
      function travelPose(elapsed, index) {
        var phase = elapsed * 6 + index * .19;
        return {
          x: Math.sin(phase * Math.PI * 2) * 2,
          y: Math.pow(Math.sin(phase * Math.PI), 2) * (5 + index % 2 * 2),
          angle: Math.sin(phase * Math.PI * 2) * 4
        };
      }
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