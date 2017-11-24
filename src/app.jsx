import React from 'react';
import ReactDOM from 'react-dom';
import Store from './store';
import {createStore} from './reduxStore';

const initialState = { count : 0 };

function reducer(state = { count: 0 }, action) {
    switch (action.type) {
        case 'INCREMENT' : return { count: state.count + action.count };
        case 'DECREMENT' : return { count: state.count - action.count };
        case 'RESET' : return { count : 0 };
        default: return state;
    }
}

const incrementAction = (amount) => {
    return {type: 'INCREMENT', count: amount};
};
const decrementAction = (amount) => {
    return {type: 'DECREMENT', count: amount};
};
const resetAction = () => {
    return {type: 'RESET'};
};



// const store = createStore(reducer, initialState);
const store = createStore(reducer);

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    componentDidMount() {
        store.subscribe(() => this.forceUpdate());
    }

    increment() {
        store.dispatch(incrementAction(parseInt(this.refs.amount.value || 1)));
    }

    decrement() {
        store.dispatch(decrementAction(parseInt(this.refs.amount.value || 1)));
    }

    reset() {
        store.dispatch(resetAction());
    }

    render() {
        return (
            <div className="counter">
                <span className="count">{store.getState().count}</span>

                <div className="buttons">
                    <button className="decrement" onClick={this.decrement}>-</button>
                    <button className="reset" onClick={this.reset}>R</button>
                    <button className="increment" onClick={this.increment}>+</button>
                </div>
                <input type="text" className="amount" ref="amount" defaultValue='1' />
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('root'));