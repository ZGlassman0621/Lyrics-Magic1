import { Media } from "react-breakpoints";

class Navigation extends React.Component {
  render() {
    return (
      <Media>
        {({ breakpoints, currentBreakpoint }) =>
          breakpoints[currentBreakpoint] > breakpoints.desktop ? (
            <DesktopNavigation />
          ) : (
            <TouchNavigation />
          )
        }
      </Media>
    );
  }
}

export default Navigation;
