import { render } from '@testing-library/react';
import { Cats } from "./Cats"
import { Provider } from "react-redux";
import { store } from "../../Store";


describe("cats test", () => {
  test('cats render test', () => {
    const component = render(
        <Provider store={store}>
            <Cats />
        </Provider>
    );

    expect(component).toMatchSnapshot();
})});
