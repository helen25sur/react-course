import componentsImage from "./assets/components.png";
import propsImage from "./assets/config.png";
import jsxImage from "./assets/jsx-ui.png";
import stateImage from "./assets/state-mgmt.png";

export const CORE_CONCEPTS = [
    {title: 'Components', description: 'The core UI building block - compose the user interface by combining multiple components.', image: componentsImage},
    {title: 'JSX', description: 'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.', image: jsxImage},
    {title: 'Props', description: 'Make components configurable (and therefore reusable) by passing input data to them.', image: propsImage},
    {title: 'State', description: 'React-managed data which, when changed, causes the component to re-render & the UI to update.', image: stateImage},
]