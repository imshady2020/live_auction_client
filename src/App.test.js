import { render, screen } from "@testing-library/react"
import ReactDOM from "react-dom"
import App from "./App"
import { Provider } from "react-redux"
import store from "./Store/Store"
import "jest-dom/extend-expect"
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
it("render without crashing", () => {
  const container = document.createElement("div")
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    container
  )
})
