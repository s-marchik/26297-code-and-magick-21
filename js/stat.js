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
const COLOR_SHADOW = `rgba(0, 0, 0, 0.7)`;
const COLOR_BASIС = `#fff`;
const COLOR_BASIС_BLACK = `#000`;
const COLOR_MAIN_PLAYER = `rgba(255, 0, 0, 1)`;

const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

let getMaxElement = function (arr) {
  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
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

  ctx.font = `16px PT Mono`;
  ctx.textBaseline = `hanging`;
  ctx.fillStyle = COLOR_BASIС_BLACK;
  ctx.fillText(`Ура вы победили!`, CLOUD_X + GAP, CLOUD_Y + GAP);
  ctx.fillText(`Список результатов:`, CLOUD_X + GAP, CLOUD_Y + GAP + TEXT_HEIGHT);

  let maxTime = getMaxElement(times);

  for (let i = 0; i < names.length; i++) {
    let time = Number.parseInt(times[i], 10);

    if (names[i] === `Вы`) {
      ctx.fillStyle = COLOR_MAIN_PLAYER;
    } else {
      let saturation = Math.floor(Math.random() * 101);
      ctx.fillStyle = `hsl(244, ` + saturation + `%, 46%)`;
    }

    let heightBar = (BAR_HEIGHT_MAX * time) / maxTime;

    ctx.fillRect(
        CLOUD_X + 2 * GAP + (BAR_GAP + BAR_WIDTH) * i,
        CLOUD_HEIGHT - TEXT_HEIGHT - heightBar - GAP_SHADOW,
        BAR_WIDTH,
        heightBar
    );

    ctx.fillStyle = COLOR_BASIС_BLACK;
    ctx.textBaseline = `hanging`;
    ctx.fillText(
        names[i],
        CLOUD_X + 2 * GAP + (BAR_GAP + BAR_WIDTH) * i,
        CLOUD_HEIGHT - GAP
    );

    ctx.fillText(
        time,
        CLOUD_X + 2 * GAP + (BAR_WIDTH + BAR_GAP) * i,
        CLOUD_HEIGHT - GAP_SHADOW - TEXT_HEIGHT - heightBar - TEXT_HEIGHT
    );
  }
};
