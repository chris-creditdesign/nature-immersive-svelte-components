<style>
  :global(:root) {
    /* --------------------------------- Colours -------------------------------- */
    /* Black & White */
    --black-0: #000000;
    --black-1: #262621;
    --black-2: #333333;
    --black-3: #666666;
    --white-0: #ffffff;
    --white-1: #cccccc;

    /* Nature Color Palette */
    --yellow-1: #efd600;
    --yellow-2: #ffd500;
    --yellow-3: #fbba00;
    --orange-1: #f7a70b;
    --orange-2: #eb5b25;
    --orange-3: #e63323;
    --red-1: #e40428;
    --red-2: #e5005b;
    --red-3: #c82285;
    --purple-1: #964091;
    --purple-2: #6c4796;
    --purple-3: #494495;
    --blue-1: #1951a0;
    --blue-2: #006eb7;
    --blue-3: #0085c8;
    --turquoise-1: #0095bb;
    --turquoise-2: #0094a4;
    --turquoise-3: #00928c;
    --seagreen-1: #008b68;
    --seagreen-2: #229863;
    --seagreen-3: #449b50;
    --leafgreen-1: #3fa535;
    --leafgreen-2: #76b82a;
    --leafgreen-3: #c7d530;

    /* ------------------------------ Modular scale ----------------------------- */
    /*	Dimensions are scaled proportionately with the page width */
    /*	from a minimum value of 1rem */
    font-size: calc(1rem + 0.4vw);

    /* Sizes to use */
    --ratio: 1.5;
    --s-6: calc(var(--s-5) / var(--ratio));
    --s-5: calc(var(--s-4) / var(--ratio));
    --s-4: calc(var(--s-3) / var(--ratio));
    --s-3: calc(var(--s-2) / var(--ratio));
    --s-2: calc(var(--s-1) / var(--ratio));
    --s-1: calc(var(--s0) / var(--ratio));
    --s0: 1rem;
    --s1: calc(var(--s0) * var(--ratio));
    --s2: calc(var(--s1) * var(--ratio));
    --s3: calc(var(--s2) * var(--ratio));
    --s4: calc(var(--s3) * var(--ratio));
    --s5: calc(var(--s4) * var(--ratio));
    --s6: calc(var(--s5) * var(--ratio));

    /* Useful to for fallback values */
    --no-space: 0;

    /* ---------------------------------- Type ---------------------------------- */
    /* Harding is the defalut font, otherwise apply the sans serif font */
    --serif-font-family: Harding, Palatino, Times, "Times New Roman", serif;
    --sans-serif-font: "Source Sans Pro", arial, helvetica, sans-serif;

    --font-size-small-3: var(--s-3);
    --font-size-small-2: var(--s-2);
    --font-size-small-1: var(--s-1);
    --font-size-base: var(--s0);
    --font-size-big-1: var(--s1);
    --font-size-big-2: var(--s2);
    --font-size-big-3: var(--s3);
    --font-size-big-4: var(--s4);

    /* ----------------------------- Transition time ---------------------------- */
    --time: 200ms;

    /* --------------------------------- Measure -------------------------------- */
    --measure: 60ch;
    --measure-big: calc(var(--measure) * var(--ratio));
    --measure-small: calc(var(--measure) / var(--ratio));

    /* --------------------------------- Spacing -------------------------------- */
    --space: var(--s-1);

    --cover-space: 1rem;
    --cover-height: 100vh;

    /* ------------------------------ Media queries ----------------------------- */
    --break-tiny: 560px;
    --break-small: 800px;
    --break-large: 1000px;
    --break-extra-large: 1400px;
  }

  :global(body) {
    font-family: var(--serif-font-family);
    color: var(--text-color);
    background-color: var(--background-color);
    margin: 0;

    transition: background-color var(--time) ease, color var(--time) ease;

    /* https://developer.mozilla.org/en-US/docs/Web/CSS/font-smooth */
    -webkit-font-smoothing: subpixel-antialiased;
  }

  /* ------------------------- Exception based styling ------------------------ */
  :global(*) {
    max-width: var(--measure);
    box-sizing: border-box;
  }

  /* All elements should have a max width of --measure except these */
  :global(html, body, div, section, main, article, header, figure, img, video, iframe, svg, footer, a) {
    max-width: none;
  }

  /* -------------------------------- Elements -------------------------------- */
  /* headers */
  :global(h3) {
    font-size: var(--font-size-big-1);
  }
  :global(h2) {
    font-size: var(--font-size-big-2);
  }
  :global(h1) {
    font-size: var(--font-size-big-3);
  }

  /* links */
  :global(a) {
    text-decoration: underline;
    color: var(--link-color);
  }

  :global(a:hover, a:focus) {
    background-color: var(--outline);
    color: var(--link-color-active);
    outline: 3px solid var(--outline);
  }

  /* Figures */
  :global(figure) {
    margin: 0;
  }

  :global(figcaption) {
    box-sizing: content-box;
    padding-left: var(--caption-space);
    padding-right: var(--caption-space);
  }

  :global(figure > img, figure > video, iframe) {
    width: 100%;
  }

  /* Prevent Superscripts and Subscripts from Affecting Line-Height */
  /* https://css-tricks.com/snippets/css/prevent-superscripts-and-subscripts-from-affecting-line-height/ */
  :global(sup, sub) {
    vertical-align: baseline;
    position: relative;
    top: -0.4em;
  }

  :global(sub) {
    top: 0.4em;
  }

  /* -------------------------------- Modifiers ------------------------------- */
  /* Background colors */
  :global(.invert) {
    color: var(--text-color-invert);
    fill: var(--text-color-invert);
    background-color: var(--background-color-invert);
  }

  :global(.invert a) {
    color: var(--link-color-invert);
  }

  :global(.invert a:hover, .invert a:focus) {
    color: var(--link-color-active);
  }

  /* Borders */
  :global(.border-above) {
    padding-top: var(--s1);
    border-top: 1px solid var(--text-color);
  }

  /* Dropcap */
  :global(.drop-cap:first-letter) {
    font-size: 88px;
    line-height: 62px;
    float: left;
    padding-top: 8px;
    padding-right: 3px;
    padding-left: 0;
  }

  /* -------------------------------- Utilities ------------------------------- */
  /* Make sure hidden elements are hidden */
  :global([hidden]) {
    display: none !important;
  }

  :global(.visually-hidden) {
    position: absolute !important;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    width: 1px;
    height: 1px;
    margin: -1px !important;
    padding: 0 !important;
    opacity: 0;
    border: 0 !important;
  }

  /* ---------------------------- Layout Primatives --------------------------- */
  /* LayoutBox */
  :global(:root) {
    --box-space: var(--s-1);
  }

  :global(.box) {
    padding: var(--box-space);
  }

  /* LayoutCenter */
  :global(:root) {
    --center-space: var(--s-1);
    --center-measure: var(--measure);
  }

  :global(.center) {
    box-sizing: content-box;
    margin-left: auto;
    margin-right: auto;
    max-width: var(--center-measure);
    padding-left: var(--center-space);
    padding-right: var(--center-space);
  }

  /* LayoutCover */
  :global(:root) {
    --cover-space: 1rem;
    --cover-height: 100vh;
  }

  :global(.cover) {
    display: flex;
    flex-direction: column;
    min-height: var(--cover-height);
    padding: var(--cover-space);
    position: relative;
    overflow: hidden;
  }

  :global(.cover > *) {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  :global(.cover > :first-child:not(.centered)) {
    margin-top: 0;
  }

  :global(.cover > :last-child:not(.centered)) {
    margin-bottom: 0;
  }

  :global(.cover > .centered) {
    margin-top: auto;
    margin-bottom: auto;
  }

  /* LayoutCluster */
  :global(:root) {
    --cluster-space: var(--s-1);
    --cluster-justify-content: flex-start;
  }

  :global(.cluster) {
    overflow: hidden;
  }

  :global(.cluster > *) {
    display: flex;
    flex-wrap: wrap;
    justify-content: var(--cluster-justify-content);
    align-items: center;
    margin: calc(var(--cluster-space) / 2 * -1);
  }

  :global(.cluster > * > *) {
    margin: calc(var(--cluster-space) / 2);
  }

  :global(.cluster > * > .grow) {
    flex-grow: 2;
  }

  :global(.cluster__split-after) {
    flex-grow: 1;
  }

  :global(.cluster ul) {
    list-style: none;
    max-width: none;
    padding: 0;
  }

  :global(.clusetr li) {
    /* // Remove default padding and add extra */
    padding: 0;
  }

  /* LayoutGrid */
  :global(:root) {
    --grid-space: var(--s-1);
  }

  :global(.grid) {
    display: grid;
    grid-gap: var(--grid-space);
    grid-template-columns: 100%;
  }

  :global(.grid.above-min) {
    grid-template-columns: repeat(auto-fit, minmax(var(--grid-min-width), 1fr));
  }

  /* LayoutStack */
  :global(:root) {
    --stack-space: var(--s-1);
  }

  :global(.stack) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  :global(.stack > *) {
    margin: 0;
  }

  :global(.stack > * + *) {
    margin-top: var(--stack-space);
  }

  :global(.stack:only-child) {
    height: 100%;
  }

  :global(.stack > .split-before) {
    margin-bottom: auto;
  }

  /* LayoutSwitcher */
  :global(:root) {
    --switcher-space: var(--s-1);
    --switcher-min-width: var(--measure);
  }

  :global(.switcher > *) {
    display: flex;
    flex-wrap: wrap;
    --space-between: var(--switcher-space);
    --modifier: calc(var(--switcher-min-width) - (100% - var(--space-between)));
    margin: calc((var(--space-between) / 2) * -1);
  }

  :global(.switcher > * > *) {
    flex-grow: 1;
    flex-basis: calc(var(--modifier) * 999);
    margin: calc(var(--space-between) / 2);
  }

  /* If there are more than 7 items, stack them automatically */
  :global(.switcher > * > :nth-last-child(n + 8), .switcher
      > *
      > :nth-last-child(n + 8)
      ~ *) {
    flex-basis: 100%;
  }

  :global(.switcher ul) {
    list-style: none;
    max-width: none;
    padding: 0;
  }

  :global(.switcher li) {
    /* Remove default padding */
    padding: 0;
  }
</style>
