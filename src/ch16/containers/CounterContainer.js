import React from "react";
import Counter from "../components/Counter";
import {connect} from "react-redux";
import {decrease, increase} from "../modules/counter";
import {bindActionCreators} from "redux";

const CounterContainer = ({number, increase, decrease}) => {
    return <Counter number={number} onIncrease={increase} onDecrease={decrease}/>
};

const mapStateToProps = state => (
    {
        number: state.counter.number,
    }
);

// const mapDispatchToProps = dispatch => ({
//     increase: () => {
//         dispatch(increase())
//     },
//     decrease: () => {
//         dispatch(decrease())
//     }
// });
//
//
// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

export default connect(
    state => ({
        number: state.counter.number,
    }),
    dispatch =>
        bindActionCreators(
            {
                increase,
                decrease
            },
            dispatch,
        ),
)(CounterContainer);
