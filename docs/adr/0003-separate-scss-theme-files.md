# SCSS theme files kept as separate published stylesheets

The library ships two compiled CSS files (`static/css/light.css`, `static/css/dark.css`) built from SCSS source. These are published alongside the component source and imported independently by consumers. This approach is preserved rather than inlining CSS into components because it allows consumers to apply a theme globally without re-importing components, and enables runtime theme switching. Inlining would couple visual theming to component import order and make global overrides harder.
