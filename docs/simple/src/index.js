import "./styles.css";
import { Moodboard } from "animate-moodboard";

const wrapper = document.getElementById("app");

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
  },
  {
    attrs: {
      src: "https://tinyurl.com/yxvzlr4k"
    },
    style: {
      width: "200px"
    }
  },
  {
    attrs: {
      src: "https://tinyurl.com/y3xdshws:"
    },
    style: {
      width: "200px"
    }
  },
  {
    attrs: {
      src: "https://tinyurl.com/y665qtuj"
    },
    style: {
      width: "200px"
    }
  },
  {
    attrs: {
      src: "https://tinyurl.com/y2gjcbr2"
    },
    style: {
      width: "200px"
    }
  },
  {
    attrs: {
      src: "https://tinyurl.com/y4g6a3pp"
    },
    style: {
      width: "200px"
    }
  }
];

const moodboard = new Moodboard(wrapper, config);

moodboard.init();
moodboard.move();

setTimeout(() => {
  moodboard.stop();
}, 20000);