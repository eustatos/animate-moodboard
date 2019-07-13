import Moodboard from "./moodboard";

const wrapper: HTMLElement | null = document.getElementById("app");

const config = [
  {
    attrs: {
      src: "https://tinyurl.com/y62gg5pj"
    },
    style: {
      width: "200px"
    }
  },
  {
    attrs: {
      src: "https://tinyurl.com/y3txako3"
    },
    style: {
      width: "200px"
    }
  },
  {
    attrs: {
      src: "https://tinyurl.com/y5ylaz8q"
    },
    style: {
      width: "200px"
    }
  }
];

const moodboard = new Moodboard(wrapper, config);

moodboard.init();
