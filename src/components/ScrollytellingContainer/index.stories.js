import ViewDefault from './view.default.svelte';

let scrollytellingSteps = [
  {
    text:
      "<p>Step one. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>",
    data: {
      status: 1,
	  url: "img/static-a-graphic-2x.jpg"
    }
  },
  {
    text:
      "<p>Step two. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>",
    data: {
      status: 2,
	  url: "img/static-b-graphic-2x.jpg"
    }
  },
  {
    text:
      "<p>Step three. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>",
    data: {
      status: 3,
	  url: "img/static-c-graphic-2x.jpg"
    }
  },
  {
    text:
      "<p>Step four. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>",
    data: {
      status: 4,
	  url: "img/static-d-graphic-2x.jpg"
    }
  },
  {
    text:
      "<p>Step five. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>",
    data: {
      status: 5,
	  url: "img/static-e-graphic-2x.jpg"
    }
  }
];

export default {
  title: 'Layout components/ScrollytellingContainer',
};

export const Default = () => ({
  Component: ViewDefault,
  props: { className: 'test', scrollytellingSteps },
});