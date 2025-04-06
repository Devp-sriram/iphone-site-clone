import dynamic from 'next/dynamic'
import hero from '../public/assets/images/hero.jpeg';

export const heroImg = hero;

import * as hmv  from "../public/assets/videos/hero.mp4";
import * as smallmv from "../public/assets/videos/smallHero.mp4";
import * as highlightFirstmv from "../public/assets/videos/highlight-first.mp4";
import * as highlightSectmv from "../public/assets/videos/hightlight-third.mp4";
import * as highlightThirdmv from "../public/assets/videos/hightlight-sec.mp4";
import * as highlightFourthmv from "../public/assets/videos/hightlight-fourth.mp4";
import * as exploremv from "../public/assets/videos/explore.mp4";
import * as framemv from "../public/assets/videos/frame.mp4";

import apple from "../public/assets/images/apple.svg";
import search from "../public/assets/images/search.svg";
import bag from "../public/assets/images/bag.svg";
import watch from "../public/assets/images/watch.svg";
import right from "../public/assets/images/right.svg";
import replay from "../public/assets/images/replay.svg";
import play from "../public/assets/images/play.svg";
import pause from "../public/assets/images/pause.svg";

import yellow from "../public/assets/images/yellow.jpg";
import blue from "../public/assets/images/blue.jpg";
import white from "../public/assets/images/white.jpg";
import black from "../public/assets/images/black.jpg";
import explore1 from "../public/assets/images/explore1.jpg";
import explore2 from "../public/assets/images/explore2.jpg";
import chip from "../public/assets/images/chip.jpeg";
import frame from "../public/assets/images/frame.png";

export const heroVideo = hmv;
export const smallHeroVideo = smallmv;
export const highlightFirstVideo = highlightFirstmv;
export const highlightSecondVideo = highlightSectmv;
export const highlightThirdVideo = highlightThirdmv;
export const highlightFourthVideo = highlightFourthmv;
export const exploreVideo = dynamic(()=> exploremv);
export const frameVideo = framemv;

export const appleImg = apple;
export const searchImg = search;
export const bagImg = bag;
export const watchImg = watch;
export const rightImg = right;
export const replayImg = replay;
export const playImg = play;
export const pauseImg = pause;

export const yellowImg = yellow;
export const blueImg = blue;
export const whiteImg = white;
export const blackImg = black;
export const explore1Img = explore1;
export const explore2Img = explore2;
export const chipImg = chip;
export const frameImg = frame;
