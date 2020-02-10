import React, { Fragment, useEffect, useState } from "react";

import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
  return props => {
    const [error, setError] = useState(null);

    useEffect(() => {
      axios.interceptors.request.use(req => {
        setError(null);
        return req;
      });

      axios.interceptors.response.use(
        res => res,
        error => setError(error)
      );
    }, []);

    const errorConfirmedHandler = () => {
      setError(null);
    };

    return (
      <Fragment>
        <Modal show={error} modalClosed={errorConfirmedHandler}>
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </Fragment>
    );
  };
};

export default withErrorHandler;
