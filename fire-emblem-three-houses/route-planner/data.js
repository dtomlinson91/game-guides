// Generated from ../beginner-guide.md and its sources. Do not edit by hand.
// Regenerate with build_data.py.
window.FE3H_DATA = {
 "skills": [
  "Sword",
  "Lance",
  "Axe",
  "Bow",
  "Brawling",
  "Reason",
  "Faith",
  "Authority",
  "Heavy Armour",
  "Riding",
  "Flying"
 ],
 "characters": [
  {
   "name": "Edelgard",
   "house": "BE",
   "strong": [
    "Sword",
    "Axe",
    "Authority",
    "Heavy Armour"
   ],
   "weak": [
    "Bow",
    "Faith"
   ],
   "budding": "Reason",
   "suggestText": "Default Axe and Authority. Lord, heavy armour. Unique: Armored Lord, then Emperor",
   "role": "Tank, physical damage",
   "roleDerived": false,
   "defaultGoal": [
    "Axe",
    "Authority"
   ],
   "goalRequests": [
    {
     "skills": [
      "Sword",
      "Authority"
     ],
     "cls": "Lord"
    },
    {
     "skills": [
      "Axe",
      "Heavy Armour"
     ],
     "cls": "Heavy armor classes"
    }
   ],
   "initial": {
    "Sword": "E+",
    "Axe": "D",
    "Authority": "D",
    "Heavy Armour": "D"
   }
  },
  {
   "name": "Hubert",
   "house": "BE",
   "strong": [
    "Bow",
    "Reason",
    "Authority"
   ],
   "weak": [
    "Axe",
    "Faith",
    "Flying"
   ],
   "budding": "Lance",
   "suggestText": "Default Reason and Authority. Magic classes, cavalry, Sniper",
   "role": "Magic damage",
   "roleDerived": false,
   "defaultGoal": [
    "Reason",
    "Authority"
   ],
   "goalRequests": [
    {
     "skills": [
      "Reason"
     ],
     "cls": "Magic classes"
    },
    {
     "skills": [
      "Lance",
      "Riding"
     ],
     "cls": "Cavalry classes"
    },
    {
     "skills": [
      "Bow"
     ],
     "cls": "Sniper"
    }
   ],
   "initial": {
    "Bow": "E+",
    "Reason": "D",
    "Authority": "E+"
   }
  },
  {
   "name": "Ferdinand",
   "house": "BE",
   "strong": [
    "Sword",
    "Lance",
    "Axe",
    "Riding"
   ],
   "weak": [],
   "budding": "Heavy Armour",
   "suggestText": "Default Lance and Axe. Cavalry, Great Knight, heavy armour",
   "role": "Physical damage (cavalry), tank",
   "roleDerived": false,
   "defaultGoal": [
    "Lance",
    "Axe"
   ],
   "goalRequests": [
    {
     "skills": [
      "Lance",
      "Riding"
     ],
     "cls": "Cavalry classes"
    },
    {
     "skills": [
      "Heavy Armour",
      "Riding"
     ],
     "cls": "Great Knight"
    },
    {
     "skills": [
      "Axe",
      "Heavy Armour"
     ],
     "cls": "Heavy armor classes"
    }
   ],
   "initial": {
    "Sword": "E+",
    "Lance": "D",
    "Axe": "E+",
    "Riding": "D"
   },
   "recruit": {
    "fromChapter": 2,
    "needs": "10 Dexterity, C Heavy Armour",
    "stat": "Dexterity",
    "statVal": 10,
    "rank": "C",
    "skill": "Heavy Armour"
   }
  },
  {
   "name": "Linhardt",
   "house": "BE",
   "strong": [
    "Reason",
    "Faith"
   ],
   "weak": [
    "Axe",
    "Brawling"
   ],
   "budding": null,
   "suggestText": "Default Reason and Faith. Bishop, magic classes",
   "role": "Healer, magic damage",
   "roleDerived": false,
   "defaultGoal": [
    "Reason",
    "Faith"
   ],
   "goalRequests": [
    {
     "skills": [
      "Faith"
     ],
     "cls": "Bishop"
    },
    {
     "skills": [
      "Reason"
     ],
     "cls": "Magic classes"
    }
   ],
   "initial": {
    "Reason": "E+",
    "Faith": "D+"
   },
   "recruit": {
    "fromChapter": 2,
    "needs": "10 Magic, C Reason",
    "stat": "Magic",
    "statVal": 10,
    "rank": "C",
    "skill": "Reason"
   }
  },
  {
   "name": "Caspar",
   "house": "BE",
   "strong": [
    "Axe",
    "Brawling"
   ],
   "weak": [
    "Bow",
    "Reason",
    "Authority"
   ],
   "budding": null,
   "suggestText": "Default Axe and Brawling. Warrior, Grappler, War Master",
   "role": "Physical damage",
   "roleDerived": false,
   "defaultGoal": [
    "Axe",
    "Brawling"
   ],
   "goalRequests": [
    {
     "skills": [
      "Axe"
     ],
     "cls": "Warrior"
    },
    {
     "skills": [
      "Brawling"
     ],
     "cls": "Grappler"
    },
    {
     "skills": [
      "Axe",
      "Brawling"
     ],
     "cls": "War Master"
    }
   ],
   "initial": {
    "Axe": "D",
    "Brawling": "E+"
   },
   "recruit": {
    "fromChapter": 2,
    "needs": "10 Strength, C Brawling",
    "stat": "Strength",
    "statVal": 10,
    "rank": "C",
    "skill": "Brawling"
   }
  },
  {
   "name": "Bernadetta",
   "house": "BE",
   "strong": [
    "Lance",
    "Bow"
   ],
   "weak": [
    "Sword",
    "Axe",
    "Brawling",
    "Heavy Armour"
   ],
   "budding": "Riding",
   "suggestText": "Default Lance and Bow. Sniper, cavalry",
   "role": "Archer",
   "roleDerived": false,
   "defaultGoal": [
    "Lance",
    "Bow"
   ],
   "goalRequests": [
    {
     "skills": [
      "Bow"
     ],
     "cls": "Sniper"
    },
    {
     "skills": [
      "Lance",
      "Riding"
     ],
     "cls": "Cavalry classes"
    }
   ],
   "initial": {
    "Lance": "E+",
    "Bow": "D"
   },
   "recruit": {
    "fromChapter": 2,
    "needs": "20 Strength, C Bow",
    "stat": "Strength",
    "statVal": 20,
    "rank": "C",
    "skill": "Bow"
   }
  },
  {
   "name": "Dorothea",
   "house": "BE",
   "strong": [
    "Sword",
    "Reason"
   ],
   "weak": [
    "Faith",
    "Riding",
    "Flying"
   ],
   "budding": "Faith",
   "suggestText": "Default Sword and Reason. Warlock, Priest or Bishop, sword classes",
   "role": "Magic damage, healer",
   "roleDerived": false,
   "defaultGoal": [
    "Sword",
    "Reason"
   ],
   "goalRequests": [
    {
     "skills": [
      "Reason"
     ],
     "cls": "Warlock"
    },
    {
     "skills": [
      "Faith"
     ],
     "cls": "Priest or Bishop"
    },
    {
     "skills": [
      "Sword"
     ],
     "cls": "Sword fighting classes"
    }
   ],
   "initial": {
    "Sword": "E+",
    "Reason": "D"
   },
   "recruit": {
    "fromChapter": 2,
    "needs": "25 Charm, B Authority",
    "stat": "Charm",
    "statVal": 25,
    "rank": "B",
    "skill": "Authority"
   }
  },
  {
   "name": "Petra",
   "house": "BE",
   "strong": [
    "Sword",
    "Axe",
    "Bow",
    "Flying"
   ],
   "weak": [
    "Reason",
    "Faith"
   ],
   "budding": null,
   "suggestText": "Default Sword and Axe. Thief or Assassin, Wyvern Rider",
   "role": "Physical damage, flier",
   "roleDerived": false,
   "defaultGoal": [
    "Sword",
    "Axe"
   ],
   "goalRequests": [
    {
     "skills": [
      "Sword",
      "Bow"
     ],
     "cls": "Thief or Assassin"
    },
    {
     "skills": [
      "Axe",
      "Flying"
     ],
     "cls": "Wyvern Rider"
    }
   ],
   "initial": {
    "Sword": "D+",
    "Axe": "E+",
    "Bow": "E+",
    "Flying": "D"
   },
   "recruit": {
    "fromChapter": 2,
    "needs": "10 Dexterity, C Riding",
    "stat": "Dexterity",
    "statVal": 10,
    "rank": "C",
    "skill": "Riding"
   }
  },
  {
   "name": "Dimitri",
   "house": "BL",
   "strong": [
    "Sword",
    "Lance",
    "Authority"
   ],
   "weak": [
    "Axe",
    "Reason"
   ],
   "budding": "Riding",
   "suggestText": "Default Lance and Authority. Lord, cavalry. Unique: High Lord, then Great Lord",
   "role": "Physical damage",
   "roleDerived": false,
   "defaultGoal": [
    "Lance",
    "Authority"
   ],
   "goalRequests": [
    {
     "skills": [
      "Sword",
      "Authority"
     ],
     "cls": "Lord"
    },
    {
     "skills": [
      "Lance",
      "Riding"
     ],
     "cls": "Cavalry classes"
    }
   ],
   "initial": {
    "Sword": "E+",
    "Lance": "D+",
    "Authority": "D",
    "Riding": "D+"
   }
  },
  {
   "name": "Dedue",
   "house": "BL",
   "strong": [
    "Lance",
    "Axe",
    "Brawling",
    "Heavy Armour"
   ],
   "weak": [
    "Faith",
    "Riding",
    "Flying"
   ],
   "budding": null,
   "suggestText": "Default Axe and Brawling. Heavy armour, Grappler",
   "role": "Tank, physical damage",
   "roleDerived": false,
   "defaultGoal": [
    "Axe",
    "Brawling"
   ],
   "goalRequests": [
    {
     "skills": [
      "Axe",
      "Heavy Armour"
     ],
     "cls": "Heavy armor classes"
    },
    {
     "skills": [
      "Brawling"
     ],
     "cls": "Grappler"
    }
   ],
   "initial": {
    "Lance": "E+",
    "Axe": "D+",
    "Brawling": "E+",
    "Heavy Armour": "D"
   }
  },
  {
   "name": "Felix",
   "house": "BL",
   "strong": [
    "Sword",
    "Bow",
    "Brawling"
   ],
   "weak": [
    "Reason",
    "Authority"
   ],
   "budding": "Reason",
   "suggestText": "Default Sword and Brawling. Swordmaster, Sniper, Mortal Savant",
   "role": "Physical damage, archer",
   "roleDerived": false,
   "defaultGoal": [
    "Sword",
    "Brawling"
   ],
   "goalRequests": [
    {
     "skills": [
      "Sword"
     ],
     "cls": "Swordmaster"
    },
    {
     "skills": [
      "Bow"
     ],
     "cls": "Sniper"
    },
    {
     "skills": [
      "Sword",
      "Reason"
     ],
     "cls": "Mortal Savant"
    }
   ],
   "initial": {
    "Sword": "D",
    "Bow": "E+",
    "Brawling": "E+"
   },
   "recruit": {
    "fromChapter": 2,
    "needs": "15 Speed, B+ Sword",
    "stat": "Speed",
    "statVal": 15,
    "rank": "B+",
    "skill": "Sword"
   }
  },
  {
   "name": "Mercedes",
   "house": "BL",
   "strong": [
    "Reason",
    "Faith"
   ],
   "weak": [
    "Sword",
    "Lance",
    "Axe",
    "Heavy Armour"
   ],
   "budding": "Bow",
   "suggestText": "Default Reason and Faith. Bishop, Warlock",
   "role": "Healer, magic damage",
   "roleDerived": false,
   "defaultGoal": [
    "Reason",
    "Faith"
   ],
   "goalRequests": [
    {
     "skills": [
      "Faith"
     ],
     "cls": "Bishop"
    },
    {
     "skills": [
      "Reason"
     ],
     "cls": "Warlock"
    }
   ],
   "initial": {
    "Reason": "E+",
    "Faith": "D"
   },
   "recruit": {
    "fromChapter": 2,
    "needs": "15 Magic, C Bow",
    "stat": "Magic",
    "statVal": 15,
    "rank": "C",
    "skill": "Bow"
   }
  },
  {
   "name": "Ashe",
   "house": "BL",
   "strong": [
    "Axe",
    "Bow"
   ],
   "weak": [
    "Reason"
   ],
   "budding": "Lance",
   "suggestText": "Default Axe and Bow. Sniper, Wyvern Rider, cavalry",
   "role": "Archer, flier",
   "roleDerived": false,
   "defaultGoal": [
    "Axe",
    "Bow"
   ],
   "goalRequests": [
    {
     "skills": [
      "Bow"
     ],
     "cls": "Sniper"
    },
    {
     "skills": [
      "Axe",
      "Flying"
     ],
     "cls": "Wyvern Rider"
    },
    {
     "skills": [
      "Lance",
      "Riding"
     ],
     "cls": "Cavalry classes"
    }
   ],
   "initial": {
    "Axe": "E+",
    "Bow": "D"
   },
   "recruit": {
    "fromChapter": 2,
    "needs": "15 Charm, C Lance",
    "stat": "Charm",
    "statVal": 15,
    "rank": "C",
    "skill": "Lance"
   }
  },
  {
   "name": "Annette",
   "house": "BL",
   "strong": [
    "Axe",
    "Reason",
    "Authority"
   ],
   "weak": [
    "Bow",
    "Heavy Armour"
   ],
   "budding": null,
   "suggestText": "Default Reason and Authority. Warlock, Warrior",
   "role": "Magic damage",
   "roleDerived": false,
   "defaultGoal": [
    "Reason",
    "Authority"
   ],
   "goalRequests": [
    {
     "skills": [
      "Reason"
     ],
     "cls": "Warlock"
    },
    {
     "skills": [
      "Axe"
     ],
     "cls": "Warrior"
    }
   ],
   "initial": {
    "Axe": "E+",
    "Reason": "D+",
    "Authority": "E+"
   },
   "recruit": {
    "fromChapter": 2,
    "needs": "10 Magic, B Faith",
    "stat": "Magic",
    "statVal": 10,
    "rank": "B",
    "skill": "Faith"
   }
  },
  {
   "name": "Sylvain",
   "house": "BL",
   "strong": [
    "Lance",
    "Axe",
    "Riding"
   ],
   "weak": [
    "Bow"
   ],
   "budding": "Reason",
   "suggestText": "Default Lance and Axe. Cavalry, Great Knight, magic classes",
   "role": "Physical damage (cavalry), tank",
   "roleDerived": false,
   "defaultGoal": [
    "Lance",
    "Axe"
   ],
   "goalRequests": [
    {
     "skills": [
      "Lance",
      "Riding"
     ],
     "cls": "Cavalry classes"
    },
    {
     "skills": [
      "Axe",
      "Heavy Armour"
     ],
     "cls": "Great Knight"
    },
    {
     "skills": [
      "Reason",
      "Faith"
     ],
     "cls": "Magic classes"
    }
   ],
   "initial": {
    "Lance": "D",
    "Axe": "D",
    "Riding": "D"
   },
   "recruit": {
    "fromChapter": 2,
    "needs": "25 Charm, C Reason. Joins free if Byleth is female",
    "stat": "Charm",
    "statVal": 25,
    "rank": "C",
    "skill": "Reason"
   }
  },
  {
   "name": "Ingrid",
   "house": "BL",
   "strong": [
    "Sword",
    "Lance",
    "Riding",
    "Flying"
   ],
   "weak": [],
   "budding": null,
   "suggestText": "Default Sword and Lance. Pegasus Knight, cavalry, sword classes",
   "role": "Flier, physical damage",
   "roleDerived": false,
   "defaultGoal": [
    "Sword",
    "Lance"
   ],
   "goalRequests": [
    {
     "skills": [
      "Lance",
      "Flying"
     ],
     "cls": "Pegasus Knight"
    },
    {
     "skills": [
      "Lance",
      "Riding"
     ],
     "cls": "Cavalry classes"
    },
    {
     "skills": [
      "Sword"
     ],
     "cls": "Sword fighting classes"
    }
   ],
   "initial": {
    "Sword": "E+",
    "Lance": "D",
    "Riding": "D",
    "Flying": "D"
   },
   "recruit": {
    "fromChapter": 2,
    "needs": "15 Dexterity, D Flying",
    "stat": "Dexterity",
    "statVal": 15,
    "rank": "D",
    "skill": "Flying"
   }
  },
  {
   "name": "Claude",
   "house": "GD",
   "strong": [
    "Sword",
    "Bow",
    "Authority",
    "Flying"
   ],
   "weak": [
    "Lance",
    "Faith"
   ],
   "budding": "Axe",
   "suggestText": "Default Bow and Authority. Lord, Wyvern Rider. Unique: Wyvern Master, then Barbarossa",
   "role": "Flier, archer",
   "roleDerived": false,
   "defaultGoal": [
    "Bow",
    "Authority"
   ],
   "goalRequests": [
    {
     "skills": [
      "Sword",
      "Authority"
     ],
     "cls": "Lord"
    },
    {
     "skills": [
      "Axe",
      "Flying"
     ],
     "cls": "Wyvern Rider"
    }
   ],
   "initial": {
    "Sword": "E+",
    "Bow": "D",
    "Authority": "D",
    "Riding": "E+",
    "Flying": "E+"
   }
  },
  {
   "name": "Lorenz",
   "house": "GD",
   "strong": [
    "Lance",
    "Reason",
    "Riding"
   ],
   "weak": [
    "Brawling"
   ],
   "budding": null,
   "suggestText": "Default Lance and Reason. Cavalry, Dark Knight",
   "role": "Physical damage (cavalry), magic damage",
   "roleDerived": false,
   "defaultGoal": [
    "Lance",
    "Reason"
   ],
   "goalRequests": [
    {
     "skills": [
      "Lance",
      "Riding"
     ],
     "cls": "Cavalry classes"
    },
    {
     "skills": [
      "Reason",
      "Riding"
     ],
     "cls": "Dark Knight"
    }
   ],
   "initial": {
    "Lance": "D",
    "Reason": "E+",
    "Riding": "D"
   },
   "recruit": {
    "fromChapter": 2,
    "needs": "20 Charm, C Reason",
    "stat": "Charm",
    "statVal": 20,
    "rank": "C",
    "skill": "Reason"
   }
  },
  {
   "name": "Raphael",
   "house": "GD",
   "strong": [
    "Axe",
    "Brawling",
    "Heavy Armour"
   ],
   "weak": [
    "Bow",
    "Reason",
    "Riding"
   ],
   "budding": null,
   "suggestText": "Default Axe and Brawling. War Master, heavy armour, Hero",
   "role": "Physical damage, tank",
   "roleDerived": false,
   "defaultGoal": [
    "Axe",
    "Brawling"
   ],
   "goalRequests": [
    {
     "skills": [
      "Axe",
      "Brawling"
     ],
     "cls": "War Master"
    },
    {
     "skills": [
      "Axe",
      "Heavy Armour"
     ],
     "cls": "Heavy armor classes"
    },
    {
     "skills": [
      "Sword",
      "Axe"
     ],
     "cls": "Hero"
    }
   ],
   "initial": {
    "Axe": "E+",
    "Brawling": "D",
    "Heavy Armour": "D"
   },
   "recruit": {
    "fromChapter": 2,
    "needs": "20 Strength, C Heavy Armour",
    "stat": "Strength",
    "statVal": 20,
    "rank": "C",
    "skill": "Heavy Armour"
   }
  },
  {
   "name": "Lysithea",
   "house": "GD",
   "strong": [
    "Reason",
    "Faith",
    "Authority"
   ],
   "weak": [
    "Sword",
    "Lance",
    "Axe",
    "Heavy Armour"
   ],
   "budding": "Sword",
   "suggestText": "Default Reason and Authority. Warlock, Gremory",
   "role": "Magic damage",
   "roleDerived": false,
   "defaultGoal": [
    "Reason",
    "Authority"
   ],
   "goalRequests": [
    {
     "skills": [
      "Reason"
     ],
     "cls": "Warlock"
    },
    {
     "skills": [
      "Reason",
      "Faith"
     ],
     "cls": "Gremory"
    }
   ],
   "initial": {
    "Reason": "D",
    "Faith": "E+",
    "Authority": "E+"
   },
   "recruit": {
    "fromChapter": 2,
    "needs": "15 Magic, B Faith",
    "stat": "Magic",
    "statVal": 15,
    "rank": "B",
    "skill": "Faith"
   }
  },
  {
   "name": "Ignatz",
   "house": "GD",
   "strong": [
    "Sword",
    "Bow",
    "Authority"
   ],
   "weak": [
    "Flying"
   ],
   "budding": "Reason",
   "suggestText": "Default Sword and Bow. Sniper, Thief or Assassin, Mortal Savant",
   "role": "Archer",
   "roleDerived": false,
   "defaultGoal": [
    "Sword",
    "Bow"
   ],
   "goalRequests": [
    {
     "skills": [
      "Bow"
     ],
     "cls": "Sniper"
    },
    {
     "skills": [
      "Sword",
      "Bow"
     ],
     "cls": "Thief or Assassin"
    },
    {
     "skills": [
      "Sword",
      "Reason"
     ],
     "cls": "Mortal Savant"
    }
   ],
   "initial": {
    "Sword": "E+",
    "Bow": "D",
    "Authority": "E+"
   },
   "recruit": {
    "fromChapter": 2,
    "needs": "10 Dexterity, B Authority",
    "stat": "Dexterity",
    "statVal": 10,
    "rank": "B",
    "skill": "Authority"
   }
  },
  {
   "name": "Marianne",
   "house": "GD",
   "strong": [
    "Sword",
    "Faith",
    "Riding",
    "Flying"
   ],
   "weak": [
    "Brawling",
    "Heavy Armour"
   ],
   "budding": "Lance",
   "suggestText": "Default Sword and Faith. Bishop, cavalry, Holy Knight, flying classes",
   "role": "Healer, flier",
   "roleDerived": false,
   "defaultGoal": [
    "Sword",
    "Faith"
   ],
   "goalRequests": [
    {
     "skills": [
      "Faith"
     ],
     "cls": "Bishop"
    },
    {
     "skills": [
      "Lance",
      "Riding"
     ],
     "cls": "Cavalry classes"
    },
    {
     "skills": [
      "Faith",
      "Riding"
     ],
     "cls": "Holy Knight"
    },
    {
     "skills": [
      "Lance",
      "Flying"
     ],
     "cls": "Flying classes"
    }
   ],
   "initial": {
    "Sword": "E+",
    "Faith": "D+"
   },
   "recruit": {
    "fromChapter": 2,
    "needs": "10 Magic, C Riding",
    "stat": "Magic",
    "statVal": 10,
    "rank": "C",
    "skill": "Riding"
   }
  },
  {
   "name": "Hilda",
   "house": "GD",
   "strong": [
    "Lance",
    "Axe"
   ],
   "weak": [
    "Faith",
    "Authority"
   ],
   "budding": "Heavy Armour",
   "suggestText": "Default Lance and Axe. Warrior, flying classes",
   "role": "Physical damage, flier",
   "roleDerived": false,
   "defaultGoal": [
    "Lance",
    "Axe"
   ],
   "goalRequests": [
    {
     "skills": [
      "Axe"
     ],
     "cls": "Warrior"
    },
    {
     "skills": [
      "Axe",
      "Flying"
     ],
     "cls": "Flying classes"
    }
   ],
   "initial": {
    "Lance": "E+",
    "Axe": "D"
   },
   "recruit": {
    "fromChapter": 2,
    "needs": "30 Charm, C Axe. See the note below",
    "stat": "Charm",
    "statVal": 30,
    "rank": "C",
    "skill": "Axe"
   }
  },
  {
   "name": "Leonie",
   "house": "GD",
   "strong": [
    "Lance",
    "Bow",
    "Riding"
   ],
   "weak": [],
   "budding": null,
   "suggestText": "Default Lance and Bow. Cavalry, Bow Knight",
   "role": "Physical damage (cavalry), archer",
   "roleDerived": false,
   "defaultGoal": [
    "Lance",
    "Bow"
   ],
   "goalRequests": [
    {
     "skills": [
      "Lance",
      "Riding"
     ],
     "cls": "Cavalry classes"
    },
    {
     "skills": [
      "Bow",
      "Riding"
     ],
     "cls": "Bow Knight"
    }
   ],
   "initial": {
    "Lance": "D+",
    "Bow": "E+",
    "Riding": "E+"
   },
   "recruit": {
    "fromChapter": 2,
    "needs": "15 Strength, C Lance",
    "stat": "Strength",
    "statVal": 15,
    "rank": "C",
    "skill": "Lance"
   }
  },
  {
   "name": "Byleth",
   "house": "Church",
   "strong": [
    "Sword",
    "Brawling",
    "Authority"
   ],
   "weak": [],
   "budding": "Faith",
   "suggestText": "No goal requests. Unique: Enlightened One",
   "role": "Physical damage, healer",
   "roleDerived": false,
   "defaultGoal": [],
   "goalRequests": [],
   "initial": {
    "Sword": "D+",
    "Brawling": "E+",
    "Authority": "D"
   }
  },
  {
   "name": "Seteth",
   "house": "Church",
   "strong": [
    "Sword",
    "Lance",
    "Axe",
    "Authority",
    "Flying"
   ],
   "weak": [
    "Riding"
   ],
   "budding": null,
   "suggestText": "Default Lance and Authority",
   "role": "Flier, physical damage",
   "roleDerived": true,
   "defaultGoal": [
    "Lance",
    "Authority"
   ],
   "goalRequests": [],
   "initial": {
    "Sword": "D+",
    "Lance": "C",
    "Axe": "C",
    "Authority": "C",
    "Flying": "C"
   },
   "recruit": {
    "fromChapter": 12,
    "needs": "Joins automatically",
    "auto": true
   }
  },
  {
   "name": "Flayn",
   "house": "Church",
   "strong": [
    "Lance",
    "Faith"
   ],
   "weak": [
    "Heavy Armour",
    "Riding"
   ],
   "budding": "Reason",
   "suggestText": "Default Lance and Faith. Bishop, Gremory",
   "role": "Healer, magic damage",
   "roleDerived": false,
   "defaultGoal": [
    "Lance",
    "Faith"
   ],
   "goalRequests": [
    {
     "skills": [
      "Faith"
     ],
     "cls": "Bishop"
    },
    {
     "skills": [
      "Reason",
      "Faith"
     ],
     "cls": "Gremory"
    }
   ],
   "initial": {
    "Lance": "E+",
    "Faith": "D+",
    "Flying": "D"
   },
   "recruit": {
    "fromChapter": 7,
    "needs": "Joins automatically",
    "auto": true
   }
  },
  {
   "name": "Cyril",
   "house": "Church",
   "strong": [
    "Lance",
    "Axe",
    "Bow",
    "Riding",
    "Flying"
   ],
   "weak": [
    "Reason",
    "Faith"
   ],
   "budding": null,
   "suggestText": "Default Axe and Bow. Wyvern Rider, Bow Knight",
   "role": "Archer, flier",
   "roleDerived": false,
   "defaultGoal": [
    "Axe",
    "Bow"
   ],
   "goalRequests": [
    {
     "skills": [
      "Axe",
      "Flying"
     ],
     "cls": "Wyvern Rider"
    },
    {
     "skills": [
      "Bow",
      "Riding"
     ],
     "cls": "Bow Knight"
    }
   ],
   "initial": {
    "Axe": "D+",
    "Bow": "D"
   },
   "recruit": {
    "fromChapter": 5,
    "needs": "Level 10",
    "level": 10
   }
  },
  {
   "name": "Catherine",
   "house": "Church",
   "strong": [
    "Sword",
    "Brawling"
   ],
   "weak": [
    "Reason"
   ],
   "budding": null,
   "suggestText": "Default Sword and Brawling",
   "role": "Physical damage",
   "roleDerived": true,
   "defaultGoal": [
    "Sword",
    "Brawling"
   ],
   "goalRequests": [],
   "initial": {
    "Sword": "B",
    "Brawling": "D+",
    "Authority": "D"
   },
   "recruit": {
    "fromChapter": 4,
    "needs": "Level 15",
    "level": 15
   }
  },
  {
   "name": "Shamir",
   "house": "Church",
   "strong": [
    "Lance",
    "Bow"
   ],
   "weak": [
    "Faith"
   ],
   "budding": null,
   "suggestText": "Default Lance and Bow",
   "role": "Archer",
   "roleDerived": true,
   "defaultGoal": [
    "Lance",
    "Bow"
   ],
   "goalRequests": [],
   "initial": {
    "Lance": "D+",
    "Bow": "B",
    "Authority": "D"
   },
   "recruit": {
    "fromChapter": 6,
    "needs": "Level 15",
    "level": 15
   }
  },
  {
   "name": "Alois",
   "house": "Church",
   "strong": [
    "Axe",
    "Brawling",
    "Heavy Armour"
   ],
   "weak": [
    "Reason",
    "Flying"
   ],
   "budding": null,
   "suggestText": "Default Axe and Brawling",
   "role": "Physical damage, tank",
   "roleDerived": true,
   "defaultGoal": [
    "Axe",
    "Brawling"
   ],
   "goalRequests": [],
   "initial": {
    "Axe": "C",
    "Brawling": "D+",
    "Authority": "C",
    "Heavy Armour": "C"
   },
   "recruit": {
    "fromChapter": 11,
    "needs": "Level 15",
    "level": 15
   }
  },
  {
   "name": "Gilbert",
   "house": "Church",
   "strong": [
    "Lance",
    "Axe",
    "Heavy Armour",
    "Riding"
   ],
   "weak": [],
   "budding": null,
   "suggestText": "No goal requests",
   "role": "Tank",
   "roleDerived": true,
   "defaultGoal": [],
   "goalRequests": [],
   "initial": {
    "Lance": "C",
    "Axe": "C",
    "Authority": "D+",
    "Heavy Armour": "D",
    "Riding": "C"
   },
   "recruit": {
    "fromChapter": 13,
    "needs": "Joins automatically, Azure Moon only",
    "auto": true
   }
  },
  {
   "name": "Hanneman",
   "house": "Church",
   "strong": [
    "Bow",
    "Reason",
    "Riding"
   ],
   "weak": [
    "Heavy Armour",
    "Flying"
   ],
   "budding": null,
   "suggestText": "Default Bow and Reason",
   "role": "Magic damage",
   "roleDerived": true,
   "defaultGoal": [
    "Bow",
    "Reason"
   ],
   "goalRequests": [],
   "initial": {
    "Bow": "D",
    "Reason": "C",
    "Authority": "D",
    "Riding": "D"
   },
   "recruit": {
    "fromChapter": 8,
    "needs": "Level 15",
    "level": 15
   }
  },
  {
   "name": "Manuela",
   "house": "Church",
   "strong": [
    "Sword",
    "Faith",
    "Flying"
   ],
   "weak": [
    "Reason",
    "Heavy Armour"
   ],
   "budding": null,
   "suggestText": "Default Sword and Faith",
   "role": "Healer",
   "roleDerived": true,
   "defaultGoal": [
    "Sword",
    "Faith"
   ],
   "goalRequests": [],
   "initial": {
    "Sword": "D",
    "Faith": "C",
    "Flying": "D"
   },
   "recruit": {
    "fromChapter": 8,
    "needs": "Level 15",
    "level": 15
   }
  },
  {
   "name": "Yuri",
   "house": "Wolves",
   "strong": [
    "Sword",
    "Reason",
    "Faith",
    "Authority"
   ],
   "weak": [
    "Lance",
    "Axe",
    "Riding",
    "Flying"
   ],
   "budding": "Bow",
   "suggestText": "Default Sword and Authority. Trickster, Thief, Assassin",
   "role": "Physical damage",
   "roleDerived": false,
   "defaultGoal": [
    "Sword",
    "Authority"
   ],
   "goalRequests": [
    {
     "skills": [
      "Sword",
      "Faith"
     ],
     "cls": "Trickster"
    },
    {
     "skills": [
      "Sword"
     ],
     "cls": "Thief"
    },
    {
     "skills": [
      "Sword",
      "Bow"
     ],
     "cls": "Assassin"
    }
   ],
   "initial": {
    "Sword": "D",
    "Reason": "E+",
    "Faith": "D",
    "Authority": "D"
   }
  },
  {
   "name": "Balthus",
   "house": "Wolves",
   "strong": [
    "Sword",
    "Axe",
    "Brawling",
    "Faith",
    "Heavy Armour"
   ],
   "weak": [
    "Lance",
    "Bow",
    "Flying"
   ],
   "budding": "Reason",
   "suggestText": "Default Axe and Brawling. War Monk, War Master, Fortress Knight",
   "role": "Physical damage, tank",
   "roleDerived": false,
   "defaultGoal": [
    "Axe",
    "Brawling"
   ],
   "goalRequests": [
    {
     "skills": [
      "Brawling",
      "Faith"
     ],
     "cls": "War Monk"
    },
    {
     "skills": [
      "Axe",
      "Brawling"
     ],
     "cls": "War Master"
    },
    {
     "skills": [
      "Heavy Armour"
     ],
     "cls": "Fortress Knight"
    }
   ],
   "initial": {
    "Sword": "E+",
    "Axe": "D",
    "Brawling": "D+",
    "Authority": "E+"
   }
  },
  {
   "name": "Constance",
   "house": "Wolves",
   "strong": [
    "Sword",
    "Reason",
    "Authority",
    "Flying"
   ],
   "weak": [
    "Axe",
    "Heavy Armour"
   ],
   "budding": "Brawling",
   "suggestText": "Default Reason and Authority. Dark Flier, War Cleric, Swordmaster",
   "role": "Magic damage, flier",
   "roleDerived": false,
   "defaultGoal": [
    "Reason",
    "Authority"
   ],
   "goalRequests": [
    {
     "skills": [
      "Reason",
      "Flying"
     ],
     "cls": "Dark Flier"
    },
    {
     "skills": [
      "Brawling",
      "Faith"
     ],
     "cls": "War Cleric"
    },
    {
     "skills": [
      "Sword"
     ],
     "cls": "Swordmaster"
    }
   ],
   "initial": {
    "Sword": "E+",
    "Reason": "D",
    "Flying": "D"
   }
  },
  {
   "name": "Hapi",
   "house": "Wolves",
   "strong": [
    "Reason",
    "Riding",
    "Flying"
   ],
   "weak": [
    "Brawling",
    "Authority",
    "Heavy Armour"
   ],
   "budding": "Axe",
   "suggestText": "Default Lance and Reason. Dark Knight, Valkyrie, Wyvern Rider",
   "role": "Magic damage (cavalry)",
   "roleDerived": false,
   "defaultGoal": [
    "Lance",
    "Reason"
   ],
   "goalRequests": [
    {
     "skills": [
      "Lance",
      "Riding"
     ],
     "cls": "Dark Knight"
    },
    {
     "skills": [
      "Reason",
      "Riding"
     ],
     "cls": "Valkyrie"
    },
    {
     "skills": [
      "Axe",
      "Flying"
     ],
     "cls": "Wyvern Rider"
    }
   ],
   "initial": {
    "Sword": "E+",
    "Reason": "D",
    "Riding": "D"
   }
  },
  {
   "name": "Anna",
   "house": "DLC",
   "strong": [
    "Sword",
    "Axe",
    "Bow",
    "Faith"
   ],
   "weak": [
    "Reason",
    "Authority"
   ],
   "budding": "Riding",
   "suggestText": "Default Sword and Bow. Sword classes, Great Knight",
   "role": "Physical damage, tank",
   "roleDerived": false,
   "defaultGoal": [
    "Sword",
    "Bow"
   ],
   "goalRequests": [
    {
     "skills": [
      "Sword"
     ],
     "cls": "Sword fighting classes"
    },
    {
     "skills": [
      "Axe",
      "Riding"
     ],
     "cls": "Great Knight"
    },
    {
     "skills": [
      "Sword",
      "Faith"
     ],
     "cls": "Sword fighting classes"
    }
   ],
   "initial": {
    "Sword": "D",
    "Axe": "E+",
    "Bow": "E+",
    "Faith": "E+"
   }
  },
  {
   "name": "Jeritza",
   "house": "DLC",
   "strong": [
    "Sword",
    "Lance",
    "Brawling",
    "Riding"
   ],
   "weak": [
    "Faith",
    "Authority"
   ],
   "budding": "Flying",
   "suggestText": "Default Lance and Sword. Unique: Death Knight, his class on joining",
   "role": "Physical and magic damage (cavalry)",
   "roleDerived": false,
   "defaultGoal": [
    "Lance",
    "Sword"
   ],
   "goalRequests": [],
   "initial": {
    "Sword": "B",
    "Lance": "A",
    "Brawling": "D+",
    "Authority": "B",
    "Riding": "B"
   }
  }
 ],
 "classes": [
  {
   "name": "Myrmidon",
   "tier": "Beginner",
   "req": [
    {
     "skill": "Sword",
     "rank": "D"
    }
   ],
   "prof": [
    "Sword"
   ],
   "mastery": "Speed +2, Swap",
   "role": "Physical damage",
   "gender": null,
   "prereq": null,
   "level": 5,
   "seal": "Beginner Seal"
  },
  {
   "name": "Soldier",
   "tier": "Beginner",
   "req": [
    {
     "skill": "Lance",
     "rank": "D"
    }
   ],
   "prof": [
    "Lance"
   ],
   "mastery": "Defence +2, Reposition",
   "role": "Physical damage",
   "gender": null,
   "prereq": null,
   "level": 5,
   "seal": "Beginner Seal"
  },
  {
   "name": "Fighter",
   "tier": "Beginner",
   "req": [
    {
     "any": [
      "Axe",
      "Bow",
      "Brawling"
     ],
     "rank": "D"
    }
   ],
   "prof": [
    "Axe",
    "Bow",
    "Brawling"
   ],
   "mastery": "Strength +2, Shove",
   "role": "Physical damage, archer",
   "gender": null,
   "prereq": null,
   "level": 5,
   "seal": "Beginner Seal"
  },
  {
   "name": "Monk",
   "tier": "Beginner",
   "req": [
    {
     "any": [
      "Reason",
      "Faith"
     ],
     "rank": "D"
    }
   ],
   "prof": [
    "Reason",
    "Faith"
   ],
   "mastery": "Magic +2, Draw Back",
   "role": "Magic damage, healer",
   "gender": null,
   "prereq": null,
   "level": 5,
   "seal": "Beginner Seal"
  },
  {
   "name": "Lord",
   "tier": "Intermediate",
   "req": [
    {
     "skill": "Sword",
     "rank": "D+"
    },
    {
     "skill": "Authority",
     "rank": "C"
    }
   ],
   "prof": [
    "Sword",
    "Lance",
    "Authority"
   ],
   "mastery": "Resistance +2, Subdue",
   "role": "Physical damage",
   "gender": null,
   "prereq": null,
   "level": 10,
   "seal": "Intermediate Seal",
   "only": [
    "Edelgard",
    "Dimitri",
    "Claude"
   ]
  },
  {
   "name": "Mercenary",
   "tier": "Intermediate",
   "req": [
    {
     "skill": "Sword",
     "rank": "C"
    }
   ],
   "prof": [
    "Sword",
    "Axe"
   ],
   "mastery": "Vantage",
   "role": "Physical damage",
   "gender": null,
   "prereq": null,
   "level": 10,
   "seal": "Intermediate Seal"
  },
  {
   "name": "Thief",
   "tier": "Intermediate",
   "req": [
    {
     "skill": "Sword",
     "rank": "C"
    }
   ],
   "prof": [
    "Sword",
    "Bow"
   ],
   "mastery": "Steal",
   "role": "Physical damage",
   "gender": null,
   "prereq": null,
   "level": 10,
   "seal": "Intermediate Seal"
  },
  {
   "name": "Armoured Knight",
   "tier": "Intermediate",
   "req": [
    {
     "skill": "Axe",
     "rank": "C"
    },
    {
     "skill": "Heavy Armour",
     "rank": "D"
    }
   ],
   "prof": [
    "Lance",
    "Axe",
    "Heavy Armour"
   ],
   "mastery": "Armoured Blow",
   "role": "Tank",
   "gender": null,
   "prereq": null,
   "level": 10,
   "seal": "Intermediate Seal"
  },
  {
   "name": "Cavalier",
   "tier": "Intermediate",
   "req": [
    {
     "skill": "Lance",
     "rank": "C"
    },
    {
     "skill": "Riding",
     "rank": "D"
    }
   ],
   "prof": [
    "Sword",
    "Lance",
    "Riding"
   ],
   "mastery": "Desperation",
   "role": "Physical damage (cavalry)",
   "gender": null,
   "prereq": null,
   "level": 10,
   "seal": "Intermediate Seal"
  },
  {
   "name": "Brigand",
   "tier": "Intermediate",
   "req": [
    {
     "skill": "Axe",
     "rank": "C"
    }
   ],
   "prof": [
    "Axe",
    "Brawling"
   ],
   "mastery": "Death Blow",
   "role": "Physical damage",
   "gender": null,
   "prereq": null,
   "level": 10,
   "seal": "Intermediate Seal"
  },
  {
   "name": "Archer",
   "tier": "Intermediate",
   "req": [
    {
     "skill": "Bow",
     "rank": "C"
    }
   ],
   "prof": [
    "Sword",
    "Bow"
   ],
   "mastery": "Hit +20",
   "role": "Archer",
   "gender": null,
   "prereq": null,
   "level": 10,
   "seal": "Intermediate Seal"
  },
  {
   "name": "Brawler",
   "tier": "Intermediate",
   "req": [
    {
     "skill": "Brawling",
     "rank": "C"
    }
   ],
   "prof": [
    "Axe",
    "Brawling"
   ],
   "mastery": "Unarmed Combat",
   "role": "Physical damage",
   "gender": "M",
   "prereq": null,
   "level": 10,
   "seal": "Intermediate Seal"
  },
  {
   "name": "Mage",
   "tier": "Intermediate",
   "req": [
    {
     "skill": "Reason",
     "rank": "C"
    }
   ],
   "prof": [
    "Reason",
    "Faith"
   ],
   "mastery": "Fiendish Blow",
   "role": "Magic damage",
   "gender": null,
   "prereq": null,
   "level": 10,
   "seal": "Intermediate Seal"
  },
  {
   "name": "Dark Mage",
   "tier": "Intermediate",
   "req": [
    {
     "skill": "Reason",
     "rank": "C"
    }
   ],
   "prof": [
    "Reason",
    "Faith"
   ],
   "mastery": "Poison Strike",
   "role": "Magic damage",
   "gender": "M",
   "prereq": null,
   "level": 10,
   "seal": "Dark Seal"
  },
  {
   "name": "Priest",
   "tier": "Intermediate",
   "req": [
    {
     "skill": "Faith",
     "rank": "C"
    }
   ],
   "prof": [
    "Reason",
    "Faith"
   ],
   "mastery": "Miracle",
   "role": "Healer",
   "gender": null,
   "prereq": null,
   "level": 10,
   "seal": "Intermediate Seal"
  },
  {
   "name": "Pegasus Knight",
   "tier": "Intermediate",
   "req": [
    {
     "skill": "Lance",
     "rank": "C"
    },
    {
     "skill": "Flying",
     "rank": "D"
    }
   ],
   "prof": [
    "Sword",
    "Lance",
    "Flying"
   ],
   "mastery": "Darting Blow, Triangle Attack",
   "role": "Flier",
   "gender": "F",
   "prereq": null,
   "level": 10,
   "seal": "Intermediate Seal"
  },
  {
   "name": "Hero",
   "tier": "Advanced",
   "req": [
    {
     "skill": "Sword",
     "rank": "B"
    },
    {
     "skill": "Axe",
     "rank": "C"
    }
   ],
   "prof": [
    "Sword",
    "Axe"
   ],
   "mastery": "Defiant Strength",
   "role": "Physical damage",
   "gender": "M",
   "prereq": null,
   "level": 20,
   "seal": "Advanced Seal"
  },
  {
   "name": "Swordmaster",
   "tier": "Advanced",
   "req": [
    {
     "skill": "Sword",
     "rank": "A"
    }
   ],
   "prof": [
    "Sword"
   ],
   "mastery": "Astra",
   "role": "Physical damage",
   "gender": null,
   "prereq": null,
   "level": 20,
   "seal": "Advanced Seal"
  },
  {
   "name": "Assassin",
   "tier": "Advanced",
   "req": [
    {
     "skill": "Sword",
     "rank": "B"
    },
    {
     "skill": "Bow",
     "rank": "C"
    }
   ],
   "prof": [
    "Sword",
    "Bow"
   ],
   "mastery": "Lethality, Assassinate",
   "role": "Physical damage",
   "gender": null,
   "prereq": null,
   "level": 20,
   "seal": "Advanced Seal"
  },
  {
   "name": "Fortress Knight",
   "tier": "Advanced",
   "req": [
    {
     "skill": "Axe",
     "rank": "B"
    },
    {
     "skill": "Heavy Armour",
     "rank": "B"
    }
   ],
   "prof": [
    "Lance",
    "Axe",
    "Heavy Armour"
   ],
   "mastery": "Pavise",
   "role": "Tank",
   "gender": null,
   "prereq": null,
   "level": 20,
   "seal": "Advanced Seal"
  },
  {
   "name": "Paladin",
   "tier": "Advanced",
   "req": [
    {
     "skill": "Lance",
     "rank": "B"
    },
    {
     "skill": "Riding",
     "rank": "B"
    }
   ],
   "prof": [
    "Sword",
    "Lance",
    "Riding"
   ],
   "mastery": "Aegis",
   "role": "Physical damage (cavalry)",
   "gender": null,
   "prereq": null,
   "level": 20,
   "seal": "Advanced Seal"
  },
  {
   "name": "Wyvern Rider",
   "tier": "Advanced",
   "req": [
    {
     "skill": "Axe",
     "rank": "B"
    },
    {
     "skill": "Flying",
     "rank": "C"
    }
   ],
   "prof": [
    "Lance",
    "Axe",
    "Flying"
   ],
   "mastery": "Seal Defence",
   "role": "Flier, physical damage",
   "gender": null,
   "prereq": null,
   "level": 20,
   "seal": "Advanced Seal"
  },
  {
   "name": "Warrior",
   "tier": "Advanced",
   "req": [
    {
     "skill": "Axe",
     "rank": "A"
    }
   ],
   "prof": [
    "Axe"
   ],
   "mastery": "Wrath",
   "role": "Physical damage",
   "gender": null,
   "prereq": null,
   "level": 20,
   "seal": "Advanced Seal"
  },
  {
   "name": "Sniper",
   "tier": "Advanced",
   "req": [
    {
     "skill": "Bow",
     "rank": "A"
    }
   ],
   "prof": [
    "Bow"
   ],
   "mastery": "Hunter's Volley",
   "role": "Archer",
   "gender": null,
   "prereq": null,
   "level": 20,
   "seal": "Advanced Seal"
  },
  {
   "name": "Grappler",
   "tier": "Advanced",
   "req": [
    {
     "skill": "Brawling",
     "rank": "A"
    }
   ],
   "prof": [
    "Brawling"
   ],
   "mastery": "Tomebreaker, Fierce Iron Fist",
   "role": "Physical damage",
   "gender": "M",
   "prereq": null,
   "level": 20,
   "seal": "Advanced Seal"
  },
  {
   "name": "Warlock",
   "tier": "Advanced",
   "req": [
    {
     "skill": "Reason",
     "rank": "A"
    }
   ],
   "prof": [
    "Reason",
    "Faith"
   ],
   "mastery": "Bowbreaker",
   "role": "Magic damage",
   "gender": null,
   "prereq": null,
   "level": 20,
   "seal": "Advanced Seal"
  },
  {
   "name": "Dark Bishop",
   "tier": "Advanced",
   "req": [
    {
     "skill": "Reason",
     "rank": "A"
    }
   ],
   "prof": [
    "Reason",
    "Faith"
   ],
   "mastery": "Lifetaker",
   "role": "Magic damage",
   "gender": "M",
   "prereq": "Dark Mage",
   "level": 20,
   "seal": "Dark Seal"
  },
  {
   "name": "Bishop",
   "tier": "Advanced",
   "req": [
    {
     "skill": "Faith",
     "rank": "A"
    }
   ],
   "prof": [
    "Reason",
    "Faith"
   ],
   "mastery": "Renewal",
   "role": "Healer",
   "gender": null,
   "prereq": null,
   "level": 20,
   "seal": "Advanced Seal"
  },
  {
   "name": "Falcon Knight",
   "tier": "Master",
   "req": [
    {
     "skill": "Sword",
     "rank": "C"
    },
    {
     "skill": "Lance",
     "rank": "A"
    },
    {
     "skill": "Flying",
     "rank": "B+"
    }
   ],
   "prof": [
    "Sword",
    "Lance",
    "Flying"
   ],
   "mastery": "Defiant Avoid",
   "role": "Flier, physical damage",
   "gender": "F",
   "prereq": null,
   "level": 30,
   "seal": "Master Seal"
  },
  {
   "name": "Wyvern Lord",
   "tier": "Master",
   "req": [
    {
     "skill": "Lance",
     "rank": "C"
    },
    {
     "skill": "Axe",
     "rank": "A"
    },
    {
     "skill": "Flying",
     "rank": "A"
    }
   ],
   "prof": [
    "Lance",
    "Axe",
    "Flying"
   ],
   "mastery": "Defiant Critical",
   "role": "Flier, physical damage",
   "gender": null,
   "prereq": null,
   "level": 30,
   "seal": "Master Seal"
  },
  {
   "name": "Mortal Savant",
   "tier": "Master",
   "req": [
    {
     "skill": "Sword",
     "rank": "A"
    },
    {
     "skill": "Reason",
     "rank": "B+"
    }
   ],
   "prof": [
    "Sword",
    "Reason"
   ],
   "mastery": "Warding Blow",
   "role": "Physical and magic damage",
   "gender": null,
   "prereq": null,
   "level": 30,
   "seal": "Master Seal"
  },
  {
   "name": "Great Knight",
   "tier": "Master",
   "req": [
    {
     "skill": "Axe",
     "rank": "B+"
    },
    {
     "skill": "Heavy Armour",
     "rank": "A"
    },
    {
     "skill": "Riding",
     "rank": "B+"
    }
   ],
   "prof": [
    "Lance",
    "Axe",
    "Heavy Armour"
   ],
   "mastery": "Defiant Defence",
   "role": "Tank (cavalry)",
   "gender": null,
   "prereq": null,
   "level": 30,
   "seal": "Master Seal"
  },
  {
   "name": "Bow Knight",
   "tier": "Master",
   "req": [
    {
     "skill": "Lance",
     "rank": "C"
    },
    {
     "skill": "Bow",
     "rank": "A"
    },
    {
     "skill": "Riding",
     "rank": "A"
    }
   ],
   "prof": [
    "Lance",
    "Bow",
    "Riding"
   ],
   "mastery": "Defiant Speed",
   "role": "Archer (cavalry)",
   "gender": null,
   "prereq": null,
   "level": 30,
   "seal": "Master Seal"
  },
  {
   "name": "Dark Knight",
   "tier": "Master",
   "req": [
    {
     "skill": "Lance",
     "rank": "C"
    },
    {
     "skill": "Reason",
     "rank": "B+"
    },
    {
     "skill": "Riding",
     "rank": "A"
    }
   ],
   "prof": [
    "Lance",
    "Reason",
    "Riding"
   ],
   "mastery": "Seal Resistance",
   "role": "Magic damage (cavalry)",
   "gender": null,
   "prereq": null,
   "level": 30,
   "seal": "Master Seal"
  },
  {
   "name": "Holy Knight",
   "tier": "Master",
   "req": [
    {
     "skill": "Lance",
     "rank": "C"
    },
    {
     "skill": "Faith",
     "rank": "B+"
    },
    {
     "skill": "Riding",
     "rank": "A"
    }
   ],
   "prof": [
    "Lance",
    "Faith",
    "Riding"
   ],
   "mastery": "Defiant Resistance",
   "role": "Healer (cavalry)",
   "gender": null,
   "prereq": null,
   "level": 30,
   "seal": "Master Seal"
  },
  {
   "name": "War Master",
   "tier": "Master",
   "req": [
    {
     "skill": "Axe",
     "rank": "A"
    },
    {
     "skill": "Brawling",
     "rank": "A"
    }
   ],
   "prof": [
    "Axe",
    "Brawling"
   ],
   "mastery": "Quick Riposte, War Master's Strike",
   "role": "Physical damage",
   "gender": "M",
   "prereq": null,
   "level": 30,
   "seal": "Master Seal"
  },
  {
   "name": "Gremory",
   "tier": "Master",
   "req": [
    {
     "skill": "Reason",
     "rank": "A"
    },
    {
     "skill": "Faith",
     "rank": "A"
    }
   ],
   "prof": [
    "Reason",
    "Faith"
   ],
   "mastery": "Defiant Magic",
   "role": "Magic damage, healer",
   "gender": "F",
   "prereq": null,
   "level": 30,
   "seal": "Master Seal"
  },
  {
   "name": "Trickster",
   "tier": "Special",
   "req": [
    {
     "skill": "Sword",
     "rank": "B"
    },
    {
     "skill": "Faith",
     "rank": "B"
    }
   ],
   "prof": [
    "Sword",
    "Reason",
    "Faith"
   ],
   "mastery": "Duelist's Blow, Foul Play",
   "role": "Physical damage",
   "gender": null,
   "prereq": "Thief",
   "level": 20,
   "seal": "Abyssian Exam Pass"
  },
  {
   "name": "War Monk",
   "tier": "Special",
   "req": [
    {
     "skill": "Brawling",
     "rank": "B+"
    },
    {
     "skill": "Faith",
     "rank": "C+"
    }
   ],
   "prof": [
    "Axe",
    "Brawling",
    "Faith"
   ],
   "mastery": "Brawl Avoid +20, Pneuma Gale",
   "role": "Physical damage, healer",
   "gender": "M",
   "prereq": null,
   "level": 20,
   "seal": "Abyssian Exam Pass"
  },
  {
   "name": "War Cleric",
   "tier": "Special",
   "req": [
    {
     "skill": "Brawling",
     "rank": "B+"
    },
    {
     "skill": "Faith",
     "rank": "C+"
    }
   ],
   "prof": [
    "Axe",
    "Brawling",
    "Faith"
   ],
   "mastery": "Brawl Avoid +20, Pneuma Gale",
   "role": "Physical damage, healer",
   "gender": "F",
   "prereq": null,
   "level": 20,
   "seal": "Abyssian Exam Pass"
  },
  {
   "name": "Dark Flier",
   "tier": "Special",
   "req": [
    {
     "skill": "Reason",
     "rank": "B+"
    },
    {
     "skill": "Flying",
     "rank": "C"
    }
   ],
   "prof": [
    "Sword",
    "Reason",
    "Flying"
   ],
   "mastery": "Transmute",
   "role": "Magic damage, flier",
   "gender": "F",
   "prereq": null,
   "level": 20,
   "seal": "Abyssian Exam Pass"
  },
  {
   "name": "Valkyrie",
   "tier": "Special",
   "req": [
    {
     "skill": "Reason",
     "rank": "B"
    },
    {
     "skill": "Riding",
     "rank": "B"
    }
   ],
   "prof": [
    "Reason",
    "Faith",
    "Riding"
   ],
   "mastery": "Uncanny Blow",
   "role": "Magic damage (cavalry)",
   "gender": "F",
   "prereq": null,
   "level": 20,
   "seal": "Abyssian Exam Pass"
  }
 ],
 "unique": [
  {
   "name": "Enlightened One",
   "who": "Byleth",
   "granted": "End of Chapter 10, every route",
   "prof": [
    "Sword",
    "Brawling",
    "Faith",
    "Authority"
   ],
   "abilities": "Swordfaire, Terrain Resistance",
   "mastery": "Sacred Power",
   "role": "Physical damage, healer"
  },
  {
   "name": "Armored Lord",
   "who": "Edelgard",
   "granted": "Start of Crimson Flower Chapter 13",
   "prof": [
    "Axe",
    "Authority",
    "Heavy Armour"
   ],
   "abilities": "Charm, Axefaire",
   "mastery": "Pomp & Circumstance",
   "role": "Tank, physical damage"
  },
  {
   "name": "Emperor",
   "who": "Edelgard",
   "granted": "Start of Crimson Flower Chapter 16",
   "prof": [
    "Axe",
    "Authority",
    "Heavy Armour"
   ],
   "abilities": "Charm, Axefaire",
   "mastery": "Flickering Flower",
   "role": "Tank, physical damage"
  },
  {
   "name": "High Lord",
   "who": "Dimitri",
   "granted": "Start of Azure Moon Chapter 13",
   "prof": [
    "Sword",
    "Lance",
    "Authority"
   ],
   "abilities": "Charm, Lancefaire",
   "mastery": "Pomp & Circumstance",
   "role": "Physical damage"
  },
  {
   "name": "Great Lord",
   "who": "Dimitri",
   "granted": "Start of Azure Moon Chapter 16",
   "prof": [
    "Sword",
    "Lance",
    "Authority"
   ],
   "abilities": "Charm, Lancefaire",
   "mastery": "Paraselene",
   "role": "Physical damage"
  },
  {
   "name": "Wyvern Master",
   "who": "Claude",
   "granted": "Start of Verdant Wind Chapter 13",
   "prof": [
    "Bow",
    "Authority",
    "Flying"
   ],
   "abilities": "Charm, Bowfaire, Canto",
   "mastery": "Pomp & Circumstance",
   "role": "Flier, archer"
  },
  {
   "name": "Barbarossa",
   "who": "Claude",
   "granted": "Start of Verdant Wind Chapter 17",
   "prof": [
    "Bow",
    "Authority",
    "Flying"
   ],
   "abilities": "Charm, Bowfaire, Canto",
   "mastery": "Wind God",
   "role": "Flier, archer"
  },
  {
   "name": "Death Knight",
   "who": "Jeritza",
   "granted": "His class when he joins, Crimson Flower only",
   "prof": [
    "Lance",
    "Reason",
    "Riding"
   ],
   "abilities": "Canto, Lancefaire",
   "mastery": "Counterattack",
   "role": "Physical and magic damage (cavalry)"
  },
  {
   "name": "Dancer",
   "who": "The White Heron Cup winner",
   "granted": "Winning the cup in Chapter 9",
   "prof": [],
   "abilities": "Sword Avoid +20, Sword Dance",
   "mastery": "\u2014",
   "role": "Dancer"
  }
 ],
 "faculty": [
  {
   "name": "Seteth",
   "skills": [
    "Sword",
    "Lance",
    "Axe",
    "Authority",
    "Flying"
   ],
   "note": "Unavailable in Chapter 6"
  },
  {
   "name": "Hanneman",
   "skills": [
    "Bow",
    "Reason",
    "Riding"
   ],
   "note": ""
  },
  {
   "name": "Manuela",
   "skills": [
    "Sword",
    "Faith",
    "Flying"
   ],
   "note": "Absent in Chapter 6"
  },
  {
   "name": "Gilbert",
   "skills": [
    "Lance",
    "Axe",
    "Heavy Armour",
    "Riding"
   ],
   "note": "From Chapter 5. Absent in Chapter 10"
  },
  {
   "name": "Alois",
   "skills": [
    "Axe",
    "Brawling",
    "Heavy Armour"
   ],
   "note": "Absent in Chapters 5 and 10"
  },
  {
   "name": "Catherine",
   "skills": [
    "Sword",
    "Brawling"
   ],
   "note": "Absent in Chapter 10"
  },
  {
   "name": "Shamir",
   "skills": [
    "Lance",
    "Bow"
   ],
   "note": "Absent in Chapters 3, 5 and 10"
  },
  {
   "name": "Jeralt",
   "skills": [
    "Lance",
    "Authority",
    "Riding"
   ],
   "note": "Absent from Chapter 9"
  },
  {
   "name": "Rhea",
   "skills": [
    "Sword",
    "Brawling",
    "Reason",
    "Faith"
   ],
   "note": ""
  },
  {
   "name": "Jeritza",
   "skills": [
    "Sword",
    "Lance",
    "Brawling",
    "Riding"
   ],
   "note": "Expansion Pass"
  },
  {
   "name": "Anna",
   "skills": [
    "Sword",
    "Axe",
    "Bow",
    "Faith"
   ],
   "note": "Expansion Pass"
  }
 ]
};
