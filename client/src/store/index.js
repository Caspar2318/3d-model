import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#f7642a",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./logo5.png",
  fullDecal: "./threejs.png",
});

export default state;
