'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 20;
const GAP_SHADOW = 10;
const BAR_GAP = 50;
const TEXT_HEIGHT = 20;
const BAR_WIDTH = 40;
const BAR_HEIGHT_MAX = 150;
const COLOR_SHADOW = 'rgba(0, 0, 0, 0.7)';
const COLOR_BASIС = '#fff';
const COLOR_BASIС_BLACK = '#000';
const COLOR_MAIN_PLAYER = 'rgba(255, 0, 0, 1)';
const COLOR_OTHERS_PLAYERS = '#4169e1';

const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx) {
  renderCloud(
    ctx,
    CLOUD_X + GAP_SHADOW,
    CLOUD_Y + GAP_SHADOW,
    COLOR_SHADOW
  );
  renderCloud(
    ctx,
    CLOUD_X,
    CLOUD_Y,
    COLOR_BASIС
  );

ctx.font = '16px PT Mono';
ctx.textBaseline = 'hanging'
ctx.fillStyle = COLOR_BASIС_BLACK;
ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP);
ctx.fillText('Список результатов:',CLOUD_X + GAP, CLOUD_Y + GAP + TEXT_HEIGHT);

ctx.fillStyle = COLOR_BASIС_BLACK;
ctx.fillText(
  'Вы',
  CLOUD_X + 2*GAP,
  CLOUD_HEIGHT - GAP
);

ctx.fillStyle = COLOR_MAIN_PLAYER;
ctx.fillRect(
  CLOUD_X + 2*GAP,
  CLOUD_Y + (3 * GAP) + TEXT_HEIGHT,
  BAR_WIDTH,
  BAR_HEIGHT_MAX
);

ctx.fillStyle = COLOR_BASIС_BLACK;
ctx.fillText(
  'Кекс',
  CLOUD_X + 2*GAP + BAR_GAP + BAR_WIDTH,
  CLOUD_HEIGHT - GAP
);

ctx.fillStyle = COLOR_OTHERS_PLAYERS;
ctx.fillRect(
  CLOUD_X + 2*GAP + BAR_GAP  + BAR_WIDTH,
  CLOUD_Y + (3 * GAP) + TEXT_HEIGHT,
  BAR_WIDTH,
  BAR_HEIGHT_MAX
);

ctx.fillStyle = COLOR_BASIС_BLACK;
ctx.fillText(
  'Катя',
  CLOUD_X + 2*GAP + (2*(BAR_GAP + BAR_WIDTH)),
  CLOUD_HEIGHT - GAP
);

ctx.fillStyle = COLOR_OTHERS_PLAYERS;
ctx.fillRect(
  CLOUD_X + 2*GAP + (2*(BAR_GAP + BAR_WIDTH)),
  CLOUD_Y + (3 * GAP) + TEXT_HEIGHT,
  BAR_WIDTH,
  BAR_HEIGHT_MAX
);

ctx.fillStyle = COLOR_BASIС_BLACK;
ctx.fillText(
  'Игорь',
  CLOUD_X + 2*GAP + (3*(BAR_GAP + BAR_WIDTH)),
  CLOUD_HEIGHT - GAP
);

ctx.fillStyle = COLOR_OTHERS_PLAYERS;
ctx.fillRect(
  CLOUD_X + 2*GAP + (3*(BAR_GAP + BAR_WIDTH)),
  CLOUD_Y + (3 * GAP) + TEXT_HEIGHT,
  BAR_WIDTH,
  BAR_HEIGHT_MAX
);
}
