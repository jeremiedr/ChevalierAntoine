/* ======================= CONSTANTES TIRS ENNEMIS ======================== */
const ENEMY_BULLET_RANGE = 75;   // distance que la balle ennemie peut parcourir
const ENEMY_BULLET_SPEED = 2.5;  // vitesse des balles ennemies (px/frame)
const ENEMY_SPAWN_OFFSET = 16;   // spawn 1 tuile devant le tireur (éviter les murs)

/* =========================== COULEURS pour tiles =========================== */
const COLOR_TO_LETTER = {
  '000000': ' ',   // black → empty
  'ffffff': ' ',   // white → empty
  '00ff00': 'g',   // green → grass
  '7f3f00': 'd',   // brown → dirt
  '808080': 'r',   // gray  → rock
  'ffff00': 'c',   // yellow→ coin
  'ff00ff': 'z',   // magenta→ shooter
  '00ffff': 'S',   // cyan  → slime
  '0000ff': 'P',   // blue  → platform
  'ff0000': 'F',   // red   → fruit
  // ...add more as needed
};
/* =========================== NIVEAUX (avec 'z') =========================== */

let level1 = [
  '                                                                           ',
  '                   c  S                                                    ',
  '     f            PPPPPPP     t       b                       FF           ',
  '    PPP                    F E       PPPP               PPPPPPPPPPP        ',
  '                           ggggg                p                          ',
  '       c            z  F  ddddddd                                          ', // +1 z
  '      PPP             PPP               g      PPP     c                   ',
  '                          b  S  f       dg            PPP                  ',
  ' b   fff   F         ggggggggggggggg    ddg                                ',
  'ggggggggggggg       gddddddddddddddd    dddg             S        F        ',
  'ddddddddddddd       ddddddddddddddddg   ddddgggggggggggggggggggggggggg     ',
  'ddddddddddddd       dddddddddddddddddg  dddddddddddddddddddddddddddddd     ',
  'ddddddddddddd       ddddddddddddddddd   dddddddddddddddddddddddddddddd     ',
  'ddddddddddddd       dddddddddddddccc     cccdddddddddddddddddddddddddd     ',
  'ddddddddddddd       dddddddddddddgggggggggggddddddddddddddddddddddddddddddd',
];

let level2 = [
  '                                                                          ',
  '                                                                          ',
  '                                                                          ',
  '                                                                          ',
  '                                                                          ',
  '                                                                          ',
  '                                                                          ',
  '                                                                          ',
  '                                                                          ',
  '                                      c                                   ',
  '                                                                          ',
  'gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg',
  'dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
  'dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
  'dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
  'dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
];
  
let level3 = [
  '                             E  F                                          ',
  '                           rrrrrrrrrr                                  z c ', // +1 z
  '                   p       S cc                                            ',
  '                    F     rrrrrrrr            ccc                          ',
  '                 rrrrr                      r rrrr                         ',
  '                                     z  rr rR                S c F         ', // +2 z total
  '         B S                       rr rrR                   rrrrrrr        ',
  '       rrrrrr                                                              ',
  '                                                                     M     ',
  '                                                                           ',
  '   S   B                                                                   ',
  'crrrrrrrrrr  rrrr   B         p            p                    p          ',
  'rRRRRRRRRRR  RRRRrrrrrrrFccccc ccc             B   S    M            F     ',
  'RRRRRRRRRRR  RRRRRRRRRRRrrrrrrrrrrrrrr   rrrrrrrrrrrrrrrrrr  rrrrrrrrrrrrrr',
  'RRRRRRRRRRR  RRRRcccF                    RRRRRRRRRRRRRRRRRR  RRRRRRRRRRRRRR',
  'RRRRRRRRRRR  RRRRrrrrrrrrrrrrrrrrrrrrrrrrRRRRRRRRRRRRRRRRRR  RRRRRRRRRRRRRR',
  'RRRRRRRRRRR  RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR  RRRRRRRRRRRRRR',
];

let level4 = [
  '                                                 p                                       ',
  '                                               B   F                                     ',
  '                                              ssssss                                     ',
  '                                        c          s                                     ',
  '                                  p    sss         D                                     ',
  '                             B    S            s   D                 p                   ',
  '                           ssssssssss         sD   Ds                  S                 ',
  '                   z  p                      sDD  sDDs             ssssss                ', // +1 z
  '                          S                 sDDDs  DDDs                        z  SB     ', // +2 z
  '                     sssssss               sDDDDcccDDDDs                      sssssssssss',
  '                                          sDDDDDcccDDDDDs  S   z    cc     sssDDDDDDDDDDD', // +3 z total
  '  F         B        S       S     ccc   sDDDDDDDDDDDDDDDsssss  sssssssssssDDDDDDDDcDDDDD',
  'sssssssssssssssssssssssss  ssssssssssssssDDDDDD  ccFDDDDDDDDDD  DDDDDDDDDDDDDDDDDDDcDDDDD',
  'DDDDDDDDDDDDDDDDDDDDDDDDD  DDDDDDDDDDDDDDDDDDDD  DDDDDDDDDDc      DDDDDDDDDDDDDDDDDcDDDDD',
  'DDDDF        ccccc              B           S       cccDDDDDDDDD         B      S ccFDDDD',
  'DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD',
];

let levels = [level1, level2, level3, level4];

 // let levelImages = null;

/* ============================= ASSETS & AUDIO ============================= */

function preload() {
  playerImage = loadImage('assets/sprites/knight.png');
  worldImage = loadImage('assets/sprites/world_tileset.png');
  platformsImage = loadImage('assets/sprites/platforms.png');
  coinsImage = loadImage('assets/sprites/coin.png');
  slime_greenImage = loadImage('assets/sprites/slime_green.png');
  slime_purpleImage = loadImage('assets/sprites/slime_purple.png');

  jumpSound = loadSound('assets/sounds/jump.wav');
  coinSound = loadSound('assets/sounds/coin.wav');
  eatSound  = loadSound('assets/sounds/power_up.wav');

  // --- Musique & sons actions ---
  bgMusic   = loadSound('assets/sounds/music.mp3');
  tapSound  = loadSound('assets/sounds/tap.wav');
  bombSound = loadSound('assets/sounds/bomb.wav'); // son de bombe
  hitSound = loadSound('assets/sounds/hit.mp3');
  
  levelImg1 = loadImage('assets/levels/levelImage1.bmp');
  levelImages = [levelImg1];
}

// --- Audio globaux ---
let bgMusic, tapSound, coinSound, jumpSound, eatSound, bombSound, hitSound;
let musicVolume = 0.5;
let isMuted = false;

// === Nouvelle habileté : DOUBLE SAUT ===
let maxJumps = 2;
let jumpsLeft = maxJumps;

/* =============================== GAMEPAD PS4 =============================== */
// Indices standards Gamepad API (DualShock 4)
const PS4_BTN = {
  CROSS: 0,   // saut
  CIRCLE: 1,  // bombe
  SQUARE: 2,  // tir
  TRIANGLE: 3,// dash
  L1: 4, R1: 5,
  L2: 6, R2: 7,
  SHARE: 8, OPTIONS: 9,
  L3: 10, R3: 11,
  DPAD_UP: 12, DPAD_DOWN: 13, DPAD_LEFT: 14, DPAD_RIGHT: 15,
};
const DEADZONE = 0.2;

let gpIndex = null;
let gpConnected = false;
let prevButtons = [];

// Détection connexion/déconnexion
window.addEventListener('gamepadconnected', (e) => {
  gpIndex = e.gamepad.index;
  gpConnected = true;
  prevButtons = e.gamepad.buttons.map(b => (b.value || 0) > 0.5 || b.pressed);
});
window.addEventListener('gamepaddisconnected', (e) => {
  if (gpIndex === e.gamepad.index) {
    gpIndex = null;
    gpConnected = false;
    prevButtons = [];
  }
});

// Lecture normalisée du gamepad (retourne les "presses")
function pollGamepad() {
  const pads = navigator.getGamepads ? navigator.getGamepads() : [];
  const gp = (gpIndex != null) ? pads[gpIndex] : pads.find(p => p);
  if (!gp) return { moveX: 0, jumpPress: false, shootPress: false, dashPress: false, bombPress: false };

  const curButtons = gp.buttons.map(b => (b.value || 0) > 0.5 || b.pressed);
  const wasPressed = (i) => !!curButtons[i] && !prevButtons[i];

  const ax = gp.axes?.[0] || 0; // stick gauche X
  let moveX = Math.abs(ax) > DEADZONE ? ax : 0;

  // D-Pad override si pressé
  if (curButtons[PS4_BTN.DPAD_LEFT])  moveX = -1;
  if (curButtons[PS4_BTN.DPAD_RIGHT]) moveX =  1;

  const out = {
    moveX,
    jumpPress:  wasPressed(PS4_BTN.CROSS),
    shootPress: wasPressed(PS4_BTN.R1) || wasPressed(PS4_BTN.R2), // bonus R1 = tir
    dashPress:  wasPressed(PS4_BTN.SQUARE),
    bombPress:  wasPressed(PS4_BTN.CIRCLE) || wasPressed(PS4_BTN.L1) || wasPressed(PS4_BTN.L2),
  };

  // mémoriser l'état pour les prochains "presses"
  prevButtons = curButtons;
  return out;
}

/* =============================== SETUP WORLD ============================== */

let slimes, shooters, enemyBullets, tiles, box, btn;
let bombs = 3; // Bombes disponibles au début de la partie

// --- ÉTAT DASH (correctif) ---
let dashDirection = 0;
let dashEnd = 0;
const DASH_SPEED = 6;
const DASH_DURATION_MS = 500;

//infos joueur
const PLAYER_MAX_HP = 5;
const NUM_COINS_FOR_LIFE = 25;

function setup() {
  // Canvas p5play si dispo, sinon fallback p5
const w = Math.floor(innerWidth / 4);
const h = Math.floor(innerHeight / 4);

if (window.Canvas) {
  new Canvas(w, h, 'pixelated x4');                    // p5play v3 (Canvas global)
} else if (window.p5play && window.p5play.Canvas) {
  new window.p5play.Canvas(w, h, 'pixelated x4');       // certaines builds exposent via p5play.Canvas
} else {
  // Fallback p5 « pur » — rendu pixel-art
  const c = createCanvas(w, h);
  pixelDensity(1);
  noSmooth();
  if (c && c.elt) c.elt.style.imageRendering = 'pixelated';
}
// Empêche p5play de dessiner après ton code
//if (window.allSprites && allSprites.autoDraw !== undefined) {
//  allSprites.autoDraw = false;     // API p5play v2/v3 (certaines builds)
//} else if (window.world && world.autoDraw !== undefined) {
 // world.autoDraw = false;          // API p5play v3
//}
// Désactiver le dessin auto de p5play
//if (window.world && world.autoDraw !== undefined) world.autoDraw = false;  // v3
//if (window.allSprites && allSprites.autoDraw !== undefined) allSprites.autoDraw = false; // compat v2

  // Joueur
  box = new Sprite();
  box.x = 50;
  box.y = 300;
  box.rotationLock = true;
  box.color = 'red';
  box.width = 11;
  box.height = 12;
  box.anis.offset.y = -4;
  box.spriteSheet = playerImage;
  box.addAnis({
    idle: { w: 32, h: 32, col: 0, row: 0, frames: 4, framesDelay: 150 },
    run:  { w: 32, h: 32, col: 0, row: 2, frames: 16 },
    hit:  { w: 32, h: 32, col: 0, row: 6, frames: 4 },
    dash: { w: 32, h: 32, col: 0, row: 5, frames: 8, frameDelay: 2 },
  });
  box.debug = false;
  box.coins = 0;
  box.hp = PLAYER_MAX_HP;
  box.vies = 3;

  /* --- Slimes verts (melee) --- */
  slimes = new Group();
  slimes.x = 650;
  slimes.y = 10;
  slimes.w = 12;
  slimes.h = 14;
  slimes.tile = 'S';
  slimes.spriteSheet = slime_greenImage;
  slimes.anis.offset.y = -4;
  slimes.rotationLock = true;
  slimes.addAnis({
    idle:  { w: 24, h: 24, col: 0, row: 1, frames: 4 },
    spawn: { w: 24, h: 24, col: 0, row: 0, frames: 4 },
    hurt:  { w: 24, h: 24, col: 0, row: 2, frames: 4 },
  });

  /* --- Tireurs violets --- */
  shooters = new Group();
  shooters.w = 12;
  shooters.h = 14;
  shooters.tile = 'z';
  shooters.spriteSheet = slime_purpleImage;
  shooters.anis.offset.y = -4;
  shooters.rotationLock = true;
  shooters.addAnis({
    idle:  { w: 24, h: 24, col: 0, row: 1, frames: 4 },
    spawn: { w: 24, h: 24, col: 0, row: 0, frames: 4 },
    hurt:  { w: 24, h: 24, col: 0, row: 2, frames: 4 },
  });

  /* --- Sols / décor --- */
  grass = new Group();
  grass.collider = 'static';
  grass.w = 16; grass.h = 16;
  grass.spriteSheet = worldImage;
  grass.addAni({ col: 0, row: 0, w: 16, h: 16 });
  grass.tile = 'g';

  sand = new Group();
  sand.collider = 'static';
  sand.w = 16; sand.h = 16;
  sand.spriteSheet = worldImage;
  sand.addAni({ col: 4, row: 0, w: 16, h: 16 });
  sand.tile = 's';

  Sand = new Group();
  Sand.collider = 'static';
  Sand.w = 16; Sand.h = 16;
  Sand.spriteSheet = worldImage;
  Sand.addAni({ col: 4, row: 1, w: 16, h: 16 });
  Sand.tile = 'D';

  rock = new Group();
  rock.collider = 'static';
  rock.w = 16; rock.h = 16;
  rock.spriteSheet = worldImage;
  rock.addAni({ col: 2, row: 0, w: 16, h: 16 });
  rock.tile = 'r';

  Rock = new Group();
  Rock.collider = 'static';
  Rock.w = 16; Rock.h = 16;
  Rock.spriteSheet = worldImage;
  Rock.addAni({ col: 2, row: 1, w: 16, h: 16 });
  Rock.tile = 'R';

  dirt = new Group();
  dirt.collider = 'static';
  dirt.w = 16; dirt.h = 16;
  dirt.spriteSheet = worldImage;
  dirt.addAni({ col: 0, row: 1, w: 16, h: 16 });
  dirt.tile = 'd';
  dirt.friction = 1;

  sign = new Group();
  sign.collider = 'none';
  sign.w = 16; sign.h = 16;
  sign.spriteSheet = worldImage;
  sign.addAni({ col: 8, row: 3, w: 16, h: 16 });
  sign.tile = 'E';
  sign.message1 = 'RAMASSEZ TOUS LES COINS';

  bush = new Group();
  bush.collider = 'none';
  bush.w = 16; bush.h = 16;
  bush.spriteSheet = worldImage;
  bush.addAni({ col: 1, row: 3, w: 16, h: 16 });
  bush.tile = 'b';

  tree = new Group();
  tree.collider = 'none';
  tree.w = 16; tree.h = 16;
  tree.spriteSheet = worldImage;
  tree.addAni({ col: 0, row: 1, w: 16, h: 48 });
  tree.tile = 't';

  Bush = new Group();
  Bush.collider = 'none';
  Bush.w = 16; Bush.h = 16;
  Bush.spriteSheet = worldImage;
  Bush.addAni({ col: 5, row: 6, w: 16, h: 16 });
  Bush.tile = 'B';

  flower = new Group();
  flower.collider = 'none';
  flower.w = 16; flower.h = 16;
  flower.spriteSheet = worldImage;
  flower.addAni({ col: 1, row: 6, w: 16, h: 16 });
  flower.tile = 'f';

  palmtree = new Group();
  palmtree.collider = 'none';
  palmtree.w = 32; palmtree.h = 64;
  palmtree.spriteSheet = worldImage;
  palmtree.addAni({ col: 1.25, row: 1, w: 32, h: 64 });
  palmtree.tile = 'p';

  platforms = new Group();
  platforms.w = 16; platforms.h = 16;
  platforms.collider = 'static';
  platforms.spriteSheet = platformsImage;
  platforms.addAni({ col: 0, row: 0, w: 16, h: 16 });
  platforms.tile = 'P';
  platforms.friction = 1;

  coins = new Group();
  coins.collider = 'none';
  coins.w = 16; coins.h = 16;
  coins.spriteSheet = coinsImage;
  coins.addAni({ col: 0, row: 0, w: 16, h: 16, frames: 12 });
  coins.tile = 'c';

  fruits = new Group();
  fruits.collider = 'none';
  fruits.w = 16; fruits.h = 16;
  fruits.spriteSheet = worldImage;
  fruits.addAni({ col: 4, row: 8, w: 16, h: 16 });
  fruits.tile = 'F';

  ice = new Group();
  ice.collider = 'static';
  ice.w = 16; ice.h = 16;
  ice.spriteSheet = worldImage;
  ice.addAni({ col: 6, row: 2, w: 16, h: 16 });
  ice.tile = 'i';
  ice.friction = 0.01;

  Mushroom = new Group();
  Mushroom.collider = 'static';
  Mushroom.w = 16; Mushroom.h = 16;
  Mushroom.spriteSheet = worldImage;
  Mushroom.addAni({ col: 7, row: 8, w: 16, h: 16 });
  Mushroom.tile = 'M';

  // Projectiles ennemis : cinématiques, sans gravité
  enemyBullets = new Group();
  enemyBullets.collider = 'kinematic';
  enemyBullets.d = 3;
  enemyBullets.rotationLock = true;
  enemyBullets.gravityScale = 0;

  //test pour prendre image pour niveau1
  //levels[0] = imageToLetterGrid(levelImg1);

  // Construire le premier niveau puis initialiser les acteurs dépendants
  tiles = new Tiles(levels[0], 0, 0, 16, 16);

  initActorsForLevel();

  world.gravity.y = 9.81;

  // Bouton PLAY (débloque l'audio)
  btn = createButton('PLAY');
  btn.position(innerWidth / 2 - 200 / 2, innerHeight / 2 - 100 / 2);
  btn.size(300, 150);
  btn.mousePressed(() => {
    if (typeof userStartAudio === 'function') userStartAudio();
    if (bgMusic && !bgMusic.isPlaying()) {
      bgMusic.setLoop(true);
      bgMusic.setVolume(isMuted ? 0 : musicVolume);
      bgMusic.play();
    }
    loop();
    btn.remove();
  });
  noLoop();
}

//fonction pour convertir une image en grille de lettres
function imageToLetterGrid(img, colorMap = COLOR_TO_LETTER, opts = {}) {

  img.loadPixels();

  const grid = [];
  const keys = Object.keys(colorMap);
  const keyRGB = keys.map(hex => hexToRgb(hex));

  for (let y = 0; y < img.height; y++) {
    let row = '';
    for (let x = 0; x < img.width; x++) {
      const i = 4 * (y * img.width + x);
      const r = img.pixels[i + 0] | 0;
      const g = img.pixels[i + 1] | 0;
      const b = img.pixels[i + 2] | 0;
      const a = img.pixels[i + 3] | 0;

      const hex = rgbToHex(r, g, b);
      row += colorMap[hex] ?? unknownChar;
    }
    grid.push(row);
  }
  return grid;
}
function rgbToHex(r, g, b) {
  return (
    (r.toString(16).padStart(2, '0')) +
    (g.toString(16).padStart(2, '0')) +
    (b.toString(16).padStart(2, '0'))
  );
}
function hexToRgb(hexNoHash) {
  const h = hexNoHash.replace(/^#/, '');
  return {
    r: parseInt(h.slice(0, 2), 16),
    g: parseInt(h.slice(2, 4), 16),
    b: parseInt(h.slice(4, 6), 16),
  };
}

/* --- Initialise les slimes & shooters APRÈS new Tiles(...) --- */
function initActorsForLevel() {
  for (let s of slimes) s.changeAni('idle');

  for (let z of shooters) {
    z.changeAni('idle');
    z.shootCooldown = 1100 + random(-250, 250); // ms
    z.lastShot = 0;                              // timestamp ms
    // Portée d'engagement (distance à laquelle l'ennemi décide de tirer)
    z.range = ENEMY_BULLET_RANGE;                // cohérent avec la portée des balles
  } 
}

/* ============================= ETATS & NIVEAUX ============================ */

let currentLevel = 0;
function changeLevel() {
  if (currentLevel >= levels.length + levelImages.length - 1) {
    youWin();
  }
  currentLevel++;
  tiles.remove();
  currentLevelTxt = null;
  if (currentLevel < levels.length) {
    currentLevelTxt = levels[currentLevel];
  }
  else
  {
    currentLevelTxt = imageToLetterGrid(levelImages[currentLevel - levels.length]);
  }
  tiles = new Tiles(currentLevelTxt, 0, 0, 16, 16);
  box.x = 100;
  box.y = 100;
  jumpsLeft = maxJumps;
  initActorsForLevel();
}

// vérifier si on touche un mur à gauche ou à droite
function isTouchingWall(sprite, tiles) {
  // left probe
  const leftProbe = new Sprite(sprite.x - sprite.w/2 - 4, sprite.y - sprite.h/4, 8, sprite.h/2);
  leftProbe.collider = 'none';
  const left = leftProbe.overlapping(tiles);
  leftProbe.remove();

  // right probe
  const rightProbe = new Sprite(sprite.x + sprite.w/2 + 4, sprite.y - sprite.h/4, 8, sprite.h/2);
  rightProbe.collider = 'none';
  const right = rightProbe.overlapping(tiles);
  rightProbe.remove();
  if(right)
  {
    rightProbe.collider = 'none';
  }

  return { left, right };
}

/* ================================ GAME LOOP =============================== */

function draw() {
  background(120, 200, 255);

  if (coins.length <= 0) changeLevel();

  // Reset double saut si au sol / champignon
  if (box.colliding(tiles) || box.colliding(Mushroom)) jumpsLeft = maxJumps;

  // --- Musique ---
  if (kb.presses('m')) { isMuted = !isMuted; if (bgMusic) bgMusic.setVolume(isMuted ? 0 : musicVolume, 0.1); }
  if (kb.presses(']')) { musicVolume = Math.min(1, musicVolume + 0.1); if (bgMusic && !isMuted) bgMusic.setVolume(musicVolume, 0.1); }
  if (kb.presses('[')) { musicVolume = Math.max(0, musicVolume - 0.1); if (bgMusic && !isMuted) bgMusic.setVolume(musicVolume, 0.1); }

  /* --- SLIMES (IA simple) --- */
  for (let slime of slimes)
  {
    if(!box.overlapping(bush))
    {
      slime.moveTowards(box.x, undefined, 0.01);
    }
    if(slime.colliding(tiles) && random() < 0.008)
    {
      slime.vel.y = -5.25;
    }

    if(box.collides(slime))
    {
      box.moveAway(slime, 0.5);
      slime.moveAway(box, 0.75);
      box.changeAni('hit');
	    hitSound.play();
      setTimeout(() => box.changeAni('idle'), 500);
      box.hp -= 1;
    }
  }

  /* --- TIREURS violets --- */
  let now = millis();
  for (let z of shooters)
  {
    z.mirror.x = (box.x < z.x);

    const dx = box.x - z.x;
    const dy = box.y - z.y;
    const dist = Math.hypot(dx, dy) || 1;

    if (dist <= z.range && now - z.lastShot >= z.shootCooldown)
    {
      // direction normalisée
      const nx = dx / dist, ny = dy / dist;

      // spawn 1 tuile devant (éviter murs/corps)
      const b = new enemyBullets.Sprite();
      b.x = z.x + nx * ENEMY_SPAWN_OFFSET;
      b.y = z.y + ny * ENEMY_SPAWN_OFFSET;

      // vitesse + durée de vie pour ~ENEMY_BULLET_RANGE
      b.vel.x = nx * ENEMY_BULLET_SPEED;
      b.vel.y = ny * ENEMY_BULLET_SPEED;
      b.life  = Math.ceil(ENEMY_BULLET_RANGE / ENEMY_BULLET_SPEED);

      // si spawn dans une tuile, pousse un peu
      for (let i = 0; i < 3 && b.overlapping(tiles); i++)
      {
        b.x += nx * 2;
        b.y += ny * 2;
      }

      // contacts
      b.overlaps(tiles, () => b.remove());
      b.overlaps(box, () => {
        if (!box.isDead)
        {
          box.hp -= 1;
          box.changeAni('hit');
		      hitSound.play();
          setTimeout(() => box.changeAni('idle'), 300);
        }
        b.remove();
      });

      z.lastShot = now;
    }
  }

  // === GAMEPAD INPUT ===
  const gp = pollGamepad();

  // --- BOMBE ---
  if (kb.presses('z') || gp.bombPress)
  {
    detonateBomb();
  }

  // Déplacement (priorité clavier; sinon manette) — ignoré pendant le dash
  const left  = kb.pressing('left') || gp.moveX < 0;
  const right = kb.pressing('right') || gp.moveX > 0;
  const dashPressed = kb.presses('y') || gp.dashPress;

if (dashDirection == 0) {
  if (left) {
    box.vel.x = -2;
    box.mirror.x = true;
    box.changeAni('run');
  } else if (right) {
    box.vel.x = 2;
    box.mirror.x = false;
    box.changeAni('run');
  } else if (box.ani.name != 'hit' && box.ani.name != 'dash') {
    box.changeAni('idle');
    box.vel.x = 0;
  }
}

  // DASH (clavier Y) ou (manette Triangle) — CORRECTIF: dash persistant
  if (dashPressed)
  {
    // Choix de la direction au moment du dash=
    if (left) dashDirection = 1;
    else if (right) dashDirection = -1;
    else dashDirection = box.mirror.x ? 1 : -1;

    box.mirror.x = (dashDirection > 0);
    box.vel.x = dashDirection * DASH_SPEED;
    dashEnd = millis() + DASH_DURATION_MS;

    box.changeAni('dash');
    setTimeout(() => box.changeAni('idle'), DASH_DURATION_MS);
  }

  // Maintien de la vitesse pendant le dash (jusqu'à expiration ou changement de direction)
  if (Math.abs(dashDirection) > 0)
  {
    if((dashDirection < 0 && left) || (dashDirection > 0 && right))
    {
      dashDirection = 0; // annule le dash si le joueur change de direction
    }
    else
    {
      // verrouille la vitesse horizontale du dash
      box.vel.x = (box.mirror.x ? -1 : 1) * DASH_SPEED;
      if (millis() > dashEnd)
      {
        dashDirection = 0;
      }
    }
  }

  // TIR (clavier Espace) ou (manette Carré/R1)
  if (kb.presses('space') || gp.shootPress) shoot();

  // SAUT (clavier ↑) ou (manette Croix) avec sauts restants
  if (jumpsLeft >0 && (kb.presses('up') || gp.jumpPress))
  {
      box.vel.y = -4.5;
      if (jumpSound) jumpSound.play();
      jumpsLeft--;
  }

  // Champignon rebond
  if (box.colliding(Mushroom)) {
    box.vel.y = -7;
    if (jumpSound) jumpSound.play();
  }

  // Collecte
  for (let fruit of fruits) if (box.overlaps(fruit))
  {
    fruit.remove();
    if(box.hp < PLAYER_MAX_HP)
      box.hp++;
    if (eatSound)  eatSound.play();
  }
  for (let coin  of coins) 
  {
      if (box.overlaps(coin)) 
      {
        coin.remove();
        box.coins++;
        if(box.coins >= NUM_COINS_FOR_LIFE)
        {
          box.vies++;
          box.coins = 0;
        }
        if (coinSound) coinSound.play(); 
      }
    }

  // Caméra : centre sur le joueur
  camera.x = box.x;
  camera.y = box.y;

  if(box.hp <= 0)
  {
    box.vies--;
    box.hp = PLAYER_MAX_HP;
    box.x = 10;
    box.y = 10;
    jumpsLeft = maxJumps;
  }
  // Fin de partie ?
  if (box.y > 1000 || box.vies <= 0) {
    gameOver();
    return;
  }

  // ---- DESSIN DU MONDE AVEC LA CAMÉRA ----
  if (world?.autoDraw) world.autoDraw = false; // au cas où

  camera.on();

  // 1) Tuiles (certaines versions exigent de les dessiner explicitement)
  if (typeof tiles?.draw === 'function') tiles.draw();

  // 2) Sprites & groupes
  if (typeof allSprites?.draw === 'function') {
    allSprites.draw();            // v2/v3: dessine tous les sprites
  } else if (typeof world?.draw === 'function') {
    world.draw();                 // fallback (certaines builds)
  }

  camera.off();

  // ---- HUD (dessiné en coordonnées écran, au-dessus du monde) ----
  postProcess();
}

/* ================================ HUD/POST ================================ */

function postProcess() {
  
  push();
  camera.off();          // ← désactive la transform de caméra pour dessiner en écran
  noStroke();
  fill(255);             // texte blanc
  textSize(12);

  // --- HUD haut droite ---
  textAlign(RIGHT, TOP);
  text('niveau ' + (currentLevel + 1) + '/' + levels.length, width - 5, 5);
  text('bombes: ' + bombs, width - 5, 22);

  // --- HUD haut gauche ---
  textAlign(LEFT, TOP);
  text('coins: ' + box.coins, 5, 5);
  text('hp: ' + box.hp, 5, 22);
  text('vies: ' + box.vies, 5, 39);
  //text('sauts: ' + Math.max(0, jumpsLeft), 5, 39);
  //text('musique: ' + (isMuted ? 'OFF (M)' : (musicVolume.toFixed(1) + ' (M/[/])')), 5, 56);

  // Panneau d’infos centré (optionnel)
  if (box.overlapping(sign)) {
    textAlign(CENTER, CENTER);
    text(sign.message1, width / 2, height / 2 + 20);
  }

  pop();
}


/* ================================= BOMBE ================================= */

function detonateBomb() {
  if (bombs <= 0) return;
  bombs--;
  if (bombSound) bombSound.play(); // son de bombe

  // Rectangle visible (viewport) en coordonnées monde
  const halfW = width / 2;
  const halfH = height / 2;
  const left   = camera.x - halfW;
  const right  = camera.x + halfW;
  const top    = camera.y - halfH;
  const bottom = camera.y + halfH;

  const toKill = [];

  for (let s of slimes)   if (s.x >= left && s.x <= right && s.y >= top && s.y <= bottom) toKill.push(s);
  for (let z of shooters) if (z.x >= left && z.x <= right && z.y >= top && z.y <= bottom) toKill.push(z);

  for (let e of toKill) e.remove();
}

/* =============================== TIRS JOUEUR ============================== */

function shoot() {
  if (tapSound) tapSound.play();

  const p = new Sprite();
  p.x = box.x + (box.mirror.x ? -2 : 2);
  p.y = box.y;
  p.vel.x = box.mirror.x ? -8 : 8;
  p.d = 3;

  p.collides(tiles, () => setTimeout(() => p.remove(), 1000));

  for (let slime of slimes) {
    p.collides(slime, async () => {
      slime.moveAway(p, 1);
      await slime.changeAni('hurt');
      await delay(400);
      slime.remove();
      p.remove();
    });
  }

  for (let z of shooters) {
    p.collides(z, async () => {
      z.moveAway(p, 1);
      await z.changeAni('hurt');
      await delay(400);
      z.remove();
    });
  }
}

/* ============================== FIN DE PARTIE ============================= */

function gameOver() {
  if (bgMusic && bgMusic.isPlaying()) { bgMusic.setVolume(0, 1.0); setTimeout(() => bgMusic.stop(), 1100); }

  push();
  camera.off();                // désactive la transform de caméra
  noStroke();
  fill(0);
  tiles.remove();
  slimes.removeAll?.();
  shooters.removeAll?.();
  enemyBullets.removeAll?.();
  box.remove();
  rect(0, 0, width, height);   // maintenant ça couvre bien tout l’écran
  fill(255, 100, 100);
  textSize(16);
  textAlign(CENTER);
  text('GAME OVER', width / 2, height / 2);
  pop();

  noLoop();
}

function youWin() {
  if (bgMusic && bgMusic.isPlaying()) { bgMusic.setVolume(0, 1.0); setTimeout(() => bgMusic.stop(), 1100); }
  fill(0); rect(0, 0, width, height);
  fill(100, 255, 100); textSize(16); textAlign(CENTER); text('YOU WIN', width / 2, height / 2);
  noLoop();
}
