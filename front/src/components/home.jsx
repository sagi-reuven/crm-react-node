/* eslint-disable jsx-a11y/anchor-is-valid */
import PageHeader from "./common/pageHeader";

const HomePage = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <PageHeader title="This is the home page" para="this is a paragraph" />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
          <div className="col-md-5 p-lg-5 mx-auto my-5">
            <h1 className="display-4 fw-normal">Punny headline</h1>
            <p className="lead fw-normal">
              And an even wittier subheading to boot. Jumpstart your marketing efforts with this
              example based on Apple’s marketing pages.
            </p>
            <a className="btn btn-outline-secondary" href="#">
              Coming soon
            </a>
          </div>
          <div className="product-device shadow-sm d-none d-md-block"></div>
          <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
        <div className="product-device shadow-sm d-none d-md-block"></div>
      </div>
    </>
  );
};

export default HomePage;
