var Props = {};

Props.SERVER_AVAILABLE = false;
Props.SERVER_POLL_INTERVAL = 3000;

Props.PLAYER_LIVES = 3;
Props.PLAYER_MAX_LIVES = 10;

Props.STAGE_RATIO = 4 / 3;
Props.STAGE_HRES = 800;
Props.STAGE_VRES = 600;
Props.STAGE_VERT_OFFSET = 0;

Props.DEATH_MESSAGE = 'Game over Man! Game Over!';
Props.SUCCESS_MESSAGE = 'You have saved the galaxy!';

Props.SHIP_VERT_ADJUST = 30;
Props.SHIP_SPEED = 2;
Props.SHIP_SHOOT_DELAY = 25

Props.GRID_WIDE = 5;
Props.GRID_DEEP = 4;
Props.GRID_TOP = 450;
Props.GRID_H_OFFSET = 30;

Props.CELL_DECAY_RATE = 0.05;
Props.CELL_MAX_HITS = 12;
Props.CELL_WIDTH = 110;
Props.CELL_HEIGHT = 40;
Props.CELL_CHARGE_POINTS = 5;

Props.SWARM_H_STEP = 5;
Props.SWARM_V_STEP = 10;
Props.SWARM_MOVE_INTERVAL = 500;
Props.SWARM_SHOOT_INTERVAL = 500; 
Props.SWARM_MAX_SHIFT = 8;
Props.SWARM_COLUMNS_MARGIN = 6;
Props.SWARM_TOP = 100;
Props.SWARM_INITIAL_SIZE = 56;

Props.ENEMY_COLORS = [0xFFAAAA, 0xAAFF00, 0x00AAFF, 0xFF00FF, 0x00FFAA];
Props.ENEMY_GAP = 40;
Props.ENEMY_ROWS = 5;
Props.ENEMY_ROTATION_SPEED = 0.1;
Props.ENEMY_DECAY_RATE = 0.1;
Props.ENEMY_BULLET_SPEED = 5;
Props.ENEMY_MAX_HITS = 5;
Props.ENEMY_KILL_POINTS = 50;
Props.ENEMY_HIT_POINTS = 10;
Props.ENEMY_SPEED = 5;
Props.ENEMY_PATH_VISIBLE = false;

Props.BULLET_SPEED = 8;

Props.MOTHER_MAX_HITS = 100;
Props.MOTHER_SHOOT_INTERVAL = 2000;
Props.MOTHER_SPEED = 0.5;
Props.MOTHER_KILL_POINTS = 500;
Props.MOTHER_HIT_POINTS = 50;
Props.MOTHER_SCALE = 0.15;
Props.MOTHER_PILL_HITS = 20;

Props.ASSIST_LAZER_DURATION = 10;
Props.ASSIST_LAZER_WIDTH = 3;
Props.ASSIST_LAZER_COLOR = 0x33FF00;
Props.ASSIST_X_PAD = 50;
Props.ASSIST_Y_PAD_TOP = 100;
Props.ASSIST_Y_PAD_BOTTOM = 250;
Props.ASSIST_APPEAR_RATE = 0.01;
Props.ASSIST_MAX_SCALE = 0.5;

Props.EXPLOSION_TINY = 0.1;
Props.EXPLOSION_SMALL = 0.25;
Props.EXPLOSION_MEDIUM = 0.5;
Props.EXPLOSION_LARGE = 1;
Props.EXPLOSION_HUGE = 3;
Props.EXPLOSION_SCALE = 1;
Props.EXPLOSION_SPEED = 0.5;

Props.PILL_SCALE = 0.05;
Props.PILL_SPEED = 2.5;
Props.PILL_POWER = 5;
Props.PILL_COLLECT_POINTS = 100;
Props.PILL_DELAY = 200;

if (typeof module !== 'undefined' && module.exports) 
  module.exports.props = Props;
