import { useState } from 'react';

const useForm = (defaultState) => {
    const [state, setState] = useState(defaultState);

    return [
        state,
        (e) => {
            e.target
                ? setState((currState) => ({
                      ...currState,
                      [e.target.name]: e.target.value,
                  }))
                : setState((currState) => ({
                      ...currState,
                      ...e
                  }));
        },
    ];
};

export default useForm;
